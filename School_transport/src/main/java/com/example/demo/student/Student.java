package com.example.demo.student;

import com.example.demo.Driver.Driver;
import com.example.demo.School.School;
import com.example.demo.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "Students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String fName;
    private String lName;
    private String phone;
    private float latitude;
    private float longitude;
    private boolean isActiveAm = true;
    private boolean isActivePm = true;

//        @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER ,optional = true)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name ="drive_id")

    private Driver drive;


    @ManyToOne (fetch = FetchType.EAGER,optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name ="school_id")
    private School school;

    @OneToOne (fetch = FetchType.EAGER,optional = false)
    @JoinColumn(name ="user_id")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private User user;

    public Student() {
    }

    public Student(Long id, String fName, String lName, String phone, float latitude, float longitude, boolean isActiveAm, boolean isActivePm, Driver drive, School school, User user) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
        this.latitude = latitude;
        this.longitude = longitude;
        this.isActiveAm = isActiveAm;
        this.isActivePm = isActivePm;
        this.drive = drive;
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

    public boolean getisActiveAm() {
        return isActiveAm;
    }

    public void setActiveAm(boolean activeAm) {
       this.isActiveAm = activeAm;
    }

    public boolean getisActivePm() {
        return isActivePm;
    }

    public void setActivePm(boolean activePm) {
       this. isActivePm = activePm;
    }

    public Driver getDrive() {
        return drive;
    }

    public void setDrive(Driver drive) {
        this.drive = drive;
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

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", phone='" + phone + '\'' +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", isActiveAm=" + isActiveAm +
                ", isActivePm=" + isActivePm +
                ", drive=" + drive +
                ", school=" + school +
                ", user=" + user +
                '}';
    }
}
