package com.example.demo.student;

import com.example.demo.Driver.Driver;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(path = "student")
@CrossOrigin("*")
public class StudentController {
    private final StudentService studentService;
//    private final  studentServic
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping
    public ResponseEntity<List<Student>> getStudents(){
        return ResponseEntity.ok().body(studentService.getStudents());
    }
//    @GetMapping("driver/{id}")
//    public  Collection<Driver>  getDrive(@PathVariable String id )
//    {
//        return studentService.getDrive(id);
//    }
@GetMapping("getdriver/{id}")
public Student getdriver(@PathVariable String id){
    return studentService.getusername(id);
}

    @GetMapping("/{id}")
    public Student student(@PathVariable String id){
        return studentService.getStudent(id);
    }

    @GetMapping("getuser/{username}")
    public Student getusername(@PathVariable String username){
        return studentService.getusername(username);
    }

    @GetMapping("/availableAm")
    public List <Student> getDrivesByAvailableAm(){
        return studentService.getDrivesByAvailableAm();
    }
    @GetMapping("/availablePm")
    public List <Student> getDrivesByAvailablePm(){
        return studentService.getDrivesByAvailablePm();
    }
    @PostMapping
    public Student saveStudent(@RequestBody Student student){

        System.out.println("hereee");
        return studentService.saveStudent(student);
    }

    @DeleteMapping("/{id}")
    public List<Student>deleteStudent(@PathVariable String id){
       return studentService.deletStudent(id);
    }
    @PutMapping ("/{id}")
    public Student updateStudent( @PathVariable String id ,@RequestBody Student student){
        return studentService.updateStudent(id , student);
    }

}
