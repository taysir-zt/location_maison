package com.example.maisondhote.repository;

import com.example.maisondhote.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    // Récupérer les réservations pour une maison
    List<Reservation> findByHomeId(int homeId);
}
