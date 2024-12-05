package com.example.maisondhote.controller;

import com.example.maisondhote.entity.Home;
import com.example.maisondhote.entity.Reservation;
import com.example.maisondhote.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    public ReservationService reservationService;

    // Récupère toutes les réservations d'une maison par son ID
    @GetMapping("/house/{houseId}")
    public ResponseEntity<List<Reservation>> getReservationsByHouse(@PathVariable int houseId) {
        List<Reservation> reservations = reservationService.getReservationsByHome(houseId);
        return ResponseEntity.ok(reservations);
    }

    // Création de réservation (POST)
    @PostMapping("/{houseId}")
    public ResponseEntity<Reservation> createReservation(
            @PathVariable int houseId,
            @Valid @RequestBody Reservation reservation) {
        try {
            // Vérifier si la maison est disponible pour ces dates
            boolean isAvailable = reservationService.isHomeAvailable(
                houseId, 
                reservation.getStartDate(), 
                reservation.getEndDate()
            );
            
            if (!isAvailable) {
                return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .build(); // 409 Conflict
            }

            Reservation savedReservation = reservationService.reserveHome(houseId, reservation);
            return ResponseEntity.ok(savedReservation);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("/available")
    public ResponseEntity<List<Home>> getAvailableHouses(
            @RequestParam String startDate,
            @RequestParam String endDate) {
        try {
            LocalDate start = LocalDate.parse(startDate);
            LocalDate end = LocalDate.parse(endDate);

            List<Home> availableHouses = reservationService.findAvailableHouses(start, end);
            return ResponseEntity.ok(availableHouses);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.emptyList());
        }
    }
}
