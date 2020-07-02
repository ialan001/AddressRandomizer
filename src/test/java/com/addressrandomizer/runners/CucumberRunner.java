package com.addressrandomizer.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = "com/addressrandomizer/step_definitions",
        features = "src/test/resources/features",
        plugin = {
                "html:target/default-report",
                "json:target/cucumber.json"
        },
        tags = "@apiTest",
        strict = true,
        dryRun = false
)
public class CucumberRunner {
}