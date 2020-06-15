package com.cucumber.framework.Grant_Application_page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.Wait.WaitHelper;

public class Eligibility_page {

	WebDriver driver;
	//private final Logger log = LoggerHelper.getLogger(Create_new_account_page.class);
	WaitHelper waitHelper;
	Actions actions;
	
	@FindBy(xpath=".//label[text()='Is the applicant registered in Singapore?']//following::span[text()='Yes'][1]")
	WebElement Applicant_yes;
	
	@FindBy(xpath=".//label[text()='Is the applicant registered in Singapore?']//following::span[text()='Yes'][2]")
	WebElement Applicant_Group;
	
	@FindBy(xpath=".//label[text()='Is the applicant registered in Singapore?']//following::span[text()='Yes'][3]")
	WebElement Applicant_Atleast;
	
	@FindBy(xpath=".//label[text()='Is the applicant registered in Singapore?']//following::span[text()='Yes'][4]")
	WebElement Applicant_market;
	
	@FindBy(xpath=".//label[text()='Is the applicant registered in Singapore?']//following::span[text()='Yes'][5]")
	WebElement Applicant_Following_statement;
	
	@FindBy(xpath=".//button[@id='save-btn']")
	WebElement Save_Eligibility;
	
	
	public Eligibility_page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		//
	}
	
	public void Save_Eligibility() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Save_Eligibility,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Save_Eligibility,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Save_Eligibility);
		
		actions.click().build().perform();
	}
	
	
	
	
	public void Applicant_Following_statement() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Applicant_Following_statement,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Applicant_Following_statement,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Applicant_Following_statement);
		
		actions.click().build().perform();
	}
	
	
	public void Applicant_market() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Applicant_market,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Applicant_market,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Applicant_market);
		
		actions.click().build().perform();
	}
	
	public void Applicant_Atleast() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Applicant_Atleast,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Applicant_Atleast,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Applicant_Atleast);
		
		actions.click().build().perform();
	}
	
	
	
	public void Applicant_yes_button() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Applicant_yes,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Applicant_yes,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Applicant_yes);
		
		actions.click().build().perform();
	}
	
	public void Applicant_Group() throws InterruptedException
	{
		waitHelper.waitForElement(driver, Applicant_Group,ObjectRepo.reader.getPageLoadTimeOut());
		waitHelper.waitForElement(driver, Applicant_Group,ObjectRepo.reader.getExplicitWait());
		
		actions = new Actions(driver);
		actions.moveToElement(Applicant_Group);
		
		actions.click().build().perform();
	}
}
