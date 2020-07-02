package com.addressrandomizer.exceptions;

/**
 * Exception class for unsupported countries
 */
public class CountryNotFoundException extends RuntimeException {
    public CountryNotFoundException(String country) {
        super("!!! Error, couldn't supported country : " + country + "\n" +
                "Supported countries : United States, Canada, Mexico and Netherlands");
    }
}
