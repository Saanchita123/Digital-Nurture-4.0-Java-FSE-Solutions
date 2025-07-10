package com.cognizant.springLearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {


    private String name;
    private String code;
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);
    public Country(String name, String code) {
        this.name = name;
        this.code = code;
    }
    public Country() {
        LOGGER.debug("Country Constructor");
    }
    public String getName() {
        LOGGER.debug("inside getName");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("inside setName");
        this.name = name;
    }

    public String getCode() {
        LOGGER.debug("inside getCode");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("inside setCode");
        this.code = code;
    }

    public String toString() {
        return "Country{" + "name=" + name + ", code=" + code + '}';
    }

}
