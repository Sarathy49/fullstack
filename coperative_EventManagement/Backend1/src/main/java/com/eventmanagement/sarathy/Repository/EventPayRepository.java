package com.eventmanagement.sarathy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.sarathy.model.Payment;

public interface EventPayRepository extends JpaRepository<Payment, Long>{

}
