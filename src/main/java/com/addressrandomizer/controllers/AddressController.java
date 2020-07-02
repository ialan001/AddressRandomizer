package com.addressrandomizer.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.addressrandomizer.exceptions.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class AddressController {
    @Autowired
    private ObjectMapper mapper = new ObjectMapper();

    /**
     * This endpoint return random address from supported countries
     * @return random address in the format of JsonNode
     * @throws IOException
     */
    @GetMapping("/randomizer/address")
    public JsonNode getRandomAddress() throws IOException {
        List<String> countries = new ArrayList<>();
        countries.add("United States");
        countries.add("Netherlands");
        countries.add("Mexico");
        countries.add("Canada");
        int random = new Random().nextInt(4);
        return getAddressForCountry(countries.get(random));
    }

    /**
     * This endpoint return a random address for specific country
     * @param country : country name
     * @return random address in the format of JsonNode
     * @throws IOException
     */
    @GetMapping(value = "/randomizer/address/{country}")
    public JsonNode getRandomAddress(@PathVariable String country) throws IOException {
        return getAddressForCountry(country);
    }

    /**
     * This endpoint returns all stored addresses for specific country
     * @param country : country name
     * @return all addresses in the format of JsonNode
     * @throws IOException
     */
    @GetMapping("/randomizer/address/all/{country}")
    public JsonNode getCountryAddress(@PathVariable String country) throws IOException {
        switch (country) {
            case "United States":
                return mapper.readTree(new File("src/main/resources/USA_data.json"));
            case "Canada":
                return mapper.readTree(new File("src/main/resources/Canada_data.json"));
            case "Mexico":
                return mapper.readTree(new File("src/main/resources/Mexico_data.json"));
            case "Netherlands":
                return mapper.readTree(new File("src/main/resources/Netherlands_data.json"));
            default:
                throw new CountryNotFoundException(country);
        }
    }

    /**
     * This is a helper for method, it returns a random address for country
     * @param country: country name
     * @return random address in the format of JsonNode
     * @throws IOException
     */
    private JsonNode getAddressForCountry(String country) throws IOException {
        String path = "";
        switch (country) {
            case "United States":
                path = "src/main/resources/USA_data.json";
                break;
            case "Canada":
                path = "src/main/resources/Canada_data.json";
                break;
            case "Mexico":
                path = "src/main/resources/Mexico_data.json";
                break;
            case "Netherlands":
                path = "src/main/resources/Netherlands_data.json";
                break;
            default:
                throw new CountryNotFoundException(country);
        }
        JsonNode countryX = mapper.readTree(new File(path));
        int random = new Random().nextInt(countryX.get("defaultSize").asInt());
        return countryX.get("addressList").get(random);
    }
}
