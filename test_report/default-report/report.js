$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddressRandomizer.feature");
formatter.feature({
  "name": "Address Randomizer Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer provides address with minimum fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains following fields and their types are as expected",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_following_fields_and_their_types_are_as_expected(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer provides address with optional fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains following fields and their types are as expected",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_following_fields_and_their_types_are_as_expected(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that address randomizer provides address for \u003cCountry\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address/\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.step({
  "name": "response contains \"country\" field as  \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "Supported countries",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Country"
      ]
    },
    {
      "cells": [
        "United States"
      ]
    },
    {
      "cells": [
        "Canada"
      ]
    },
    {
      "cells": [
        "Mexico"
      ]
    },
    {
      "cells": [
        "Netherlands"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer provides address for United States",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address/United States\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains \"country\" field as  \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_field_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer provides address for Canada",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address/Canada\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains \"country\" field as  \"Canada\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_field_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer provides address for Mexico",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address/Mexico\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains \"country\" field as  \"Mexico\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_field_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer provides address for Netherlands",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address/Netherlands\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type is \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains \"country\" field as  \"Netherlands\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_field_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters URI address \"http://localhost:8080\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_enters_URI_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that address randomizer display error message for unsupported country",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "name": "user sends GET request to \"/randomizer/address/Germany\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_sends_GET_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.user_verifies_that_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains error message",
  "keyword": "And "
});
formatter.match({
  "location": "com.addressrandomizer.step_definitions.AddressRandomizerTestStepDefinitions.response_contains_error_message()"
});
formatter.result({
  "status": "passed"
});
});