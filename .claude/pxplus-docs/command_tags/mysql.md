# Special File Command Tags

**[MYSQL]** |  **_Open MySQL/MariaDB Database Link_**  
---|---  
  
##  Format

**OPEN (**_chan_**[** ,_fileopt_**] [** ,__**OPT=**_params_**])"[MYSQL]_database_ [** ;__**[**_table_**] [** ;_params_** __]]"**

**_Where:_**

**[MYSQL]** |  File tag clause to inform PxPlus that it will be opening a direct link to a MySQL/MariaDB database server (not a PxPlus data file).

#### **Note:  
** The square brackets around **MYSQL** are **_mandatory_**.  
  
---|---  
_chan_ |  Channel or logical file number to open.  
_database_ |  Name of the database to open (string expression).  
_fileopt_ |  File options. Supported options include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**IOL=**_iolref_ |  Default IOList  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
_params_ |  Open parameters (see **OPT= Parameters**). All parameters are semi-colon separated and can be contained in the OPEN pathname and/or the OPT= string.  
_table_ |  Name of the table to open. If the table name is not supplied, either SQL statements sent to the database must be created by the application (see **[Using SQL Directly Within PxPlus](../PxPlus%20User%20Guide/Data%20Integration/Introduction%20to%20SQL/Using%20SQL%20Directly%20Within%20PxPlus.md)**) or table and/or column information must be retrieved (see **[Retrieving DB2/ODB Table and Column Information](db2.htm#retrievinginfo)**).  
  
#### **Important Note:**  
To use the **MySQL** interface, you **_must_** have either the MySQL/MariaDB database or the MySQL/MariaDB client installed on a workstation, and the **libmysql.dll/libmariadb.dll** file **_must_** be locatable by the PATH environment variable.  
  
_(Support for the newer MariaDB C Connector when using the MySQL interface was added in PxPlus 2024 Update 1.)_

##  Description

The **[MYSQL]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to an external MySQL/MariaDB database server. Once you open a channel for **[MYSQL]** use, you can use it just like any other channel (i.e. for file I/O). It remains open until you close it.

There are two basic modes of operation when using the MySQL/MariaDB connection to a database - **_Emulation_** and **_Direct_**. Emulation mode is used when a table name is provided in the OPEN command. Direct mode is chosen when no table name is provided.

In **_Emulation_** mode, the MySQL/MariaDB interface will map all standard **[READ](../directives/read.md)**, **[WRITE](../directives/write.md)** and **[REMOVE](../directives/remove.md)** directives, along with KEY functions, into SQL commands for the specified table. In this mode, the MySQL/MariaDB table will emulate a normal PxPlus Keyed or Indexed file. This mode allows most existing applications to use MySQL/MariaDB tables in lieu of native PxPlus files. In Emulation mode, PxPlus will not pass NULL fields to the database but instead use strings with no characters.

In **_Direct_** mode, the application is responsible for creating and submitting SQL commands directly to the database. The **[WRITE RECORD](../directives/write_record.md)** directive is used to send SQL commands to the MySQL/MariaDB server. The **[READ](../directives/read.md)** or **[READ RECORD](../directives/read_record.md)** directives can be used to return the results (if any). The results of any SQL command will be returned as a logical PxPlus data record with field separators (SEP) between each field.

_(The native MySQL interface was added in PxPlus v7.00.)_

##  OPT= Parameters

The **OPEN** parameters for connecting to a **MySQL/MariaDB** server are listed below. Most of the parameters can also be specified in the PxPlus INI file in the**"[MySql]"** section.

**BUSYRETRY=Y | N** |  If set to **N** (or **0**), the system will **_not_** retry SQL commands that return data busy statuses. Normally, you would set this to **N** if your MySQL/MariaDB server automatically waits for busy records. _Default_ is **Y** \- retry requests that return Data busy statuses.  
---|---  
**CURSORCLOSE=Y | N** |  Setting this to **Y** will force the system to close all "open" statements whenever a Commit is issued.  
**DATEFMT=**_xxx_ |  Date format mask applying to all date fields in table. This can be a combination of Y M D with any other characters. **_Example:_** To convert dates to 4-character year, month and day: DATEFMT=YYYYMMDD Other characters are inserted as is. DATEFMT=YY/MM/DD with a date of March 1, 2004 would be returned as 04/03/01.  
**DATE_CONVERT=Y | N** |  If set to **Y,** the system will convert database columns with DATE format to the standard system date format as opposed to using the native ASCII date format used by MySQL/MariaDB. _Default_ is **Y**.  
**DATETIME_CONVERT=Y | N** |  If set to **Y,** the system will convert database columns with DATETIME format to the standard system date format as opposed to using the native ASCII date format used by MySQL/MariaDB. _Default_ is **Y**.  
**DEBUG=Y | N** |  String to append to SQL statement along with program name and line number for debugging purposes. This must indicate the comment character(s) appropriate to MySQL/MariaDB.  
**EXTROPT=**_xxxxx_ |  Controls the format of the SELECT statement used to process an EXTRACT. By default, PxPlus will generate the lock clause based on the setting of the **['XI'](../parameters/xi.md)** system parameter. If XI is **_On_** , the system generates: SELECT * FROM table LOCK IN SHARE MODE WHERE... If XI is **_Off_** , the system generates: SELECT * FROM table FOR UPDATE WHERE... When **EXTROPT=**_text_ , then _text_ is substituted in place of FOR UPDATE/LOCK IN SHARE MODE. In addition, if the first character of _text_ is $, then the remaining characters of _text_ are placed at the end of the SELECT statement rather than after the filename. This allows for different variations of SQL to be supported.  
**IND=**_fld_ |  Identifies a column that contains a sequential number starting at 0. This is used to emulate an indexed file.  
**IOPROG=**_xxxx_ |  Specifies the name of an embedded IO program to use with this connection.  
**KEY=**_fld_ _, fld, fld, .._ |  Identifies fields that make up the key(s). For named keys, enter ***NAME:_keyname_**. **OPEN**(_chan_)"**[MYSQL]**_dsn_ ;_table_ ;**KEY=**_field_ ,_field_ ,***NAME:_keyname_** " Use the **:D** option to indicate that the key segment is to be sorted in descending order. KEY=KeyFld1,KeyFld2:D,KeyFld3  
**KEYDATA=**_fld_ |  Identifies a column that represents the key. This is used to emulate an external key where the data is not duplicated in the data.  
**MAS90DATE** |  Reformats the contents of a date column to and from the Sage MAS 90/Sage MAS 200 date format.  
**NONUMADJ=Y | N** |  Set to **Y** (or **1**) tells the system not to reserve additional space in internal buffers for the sign and decimal points of numeric data.  
**NOSTRIP** |  Keeps trailing spaces.  _(Default)_  
**NULLPADKEY= Y | N** |  Set to **Y** (or **1**) to force keys to be padded to full length with the null character, **$00$**.  
**PORT=**_nnnn_ |  Identifies the port number on the server that will be used to connect to. If not specified, the MySQL/MariaDB default port number will be used.  
**PREFETCH****=Y | N** |  Controls the fetching of data from the server. If set to **N**  _(default)_ , data records "selected" from the database will be returned as read. When set to **Y** (or **1**) and more than one record has been selected (read next), the data will be fetched from the server in advance of the actual READ directive and cached on the workstation thereby improving performance.  
**PREPARE=Y | N** |  Set to **Y** (or **1**) to use prepared statements. Prepared statements are pre-compiled SQL that may improve performance.  
**PSWD=**_xxx**or**_**  
PASSWORD=**_xxx_ |  Specifies the password for the user when connecting to the database server.

#### **Warning!   
**It is **_not advisable_** to place this in the INI file since anyone with access to it will be able to read this password.  
  
**REC=**_fld_ _, fld, fld_ |  Provides the column names, type and size. This is typically done to improve performance. If this information is not provided, then PxPlus must query the database for this information. See **[ODB/OCI/DB2 Record Processing](oci.htm#Mark12)**.  
**RECDATA=**_fld_ |  Identifies a column to return as the full record. This can be used for variant records, which use complex rules to identify the record type.  
**SERVER=**_xxx**or**_**  
HOST=**_xxx_ |  Identifies the IP address or name of the database server to connect to.  
**SHARED** |  Sets all tables to share a single connection to the database server.  _(Default)_  
**SSLVERIFY** |  Enables verification that the SSL/TLS certificate came from a trusted vendor, ensuring the certificate's hostname matches, and that it has not expired. By default, SSL/TLS certificates are not verified. Enable this option only when connecting to a database using SSL/TLS. This option does not work with self-signed certificates. _(The SSLVERIFY option was added in PxPlus 2024 Update 1.)_  
**STDDATE** |  Overrides the date formatting on individual columns.  
**STRIP** |  Removes trailing spaces from field.  
**SUBQUERY****=** |  Controls how SELECT statements that retrieve single records will be generated. Due to an error in the processing of the SELECT statement on some MySQL/MariaDB servers to retrieve the proper first row of a SELECT, a sub-query had to be used. Current versions of MySQL/MariaDB properly support the **LIMIT _n_** option. When omitted or set to **N**  _(Default)_ , the **LIMIT _n_** option is used to restrict the data returned to a single record. When set to **Y** (or **1**), a sub-query is constructed and used.  
**TEXTMAX=**_nnn_ |  Overrides maximum size for text fields. (_Default_ is 8192 bytes.)  
**TIMESTAMP_CONVERT=Y | N** |  If set to **Y,** the system will convert database columns with TIMESTAMP format to the standard system date format as opposed to using the native ASCII date format used by MySQL/MariaDB. _Default_ is **N**.  
**TOP=**_n_ |  Specifies use of the TOP clause in SELECT statements (limits the number of rows to return in a result set). If **TOP=**_n_ is non-zero, then the **[KEF( )](../functions/kef.md)** / **[KEL( )](../functions/kel.md)** functions issue a "SELECT ... LIMIT 1" SQL statement, which improves system performance. If **TOP=**_n_ > 0, then the system will issue a "SELECT ... LIMIT _n"_ to reduce the data transferred. **TOP=-1** indicates the driver supports SELECT ... LIMIT option, but normal reading should not use it. _Default_ is **0** (not supported).  
**TYP=**_xxxx_ |  Sets identifier for different variant records. See **[ODB/OCI/DB2 Record Processing](oci.htm#Mark12)**.  
**UNIQUE** |  Sets the OPEN to be on a unique connection to the database server.  
**USER=**_xxxx_ |  Specifies login name.  
**VALIDATE=Y | N** |  Set to **1** , **Y** or **y** to validate the data. This option can be included in the respective **INI** section by database type. Date validation for database connections will only be included if the database OPEN specifies a date format using the **[DATEFMT=](mysql.htm#Mark8)** or **[MAS90DATE](mysql.htm#Mark9)** option. For additional data validation information, see **[IOLIST](../directives/iolist.htm#Mark5)** directive. _(The VALIDATE option was added in PxPlus 2017.)_  
**WAITZERO=Y | N** |  If set to **Y** (or **1**), the system will internally issue a WAIT 0 when doing long SELECT directives. This will allow a graphical display to update periodically. _Default_ is **Y**.  
  
**_Use of Global String Variables as Option Values_**

In database connection options, you can provide the value following the **=** (_equals sign_) in global string variables. When opening the connection to the database, the system will check to see if the value following the **=** (_equals sign_) starts with a **%** and ends with a **$** and is the name of a valid global string variable. If so, the value is replaced with the contents of that global variable.

For example, the option **USER=**_%UserName$_ would be dynamically changed by the EXE on the OPEN to replace the text _%UserName$_ with whatever is in that global variable.

_(Support to allow the use of global variables for defining database Link/Prefix files was added in PxPlus 2023 Update 1.)_

##  See Also

[**READ Read Data from File**](../directives/read.md)  
[**READ RECORD Read Record from File**](../directives/read_record.md)  
[**SELECT Select/Query From ... Where**](../directives/select.md)  
[**WRITE Add/Update Data in File**](../directives/write.md)  
[**WRITE RECORD Write Record**](../directives/write_record.md)  
[**OPEN Open a File for Processing**](../directives/open.md)  
**[IOLIST Specify Variable List](../directives/iolist.md)**  
**[[ADO] Microsoft SQL Server Interface](ADO.htm)**  
**[[DB2] DB2 Support](db2.htm)**  
**[[OCI] Connect to Oracle Server](oci.htm)**  
**[[ODB] Open Database](odb.htm)**  
**[Database Export Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Export.md)**
