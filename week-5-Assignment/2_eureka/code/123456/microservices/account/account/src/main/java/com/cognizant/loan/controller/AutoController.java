package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AutoController {

    @GetMapping("/{number}")
    public Map<String,Object> getAccountDetails(@PathVariable String number)
    {
        return Map.of(
                "number",number,
                "type","savings",
                "balance",234343

        );
    }
}
