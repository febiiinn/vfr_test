package com.capstone.com.vfr_backend.controller;

import com.capstone.com.vfr_backend.dto.AuthRequest;
import com.capstone.com.vfr_backend.dto.AuthResponse;
import com.capstone.com.vfr_backend.model.User;
import com.capstone.com.vfr_backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody AuthRequest request, @RequestParam(defaultValue = "USER") String role) {
        authService.registerUser(request, role);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
      User user = authService.authenticate(request);
      return new AuthResponse(user.getUsername(), user.getRole());
}

}