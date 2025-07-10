package com.example.employeeManagement.repository;

import com.example.employeeManagement.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class DepartmentDao {

    private static ArrayList<Department> DEPARTMENT_LIST;

    @Autowired
    private List<Department> departmentList;

    @PostConstruct
    public void init() {
        DEPARTMENT_LIST = new ArrayList<>(departmentList);
    }

    public ArrayList<Department> getAllDepartments() {
        return DEPARTMENT_LIST;
    }
}