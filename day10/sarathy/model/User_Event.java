package com.eventmanagement.sarathy.model;

import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Event_details")
public class User_Event {
    @Id
    @GeneratedValue(strategy = UUID)
    @Column(nullable=false)
    private String event_id;

    @Column(nullable = false)
    private String customer_name;

    @Column(nullable = false)
    private String event_name;

    @Column(nullable = false)
    private Double payment;
    

}
