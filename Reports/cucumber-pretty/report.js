$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/Propines/Date_Functionality.feature");
formatter.feature({
  "line": 2,
  "name": "verify the account by filling the registration",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Propine_Date_Functionality"
    }
  ]
});
formatter.before({
  "duration": 8834484700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether valid result is displayed or not",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;verify-whether-valid-result-is-displayed-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the Valid Date field  \"12-12-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify valid Date should be display \"Sat Dec 12 2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 7337654400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12-12-2020",
      "offset": 29
    }
  ],
  "location": "Date_Step.enter_the_Valid_Date_field(String)"
});
formatter.result({
  "duration": 1859092000,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 3734048000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sat Dec 12 2020",
      "offset": 37
    }
  ],
  "location": "Date_Step.verify_valid_Date_should_be_display(String)"
});
formatter.result({
  "duration": 54890800,
  "status": "passed"
});
formatter.after({
  "duration": 5697445500,
  "status": "passed"
});
formatter.before({
  "duration": 5508774400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify Validation message is displayed while entering the Valid Inputlike -13/10/2020(DD/MM/YYYY)",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;verify-validation-message-is-displayed-while-entering-the-valid-inputlike--13/10/2020(dd/mm/yyyy)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Enter the Valid Date field  \"13-10-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct Date should be displayed \"Tue Oct 13 2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 7237065300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13-10-2020",
      "offset": 29
    }
  ],
  "location": "Date_Step.enter_the_Valid_Date_field(String)"
});
formatter.result({
  "duration": 149226700,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 909541200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tue Oct 13 2020",
      "offset": 41
    }
  ],
  "location": "Date_Step.verify_correct_Date_should_be_displayed(String)"
});
formatter.result({
  "duration": 50078376300,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.verify_correct_Date_should_be_displayed(Date_Step.java:69)\r\n\tat ✽.Then Verify correct Date should be displayed \"Tue Oct 13 2020\"(featurefile/Propines/Date_Functionality.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4244925800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify whether all date format should be displayed",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter the Valid Date format in date field \"\u003cDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify correct Date should be display \"Thu Nov 12 2020\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed;",
  "rows": [
    {
      "cells": [
        "Date"
      ],
      "line": 26,
      "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed;;1"
    },
    {
      "cells": [
        "11-12-2020"
      ],
      "line": 27,
      "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed;;2"
    },
    {
      "cells": [
        "11/12/2020"
      ],
      "line": 28,
      "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7580954400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify whether all date format should be displayed",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Propine_Date_Functionality"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter the Valid Date format in date field \"11-12-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify correct Date should be display \"Thu Nov 12 2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 5578423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11-12-2020",
      "offset": 43
    }
  ],
  "location": "Date_Step.enter_the_Valid_Date_format_in_date_field(String)"
});
formatter.result({
  "duration": 184793500,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1048105700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thu Nov 12 2020",
      "offset": 39
    }
  ],
  "location": "Date_Step.verify_correct_Date_should_be_display(String)"
});
formatter.result({
  "duration": 48827700,
  "status": "passed"
});
formatter.after({
  "duration": 3758841400,
  "status": "passed"
});
formatter.before({
  "duration": 6280273000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify whether all date format should be displayed",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;verify-whether-all-date-format-should-be-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Propine_Date_Functionality"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter the Valid Date format in date field \"11/12/2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify correct Date should be display \"Thu Nov 12 2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 2718478500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/12/2020",
      "offset": 43
    }
  ],
  "location": "Date_Step.enter_the_Valid_Date_format_in_date_field(String)"
});
formatter.result({
  "duration": 188701100,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 919807500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thu Nov 12 2020",
      "offset": 39
    }
  ],
  "location": "Date_Step.verify_correct_Date_should_be_display(String)"
});
formatter.result({
  "duration": 50467000,
  "status": "passed"
});
formatter.after({
  "duration": 7251315500,
  "status": "passed"
});
formatter.before({
  "duration": 6006612700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Valid Validation Message should be displayed while entering the invalid input like “02-31-2020”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;valid-validation-message-should-be-displayed-while-entering-the-invalid-input-like-“02-31-2020”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Enter the InValid Date field  \"02-31-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 2704044100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02-31-2020",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 139747600,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 897578700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 50026871700,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.verify_whether_proper_validation_message_should_be_displayed(Date_Step.java:84)\r\n\tat ✽.Then Verify whether proper validation message should be displayed \"Invalid date\"(featurefile/Propines/Date_Functionality.feature:34)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 20779100200,
  "status": "passed"
});
formatter.before({
  "duration": 8000079600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Proper Validation is not displayed while entering the Date field like – “111111”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;proper-validation-is-not-displayed-while-entering-the-date-field-like-–-“111111”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Enter the InValid Date field  \"11111\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 4648916600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 122289300,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1247428200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 50036935900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.verify_whether_proper_validation_message_should_be_displayed(Date_Step.java:84)\r\n\tat ✽.Then Verify whether proper validation message should be displayed \"Invalid date\"(featurefile/Propines/Date_Functionality.feature:40)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 5761611200,
  "status": "passed"
});
formatter.before({
  "duration": 8020265800,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Proper Validation is not displayed while entering the Date field like – “0”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;proper-validation-is-not-displayed-while-entering-the-date-field-like-–-“0”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Enter the InValid Date field  \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 6005956700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 95610800,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1720353200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 50015680400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.verify_whether_proper_validation_message_should_be_displayed(Date_Step.java:84)\r\n\tat ✽.Then Verify whether proper validation message should be displayed \"Invalid date\"(featurefile/Propines/Date_Functionality.feature:47)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 4895070700,
  "status": "passed"
});
formatter.before({
  "duration": 7045698400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Proper Validation Message is not displayed while entering the Date field like – “12-12”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;proper-validation-message-is-not-displayed-while-entering-the-date-field-like-–-“12-12”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Enter the InValid Date field  \"12-12\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 13318423900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12-12",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 156059600,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1352087300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 50033799600,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.verify_whether_proper_validation_message_should_be_displayed(Date_Step.java:84)\r\n\tat ✽.Then Verify whether proper validation message should be displayed \"Invalid date\"(featurefile/Propines/Date_Functionality.feature:53)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 4122022000,
  "status": "passed"
});
formatter.before({
  "duration": 7243496400,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Proper Validation message is not displayed while entering the Date field like – “12-12-12222”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;proper-validation-message-is-not-displayed-while-entering-the-date-field-like-–-“12-12-12222”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Enter the InValid Date field  \"12-12-12222\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 5961140800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12-12-12222",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 157648100,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1059773700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 50013405100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.verify_whether_proper_validation_message_should_be_displayed(Date_Step.java:84)\r\n\tat ✽.Then Verify whether proper validation message should be displayed \"Invalid date\"(featurefile/Propines/Date_Functionality.feature:60)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 4229504600,
  "status": "passed"
});
formatter.before({
  "duration": 11704487400,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Proper Validation message is not displayed while entering the Date field like – “01-2020-01”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;proper-validation-message-is-not-displayed-while-entering-the-date-field-like-–-“01-2020-01”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "Enter the InValid Date field  \"01-2020-01\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 13106944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01-2020-01",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 156087500,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1013626500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 117330500,
  "status": "passed"
});
formatter.after({
  "duration": 3867555900,
  "status": "passed"
});
formatter.before({
  "duration": 7303667400,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Proper Validation message is not displayed while entering the Date field like – “sdfdsfsdfdsf”",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;proper-validation-message-is-not-displayed-while-entering-the-date-field-like-–-“sdfdsfsdfdsf”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "Enter the InValid Date field  \"sdfdsfsdfdsf\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 11278096700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfdsfsdfdsf",
      "offset": 31
    }
  ],
  "location": "Date_Step.enter_the_InValid_Date_field(String)"
});
formatter.result({
  "duration": 157991500,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 1218461200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 56885000,
  "status": "passed"
});
formatter.after({
  "duration": 4135334700,
  "status": "passed"
});
formatter.before({
  "duration": 5705442800,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Validation Message should be displayed while click on the submit button without entering the Date field",
  "description": "",
  "id": "verify-the-account-by-filling-the-registration;validation-message-should-be-displayed-while-click-on-the-submit-button-without-entering-the-date-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "open the valid url in Propine application",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Verify whether proper validation message should be displayed \"Invalid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Date_Step.open_the_valid_url_in_Propine_application()"
});
formatter.result({
  "duration": 6451530400,
  "status": "passed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "duration": 2288337800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid date",
      "offset": 62
    }
  ],
  "location": "Date_Step.verify_whether_proper_validation_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 45528700,
  "status": "passed"
});
formatter.after({
  "duration": 3775920700,
  "status": "passed"
});
});