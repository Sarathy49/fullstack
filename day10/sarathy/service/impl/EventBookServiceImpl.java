package com.eventmanagement.sarathy.service.impl;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.eventmanagement.sarathy.Repository.EventBookRepository;
import com.eventmanagement.sarathy.dto.request.BookingRequest;
import com.eventmanagement.sarathy.dto.response.BookingResponse;
import com.eventmanagement.sarathy.model.Booking;
import com.eventmanagement.sarathy.service.EventBookService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class EventBookServiceImpl implements EventBookService{
   
    private final EventBookRepository eventBookRepository;

    public List<BookingResponse> getAllEventBookings() {
        List<Booking> eventBookings = eventBookRepository.findAll();
        return eventBookings.stream().map(this::mapEntityToResponse).collect(Collectors.toList());
    }

    public BookingResponse getEventBookingById(Long bookingId) {
        Booking eventBooking = eventBookRepository.findById(bookingId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event booking not found with id: " + bookingId));
        return mapEntityToResponse(eventBooking);
    }

    public BookingResponse createEventBooking(BookingRequest bookingRequest) {
        Booking eventBooking = mapRequestToEntity(bookingRequest);
        Booking createdBooking = eventBookRepository.save(eventBooking);
        return mapEntityToResponse(createdBooking);
    }

    public BookingResponse updateEventBooking(Long bookingId, BookingRequest bookingRequest) {
        Booking existingBooking = eventBookRepository.findById(bookingId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event booking not found with id: " + bookingId));

        // Update fields based on the request
        existingBooking.setEventId(bookingRequest.getEventId());
        existingBooking.setSubmissionDate(bookingRequest.getSubmissionDate());
        existingBooking.setBookingStatus(bookingRequest.getBookingStatus());
        // Update other fields as needed

        Booking updatedBooking = eventBookRepository.save(existingBooking);
        return mapEntityToResponse(updatedBooking);
    }

    public void deleteEventBooking(Long bookingId) {
        eventBookRepository.deleteById(bookingId);
    }

    // Helper methods for mapping request, entity, and response
    private Booking mapRequestToEntity(BookingRequest bookingRequest) {
        Booking eventBooking = new Booking();
        eventBooking.setEventId(bookingRequest.getEventId());
        eventBooking.setSubmissionDate(bookingRequest.getSubmissionDate());
        eventBooking.setBookingStatus(bookingRequest.getBookingStatus());
        // Map other fields as needed
        return eventBooking;
    }

    private BookingResponse mapEntityToResponse(Booking eventBooking) {
        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setBookingId(eventBooking.getBookingId());
        bookingResponse.setEventId(eventBooking.getEventId());
        bookingResponse.setSubmissionDate(eventBooking.getSubmissionDate());
        bookingResponse.setBookingStatus(eventBooking.getBookingStatus());
        // Map other fields as needed
        return bookingResponse;
    }

}
