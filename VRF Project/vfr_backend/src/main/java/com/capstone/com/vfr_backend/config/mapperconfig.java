package com.capstone.com.vfr_backend.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class mapperconfig {
    
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
