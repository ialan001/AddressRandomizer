package com.addressrandomizer.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import java.util.List;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AddressRandomizerTestStepDefinitions {

    private Response response;
    private ContentType contentType;

    @Given("user enters URI address {string}")
    public void user_enters_URI_address(String URI) {
        baseURI = URI;
    }

    @Given("user accepts content type as {string}")
    public void user_accepts_content_type_as(String content) {
        if (content.toLowerCase().contains("json"))
            contentType = ContentType.JSON;
    }

    @When("user sends GET request to {string}")
    public void user_sends_GET_request_to(String path) {
        response = given()
                .accept(contentType)
                .when().get(path);
    }

    @Then("user verifies that status code is {int}")
    public void user_verifies_that_status_code_is(int expectedCode) {
        int responseCode = response.statusCode();
        Assert.assertEquals("Status code is not as expected", expectedCode, responseCode);
    }

    @Then("response content type is {string}")
    public void response_content_type_is(String expectedContent) {
        if (expectedContent.toLowerCase().contains("json"))
            Assert.assertTrue("Content type is not correct", response.contentType().contains(expectedContent));
    }

    @Then("response contains following fields and their types are as expected")
    public void response_contains_following_fields_and_their_types_are_as_expected(List<String> fields) {
        for (String field : fields) {
            response.then().assertThat().body(containsString(field));
            response.then().assertThat().body(field, instanceOf(String.class));
        }
    }

    @Then("response contains {string} field as  {string}")
    public void response_contains_field_as(String field, String expectedValue) {
        response.then().assertThat().body(field, is(expectedValue));
    }

    @Then("response contains error message")
    public void response_contains_error_message() {
       response.then().assertThat().body(containsString("Error"));
    }
}
