package com.cognizant.spring_learn1.model;

public class Country {
    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    private String countryName;
    private String countryCode;
    public Country()
    {

    }
    public Country(String countryName, String countryCode) {
        this.countryName=countryName;
        this.countryCode=countryCode;
    }
    public String getCountryName() {
        return countryName;
    }
}
