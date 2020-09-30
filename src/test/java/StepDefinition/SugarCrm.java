package StepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SugarCrm {
	WebDriver driver;
	Actions action;

	WebDriverWait wait;

	@Given("^Application is open and user is logged in$")
	public void application_is_open_and_user_is_logged_in() throws Throwable {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		wait = new WebDriverWait(driver, 20);

		// Open application
		driver.get("https://alchemy.hguy.co/crm");

		// Login to the application
		String username = "admin";
		String password = "pa$$w0rd";

		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.id("username_password")).sendKeys(password);
		driver.findElement(By.id("bigbutton")).submit();

	}

	@Then("^Count the number of Dashlets$")
	public void count_the_number_of_Dashlets() throws Throwable {
		// get Count
		Thread.sleep(2000);
		List<WebElement> dashlet = driver.findElements(
				By.xpath("/html/body/div[3]/div/div/div[1]/div[2]/div/div[2]/div/table/tbody/tr/td/ul/li/div"));
		System.out.println("Number of Dashlets are: " + dashlet.size());

	}

	@Then("^Close the CRM browser$")
	public void close_the_CRM_browser() throws Throwable {
		driver.close();
	}

	@Then("^Navigate to the lead$")
	public void navigate_to_the_lead() throws Throwable {
		// Verify the visibility of Sales Menu
		action = new Actions(driver);

		WebElement sales = driver.findElement(By.id("grouptab_0"));
		action.moveToElement(sales).build().perform();
		wait.until(ExpectedConditions.visibilityOf(sales));

		// Click on activity
		action.moveToElement(driver.findElement(By.id("moduleTab_9_Leads"))).click().perform();
	}

	@And("^Create new record \"(.*)\", \"(.*)\", \"(.*)\", \"(.*)\"$")
	public void createNewLeadRecord(String Salutation, String Firstname, String Lastname, String Phone) {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		action = new Actions(driver);
		WebElement nLead = driver.findElement(By.xpath("/html/body/div[3]/nav/div/div[2]/ul/li[2]/span[2]/a"));
		action.moveToElement(nLead).build().perform();
		wait.until(ExpectedConditions.visibilityOf(nLead));

		action.moveToElement(driver.findElement(By.partialLinkText("Create Lead"))).click().perform();

		// Fill Details
		Select salute = new Select(driver.findElement(By.id("salutation")));
		salute.selectByVisibleText(Salutation);
		driver.findElement(By.id("first_name")).sendKeys(Firstname);
		driver.findElement(By.id("last_name")).sendKeys(Lastname);
		driver.findElement(By.id("phone_mobile")).sendKeys(Phone);

		driver.findElement(By.cssSelector("div.buttons:nth-child(17) > input:nth-child(1)")).click();

	}

	@Then("^Verify the record \"(.*)\", \"(.*)\", \"(.*)\", \"(.*)\"$")
	public void verify_the_record(String Salutation, String Firstname, String Lastname, String Phone) throws Throwable {
		navigate_to_the_lead();
		
		/**
		driver.findElement(By.cssSelector("ul.listViewLinkButton_top:nth-child(5) > li:nth-child(1) > a:nth-child(1)"))
				.click();
		driver.switchTo();
		driver.findElement(By.xpath("//*[@id='searchDialog']/div/div/div[1]/ul/li[2]")).click();

		WebElement fName = driver.findElement(By.id("first_name_advanced"));
		fName.clear();
		fName.sendKeys(Firstname);
		fName.sendKeys(Keys.ENTER);
		**/
		// Verify records
		List<WebElement> leads = driver
				.findElements(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr/td[3]/b/a"));
		for (WebElement lead : leads) {
			if (lead.getText().equals(Salutation + " " + Firstname + " " + Lastname)) {
				System.out.println("Found");
				break;
			}
		}

	}

	@Then("^Navigate to the Activities$")
	public void navigate_to_the_Activities() throws Throwable {
		action = new Actions(driver);

		WebElement activity = driver.findElement(By.id("grouptab_3"));
		action.moveToElement(activity).build().perform();
		wait.until(ExpectedConditions.visibilityOf(activity));

		// Click on Meeting
		action.moveToElement(driver.findElement(By.id("moduleTab_9_Meetings"))).click().perform();
	}

	@Then("^Create new meeting record \"(.*)\", \"(.*)\", \"(.*)\"$")
	public void create_new_meeting_record(String subject, String sDate, String desc) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		action = new Actions(driver);
		WebElement nMeeting = driver.findElement(By.xpath("/html/body/div[3]/nav/div/div[2]/ul/li[2]/span[2]/a"));
		action.moveToElement(nMeeting).build().perform();
		wait.until(ExpectedConditions.visibilityOf(nMeeting));

		action.moveToElement(driver.findElement(By.partialLinkText("Schedule Meeting"))).click().perform();

		// Schedule new meeting

		driver.findElement(By.id("name")).sendKeys(subject);
		WebElement date = driver.findElement(By.id("date_start_date"));
		date.clear();
		date.sendKeys(sDate);

		// enter description
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.id("description"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Element.sendKeys(desc);
		
		Element.sendKeys(Keys.chord(Keys.ALT+"a"));
	
		
	}

	@Then("^Verify the meeting in View meetings record \"(.*)\", \"(.*)\", \"(.*)\"$")
	public void verify_the_meeting_in_View_meetings(String subject, String sDate, String desc) throws Throwable {
		//Navigate to View Meetings
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		action = new Actions(driver);
		WebElement nMeeting = driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/ul/li[2]/span[2]/a"));
		action.moveToElement(nMeeting).build().perform();
		wait.until(ExpectedConditions.visibilityOf(nMeeting));

		action.moveToElement(driver.findElement(By.partialLinkText("View Meetings"))).click().perform();
		/**
		// Verfiy the meeting
		driver.findElement(By.cssSelector("#pagination > td > table > tbody > tr > td:nth-child(1) > ul.clickMenu.selectmenu.searchLink.SugarActionMenu.listViewLinkButton.listViewLinkButton_top > li > a"))
		.click();
		driver.switchTo();
		driver.findElement(By.cssSelector("#searchDialog > div > div > div.modal-header > ul > li.searchTabHandler.basic.active")).click();
		WebElement fName = driver.findElement(By.id("name_basic"));
		fName.clear();
		fName.sendKeys(subject);
		fName.sendKeys(Keys.ENTER);
**/
		// Assess returned val
		
		List<WebElement> meetings = driver
				.findElements(By.xpath("/html/body/div[2]/div[1]/div/div[3]/form[2]/div[3]/table/tbody/tr/td[4]"));
		for (WebElement meeting : meetings) {
			if (meeting.getText().equals(subject)) {
				System.out.println("Found");
				break;
			}
		}
	}

	@Then("^Navigate to the Products$")
	public void navigate_to_the_Products() throws Throwable {
		action = new Actions(driver);

		WebElement all = driver.findElement(By.id("grouptab_5"));
		action.moveToElement(all).build().perform();
		wait.until(ExpectedConditions.visibilityOf(all));

		// Click on Products

		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement products = driver.findElement(By.xpath("//*[text() = 'Products']"));
		js.executeScript("arguments[0].scrollIntoView();", products);
		products.click();

	}

	@Then("^Create new Product record \"(.*)\", \"(.*)\", \"(.*)\"$")
	public void create_new_Product_record(String pName, String pNum, String pPrice) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		action = new Actions(driver);
		WebElement nProduct = driver.findElement(By.xpath("/html/body/div[3]/nav/div/div[2]/ul/li[2]/span[2]/a"));
		action.moveToElement(nProduct).build().perform();
		wait.until(ExpectedConditions.visibilityOf(nProduct));

		action.moveToElement(driver.findElement(By.partialLinkText("Create Product"))).click().perform();

		// Schedule new meeting

		driver.findElement(By.id("name")).sendKeys(pName);
		driver.findElement(By.id("part_number")).sendKeys(pNum);
		driver.findElement(By.id("price")).sendKeys(pPrice);
		driver.findElement(By.id("SAVE")).click();

	}

	@Then("^Verify the View products record \"(.*)\", \"(.*)\", \"(.*)\"$")
	public void verify_the_View_products(String pName, String pNum, String pPrice) throws Throwable {
		
		//navigate to View Products
		    	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
				action = new Actions(driver);
				WebElement nProd = driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/ul/li[2]/span[2]/a"));
				action.moveToElement(nProd).build().perform();
				wait.until(ExpectedConditions.visibilityOf(nProd));

				action.moveToElement(driver.findElement(By.partialLinkText("View Products"))).click().perform();


		//Verify Products
		/**
		driver.findElement(By.cssSelector("ul.listViewLinkButton_top:nth-child(4) > li:nth-child(1) > a:nth-child(1)"))
				.click();
		driver.switchTo();
		driver.findElement(By.cssSelector("li.searchTabHandler:nth-child(1)")).click();
		WebElement fName = driver.findElement(By.id("name_basic"));
		fName.clear();
		fName.sendKeys(pName);
		fName.sendKeys(Keys.ENTER);
**/
		// Assess returned val

		List<WebElement> meetings = driver
				.findElements(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr/td[3]/b/a"));
		for (WebElement meeting : meetings) {
			if (meeting.getText().equals(pName)) {
				System.out.println("Found");
				break;
			}
		}

	}
}
