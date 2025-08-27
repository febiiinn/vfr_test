package com.capstone.com.vfr_backend.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.capstone.com.vfr_backend.Dto.FeedbackDto;
import com.capstone.com.vfr_backend.Dto.UsersDto;
import com.capstone.com.vfr_backend.model.Feedback;
import com.capstone.com.vfr_backend.model.UType.UserType;
import com.capstone.com.vfr_backend.model.Users;
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


    public List<UsersDto> getAllUsers() {
        List<Users> userList = usersRepository.findAll();
        return userList.stream()
                .map(u -> modelMapper.map(u, UsersDto.class))
                .toList();
    }

    public List<UsersDto> getByUserId(Long userId) {
        List<Users> userList = usersRepository.findByuserId(userId);
        return userList.stream()
                .map(u -> modelMapper.map(u, UsersDto.class))
                .toList();
    }

    public List<UsersDto> getByUserEmail(String email) {
        List<Users> userList = usersRepository.findByEmail(email);
        return userList.stream()
                .map(u -> modelMapper.map(u, UsersDto.class))
                .toList();
    }

    public List<UsersDto> getByUserName(String userName) {
        List<Users> userList = usersRepository.findByusername(userName);
        return userList.stream()
                .map(u -> modelMapper.map(u, UsersDto.class))
                .toList();
    }

    public List<UsersDto> getByUserRole(UserType role) {
        List<Users> userList = usersRepository.findByrole(role);
        return userList.stream()
                .map(u -> modelMapper.map(u, UsersDto.class))
                .toList();
    }
    public List<FeedbackDto> getAllFeedback() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().map(f -> modelMapper.map(f, FeedbackDto.class)).toList();
    }

    public List<FeedbackDto> getFeedbackForPack(Long packId) {
        List<Feedback> packFeedbackList = vasPackRepository.findById(packId).get().getFeedbacks();
        return packFeedbackList.stream().map(f -> modelMapper.map(f, FeedbackDto.class)).toList();

    }

    public Double getAverageRating() {
        return feedbackRepository.findAverageRating().orElse(0.0);
    }

    public Double getAverageRatingForPack(Long vasPackId) {
        if (vasPackId == null || vasPackId <= 0) {
            throw new IllegalArgumentException("Invalid vasPackId: " + vasPackId);
        }
        return feedbackRepository.findAverageRatingByVasPackId(vasPackId).orElse(0.0);
    }

    
    
}
