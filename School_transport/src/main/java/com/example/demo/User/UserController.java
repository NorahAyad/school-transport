package com.example.demo.User;

import com.example.demo.student.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{username}")
    public User getUserName(@PathVariable String username){
        return userService.getUserName(username);
    }
    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id){
        userService.updateUser(id);
    }
}

