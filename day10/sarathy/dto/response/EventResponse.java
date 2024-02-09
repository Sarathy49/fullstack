package com.eventmanagement.sarathy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventResponse {
    private Long eventId;
    private String eventType;
    private String eventName;
    private String description;
    private Integer date;
    private Integer eventCharges;
    private Integer duration;


}
