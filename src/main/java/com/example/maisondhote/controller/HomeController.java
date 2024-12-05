package com.example.maisondhote.controller;

import com.example.maisondhote.entity.Home;
import com.example.maisondhote.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")  // Permet les requêtes depuis localhost:3000
@RestController
@RequestMapping("/api/homes")
public class HomeController {

    @Autowired
    private HomeService homeService;

    @GetMapping("/listhome")
    public List<Home> getAllHomes(){
        return homeService.getAllHomes();
    }


    @GetMapping("/{id}")
    public Home getHomeById(@PathVariable int id){
        return homeService.getHomeById(id);
    }

    @GetMapping("/vue/{typeVue}")
    public List<Home> getHomeByTypeVue(@PathVariable String typeVue){
        return homeService.getHomesByTypeVue(typeVue);
    }

    @PostMapping("/addhome")
    public Home addHome(@RequestBody Home home){
        return homeService.addHome(home);
    }

    // Endpoint pour obtenir les détails d'une maison
    @GetMapping("/details/{id}")
    public ResponseEntity<Home> getHomeDetails(@PathVariable int id) {
        Home home = homeService.getHomeById(id);
        if (home != null) {
            return ResponseEntity.ok(home);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }


}
