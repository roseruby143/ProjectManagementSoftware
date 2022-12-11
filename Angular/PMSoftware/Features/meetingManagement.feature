#Author: your.email@your.domain.com
#Keywords Summary :

Feature: Feature to Validate the meeting management

Scenario: Scheduling New Meeting
  Given Ruby is on manage-meetings page
  When Ruby clicks the Schedule New Meeting button
  And fills out all the required information
  Then a new meeting is scheduled
  And the manage-meetings page is refreshed to show the new meeting
  And an email is sent to all the client and the POC.

Scenario: Update an existing Meeting
  Given Ruby is on manage-meetings page
  When Ruby clicks the Edit button icon across the meeting to be updated
  And fills out all the required information
  Then the meeting is updated
  And the manage-meetings page is refreshed to show the new meeting data
  And an email is sent to all the client and the POC.
  
Scenario: Cancel a Meeting
  Given Ruby is on manage-meetings page
  When Ruby clicks the delete Meeting button icon
  And clicks the confirm button to confirm the cancellation
  Then the meeting is deleted
  And the manage-meetings page is refreshed
  And an email is sent to all the client and the POC.
  