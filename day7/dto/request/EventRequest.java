package com.eventmanagement.sarathy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventRequest {
    private String eventType;
    private String eventName;
    private String description;
    private Integer date;
    private Integer eventCharges;
    private Integer duration;

}
