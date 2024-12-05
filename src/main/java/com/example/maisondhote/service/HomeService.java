package com.example.maisondhote.service;

import com.example.maisondhote.entity.Home;
import com.example.maisondhote.repository.HomeRepo;
import com.example.maisondhote.repository.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HomeService {

    @Autowired
    private HomeRepo homeRepo;
    @Autowired
    private ReservationRepo reservationRepo;


    public List<Home> getAllHomes(){
        return homeRepo.findAll();
    }

    public List<Home> getHomesByTypeVue(String TypeVue){
        return homeRepo.findByTypeVue(TypeVue);
    }

    public Home getHomeById(int id){
        return homeRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Home not found"));
    }

    public Home addHome(Home home){
        return homeRepo.save(home);
    }




}
