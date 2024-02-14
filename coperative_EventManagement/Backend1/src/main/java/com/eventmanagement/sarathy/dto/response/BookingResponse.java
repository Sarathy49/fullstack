package com.eventmanagement.sarathy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookingResponse {
    private Long bookingId;
    private String eventName;
    private String submissionDate;
    private String eventDate;
    private String bookingStatus;

}
