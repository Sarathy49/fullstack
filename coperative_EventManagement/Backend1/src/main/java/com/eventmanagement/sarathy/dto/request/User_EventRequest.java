package com.eventmanagement.sarathy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class User_EventRequest {
    public String event_id;
    public String customer_name;
    public String event_name;
    public Double payment;

}
