package com.cognizant.spring_learnDemo.service;

import com.cognizant.spring_learnDemo.model.Country;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) throws Exception {
        List<Country> countries = loadCountriesFromXml();

        for (Country country : countries) {
            if (country.getCountryCode().equalsIgnoreCase(code)) { // case-insensitive
                return country;
            }
        }
        throw new Exception("Country not found: " + code);
    }

    private List<Country> loadCountriesFromXml() throws Exception {
        List<Country> countryList = new ArrayList<>();

        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("country.xml");

        if (inputStream == null) {
            throw new Exception("country.xml not found");
        }

        Document document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(inputStream);
        NodeList nodeList = document.getElementsByTagName("country");

        for (int i = 0; i < nodeList.getLength(); i++) {
            Node node = nodeList.item(i);
            if (node.getNodeType() == Node.ELEMENT_NODE) {
                Element element = (Element) node;

                Node codeNode = element.getElementsByTagName("code").item(0);
                Node nameNode = element.getElementsByTagName("name").item(0);

                if (codeNode == null || nameNode == null) {
                    throw new Exception("Invalid XML format: <code> or <name> tag missing");
                }
                String countryName = nameNode.getTextContent();
                String countryCode = codeNode.getTextContent();


                // ✅ Create Country object and add to list
                Country country = new Country(countryName, countryCode);
                countryList.add(country);
            }
        }
        return countryList;
    }
}
