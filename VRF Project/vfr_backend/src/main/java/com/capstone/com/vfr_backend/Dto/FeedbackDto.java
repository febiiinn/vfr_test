package com.capstone.com.vfr_backend.Dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDto {
    private Long feedbackId;
    private Integer rating;
    private String comment;
    private LocalDateTime feedbackTime;

    // Instead of embedding full User and VASPack (to avoid recursion)
    private UsersDto users;
    private Long vasPackId;
}
