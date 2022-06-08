$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/bankAndCash.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle in \"\u003caccounttitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankURL as \"\u003cinternetBankURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accounttitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "SavingsAccount",
        "CucumberTest",
        "50000",
        "100023",
        "Shweta",
        "2322343455",
        "www.google.com"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle in \"SavingsAccount\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"CucumberTest\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"100023\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"Shweta\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"2322343455\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankURL as \"www.google.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 3040316300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 6159337400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3122168900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4031696500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 16309100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_bankCash_button()"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SavingsAccount",
      "offset": 29
    }
  ],
  "location": "LoginStepsDefinition.user_enters_accountTitle_in(String)"
});
formatter.result({
  "duration": 199800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberTest",
      "offset": 28
    }
  ],
  "location": "LoginStepsDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 138000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 31
    }
  ],
  "location": "LoginStepsDefinition.user_enters_initialBalance_as(String)"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100023",
      "offset": 30
    }
  ],
  "location": "LoginStepsDefinition.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 156900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shweta",
      "offset": 30
    }
  ],
  "location": "LoginStepsDefinition.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 125500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2322343455",
      "offset": 22
    }
  ],
  "location": "LoginStepsDefinition.user_enters_Phone_as(String)"
});
formatter.result({
  "duration": 127100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 32
    }
  ],
  "location": "LoginStepsDefinition.user_enters_internetBankURL_as(String)"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
});