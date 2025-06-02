# Special File Command Tags

**[ADO]** |  **_Microsoft SQL Server Interface_**  
---|---  
  
## Formats

1. |  **OPEN** **(**_chan_**[**_,fileopt1_**])** "**[ADO]**_serveraddress_**[**_;table_**][**_;fileopt2_**]** "  
---|---  
2. |  **OPEN LOAD** __**(**_chan_**[**_,fileopt1_**])** "**[ADO]**_serveraddress_**[**_;table_**][**_;fileopt2_**]** "  
  
**_Where:_**

**[ADO]** |  File tag clause to inform PxPlus that it will be accessing an external ADO database (not a PxPlus data file).  
---|---  
_chan_ |  Channel or logical file number to open.  
_serveraddress_ |  Server address where the database is located.  
**LOAD** |  Keyword to locally cache a data read from an ADO database table.  
_fileopt1_ |  File options. Supported options include: |  **BSZ=**_num_ |  Buffer size (in bytes)  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**NBF=**_num_ |  Dedicated number of buffers  
**OPT=**_string$_ |  Open parameters (see **[[ADO] OPT= Parameters](ADO.htm#parameters)**)  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
_fileopt2_ |  **OPT=**_string$_ |  Open parameters (see **[[ADO] OPT= Parameters](ADO.htm#parameters)**).  
_table_ |  Name of the table to open. If the table name is not supplied, either SQL statements sent to the database must be created by the application (see **[Using SQL Directly Within PxPlus](../PxPlus%20User%20Guide/Data%20Integration/Introduction%20to%20SQL/Using%20SQL%20Directly%20Within%20PxPlus.md)**) or table and/or column information must be retrieved (see **[Retrieving DB2/ODB Table and Column Information](db2.htm#retrievinginfo)**).  
  
## Description

#### **Note:**  
PxPlus supports ADO under **_Windows only_**. Use **TCB(190)** to check if ADO is supported on a platform.

The **[ADO]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to a Microsoft SQL Server via an ActiveX Data Objects (ADO) interface. Once a channel is open for [ADO] use, it can be used the same as any other channel (i.e. for file I/O). It remains open until you close it.

When you are creating an SQL database table through [ADO], you will need to consider the level of permission for users requiring access to the table or other related objects. To ensure that users will have access to all necessary tables of the database, you can issue a GRANT command either in or to the SQL environment similar to the following:

> GRANT VIEW SERVER STATE TO _username_

**_Where:_**

> _username_ is the username of the user in the SQL database.

For a specific object (i.e. a table):

> GRANT [_privilege_name_] ON [_object_] TO [_username_]  
>   
> **_or_** _  
>   
> _ GRANT [_privilege_name_] ON [_object_name_] TO {_user_name_ | PUBLIC | _role_name_} [WITH GRANT OPTION]

## [ADO] OPT= Parameters

The **OPEN** parameters for connecting via ADO are:

**"ACCESS="** |  Determines type of file access required (**READ** or **WRITE**). _Default_ is **ACCESS=WRITE**. **_(INI Supported)_**  
---|---  
**"AUTOCOMMIT="** |  Determines auto commit functionality of the database driver (either **ON** or **OFF**). ** _(INI Supported)_** It is applicable only if the driver supports transactions.  
**"CACHEMETADATA="** |  Option to control the local caching of column metadata controlled by setting CACHEMETADATA to a value of **1**. Provided there is at least one table open in the session and this option is enabled, the retrieved column metadata will be cached. _Default_ is **0** (zero). **_(INI Supported)_**  
**"CACHEMODE="** |  Local option that specifies the cache mode to use for the table. If **0** (zero), then the key caching is determined by the KEYCACHETIME option.  
  
A value of **1** indicates that KEY'd requests will be cached. The same effect can be obtained by using an OPEN LOAD statement.  
  
A value of **2** indicates that the table will be opened as a FORWARDSECONDARY type cursor. This can also be achieved using the OPEN LOAD directive combined with a TSQL=*FORWARDSECONDARY* option.  
  
A value of **3** is similar to forward secondary except that it allows for forward and backward reading of records by caching previously read records to disk. **_(INI Supported)_**  
**"CACHESIZE="** |  Specifies the number of megabytes (MB) used for OPEN LOAD caching of records read from a table. This option is per table and defaults to 1. **_(INI Supported)_**  
**"CONCURRENCY="** |  Determines the type of concurrent access control/locking to be used. **_(INI Supported)_** |  **READONLY** |  Sets the cursor. Is set to _Read Only_ \- no updates allowed.  
---|---  
**LOCK** |  Applies low-level record locking.  
**OPT_VERSION** |  Causes optimistic locking with the database version control to be used.  
**OPT_VALUE** |  Causes optimistic locking with comparing record/column values to be used.  
**"CONNECT="** |  Specifies a connection string surrounded by a delimiter character.  
  
Unlike the [ODB] interface, ADO does not use a DSN and gathers its required settings from the connection string. The minimum connection string must include a provider such as "Connect='Provider=SQLOLEDB'" for SQL Server.  
  
When the database is configured to use the Windows Integrated Security, then this must be included in the connection string as well (e.g. "Connect='Provider=SQLOLEDB;Integrated Security=SSPI'"). Connection strings are driver specific. Consult the driver's reference for supported connection string values.  
  
**_Example:_** open (1,iol=*,opt="CONNECT='Provider=SQLOLEDB'")"[ADO]DataSrc;Customer" If the keywords **USER=** or **PSWD=** are supplied on the OPEN, then the values of these attributes will be appended to the connection string. The following examples are functionally equivalent: open (1,iol=*,opt="CONNECT='Provider=SQLOLEDB;Uid=foo; Pwd=bar;Initial Catalog=TheDB;Data Source=TheServer'")"[ADO];TheTable;" open (1,iol=*,opt="CONNECT='Provider=SQLOLEDB';User=foo; Pswd=bar;DB=TheDB")"[ADO]TheServer;TheTable;" To control the value of the application name passed to ADO and change it on-the-fly, use the Application Name parameter: CONNECT='Provider=SQLOLEDB;Application Name=TESTAPP'  
**"CURSOR_TYPE="** |  Defines the type of cursor that is to be used. **_(INI Supported)_** |  **FORWARD** |  Indicates that any result sets can be read in a forward only direction.  
---|---  
**STATIC** |  Indicates that the result set is static.  
**KEYSET** |  Forces the cursor to use/maintain record keys in a Keyset.  
**DYNAMIC** |  Indicates that the cursor is effective in the current Rowset only.  
**"DATEFMT="** |  Date format mask applying to all date fields in table. **_(INI Supported)_** This can be a combination of Y M D with any other characters.  
  
**_Example:_**  
  
To convert dates to 4-character year, month and day: DATEFMT=YYYYMMDD  
  
Other characters are inserted as is. DATEFMT=YY/MM/DD with a date of March 1, 2004 would be returned as 04/03/01.  
  
Two packed century formats are also supported:  
  
The first format, AA, maps A to 2000. The example of March 1, 2004 with DATEFMT=AAMMDD would be returned as A40301.  
The second format, KK, is similar except K maps to 2000. For the example, a DATEFMT=KKMMDD would return K40301.  
**"DB=" or "QUALIFIER="** |  Qualifies the specific database that you wish to use when using a driver to service multiple databases. ** _(INI Supported)_**  
**"DEBUGIT="** |  String to append to SQL statement, along with program name and line number for debugging purposes. ** _(INI Supported)_** This must indicate the comment character(s) appropriate to the database.  
  
**_Example:_**  
  
"--" is the comment identifier for Microsoft SQL Server; anything after "--" is ignored by SQL Server when compiling the SQL statement.  
**"EXEC_SPRNO="** |  Name of stored procedure used to emulate the **[RNO( )](../functions/rno.md)** function. You must create a stored procedure for each table and key for which an RNO is needed. Format is **spRNO** _tablename_keynumber_ _._  
**"EXTROPT="** |  Controls the format of the SELECT statement used to process an EXTRACT. **_(INI Supported)_**   
  
By default, PxPlus generates a SELECT* FROM table FOR UPDATE WHERE...  
  
When **EXTROPT=**_text_ , then _text_ is substituted in place of FOR UPDATE. In addition, if the first character of _text_ is $, then the remaining characters of _text_ are placed at the end of the SELECT statement rather than after the table name. This allows for different variations of SQL to be supported.  
**"FACTSDT="** |  Causes all date fields to be translated to/from the SQL date format to the format used by the FACTS application.  
**"FAST="** |  Specifies that for SQL server, the OPTION (FAST N) will be applied to open ended SELECT statements. This can boost performance when the ORDER BY of a select is not covered by a clustered index. Format is FAST=N, where **0**  _(default)_ indicates not to apply the option, and **N > 0** indicates the number of FAST rows.  
**"IDENTDELIM=C [C]"** |  Specifies the character(s) used to encapsulate table and column name identifiers when generating an SQL statement.  
  
If only _one_ character is specified (e.g. " ), then this character will be appended both before and after the identifier name.  
  
If _two_ characters are provided (e.g. [ ] ), then the first will be inserted ahead of the identifier name, and the second will be added following the identifier name.  
**"IND="** |  Identifies a column that contains a sequential number starting at 0. This is used to emulate an indexed file.  
**"IGNORE_NODATA="** |  Set to **1** (**Y** or **y**) to ignore SQL_NO_DATA error.  
  
If set to **0** (**N** or **n**), PxPlus will report Error #11: Record not found or Duplicate key on write if it receives a SQL_NO_DATA error when executing a direct SQL statement. _Default_ is **1**.  
**"INVALIDDATE=[0,1,2]"** |  This option determines how invalid date strings will be handled.  
  
A default setting of **0** (zero) indicates that NULL will be used if the field allows NULL values.  
  
If the field does not allow nulls, then option **1** will be used. The setting of 1 indicates that a value of '1800-01-01' will be substituted for an invalid date value.  
  
A setting of **2** indicates that an error should be generated if an invalid date is encountered.  
**"ISOLATION="** |  Controls the isolation that this connection will have relative to other processes on the same database. In particular, it controls Dirty reads (reading data that may be rolled back), Non-Repeatable reads (reading data after being changed by other transactions), and Phantom reads (reading data newly added to file). **_(INI Supported)_**   
  
Settings include:  
  
**UNCOMMITED** (D, R, P possible)  
**COMMITED** (D possible, R and P not possible)  
**REPEATABLE** (P possible, D and R not possible)  
**SERIAL** (D, R and P not possible)  
**"KEY="** |  Identifies fields that make up the key(s). For named keys, enter ***NAME:_keyname_**.  
  
**OPEN**(_chan_)"**[ODB]**_dsn;table_ ;**KEY** **=**_field,field_ ,***NAME:keyname** "  
  
Use the **:D** option to indicate that the key segment is to be sorted in descending order.  
  
KEY=KeyFld1,KeyFld2:D,KeyFld3  
**"KEYCACHETIME="** |  For non-cached tables (those with CACHEMODE=0), this specifies the amount of time in milliseconds that the last read key can be considered valid. If greater than zero, then subsequent requests for the same key within the specified duration will be read from cache rather than the database.  
**"KEYDATA="** |  Identifies a column that represents the key. This is used to emulate an external key where the data is not duplicated in the data.  
**"KEYSET_SIZE="** |  Size of the Keyset for use with the cursor. ** _(INI Supported)_**  
**"LOCKED="** |  This option is similar in format to the **KEY=** and **REC=** and specifies which columns are considered non-updateable within the table. These columns will be read in from the database but will be excluded when generating INSERT or UPDATE statements.  
**"MAS90DATE"** |  Reformats the contents of a date column to and from the Sage MAS 90 date format.  
**"MAS90SET"** |  Sets flags for Sage MAS 90 emulation, such as turning on the MAS90DATE conversion.  
**"MAXROWS="** |  Maximum number of rows/records returned. **_(INI Supported)_**  
**"NONUMADJ="** |  Set to **1** , **Y** or **y** to suppress +3 adjustment for defined length of numerics. **_(INI Supported)_**  
**"NONULLS="** |  Inserts zero-length strings rather than nulls into the target database and does not generate WHERE clauses checking for IS NULL or IS NOT NULL. **_(INI Supported)_** Set to **1** , **Y** or **y** to enable or **0** , **N** or **n** to disable. If the application does not work correctly when moving from Version 5 or lower, then set NONULLS=P to indicate that keys are handled the same as pre-Version 6.  
**"NOSTRIP"** |  Keeps trailing spaces.  _(Default)_  
**"NULLPADKEY"** |  Forces keys to be padded to full length with the null character, $00$. ** _(INI Supported)_** When used in INI file, set NULLPADKEY=1, Y or y.  
**"POSUPDATE="** |  Determines use of SqlSetPos functions. ** _(INI Supported)_** Use one of the following: |  **M** |  Must use positioned update  
---|---  
**O** |  _(Default)_ Optionally use positioned update  
**N** |  Never use positioned update  
**"PREPARE="** |  Set to **1** , **Y** or **y** to use prepared statements. **_(INI Supported)_** Prepared statements are pre-compiled SQL that may improve performance. (_Default_ is **Y**.)  
**"PREPARELIMIT="** |  Defaults to **10** and is used to determine when to use prepared statements. The system keeps track of the statements that utilize the **=**  _(equal)_ operator on all parts of the WHERE clause to reduce the overhead of creating prepared statements that are never used. **_(INI Supported)_**  
**"PSWD="** |  Specifies password. (**_INI Supported, but NOT SECURE_**. Anyone with access to the INI will be able to read this password.)  
**"READNEXTLIMIT="** |  Adds a limit to the size of the record set generated by a SELECT to try to reduce the number of rows in a record set. If the value is less than or equal to 0, then an optimized scaling algorithm will be used. **_(INI Supported)_** This is a dynamic variation on TOP=.  
**"REC="** |  Provides the column names, type and size. This is typically done to improve performance. If this information is not provided, then PxPlus must query the database for this information. See **[ODB/OCI\DB2 Record Processing](oci.htm#Mark12)**.  
**"RECDATA="** |  Identifies a column to return as the full record. This can be used for variant records that use complex rules to identify the record type.  
**"SCHEMA="** |  Sets the Schema name to be prefixed to the table name (separated with a dot).  
  
**_Example:_**  
  
MySchema.MyTable  
**"SHARED"** |  Sets all tables to share a single connection to the ADO database.  _(Default)_  
**"STDDATE"** |  Overrides the above formatting on individual columns.  
**"STRCOMPARE={ASCII|SQL}"** |  Determines the type of string comparison to use. (_Default_ is **ASCII**.)  
**"STRIP"** |  Removes trailing spaces from fields.  
**"TEXTMAX="** |  Overrides maximum size for text fields. (_Default_ is 8192 bytes.) **_(INI Supported)_**  
**"TIMEOUT="** |  Defines the time out value for SQL read operations (time before error 0 returned). **_(INI Supported)_**. **[WRITE](../directives/write.md)**, **[UPDATE](../directives/update.md)**, **[INSERT](../directives/insert.md)** and **[REMOVE](../directives/remove.md)** directives are controlled by the TIM= option (or default **TIM/RTY** if not specified).  
**"TOP="** |  Specifies use of the TOP clause in SELECT statements (limits the number of rows to return in a result set). **_(INI Supported)_** If **TOP=**_n_ is non-zero, then the **[KEF( )](../functions/kef.md)** / **[KEL( )](../functions/kel.md)** functions issue a **SELECT TOP1SQL** statement, which improves system performance. If **TOP=**_n_ > 0, then PxPlus issues SELECT TOP _n_ to reduce the data transferred. **TOP=-1** indicates the driver supports SELECT TOP, but normal reading should not use it. **TOP=-2** is similar to TOP=-1 except the ADO driver implements the limiting of data and can be used in cases where the database does not support the TOP option.  
  
(_Default_ is **0** \- TOP **_not_** supported.)  
**"TRACE="** |  Provides additional debug/tracing information from the ADO driver. Valid options are **1** to enable or **0** (zero) to disable. (_Default_ is **0**.)  
**"TSQL="** |  Defines a SQL statement that is used to control what data the logical file returns.  
**"TYP="** |  Sets identifier for different variant records. See **[ODB/OCI Variant Record Processing](oci.htm#Mark7)**.  
**"UNIQUE"** |  Sets new opens to be on a unique connection to the database. ** _(INI Supported)_** When used in an INI file, set **UNIQUE=1** , **Y** or **y**. **UNIQUE=0** , **N** or **n** indicates a shared connection.

#### **Note:**  
The recommendation is to leave this setting at the _default_ of **Y** as the driver automatically minimizes SQL connection usage.  
  
**"USER="** |  Specifies login name. ** _(INI Supported)_**  
**"USESQLLOCKS="** |  Determines if SQL application locks will be used (when accessing MSSQL).  
  
Set to **1** , **Y** or **y** to enable or **0** , **N** or **n** to disable. (_Default_ is **1**.) If disabled, then prefix style file locking will be used for **[LOCK](../directives/lock.md)**, **[OPEN LOCK](../directives/open.md)** and **[UNLOCK](../directives/unlock.md)** directives. **_(INI Supported)_**  
**"VALIDATE=Y | N"** |  Set to **1** , **Y** or **y** to validate the data. This option can be included in the respective **INI** section by database type. Date validation for database connections will only be included if the database OPEN specifies a date format using the **[DATEFMT=](ADO.htm#Mark1)**, **[MAS90DATE](ADO.htm#Mark2)** or **[FACTSDT](ADO.htm#Mark3)** option. For additional data validation information, see **[IOLIST](../directives/iolist.htm#Mark5)** directive. _(The VALIDATE option was added in PxPlus 2017.)_  
  
**_Example:_**

To read Windows ADO databases from a UNIX server, you would install and use WindX to make the connection or use PxPlus RPC on a Windows Server and open your ADO databases through that server:

> open (14)"[WDX][ADO]_serveraddress_ "

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
**[[DB2] DB2 Support](db2.htm)**  
**[[MYSQL] Open MySql Native Database Link](mysql.htm)**  
**[[OCI] Connect to Oracle Server](oci.htm)**  
**[[ODB] Open Database](odb.htm)  
[Database Export Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Export.md)**
