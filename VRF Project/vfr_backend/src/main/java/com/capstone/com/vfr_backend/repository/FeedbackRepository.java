package com.capstone.com.vfr_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.com.vfr_backend.model.Feedback;

public interface  FeedbackRepository extends JpaRepository<Feedback, Long>{

    List<Feedback> findByUsers_UserId(Long userId);
    
}
