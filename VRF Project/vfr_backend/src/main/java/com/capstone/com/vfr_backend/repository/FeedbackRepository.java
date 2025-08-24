package com.capstone.com.vfr_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.com.vfr_backend.model.Feedback;

public interface  FeedbackRepository extends JpaRepository<Feedback, Long>{
    
}
