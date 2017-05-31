Feature: Rediff smoke test 


Scenario: verify the Rediff home page all links 
	Given open firefox and enter the url
	When To handle popup windows 
	Then verify all links in home page
	