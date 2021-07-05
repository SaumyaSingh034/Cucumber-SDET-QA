$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login Page Feature File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login to the application with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title of the page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on LogOut button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_clicks_on_LogOut_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title of the page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login to the application with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Email as \u003cemail\u003e and Password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "Page title of the page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on LogOut button",
  "keyword": "When "
});
formatter.step({
  "name": "Page title of the page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "adminghy12"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com6",
        "admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to the application with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as admin@yourstore.com and Password as admin",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on LogOut button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_clicks_on_LogOut_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login to the application with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as admin@yourstore.com and Password as adminghy12",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on LogOut button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_clicks_on_LogOut_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login to the application with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as admin@yourstore.com and Password as admin",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on LogOut button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_clicks_on_LogOut_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login to the application with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as admin@yourstore.com6 and Password as admin",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on LogOut button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.user_clicks_on_LogOut_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title of the page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.page_title_of_the_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});