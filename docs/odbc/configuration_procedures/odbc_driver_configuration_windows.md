# Configuration Procedures

**PxPlus SQL ODBC Driver Configuration (Windows)**|   
---|---  
  
The PxPlus SQL ODBC Driver is configured using the **ODBC Data Sources** application, which is accessed by invoking the Windows _Start_ menu and searching for _ODBC Data Sources_.

You will see two applications: _ODBC Data Sources (32-bit)_ and _ODBC Data Sources (64-bit)_. Select the one that matches the architecture of the PxPlus SQL ODBC Driver you are trying to configure.

> #### **Note:   
**Both the 32-bit and 64-bit **ODBC Data Sources** applications display 32-bit and 64-bit data sources, even though each only works with its own data source type.

This is where you define each database and set up associated configuration details:

  * Data source
  * Directory containing a PxPlus data dictionary file (_providex.ddf_)
  * INI file used when manually defined
  * Prefix
  * Company and User codes
  * Options
  * Activation information



Either the data file directory or the INI file (or both) must be defined. There must be at least one source for a data dictionary. If both have been specified, then the contents of both will be merged.

To use the PxPlus SQL ODBC Driver in Client/Server mode, you must configure how to connect to the PxPlus SQL Server. The following Server settings are used:

  * Server Name or IP (e.g. PxPlusFileServer or 127.34.28.15)
  * TCP/IP Port (**_Default:_** 20222)
  * Enable SSL Secure Communication
  * Catalog



If you specify a Server Name or IP, you **_must_** specify a Catalog as well.

_(Catalog was added in PxPlus 2018.)  
__(SSL support was added in version 8.00.0000/PxPlus 2024.)_

## Data Source Names (DSN)

A **_data source_** defines the location of data and the connection information needed to access that data. In effect, it defines the path to the data, which may include a network, library, server, database, and other attributes.

To establish a connection to a data source, you must do the following:

  * Ensure that the appropriate PxPlus SQL ODBC Driver is installed on the client or local computer. See **[Installation Procedures](../installation_procedures.md)**.
  * Use the **ODBC Data Sources** application to set up a data source name (DSN) to store the necessary connection information in the Windows registry or in a DSN file.



If the ODBC connection information is stored in the Windows registry, it is called a **_machine_** data source. A machine data source can be either a **_user_** data source (one user has access) or a **_system_** data source (visible to all users on, or connected to, the same computer). The main advantage to having a machine data source is that it provides security within the system to limit who is logged on to view the data source and restrict the ability to copy the data source to other computers. Machine data sources can only be used on the computer where they are defined.

If the ODBC connection information is stored in a DSN file, it is called a **_file_** data source. A file data source is defined in a flat text file, and unlike machine data sources, they can be ported to any system. The main advantage to having a file data source is that it can be placed in common directories and shared between users (e.g. a file DSN can be distributed among clients as a part of an installation package).

The **ODBC Data Sources** application dialog allows you to choose among different DSN tabs, depending on the type of data source to be modified:

**Type of Data Source** |  **Description**  
---|---  
User DSN |  Defines machine data sources for the user currently signed on  
System DSN |  Defines machine data sources for a particular workstation  
File DSN |  Places and maintains data source definitions in a portable text file  
  
Click on one of the tabs to list the current connections for that DSN type. From here, you can change/remove an existing DSN or add/configure a new one.

##  Creating a New DSN

To create a new DSN for the PxPlus SQL ODBC Driver, follow these steps:

**Step** |  **Description**  
---|---  
**1.** |  Click the _Add_ button. The next dialog displays a list of the PxPlus SQL ODBC Drivers installed on your system.  
**2.** |  Select the appropriate PxPlus SQL ODBC Driver from the list. Click the _Finish_ button.  
**3.** |  The **PxPlus SQL ODBC Driver Setup** dialog displays, which allows you to create and configure access to a PxPlus database. This dialog is divided into the following tabbed panels (explained below): **[Basic](odbc_driver_configuration_windows.htm#Mark3)**, **[Server](odbc_driver_configuration_windows.htm#Mark4)**, **[Logon](odbc_driver_configuration_windows.htm#Mark5)**, **[Options](odbc_driver_configuration_windows.htm#Mark6)**, **[Debug](odbc_driver_configuration_windows.htm#Mark7)**, **[Activation](odbc_driver_configuration_windows.htm#Mark8)** and **[About](odbc_driver_configuration_windows.htm#Mark9)**.  
  
##  Basic Configuration Entries

The **Basic** panel (pictured above) consists of the following:

#### **Note:**  
If using the PxPlus SQL ODBC Driver on _local_ data, you **_must_** define either a data dictionary and/or an INI file.

_Data Source Name_ |  Name (DSN) that other applications will use to access the database. Case insensitive. Maximum length is 32 characters. With regards to the PxPlus SQL ODBC Driver, the DSN can be considered the logical name of the database. The following characters are **_not_** permitted in a DSN: **[ ] { } ( ) , ; ? * = ! @ \**  
---|---  
_Description_ |  Optional free-form remark that describes the _Data Source Name_. Maximum length is 127 characters.  
_Data Dictionary_ |  Location of the PxPlus data dictionary file, _providex.ddf_ , which is the relative starting point for all embedded file references. See [**PxPlus Data Dictionary**](../table_definitions/pxplus_data_dictionary.md). Click the Browse button beside the input field to select a directory using the Windows **Select Folder** dialog. Maximum length is 127 characters. If _providex.ddf_ is found in this directory, then all file/table definitions contained in it are made available to the PxPlus SQL ODBC Driver. Using the embedded data dictionary simplifies the installation and maintenance issues regarding the PxPlus SQL ODBC Driver. The _providex.ddf_ file located in the database directory can be set up to contain only a subset of the files used by an application. This can be used to control which files/tables are presented to the end user. To provide different "views" of the database, create separate directories, each containing a different _providex.ddf_ file.

#### **Note:**  
This field should **_not include_** the data dictionary file name. (The _providex.dde_ file is **_not_** required by the PxPlus SQL ODBC Driver.)  
  
**_Example:_**  
  
If the DDF is located at _C:\myapp\data\providex.ddf_ , then use _C:\myapp\data_.  
  
_INI File_ |  Path and name of the INI file used to define the data dictionary manually for files that cannot be handled by the PxPlus embedded data dictionary. See [**INI Definition**](../table_definitions/ini_definition.md). Click the Browse button beside the input field to select an INI file using the Windows **Open File** dialog. Maximum length is 127 characters.

#### **Note:**  
This field **_must include_** the INI file name.  
  
**_Example:_**  
  
If the INI file is located at _C:\myapp\data\mydata.ini_ , then use _C:\myapp\data\mydata.ini_.  
  
_Prefix_ |  Search paths to be inserted in front of all relative file references used in data dictionary or INI definitions. **_As of PxPlus 2018_** , **[Equals Sign](../../directives/prefix.htm#Mark13)** and **[Asterisks](../../directives/prefix.htm#Mark15)** substitution is supported. Use a comma as the separator between multiple prefixes. Maximum length is 1023 characters.  
  
##  Server

The **Server** panel is used to configure the PxPlus SQL ODBC Driver in Client/Server mode:

> This panel consists of the following:

_Server Name or IP_ |  Server network name or IP address required for connecting to the PxPlus SQL Server (e.g. PxPlusSQLServer or 127.34.28.15). Maximum length is 100 characters.  
---|---  
_TCP/IP Port_ |  TCP/IP Port required for connecting to the PxPlus SQL Server. (**_Default_** is 20222.) Maximum length is 15 characters. You can change the TCP/IP Port that the server is listening on via the Control Panel Configuration program, in which case the DSN TCP/IP Port setting on the client side must be changed as well.  
_Enable SSL Secure Communication_ |  Check box to toggle between unencrypted TCP/IP communication and SSL encrypted TCP/IP communication. (**_Default_** is unencrypted TCP/IP communication.) _(SSL support was added in version 8.00.0000/PxPlus 2024.)_  
_Catalog_ |  Name of catalog. A catalog defines a remote data dictionary and/or INI file and optionally a prefix. A maximum number of 256 catalogs may be defined.

#### **Note:**  
If using the PxPlus SQL ODBC Driver on _remote_ data, you **_must_** define a catalog.

_(Catalog support was added in PxPlus 2018.)_  
  
##  Logon

On the **Logon** panel, default values can be set in the _Company code_ , _Default UserID_ , _Password_ and _Session ID_ fields for use in the definition of data file pathnames.

> Whenever a data file pathname starts with an **=**  _(equals sign)_ , the pathname will be scanned.

All occurrences of **%C$** will be replaced with the value set in the default _Company code_ , **%U$** will be replaced with the default _User ID_ , and **%S$** will be replaced with the default _Session ID_. The search for occurrences is case insensitive; thus, **%c$** and **%C$** will both be found and replaced with the value of the _Company code_ field.

When using Sage 100 (or Sage 200) data files, the PxPlus SQL ODBC Driver will prompt the user to enter a valid Company and User ID when invalid data is used during a database connection. For other databases, enter a **?**  _(question mark)_ in any of the optional fields during the DSN setup, and the Driver will prompt for the values during a database connection. There is no validation of the values entered.

This panel consists of the following:

_Company code_ |  Optional value to replace occurrences of **%C$** in a definition pathname. Maximum length is 127 characters.  
---|---  
_Default UserID_ |  Optional value to replace occurrences of **%U$** in a definition pathname. Maximum length is 64 characters.  
_Password_ |  Optional password value. Maximum length is 63 characters. Passwords are validated in one of two ways: using either a Sage 100 or Sage 200 security DLL or using a custom security DLL where the developer has coded his/her own. See [**Security DLL**](security_dll.md). If a security DLL is not found, no password validation is done.  
_Session ID_ |  Optional value to replace occurrences of **%S$** in a definition pathname. Maximum length is 15 characters. This parameter provides the ability for applications to create temporary files that can be accessed from an ODBC application. Once the temporary file has been generated, the complete file name or a portion of the name can either be manually entered into the DSN information or sent to the Driver programmatically using a connection string.  
  
##  Options

The **Options** panel is used for additional optional settings:

> This panel consists of the following:

_Path to Views DLL_ |  Path to _pvxwin32.dll_ (Windows) or _libpvx.so_ (UNIX/Linux). This is required by the PxPlus SQL ODBC Driver in order to use the Views system. Click the Browse button beside the input field to select a directory using the Windows **Select Folder** dialog.  
---|---  
_Dirty Read_ |  See **[Performance Tuning](odbc_driver_configuration_windows.htm#Mark2)**.  
_Burst mode_ |  See **[Performance Tuning](odbc_driver_configuration_windows.htm#Mark2)**.  
_Key Restrict_ |  Check box to restrict keys. This option allows the Driver to be used with an application, such as Lotus Approach 97, which does not support keys, or supports them with limitations on length, field segments, or use of sub-strings.  
_Silent mode_ |  Check box to suppress most prompts or message boxes that the PxPlus SQL ODBC Driver generates during processing.  
_Legacy NULL mode_ |  Check box to enable legacy NULL mode where columns are defined as nullable and empty strings are returned as null. _(The Legacy NULL mode option was added in PxPlus 2017.)_  
_Enforce DOUBLE_ |  Check box to set default format of "double" for numeric data. This helps avoid conflicts with MS Office 2000 and other applications that do not support the decimal data type for numeric values.  
_NULL Date_ |  Check box to suppress invalid date error. The Driver validates the contents of date columns at run time. If a value is invalid, the Driver generates an error message and ceases processing of the table. This replaces an invalid entry with a null value and allows the Driver to continue processing.  
_Strip trailing spaces_ |  Check box to enable stripping trailing spaces from key values when joining multiple tables.  
_Read Only_ |  Check box to suppress Write access for this DSN connection. This is useful for providing certain users with Read Only access while allowing other users Write access.  
_Cache Size MB_ |  Establishes the amount of memory to use for local storage of intermediate results. If this value is zero, then intermediate information will not be cached locally on the workstation. Instead, it must be re-acquired from the server, which may lead to poorer performance on slower connections. If a cache size is specified, then that amount of system memory will be used to store information locally. Once the specified amount of memory is utilized, the Driver will store additional information in a temporary disk file on the local workstation. Performance gains will vary with the environment. In a high bandwidth environment (LAN), caching may not be as beneficial as in a low bandwidth environment (WAN), where the impact can be significant.  
  
**_Performance Tuning_**

The following options provide methods to reduce overhead when processing a file:

_Dirty Read_ |  Check box for Dirty Read mode of operation to skip the normal file consistency checks. Dirty reads can speed file processing by reducing the number of locks issued against a file. However, this may result in inconsistent data should the file be updated while being read by the PxPlus SQL ODBC Driver.  
---|---  
_Burst mode_ |  Check box to enable Burst mode. This helps reduce some of the overhead created by temporary locks. With Burst mode set, the PxPlus SQL ODBC Driver locks the file header for either 50 file operations or three-tenths of a second, whichever occurs first. This decreases the number of times the file must be locked and the number of times that internal buffers may need to be reloaded. Refer to the next paragraph below for an explanation on the effect of temporary locks.  
  
Normally, when the PxPlus SQL ODBC Driver accesses data files, it must place a temporary lock on the file. This temporary lock guarantees that the Driver reads key tables and structures that are in a consistent state and not in the process of being altered.

Once the temporary lock is established, the Driver checks the file header to see if it has been changed since the last time the file was accessed. If the file has not been altered, then the PxPlus SQL ODBC Driver can use any of the data still maintained in its buffers. If the file has been altered, all data in the buffers is discarded.

When the Driver has completed its access to the data file, the temporary lock is released. The process is repeated for each file accessed by the Driver, for each operation on the file.

##  Debug

The **Debug** option traces active sessions within the PxPlus SQL ODBC Driver and generates a log file. This reports internal diagnostic information that is different from the SQL tracing provided by the Microsoft ODBC Driver Manager.

> This panel consists of the following:

_Enable Debug_ |  Check box to enable the PxPlus SQL ODBC Driver Debug option.  
---|---  
_Log File_ |  Path and name of the Debug log file. Click the Browse button beside the input field to select a log file using the Windows **Open File** dialog. If this field is blank, the PxPlus SQL ODBC Driver defaults to C:\PXPSQLODBC.LOG.  
_Connection String_ |  Button to invoke a display of the connection string returned by the Driver. The information displayed in the area above the button is the connection string representing the currently saved DSN attributes. See [**Connection String Keywords**](connection_string_keywords.md).  
_Test Connection_ |  Button to test the connection to the configured database. If successful, the area above the button will display the following: _Connection succeeded. Datasource includes x tables._ **_Where:_** _x_ is the number of tables/views reported for the database.  
_Test Schema_ |  Button to test if the PxPlus SQL ODBC Driver can access the tables/views defined by the data dictionary. If successful, the area above the button will display the following: _Schema test succeeded. x tables accessible._ **_Where:_** _x_ is the number of tables/views accessible by the PxPlus SQL ODBC Driver.

#### **Note:   
**All tables are tested first and then the views are tested. If you do not have the views path set up correctly but the data dictionary defines views, this test will return an error for the first view defined.  
  
If you are using the 64-bit version of the PxPlus SQL ODBC Driver and the data is hosted on Windows, there is no 64-bit views DLL. Therefore, if the data dictionary defines views, this test will return an error for the first view defined. These results, however, do mean that all tables were accessible as they have all been tested before any view is tested.  
  
If you do not intend to use views through the ODBC, you can interpret that as a successful test.

_(The Test Schema button was added in PxPlus 2016.)_  
  
##  Activation

The **Activation** panel allows you to view and modify your activation information:

> This panel consists of the following:

_Serial Number_ |  Serial number from your PxPlus Professional or Web license.  
---|---  
_Number of Users_ |  User count from your PxPlus Professional or Web license.  
_Activation key_ |  ODBC Activation key from your PxPlus Professional or Web license.  
  
##  About

The **About** panel provides information about the PxPlus SQL ODBC Driver and a link to the PxPlus Help documentation.

> This panel displays the following:

  * PxPlus SQL ODBC Driver version number
  * OpenSSL version information _(SSL support was added in version 8.00.0000/PxPlus 2024.)_
  * Link to PxPlus SQL ODBC Documentation
  * _Files_ is the PxPlus SQL ODBC Driver DLL that this DSN is using. This is useful if you have multiple versions installed to help determine which DSN is using which Driver.


