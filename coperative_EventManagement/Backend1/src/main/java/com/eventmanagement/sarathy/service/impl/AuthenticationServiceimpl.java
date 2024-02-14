package com.eventmanagement.sarathy.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eventmanagement.sarathy.Repository.UserRepository;
import com.eventmanagement.sarathy.dto.request.LoginRequest;
import com.eventmanagement.sarathy.dto.request.RegisterRequest;
import com.eventmanagement.sarathy.dto.response.LoginResponse;
import com.eventmanagement.sarathy.dto.response.RegisterResponse;
import com.eventmanagement.sarathy.enumerated.Role;
import com.eventmanagement.sarathy.model.User;
import com.eventmanagement.sarathy.service.AuthenticationService;
import com.eventmanagement.sarathy.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class AuthenticationServiceimpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;




    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+ request.getEmail()+" is already exists!").build();
        }
           
    var user =User.builder()
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
    userRepository.save(user);
    return RegisterResponse.builder().message("User created successfully!").build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        Map<String,Object> extraClaims = new HashMap<>();
        extraClaims.put("id",user.getId());
        extraClaims.put("role",user.getRole());
        String token = jwtUtil.generateToken(user);
        return LoginResponse.builder().message("User logged in successfully!")
                                        .token(token)
                                        .build();
       
    }


}
