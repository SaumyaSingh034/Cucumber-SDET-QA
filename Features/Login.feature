Feature: Login Page Feature File

Scenario: Login to the application with valid credentials
    Given User launch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Clicks on Login button
    Then Page title of the page should be "Dashboard / nopCommerce administration"
    When User clicks on LogOut button
    Then Page title of the page should be "Your store. Login"
    And close browser