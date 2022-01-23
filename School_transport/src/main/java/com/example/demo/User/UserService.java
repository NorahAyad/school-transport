package com.example.demo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class UserService implements UserDetailsService{
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= userRepo.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User not exist");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        authorities.add(new SimpleGrantedAuthority(user.getRole()));


        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),authorities);
    }

    public List<User> getUsers(){
        return userRepo.findAll();
    }

    public User createUser(User user){

        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        passwordEncoder.
        return userRepo.save(user);
    }

    public void updateUser(String id){
        long longId = parseLong(id);
        User user = userRepo.findById(longId).orElse(null);
        userRepo.save(user);
    }

    public User getUserName(String username) {
        User user= userRepo.findByUsername(username);
//         if()
        return null;
    }
}
