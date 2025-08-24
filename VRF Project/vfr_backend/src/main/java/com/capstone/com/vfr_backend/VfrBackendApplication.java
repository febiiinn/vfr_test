package com.capstone.com.vfr_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VfrBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(VfrBackendApplication.class, args);
		System.out.print("Connected");
	}

}
