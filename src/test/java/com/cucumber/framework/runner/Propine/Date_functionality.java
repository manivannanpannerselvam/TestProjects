package com.cucumber.framework.runner.Propine;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = { "classpath:featurefile/Propines/Date_Functionality.feature"}, glue = {
		"classpath:com.cucumber.framework.stepdefinition",
"classpath:com.cucumber.framework.helper" }, plugin = {"pretty:STDOUT","html:C:\\Users\\MANIVANNAN\\Pictures\\Test1-master\\Test1-master\\Cucumber\\Reports\\cucumber-pretty",
	    "rerun:target/rerun1.txt"}

)


public class Date_functionality extends AbstractTestNGCucumberTests {

	
	
}
