# Special File Command Tags

**[ODB]** |  **_Open Database_**  
---|---  
  
##  Format

**OPEN (**_chan_**[** ,_fileopt_**])"[ODB][**_datasourcename_**];[**_table_**][** ;_fileopt_**]"**

**_Where:_**

**[ODB]** |  File tag clause to inform PxPlus that it will be opening an external ODBC database (not a PxPlus data file).  
---|---  
_chan_ |  Channel or logical file number to open.  
_datasourcename_ |  Path and/or name of the ODBC database to open. String expression. If using **CONNECT=** , the _datasourcename_ is optional. See **[[ODB] OPT= Parameters](odb.htm#Mark5)**.  
_table_ |  Name of the table to open. If the table name is not supplied, either SQL statements sent to the database must be created by the application (see **[Using SQL Directly Within PxPlus](../PxPlus%20User%20Guide/Data%20Integration/Introduction%20to%20SQL/Using%20SQL%20Directly%20Within%20PxPlus.md)**) or table and/or column information must be retrieved (see **[Retrieving DB2/ODB Table and Column Information](db2.htm#retrievinginfo)**.  
_fileopt_ |  File options. Supported options include: |  **BSZ=**_num_ |  Block size  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**NBF=**_num_ |  Dedicated number of buffers  
**OPT=**_string$_ |  Open parameters (see **[ODB] OPT= Parameters**)  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
  
##  Description

The **[ODB]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to an external (**_not_** PxPlus) ODBC database file. (**_ODBC_** is the Microsoft acronym for **_Open Database Connectivity_**.) Once you open a channel for **[ODB]** use, you can use it just like any other channel (i.e. for file I/O). It remains open until you close it.

For details on how to read a list of available Data Source Names (DSN) on the system, see **[DSN List](odb.htm#DSNList)**.

PxPlus supports ODBC under Windows, as well as two open source versions of ODBC for UNIX/Linux (iODBC and unixODBC). See **[Using ODBC on UNIX](odb.htm#Mark12)**.

#### **Note:**  
The **[ODB]** tag is built into the PxPlus programming language and is used for accessing external data from within PxPlus. You do not need the PxPlus SQL ODBC Driver to use this tag.  
  
To open and read PxPlus (internal) data files using other database applications (e.g. Excel), install and use the **[PxPlus SQL ODBC Driver](../odbc/pxplus_odbc.md)** instead of the **[ODB]** tag.

##  [ODB] OPT= Parameters

The **OPEN** parameters for connecting via ODBC are:

#### **Note:**  
These options can also be put into the PxPlus INI file to apply to all **[ODB]** connections system wide. See **[INI Settings](odb.htm#Mark13)**.

**ACCESS=READ | WRITE** |  Determines type of file access required (**READ**  _or_**WRITE**). _Default_ is **ACCESS=WRITE**.  
---|---  
**AUTOCOMMIT=ON | OFF** |  Determines auto commit functionality of the database driver (either **ON**  _or_**OFF**). It is applicable only if the driver supports transactions.  
**CHECK_DATES=Y | N  
CHECK_NUMERICS=Y | N  
CHECK_LENGTH=Y | N** |  Determines the type of data validation required. Setting these to "Y" enables run time checking of **_Dates_** (must match **[DATEFMT=](odb.htm#Mark8)** setting), **_Numeric_** (must have the proper number of digits before/after the decimal point), and **_Length_** (must be less than or equal to the length of the field).

#### **Note:**  
The Check_Date ** _only_** takes effect if they also have a **DATEFMT=** specified for the ODBC. For the Date validation, the minimum year is 1500.  
  
**COMPLETE=**_n_ |  Determines the response to incomplete information by the following values: |  **0** (SQL_DRIVER_NOPROMPT) |  _(Default)_ Driver Manager copies the connection string specified by the application.  
---|---  
**1** (SQL_DRIVER_COMPLETE) **_or_**  
**3** (SQL_DRIVER_COMPLETE_REQUIRED) |  If the connection string specified by the application includes the DSN keyword, the Driver Manager copies the connection string specified by the application. Otherwise, it takes the same actions as SQL_DRIVER_PROMPT.  
**2** (SQL_DRIVER_PROMPT) |  If the connection string does not contain the DRIVER, DSN or FILEDSN keyword, the Driver Manager displays the Data Sources dialog box. It constructs a connection string from the data source name returned by the dialog box and any other keywords passed to it by the application. If the data source name returned by the dialog box is empty, the Driver Manager specifies the keyword-value pair DSN=Default. (This dialog box will not display a data source with the name "Default".) All options except NO PROMPT require the handle of the parent window, which will be the handle of the currently active PxPlus window. This parameter is not used if a connection string is not supplied.  
**CONCURRENCY=**_xxx_ |  Determines the type of concurrent access control/locking to be used. |  **READONLY** |  Sets the cursor. Is set to _Read Only_ \- no updates allowed.  
---|---  
**LOCK** |  Applies low-level record locking.  
**OPT_VERSION** |  Causes optimistic locking with the database version control to be used.  
**OPT_VALUE** |  Causes optimistic locking with comparing record/column values to be used.  
**CONNECT=**_xxx_ |  Specifies a connection string surrounded by a delimiter character, enabling use of a "dsn-less" connection. Connection strings are driver specific. Consult the driver's reference for supported connection string values. If a connection string is supplied, the value of the _datasourcename_ is ignored. If the _datasourcename_ is not null, then the value is used only for determining if a connection should be shared.  
  
**_Example:_** open (1,iol=*,opt="CONNECT='DSN=nomads'")"[odb]foo;Customer"  
open (2,iol=*,opt="")"[odb]foo;Customer Classes"  
open (3,iol=*,opt="",err=*next)"[odb];Customer"  
open (4,iol=*,opt="CONNECT='DSN=foo'")"[odb]foo;Customer" The table opened on channel 2 will share the connection because of foo.  
Channel 3 will error out because neither a valid _datasourcename_ nor a valid connect string was supplied.  
Channel 4 will open the table Customer using the properties of the "nomads" DSN because foo matches (the connect string was ignored). If the keywords **USER=** or **PSWD=** are supplied on the OPEN, then the values of these attributes will be appended to the connection string.  
**CURSOR_TYPE=**_xxx_ |  Defines the type of cursor that is to be used. |  **FORWARD** |  Indicates that any result sets can be read in a forward-only direction.  
---|---  
**STATIC** |  Indicates that the result set is static.  
**KEYSET** |  Forces the cursor to use/maintain record keys in a Keyset.  
**DYNAMIC** |  Indicates that the cursor is effective in the current Rowset only.  
**CURSOR_USE=**_xxxx_ |  Defines the type of cursor to be used within the ODBC connection. |  **DRIVER** |  _(Default)_ Assumes the specific driver's own cursors.  
---|---  
**ODBC** |  Causes the ODBC interface to use the "Driver Manager's" cursor library that may provide additional functionality not available within the database driver.  
**IF_NEEDED** |  Tells the system to use the specific database driver's own cursor functionality unless the additional functionality is requested specifically.  
**DATEFMT=**_format_ |  Date format mask applying to all date fields in table. This can be a combination of **Y M D** with any other characters.  
  
**_Example:_**  
  
To convert dates to 4-character year, month and day: DATEFMT=YYYYMMDD Other characters are inserted as is. DATEFMT=YY/MM/DD with a date of March 1, 2004 would be returned as 04/03/01.  
**DB=**_xxx_ or  
**QUALIFIER=**_xxx_ |  Qualifies the specific database that you wish to use when using a driver to service multiple databases.  
**DEBUGIT=**_xxx_ |  String to append to SQL statement along with program name and line number for debugging purposes. This must indicate the comment character(s) appropriate to the database.  
  
**_Example:_**  
  
"--" is the comment identifier for Microsoft SQL Server; anything after "--" is ignored by SQL Server when compiling the SQL statement.  
**EXEC_SPRNO=**_procedure_ |  Name of stored procedure used to emulate the **[RNO( )](../functions/rno.md)** function.  
**EXTROPT=**_xxx_ |  Controls the format of the SELECT statement used to process an EXTRACT. By default, PVX generates: SELECT * FROM _table_ FOR UPDATE WHERE... When **EXTROPT=**_text_ , then _text_ is substituted in place of FOR UPDATE. In addition, if the first character of _text_ is $, then the remaining characters of _text_ are placed at the end of the SELECT statement rather than after the filename. This allows for different variations of SQL to be supported.  
**FORCE=**_fld_  _compOp_  _val_ |  Filters any data that is returned by a READ. For any given row of data, if the field does not meet the condition, it will not be returned. |  _fld_ |  Name of the database field that the condition will be checked against.  
---|---  
_compOp_ |  Comparison operator used for the condition (i.e. **=** , **< >**, **<** , **< =**, **>** , **> =**).  
_val_ |  Possible value of the database field _(fld)_ that the condition compares against. ** _String and date values must be enclosed with single quotes. Single quotes are not required for numeric values._**  
  
**_Example:_**

The following example would only return invoices that were for $10,000 or more due on or before the end of the year 2016:

open (sqlchan,opt="FORCE=Total>=10000;FORCE=DueDate<='2016-12-31'")"[ODB]mysqlsrv;invoices"

_(Support for all comparison types was added in PxPlus 2016 Update 0003.)_  
  
**IND=**_fld_ |  Identifies a column that contains a sequential number starting at 0. This is used to emulate an indexed file.  
**IOPROG=**_progname_ |  Emulates the embedded I/O program logic available with a true PxPlus file.  
**ISOLATION=P | D | R** |  Controls the isolation that this connection will have relative to other processes on the same database. In particular, it controls **D** irty reads (reading data that may be rolled back), Non-**R** epeatable reads (reading data after being changed by other transactions), and **P** hantom reads (reading data newly added to file). Settings include:  
  
**UNCOMMITED** (**_D_** _,**R** , **P**_ possible)  
**COMMITED** (**_D_** possible, **_R_** and **_P_** not possible)  
**REPEATABLE** (**_P_** possible, **_D_** and **_R_** not possible)  
**SERIAL** (**_D_** _,**R** and **P** not _possible)  
**VERSIONING** (**_D_** _,**R**_ and **_P_** not possible, but uses versioning as opposed to record locks)  
**KEY=**_fld_ _, fld, ..._ |  Identifies fields that make up the key(s). For named keys, enter ***NAME:_keyname_** _._ **OPEN**(_chan_)"**[ODB]**_dsn_ ;_table_ ;**KEY=**_field_ ,_field_ ,***NAME:_keyname_** " Use the **:D** option to indicate that the key segment is to be sorted in descending order. KEY=KeyFld1,KeyFld2:D,KeyFld3  
**KEYDATA=**_fld_ |  Identifies a column that represents the key. This is used to emulate an external key where the data is not duplicated in the data.  
**KEYSET_SIZE=**_n_ |  Size of the Keyset for use with the cursor.  
**MAS90DATE** |  Reformats the contents of a date column to and from the Sage MAS 90/Sage MAS 200 date format.  
**MAS90DT** |  Format DATE Fields as Sage MAS 90/Sage MAS 200 style dates.  
**MAS90SET** |  Sets flags for Sage MAS 90/Sage MAS 200 emulation, such as turning on the MAS90DATE conversion.  
**MAXROWS=**_nn_ |  Maximum number of rows/records returned.  
**NONULLS=** |  Inserts zero-length strings rather than nulls into the target database and does not generate **WHERE** clauses checking for **IS NULL** or **IS NOT NULL**. (**_INI Supported_**) Set to **1** , **Y** or **y** to enable or **0** , **N** or **n** to disable. If the application does not work correctly when moving from Version 5 or lower, then set **NONULLS=P** to indicate that keys are handled the same as pre-Version 6.  
**NOSTRIP** |  Keeps trailing spaces.  _(Default)_  
**NULLPADKEY=Y | N** |  Set to **1** , **Y** or **y** to force keys to be padded to full length with the null character, **$00$**.  
**ORACLE=Y | N** |  Indicates if the database uses ORACLE SQL sequence (either **Y**  _or_**N**). If **ORACLE=** and **TOP=** are used, then SELECT commands are generated as SELECT * FROM (SELECT * FROM TABLE) WHERE ROWNUM < 1\. _Default_ is **ORACLE=N.**  
**POSUPDATE=M | O | N** |  Determines use of SqlSetPos functions. Use one of the following: |  **M** |  Must use positioned update  
---|---  
**O** |  _(Default)_ Optionally use positioned update  
**N** |  Never use positioned update  
**PREPARE=Y | N** |  Set to **1** , **Y** or **y** to use prepared statements. Prepared statements are pre-compiled SQL that may improve performance.  
**PSWD=**_xxx_ |  Specifies password - **_NOT SECURE_**. Anyone with access to the INI will be able to read this password.  
**REC=**_fld_ _, fld, .._ |  Provides the column names, type and size. This is typically done to improve performance. If this information is not provided, then PxPlus must query the database for this information. See **[ODB/OCI/DB2 Record Processing](oci.htm#Mark12)**.  
**RECDATA=**_fld_ |  Identifies a column to return as the full record. This can be used for variant records that use complex rules to identify the record type.  
**ROWSET_SIZE=**_nnn_ |  Size of the Rowset used by the cursor.  
**SCHEMA=** |  Sets the Schema name to be prefixed to the table name (separated with a dot).  
  
**_Example:_**  
  
MySchema.MyTable  
**SHARED** |  Sets all tables to share a single connection to the Oracle database.  _(Default)_  
**STDDATE** |  Overrides the above formatting on individual columns.  
**STRIP** |  Removes trailing spaces from fields.  
**TEXTMAX=**_nnn_ |  Overrides maximum size for text fields. (_Default_ is 8192 bytes.)  
**TIMEOUT=**_nnn_ |  Defines the timeout value for any SQL operation (time before error 0 returned).  
**TOP=**_nnn_ |  Specifies use of the TOP clause in SELECT statements (limits the number of rows to return in a result set). If **TOP=**_n_ is non-zero, then the **[KEF( )](../functions/kef.md)** / **[KEL( )](../functions/kel.md)** functions issue a **SELECT TOP 1SQL** statement, which improves system performance. If **TOP=**_n_ > 0, then PVX issues SELECT TOP _n_ to reduce the data transferred.  
**  
TOP=-1** indicates the driver supports SELECT TOP, but normal reading should not use it.  
  
_Default_ is **0** (TOP **_not_** supported).  
**TSQL=**_xxx_ |  Defines a SQL statement that is used to control what data the logical file returns.  
**TYP=**_xxx_ |  Sets identifier for different variant records. See **[ODB/OCI Variant Record Processing](oci.htm#Mark7)**.  
**UNIQUE=Y | N** |  Set to **1** , **Y** or **y** to have new opens be on a unique connection to the database. _Default_ is **N** (shared connection).  
**USER=**_xxx_ |  Specifies login name.  
**VALIDATE=Y | N** |  Set to **1** , **Y** or **y** to validate the data. This option can be included in the respective **INI** section by database type. Date validation for database connections will only be included if the database OPEN specifies a date format using the **[DATEFMT=](odb.htm#Mark9)** or **[MAS90DATE](odb.htm#Mark10)** option. For additional data validation information, see **[IOLIST](../directives/iolist.htm#Mark5)** directive. _(The VALIDATE option was added in PxPlus 2017.)_  
  
**_Use of Global String Variables as Option Values_**

In database connection options, you can provide the value following the **=** (_equals sign_) in global string variables. When opening the connection to the database, the system will check to see if the value following the **=** (_equals sign_) starts with a **%** and ends with a **$** and is the name of a valid global string variable. If so, the value is replaced with the contents of that global variable.

For example, the option **USER=**_%UserName_ _$_ would be dynamically changed by the EXE on the OPEN to replace the text _%UserName$_ with whatever is in that global variable.

_(Support to allow the use of global variables for defining database Link/Prefix files was added in PxPlus 2023 Update 1.)_

##  DSN List

A special option exists to return the list of known/configured Data Sources on the system. If you specify an ***** (_asterisk_) as the table name, the ODBC interface will return records consisting of two fields, the first being the DSN name, and the second being its description. Only READ and CLOSE statements may be processed against a connection opened using the ***** (_asterisk_).

**_Example:_**

> select DSNAME$,DESC$ from "[odb]*"  
>  print DSNAME$,":",DESC$  
>  next record  
>   
>  run  
>  MS Access Database:Microsoft Access Driver (*.mdb)  
>  Excel Files:Microsoft Excel Driver (*.xls)  
> dBASE Files:Microsoft dBase Driver (*.dbf)  
>  MQIS:SQL Server  
> PVXSRC:PxPlus SQL ODBC Driver

##  INI Settings

To avoid having to specify common ODBC settings, an ODBC section can be added to the PxPlus INI file. This section can contain any of the settings that you wish to use as a default during your session. Settings established in the INI file can be overridden in the OPEN specifications.

A typical setup to have server side cursors and to allow multiple active connections would have the following ODBC settings in the INI file:

> [ODBC]  
>  EXTROPT=(UPDLOCK)  
>  UNIQUE=0  
>  CURSORCLOSE=YES  
>  TOP=-1  
>  CURSOR_TYPE=DYNAMIC  
>  TIMEOUT=5  
>  ISOLATION=COMMITTED  
>  CONCURRENCY=OPT_VALUE  
>  AUTOCOMMIT=ON  
>  NONULLS=1

There is a special Debugging option available in the INI file only. If you include the option DEBUGIT = <string>, then whenever a SQL command is generated and passed to the ODBC server, the value in <string> followed by the current program name and line number will be added to the end of the statement. Using a value of "--" changes the program information to be considered a comment by the Microsoft SQL Server.

##  Using ODBC on UNIX

Two options are available for using ODBC on UNIX/Linux:

1. |  Use it directly just as you do in Windows using the open source ODBC implementation iODBC and unixODBC. One of these ODBC implementations will need to be installed, which usually can be done through the OS Package Manager (i.e. yum or apt-get).  
  
Next, an ODBC Driver, compatible with the ODBC implementation installed, will need to be installed and setup. Following that, PxPlus can use **[ODB]** to interact with the UNIX/Linux ODBC Driver.  
  
open (14,iol=*,opt="USER=user;PSWD=password;KEY=ID;CONCURRENCY=LOCK;EXTROPT=(UPDLOCK);NONULLS=Y")"[ODB]sqlsrv;salesrep"  
---|---  
2. |  To read Windows ODBC databases from a UNIX server, you would install and use WindX to make the connection or use PxPlus RPC on a PC or NT server and open your ODBC databases through that server.  
  
open (14,iol=*,opt="USER=user;PSWD=password;KEY=ID;CONCURRENCY=LOCK;EXTROPT=(UPDLOCK);NONULLS=Y")"[LCL][ODB]sqlsrv;salesrep"  
  
##  See Also

[**READ Read Data from File**](../directives/read.md)  
[**READ RECORD Read Record from File**](../directives/read_record.md)  
[**SELECT Select/Query From ... Where**](../directives/select.md)  
[**WRITE Add/Update Data in File**](../directives/write.md)  
[**WRITE RECORD Directive**](../directives/write_record.md)  
[**OPEN Open a File for Processing**](../directives/open.md)  
**[IOLIST Specify Variable List](../directives/iolist.md)  
[ODBC Linking Linux OS to MS SQL Databases](../PxPlus%20User%20Guide/Data%20Integration/Odbc%20Linking.md)**  
**[[ADO] Microsoft SQL Server Interface](ADO.htm)**  
**[[DB2] DB2 Support](db2.htm)**  
**[[MYSQL] Open MySql Native Database Link](mysql.htm)**  
**[[OCI] Connect to Oracle Server](oci.htm)**  
**[Database Export Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Export.md)**
