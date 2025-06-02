# Data Dictionary Maintenance

**Database Import Utility**|   
---|---  
  
The **Database Import Utility** allows you to define a connection to an existing database (ODB, MySQL, OCI, ADO or DB2) and then selectively import table definitions from the selected database into the PxPlus data dictionary.

In addition, this utility can be used to:

  * Create **[Link Files](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)** that point to tables in the database
  * Create Link files that point to the database itself
  * Add entries to the **[Prefix File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)** that point to tables in the database
  * Add entries to the Prefix File that point to the database itself
  * Create and load data from database tables to native PxPlus data files



The **[Create DB File](Database%20Import.htm#createdbfile)** button launches a separate window that allows you to create either a Link file or a Prefix file entry that points to the database itself.

_(The Database Import Utility was added in PxPlus 2023.)  
__(The Create DB File button was added in PxPlus 2023 Update 1.)_

The utility remembers database connection information after successfully connecting to the database when the **[Load Tables](Bulk%20Database%20Export.htm#loadtbl)** button is selected. Multiple database connections can be remembered, one connection for each database type. The connection information is remembered on a "per project" basis. This allows one project to use one database while another project can use a different database easily.

When the utility is invoked, the connection information for the last database that was successfully connected to is automatically loaded into the fields in the **[Source Database](Database%20Import.htm#sourcedb)** section. If you change the _Database Type_ field and a database of that type previously connected successfully, the remembered database connection information will automatically be loaded.

_(The remembering of database connection information was added in PxPlus 2023 Update 1.)_

This utility lists all the tables in the database, sorted in alphabetical order by default. A check mark indicates which table definitions are currently in the data dictionary. Options for different _Actions_ can be selected individually for each table, or the _Edit All_ drop down can be used to select an option for all the tables. The selected actions are used to create, merge or replace data dictionary records, create native PxPlus data files, create database link files, and add database table entries to the prefix file.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[Data Dictionary Maintenance](Overview.md)** |  Click the _Import_ tool bar button in the **_Database_** section of the tool bar.  
From **[Data Dictionary Maintenance](Overview.md)** |  From the menu bar, select _File_ > _Database Import Utility_.  
From the PxPlus Command line |  Enter: **RUN "*dict/impdb"**  
Call Import actions programmatically |  See **[Calling Import Actions Programmatically](Database%20Import.htm#call_routines)**.  
  
The **Database Import Utility** is displayed below with a sample entry:

> This window consists of the following:

**Source Database** |  Enter the database information. The utility remembers the database connection information after successfully connecting to the database (when the **[Load Tables](Database%20Import.htm#loadtbl)** button is selected) and automatically loads this information into these fields when the utility is invoked. _(The automatic loading of database connection information was added in PxPlus 2023 Update 1.)_ |  _Database Type_ |  Type of database. Selections are _ODB, MySQL, OCI, DB2_ and _ADO_. Defaults to _ODB_.  
---|---  
_Data Source**or** Server_ |  **_(This field changes depending on the Database Type selected)_** If _Database Type_ is **[ODB](../../command_tags/odb.md)**: Enter the name of the _Data Source_. **_(Required for ODB)_** If _Database Type_ is **[MySQL](../../command_tags/mysql.md)**, **[OCI](../../command_tags/oci.md)** or **[ADO](../../command_tags/ADO.md)**: Enter a _Server_ address. If the database is running locally, this value may be omitted. **_(Required for ADO)_** If _Database Type_ is **[DB2](../../command_tags/db2.md)**: The _Server_ field is disabled, as only the _Database Name_ is used and the server is defined in the _db2cli.ini_ file.  
_Database Name**or** System ID_ |  **_(This field changes depending on the Database Type selected)_** If _Database Type_ is **[ODB](../../command_tags/odb.md)**, **[MySQL](../../command_tags/mysql.md)**, **[DB2](../../command_tags/db2.md)** or **[ADO](../../command_tags/ADO.md)**: Enter the _Database Name_. **_(Required for MySQL or DB2)_** If _Database Type_ is **[OCI](../../command_tags/oci.md)**: Enter the Oracle _System ID_ value. **_(Required for OCI)_**  
_User Name_ |  User login name.  
_Password_ |  User password.  
_Additional Options_ |  Parameters to be included in the **OPT=** string when opening the database or updating the prefix file. All parameters are semi-colon separated. Defaults to NONULLS=Y;NULLPADKEY=Y for all database types **_except_** OCI, which defaults to NULLPADKEY=Y. _(The additional option NULLPADKEY=Y was added in PxPlus 2023.)_  
_Create DB File_ |  Button that launches the **Create Database Connection File** window that allows you to create either a Link file or a Prefix file entry that points to the database itself. A direct connection to the database may be useful so that you can do a global OPEN to the database, providing the UserID and Password. This avoids needing the UserID and Password on every link/prefix entry. It can also be used to get a list of tables from the database or if your program needs to make direct queries against the database. This window consists of the following: |  _Database File Type_ |  Select the database file type to create, either _Link File**(Default)**_ or _Prefix File Entry_.  
---|---  
_Link File Path_ |  **_(Applicable when Database File Type is Link File)_** Enter the path for the link file or click the Query button.  
_Prefix File Entry Name_ |  **_(Applicable when Database File Type is Prefix File Entry)_** Enter the prefix file entry name.  
_Create_ |  Creates the link file in the specified path or creates the entry in the prefix file, depending on which _Database File Type_ is selected.  
_Cancel_ |  Closes the **Create Database Connection File** window with no further action taken.  
  
_(The Create DB File button was added in PxPlus 2023 Update 1.)_  
  
_Load Tables_ |  Button that is used to load tables from the selected database into the _Tables_ grid. If changes have been made in the grid but not applied, a message will display. When the database connection is successful, the connection information (one connection for each database type) is remembered on a "per project" basis and is automatically loaded when the utility is invoked. _(The remembering of database connection information was added in PxPlus 2023 Update 1.)_  
_(Tables Grid)_ |  Grid that lists all the tables in the selected database. This list can be sorted by clicking on the column header for any of the columns except _DD Action_ and _File Action_. Subsequent clicks toggle the sort between ascending/descending order. By default, the list is sorted by _Table_ name in ascending order. _(Column sorting for applicable columns was added in PxPlus 2023 Update 1.)_ This grid consists of the following: |  _Edit All_ __|  The changes made to the _DD Action_ and _File Action_ options in this row will be applied to all the tables in the list. For _DD Action_ , available selections are: |  _No Action_ |  **_(Default)_** No action to apply.  
---|---  
_Create or Merge Record_ |  Sets the _DD Action_ to either _Create Record_ or _Merge Record_ for each table in the list, depending on whether the table is in the data dictionary.  
_Create or Replace Record_ |  Sets the _DD Action_ to either _Create Record_ or _Replace Record_ for each table in the list, depending on whether the table is in the data dictionary.  
_Table_ |  **_(Display Only)_** Displays the name of each table from the selected database.  
_In DD (DD = Data Dictionary)_ |  **_(Display Only)_** Displays a check mark if the table is in the data dictionary or an X if it is not in the data dictionary.  
_File Type_ |  **_(Display Only)_** Displays the current physical file type from the data dictionary. Possible values are: |  _No File_ |  No physical file exists.  
---|---  
_Native_ |  A native PxPlus data file exists.  
_Native Prefix_ |  A prefix file entry points to a native PxPlus data file.  
[_ODB_**|**_MySQL_**|**_ADO_**|**_DB2_**|**_OCI_] _Prefix_ |  A prefix file entry points to an external database table.  
[_ODB_**|**_MySQL_**|**_ADO_**|**_DB2_**|**_OCI_] _Link_ |  A link file points to an external database table.  
  
_(The File Type column was added in PxPlus 2023 Update 1.)_  
  
_Description_ |  Displays the table description from the data dictionary. If it is not in the data dictionary, this will be the database table name in proper case with underscores replaced with spaces. A new description can be entered, if desired. The description is updated only when **[DD Action](Database%20Import.htm#dd_action)** is set to something other than _No Action_.  
_File Name_ |  Displays the current physical file name from the data dictionary. If it is not in the data dictionary, this will be a lowercase version of the database table name. A new file can be entered, if desired. The file name is updated only when **[DD Action](Database%20Import.htm#dd_action)** is set to something other than _No Action_.  
_Group_ |  Displays the current group name of the table from the data dictionary. If it is not in the data dictionary, this will be the database name, if specified. A new group name can be entered, if desired. The group is updated only when **[DD Action](Database%20Import.htm#dd_action)** is set to something other than _No Action_.  
_DD Action_ _(DD = Data Dictionary)_ |  Action options that can be set for loading the data dictionary. Click the drop down arrow for available selections. To edit this option for all the tables in the list, use the **[Edit All](Database%20Import.htm#edit_all)** drop down (in top row). If the table is in the data dictionary, available options are _No Action_ , _Merge Record_ or _Replace Record_. If the table is not in the data dictionary, available options are _No Action_ or _Create Record_. |  _No Action_ |  **_(Default)_** No action to apply.  
---|---  
_Merge Record_ |  **_(Available when table is in the data dictionary)_** Updates an existing record in the data dictionary so that only what comes from the database is updated, and other details, such as class, description, etc., are maintained. If new elements are being added from the database, they will be added to the end. Keys/Indices will not be merged or changed.  
_Replace Record_ |  **_(Available when table is in the data dictionary)_** Deletes an existing record in the data dictionary and creates a new record.  
_Create Record_ |  **_(Available when table is not in the data dictionary)_** Creates a new record in the data dictionary.  
  
#### **Note:**  
Key names from the PxPlus data dictionary will have the _#num_name_table_ format upon exporting to an external database. (See **[Database Export Utility](Database%20Export.md)**.) If those tables are imported again, the key name will be converted back to just _name_. If the key has no name, it will just be _#num_table_. This is done to satisfy the external database requirement for a name and to ensure the proper key order.  
  
**_Example:_**  
  
Suppose that the _Clients_ table has two keys - one has no name and the other is named _byName_. Upon exporting to an external database, these keys would be exported as _#1_Clients_ and _#2_byName_Clients_. If the _Clients_ table in the external database was then imported again, the keys would be imported as "no name" and _byName_.

**_If an error is encountered:_**

If an error is encountered while populating the data dictionary record with columns and keys, the data dictionary record will not be deleted, and the _DD Action_ will be considered incomplete. However, it is possible that the incomplete data dictionary record will be nearly complete. For example, the error could happen when trying to add the sixth key and your PxPlus application has no need for that sixth key.

A _DD Action_ is considered a success if the record is created and populated with all columns and keys from the database table.

A _DD Action_ is considered a failure if a DD record could not be created or replaced.  
  
_File Action_ __|  Action options that are related to creating/editing files - a prefix (PFX) file entry, a link file or a native (PxPlus) file. Click the drop down arrow for available selections. To edit this option for all the tables in the list, use the **[Edit All](Database%20Import.htm#edit_all)** drop down (in top row). |  _No Action_ |  **_(Default)_** No action to apply.  
---|---  
_Add to PFX File_ |  Creates a new entry in the prefix file to the table in the database. If no prefix file is defined, the user will be prompted to select or enter a name for a prefix file to be updated/created.  
_Create Link File_ |  Creates a link file that points to the table in the database.  
_Create & Load Native File_ |  Creates a native PxPlus keyed file and loads it with data from the database. This allows you to use a local copy of the data directly.  
  
If a prefix file entry, link file or a native file already exists and this action is specified, it will remove the existing file/entry. If an existing native file is found, a message will display to warn about possible data loss and ask if you want to proceed unless the **[Disable Data Loss Warning](Database%20Import.htm#warning)** check box is set.  
  
_Strip User/Password from Link Files and Prefix Entries_ |  Controls whether the User and Password connection options are stripped from link files and prefix file entries. By default, this check box is selected. For security reasons, it is **_strongly_** recommended not to save the User and Password information in plain text.  
_Disable Data Loss Warning_ |  If selected, disables a warning message from displaying for each **[File Action](Database%20Import.htm#file_action)** that will delete a native file, causing possible data loss. By default, this check box is not selected to help prevent accidental data loss. If you are applying several _File Actions_ and are knowingly replacing native data files, you can set this option to avoid displaying a warning message for each table.  
_View Log_ |  **_(Available when changes have been applied)_** Displays a log of applied changes as a PDF, which also provides options for printing or saving the log, if desired.  
_Apply_ |  **_(Available when DD Action or File Action is set to other than No Action)_** Applies changes to all the tables that had a _DD Action_ or _File Action_ set to something other than _No Action_. A message displays that lists which changes were applied successfully, which changes were incomplete (partially successful), and which changes failed.  
_Exit_ |  Closes the **Database Import Utility**. If changes have been made in the grid but not applied, a message will display. If records exist in the log file, a message will ask if you want to view the log.  
  
##  Calling Import Actions Programmatically

The individual Import actions (i.e. CreateDDRecord, CreateAndLoadFile, etc.) can be invoked programmatically by calling the following routines:

**_Create/Merge/Replace a Database table into the Data Dictionary_**

> **Call "*dict/impdb;CreateDDRecord"** , _db_prefix_ _$_ , _connect$_ , _db_name_ _$_ , _db_user_ _$_ , _db_pass_ _$_ , _db_options_ _$_ , _tableName_ _$_ , _description$_ , _fileName_ _$_ , _groupName_ _$_ , _replace_ , _result$_

**_Where:_**

_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
---|---  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_tableName_ _$_ |  Name of the table in the database. This will also be used as the data dictionary entry name.  
_description$_ |  Desired data dictionary entry description.  
_fileName_ _$_ |  Desired physical file path of the data dictionary entry.  
_groupName_ _$_ |  Desired data dictionary entry group.  
_replace_ |  Flag indicating if the data dictionary already exists, whether the entry should be merged or replaced. If set to 1, the entry will be replaced.  
If set to 0, the entry will be merged.  
If the entry is new, this flag will have no effect.  
_result$_ |  After the call, check this string for the result of the call. If it worked without error, the result will be "SUCCESS".  
If there was an error, it will contain information about the error.  
  
**_Add to Prefix File Entry for the External Database table_**

> **Call "*dict/impdb;AddToPfxFile"** , _db_prefix_ _$, connect$, db_name$, db_user$, db_pass$, db_options$, tableName$, fileName$, stripPswd, noDataLossWarning, result$_

**_Where:_**

_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
---|---  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_tableName_ _$_ |  Name of the table in the database.  
_fileName_ _$_ |  Desired physical file path of the prefix file entry. This path can then be used to open the database connection as if it were a physical file.  
_stripPswd_ __|  Flag indicating whether the User and Password should be stripped from link files and prefix file entries. If set to 1, the User and Password will be stripped.  
If set to 0, nothing will be stripped out.  
_noDataLossWarning_ |  Flag indicating whether the user should be warned about possible data loss if a native file exists that will be deleted because the prefix file entry replaces it. If set to 1, the user will not be warned.  
If set to 0, the user will be warned.  
_result$_ |  After the call, check this string for the result of the call. If it worked without error, the result will be "SUCCESS".  
If there was an error, it will contain information about the error.  
  
**_Create Link File for the External Database table_**

> **Call "*dict/impdb;CreateLinkFile"** , _db_prefix_ _$, connect$, db_name$, db_user$, db_pass$, db_options$, tableName$, fileName$, stripPswd, noDataLossWarning, result$_

**_Where:_**

_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
---|---  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_tableName_ _$_ |  Name of the table in the database.  
_fileName_ _$_ |  Desired path of the created link file.  
_stripPswd_ __|  Flag indicating if the User and Password should be stripped from link files and prefix file entries. If set to 1, the User and Password will be stripped.  
If set to 0, nothing will be stripped out.  
_noDataLossWarning_ |  Flag indicating whether the user should be warned about possible data loss if a native file exists that will be deleted because the link file replaces it. If set to 1, the user will not be warned.  
If set to 0, the user will be warned.  
_result$_ |  After the call, check this string for the result of the call. If it worked without error, the result will be "SUCCESS".  
If there was an error, it will contain information about the error.  
  
**_Create and Load Physical File from the External Database table_**

> **Call "*dict/impdb;CreateAndLoadFile"** , _db_prefix_ _$, connect$, db_name$, db_user$, db_pass$, db_options$, tableName$, fileName$, noDataLossWarning, result$_

**_Where:_**

_db_prefix_ _$_ |  Database type. Valid types are "ODB", "MySQL", "OCI", "DB2" and "ADO". If not specified, defaults to "ODB".  
---|---  
_connect$_ |  Data Source or Server Address.  
_db_name_ _$_ |  Database Name or System ID.  
_db_user_ _$_ |  User login name.  
_db_pass_ _$_ |  User password.  
_db_options_ _$_ |  Options to be used as **OPT=** parameters when opening the database or updating the prefix file. Defaults to NULLPADKEY=Y and NONULLS=Y, **_except_** if _db_prefix_ _$_ ="OCI", in which case, it is just NULLPADKEY=Y.  
_tableName_ _$_ |  Name of the table in the database.  
_fileName_ _$_ |  Desired path of the native keyed file to create and load with data from the database.  
_noDataLossWarning_ __|  Flag indicating whether the user should be warned about possible data loss if a native file exists that will be deleted because the new native file replaces it. If set to 1, the user will not be warned.  
If set to 0, the user will be warned.  
_result$_ |  After the call, check this string for the result of the call. If it worked without error, the result will be "SUCCESS".  
If there was an error, it will contain information about the error.  
  
## See Also

**[Database Export Utility](Database%20Export.md)**  
**[Bulk Database Export Utility](Database%20Export.md)**  
**[Creating a Link File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)**  
**[Creating the Prefix File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)**
