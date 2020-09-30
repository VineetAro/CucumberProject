$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeHRM.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the Orange HRM application.",
  "description": "",
  "id": "verify-the-orange-hrm-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Creating a job vacancy for DevOPS Engineer",
  "description": "",
  "id": "verify-the-orange-hrm-application.;creating-a-job-vacancy-for-devops-engineer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to the Recruitments page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on the Vacancies menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Clicked on the Add button to navigate to the Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Fill out the necessary details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrm.open_and_login_to_the_orange_hrm_page()"
});
formatter.result({
  "duration": 9843827200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.navigate_to_the_recruitments_page()"
});
formatter.result({
  "duration": 1321684600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.click_on_the_vacancies_menu_item_to_navigate_to_the_vacancies_page()"
});
formatter.result({
  "duration": 575640900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.clicked_on_the_add_button_to_navigate_to_the_add_job_vacancy_form()"
});
formatter.result({
  "duration": 309363600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.fill_out_the_necessary_details()"
});
formatter.result({
  "duration": 622562100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.verify_the_vacancy()"
});
formatter.result({
  "duration": 1940621200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.close_browser()"
});
formatter.result({
  "duration": 173492300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Adding a candidate for recruitment",
  "description": "",
  "id": "verify-the-orange-hrm-application.;adding-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Navigate to the Recruitments page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on the Add button to add candidate information",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "On next page fill in the details of the candidate",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Upload a resume to the form",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Save the application",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Navigate back to the Recruitments page to confirm candidate entry",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrm.open_and_login_to_the_orange_hrm_page()"
});
formatter.result({
  "duration": 8156530600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.navigate_to_the_recruitments_page()"
});
formatter.result({
  "duration": 1253808200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.click_on_the_add_button_to_add_candidate_information()"
});
formatter.result({
  "duration": 909391100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.on_next_page_fill_in_the_details_of_the_candidate()"
});
formatter.result({
  "duration": 452971700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.upload_a_resume_to_the_form()"
});
formatter.result({
  "duration": 55482800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.save_the_application()"
});
formatter.result({
  "duration": 1701929100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.navigate_back_to_the_recruitments_page_to_confirm_candidate_entry()"
});
formatter.result({
  "duration": 2866761200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.close_browser()"
});
formatter.result({
  "duration": 136250500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Add multiple employees",
  "description": "",
  "id": "verify-the-orange-hrm-application.;add-multiple-employees",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Find the PIM option in the menu and click Add",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter details \"\u003cFName\u003e\", \"\u003cLName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Checkbox login Details",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter further details \"\u003cUName\u003e\", \"\u003cStatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Save the employee \"\u003cFName\u003e\", \"\u003cLName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "verify-the-orange-hrm-application.;add-multiple-employees;",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "Status",
        "UName"
      ],
      "line": 37,
      "id": "verify-the-orange-hrm-application.;add-multiple-employees;;1"
    },
    {
      "cells": [
        "name123",
        "lNAME13",
        "Enabled",
        "lNAME32name1"
      ],
      "line": 38,
      "id": "verify-the-orange-hrm-application.;add-multiple-employees;;2"
    },
    {
      "cells": [
        "name223",
        "lNAME23",
        "Enabled",
        "lNAME32name2"
      ],
      "line": 39,
      "id": "verify-the-orange-hrm-application.;add-multiple-employees;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Add multiple employees",
  "description": "",
  "id": "verify-the-orange-hrm-application.;add-multiple-employees;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Find the PIM option in the menu and click Add",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter details \"name123\", \"lNAME13\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Checkbox login Details",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter further details \"lNAME32name1\", \"Enabled\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Save the employee \"name123\", \"lNAME13\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrm.open_and_login_to_the_orange_hrm_page()"
});
formatter.result({
  "duration": 8190771100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.find_the_pim_option_in_the_menu_and_click_it()"
});
formatter.result({
  "duration": 14701982500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name123",
      "offset": 15
    },
    {
      "val": "lNAME13",
      "offset": 26
    }
  ],
  "location": "OrangeHrm.enter_detials_name1_and(String,String)"
});
formatter.result({
  "duration": 215893800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.check_login_details()"
});
formatter.result({
  "duration": 74404800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lNAME32name1",
      "offset": 23
    },
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "OrangeHrm.enter_further_details(String,String)"
});
formatter.result({
  "duration": 176696400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name123",
      "offset": 19
    },
    {
      "val": "lNAME13",
      "offset": 30
    }
  ],
  "location": "OrangeHrm.save_the_employee(String,String)"
});
formatter.result({
  "duration": 1952054000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.close_browser()"
});
formatter.result({
  "duration": 175032800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Add multiple employees",
  "description": "",
  "id": "verify-the-orange-hrm-application.;add-multiple-employees;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Find the PIM option in the menu and click Add",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter details \"name223\", \"lNAME23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Checkbox login Details",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter further details \"lNAME32name2\", \"Enabled\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Save the employee \"name223\", \"lNAME23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrm.open_and_login_to_the_orange_hrm_page()"
});
formatter.result({
  "duration": 7727398700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.find_the_pim_option_in_the_menu_and_click_it()"
});
formatter.result({
  "duration": 3663289000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name223",
      "offset": 15
    },
    {
      "val": "lNAME23",
      "offset": 26
    }
  ],
  "location": "OrangeHrm.enter_detials_name1_and(String,String)"
});
formatter.result({
  "duration": 287280600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.check_login_details()"
});
formatter.result({
  "duration": 81731300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lNAME32name2",
      "offset": 23
    },
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "OrangeHrm.enter_further_details(String,String)"
});
formatter.result({
  "duration": 201778300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name223",
      "offset": 19
    },
    {
      "val": "lNAME23",
      "offset": 30
    }
  ],
  "location": "OrangeHrm.save_the_employee(String,String)"
});
formatter.result({
  "duration": 11234064400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.close_browser()"
});
formatter.result({
  "duration": 151558100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Navigate to the Recruitments page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on the Vacancies menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Clicked on the Add button to navigate to the Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Fill necessary details like \"\u003cvName\u003e\", \"\u003chManager\u003e\", \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "verify the vacancy with  \"\u003cvName\u003e\", \"\u003chManager\u003e\", \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies;",
  "rows": [
    {
      "cells": [
        "vName",
        "hManager",
        "title"
      ],
      "line": 53,
      "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies;;1"
    },
    {
      "cells": [
        "BDDJobs",
        "FName_16605 lName_16605",
        "Android Developer"
      ],
      "line": 54,
      "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies;;2"
    },
    {
      "cells": [
        "TDDJobs",
        "FName_16060 lName_16060",
        "DevOps Engineer"
      ],
      "line": 55,
      "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Navigate to the Recruitments page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on the Vacancies menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Clicked on the Add button to navigate to the Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Fill necessary details like \"BDDJobs\", \"FName_16605 lName_16605\", \"Android Developer\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "verify the vacancy with  \"BDDJobs\", \"FName_16605 lName_16605\", \"Android Developer\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrm.open_and_login_to_the_orange_hrm_page()"
});
formatter.result({
  "duration": 8033552800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.navigate_to_the_recruitments_page()"
});
formatter.result({
  "duration": 1209530700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.click_on_the_vacancies_menu_item_to_navigate_to_the_vacancies_page()"
});
formatter.result({
  "duration": 525462300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.clicked_on_the_add_button_to_navigate_to_the_add_job_vacancy_form()"
});
formatter.result({
  "duration": 376407200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BDDJobs",
      "offset": 29
    },
    {
      "val": "FName_16605 lName_16605",
      "offset": 40
    },
    {
      "val": "Android Developer",
      "offset": 67
    }
  ],
  "location": "OrangeHrm.enter_detials_name2_and(String,String,String)"
});
formatter.result({
  "duration": 514749300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BDDJobs",
      "offset": 26
    },
    {
      "val": "FName_16605 lName_16605",
      "offset": 37
    },
    {
      "val": "Android Developer",
      "offset": 64
    }
  ],
  "location": "OrangeHrm.verify_vacancy(String,String,String)"
});
formatter.result({
  "duration": 1625263900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.close_browser()"
});
formatter.result({
  "duration": 4399169700,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "verify-the-orange-hrm-application.;creating-multiple-vacancies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open and login to the OrangeHRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Navigate to the Recruitments page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on the Vacancies menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Clicked on the Add button to navigate to the Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Fill necessary details like \"TDDJobs\", \"FName_16060 lName_16060\", \"DevOps Engineer\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "verify the vacancy with  \"TDDJobs\", \"FName_16060 lName_16060\", \"DevOps Engineer\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "close the Orange browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrm.open_and_login_to_the_orange_hrm_page()"
});
formatter.result({
  "duration": 8029595200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.navigate_to_the_recruitments_page()"
});
formatter.result({
  "duration": 1181510200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.click_on_the_vacancies_menu_item_to_navigate_to_the_vacancies_page()"
});
formatter.result({
  "duration": 683923100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.clicked_on_the_add_button_to_navigate_to_the_add_job_vacancy_form()"
});
formatter.result({
  "duration": 780622500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TDDJobs",
      "offset": 29
    },
    {
      "val": "FName_16060 lName_16060",
      "offset": 40
    },
    {
      "val": "DevOps Engineer",
      "offset": 67
    }
  ],
  "location": "OrangeHrm.enter_detials_name2_and(String,String,String)"
});
formatter.result({
  "duration": 560059600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TDDJobs",
      "offset": 26
    },
    {
      "val": "FName_16060 lName_16060",
      "offset": 37
    },
    {
      "val": "DevOps Engineer",
      "offset": 64
    }
  ],
  "location": "OrangeHrm.verify_vacancy(String,String,String)"
});
formatter.result({
  "duration": 1926466700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrm.close_browser()"
});
formatter.result({
  "duration": 208129800,
  "status": "passed"
});
});