package com.cucumber.framework.stepdefinition.Grant_Application;

import com.cucumber.framework.Grant_Application_page.Contact_details_page;
import com.cucumber.framework.Grant_Application_page.Declare_Review_page;
import com.cucumber.framework.helper.TestBase.TestBase;

import cucumber.api.java.en.Then;

public class Declare_Review_step {
	
	
	Declare_Review_page Declare_page;
	
	@Then("^click the Declare and Review$")
	public void click_the_Declare_and_Review() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Declare_page= new Declare_Review_page(TestBase.driver);
		
		Declare_page.Declare_Review();
	}
@Then("^click the Third party Vendor$")
public void click_the_Third_party_Vendor() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.Third_party_Vendor();
}

@Then("^click the No icon in First Question$")
public void click_the_No_icon_in_First_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.Applicant();
}

@Then("^click the No icon in second Question$")
public void click_the_No_icon_in_second_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.second_Question();
}

@Then("^click the No icon in Third Question$")
public void click_the_No_icon_in_Third_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.Third_Question();
}

@Then("^click the No icon in fourth Question$")
public void click_the_No_icon_in_fourth_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.fourth_Question();
	
}

@Then("^click the No icon in fifth Question$")
public void click_the_No_icon_in_fifth_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.fifth_Question();
}

@Then("^click the No icon in sex Question$")
public void click_the_No_icon_in_sex_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.sixth_Question();
}

@Then("^click the No icon in seventh Question$")
public void click_the_No_icon_in_seventh_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.seventh_Question();
}

@Then("^click the No icon in nine Question$")
public void click_the_No_icon_in_nine_Question() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.nine_Question();
}

@Then("^click the acknowlege icon$")
public void click_the_acknowlege_icon() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
Declare_page= new Declare_Review_page(TestBase.driver);
	
	Declare_page.nine_Question();
}

@Then("^click the Review Button$")
public void click_the_Review_Button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   
}

}