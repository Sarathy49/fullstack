package com.eventmanagement.sarathy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.sarathy.model.Booking;

public interface EventBookRepository extends JpaRepository<Booking, Long>{

}
