Feature: Techfios bank and cash New Account Functionality

Scenario Outline: User should be able to login with valid credentials and open a new account

Given User is on Techfios login page
When User enters username as "<username>"
When User enters password as "<password>"
When User clicks signin button
Then User should land on dashboard page
And User clicks on bankCash button
And User clicks on newAccount
And User enters accountTitle in "<accounttitle>"
And User enters description as "<description>" 
And User enters initialBalance as "<initialBalance>" 
And User enters accountNumber as "<accountNumber>" 
And User enters contactPerson as "<contactPerson>" 
And User enters Phone as "<Phone>" 
And User enters internetBankURL as "<internetBankURL>" 
And User clicks on submit button
Then User should be able to validate account created successfully

Examples: 
| username | password | accounttitle | description | initialBalance | accountNumber | contactPerson | Phone | internetBankURL | 
| demo@techfios.com | abc123 | SavingsAccount | CucumberTest | 50000 | 100023 | Shweta | 2322343455 | www.google.com|