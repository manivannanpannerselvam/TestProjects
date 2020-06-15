package com.cucumber.framework.stepdefinition.Grant_Application;

import com.cucumber.framework.Grant_Application_page.Eligibility_page;
import com.cucumber.framework.Grant_Application_page.Grant_Application_page;
import com.cucumber.framework.helper.TestBase.TestBase;

import cucumber.api.java.en.Then;

public class Eligibiity_step {
	
	Eligibility_page Eligibility_step;
	@Then("^click the Applicant Registered icon$")
	public void click_the_Applicant_Registered_icon() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Eligibility_step= new Eligibility_page(TestBase.driver);
		
		Eligibility_step.Applicant_yes_button();
	}
	
	@Then("^click the Applicant Group icon$")
	public void click_the_Applicant_Group_icon() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Eligibility_step= new Eligibility_page(TestBase.driver);
		
		Eligibility_step.Applicant_Group();
	}

@Then("^click the Applicant_(\\d+)localequality$")
public void click_the_Applicant__localequality(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Eligibility_step= new Eligibility_page(TestBase.driver);
	
	Eligibility_step.Applicant_market();
}

@Then("^click the Target Market$")
public void click_the_Target_Market() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Eligibility_step= new Eligibility_page(TestBase.driver);
	
	Eligibility_step.Applicant_Atleast();
}

@Then("^click the Following statement$")
public void click_the_Following_statement() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Eligibility_step= new Eligibility_page(TestBase.driver);
	
	Eligibility_step.Applicant_Following_statement();
}

@Then("^click the Save button$")
public void click_the_Save_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Eligibility_step= new Eligibility_page(TestBase.driver);
	
	Eligibility_step.Save_Eligibility();
}
}
