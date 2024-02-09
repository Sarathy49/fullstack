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
@Table(name="Booking")
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long bookingId;
    @Column(nullable = false)
    private Long eventId;
    @Column(nullable = false)
    private String submissionDate;
    @Column(nullable = false)
    private String bookingStatus;
   


}
