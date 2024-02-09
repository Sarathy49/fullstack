package com.eventmanagement.sarathy.dto.response;

import java.util.List;

import com.eventmanagement.sarathy.model.Event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User_EventResponse {
    private String message;
    private List<Event> data;

}
