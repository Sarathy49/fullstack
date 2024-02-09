package com.eventmanagement.sarathy.config;

import static com.eventmanagement.sarathy.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.eventmanagement.sarathy.Repository.UserRepository;
import com.eventmanagement.sarathy.model.User;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserCLI implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    
    public void run(String... args) throws Exception {
        if(userRepository.count()>0)
            return;
        var user=User.builder() 
                .name("Admin")
                .email("admin@123")
                .password(passwordEncoder.encode("Admin@123"))
                .role(ADMIN)
                .build();
        userRepository.save(user);          
    }

}
