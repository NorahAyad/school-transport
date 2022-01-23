package com.example.demo.School;

import com.example.demo.Driver.Driver;
import com.example.demo.User.User;
import com.example.demo.student.Student;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "School")
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private float latitude;
    private float longitude;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "school")
        private List<Driver> drive = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "school")
    private List<Student> student = new ArrayList<>();


    @OneToOne (fetch = FetchType.EAGER)
    @JoinColumn(name ="user_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private User user;
    public School() {

    }

    public School(long id, String name, float latitude, float longitude, List<Driver> drive, List<Student> student, User user) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.drive = drive;
        this.student = student;
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public List<Driver> getDrive() {
        return drive;
    }

    public void setDrive(List<Driver> drive) {
        this.drive = drive;
    }

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
