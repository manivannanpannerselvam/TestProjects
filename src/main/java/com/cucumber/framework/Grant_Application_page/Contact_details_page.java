package com.cucumber.framework.Grant_Application_page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.Wait.WaitHelper;

public class Contact_details_page {

	WebDriver driver;
	//private final Logger log = LoggerHelper.getLogger(Create_new_account_page.class);
	WaitHelper waitHelper;
	Actions actions;
	
	@FindBy(xpath=".//span[text()='Contact Details']")
	WebElement Contact_Details;
	
	@FindBy(xpath=".//input[@id='react-contact_info-name']")
	WebElement Name_field;
	
	@FindBy(xpath=".//input[@id='react-contact_info-designation']")
	WebElement Job_Title;
	
	@FindBy(xpath=".//input[@id='react-contact_info-phone']")
	WebElement Job_phone;
	
	@FindBy(xpath=".//input[@id='react-contact_info-primary_email']")
	WebElement Job_Email;
	
	
	@FindBy(xpath=".//input[@id='react-contact_info-correspondence_address-copied']")
	WebElement Mailing_Address;
	
	@FindBy(xpath=".//input[@id='react-contact_info-copied']")
	WebElement offer_address;
	
	public Contact_details_page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		//
	}
	
	public void offer_address() throws InterruptedException
	{
		waitHelper.waitForElement(driver, offer_address,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, offer_address,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(offer_address);
		
		actions.click().build().perform();
	}
	
	public void Mailing_Address() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Mailing_Address,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Mailing_Address,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Mailing_Address);
		
		actions.click().build().perform();
	}
	
	public void Job_Email(String Job_Email) throws InterruptedException
	{
		//log.info("entering sigin_password." + sigin_password);
		this.Job_Email.clear();
		this.Job_Email.sendKeys(Job_Email);
	}
	
	public void Job_phone(String Job_phone) throws InterruptedException
	{
		//log.info("entering sigin_password." + sigin_password);
		this.Job_phone.clear();
		this.Job_phone.sendKeys(Job_phone);
	}
	
	public void Job_Title(String Job_Title) throws InterruptedException
	{
		//log.info("entering sigin_password." + sigin_password);
		this.Job_Title.clear();
		this.Job_Title.sendKeys(Job_Title);
	}
	
	
	public void Name_field(String Name_field) throws InterruptedException
	{
		//log.info("entering sigin_password." + sigin_password);
		this.Name_field.clear();
		this.Name_field.sendKeys(Name_field);
	}
	
	
	public void Contact_Details() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Contact_Details,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Contact_Details,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Contact_Details);
		
		actions.click().build().perform();
	}
	
	
	
}
