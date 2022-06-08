package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepsDefinition extends TestBase {
	

	LoginPage loginPageObj;
	@Given("^User is on Techfios login page$")
	public void user_is_on_Techfios_login_page() {
	initDriver();
	driver.get("https://techfios.com/billing/?ng=login/");
			
	}

	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
	loginPageObj.enterUserName(username);	
	}
	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPageObj.enterPassword(password);	
	}
	

	@When("^User clicks signin button$")
	public void user_clicks_signin_button() {
		loginPageObj.clickSignInButton();	

	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPageObj.getPageTitle());
	}
	@Then("^User clicks on bankCash button$")
	public void user_clicks_on_bankCash_button() {
		loginPageObj.bankCashbutton();
	}

	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() {
		loginPageObj.newAccount();
	}

	@Then("^User enters accountTitle in \"([^\"]*)\"$")
	public void user_enters_accountTitle_in(String accounttitle) {
		loginPageObj.enteraccountTitle(accounttitle);
	}

	@Then("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) {
		loginPageObj.enterdescription(description);
		
		
	}

	@Then("^User enters initialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_as(String initialBalance) {
		loginPageObj.enterdescription(initialBalance);
		
	}
	

	@Then("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber) {
		loginPageObj.enterdescription(accountNumber);
		
	}

	@Then("^User enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String contactPerson) {
		loginPageObj.enterdescription(contactPerson);
	}

	@Then("^User enters Phone as \"([^\"]*)\"$")
	public void user_enters_Phone_as(String  Phone) {
		loginPageObj.enterPhone(Phone);
		
		
	}


	

	@Then("^User enters internetBankURL as \"([^\"]*)\"$")
	public void user_enters_internetBankURL_as(String internetBankURL) {
		loginPageObj.enterinternetBankURL(internetBankURL);
	}

	@Then("^User clicks on submit button$")
	public void user_clicks_on_submit_button() {
		loginPageObj.clicksubmitbutton();
	}
	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {}
	
	}

