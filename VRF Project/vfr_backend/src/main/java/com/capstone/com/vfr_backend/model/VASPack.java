package com.capstone.com.vfr_backend.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class VASPack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pack_id")
    private Long packId;

    @NotBlank(message = "Pack title is required")
    @Size(min = 3, max = 100, message = "Title must be between 3 and 100 characters")
    @Column(name = "pack_title", nullable = false, length = 100)
    private String packTitle;
    
    @NotBlank(message = "Description is required")
    @Size(min = 10, max = 500, message = "Description must be between 10 and 500 characters")
    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy="vasPack")
    private List<Feedback> feedbacks;
}
