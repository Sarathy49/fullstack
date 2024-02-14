package com.eventmanagement.sarathy.service.impl;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.eventmanagement.sarathy.Repository.EventPayRepository;
import com.eventmanagement.sarathy.dto.request.PaymentRequest;
import com.eventmanagement.sarathy.dto.response.PaymentResponse;
import com.eventmanagement.sarathy.model.Payment;
import com.eventmanagement.sarathy.service.EventPayService;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class EventPayServiceImple implements EventPayService{
    
    private final EventPayRepository eventPayRepository;

    public List<PaymentResponse> getAllEventPayments() {
        List<Payment> eventPayments = eventPayRepository.findAll();
        return eventPayments.stream().map(this::mapEntityToResponse).collect(Collectors.toList());
    }

    public PaymentResponse getEventPaymentById(Long paymentId) {
        Payment eventPayment = eventPayRepository.findById(paymentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event payment not found with id: " + paymentId));
        return mapEntityToResponse(eventPayment);
    }

    public PaymentResponse createEventPayment(PaymentRequest paymentRequest) {
        Payment eventPayment = mapRequestToEntity(paymentRequest);
        Payment createdPayment = eventPayRepository.save(eventPayment);
        return mapEntityToResponse(createdPayment);
    }

    public PaymentResponse updateEventPayment(Long paymentId, PaymentRequest paymentRequest) {
        Payment existingPayment = eventPayRepository.findById(paymentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event payment not found with id: " + paymentId));

        // Update fields based on the request
        existingPayment.setBookingId(paymentRequest.getBookingId());
        existingPayment.setPaymentDate(paymentRequest.getPaymentDate());
        existingPayment.setAmount(paymentRequest.getAmount());
        existingPayment.setPaymentStatus(paymentRequest.getPaymentStatus());
        // Update other fields as needed

        Payment updatedPayment = eventPayRepository.save(existingPayment);
        return mapEntityToResponse(updatedPayment);
    }

    public void deleteEventPayment(Long paymentId) {
        eventPayRepository.deleteById(paymentId);
    }

    // Helper methods for mapping request, entity, and response
    private Payment mapRequestToEntity(PaymentRequest paymentRequest) {
        Payment eventPayment = new Payment();
        eventPayment.setBookingId(paymentRequest.getBookingId());
        eventPayment.setPaymentDate(paymentRequest.getPaymentDate());
        eventPayment.setAmount(paymentRequest.getAmount());
        eventPayment.setPaymentStatus(paymentRequest.getPaymentStatus());
        // Map other fields as needed
        return eventPayment;
    }

    private PaymentResponse mapEntityToResponse(Payment eventPayment) {
        PaymentResponse paymentResponse = new PaymentResponse();
        paymentResponse.setPaymentId(eventPayment.getPaymentId());
        paymentResponse.setBookingId(eventPayment.getBookingId());
        paymentResponse.setPaymentDate(eventPayment.getPaymentDate());
        paymentResponse.setPaymentStatus(eventPayment.getPaymentStatus());
        // Map other fields as needed
        return paymentResponse;
    }

}
