# Data Dictionary Maintenance  
  
**Database Export Utility**|   
---|---  
  
The **Database Export Utility** simplifies the process of adding a PxPlus data file to an existing database by providing the following capability:

  * Add the tables to the database (based on their data dictionary definitions).
  * Populate tables using the data in the PxPlus data file.
  * Add tables to a specified prefix file.
  * Validate the existing data against the data dictionary definitions to uncover any potential issues once the tables are converted into the database.



The **[Bulk Database Export Utility](Bulk%20Database%20Export.md)** allows you to selectively export multiple table definitions from the PxPlus data dictionary into the specified database. It can also be used to validate native PxPlus data files, load data from native PxPlus data files to the database table, create database link files and add database table entries to the prefix file.

_(The Database Conversion Utility was added in PxPlus 2019 and renamed to Database Export Utility in PxPlus 2023.)  
(The Bulk Database Export Utility was added in PxPlus 2023.)_

#### **Warning!**  
If you are using this utility to create a database table that already exists, the database table will be removed and re-created.  
  
**_To prevent the loss of data, ensure that table names are unique and do not already exist in the selected database_**.

The following database types are supported: **[ADO](../../command_tags/ADO.md)**, **[DB2](../../command_tags/db2.md)**, **[OCI](../../command_tags/oci.md)**, **[ODB](../../command_tags/odb.md)** and **[MYSQL](../../command_tags/mysql.md)**. Note the following:

  * To use the **DB2** interface, you **_must_** have either the DB2 database or the DB2 client installed on a workstation, and the path to the _db2cli.dll_ file **_must_** be locatable by the PATH environment variable. When using the DB2 client, a _db2cli.ini_ file is created in the user directory to specify such parameters as the _Hostname_ (address), _uid_ (user) and _pwd_ (password).
  * To use the **OCI** interface, you **_must_** have either the Oracle Server or the Oracle client installed on a workstation, and the path to the _oci.dll_ file **_must_** be locatable by the PATH environment variable. When a workstation is connecting to a remote server, the IP address of the server is included in the _sid_ value in the following format: "ip_address/ORACLE_SID:table".
  * To use the **MySQL** interface, you **_must_** have either the MySQL/MariaDB database or the MySQL/MariaDB client installed on a workstation, and the **libmysql.dll/libmariadb.dll** file **_must_** be locatable by the PATH environment variable.



_(Support for the newer MariaDB C Connector when using the MySQL interface was added in PxPlus 2024 Update 1.)_

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[Data Dictionary Maintenance Tool Bar](Overview.htm#toolbar)** |  On the Data Dictionary Maintenance **[Main Panel](Overview.htm#mainpanel)**, enter or select the name of an existing data file definition. Click the _Export_ button in the **_Database_** section of the tool bar.  
From the **[Data Dictionary Maintenance Menu Bar](Overview.htm#menubar)** |  On the Data Dictionary Maintenance **[Main Panel](Overview.htm#mainpanel)**, enter or select the name of an existing data file definition. From the menu bar, select _File_ > _Database Export Utility_.  
From the PxPlus Command line |  Enter: **Run "*dict/sqlmake**  
Call Export actions programmatically |  See **[Calling Export Actions Programmatically](Database%20Export.htm#Mark6)**.  
  
The **Database Export Utility** is displayed below with a sample entry:

> This utility consists of the following:

_File to Convert_ |  Data file to be converted into a database table. This file name should be relative to the current working directory. If this utility is invoked from **Data Dictionary Maintenance** , the name of the selected data file definition will be displayed (and disabled) with its description shown to the right.  
---|---  
_Bulk Export_ |  Button that launches the **[Bulk Database Export Utility](Bulk%20Database%20Export.md)**. _(The Bulk Export button was added in PxPlus 2023.)_  
_Database Type_ |  Type of database. Selections are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
_Data Source**or** Server Address_ |  **_(This field changes depending on the Database Type selected)_** If _Database Type_ is **[ODB](../../command_tags/odb.md)**: Enter the name of the _Data Source_. **_(Required for ODB)_** If _Database Type_ is **[MySQL](../../command_tags/mysql.md)**, **[OCI](../../command_tags/oci.md)** or **[ADO](../../command_tags/ADO.md)**: Enter a _Server Address_. If the database is running locally, this value may be omitted. **_(Required for ADO)_** If _Database Type_ is **[DB2](../../command_tags/db2.md)**: This field is disabled, as only the _Database Name_ is used and the server is defined in the _db2cli.ini_ file.  
_Database Name**or** System ID_ |  **_(This field changes depending on the Database Type selected)_** If _Database Type_ is **[ODB](../../command_tags/odb.md)**, **[MySQL](../../command_tags/mysql.md)**, **[DB2](../../command_tags/db2.md)** or **[ADO](../../command_tags/ADO.md)**: Enter the _Database Name_. **_(Required for MySQL or DB2)_** If _Database Type_ is **[OCI](../../command_tags/oci.md)**: Enter the Oracle _System ID_ value. **_(Required for OCI)_**  
_Table Name_ |  Name to be used for the table in the database. Defaults to the same name as the data dictionary entry.  
_Alternate File Name_ |  Alternate file name to be added to the prefix file if any data dictionary elements have been defined with **[Alternate Names](Element%20Description.htm#Mark10)**. Defaults to the _File to Convert_ name+"_ALT". If no data dictionary elements have alternate names, this field will be disabled.  
_User Name_ |  User login name.  
_Password_ |  User password.  
_Additional Options_ |  Parameters to be included in the **OPT=** string when opening the database or updating the prefix file. All parameters are semi-colon separated. Defaults to NONULLS=Y;NULLPADKEY=Y for all database types **_except_** OCI, which defaults to NULLPADKEY=Y. _(The additional option NULLPADKEY=Y was added in PxPlus 2023.)_  
_Test Connection_ |  This button is enabled when the minimum number of required fields have been entered. When selected, a message displays to indicate if the connection to the database is valid.  
**Database Setup Information** |  |  _Override Database Setup Information_ |  Select this check box to enable and manually edit the _Pathname_ , _Options_ and _Create_ inputs, which have been populated based on the data entered in the top section of the panel.  
---|---  
_Pathname_ |  Pathname to the database file.  
_Options_ |  Options to be specified when the file is opened and/or written to the prefix file.  
_Create_ |  **[CREATE TABLE](../../directives/create_table.md)** command to be used when creating the table in the database.  
_Errors_ |  Displays any issues discovered when building the **CREATE TABLE** command from the data dictionary definition.  
_Create Table_ |  **_(Available when Database Name is entered)_** This button is used to create the table in the specified database. If successful, a message will confirm the creation of the table; otherwise, an error message will display if any issues are encountered with the **CREATE TABLE** command.

#### **Important Note:**  
If the table already exists in the database, a message will display to warn that the table will be overwritten, which could lead to possible data loss, and to ask if you want to proceed. Responding _Yes_ will remove and recreate the table.  
  
Key names from the PxPlus data dictionary will have the _#num_name_table_ format upon exporting to an external database. If those tables are imported again (see **[Database Import Utility](Database%20Import.md)**), the key name will be converted back to just _name_. If the key has no name, it will just be _#num_table_. This is done to satisfy the external database requirement for a name and to ensure the proper key order.  
  
**_Example:_**  
  
Suppose that the _Clients_ table has two keys - one has no name and the other is named _byName_. Upon exporting to an external database, these keys would be exported as _#1_Clients_ and _#2_byName_Clients_. If the _Clients_ table in the external database was then imported again, the keys would be imported as "no name" and _byName_.

_(Support to check for existing database tables and display a message was added in PxPlus 2023.)_  
_Load Table_ |  **_(Available when Database Name is entered)_** This button is used to populate the table added to the database with the data in the PxPlus data file. A progress bar will display if this process will take a few minutes. If the load is successful, a message will indicate the number of records written to the table. If the load failed, a message will indicate what the error was. If the failure happened while the load was in progress, the table in the database may have some but not all of the records from the PxPlus native file.

#### **Important Note:**  
If the table already has records in the database, a message will display to warn that matching records will be overwritten, which could lead to possible data loss, and to ask if you want to proceed. Responding _Yes_ will load the database table records.

_(Support to check for existing database table records and display a message was added in PxPlus 2023.)_  
_Update Prefix_ |  **_(Available when Database Name is entered)_** This button is used to update the database information to a specific **[Prefix File](../../directives/prefix.htm#Mark10)**. When selecting this button the first time in any given PxPlus session, the prefix file can be selected. If multiple tables will be added to a database, this prefix file will be remembered and used the next time this button is selected without having to select it each time.  
_Update Link File_ |  **_(Available when Database Name is entered)_** This button is used to update/create a specific link file with the database information. When this button is selected, the link file to update/create can be specified. See **[Creating a Link File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)**.  
_Verify Data_ |  This button is used to validate the existing data in the PxPlus data file either before or after the conversion has been done.  
_Enable SQL_ |  Select this check box to turn **_On_** the **['!Q'](../../parameters/!q.md)** parameter to display all ODBC SQL statements in a Windows message box for troubleshooting ODBC-related problems.  
_Exit_ |  Closes the **Database Export Utility**. Any saved prefix file setting will be reset the next time the utility is accessed.  
  
##  Calling Export Actions Programmatically

Besides invoking the **Database Export Utility** through **Data Dictionary Maintenance** , individual files, as well as multiple files, can be added to a database programmatically by calling the **Convert** method in the ***dict/sqlmake** program.

The **Convert** method creates a table, loads a table and optionally creates the prefix file entry and link file:

> **Call "*dict/sqlmake;Convert" [** ,**ERR=**_stmtref_**]** ,_fileName_ _$, db_type$, connect$, db_name$, db_table$, db_altname$, db_user$, db_pass$, db_options$_**[** ,_pfx_file$_**[**_,link_file$_**[**_,noOverwrite_**[**_,noStripPrompt_**]]]]**

**_Where:_**

_fileName_ _$___|  Pathname of the file to convert.  
---|---  
_db_type_ _$___|  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
_connect$_ |  Data Source or System ID. _(The connect$ parameter was added in PxPlus 2019 Update 1.)_  
_db_name_ _$_ |  Database Name or System ID.  
_db_table_ _$_ |  Name of the table in the database. If not specified, defaults to the name from the data dictionary. _(The db_table$ parameter was added in PxPlus 2019 Update 1.)_  
_db_altname_ _$___|  Name to use for a prefix file entry using the alternate file IOList. If not specified, defaults to _filename$_ +"_ALT" if any columns have alternate names defined for any data dictionary elements.  
_db_user_ _$___|  User login name. _(The db_user$ parameter was added in PxPlus 2019 Update 1.)_  
_db_pass_ _$___|  User password. _(The db_pass$ parameter was added in PxPlus 2019 Update 1.)_  
_db_options_ _$___|  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_pfx_file_ _$___|  **_(Optional)_** Prefix file to be updated. If not specified, no prefix file will be updated. If the file does not yet exist, the prefix file will be created and then updated.  
_link_file_ _$___|  **_(Optional)_** Link file to be updated. If not specified, a link file will not be updated. If the file does not exist, it will be created.  
_noOverwrite_ |  **_(Optional)_** Flag indicating what to do if a table, table data, and/or link file exists in the database. |  0 |  Table/data will be overwritten without warning if table and/or data exists in the database. **_(Default)_**  
---|---  
1 |  An Error 12 will be returned if table and/or data exists in the database.  
2 |  User will be asked for confirmation before overwriting table and/or data.  
  
_(The noOverwrite parameter was added in PxPlus 2023.)_  
  
_noStripPrompt_ |  **_(Optional)_** Flag indicating how to handle User Name and Password within prefix/link file(s). |  0 |  The user will be prompted if he/she wants to strip User Name and Password from the file. **_(Default)_**  
---|---  
1 |  User Name and Password will be stripped from the file without prompting.  
2 |  User Name and Password will not be stripped from the file without prompting.  
  
_(The noStripPrompt parameter was added in PxPlus 2023.)_  
  
When the called method is used, the messages confirming file creation, loading, etc. are suppressed although progress bars will still appear. Any files that already exist in the database will be removed and re-created. Any error messages will be displayed using a message box prior to exiting the method with an ERR condition.

_(The connect$, db_table$, db_user$ and db_pass$ parameters were added in PxPlus 2019 Update 1.)_

The individual Export actions (i.e. Validate, CreateTable, LoadTable, etc.) can be invoked programmatically by calling the following routines:

**_Validate a PxPlus Native data file_**

> **Call "*dict/sqlmake;Validate"**_, fileName$_ , _result$_

**_Where:_**

_fileName_ _$_ |  Pathname of the PxPlus native data file to validate.  
---|---  
_result$_ |  After the call, check this string for the result of the validation. If it worked without error, the result will be "SUCCESS".  
If there was an error, it will not say "SUCCESS" and just contain information about the validation errors.  
  
_(The Validate call routine was added in PxPlus 2023.)_

**_Create/Merge/Replace a Data Dictionary table into the Database_**

> **Call "*dict/sqlmake;CreateTable"** , _fileName_ _$_ , _ddf_table_ _$_ , _db_prefix_ _$_ , _connect$_ , _db_name_ _$_ , _db_table_ _$_ , _db_user_ _$_ , _db_pass_ _$_ , _db_options_ _$_ , _replace_ , _result$_

**_Where:_**

_fileName_ _$_ |  Physical file path to a native PxPlus data file with an embedded dictionary. If _ddf_table_ _$_ is empty, the embedded dictionary will be used to create the database table.  
---|---  
_ddf_table_ _$_ |  Name of the table in the PxPlus data dictionary. The data dictionary record will be used to create the database table. If this is empty, the _fileName_ _$_ must point to a file with an embedded dictionary.  
_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_table_ _$_ |  Name of the table to create in the database. Defaults to the _ddf_table_ _$_ if nothing is specified.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_replace_ |  Flag indicating if the database already exists if the table should be replaced instead of merged. If the table is new, this has no effect. |  0 |  Merge table.  
---|---  
1 |  Table will be replaced if the user answers _Yes_ to the data loss warning message.  
2 |  Table will be replaced without a warning message.  
3 |  An error will be returned in _results$_ if table exists in the database.  
_result$_ |  After the call, check this string for the result of the call. If it worked without error, the result will be "SUCCESS". If performing a merge, a successful merge result will be "SUCCESS", followed by two new lines, then information about the merge, including which columns were added/updated. It will also contain information about columns that could not be added or updated. A merge is successful when PxPlus can connect to the database and ask it to merge in what is allowed. If there was an error, the result will not say "SUCCESS" and just contain information about the error.  
  
_(The CreateTable call routine was added in PxPlus 2023.)_

**_Load an External Database table with data from a PxPlus Native data file_**

> **Call "*dict/sqlmake;LoadTable"**_, fileName$_ , _db_prefix_ _$, connect$, db_name$, db_table$, db_user$, db_pass$, db_options$, overwrite_

**_Where:_**

_fileName_ _$_ |  Physical file path to a native PxPlus data file with an embedded dictionary. If _db_table_ _$_ is empty, the embedded dictionary will be used to create the prefix entry.  
---|---  
_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_table_ _$_ |  Name of the table in the database. The data dictionary record will be used to create the prefix file entry. If this is empty, the _fileName_ _$_ must point to a file with an embedded dictionary.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_overwrite_ |  Flag indicating what to do if a table and/or data exists in the database. |  0 |  User will be asked for confirmation before overwriting a file.  
---|---  
1 |  Data overwrite is allowed without confirmation.  
2 |  An Error 12 will be returned if table exists and has records.  
  
_(The LoadTable call routine was added in PxPlus 2023.)_

**_Add to Prefix File Entry for the External Database table_**

> **Call "*dict/sqlmake;PrefixFile"**_, fileName$_ , _db_prefix_ _$, connect$, db_name$, db_table$, db_altname$, db_user$, db_pass$, db_options$, pfx_file$, stripPswd_

**_Where:_**

_fileName_ _$_ |  Physical file path to a native PxPlus data file with an embedded dictionary. If _db_table_ _$_ is empty, the embedded dictionary will be used to create the prefix entry.  
---|---  
_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_table_ _$_ |  Name of the table in the database. The data dictionary record will be used to create the prefix file entry. If this is empty, the _fileName_ _$_ must point to a file with an embedded dictionary.  
_db_altname_ _$_ |  Name to use for prefix file entry Alternate file IOList. (Will default to _filename$_ +"_ALT" if any columns have alternate names and nothing is specified.)  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_pfx_file_ _$_ |  Prefix file to be updated. If the file does not exist, it will be created. If empty and there is a prefix file set, then it will be used. If empty and no prefix file is set, the user will be asked to select a prefix file to update.  
_stripPswd_ __|  Flag indicating how to handle User Name and Password within a prefix file. |  0 |  User Name and Password will not be stripped from the file without prompting.  
---|---  
1 |  User Name and Password will be stripped from the file without prompting.  
2 |  The user will be prompted if he/she wants to strip User Name and Password from the file.  
  
_(The PrefixFile call routine was added in PxPlus 2023.)_

**_Create Link File for the External Database table_**

> **Call "*dict/sqlmake;LinkFile"** , _fileName_ _$_ , _db_prefix_ _$, connect$, db_name$, db_table$, db_user$, db_pass$, db_options$, link_file$, overwrite, stripPswd_

**_Where:_**

_fileName_ _$_ |  Physical file path to a native PxPlus data file with an embedded dictionary. If _db_table_ _$_ is empty, the embedded dictionary will be used to create the link file.  
---|---  
_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_table_ _$_ |  Name of the table in the database. The data dictionary record will be used to create the link file. If this is empty, the _fileName_ _$_ must point to a file with an embedded dictionary.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_link_file_ _$_ |  Link file to be updated. If file does not exist, it will be created.  
_overwrite_ |  Flag controlling what happens if the link file already exists. |  0 |  User will be asked for confirmation before overwriting a file.  
---|---  
1 |  Data overwrite is allowed without confirmation.  
2 |  An Error 12 will be returned if table exists and has records.  
_stripPswd_ __|  Flag indicating how to handle User Name and Password within a link file. |  0 |  User Name and Password will not be stripped from the file without prompting.  
---|---  
1 |  User Name and Password will be stripped from the file without prompting.  
2 |  The user will be prompted if he/she wants to strip User Name and Password from the file.  
  
_(The LinkFile call routine was added in PxPlus 2023.)_

## See Also

**[Bulk Database Export Utility](Bulk%20Database%20Export.md)**  
**[Database Import Utility](Database%20Import.md)**
