package com.capstone.com.vfr_backend.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.capstone.com.vfr_backend.Dto.FeedbackDto;
import com.capstone.com.vfr_backend.model.Feedback;
import com.capstone.com.vfr_backend.repository.FeedbackRepository;
import com.capstone.com.vfr_backend.repository.UsersRepository;
import com.capstone.com.vfr_backend.repository.VASPackRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final UsersRepository usersRepository;
    private final VASPackRepository vasPackRepository;
    private final FeedbackRepository feedbackRepository;
    private final ModelMapper modelMapper;

    public List<FeedbackDto> getAllFeedback() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().map(f -> modelMapper.map(f, FeedbackDto.class)).toList();
    }

    public List<FeedbackDto> getFeedbackForPack(Long packId) {
        List<Feedback> packFeedbackList = vasPackRepository.findById(packId).get().getFeedbacks();
        return packFeedbackList.stream().map(f -> modelMapper.map(f, FeedbackDto.class)).toList();

    }
    
}
