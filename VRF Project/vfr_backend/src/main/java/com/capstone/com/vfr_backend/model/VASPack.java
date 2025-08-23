package com.capstone.com.vfr_backend.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class VASPack {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long PackId;

    private String PackTitle;

    private String description;
}
