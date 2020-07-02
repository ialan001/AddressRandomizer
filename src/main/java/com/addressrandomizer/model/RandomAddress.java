package com.addressrandomizer.model;

import java.util.Objects;

/**
 * RandomAddress is the POJO class for randomly generated address objects
 */
public class RandomAddress {
    private String house;
    private String street;
    private String postalCode;
    private String city;
    private String county;
    private String state;
    private String country;
    private String countryCode;

    public RandomAddress() {
    }

    public RandomAddress(String house, String street, String postalCode, String city, String county, String state, String country, String countryCode) {
        this.house = house;
        this.street = street;
        this.postalCode = postalCode;
        this.city = city;
        this.county = county;
        this.state = state;
        this.country = country;
        this.countryCode = countryCode;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
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

    @Override
    public String toString() {
        return house+" "+street+", "+city+", "+county+", "+state+", "+postalCode+", "+country+", "+countryCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RandomAddress that = (RandomAddress) o;
        return house.equals(that.house) &&
                street.equals(that.street) &&
                postalCode.equals(that.postalCode) &&
                city.equals(that.city) &&
                county.equals(that.county) &&
                state.equals(that.state) &&
                country.equals(that.country) &&
                countryCode.equals(that.countryCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(house, street, postalCode, city, county, state, country, countryCode);
    }
}
