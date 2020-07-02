package com.addressrandomizer.units;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.addressrandomizer.model.Country;
import com.addressrandomizer.model.RandomAddress;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class AddressRandomizerUnitTests {

    @Test
    @DisplayName("Verify that all generated addresses are unique")
    public void verifyAllAddresses() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        List<String> countries = Arrays.asList("USA", "Mexico", "Netherlands", "Canada");
        for (String country : countries) {
            String path = "src/main/resources/" + country + "_data.json";
            Country data = mapper.readValue(new File(path), Country.class);
            Set<RandomAddress> addressSet = new HashSet<>();
            for (RandomAddress address : data.getAddressList())
                addressSet.add(address);
            Assert.assertEquals("All generated addresses are not unique for " + country, data.getDefaultSize(), addressSet.size());
        }
    }

    @Test
    @DisplayName("Verify that all generated addresses contain all required fields and they are not null")
    public void verifyMinimumRequiredFields() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        List<String> countries = Arrays.asList("USA", "Mexico", "Netherlands", "Canada");
        for (String country : countries) {
            String path = "src/main/resources/" + country + "_data.json";
            Country data = mapper.readValue(new File(path), Country.class);
            for (RandomAddress address : data.getAddressList()) {
                Assert.assertNotNull("Address does not have house number", address.getHouse());
                Assert.assertNotNull("Address does not have street field", address.getStreet());
                Assert.assertNotNull("Address does not have postal code", address.getPostalCode());
                Assert.assertNotNull("Address does not have city", address.getCity());
                Assert.assertNotNull("Address does not have county", address.getCounty());
                Assert.assertNotNull("Address does not have state", address.getState());
                Assert.assertNotNull("Address does not have country", address.getCountry());
                Assert.assertNotNull("Address does not have country code", address.getCountryCode());
            }
        }
    }

    @Test
    @DisplayName("Verify that all countries have default minimum number of addresses")
    public void verifyAddressCount() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        List<String> countries = Arrays.asList("USA", "Mexico", "Netherlands", "Canada");
        for (String country : countries) {
            String path = "src/main/resources/" + country + "_data.json";
            Country data = mapper.readValue(new File(path), Country.class);
            Assert.assertEquals("Default all countries have 25 addresses", 25, data.getDefaultSize());
        }
    }

    @Test
    @DisplayName("Verify that all countries have three-letter country code")
    public void verifyCountryCode() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        List<String> countries = Arrays.asList("USA", "Mexico", "Netherlands", "Canada");
        for (String country : countries) {
            String path = "src/main/resources/" + country + "_data.json";
            Country data = mapper.readValue(new File(path), Country.class);
            Assert.assertEquals("Default all country codes are not three-letter", 3, data.getCountryCode().length());
        }
    }

}
