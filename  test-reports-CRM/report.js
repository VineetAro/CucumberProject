$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sugarCRM.feature");
formatter.feature({
  "line": 2,
  "name": "Verify different functionalities in CRM Application",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Counting Dashlets",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;counting-dashlets",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Count the number of Dashlets",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 20218163100,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.count_the_number_of_Dashlets()"
});
formatter.result({
  "duration": 3905239800,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 114981000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Create leads using parameterization",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the lead",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Create new record \"\u003csalutation\u003e\", \"\u003cfName\u003e\", \"\u003clName\u003e\", \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the record \"\u003csalutation\u003e\", \"\u003cfName\u003e\", \"\u003clName\u003e\", \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;",
  "rows": [
    {
      "cells": [
        "salutation",
        "fName",
        "lName",
        "phone"
      ],
      "line": 17,
      "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;;1"
    },
    {
      "cells": [
        "Mr.",
        "Max",
        "Mustermann",
        "999999"
      ],
      "line": 18,
      "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;;2"
    },
    {
      "cells": [
        "Mrs.",
        "Silke",
        "Musterfrau",
        "88889"
      ],
      "line": 19,
      "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Create leads using parameterization",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the lead",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Create new record \"Mr.\", \"Max\", \"Mustermann\", \"999999\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the record \"Mr.\", \"Max\", \"Mustermann\", \"999999\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 15668663500,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_lead()"
});
formatter.result({
  "duration": 1390883800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 19
    },
    {
      "val": "Max",
      "offset": 26
    },
    {
      "val": "Mustermann",
      "offset": 33
    },
    {
      "val": "999999",
      "offset": 47
    }
  ],
  "location": "SugarCrm.createNewLeadRecord(String,String,String,String)"
});
formatter.result({
  "duration": 4165701900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 19
    },
    {
      "val": "Max",
      "offset": 26
    },
    {
      "val": "Mustermann",
      "offset": 33
    },
    {
      "val": "999999",
      "offset": 47
    }
  ],
  "location": "SugarCrm.verify_the_record(String,String,String,String)"
});
formatter.result({
  "duration": 1975667700,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 225101000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create leads using parameterization",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the lead",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Create new record \"Mrs.\", \"Silke\", \"Musterfrau\", \"88889\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the record \"Mrs.\", \"Silke\", \"Musterfrau\", \"88889\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 14135522600,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_lead()"
});
formatter.result({
  "duration": 1250859200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 19
    },
    {
      "val": "Silke",
      "offset": 27
    },
    {
      "val": "Musterfrau",
      "offset": 36
    },
    {
      "val": "88889",
      "offset": 50
    }
  ],
  "location": "SugarCrm.createNewLeadRecord(String,String,String,String)"
});
formatter.result({
  "duration": 4227162100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 19
    },
    {
      "val": "Silke",
      "offset": 27
    },
    {
      "val": "Musterfrau",
      "offset": 36
    },
    {
      "val": "88889",
      "offset": 50
    }
  ],
  "location": "SugarCrm.verify_the_record(String,String,String,String)"
});
formatter.result({
  "duration": 2408742200,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4402007200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Schedule a meeting and invite members",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Navigate to the Activities",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Create new meeting record \"\u003csubject\u003e\", \"\u003csDate\u003e\", \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the meeting in View meetings record \"\u003csubject\u003e\", \"\u003csDate\u003e\", \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;",
  "rows": [
    {
      "cells": [
        "subject",
        "sDate",
        "description"
      ],
      "line": 30,
      "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;1"
    },
    {
      "cells": [
        "name1_10/26/2020",
        "10/26/2020",
        "Meeting_1"
      ],
      "line": 31,
      "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;2"
    },
    {
      "cells": [
        "name2_10/21/2020",
        "10/21/2020",
        "Meeting_2"
      ],
      "line": 32,
      "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Schedule a meeting and invite members",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Navigate to the Activities",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Create new meeting record \"name1_10/26/2020\", \"10/26/2020\", \"Meeting_1\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the meeting in View meetings record \"name1_10/26/2020\", \"10/26/2020\", \"Meeting_1\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 20536692300,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Activities()"
});
formatter.result({
  "duration": 1215317200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1_10/26/2020",
      "offset": 27
    },
    {
      "val": "10/26/2020",
      "offset": 47
    },
    {
      "val": "Meeting_1",
      "offset": 61
    }
  ],
  "location": "SugarCrm.create_new_meeting_record(String,String,String)"
});
formatter.result({
  "duration": 4980274800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1_10/26/2020",
      "offset": 44
    },
    {
      "val": "10/26/2020",
      "offset": 64
    },
    {
      "val": "Meeting_1",
      "offset": 78
    }
  ],
  "location": "SugarCrm.verify_the_meeting_in_View_meetings(String,String,String)"
});
formatter.result({
  "duration": 31445667300,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4090339700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Schedule a meeting and invite members",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Navigate to the Activities",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Create new meeting record \"name2_10/21/2020\", \"10/21/2020\", \"Meeting_2\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the meeting in View meetings record \"name2_10/21/2020\", \"10/21/2020\", \"Meeting_2\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 16045501300,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Activities()"
});
formatter.result({
  "duration": 1165003700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2_10/21/2020",
      "offset": 27
    },
    {
      "val": "10/21/2020",
      "offset": 47
    },
    {
      "val": "Meeting_2",
      "offset": 61
    }
  ],
  "location": "SugarCrm.create_new_meeting_record(String,String,String)"
});
formatter.result({
  "duration": 4170815600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2_10/21/2020",
      "offset": 44
    },
    {
      "val": "10/21/2020",
      "offset": 64
    },
    {
      "val": "Meeting_2",
      "offset": 78
    }
  ],
  "location": "SugarCrm.verify_the_meeting_in_View_meetings(String,String,String)"
});
formatter.result({
  "duration": 30898201600,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4387632200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Create a Product",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-a-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to the Products",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Create new Product record \"\u003cpName\u003e\", \"\u003cpNum\u003e\", \"\u003cpPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the View products record \"\u003cpName\u003e\", \"\u003cpNum\u003e\", \"\u003cpPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-a-product;",
  "rows": [
    {
      "cells": [
        "pName",
        "pNum",
        "pPrice"
      ],
      "line": 42,
      "id": "verify-different-functionalities-in-crm-application;create-a-product;;1"
    },
    {
      "cells": [
        "MagentaZuhause M",
        "CT123455",
        "129.9"
      ],
      "line": 43,
      "id": "verify-different-functionalities-in-crm-application;create-a-product;;2"
    },
    {
      "cells": [
        "Magenta Hybrid mit TV",
        "CT223334",
        "555.98"
      ],
      "line": 44,
      "id": "verify-different-functionalities-in-crm-application;create-a-product;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Create a Product",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-a-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to the Products",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Create new Product record \"MagentaZuhause M\", \"CT123455\", \"129.9\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the View products record \"MagentaZuhause M\", \"CT123455\", \"129.9\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 14010718800,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Products()"
});
formatter.result({
  "duration": 1764226900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MagentaZuhause M",
      "offset": 27
    },
    {
      "val": "CT123455",
      "offset": 47
    },
    {
      "val": "129.9",
      "offset": 59
    }
  ],
  "location": "SugarCrm.create_new_Product_record(String,String,String)"
});
formatter.result({
  "duration": 3399156600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MagentaZuhause M",
      "offset": 33
    },
    {
      "val": "CT123455",
      "offset": 53
    },
    {
      "val": "129.9",
      "offset": 65
    }
  ],
  "location": "SugarCrm.verify_the_View_products(String,String,String)"
});
formatter.result({
  "duration": 1637633800,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4144889400,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Create a Product",
  "description": "",
  "id": "verify-different-functionalities-in-crm-application;create-a-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sugarCRM"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Application is open and user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to the Products",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Create new Product record \"Magenta Hybrid mit TV\", \"CT223334\", \"555.98\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the View products record \"Magenta Hybrid mit TV\", \"CT223334\", \"555.98\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "SugarCrm.application_is_open_and_user_is_logged_in()"
});
formatter.result({
  "duration": 14854216700,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Products()"
});
formatter.result({
  "duration": 1203189200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magenta Hybrid mit TV",
      "offset": 27
    },
    {
      "val": "CT223334",
      "offset": 52
    },
    {
      "val": "555.98",
      "offset": 64
    }
  ],
  "location": "SugarCrm.create_new_Product_record(String,String,String)"
});
formatter.result({
  "duration": 3501491100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magenta Hybrid mit TV",
      "offset": 33
    },
    {
      "val": "CT223334",
      "offset": 58
    },
    {
      "val": "555.98",
      "offset": 70
    }
  ],
  "location": "SugarCrm.verify_the_View_products(String,String,String)"
});
formatter.result({
  "duration": 1516330400,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 325321200,
  "status": "passed"
});
});