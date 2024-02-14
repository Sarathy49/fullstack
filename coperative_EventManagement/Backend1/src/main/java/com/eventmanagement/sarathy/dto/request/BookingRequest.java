package com.eventmanagement.sarathy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookingRequest {
    private String eventName;
    private String submissionDate;
    private String eventDate;
    private String bookingStatus;
}
