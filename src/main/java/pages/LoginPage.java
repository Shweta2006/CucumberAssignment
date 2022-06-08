package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	public LoginPage(WebDriver driver) {
	this.driver = driver;	
	}
// Element Library

	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement Password;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
	WebElement SignInButton;
	//@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	//WebElement bankcash;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement bankAndCash;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[1]/h5")
	WebElement AddNewAccount;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement accountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement initialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement accountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement contactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement phone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement internetBankingURL;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement submitButton;
	
	//Methods to interact with the elements
	public void enterUserName(String username)  {
		UserName.sendKeys(username);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e1) {
			
			e1.printStackTrace();
		}
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
						e.printStackTrace();
		}
		}
		public void enterPassword(String password) {
			Password.sendKeys(password);
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			}
		public void clickSignInButton() {
			SignInButton.click();
			
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				
				e.printStackTrace();}
			}
			
			public String getPageTitle() {
				return driver.getTitle();
			}
			public void clickbankcash() {
				
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					
					e.printStackTrace();
				}
			}
			public void enterBankAccountPage() {
				// TODO Auto-generated method stub
				
			}
			public void bankCashbutton() {
				// TODO Auto-generated method stub
				
			}
			public void newAccount() {
				// TODO Auto-generated method stub
				
			}
			public void enteraccountTitle(String accountTitle2) {
				// TODO Auto-generated method stub
				
			}
			public void enterdescription(String description2) {
				// TODO Auto-generated method stub
				
			}
			public void enterPhone(String phone2) {
				// TODO Auto-generated method stub
				
			}
			public void enterinternetBankURL(String internetBankURL) {
				// TODO Auto-generated method stub
				
			}
			public void clicksubmitbutton() {
				// TODO Auto-generated method stub
				
			}
}
