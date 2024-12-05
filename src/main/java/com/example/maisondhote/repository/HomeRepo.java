package com.example.maisondhote.repository;

import com.example.maisondhote.entity.Home;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

public interface HomeRepo extends JpaRepository<Home, Integer> {

    @Query("SELECT h FROM Home h WHERE h.id NOT IN (SELECT r.home.id FROM Reservation r WHERE r.startDate <= :endDate AND r.endDate >= :startDate)")
    List<Home> findAvailableHouses(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
    List<Home> findByTypeVue(String typeVue);

}
