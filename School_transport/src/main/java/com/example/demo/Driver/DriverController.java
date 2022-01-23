package com.example.demo.Driver;

import com.example.demo.student.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/driver")
@CrossOrigin("*")
public class DriverController {
    private final DriverService driveService;

    public DriverController(DriverService driveService) {
        this.driveService = driveService;
    }
    @GetMapping
    public ResponseEntity<List<Driver>> getDrives(){
        return ResponseEntity.ok().body(driveService.getDrives());
    }
    @GetMapping("getuser/{username}")
    public Driver getusername(@PathVariable String username){
        return driveService.getusername(username);
    }

    @PostMapping
    public Driver saveDrive(@RequestBody Driver drive){
        System.out.println(drive.getUser().getId());
        return driveService.getDrive(drive);
    }

    @PostMapping("/add_student")
    public List<Driver> addStudentsToDrive(@RequestBody Form form){
        return driveService.addStudentsToDrive(form.getdrive(),form.getstudentId());

    }



    @DeleteMapping("/{id}")
    public List<Driver> deleteDrive(@PathVariable String id){
        return driveService.deletDrive(id);
    }

    @PutMapping ("/{id}")
    public Driver updateDrive(@PathVariable String id , @RequestBody Driver drive){
        return driveService.updateDrive(id , drive);
    }
}

class Form {
    private Driver drive;
    private long studentId;

    public Driver getdrive() {
        return drive;
    }

    public long getstudentId() {
        return studentId;
    }
}