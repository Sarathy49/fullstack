package com.eventmanagement.sarathy.service;

import com.eventmanagement.sarathy.dto.response.BasicResponse;
import com.eventmanagement.sarathy.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
