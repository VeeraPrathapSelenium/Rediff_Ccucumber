package com.Rediff;

import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Rediffclass {
	public WebDriver driver;

	@Given("open firefox and enter the url")
	public void launch_broweser() throws InterruptedException {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.navigate().to("http://www.rediff.com/");
		Thread.sleep(3000);
	}

	@When("To handle popup windows")
	public void popup_window() {
		Set<String> windowId = driver.getWindowHandles(); 
		Iterator<String> itererator = windowId.iterator();

		String mainWinID = itererator.next();
		String newAdwinID = itererator.next();

		driver.switchTo().window(newAdwinID);
		driver.close();
		driver.switchTo().window(mainWinID);
	}
	
	@Then("verify all links in home page")
	public void links_find() throws Exception
	{
		List<WebElement> links = driver.findElements(By.tagName("a"));
		int size = links.size();
		//System.out.println(size);
		for(int i=1;i<=size-1;i++)
		{
			WebElement ele=links.get(i);
			ele.click();
			System.out.println("Id number:="+i+"----"+driver.getTitle());
			Thread.sleep(2000);
			System.out.println("                      ");
			driver.navigate().back();
			links = driver.findElements(By.tagName("a"));
			
		}
	}

}
