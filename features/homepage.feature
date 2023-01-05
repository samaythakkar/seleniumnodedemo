Feature: Test Google


Scenario: Validate search results of google - Pass
Given User in on google homepage
When User searches for 'Michael Jordan'
Then title should be displayed as 'Michael Jordan'
And subtitle should be displayed as 'Chairperson of the Charlotte Hornets'
And tabs 'Overview,News,Stats' should be dispalyed
And total number of results displayed are '10'


Scenario: Validate search results of google - Fail
Given User in on google homepage
When User searches for 'Michael Jordan'
Then title should be displayed as 'Mchael Jordan'
And subtitle should be displayed as 'Chairperson of the Charlotte Hornets'
And tabs 'Overview,News,Stats' should be dispalyed
And total number of results displayed are '10'