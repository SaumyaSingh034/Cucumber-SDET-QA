Feature: Customers Page

Scenario: Add new Valid Customer
    Given User launch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
     And Clicks on Login button
    Then Page title of the page should be "Dashboard / nopCommerce administration"