package com.eventmanagement.sarathy.controller;

import static com.eventmanagement.sarathy.utils.MyConstant.LOGIN;
import static com.eventmanagement.sarathy.utils.MyConstant.REGISTER;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.sarathy.dto.request.LoginRequest;
import com.eventmanagement.sarathy.dto.request.RegisterRequest;
import com.eventmanagement.sarathy.dto.response.LoginResponse;
import com.eventmanagement.sarathy.dto.response.RegisterResponse;
import com.eventmanagement.sarathy.service.AuthenticationService;
import com.eventmanagement.sarathy.utils.MyConstant;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(MyConstant.AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
    
    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register (@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try{
            response = authenticationService.register(request);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try{
            response = authenticationService.login(request);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        }
        catch(Exception e){
            // LoginResponse.builder()
            // .message("Something went wrong").token("").build();
            System.out.println(e);
            response.setMessage("Something went wrong!");
            response.setToken("");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

}
