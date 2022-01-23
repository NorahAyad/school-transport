package com.example.demo.student;

import com.example.demo.Driver.Driver;
import com.example.demo.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepo extends JpaRepository<Student, Long> {
    public List<Student> findAllByisActiveAm(boolean isActiveAm);
    public List<Student> findAllByisActivePm(boolean isActiveAm);
    public Student findByUser_username(String username);

}
