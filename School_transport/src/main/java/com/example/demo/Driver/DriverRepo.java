package com.example.demo.Driver;

import com.example.demo.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver, Long> {
    public Driver findByUser_username(String username);

}
