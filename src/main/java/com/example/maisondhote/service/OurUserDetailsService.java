package com.example.maisondhote.service;

import com.example.maisondhote.entity.OurUsers;
import com.example.maisondhote.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OurUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepo usersRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usersRepo.findByEmail(username).orElseThrow();
    }

    public OurUsers getUserById(int userId) {
        return usersRepo.findById(userId).orElseThrow();
    }

    public Optional<OurUsers> findById(int userId) {
        return  usersRepo.findById(userId);
    }
}
