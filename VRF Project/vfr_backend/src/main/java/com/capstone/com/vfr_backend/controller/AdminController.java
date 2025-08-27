package com.capstone.com.vfr_backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.com.vfr_backend.Dto.FeedbackDto;
import com.capstone.com.vfr_backend.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    // --- Feedback Management ---
    @GetMapping("/feedback")
    public ResponseEntity<List<FeedbackDto>> getAllFeedback() {
        return ResponseEntity.ok(adminService.getAllFeedback());
    }

    @GetMapping("/vaspacks/{id}/feedback")
    public ResponseEntity<List<FeedbackDto>> getFeedbackForPack(@PathVariable(name="id") Long PackId) {
        return ResponseEntity.ok(adminService.getFeedbackForPack(PackId));
    }

    // // --- Analytics APIs ---
    // @GetMapping("/analytics/ratings/average")
    // public ResponseEntity<Double> getOverallAverageRating() {
    //     // calculate and return overall avg
    // }

    // @GetMapping("/analytics/ratings/vaspacks/{id}")
    // public ResponseEntity<Double> getAverageRatingForPack(@PathVariable Long id) {
    //     // calculate avg rating for one pack
    // }

    // @GetMapping("/analytics/vaspacks/top-rated")
    // public ResponseEntity<List<VASPackDto>> getTopRatedPacks() {
    //     // return packs sorted by avg rating
    // }

    // // --- Future (Word Cloud & Sentiment Analysis) ---
    // @GetMapping("/analytics/feedback/wordcloud")
    // public ResponseEntity<Map<String, Integer>> getWordCloud() {
    //     // generate frequency map of words
    // }

    // @GetMapping("/analytics/feedback/sentiment")
    // public ResponseEntity<Map<String, Double>> getSentimentAnalysis() {
    //     // return sentiment score distribution
    // }
}

