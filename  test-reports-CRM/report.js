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
  "duration": 15004969800,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.count_the_number_of_Dashlets()"
});
formatter.result({
  "duration": 2559172300,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4213660600,
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
        "Maxx",
        "Mustermann",
        "999999"
      ],
      "line": 18,
      "id": "verify-different-functionalities-in-crm-application;create-leads-using-parameterization;;2"
    },
    {
      "cells": [
        "Mrs.",
        "Silkee",
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
  "name": "Create new record \"Mr.\", \"Maxx\", \"Mustermann\", \"999999\"",
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
  "name": "Verify the record \"Mr.\", \"Maxx\", \"Mustermann\", \"999999\"",
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
  "duration": 17182972200,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_lead()"
});
formatter.result({
  "duration": 1239314000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 19
    },
    {
      "val": "Maxx",
      "offset": 26
    },
    {
      "val": "Mustermann",
      "offset": 34
    },
    {
      "val": "999999",
      "offset": 48
    }
  ],
  "location": "SugarCrm.createNewLeadRecord(String,String,String,String)"
});
formatter.result({
  "duration": 4539290800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 19
    },
    {
      "val": "Maxx",
      "offset": 26
    },
    {
      "val": "Mustermann",
      "offset": 34
    },
    {
      "val": "999999",
      "offset": 48
    }
  ],
  "location": "SugarCrm.verify_the_record(String,String,String,String)"
});
formatter.result({
  "duration": 2558747000,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 85361900,
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
  "name": "Create new record \"Mrs.\", \"Silkee\", \"Musterfrau\", \"88889\"",
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
  "name": "Verify the record \"Mrs.\", \"Silkee\", \"Musterfrau\", \"88889\"",
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
  "duration": 15722793600,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_lead()"
});
formatter.result({
  "duration": 2130767600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 19
    },
    {
      "val": "Silkee",
      "offset": 27
    },
    {
      "val": "Musterfrau",
      "offset": 37
    },
    {
      "val": "88889",
      "offset": 51
    }
  ],
  "location": "SugarCrm.createNewLeadRecord(String,String,String,String)"
});
formatter.result({
  "duration": 4461510200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 19
    },
    {
      "val": "Silkee",
      "offset": 27
    },
    {
      "val": "Musterfrau",
      "offset": 37
    },
    {
      "val": "88889",
      "offset": 51
    }
  ],
  "location": "SugarCrm.verify_the_record(String,String,String,String)"
});
formatter.result({
  "duration": 2862467300,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 114315000,
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
  "name": "Create new meeting record \"\u003csubject\u003e\", \"\u003csDate\u003e\", \"\u003cdescription\u003e\", \"\u003cinvitee1\u003e\", \"\u003cinvitee2\u003e\", \"\u003cinvitee3\u003e\"",
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
        "description",
        "invitee1",
        "invitee2",
        "invitee3"
      ],
      "line": 30,
      "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;1"
    },
    {
      "cells": [
        "name1_10/27/2020",
        "10/27/2020",
        "Meeting_1",
        "Silke",
        "sil",
        "Mustermann"
      ],
      "line": 31,
      "id": "verify-different-functionalities-in-crm-application;schedule-a-meeting-and-invite-members;;2"
    },
    {
      "cells": [
        "name2_10/22/2020",
        "10/22/2020",
        "Meeting_2",
        "Max",
        "Til",
        "Mustermann"
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
  "name": "Create new meeting record \"name1_10/27/2020\", \"10/27/2020\", \"Meeting_1\", \"Silke\", \"sil\", \"Mustermann\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the meeting in View meetings record \"name1_10/27/2020\", \"10/27/2020\", \"Meeting_1\"",
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
  "duration": 14440124300,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Activities()"
});
formatter.result({
  "duration": 1726928200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1_10/27/2020",
      "offset": 27
    },
    {
      "val": "10/27/2020",
      "offset": 47
    },
    {
      "val": "Meeting_1",
      "offset": 61
    },
    {
      "val": "Silke",
      "offset": 74
    },
    {
      "val": "sil",
      "offset": 83
    },
    {
      "val": "Mustermann",
      "offset": 90
    }
  ],
  "location": "SugarCrm.create_new_meeting_record(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5742083300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1_10/27/2020",
      "offset": 44
    },
    {
      "val": "10/27/2020",
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
  "duration": 30814875900,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4385795100,
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
  "name": "Create new meeting record \"name2_10/22/2020\", \"10/22/2020\", \"Meeting_2\", \"Max\", \"Til\", \"Mustermann\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the meeting in View meetings record \"name2_10/22/2020\", \"10/22/2020\", \"Meeting_2\"",
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
  "duration": 13436769800,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Activities()"
});
formatter.result({
  "duration": 1476585500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2_10/22/2020",
      "offset": 27
    },
    {
      "val": "10/22/2020",
      "offset": 47
    },
    {
      "val": "Meeting_2",
      "offset": 61
    },
    {
      "val": "Max",
      "offset": 74
    },
    {
      "val": "Til",
      "offset": 81
    },
    {
      "val": "Mustermann",
      "offset": 88
    }
  ],
  "location": "SugarCrm.create_new_meeting_record(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 33229786800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#search_first_name\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-88FLBF9\u0027, ip: \u0027192.168.1.190\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\VINEET~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61121}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0c8cec0471b20af66a0ab90d899b1970\n*** Element info: {Using\u003did, value\u003dsearch_first_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.SugarCrm.create_new_meeting_record(SugarCrm.java:162)\r\n\tat ✽.And Create new meeting record \"name2_10/22/2020\", \"10/22/2020\", \"Meeting_2\", \"Max\", \"Til\", \"Mustermann\"(sugarCRM.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2_10/22/2020",
      "offset": 44
    },
    {
      "val": "10/22/2020",
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
  "status": "skipped"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 16260658600,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Products()"
});
formatter.result({
  "duration": 1540456900,
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
  "duration": 3593184400,
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
  "duration": 1758514000,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 145396300,
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
  "duration": 15913981600,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.navigate_to_the_Products()"
});
formatter.result({
  "duration": 1378823100,
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
  "duration": 3979631200,
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
  "duration": 2227143700,
  "status": "passed"
});
formatter.match({
  "location": "SugarCrm.close_the_CRM_browser()"
});
formatter.result({
  "duration": 4357630600,
  "status": "passed"
});
});