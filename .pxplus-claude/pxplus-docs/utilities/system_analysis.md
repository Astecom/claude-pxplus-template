# Utility Routines

***TOOLS/SYSTEMANALYSIS** |  **_Analyze PxPlus Installation and Setup_**  
---|---  
  
## Description

The System Analysis utility analyzes the PxPlus installation and setup. It runs the following tests and displays the results, reporting any issues found:

**Test** |  **Description**  
---|---  
PxPlus Install Test |  Create and delete a file in the install directory.  
Create and delete a file in the _Lib_ directory and all _Lib_ sub-directories. _(A permissions check on all Lib sub-directories was added In PxPlus 2023.)_  
WindX Test |  Display client and server PxPlus versions and the WindX program version.  
Ensure client PxPlus version equals the server PxPlus version.  
Validate **%PXPLUS_HOST$** is set correctly and that spawning works.  
PxPlus Environment Variables |  Display all of the PxPlus environment variables.  
Internet Test |  Test that PxPlus can connect to the Internet at **[www.pvxplus.com](https://www.pvxplus.com/)**.  
SSL Test |  Test that PxPlus can connect securely via SSL to **www.pvxplus.com**.  
Display OpenSSL version.  
External DB Test |  Test that ADO is supported.  
Test that ODB is supported. On UNIX, test that UNIX ODBC is setup.  
Test that DB2 is supported and the DB2 client is setup.  
Test that OCI is supported and the Oracle instant client is installed.  
Test that MySQL client library is installed.  
PDF Test |  Check that LibHaru is supported and enabled.  
Open a PDF file.  
  
_(The System Analysis utility was added in PxPlus 2022.)_

This utility can be invoked either in graphical or **[Text-based](system_analysis.htm#text_based)** mode. To invoke this utility in graphical mode, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Installation and Setup_ category and select _System Analysis_.  
From the PxPlus Command window |  Enter: **SA**  
  
The **System Analysis** window displays. Clicking the _Execute_ button runs the tests and displays the results:

  
  
|  |  **_  
Results Displayed (first section has been expanded)_**  
---|---|---  
  
This window consists of the following:

_Execute_ |  Runs the system analysis and, when completed, displays the results in sections. Click on a section to expand it and view the results. Each section is labelled with the name of the test, and the color indicates the status of the tests completed for the section: |  _Green_ |  No issues found. All tests were successful.  
---|---  
_Orange_ |  Possible issues found, which may or may not need to be addressed. Suggested fixes are provided, if possible.  
_Red_ |  Issues found, which must be resolved. Suggested fixes are provided, if possible.  
_Save_ |  Saves the results as HTML.  
_Close_ |  Exits the **System Analysis** utility.  
  
To invoke this utility in text-based mode, use the following format:

> **CALL "*tools/systemanalysis"** ,_results$,htmlOutput_

**_Where:_**

_results$_ |  Output string where the test results are returned.  
---|---  
_htmlOutput_ |  If set, the output will be HTML. If not set or set to 0, the output is plain text.
