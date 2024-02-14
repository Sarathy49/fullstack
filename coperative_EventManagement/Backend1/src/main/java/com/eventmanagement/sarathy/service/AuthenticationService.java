package com.eventmanagement.sarathy.service;

import com.eventmanagement.sarathy.dto.request.LoginRequest;
import com.eventmanagement.sarathy.dto.request.RegisterRequest;
import com.eventmanagement.sarathy.dto.response.LoginResponse;
import com.eventmanagement.sarathy.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register (RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
