package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.HomePage;
import pageObjects.LoginPage;

public class LoginPageTest {
	
	public WebDriver driver;
	public LoginPage lp;
	public HomePage hp;
	
	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
		
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\FrameworkPractice\\Cucumber_SDET\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		lp = new LoginPage(driver);
	  
	}

	@When("User opens url {string}")
	public void user_opens_url(String url) {
		System.out.println("Url of the page is "+url);
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	   
	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String username, String passw) {
		System.out.println("User name is --> "+username);
		lp.setUserName(username);
		System.out.println("Password is  --> "+passw);
		lp.setPassword(passw);
		
	    
	}

	@When("Clicks on Login button")
	public void clicks_on_Login_button() {
		
		hp = lp.clickOnLoginBtn();
	   
	}

	@Then("Page title of the page should be {string}")
	public void page_title_of_the_page_should_be(String actualTitle) {
		if(driver.getPageSource().contains("Login was unsuccessful. Please correct the errors and try again.\r\n" + 
				"The credentials provided are incorrect"))
		{
			driver.quit();
			Assert.assertTrue(false);
		}
		else
		{
			System.out.println("Actual Title = "+actualTitle);
			String expectedTitle = lp.titleOfPage();
			System.out.println("Expected Title : "+expectedTitle);
			Assert.assertEquals(actualTitle, expectedTitle);
		}
		
	  
	}

	@When("User clicks on LogOut button")
	public void user_clicks_on_LogOut_button() {
		System.out.println(" Log Out ");
		hp.clickOnLogOut();
	   
	}

	@Then("close browser")
	public void close_browser() {
		driver.quit();
	   
	}

}
