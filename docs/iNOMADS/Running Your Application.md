# iNomads  
  
**Running Your Application**|   
---|---  
  
For the most part, all NOMADS-based applications can be run under iNomads. When running your application under iNomads, the system changes the current directory to your desired location, then either CALLs a specified program or invokes a NOMADS panel.

iNomads launches using the start_up program **start_up.web** that is stored in the _*plus/inomads_ directory. This allows you to have both a starting directory _start_up_ and one that is run when iNomads is launched, regardless of the starting directory location.

When your application is done, it should return (Exit) to iNomads to have the proper browser close logic executed. This means your code should not issue a QUIT, RELEASE, or BYE upon exit, but rather just END or EXIT.

No start_up program is run by iNomads in your target directory.

##  Transactions

Since iNomads is run from a Web browser, the system comes with a method that tells it what program or panel is being requested. This is done using a transaction identifier, which is simply a key to a file (_tx.conf_) that resides on the host and indicates the name of the program or the name of the panel and library, the starting directory, the template/style sheet to use, and the URL to launch when completed.

Normally, the transaction to run would be supplied on the requesting URL.

**_Example:_**

To run the customer edit 'custedit' transaction, you would request the URL:

> http://localhost?txid=custedit

This would launch iNomads and send a request to run the transaction identified as 'custedit'.

Transaction definitions can be altered using the administration functions within iNomads. The administration functions are accessed using the Transaction ID _admin_. To run any of the administration functions, you will be prompted for a password. Transactions are defined and maintained using **[Transaction Maintenance](Transaction%20Maintenance.md)**.

## Using iNomads with Webster+

Webster+ provides built-in support for launching iNomads transactions from sidebar links and menu bar entries.

To allow both Webster+ and iNomads to be used within the same application, you will need to have two unique Web server setups - one to run Webster+ and another one for iNomads. These can run on different ports on the same server or be on different hosts. If using EZWeb, you simply need to launch two different EZWeb servers.

For information and examples on how to set this up, see **[Using iNomads with Webster+](../Webster/Using%20iNomads%20with%20Webster.md)**.

_(Support for using iNomads with Webster+ was added in PxPlus 2023.)_

## Detecting iNomads

For the most part, the fact that your application is running under iNomads as opposed to standard NOMADS should have no effect on your code. Most functionality of the controls and system calls is the same.

iNomads itself uses a global object to control most of its functionality. The handle to this global object can be found in the global variable **%inomads**. Through this handle, you can access a number of properties and functions provided by the **[Object Properties and Methods](Object%20Properties%20and%20Methods.md)** regarding your application and environment such as URL Parameters, Transaction ID, Template in use, Web URL, etc.

Should your application need to know if it is running in iNomads, you can test the **%inomads** variable for non-zero.

All iNomads controls themselves are also PxPlus objects that provide significant additional functionality over standard NOMADS. Each iNomads control contains not only all the properties of normal NOMADS controls but also a number of additional properties that contain information, as listed below.

**Property** |  **Description**  
---|---  
**'Name$** |  Name of the control  
**'Variable$** |  Name of the variable associated with the control  
**'Classname$** |  Class name specified in the NOMADS panel library  
**'Value_prior$** |  Previous value of the control  
**'OnFocus$** |  Logic associated with On Focus event  
**'OnChange$** |  Logic associated with the On Change (or On Push) event  
**'Popup$** |  Popup menu name and library  
**'Popup_logic$** |  Popup menu pre-execution logic  
**'Validator$** |  Validation routine  
**'Formatter$** |  Formatting routine  
**'Rules$** |  Validation rules  
**'Query$** |  Panel name and library for associated query  
  
## Restricted Functionality

Since your application is being run on a browser, the system can only provide limited remote processing ability. This means that, unlike when running a NOMADS application locally or through WindX, you cannot directly access files from on the workstation nor can you run any PxPlus or other programs locally. These restrictions are imposed to make sure your application does not access/update any workstation information for security purposes.

Some of the most common restrictions that your application may have to avoid are:

|  You cannot access local files or programs using the "[WDX]" prefix. This includes OPEN, EXECUTE, INVOKE and SYSTEM_HELP.  
---|---  
|  The Clipboard Read/Write functions are not allowed as it could allow you to see what the user had in his/her Clipboard buffer.  
|  OLE/COM objects are not directly supported as they could violate end user security, and the browser may not be running on a platform that supports these functions such as an iPhone. There is a facility within the system to provide for emulation of OLE/COM components.  
|  The CHART control is currently not implemented.  
  
#### **Note:**  
Development is ongoing within the iNomads product with the intent to provide alternatives that can be used both within the browsers and within non-browser environments.

## Object Properties and Methods

To access a list of Object Properties and Methods, see **[Object Properties and Methods](Object%20Properties%20and%20Methods.md)**.

## See Also

**[Transaction Maintenance](Transaction%20Maintenance.md)**  
**[Built-in Popup Windows](Built-in%20Popup%20Windows.md)  
[Overriding Controls](Overriding%20Controls.md)**
