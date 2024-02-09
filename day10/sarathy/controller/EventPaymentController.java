package com.eventmanagement.sarathy.controller;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.sarathy.dto.request.PaymentRequest;
import com.eventmanagement.sarathy.dto.response.PaymentResponse;
import com.eventmanagement.sarathy.service.EventPayService;
import com.eventmanagement.sarathy.utils.MyConstant;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(MyConstant.PAY)
@RequiredArgsConstructor
public class EventPaymentController {
    
    private final EventPayService eventPayService;

    @GetMapping(MyConstant.ALLPAY)
    public ResponseEntity<List<PaymentResponse>> getAllEventPayments() {
        List<PaymentResponse> eventPayments = eventPayService.getAllEventPayments();
        return ResponseEntity.ok(eventPayments);
    }

    @GetMapping(MyConstant.GETPAYID)
    public ResponseEntity<PaymentResponse> getEventPayment(@PathVariable Long paymentId) {
        PaymentResponse eventPayment = eventPayService.getEventPaymentById(paymentId);
        return ResponseEntity.ok(eventPayment);
    }

    @PostMapping(MyConstant.POSTPAY)
    public ResponseEntity<PaymentResponse> createEventPayment(@RequestBody PaymentRequest paymentRequest) {
        PaymentResponse createdPayment = eventPayService.createEventPayment(paymentRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPayment);
    }

    @PutMapping(MyConstant.PUTPAY)
    public ResponseEntity<PaymentResponse> updateEventPayment(@PathVariable Long paymentId, @RequestBody PaymentRequest paymentRequest) {
        PaymentResponse updatedPayment = eventPayService.updateEventPayment(paymentId, paymentRequest);
        return ResponseEntity.ok(updatedPayment);
    }

    @DeleteMapping(MyConstant.DELPAY)
    public ResponseEntity<Void> deleteEventPayment(@PathVariable Long paymentId) {
        eventPayService.deleteEventPayment(paymentId);
        return ResponseEntity.noContent().build();
    }

}
