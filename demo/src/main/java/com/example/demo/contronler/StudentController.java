package com.example.demo.contronler;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    @GetMapping("/students")
    private List<Student> getListStudent(){
        List<Student> list = new ArrayList<>();
        list = studentService.getList();
        return list;
    }

    @PostMapping("/student")
    private  String createStudent(@RequestBody Student student){

        // Student student = new Student(  1,"le nhu tam", "soledad@gmail.com");
        studentService.create(student);
        return "ok";
    }

    @PutMapping("/student")
    private  String updateStudent(@RequestBody Student student){
        // Student student = new Student(  1,"le nhu tam", "soledad@gmail.com");
        studentService.update(student);
        return "ok";
    }

    @DeleteMapping("student")
    private Boolean deleteStudent(@RequestParam int studentId){
        return studentService.deleteStudent(studentId);
    }

    @GetMapping("student")
    private Optional<Student> getStudent(@RequestParam int studentId){
        return studentService.getStudentById(studentId);
    }
}
