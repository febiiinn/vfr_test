package com.capstone.com.vfr_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.com.vfr_backend.dto.AuthRequest;
import com.capstone.com.vfr_backend.dto.AuthResponse;
import com.capstone.com.vfr_backend.dto.OtpVerificationRequest;
import com.capstone.com.vfr_backend.model.User;
import com.capstone.com.vfr_backend.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@Valid @RequestBody AuthRequest request) throws Exception {
        String role = "USER";
        authService.registerUser(request, role);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        User user = authService.authenticate(request);
        if (!"USER".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("ONLY USERS CAN LOGIN HERE.");
        }
        return new AuthResponse(user.getUsername(), user.getRole(), "User logged in");
    }

    @PostMapping("/admin-login")
    public AuthResponse adminLogin(@RequestBody AuthRequest request) {
        User user = authService.authenticate(request);
        if (!"ADMIN".equalsIgnoreCase(user.getRole())) {
            throw new RuntimeException("ACCESS DENIED: Not an ADMIN");
        }
        return new AuthResponse(user.getUsername(), user.getRole(), "Admin logged in");
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody OtpVerificationRequest request) throws Exception {
        authService.sendOtp(request.getPhoneNumber());
        return "OTP sent successfully.";
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody OtpVerificationRequest request) throws Exception {
        boolean success = authService.verifyOtpAndActivateUser(request.getPhoneNumber(), request.getOtp());
        return success ? "OTP verified and user activated." : "OTP verification failed.";
    }

}
