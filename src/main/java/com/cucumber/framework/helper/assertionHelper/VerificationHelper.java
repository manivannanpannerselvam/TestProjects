package com.cucumber.framework.helper.assertionHelper;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.cucumber.framework.helper.TestBase.TestBase;



public class VerificationHelper{

	

	public static synchronized boolean verifyElementPresent( WebElement element) {
		boolean isDispalyed = false;
		try {
			 isDispalyed= element.isDisplayed();
			 
		}
		catch(Exception ex) {
			
		}
		
		return isDispalyed;
	}
	
	public static synchronized boolean verifyElementNotPresent( WebElement element) {
		boolean isDispalyed = false;
		try {
			 element.isDisplayed();
					}
		catch(Exception ex) {
					isDispalyed = true;
		}
		
		return isDispalyed;
	}
	
	public static synchronized boolean verifyTextEquals( WebElement element,String expectedText) {
		boolean flag = false;
		try {
			String actualText=element.getText();
			if(actualText.equals(expectedText)) {
				
				return flag=true;
			}
			else {
				
				return flag;
			}
		}
		catch(Exception ex) {
			
			return flag;
		}
	}
}