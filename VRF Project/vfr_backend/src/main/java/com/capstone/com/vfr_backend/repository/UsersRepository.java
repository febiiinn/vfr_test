package com.capstone.com.vfr_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.com.vfr_backend.model.UType.UserType;
import com.capstone.com.vfr_backend.model.Users;

public interface  UsersRepository extends JpaRepository<Users, Long>{

    List<Users> findByuserId(Long userId);

    List<Users> findByEmail(String email);

    List<Users> findByusername(String userName);

    List<Users> findByrole(UserType role);
    
}