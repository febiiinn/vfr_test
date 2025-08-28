package com.capstone.com.vfr_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class VfrBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(VfrBackendApplication.class, args);
        // BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        // System.out.println(encoder.encode("password001"));
        System.out.print("BUILD SUCCESSFUL");
    }

}
