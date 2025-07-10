package com.cognizant.springLearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringApplication.class);

    public static void main(String[] args) {
            LOGGER.debug("START"); // <-- triggers a log
            displayCountry();
            LOGGER.debug("END");
        }



    public static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
            System.out.println("Country: " + country);
        }

    }

