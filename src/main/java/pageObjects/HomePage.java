package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	WebDriver ldriver;
	
	@FindBy(xpath="//*[text()='Logout']")
	@CacheLookup
	WebElement logoutBtn;
	
	
	public HomePage(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	public void clickOnLogOut()
	{
		logoutBtn.click();
	}
	
	

}
