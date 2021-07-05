package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver ldriver;
	
	/*
	 * Page Objects
	 */
	@FindBy (id="Email")
	@CacheLookup
	WebElement emailId;
	
	@FindBy(id="Password")
	@CacheLookup
	WebElement password;
	
	@FindBy(xpath="//button[@type='submit']")
	@CacheLookup
	WebElement loginBtn;
	
	
	public LoginPage(WebDriver rdriver){
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
		
		
	}
	
	
	public String titleOfPage()
	{
		return ldriver.getTitle();
	}
	
	public void setUserName(String username)
	{
		emailId.clear();
		emailId.sendKeys(username);
	}
	
	public void setPassword(String pass)
	{
		password.clear();
		password.sendKeys(pass);
	}
	
	public HomePage clickOnLoginBtn()
	{
		loginBtn.click();
		return new HomePage(ldriver);
	}

}
