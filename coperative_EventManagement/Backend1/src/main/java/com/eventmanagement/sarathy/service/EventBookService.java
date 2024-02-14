package com.eventmanagement.sarathy.service;

import java.util.List;

import com.eventmanagement.sarathy.dto.request.BookingRequest;
import com.eventmanagement.sarathy.dto.response.BookingResponse;

public interface EventBookService {
    List<BookingResponse> getAllEventBookings();
    BookingResponse getEventBookingById(Long bookingId);
    BookingResponse createEventBooking(BookingRequest bookingRequest);
    BookingResponse updateEventBooking(Long bookingId, BookingRequest bookingRequest);
    void deleteEventBooking(Long bookingId);

}
