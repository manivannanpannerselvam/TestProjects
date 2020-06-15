$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/Propines/Date_Functionality.feature");
formatter.feature({
  "line": 2,
  "name": "verify the Date field Validation",
  "description": "",
  "id": "verify-the-date-field-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Propine_Date_Functionality"
    }
  ]
});
formatter.before({
  "duration": 11396902300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether valid result is displayed or not",
  "description": "",
  "id": "verify-the-date-field-validation;verify-whether-valid-result-is-displayed-or-not",
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
  "duration": 18839117100,
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
  "duration": 50288597000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//input[@name\u003d\u0027date\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027LAPTOP-P9U8PG08\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab), userDataDir\u003dC:\\Users\\MANIVA~1\\AppData\\Local\\Temp\\scoped_dir10980_15926}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.61, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 33c23fa62f87fc7f37f31a1882a2aa4d\n*** Element info: {Using\u003dxpath, value\u003d.//input[@name\u003d\u0027date\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat com.cucumber.framework.Propine_Page.Date_Page.Date_field(Date_Page.java:48)\r\n\tat com.cucumber.framework.stepdefinition.Propine_Step.Date_Step.enter_the_Valid_Date_field(Date_Step.java:31)\r\n\tat ✽.Then Enter the Valid Date field  \"12-12-2020\"(featurefile/Propines/Date_Functionality.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Date_Step.click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4247711800,
  "status": "passed"
});
});