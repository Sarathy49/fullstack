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

import com.eventmanagement.sarathy.dto.request.BookingRequest;
import com.eventmanagement.sarathy.dto.response.BookingResponse;
import com.eventmanagement.sarathy.service.EventBookService;
import com.eventmanagement.sarathy.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.BOOK)
@RequiredArgsConstructor
public class EventBookController {
    
    private final EventBookService eventBookService;

    @GetMapping(MyConstant.ALLBOOK)
    public ResponseEntity<List<BookingResponse>> getAllEventBookings() {
        List<BookingResponse> eventBookings = eventBookService.getAllEventBookings();
        return ResponseEntity.ok(eventBookings);
    }

    @GetMapping(MyConstant.GETBOOKID)
    public ResponseEntity<BookingResponse> getEventBooking(@PathVariable Long bookingId) {
        BookingResponse eventBooking = eventBookService.getEventBookingById(bookingId);
        return ResponseEntity.ok(eventBooking);
    }

    @PostMapping(MyConstant.POSTBOOK)
    public ResponseEntity<BookingResponse> createEventBooking(@RequestBody BookingRequest bookingRequest) {
        BookingResponse createdBooking = eventBookService.createEventBooking(bookingRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBooking);
    }

    @PutMapping(MyConstant.PUTBOOK)
    public ResponseEntity<BookingResponse> updateEventBooking(@PathVariable Long bookingId, @RequestBody BookingRequest bookingRequest) {
        BookingResponse updatedBooking = eventBookService.updateEventBooking(bookingId, bookingRequest);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping(MyConstant.DELBOOK)
    public ResponseEntity<Void> deleteEventBooking(@PathVariable Long bookingId) {
        eventBookService.deleteEventBooking(bookingId);
        return ResponseEntity.noContent().build();
    }

}
