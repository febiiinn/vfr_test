package com.capstone.com.vfr_backend.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class MessageCentralService {

    @Value("${messagecentral.authToken}")
    private String authToken;

    @Value("${messagecentral.customerId}")
    private String customerId;

    @Value("${messagecentral.countryCode}")
    private String countryCode;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    private static final String BASE_URL = "https://cpaas.messagecentral.com/verification/v3";

    // Store verificationId per phone number for OTP validation
    private final Map<String, String> verificationIdMap = new ConcurrentHashMap<>();

    public void sendOtp(String phoneNumber) throws Exception {
        String url = String.format("%s/send?countryCode=%s&customerId=%s&flowType=SMS&type=OTP&mobileNumber=%s",
                BASE_URL, countryCode, customerId, phoneNumber);

        HttpHeaders headers = new HttpHeaders();
        headers.set("authToken", authToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>("", headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

        System.out.println("OTP Send Response: " + response.getBody());

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            JsonNode root = objectMapper.readTree(response.getBody());
            JsonNode verificationNode = root.path("data").path("verificationId");

            if (verificationNode.isMissingNode() || verificationNode.asText().isEmpty()) {
                throw new Exception("verificationId not found in response");
            }

            String verificationId = verificationNode.asText();
            verificationIdMap.put(phoneNumber, verificationId);
        } else {
            throw new Exception("Failed to send OTP, HTTP code: " + response.getStatusCode());
        }
    }

    public boolean verifyOtp(String phoneNumber, String otp) throws Exception {
        String verificationId = verificationIdMap.get(phoneNumber);

        if (verificationId == null) {
            System.out.println("No verificationId found for phone number: " + phoneNumber);
            throw new Exception("OTP expired or not sent. Please request a new OTP.");
        }

        String url = String.format("%s/validateOtp?verificationId=%s&code=%s",
                BASE_URL, verificationId, otp);

        HttpHeaders headers = new HttpHeaders();
        headers.set("authToken", authToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>("", headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        System.out.println("OTP Verify Response: " + response.getBody());
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            try {
                JsonNode root = objectMapper.readTree(response.getBody());

                // Try both possible paths
                JsonNode statusNode = root.path("data").path("verificationStatus");
                if (statusNode.isMissingNode() || statusNode.asText().isEmpty()) {
                    statusNode = root.path("verificationStatus"); // fallback if no "data" wrapper
                }

                String status = statusNode.asText();
                if (status == null || status.isEmpty()) {
                    throw new Exception("verificationStatus not found in response");
                }

                return "VERIFICATION_COMPLETED".equalsIgnoreCase(status);

            } catch (Exception e) {
                System.out.println("Error parsing OTP response: " + e.getMessage());
                throw new Exception("Internal server error during OTP verification");
            }
        } else {
            throw new Exception("Failed to verify OTP, HTTP code: " + response.getStatusCode());
        }
    }

}
