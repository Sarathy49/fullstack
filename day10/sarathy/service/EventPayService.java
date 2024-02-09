package com.eventmanagement.sarathy.service;

import java.util.List;

import com.eventmanagement.sarathy.dto.request.PaymentRequest;
import com.eventmanagement.sarathy.dto.response.PaymentResponse;

public interface EventPayService {
    List<PaymentResponse> getAllEventPayments();
    PaymentResponse getEventPaymentById(Long paymentId);
    PaymentResponse createEventPayment(PaymentRequest paymentRequest);
    PaymentResponse updateEventPayment(Long paymentId, PaymentRequest paymentRequest);
    void deleteEventPayment(Long paymentId);

}
