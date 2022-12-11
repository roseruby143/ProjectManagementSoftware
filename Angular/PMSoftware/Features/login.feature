#Author: Ruby Dev
#Date : 12/11/2022
Feature: Feature to Validate the login flow

  Scenario: Login to Admin account
    Given Ruby is on login page
    When Ruby fills out valid admin username and password
    And clicks the login button
    Then Login is successful
    And Ruby is directed to the welcome page
    And Ruby has access to all available actions she can perform.

  Scenario: Register a new account
    Given Ruby is on login page
    When Ruby clicks the Register button
    And fills out all the required information
    Then her new account is created
    And she is directed to welcome page
    And a confirmation email is sent her email address.

  Scenario: Regaining access using Forgot Password
    Given Ruby is on login page
    And she has forgotton her user credentials
    When Ruby clicks the Forgot Password link
    And fills out all the required information
    Then new password creation link is sent to her registered email
    And she is directed to login page
