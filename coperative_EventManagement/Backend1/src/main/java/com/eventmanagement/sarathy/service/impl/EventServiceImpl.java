package com.eventmanagement.sarathy.service.impl;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.eventmanagement.sarathy.Repository.EventRepository;
import com.eventmanagement.sarathy.dto.request.EventRequest;
import com.eventmanagement.sarathy.dto.response.EventResponse;
import com.eventmanagement.sarathy.model.Event;
import com.eventmanagement.sarathy.service.EventService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService{

    
    private final EventRepository eventRepository;

    public List<EventResponse> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream().map(this::mapEntityToResponse).collect(Collectors.toList());
    }

    public EventResponse getEventById(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event not found with id: " + eventId));
        return mapEntityToResponse(event);
    }

    public EventResponse createEvent(EventRequest eventRequest) {
        Event event = mapRequestToEntity(eventRequest);
        Event createdEvent = eventRepository.save(event);
        return mapEntityToResponse(createdEvent);
    }

    public EventResponse updateEvent(Long eventId, EventRequest eventRequest) {
        Event existingEvent = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event not found with id: " + eventId));

        // Update fields based on the request
        existingEvent.setEventType(eventRequest.getEventType());
        existingEvent.setEventName(eventRequest.getEventName());
        existingEvent.setDescription(eventRequest.getDescription());
        existingEvent.setDate(eventRequest.getDate());
        existingEvent.setEventCharges(eventRequest.getEventCharges());
        existingEvent.setDuration(eventRequest.getDuration());

        Event updatedEvent = eventRepository.save(existingEvent);
        return mapEntityToResponse(updatedEvent);
    }

    public void deleteEvent(Long eventId) {
        eventRepository.deleteById(eventId);
    }

    // Helper methods for mapping request, entity, and response
    private Event mapRequestToEntity(EventRequest eventRequest) {
        Event event = new Event();
        event.setEventType(eventRequest.getEventType());
        event.setEventName(eventRequest.getEventName());
        event.setDescription(eventRequest.getDescription());
        event.setDate(eventRequest.getDate());
        event.setEventCharges(eventRequest.getEventCharges());
        event.setDuration(eventRequest.getDuration());
        return event;
    }

    private EventResponse mapEntityToResponse(Event event) {
        EventResponse eventResponse = new EventResponse();
        eventResponse.setEventId(event.getEventId());
        eventResponse.setEventType(event.getEventType());
        eventResponse.setEventName(event.getEventName());
        eventResponse.setDescription(event.getDescription());
        eventResponse.setDate(event.getDate());
        eventResponse.setEventCharges(event.getEventCharges());
        eventResponse.setDuration(event.getDuration());
        return eventResponse;
    }


}
