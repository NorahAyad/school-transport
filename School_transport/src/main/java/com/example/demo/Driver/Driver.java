package com.example.demo.Driver;

import com.example.demo.School.School;
import com.example.demo.User.User;
import com.example.demo.student.Student;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Drives")
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fName;
    private String lName;
    @Column(unique=true)
    private String phone;
    private float latitude;
    private float longitude;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "drive")
    private List<Student> student = new ArrayList<>();


    @ManyToOne(fetch = FetchType.EAGER ,optional = true)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name ="school_id")
    private School school;
    @OneToOne (fetch = FetchType.EAGER,optional = false)
    @JoinColumn(name ="user_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private User user;

    public Driver() {

    }

    public Driver(Long id, String fName, String lName, String phone, float latitude, float longitude, List<Student> student, School school, User user) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
        this.latitude = latitude;
        this.longitude = longitude;
        this.student = student;
        this.school = school;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
