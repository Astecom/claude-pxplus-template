# Setup and Installation

**Transaction Maintenance**|   
---|---  
  
A _transaction_ defines the program or NOMADS panel, starting directory and template to use for an iNomads application. Only those programs/applications defined as transactions can be run on iNomads. These define the entry points to the system by providing the following information:

  * Name of the program **_or_** Name of the panel and library
  * Starting Directory
  * Template/style sheet to use
  * URL to launch when complete (or _Close_)



In iNomads, transactions are defined using **Transaction Maintenance** and maintained in the _*plus/inomads/tx.conf_ file.

> To invoke **Transaction Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup_. In the **[iNomads Setup](iNomads%20Setup.md)** window, select the _TX Maint_ button.  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, invoke the **[iNomads Setup](iNomads%20Setup.md)** window by either clicking the _Admin_ button or selecting _admin_ from the _Transaction_ drop box. Select the _TX Maint_ button.  
From the PxPlus Command prompt |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window by entering the following command: **RUN "*plus/inomads/admin"**. Select the _TX Maint_ button.  
  
Each transaction in the system has the following attributes:

_Transaction_ |  Name _(txid)_ of the transaction. This case insensitive value will be used to identify the transaction on the _txid_ parameter on the URL. Click the Query button (binoculars) to select from a list of existing transactions, including the following pre-defined transactions: |  _admin_ |  Runs *plus/inomads/admin for accessing System Administration functions. See **[iNomads Setup](iNomads%20Setup.md)**.  
---|---  
_dashboard_ |  Runs the **[IDE Dashboard](../PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#webide)**.  
_debug_ |  Runs a Web-based debug program for viewing and debugging processes. The **Process Debugger** contains five tabs: |  **Process** |  Process selection.  
---|---  
**Stack** |  Program stack contents.  
**Files** |  List of open files and status.  
**Trace** |  Includes an option to enable trace of logic.  
**Console** |  Text mode display of console output.  
_default_ |  Runs a sample application selector, **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)**, which is used in development to select the transaction, panel name or program, library and working directory of the NOMADS panel to run.  
_ide_menu_ |  Runs *ide/inomads/inomads_mnu.  
_rescue_ |  Runs the Rescue process to reconnect to the task.  
_test_ |  Runs a browser test routine.  
_webide_ |  Runs a multi-user version of the PxPlus Web IDE launcher program and can be modified to suit your needs. See **[Setting Up a Web IDE Transaction](../PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#transaction)**. _(The webide transaction was added in PxPlus 2022 Update 1.)_  
_Panel/Program_ |  This field contains either the name of the program to run or the name of the NOMADS panel to invoke. If the _Panel Library_ field is empty, then this field will be considered the name of the program to run.  
_Panel Library_ |  This field contains the name of the NOMADS panel library to use. If left blank, the panel name above is considered to be a simple program name.  
_Starting Directory_ |  Directory from which the selected transaction will be run.  
_Call Start_UP before running_ |  If this check box is selected, the Start_up program will be called first before performing the program.  
_Template_ |  Name of the default template to be applied to the transaction. Select a template from the drop down list or manually enter the template name.  
_Security Info_ |  |  _Requires Logon_ |  Select this check box to require users to enter a User ID and Password to launch the iNomads transaction. To use this option, user security must be set up by using the **[Security Manager](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)** to define security classifications and users.  
---|---  
_Password_ |  **_(Optional)_** If a password is entered, users will be required to enter this additional password to launch the iNomads transaction if user security is set up. If user security is not set up, this will be the only password that users will need to enter.  
_On Exit URL_ |  This field can contain the URL to a Web page that will display when the transaction completes, or it may contain the word _Close_ , in which case the system will attempt to close the browser window.

#### **Note:**  
Some browsers will **_not_** allow the main browser window to be closed.  
  
|   
_Test_ |  Runs the selected transaction on a Web browser in "test" mode as it would appear to the user, using the current settings displayed on the **Transaction Maintenance** window. This allows you to preview the transaction and make any further adjustments if needed. When you are satisfied with the results and want to save the changes, click the _Write_ button. When the _Test_ button is selected, EZWeb Server will automatically start (if not already running), using the default port and secure (HTTPS) settings specified in the **[Launch EZWeb Server](../EZWebServer/EZweb%20Introduction.htm#Mark1)** window. If no default port has been assigned, a message will prompt you to define it. _(The ability to enable secure TLS/SSL mode for the EZWeb server was added in PxPlus 2022.)_

#### **Note:**  
The _Test_ button is **_not applicable_** when running WindX.  
  
_Write_ |  Saves/updates the selected transaction without exiting **Transaction Maintenance**.  
_Delete_ |  Removes the selected transaction from the file without exiting **Transaction Maintenance**.  
_Clear_ |  Clears the selected transaction from the screen without exiting **Transaction Maintenance**. This allows you to create a new transaction or select an existing transaction. If any unsaved changes are detected, you are prompted to save them. The cleared transaction is not deleted from the file.  
_Close_ |  Exits **Transaction Maintenance**. If any unsaved changes are detected, you are asked if you want to save them.
