# PxPlus SQL ODBC

**PxPlus SQL Command Line Client**|   
---|---  
  
The PxPlus SQL Command Line Client connects to local or remote PxPlus data and executes SQL commands. This tool is built on top of the PxPlus SQL ODBC Driver; therefore, it supports the same [**SQL Syntax**](using_odbc_driver/sql_syntax_table.md) and [**Scalar Functions**](using_odbc_driver/scalar_functions.md) as the PxPlus SQL ODBC Driver. It is based off the PxPlus SQL ODBC Driver and therefore can connect using a DSN defined for the PxPlus SQL ODBC Driver (see [**Configuration Procedures**](configuration_procedures.md)), or it can connect using a connection string used by the PxPlus SQL ODBC Driver (see [**Connection String Keywords**](configuration_procedures/connection_string_keywords.md)).

By providing a command line client that can access PxPlus data, users now have a fast and simple way to query, update and write PxPlus data. This also makes it a great tool to test PxPlus data, the PxPlus SQL ODBC Driver, and connection settings. In addition, the SQL Command Line Client can be executed from Web pages, scripts and applications, providing new ways to use your PxPlus data.

A Windows version and a UNIX/Linux version of the PxPlus SQL Command Line Client are available. The SQL Client gets installed with the PxPlus SQL ODBC Driver (version 10 or higher).

For installation procedures, see:

> **[ODBC Product Installation and Activation (Windows)](installation_procedures/odbc_product_installation_activation.md)**  
> **[ODBC Product Installation and Activation (UNIX/Linux)](installation_procedures/odbc_product_installation_activation_unix.md)**

## Running the SQL Command Line Client

To run the SQL Command Line Client, simply run the _pxpsql_ program:

> _dir_ / _pxpsql_ **[Connection Info]** **[Options] COMMAND**

**_Where:_**

> _dir_ is the directory path (e.g. /usr/pxpodbc).

## Connection Info

One of the following Connection Info parameters must be specified:

**-d**  _path_  
**\--directory**  _path_ |  Path of the data dictionary file (DDF), which is the relative starting point for all embedded file references. See **[PxPlus Data Dictionary](table_definitions/pxplus_data_dictionary.md)**. This should only be set if **_not connecting_** to PxPlus SQL Server; i.e. **-s**  _address_ is **_not set_** (see **[Options](pxplus_sql_cmd_line_client.htm#options)**). The path should **_not include_** the data dictionary file name. **_Example:_** If the DDF is located at _C:\myapp\data\providex.ddf_ , then set **-d**  _C:\myapp\data_.  
---|---  
**-i** _path_  
**\--ini-file**  _path_ |  Path and file name of the INI file used to define the data dictionary manually for files that cannot be handled by the PxPlus embedded data dictionary. See **[INI Definition](table_definitions/ini_definition.md)**. This should only be set if **_not connecting_** to PxPlus SQL Server; i.e. **-s**  _address_ is **_not set_** (see **[Options](pxplus_sql_cmd_line_client.htm#options)**). The path **_must include_** the INI file name. **_Example:_** If the INI is located at _C:\myapp\data\mydict.ini_ , then set **-i**  _C:/myapp/data/mydict.ini_.  
**\--catalog**  _name_ |  Name of catalog. A catalog defines a remote data dictionary and/or INI file and optionally a prefix. This **_must_** be set if **_connecting_** to PxPlus SQL Server; i.e. **-s**  _address**is set**_ (see **[Options](pxplus_sql_cmd_line_client.htm#options)**). _(added in PxPlus 2018)_  
**-f**  _path_  
**\--config-file** _path_ |  Path and file name of the _config_ file.

#### **Note:**  
If other options are specified, they override configuration in the _config_ file. The _config_ file is an INI style file, which accepts parameters that are the same as the long form _pxpsql_ parameters.

**_Example:_** This is an example _config_ file:  
**-c**  _conn_str_  
**\--connection-string**  _conn_str_ |  Specify the connection string directly. This ignores other Connection Info parameters. See **[Connection String Keywords](configuration_procedures/connection_string_keywords.md)**.  
  
##  Options

This table lists optional Connection Info parameters:

**-v**  _path_  
**\--view-dll** _path_ |  Path and file name of the PxPlus DLL/SO file. This is required to use the **[Views System](../Views%20System/Introduction.md)**.  
---|---  
**-x**  _path_  
**\--prefix**  _path_ |  Search paths to be inserted in front of all relative file references. Use , _(comma)_ to separate multiple prefixes.  
**-s**  _address_  
**\--server**  _address_ |  Network name or IP address required for connecting to the PxPlus SQL Server. See **[PxPlus SQL Server](pxplus_file_server.md)**.  
**-p**  _port_  
**\--port**  _port_ |  TCP/IP Port required for connecting to the PxPlus SQL Server. See **[PxPlus SQL Server](pxplus_file_server.md)**.  
**\--ssl** |  Enable SSL encrypted TCP/IP communication. _(SSL support was added in version 8.00.0000/PxPlus 2024.)_  
**-z**   
**\--compression** |  Enable ZLib compression to minimize network traffic between the client and the server.  
**-j**  _name_  
**\--company**  _name_ |  Value to replace occurrences of %%C$ in a definition pathname.  
**-u**  _name_  
**\--user**  _name_ |  Value to replace occurrences of %%U$ in a definition pathname.  
**-w**  _password_  
**\--password**  _password_ |  Password value. Used in conjunction with a Sage MAS 90 or Sage MAS 200 system **_only_**.  
**-o**  _ID_  
**\--session-id**  _ID_ |  Value to replace occurrences of %%S$ in a definition pathname.  
**-r**   
**\--dirty-read** |  Enable dirty read mode, which causes normal file consistency checks to be skipped.  
**-e**   
**\--enforce-double** |  Enable treating numeric data as doubles.  
**-b**   
**\--burst-mode** |  Enable burst mode, which reduces the number of times a file is locked by holding the lock for either 50 operations or 3/10 of a second, whichever comes first.  
**-n**   
**\--null-date** |  Enable suppression of invalid date error.  
**-k**   
**\--key-restrict** |  Enable key restrict mode. This option allows the Driver to be used with applications that do not support keys or supports keys with limitations.  
**-t**   
**\--strip-trailing-spaces** |  Enable strip trailing spaces from key values when joining multiple tables.  
**-q**   
**\--silent** |  Enable suppression of most messages.  
**-a**  _size_  
**\--cache-size**  _size_ |  Amount of memory in MB used for local storage of intermediate results.  
**-l**  _path_  
**\--log-file**  _path_ |  Output debugging information to a specified log file.  
**-y**   
**\--read-only** |  Disable write access for this SQL command.  
**\--legacy-null** |  Enable legacy NULL mode where empty strings are treated as nulls. _(Added in PxPlus 2017)_  
**-g**  _separator_  
**\--separator**  _separator_ |  Set separator string used to update query results. **_Default_** value is "**|** ".  
**-m**   
**\--html** |  HTML output mode. In this mode, query results are outputted as HTML table data.  
**\--column-names** |  Include a header row with column names in the output. _(Added in PxPlus 2016)_  
**\--version** |  Output the version number. _(Added in PxPlus 2016)_  
  
## Command

One of the following must be specified:

**SQL Command** |  SQL query (e.g. "SELECT * FROM CUSTOMER" used to read or modify data).  
---|---  
**LIST** |  Command used to display list of table names.  
**LIST** _table_ |  Command used to display list of column names, column types and column lengths for given table. _(Added in PxPlus 2016)_
