package com.addressrandomizer.model;

import com.github.javafaker.Faker;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Random;

/**
 * Country class is used for generating fake data by using javafaker library for the specific country.
 * Each country object has default 25 randomly generated addresses. This size can be adjusted while initializing
 * a new country.
 */
public class Country {
    private String country;
    private String countryCode;
    private int defaultSize;
    private List<RandomAddress> addressList = new ArrayList<>();

    /**
     * Create a country object for United States and generate default size of random addresses
     */
    public Country() {
        this("United States", 25);
    }

    /**
     * Create a country object for the country and generate default size of random addresses
     * @param country : country name
     */
    public Country(String country) {
        this(country, 25);
    }

    /**
     * Create a country object for the country and generate specific number of random addresses
     *
     * @param country     : country name
     * @param defaultSize : address count
     */
    public Country(String country, int defaultSize) {
        this.country = country;
        this.defaultSize = defaultSize;
        createFakeDataForCountry();
    }

    /**
     * Helper method for specifying country locale from the country name
     */
    private void createFakeDataForCountry() {
        String locale = "";
        switch (country) {
            case "United States":
                locale = "en-US";
                this.countryCode = "USA";
                break;
            case "Canada":
                locale = "en-CA";
                this.countryCode = "CAN";
                break;
            case "Mexico":
                locale = "es_MX";
                this.countryCode = "MEX";
                break;
            case "Netherlands":
                locale = "nl_NL";
                this.countryCode = "NLD";
                break;
            default:
                throw new RuntimeException("Unsupported country name");
        }
        addressGenerator(locale);
    }

    /**
     * Generate random addresses for the specific country
     * @param locale : country information
     */
    public void addressGenerator(String locale) {
        Faker faker = new Faker(new Locale(locale));
        for (int i = 0; i < defaultSize; i++) {
            RandomAddress randomAddress = new RandomAddress();
            randomAddress.setHouse(String.valueOf(new Random().nextInt(9999)));
            String street = faker.address().streetName();
            if (!street.endsWith("st."))
                street += " st.";
            randomAddress.setStreet(street);
            randomAddress.setCity(faker.address().cityName());
            randomAddress.setCounty(faker.address().city());
            randomAddress.setPostalCode(faker.address().zipCode());
            randomAddress.setState(faker.address().state());
            randomAddress.setCountry(this.country);
            randomAddress.setCountryCode(this.countryCode);
            addressList.add(randomAddress);
        }
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public int getDefaultSize() {
        return defaultSize;
    }

    public void setDefaultSize(int defaultSize) {
        this.defaultSize = defaultSize;
    }

    public List<RandomAddress> getAddressList() {
        return addressList;
    }

    public void setAddressList(List<RandomAddress> addressList) {
        this.addressList = addressList;
    }

    @Override
    public String toString() {
        return "Country{" +
                "country='" + country + '\'' +
                ", countryCode='" + countryCode + '\'' +
                ", defaultSize=" + defaultSize +
                ", addressList=" + addressList +
                '}';
    }
}
