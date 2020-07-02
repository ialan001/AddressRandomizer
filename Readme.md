# Address Randomizer Code Challenge
## About the project
In this challenge, Address Randomizer REST HTTP service is implemented that returns a random address by using Java Spring Boot framework.  The java faker library is used for generating fake addresses. Generated addresses for supported countries stored in json files for the sake of simplicity. By default, 25 addresses generated for each countries United States, Mexico, Canada and Netherlands as required in the specification document. All generated addresses tested by unit tests to make sure all addresses comply with requirements, and they are unique.<br>
Three endpoints implemented for receiving addresses;
* GET /randomizer/address 
* GET /randomizer/address/{country}
* GET /randomizer/address/all/{country}

 Cucumber-JUnit and REST-assured library framework is used for testing provided web services. Generated address fields both mandatory and optional ones and their data types, response content types, response status codes tested for each endpoint and for each country.
 
 ## REST API
#### 1. Receive a random address from any supported country.
 * **URL**
 
   /randomizer/address 
 
 * **Method:**
 
   `GET`
  
 
 * **Sample Response:**
 
   * **Code:** `200` <br />
     **Content:** `{
                       "house": "7732",
                       "street": "Curtis Row st.",
                       "postalCode": "P7W 0C2",
                       "city": "Numbersburgh",
                       "county": "Port Claudeberg",
                       "state": "Nunavut",
                       "country": "Canada",
                       "countryCode": "CAN"
                   }`
#### 2. Receive a random address from one of the supported countries.
##### Default supported countries are United States, Canada, Mexico and Netherlands
* **URL**

  /randomizer/address/:country

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `country=[String]`

* **Success Response:**
  * **Code:** `200` <br />
    **Content:** `{
                      "house": "44",
                      "street": "Carretera Martín Sandoval st.",
                      "postalCode": "40509",
                      "city": "Gral. Zaragoza",
                      "county": "Patzcuaro",
                      "state": "Jalisco",
                      "country": "Mexico",
                      "countryCode": "MEX"
                  }`
 
* **Error Response:**
  * **Code:** `404 NOT FOUND` <br />
    **Content:** `!!! Error, couldn't supported country : Germany
                  Supported countries : United States, Canada, Mexico and Netherlands`
#### 3. Receive all addresses from one of the supported countries.
* **URL**

  /randomizer/address/all/:country

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `country=[String]`

* **Success Response:**

  * **Code:** `200` <br />
    **Content:** `{
                      "country": "Netherlands",
                      "countryCode": "NLD",
                      "defaultSize": 25,
                      "addressList": [
                          {
                              "house": "6817",
                              "street": "Wopkeplantsoen st.",
                              "postalCode": "5698 DN",
                              "city": "Oud Jissinkingen",
                              "county": "Noord Hazewinkelenmaes",
                              "state": "Groningen",
                              "country": "Netherlands",
                              "countryCode": "NLD"
                          },
                          .... ]`
 
* **Error Response:**

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `!!! Error, couldn't supported country : Brasil
                  Supported countries : United States, Canada, Mexico and Netherlands`
 ## Test Results                  
Cucumber test automation tool and REST-assured library is used for testing provided web services and also all generated addresses validated by unit tests. You can reach test scenarios from the following file; <br>
`src/test/resources/features/AddressRandomizer.feature`
<br>For reporting test results, master thought cucumber reporting plugin is used. You can access sample test reports from the following file; <br>
`test_report/cucumber-html-reports/overview-features.html`
 ## Generating more addresses     
For generating addresses data generator utility class is implemented which is stored under the `src/main/java/com/addressrandomizer/utilities/DataGenerator.java`. In this file by changing only default size parameter it is easy to generate more sample addresses for supported countries.
