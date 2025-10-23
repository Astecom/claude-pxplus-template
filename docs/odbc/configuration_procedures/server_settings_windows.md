# Configuration Procedures

**PxPlus SQL Server Configuration (Windows)**|   
---|---  
  
The PxPlus SQL Server is configured in Windows by using the **PxPlus SQL Server Settings** program, which can be accessed directly from the Windows _Start_ menu or from the _Control Panel_ under the _Programs_ category. The **PxPlus SQL Server Settings** program requires Administrator privileges to run; therefore, click _OK_ on the prompt asking you for permission. The default TCP/IP port number is 20222.

To enable SSL encrypted TCP/IP communication, click the _Enable SSL Secure Communication_ check box and manually input or use the Browse button to select an SSL certificate file. The certificate should be in PEM format.

#### **Note:**  
PxPlus SQL Server uses OpenSSL libraries to provide SSL/TLS functionality. An X509 certificate created for use with OpenSSL or Apache is needed. (Apache also uses OpenSSL libraries.)  
  
An X509 certificate usually comes in the form of a PEM file, which contains both the certificate and private key.

To use the **[Views System](../../Views%20System/Introduction.md)**, the _Path to Views Library**must**_ point to a directory with _pvxwin32.dll_ in it.

_(The Path to View Library setting was added in PxPlus 2018.)_

> _(SSL support was added in version 8.00.0000/PxPlus 2024.)_

##  Activation

To activate the PxPlus SQL Server, you must use the Serial Number, User Count, and ODBC Activation Key of your PxPlus Professional or Web license.

To run the PxPlus SQL Server in demonstration mode, leave the fields blank. The PxPlus SQL Server in demo mode will allow one user to access the server with demo messages appearing periodically on the client's screen.

As with most PxPlus products, valid activation information (Serial Number, User Count and Activation Key) must be recorded to activate the PxPlus SQL Server. If the activation is accepted, the configuration program returns a confirmation message when you select the _Apply_ button.

It is possible to change the activation at any time. For example, an increase in the number of users on the system could require a new license and new activation values. The PxPlus SQL Server controls the number of concurrent client connections and denies access if the number of users is exceeded.

Because activations are only verified during the initialization process, the server must be restarted when a new activation is recorded.

##  NT Service

The PxPlus SQL Server installation program checks the operating system, and it automatically sets it up as a service. On installation, the server's _Startup_  _Type_ defaults to _Automatic_ , which means that the PxPlus SQL service will start automatically every time the system reboots and will run independently of any logged-on user. This setting is evident by the message displayed in the _Service_ folder: "PxPlus SQL Service is running".

As with other services, the SQL service can be controlled (Stopped, Paused, etc.) using the Windows _Services_ dialog, which is accessed via the _Control Panel_ (in the _Administrative Tools_ sub-folder). The PxPlus SQL service can also be uninstalled (and reinstalled) via the **Service** panel.

##  Catalogs

Define sets of data that the SQL server can access. The client will use the _Catalog Name_ to tell the server what data it wants to access. A maximum number of 256 catalogs may be defined.

#### **Note:**  
At least one catalog **_must_** be defined; otherwise, the server will not start.

On installation, the default catalog is defined. Catalog definitions can be viewed/changed in the **Catalogs** panel of the **PxPlus SQL Server Settings** dialog:

> This panel consists of the following:

_Default_ |  Select the default catalog. If you set a default, it will unset the previous default.  
---|---  
_Add_ |  Adds catalog.  
_Update_ |  Updates any changes to the catalog.  
_Remove_ |  Deletes the catalog.  
_Catalog Name_ |  Name of the catalog. The client will use the catalog name to specify what data to access.  
_Data Dictionary_ |  Path to the _providex.ddf_ file to which the client's DSN will have access. **_This entry is case sensitive._** Click the Browse button beside the input field to select a directory using the Windows **Select Folder** dialog.

#### **Note:**  
This field should **_not include_** the data dictionary file name.  
  
**_Example:_**  
  
If the DDF is located at _C:\myapp\data\providex.ddf_ , then use _C:\myapp\data_.  
  
_INI File_ |  Path and file name of INI file to which the client's DSN will have access. **_This entry is case sensitive._** Click the Browse button beside the input field to select an INI file using the Windows **Open File** dialog.

#### **Note:**  
This field **_must include_** the INI file name.  
  
**_Example:_**  
  
If the INI file is located at _C:\myapp\data\mydata.ini_ , then use _C:\myapp\data\mydata.ini_.  
  
_Prefix_ |  Search paths to be inserted in front of all relative file references used in Data Dictionary or INI definitions. As of PxPlus 2018, **[Equals Sign](../../directives/prefix.htm#Mark13)** and **[Asterisks](../../directives/prefix.htm#Mark15)** substitution is supported. Use a comma as the separator between multiple prefixes. Maximum length is 1023 characters.  
  
_(Catalog support was added in PxPlus 2018.)  
(Support for up to 256 catalogs was added in PxPlus 2019.)_

##  Permissions

On installation, the server is set to default access permissions. These permissions can be viewed/changed on the **Permissions** panel of the **PxPlus SQL Server Settings** dialog:

> In this sample screen shot, the server administrator has temporarily denied John access; however, John would still have Read Only access to directories, as all users of all companies may access any directory.

This panel consists of the following:

_Read Only  
  
Access Denied_ |  Select the mode of access permissions.  
---|---  
_Add_ |  Adds access permissions.  
_Update_ |  Updates any changes to the access permissions.  
_Remove_ |  Deletes the access permissions.  
_User ID_ |  Specific User ID supplied by the client driver. An *****  _(asterisk)_ signifies _all_ User IDs. Spaces are significant. "John /"and "John/" are considered two different entries.  
_Company Code_ |  Specific Company Code supplied by the client driver. An *****  _(asterisk)_ signifies _all_ Company Codes. Spaces are significant. "/ ABC" and "/ABC" are considered two different entries.  
_Data Dictionary_ |  A comma or semi-colon separated list of paths to the _providex.ddf_ files to which the client's DSN will have access. An *****  _(asterisk)_ signifies that _any_ data dictionary path is valid. **_This entry is case sensitive._**

#### **Note:**  
This field should **_not include_** the data dictionary file name.  
  
**_Example:  
  
_** If the DDF is located at _C:\myapp\data\providex.ddf_ , then use _C:\myapp\data_.  
  
_INI File_ |  Comma or semi-colon separated list of paths and file names of INI files to which the client's DSN will have access. An * _(asterisk)_ signifies _any_ INI file path and file name. **_This entry is case sensitive._**

#### **Note:**  
This field **_must include_** the INI file name.  
  
**_Example:_**  
  
If the INI file is located at _C:\myapp\data\mydata.ini_ , then use _C:\myapp\data\mydata.ini_.  
  
The **_default settings_** below grant users almost unrestricted Read access to the server's data sources. An *****  _(asterisk)_ indicates _any_ ; therefore, for security reasons, you should reset the parameters based on your own business rules _immediately following installation_.

**Setting** |  **Default** |  **Definition**  
---|---|---  
_Access_ |  A |  Access allowed  
_R/W_ |  R |  Read only  
_User ID_ |  * |  Any users  
_Company Code_ |  * |  Any company  
_Data Dictionary Path_ |  * |  Any data dictionaries  
_INI File Path_ |  * |  Any INI files  
  
The PxPlus SQL Server checks access permissions by searching the permission rules from the maximum restriction to the lowest one. It is a method to grant access to specific directories on the server based on a client's User ID and Company Code.

If the check for a specific User ID and Company Code fails, then the User ID is substituted with ***** (_any_) and the combination for User ID = _any_ with Company Code = _specific_ is checked against the corresponding rule if it is present on the system. The next check is performed for User ID = _specific_ , Company Code = _any_ , and the last check is for User ID = _any_ , Company Code = _any_.

Refer to the following table:

**Sequence** |  **User ID** |  **Company Code**|   
---|---|---|---  
1. |  _Specific_ |  _Specific_ |  **_Highest Restriction_**  
2. |  _Any_ |  _Specific_|   
3. |  _Specific_ |  _Any_|   
4. |  _Any_ |  _Any_ |  **_Lowest Restriction_**  
  
## About

The **About** panel displays Version information about the SQL Server and OpenSSL version.

_(SSL support was added in version 8.00.0000/PxPlus 2024.)_
