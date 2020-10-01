@sugarCRM
Feature: Verify different functionalities in CRM Application
 
  Scenario: Counting Dashlets
    Given Application is open and user is logged in
    Then Count the number of Dashlets
    And Close the CRM browser
    
 Scenario Outline: Create leads using parameterization
    Given Application is open and user is logged in
    Then Navigate to the lead
    And Create new record "<salutation>", "<fName>", "<lName>", "<phone>"
    And Verify the record "<salutation>", "<fName>", "<lName>", "<phone>"
    And Close the CRM browser

    Examples: 
      |salutation| fName  | lName  		| phone |
      | 	 Mr.   | Maxx  | Mustermann| 999999|
      |    Mrs.  | Silkee   | Musterfrau| 88889 |


 Scenario Outline: Schedule a meeting and invite members
  Given Application is open and user is logged in
    Then Navigate to the Activities
    And Create new meeting record "<subject>", "<sDate>", "<description>", "<invitee1>", "<invitee2>", "<invitee3>"
    And Verify the meeting in View meetings record "<subject>", "<sDate>", "<description>"
    And Close the CRM browser
 
 Examples: 
      | subject  				 | sDate 					| description | invitee1 | invitee2 |invitee3 |
      | name1_10/27/2020 |     10/27/2020 | Meeting_1 	|	Silke			|	sil				|Mustermann|
      | name2_10/22/2020 |     10/22/2020 | Meeting_2 	| Max			  |	Til				|Mustermann|
     
  Scenario Outline: Create a Product
  Given Application is open and user is logged in
    Then Navigate to the Products
    And Create new Product record "<pName>", "<pNum>", "<pPrice>"
    And Verify the View products record "<pName>", "<pNum>", "<pPrice>"
    And Close the CRM browser
 
 Examples: 
      | pName  | pNum | pPrice|
      | MagentaZuhause M |     CT123455 | 129.9 |
      | Magenta Hybrid mit TV|     CT223334 | 555.98 |