# Special File Command Tags

**[DB2]** |  **_DB2 Support_**  
---|---  
  
## Format

**OPEN (**_chan_[,_fileopt1_]**)"[DB2]**_database_[;_table_][;_fileopt2_]**"**

**_Where:_**

**[DB2]** |  File tag clause to inform PxPlus that it will be opening a DB2 database (not a PxPlus data file).  
---|---  
_chan_ |  Channel or logical file number to open.  
_database_ |  Name of the DB2 database to which to connect.  
_fileopt1_ |  File options. Supported options include: |  **BSZ=**_num_ |  Buffer size (in bytes)  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**OPT=**_string$_ |  Open parameters (see **[DB2] OPT= Parameters**)  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
_fileopt2_ |  **OPT=**_string$_ |  Open parameters (see **[DB2] OPT= Parameters**).  
_table_ |  Name of the table to open. If the table name is not supplied, either SQL statements sent to the database must be created by the application (see **[Using SQL Directly Within PxPlus](../PxPlus%20User%20Guide/Data%20Integration/Introduction%20to%20SQL/Using%20SQL%20Directly%20Within%20PxPlus.md)**) or table and/or column information must be retrieved (see **[Retrieving DB2/ODB Table and Column Information](db2.htm#retrievinginfo)**).  
  
#### **Important Note:**  
To use the DB2 interface, you **_must_** have either the DB2 database or the DB2 client installed on a workstation, and the path to the _db2cli.dll_ file **_must_** be locatable by the PATH environment variable.  
  
When using the DB2 client, a _db2cli.ini_ file is created in the user directory to specify such parameters as the _Hostname_ (address), _uid_ (user) and _pwd_ (password).

## Description

The **[DB2]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to an external DB2 database server. Once you open a channel for **[DB2]** use, you can use it just like any other channel (i.e. for file I/O). It remains open until you close it. Use **TCB(198)** to check if DB2 is supported on a platform.

#### **Note:**  
This feature requires activation of PxPlus DB2 support. Refer to the PxPlus website **[www.pvxplus.com](http://www.pvxplus.com/)** for licensing information.

##  [DB2] OPT= Parameters

These **OPEN** parameters can be used for connecting via DB2. This list also indicates which parameters are supported for use in the INI file (**[DB2]** section):

**ACCESS=** |  Determines type of file access required (**READ** or **WRITE**). _Default_ is **ACCESS=WRITE**. **_(INI Supported)_**  
---|---  
**AUTOCOMMIT=** |  Determines auto commit functionality of the database driver (either **ON** or **OFF**). ** _(INI Supported)_** It is applicable only if the driver supports transactions.  
**CONCURRENCY=** |  Determines the type of concurrent access control/locking to be used. **_(INI Supported)_** |  **READONLY** |  Sets the cursor. Is set to _Read Only_ \- no updates allowed.  
---|---  
**LOCK** |  Applies low-level record locking.  
**OPT_VERSION** |  Causes optimistic locking with the database version control to be used.  
**OPT_VALUE** |  Causes optimistic locking with comparing record/column values to be used.  
**COMPLETE=** |  Determines the response to incomplete information by the following values: |  **0** (SQL_DRIVER_NOPROMPT) |  _(Default)_ Driver Manager copies the connection string specified by the application.  
---|---  
**1** (SQL_DRIVER_COMPLETE) _or_   
**3** (SQL_DRIVER_COMPLETE_REQUIRED) |  If the connection string specified by the application includes the DSN keyword, the Driver Manager copies the connection string specified by the application. Otherwise, it takes the same actions as SQL_DRIVER_PROMPT.  
**2** (SQL_DRIVER_PROMPT) |  If the connection string does not contain the DRIVER, DSN, or FILEDSN keyword, the Driver Manager displays the Data Sources dialog box. It constructs a connection string from the data source name returned by the dialog box and any other keywords passed to it by the application. If the data source name returned by the dialog box is empty, the Driver Manager specifies the keyword-value pair **DSN=Default**. (This dialog box will not display a data source with the name "Default".) All options except NOPROMPT require the handle of the parent window, which will be the handle of the currently active PxPlus window. This parameter is not used if a connection string is not supplied.  
**CONNECT=** |  Specifies a connection string surrounded by a delimiter character, enabling use of a "DSN-less" connection. Connection strings are driver specific. Consult the driver's reference for supported connection string values. Under UNIX/Linux, this parameter requires **COMPLETE=0**. If a connection string is supplied, the value of the database name is ignored. If the database name is not null, then the value is used only for determining if a connection should be shared.  
  
**_Example:_** open (1,iol=*,opt="CONNECT='DSN=nomads'")"[DB2]foo;Customer"  
open (2,iol=*,opt="")"[DB2]foo;Customer Classes"  
open (3,iol=*,opt="",err=*next)"[DB2];Customer"  
open (4,iol=*,opt="CONNECT='DSN=foo'")"[DB2]foo;Customer" The table opened on channel 2 will share the connection because of foo.  
Channel 3 will error out because neither a valid database name nor a valid connect string was supplied.  
Channel 4 will open the table Customer using the properties of the "nomads" DSN because foo matches (the connect string was ignored). If the keywords **USER=** or **PSWD=** are supplied on the OPEN, then the values of these attributes will be appended to the connection string.  
**CURSORCLOSE=** |  Determines whether all cursors are closed on a transaction commit. Options are YES _(default)_ or NO.  
**CURSOR_TYPE=** |  Defines the type of cursor that is to be used. |  **FORWARD** |  Indicates that any result sets can be read in a forward-only direction. **_(INI Supported)_**  
---|---  
**STATIC** |  Indicates that the result set is static.  
**KEYSET** |  Forces the cursor to use/maintain record keys in a Keyset.  
**DYNAMIC** |  Indicates that the cursor is effective in the current Rowset only.  
**CURSOR_USE=** |  Defines the type of cursor to be used. **_(INI Supported)_** |  **DRIVER** |  _(Default)_ Assumes the specific driver's own cursors.  
---|---  
**ODBC** |  Causes the ODBC interface to use the "Driver Managers" cursor library that may provide additional functionality not available within the database driver.  
**IF_NEEDED** |  Tells the system to use the specific database driver's own cursor functionality unless the additional functionality is requested specifically.  
**DATEFMT=** |  Date format mask applying to all date fields in table. **_(INI Supported)_** This can be a combination of Y M D with any other characters. **_Example:_** To convert dates to 4-character year, month and day: DATEFMT=YYYYMMDD Other characters are inserted as is. DATEFMT=YY/MM/DD with a date of March 1, 2004 would be returned as 04/03/01. Two packed century formats are also supported: The first format, AA, maps A to 2000. The example of March 1, 2004 with DATEFMT=AAMMDD would be returned as A40301.  
The second format, KK, is similar, except K maps to 2000. For the example, a DATEFMT=KKMMDD would return K40301.  
**DB=**_or_ **QUALIFIER=** |  Qualifies the specific database that you wish to use when using a driver to service multiple databases.**_(INI Supported)_**  
**DEBUGIT=** |  String to append to SQL statement along with program name and line number for debugging purposes. (**_INI Supported)_** This must indicate the comment character(s) appropriate to the database. **_Example:_** "--" is the comment identifier for Microsoft SQL Server; anything after "--" is ignored by SQL Server when compiling the SQL statement.  
**EXEC_SPRNO=** |  Name of stored procedure used to emulate the **[RNO( )](../functions/rno.md)** function. You must create a stored procedure for each table and key for which an RNO is needed. Format is **spRNO** _tablename_keynumber_ _._  
**EXTROPT=** |  Controls the format of the SELECT statement used to process an EXTRACT. **_(INI Supported)_** By default, PxPlus generates a SELECT* FROM table FOR UPDATE WHERE... When **EXTROPT=**_text_ , then _text_ is substituted in place of FOR UPDATE. In addition, if the first character of _text_ is $, then the remaining characters of _text_ are placed at the end of the SELECT statement rather than after the filename. This allows for different variations of SQL to be supported.  
**IND=** |  Identifies a column that contains a sequential number starting at 0. This is used to emulate an indexed file.  
**ISOLATION=** |  Controls the isolation that this connection will have relative to other processes on the same database. In particular, it controls **D** irty reads (reading data that may be rolled back), Non-**R** epeatable reads (reading data after being changed by other transactions), and **P** hantom reads (reading data newly added to file). **_(INI Supported)  
  
_** Settings include: **UNCOMMITED** (**D** , **R** , **P** possible)  
**COMMITED** (**D** possible, **R** and **P** not possible)  
**REPEATABLE** (**P** possible, **D** and **R** not possible)  
**SERIAL** (**D** , **R** and **P** not possible)  
**KEY=** |  Identifies fields that make up the key(s). For named keys, enter ***NAME:_keyname_**. **OPEN**(_chan_)"**[ODB]**_dsn;table_ ;**KEY** **=**_field,field_ _,_***NAME:_keyname_** _"_ Use the **:D** option to indicate that the key segment is to be sorted in descending order. KEY=KeyFld1,KeyFld2:D,KeyFld3  
**KEYDATA=** |  Identifies a column that represents the key. This is used to emulate an external key where the data is not duplicated in the data.  
**KEYSET_SIZE=** |  Size of the Keyset for use with the cursor. ** _(INI Supported)_**  
**MAS90DATE** |  Reformats the contents of a date column to and from the Sage MAS 90 date format.  
**MAS90SET** |  Sets flags for Sage MAS 90 emulation, such as turning on the MAS90DATE conversion.  
**MAXROWS=** |  Maximum number of rows/records returned. **_(INI Supported)_**  
**NONUMADJ=** |  Set to **1** , **Y** or **y** to suppress +3 adjustment for defined length of numerics. **_(INI Supported)_**  
**NONULLS=** |  Inserts zero-length strings rather than nulls into the target database and does not generate **WHERE** clauses checking for **IS NULL** or **IS NOT NULL**. **_(INI Supported)_** Set to **1** , **Y** or **y** to enable or **0** , **N** or**n** to disable. If the application does not work correctly when moving from Version 5 or lower, then set **NONULLS=P** to indicate that keys are handled the same as pre-Version 6.  
**NOSTRIP** |  Keeps trailing spaces.  _(Default)_  
**NULLPADKEY** |  Forces keys to be padded to full length with the null character, $00$. When used in an INI file, set **NULLPADKEY=1** , **Y** or **y**.  
**POSUPDATE=** |  Determines use of SqlSetPos functions. ** _(INI Supported)_** Use one of the following: |  **M** |  Must use positioned update  
---|---  
**O** |  _(Default)_ Optionally use positioned update  
**N** |  Never use positioned update  
**PREPARE=** |  Set to **1** , **Y** or **y** to use prepared statements. **_(INI Supported)_** Prepared statements are pre-compiled SQL that may improve performance.  
**PSWD=** |  Specifies password. (**_INI Supported, but NOT SECURE_**. Anyone with access to the INI will be able to read this password.)  
**REC=** |  Provides the column names, type and size. This is typically done to improve performance. If this information is not provided, then PxPlus must query the database for this information. See **[ODB/OCI/DB2 Record Processing](oci.htm#Mark12)**.  
**RECDATA=** |  Identifies a column to return as the full record. This can be used for variant records that use complex rules to identify the record type.  
**ROWSET_SIZE=** |  Size of the Rowset used by the cursor. ** _(INI Supported)_**  
**SHARED** |  Sets all tables to share a single connection to the Oracle database.  _(Default)_  
**STDDATE** |  Overrides the above formatting on individual columns.  
**STRIP** |  Removes trailing spaces from fields.  
**TEXTMAX=** |  Overrides maximum size for text fields. (_Default_ is 8192 bytes.) **_(INI Supported)_**  
**TIMEOUT=** |  Defines the timeout value for any SQL operation (time before error 0 returned). **_(INI Supported)_**  
**TOP=** |  Specifies use of the TOP clause in SELECT statements (limits the number of rows to return in a result set). **_(INI Supported)_** If **TOP=**_n_ is non-zero, then the **[KEF( )](../functions/kef.md)** / **[KEL( )](../functions/kel.md)** functions issue a **SELECT TOP1SQL** statement, which improves system performance. If **TOP=**_n_ > 0, then PxPlus issues **SELECT TOP _n_** to reduce the data transferred. **TOP=-1** indicates the driver supports SELECT TOP, but normal reading should not use it. _Default_ is **0** (TOP **_not_** supported).  
**TSQL=** |  Defines a SQL statement that is used to control what data the logical file returns.  
**TYP=** |  Sets identifier for different variant records. See **[ODB/OCI Variant Record Processing](oci.htm#Mark7)**.  
**UNIQUE** |  Sets new opens to be on a unique connection to the database. ** _(INI Supported)_** When used in an INI file, set **UNIQUE=1** , **Y** or **y**. **UNIQUE=0** , **N** or **n** indicates a shared connection.  
**USER=** |  Specifies login name. ** _(INI Supported)_**  
**VALIDATE=Y | N** |  Set to **1** , **Y** or **y** to validate the data. This option can be included in the respective **INI** section by database type. Date validation for database connections will only be included if the database OPEN specifies a date format using the **[DATEFMT=](db2.htm#Mark1)** or **[MAS90DATE](db2.htm#Mark2)** option. For additional data validation information, see **[IOLIST](../directives/iolist.htm#Mark5)** directive. _(The VALIDATE option was added in PxPlus 2017.)_  
  
**_Example:_**

To open a connection to a DB2 table using the column names to generate the IOList:

> open (14,iol=*)"[DB2]DB2instance,DB2table"

**_Use of Global String Variables as Option Values_**

In database connection options, you can provide the value following the **=** (_equals sign_) in global string variables. When opening the connection to the database, the system will check to see if the value following the **=** (_equals sign_) starts with a **%** and ends with a **$** and is the name of a valid global string variable. If so, the value is replaced with the contents of that global variable.

For example, the option **USER=**_%UserName_ _$_ would be dynamically changed by the EXE on the OPEN to replace the text _%UserName$_ with whatever is in that global variable.

_(Support to allow the use of global variables for defining database Link/Prefix files was added in PxPlus 2023 Update 1.)_

## See Also

[**READ Read Data from File**](../directives/read.md)  
[**READ RECORD Read Record from File**](../directives/read_record.md)  
[**SELECT Select/Query From ... Where**](../directives/select.md)  
[**WRITE Add/Update Data in File**](../directives/write.md)  
[**WRITE RECORD Write Record**](../directives/write_record.md)  
[**OPEN Open a File for Processing**](../directives/open.md)  
**[IOLIST Specify Variable List](../directives/iolist.md)**  
**[[ADO] Microsoft SQL Server Interface](ADO.htm)**  
**[[MYSQL] Open MySql Native Database Link](mysql.htm)**  
**[[OCI] Connect to Oracle Server](oci.htm)**  
**[[ODB] Open Database](odb.htm)  
[Database Export Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Export.md)**

##  Retrieving DB2/ODB Table and Column Information

When accessing an external database with a raw (no table specified) connection, it is possible to find out what the table, columns and indices are by using either a **READ** or **READ RECORD** and a **KEY=**_string$_ value:

**_Where:_**

_string$_ |  Can be one of the following: |  "?" |  Returns the result of an SQLTables( ) system call with null parameters.  
---|---  
"*_xxxx_ " |  Returns the result of a call to SQLColumns, passing the table name _xxxx_.  
"**_xxxx_ " |  Returns the result of a call to SQLStatistics, passing the table name _xxxx_.  
  
**_Example:_**

> open (chan)"[DB2]Database;;"

> read (chan,key="?")iol=TableIOList

#### **Note:**  
For more information on the results returned for an SQLTables( ) call, an SQLColumns( ) call or an SQLStatistics( ) call, visit **[https://infocenter.sybase.com/help/index.jsp.htm](https://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.infocenter.dc36525_1500/html/mfcig/CIHCEDEJ.md)**.
