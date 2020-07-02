@apiTest
Feature: Address Randomizer Tests

  Background:
    Given user enters URI address "http://localhost:8080"
    And user accepts content type as "json"

  Scenario: Verify that address randomizer provides address with minimum fields
    When user sends GET request to "/randomizer/address"
    Then user verifies that status code is 200
    And response content type is "json"
    And response contains following fields and their types are as expected
      | house      |
      | street     |
      | postalCode |
      | city       |
      | county     |

  Scenario: Verify that address randomizer provides address with optional fields
    When user sends GET request to "/randomizer/address"
    Then user verifies that status code is 200
    And response content type is "json"
    And response contains following fields and their types are as expected
      | house       |
      | street      |
      | postalCode  |
      | city        |
      | county      |
      | state       |
      | country     |
      | countryCode |

  Scenario Outline: Verify that address randomizer provides address for <Country>
    When user sends GET request to "/randomizer/address/<Country>"
    Then user verifies that status code is 200
    And response content type is "json"
    And response contains "country" field as  "<Country>"
    Examples: Supported countries
      | Country       |
      | United States |
      | Canada        |
      | Mexico        |
      | Netherlands   |

    Scenario: Verify that address randomizer display error message for unsupported country
      When user sends GET request to "/randomizer/address/Germany"
      Then user verifies that status code is 404
      And response contains error message

