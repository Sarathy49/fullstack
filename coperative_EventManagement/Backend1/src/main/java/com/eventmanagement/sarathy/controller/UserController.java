package com.eventmanagement.sarathy.controller;

import static com.eventmanagement.sarathy.utils.MyConstant.USER;
import static com.eventmanagement.sarathy.utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.sarathy.dto.response.BasicResponse;
import com.eventmanagement.sarathy.dto.response.UserResponse;
import com.eventmanagement.sarathy.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(USERLIST)
    public ResponseEntity<BasicResponse<UserResponse>> getAllUser(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response=userService.getAllUser();
            return new ResponseEntity<>(response,OK);

        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

}
