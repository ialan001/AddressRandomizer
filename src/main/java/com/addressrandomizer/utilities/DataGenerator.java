package com.addressrandomizer.utilities;

import com.addressrandomizer.model.Country;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

/**
 * DataGenerator class is used for generating fake addresses for each countries,
 * generated addresses are stored in json files under the resources directory.
 * As in the technical requirement document, addresses are generated only for US, Canada, Mexico and Netherlands.
 * Default address count is specified as 25.
 */
public class DataGenerator {
    public static void main(String[] args) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        int defaultSize=25;

        Country usaData=new Country("United States",defaultSize);
        mapper.writeValue(new File("src/main/resources/USA_data.json"), usaData);

        Country canadaData=new Country("Canada",defaultSize);
        mapper.writeValue(new File("src/main/resources/Canada_data.json"), canadaData);

        Country mexicoData=new Country("Mexico",defaultSize);
        mapper.writeValue(new File("src/main/resources/Mexico_data.json"), mexicoData);

        Country netherlandsData=new Country("Netherlands",defaultSize);
        mapper.writeValue(new File("src/main/resources/Netherlands_data.json"), netherlandsData);

        System.out.println(usaData);
        System.out.println(canadaData);
        System.out.println(mexicoData);
        System.out.println(netherlandsData);
    }
}
