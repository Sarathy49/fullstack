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
    private Long eventId;
    private String submissionDate;
    private String bookingStatus;

}
