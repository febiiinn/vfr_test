package com.capstone.com.vfr_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.com.vfr_backend.model.Feedback;

public interface  FeedbackRepository extends JpaRepository<Feedback, Long>{

    List<Feedback> findByUsers_UserId(Long userId);

    @Query("SELECT AVG(f.rating) FROM Feedback f")
    Optional<Double> findAverageRating();

    @Query(value = "SELECT AVG(rating) FROM feedback WHERE vas_pack_id = ?1", nativeQuery = true)
    Optional<Double> findAverageRatingByVasPackId(Long vasPackId);
    
}
