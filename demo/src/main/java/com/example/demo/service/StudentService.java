package com.example.demo.service;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getList (){
        return studentRepository.findAll();
    }


    public String create (Student student){ studentRepository.save(student); return "ok";}
    public String update (Student student){ studentRepository.save(student); return "ok";}
    public boolean  deleteStudent (int studentId){ studentRepository.deleteById(studentId); return true;}

    public Optional<Student> getStudentById(int studentId) { return studentRepository.findById(studentId);}

}
