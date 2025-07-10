package com.example.employeeManagement.repository;

import com.example.employeeManagement.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeDao {

    private static ArrayList<Employee> EMPLOYEE_LIST;

    @Autowired
    private List<Employee> employeeList;

    @PostConstruct
    public void init() {
        EMPLOYEE_LIST = new ArrayList<>(employeeList);
    }

    public ArrayList<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }

    public Employee getEmployeeById(int id) {
        return EMPLOYEE_LIST.stream()
                .filter(emp -> emp.getId() == id)
                .findFirst()
                .orElse(null);
    }
}