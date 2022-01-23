package com.example.demo.Driver;

import com.example.demo.User.User;
import com.example.demo.User.UserRepo;
import com.example.demo.student.Student;
import com.example.demo.student.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverService {
    private final DriverRepo driveRepo;
    private final StudentRepo studentRepo;
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public DriverService(DriverRepo driveRepo, StudentRepo studentRepo, UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.driveRepo = driveRepo;
        this.studentRepo = studentRepo;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }


    public List<Driver> getDrives() {
        return driveRepo.findAll();
    }

    public Driver getDrive(Driver drive) {
        User user=userRepo.findById(drive.getUser().getId()).orElse(null);
        drive.setUser(user);
        System.out.println(user.getId());
        return driveRepo.save(drive);

    }

    public List<Driver> addStudentsToDrive(Driver driveId, Long studentId) {
        Driver drive = driveRepo.findById(driveId.getId()).orElse(null);
        Student student = studentRepo.findById(studentId).orElse(null);
        student.setDrive(drive);
        System.out.println(student.getDrive().getId());
        studentRepo.save(student);
          driveRepo.save(drive);
        return  driveRepo.findAll();
    }

    public List<Driver> deletDrive(String id) {
        Long Drive_id = Long.parseLong(id);
        driveRepo.deleteById(Drive_id);
        return  driveRepo.findAll();
    }

    public Driver updateDrive(String id, Driver data) {
        Long student_id = Long.parseLong(id);
        Driver driver = driveRepo.findById(student_id).orElse(null);

        if (driver != null) {
            driver.setLatitude(data.getLongitude());
            driver.setLongitude(data.getLongitude());
            driver.setPhone(data.getPhone());

            driveRepo.save(driver);
        }
        return driver;
    }

    public Driver getusername(String username) {
        Driver driver= driveRepo.findByUser_username(username);
        return driver;
    }


}