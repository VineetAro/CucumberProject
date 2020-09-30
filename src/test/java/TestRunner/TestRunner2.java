package TestRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
	
import cucumber.api.junit.Cucumber;
	
 
	
@RunWith(Cucumber.class)
	
@CucumberOptions(
	
    features = "Features",
	
    glue = {"StepDefinition"},
	
    tags = {"@sugarCRM"},
	//tags = {"@test"},
    strict = true,
    plugin = {"pretty", "html: test-reports-CRM"},
    monochrome = true
	
)
	
public class TestRunner2 {
	//empty 
}
 
	
