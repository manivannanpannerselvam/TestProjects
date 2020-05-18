package com.cucumber.framework.Propine_Page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.Wait.WaitHelper;
import com.cucumber.framework.helper.genericHelper.GenericHelper;

public class Date_Page {
	
	WebDriver driver;
	//private final Logger log = LoggerHelper.getLogger(Create_new_account_page.class);
	WaitHelper waitHelper;
	Actions actions;
	
	
	@FindBy(xpath=".//input[@name='date']")
	WebElement Date_field;
	
	@FindBy(xpath=".//input[@type='submit']")
	WebElement submit_button;
	
	@FindBy(xpath="//div[contains(text(),'Sat Dec 12 2020')]")
	WebElement verify_results;
	
	@FindBy(xpath="//div[contains(text(),'Thu Nov 12 2020')]")
	WebElement verify_Date_Result;
	
	@FindBy(xpath="//div[contains(text(),'Tue Oct 13 2020')]")
	WebElement Verify_valid_Date_Format;
	
	@FindBy(xpath="//div[contains(text(),'Invalid date')]")
	WebElement Valid_Alert_message;
	
	public Date_Page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		//
	}
	public void Date_field(String Date_field) throws InterruptedException
	{
		//log.info("entering sigin_password." + sigin_password);
		this.Date_field.sendKeys(Date_field);
	}
	public void submit_button() throws InterruptedException
	{
		waitHelper.waitForElement(driver, submit_button,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, submit_button,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(submit_button);
		
		actions.click().build().perform();
	}
	
	public String verify_results()
	{
		//return new GenericHelper().isDisplayed(successMsgObject);
		return new GenericHelper().getElementText(verify_results);
	}
	
	public String verify_Date_Result()
	{
		//return new GenericHelper().isDisplayed(successMsgObject);
		return new GenericHelper().getElementText(verify_Date_Result);
	}
	
	public String Verify_valid_Date_Format()
	{
		//return new GenericHelper().isDisplayed(successMsgObject);
		return new GenericHelper().getElementText(Verify_valid_Date_Format);
	}
	public String Valid_Alert_message()
	{
		//return new GenericHelper().isDisplayed(successMsgObject);
		return new GenericHelper().getElementText(Valid_Alert_message);
	}
	
}
