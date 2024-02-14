package com.eventmanagement.sarathy.service;

import java.util.List;

import com.eventmanagement.sarathy.dto.request.EventRequest;
import com.eventmanagement.sarathy.dto.response.EventResponse;

public interface EventService {
    List<EventResponse> getAllEvents();
    EventResponse getEventById(Long eventId);
    EventResponse createEvent(EventRequest eventRequest);
    EventResponse updateEvent(Long eventId, EventRequest eventRequest);
    void deleteEvent(Long eventId);

}
