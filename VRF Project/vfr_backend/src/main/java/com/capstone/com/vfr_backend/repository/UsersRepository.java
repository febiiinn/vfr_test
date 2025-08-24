package com.capstone.com.vfr_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.com.vfr_backend.model.Users;

public interface  UsersRepository extends JpaRepository<Users, Long>{
    
}