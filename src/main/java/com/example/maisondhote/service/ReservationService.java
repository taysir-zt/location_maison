package com.example.maisondhote.service;

import com.example.maisondhote.entity.Home;
import com.example.maisondhote.entity.OurUsers;
import com.example.maisondhote.entity.Reservation;
import com.example.maisondhote.repository.HomeRepo;
import com.example.maisondhote.repository.ReservationRepo;
import com.example.maisondhote.repository.UsersRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepo reservationRepo;
    @Autowired
    private HomeRepo homeRepo;


    @Transactional
    public Reservation reserveHome(int houseId, Reservation reservation) {
        Home home = homeRepo.findById(houseId)
                .orElseThrow(() -> new IllegalArgumentException("Maison non trouvée"));

        reservation.setHome(home);
        return reservationRepo.save(reservation);
    }

    public List<Reservation> getReservationsByHome(int houseId) {
        return reservationRepo.findByHomeId(houseId);
    }

    public List<Home> findAvailableHouses(LocalDate startDate, LocalDate endDate) {
        List<Home> allHomes = homeRepo.findAll();
        return allHomes.stream()
            .filter(home -> isHomeAvailable(home.getId(), startDate, endDate))
            .collect(Collectors.toList());
    }

    public boolean isHomeAvailable(int homeId, LocalDate startDate, LocalDate endDate) {
        List<Reservation> existingReservations = getReservationsByHome(homeId);
        
        return existingReservations.stream().noneMatch(reservation -> 
            (startDate.isBefore(reservation.getEndDate()) || startDate.isEqual(reservation.getEndDate())) &&
            (endDate.isAfter(reservation.getStartDate()) || endDate.isEqual(reservation.getStartDate()))
        );
    }

}
