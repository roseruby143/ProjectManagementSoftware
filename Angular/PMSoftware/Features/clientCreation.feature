#Author: Ruby Dev
#Date : 12/11/2022
Feature: Feature to Validate the client management

Scenario: Creating a new Client
  Given Ruby is on all-clients page
  When Ruby clicks the Add New Client button
  And fills out all the required information
  And clicks Save button
  Then a new client is created
  And the all clients page is refreshed to show the new client. 

Scenario: Updating an existing Client
  Given Ruby is on all-clients page
  When Ruby clicks the Edit button icon across the client data to be updated
  And updates all the required information on the form
  Then a new client is created
  And the all clients page is refreshed to show the new client.
  
Scenario: Deleting an existing Client
  Given Ruby is on all-clients page
  When Ruby clicks the Delete button icon across the client data to be deleted
  And clicks the confirm button
  Then the client is deleted
  And the all clients page is refreshed.