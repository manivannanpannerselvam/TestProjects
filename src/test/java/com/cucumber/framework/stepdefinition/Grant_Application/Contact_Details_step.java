package com.cucumber.framework.stepdefinition.Grant_Application;

import com.cucumber.framework.Grant_Application_page.Contact_details_page;
import com.cucumber.framework.Grant_Application_page.Eligibility_page;
import com.cucumber.framework.helper.TestBase.TestBase;

import cucumber.api.java.en.Then;

public class Contact_Details_step {
	
	
	Contact_details_page Contact_page;
	
	@Then("^click the contact Details$")
	public void click_the_contact_Details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Contact_page= new Contact_details_page(TestBase.driver);
		
		Contact_page.Contact_Details();
	}
	
	@Then("^Emter the contact Name \"([^\"]*)\"$")
	public void emter_the_contact_Name(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Contact_page= new Contact_details_page(TestBase.driver);
		
		Contact_page.Name_field(arg1);
	}

	@Then("^Enter the Job title \"([^\"]*)\"$")
	public void enter_the_Job_title(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Contact_page= new Contact_details_page(TestBase.driver);
		
		Contact_page.Job_Title(arg1);
	}

	@Then("^Enter the Contact No \"([^\"]*)\"$")
	public void enter_the_Contact_No(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Contact_page= new Contact_details_page(TestBase.driver);
		
		Contact_page.Job_phone(arg1);
	}

	@Then("^Enter the Email id   \"([^\"]*)\"$")
	public void enter_the_Email_id(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Contact_page= new Contact_details_page(TestBase.driver);
		
		Contact_page.Job_Email(arg1);
		}

	@Then("^click the Mailing Address$")
	public void click_the_Mailing_Address() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Contact_page= new Contact_details_page(TestBase.driver);
		
		Contact_page.Mailing_Address();
	}


@Then("^click the offer address$")
public void click_the_offer_address() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Contact_page= new Contact_details_page(TestBase.driver);
	
	Contact_page.offer_address();
}
}
