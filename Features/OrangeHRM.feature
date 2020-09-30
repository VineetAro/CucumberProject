@OrangeHRM
Feature: Verify the Orange HRM application. 
  
  
  Scenario: Creating a job vacancy for DevOPS Engineer
    Given Open and login to the OrangeHRM Page
    Then Navigate to the Recruitments page
    And Click on the Vacancies menu item to navigate to the vacancies page 
    When Clicked on the Add button to navigate to the Add Job Vacancy form
    Then Fill out the necessary details
    And verify the vacancy 
    And close the Orange browser
 

  Scenario: Adding a candidate for recruitment
  Given Open and login to the OrangeHRM Page
  Then Navigate to the Recruitments page
  And click on the Add button to add candidate information
  And On next page fill in the details of the candidate
  Then Upload a resume to the form
  And Save the application
  Then Navigate back to the Recruitments page to confirm candidate entry
  And close the Orange browser
  
   
  Scenario Outline: Add multiple employees
  Given Open and login to the OrangeHRM Page
  Then Find the PIM option in the menu and click Add
  And Enter details "<FName>", "<LName>"
  And Checkbox login Details
  Then Enter further details "<UName>", "<Status>"
  And Save the employee "<FName>", "<LName>"
  And close the Orange browser
  
    Examples: 
    
      |FName|LName|Status|UName| 
      |name123|lNAME13|Enabled|lNAME32name1|
      |name223|lNAME23|Enabled|lNAME32name2|


Scenario Outline: Creating multiple vacancies
   Given Open and login to the OrangeHRM Page
   Then Navigate to the Recruitments page
   And Click on the Vacancies menu item to navigate to the vacancies page 
   When Clicked on the Add button to navigate to the Add Job Vacancy form
   Then Fill necessary details like "<vName>", "<hManager>", "<title>"
   And verify the vacancy with  "<vName>", "<hManager>", "<title>"
   And close the Orange browser
   
   
   Examples: 
   |vName|hManager|title|
   |BDDJobs|FName_16605 lName_16605|Android Developer|
	 |TDDJobs|FName_16060 lName_16060|DevOps Engineer|

	 
   