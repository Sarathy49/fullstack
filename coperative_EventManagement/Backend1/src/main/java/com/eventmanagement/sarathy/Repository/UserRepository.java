package com.eventmanagement.sarathy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.sarathy.model.User;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);

}
