package com.eventmanagement.sarathy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.sarathy.model.Event;

public interface EventRepository extends JpaRepository<Event, Long>{

}
