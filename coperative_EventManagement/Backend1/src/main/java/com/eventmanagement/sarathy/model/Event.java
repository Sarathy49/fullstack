package com.eventmanagement.sarathy.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name="Event")
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long eventId;
    @Column(nullable = false)
    private String eventType;
    @Column(nullable = false)
    private String eventName;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private Integer date;
    @Column(nullable = false)
    private Integer eventCharges;
    @Column(nullable = false)
    private Integer duration;

    
    
}
