package com.cucumber.framework.stepdefinition.Grant_Application;

import com.cucumber.framework.Grant_Application_page.Business_Impact_page;
import com.cucumber.framework.Grant_Application_page.Contact_details_page;
import com.cucumber.framework.helper.TestBase.TestBase;

import cucumber.api.java.en.Then;

public class Business_Impact_step {
	
	Business_Impact_page Business;

	
	@Then("^click the Business Impact$")
	public void click_the_Business_Impact() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Business= new Business_Impact_page(TestBase.driver);
		
		Business.business();
	}
	@Then("^Enter the FY End Date \"([^\"]*)\"$")
	public void enter_the_FY_End_Date(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Business= new Business_Impact_page(TestBase.driver);
		
		Business.Fy_End_date(arg1);
	}
	

}
