package com.cucumber.framework.stepdefinition.Propine_Step;

import org.testng.Assert;


import com.cucumber.framework.Propine_Page.Date_Page;
import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.TestBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Date_Step {
	
	Date_Page Date;
	
	


	@Then("^Enter the Valid Date field  \"([^\"]*)\"$")
	public void enter_the_Valid_Date_field(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Date= new Date_Page(TestBase.driver);
		
		Date.Date_field(arg1);
	}

	@Then("^click the submit button$")
	public void click_the_submit_button() throws Throwable {
	   //click submit button
		Date= new Date_Page(TestBase.driver);
		Date.submit_button();
	}

	@Then("^Verify correct Date should be display \"([^\"]*)\"$")
	public void verify_correct_Date_should_be_display(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Date= new Date_Page(TestBase.driver);
		if(Date.verify_Date_Result().contains(arg1))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println(" Fail ");
			Assert.assertTrue(false, this.getClass().getSimpleName()+" is fail");	 
			 
		}
	}
	@Then("^Enter the Valid Date format in date field \"([^\"]*)\"$")
	public void enter_the_Valid_Date_format_in_date_field(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		Date= new Date_Page(TestBase.driver);
		
		Date.Date_field(arg1);
	}
	@Then("^Verify correct Date should be displayed \"([^\"]*)\"$")
	public void verify_correct_Date_should_be_displayed(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Date= new Date_Page(TestBase.driver);
		if(Date.Verify_valid_Date_Format().contains(arg1))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println(" Fail ");
			Assert.assertTrue(false, this.getClass().getSimpleName()+" is fail");	 
			 
		}
	}
	@Then("^Verify whether proper validation message should be displayed \"([^\"]*)\"$")
	public void verify_whether_proper_validation_message_should_be_displayed(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Date= new Date_Page(TestBase.driver);
		if(Date.Valid_Alert_message().contains(arg1))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println(" Fail ");
			Assert.assertTrue(false, this.getClass().getSimpleName()+" is fail");	 
			 
		}
	}
	@Then("^Enter the InValid Date field  \"([^\"]*)\"$")
	public void enter_the_InValid_Date_field(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Date= new Date_Page(TestBase.driver);
		
		Date.Date_field(arg1);
	}
	@Then("^Verify valid Date should be display \"([^\"]*)\"$")
	public void verify_valid_Date_should_be_display(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Date= new Date_Page(TestBase.driver);
		if(Date.verify_results().contains(arg1))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println(" Fail ");
			Assert.assertTrue(false, this.getClass().getSimpleName()+" is fail");	 
			 
		}
	}

}
