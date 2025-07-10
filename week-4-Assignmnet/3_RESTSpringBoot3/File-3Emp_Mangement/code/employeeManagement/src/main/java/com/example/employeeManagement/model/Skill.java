package com.example.employeeManagement.model;

public class Skill {
    private int id;
    private String name;
    private String level;

    // Constructors
    public Skill() {}

    public Skill(int id, String name, String level) {
        this.id = id;
        this.name = name;
        this.level = level;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}