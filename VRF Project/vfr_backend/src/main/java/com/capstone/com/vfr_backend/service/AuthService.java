package com.capstone.com.vfr_backend.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.capstone.com.vfr_backend.dto.AuthRequest;
import com.capstone.com.vfr_backend.model.User;
import com.capstone.com.vfr_backend.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private MessageCentralService messageCentralService;

    public User registerUser(AuthRequest request, String role) throws Exception {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        if (userRepository.findByPhoneNumber(request.getPhoneNumber()).isPresent()) {
            throw new RuntimeException("Phone number already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(role);
        user.setEmail(request.getEmail()); // Make sure email exists in AuthRequest
        user.setPhoneNumber(request.getPhoneNumber()); // Same here
        user.setCreatedAt(LocalDateTime.now());
        user.setVerified(false); // Initially not verified

        User savedUser = userRepository.save(user);

        // Send OTP via Message Central
        messageCentralService.sendOtp(user.getPhoneNumber());
        System.out.println("OTP send request completed.");

        return savedUser;
    }

    public User authenticate(AuthRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        if (!user.isVerified()) {
            throw new RuntimeException("User is not verified. Please complete OTP verification.");
        }

        return user;
    }

    public boolean verifyOtpAndActivateUser(String phoneNumber, String otp) throws Exception {
        boolean verified = messageCentralService.verifyOtp(phoneNumber, otp);
        if (verified) {
            Optional<User> userOpt = userRepository.findByPhoneNumber(phoneNumber);
            if (userOpt.isPresent()) {
                User user = userOpt.get();
                user.setVerified(true);
                userRepository.save(user);
                return true;
            }
        }
        return false;
    }

}
