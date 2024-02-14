package com.eventmanagement.sarathy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequest {
    private Long bookingId;
    private Integer paymentDate;
    private Integer amount;
    private String paymentStatus;

}
