@Propine_Date_Functionality
Feature: verify the Date field Validation 

  Scenario: Verify whether valid result is displayed or not
    Given open the valid url in Propine application
    Then  Enter the Valid Date field  "12-12-2020" 
    Then  click the submit button
    Then  Verify valid Date should be display "Sat Dec 12 2020"
    
    
    #Scenario: Verify Validation message is displayed while entering the Valid Inputlike -13/10/2020(DD/MM/YYYY)
    #Given open the valid url in Propine application
    #Then  Enter the Valid Date field  "13-10-2020" 
    #Then  click the submit button
    #Then  Verify correct Date should be displayed "Tue Oct 13 2020"
    #
    #
    #
  #Scenario Outline: Verify whether all date format should be displayed
    #Given open the valid url in Propine application
    #Then  Enter the Valid Date format in date field "<Date>" 
    #Then  click the submit button
    #Then  Verify correct Date should be display "Thu Nov 12 2020"
    #
    #Examples:
     #| Date       |
     #| 11-12-2020 |
     #| 11/12/2020 |
     #
    #Scenario: Valid Validation Message should be displayed while entering the invalid input like “02-31-2020”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "02-31-2020" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
    #Scenario: Proper Validation is not displayed while entering the Date field like – “111111”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "11111" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
     #
    #Scenario: Proper Validation is not displayed while entering the Date field like – “0”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "0" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
    #Scenario: Proper Validation Message is not displayed while entering the Date field like – “12-12”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "12-12" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
     #
    #Scenario: Proper Validation message is not displayed while entering the Date field like – “12-12-12222”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "12-12-12222" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
     #
    #Scenario: Proper Validation message is not displayed while entering the Date field like – “01-2020-01”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "01-2020-01" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
     #
    #Scenario: Proper Validation message is not displayed while entering the Date field like – “sdfdsfsdfdsf”
    #Given open the valid url in Propine application
    #Then  Enter the InValid Date field  "sdfdsfsdfdsf" 
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
     #
     #
    #Scenario: Validation Message should be displayed while click on the submit button without entering the Date field
    #Given open the valid url in Propine application
    #Then  click the submit button
    #Then  Verify whether proper validation message should be displayed "Invalid date"    
    #
   