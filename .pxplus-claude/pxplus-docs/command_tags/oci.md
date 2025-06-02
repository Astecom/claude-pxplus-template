# Special File Command Tags

**[OCI]** |  **_Connect to Oracle Server_**  
---|---  
  
##  Format

**OPEN (**_chan_[_fileopt_]**)"[OCI]**_sid_[_fileopt_]**"**

**_Where:_**

**[OCI]** |  File tag clause to inform PxPlus that it will be opening an Oracle database.  
---|---  
_chan_ |  Channel or logical file number to open.  
_fileopt_ |  File options. Supported options include: |  **BSZ=**_num_ |  Block size  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**NBF=**_num_ |  Dedicated number of buffers  
**OPT=**_string$_ |  Open parameters (see **[OCI] OPT= Parameters**)  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
_sid_ |  Oracle System ID of file to open. If not supplied, then the value of the environment variable ORACLE_SID is used. String expression.  
  
A name of the table may follow a _sid_ with a **;**  _(semi-colon)_ as a separator to open a specific table. If the table name is not supplied, then SQL statements sent to the database must be created by the application (see **[Using SQL Directly Within PxPlus](../PxPlus%20User%20Guide/Data%20Integration/Introduction%20to%20SQL/Using%20SQL%20Directly%20Within%20PxPlus.md)**).  
  
**_Example:_**  
  
To open a table called _people_ on an Oracle System _DEMO_ , a _sid_ value of "DEMO;people" would be used.  
  
#### **Important Note:**  
To use the OCI interface, you **_must_** have either the Oracle Server or the Oracle client installed on a workstation, and the path to the _oci.dll_ file **_must_** be locatable by the PATH environment variable.  
  
When a workstation is connecting to a remote server, the IP address of the server is included in the _sid_ value in the following format: "ip_address/ORACLE_SID;table".

##  Description

The **[OCI]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to an external (Windows, not PxPlus) Oracle database file. (**_OCI_** is an acronym for **_Oracle Call Interface_**.) Once you open a channel for **[OCI]** use, you can use it just like any other channel (i.e. for file I/O). It remains open until you close it.

#### **Note:**  
This feature requires **_PxPlus OCI_** activation (available for Windows, Redhat, HP UX, Sun Solaris, and AIX). Refer to the PxPlus website **[www.pvxplus.com](http://www.pvxplus.com/)** for platform specifics.

## [OCI] OPT= Parameters

The **OPEN** options for connecting to an Oracle server are:

**AUTO_INDEX=Y | N** |  Used to include hints and index numbers to SELECT statements.  
---|---  
**DATEFMT=**_format_ |  Date format mask applying to all date fields in table. This can be a combination of Y M D with any other characters. **_Example:_** To convert dates to 4-character year, month and day: DATEFMT=YYYYMMDD Other characters are inserted as is. DATEFMT=YY/MM/DD with a date of March 1, 2004 would be returned as 04/03/01.  
**DEBUGIT=**_xxxx_ |  String to append to SQL statement along with program name and line number for debugging purposes. This must indicate the comment character(s) appropriate to the database.  
  
**_Example:_**  
  
"--" is the comment identifier for Microsoft SQL Server; anything after "--" is ignored by SQL Server when compiling the SQL statement.  
**EXTROPT=**_xxxx_ |  Controls the format of the SELECT statement used to process an EXTRACT. By default, PVX generates a SELECT * FROM _table_ FOR UPDATE WHERE...  
  
When **EXTROPT=**_text_ , then _text_ is substituted in place of FOR UPDATE. In addition, if the first character of _text_ is $, then the remaining characters of _text_ are placed at the end of the SELECT statement rather than after the filename. This allows for different variations of SQL to be supported.  
**IND=**_fld_ |  Identifies a column that contains a sequential number starting at 0. This is used to emulate an indexed file.  
**IOPROG=**_progname_ |  Emulates the embedded I/O program logic available with a true PxPlus file.  
**KEY=**_fld_ _, fld_ |  Identifies fields that make up the key(s). For named keys, enter ***NAME:_keyname_**.  
  
**OPEN**(_chan_)"**[OCI]**_sid_ ;_table_ ;**KEY=**_field_ ,_field_ ,***NAME:_keyname_** " Use the **:D** option to indicate that the key segment is to be sorted in descending order. KEY=KeyFld1,KeyFld2:D,KeyFld3  
**KEYDATA=**_fld_ |  Identifies a column that represents the key. This is used to emulate an external key where the data is not duplicated in data.  
**MAS90DATE** |  Reformats the contents of a date column to and from the Sage MAS 90 date format.  
**MAS90SET** |  Sets flags for Sage MAS 90 emulation, such as turning on the **MAS90DATE** conversion.  
**NONULLS=** |  Inserts zero-length strings rather than nulls into the target database and does not generate **WHERE** clauses checking for **IS NULL** or **IS NOT NULL**. (**_INI Supported_**) Set to **1** , **Y** or **y** to enable or **0** , **N** or **n** to disable. If the application does not work correctly when moving from Version 5 or lower, then set **NONULLS=P** to indicate that keys are handled the same as pre-Version 6.  
**NOSTRIP** |  Keeps trailing spaces.  _(Default)_  
**NULLPADKEY=Y | N** |  Set to **1** , **Y** or **y** to force keys to be padded to full length with the null character, **$00$**.  
**ORACLE= Y | N** |  Indicates if the database uses ORACLE SQL sequence (either **Y** or **N**). If **ORACLE=** and **TOP=** are used, then SELECT commands are generated as SELECT * FROM (SELECT * FROM TABLE) WHERE ROWNUM < 1\. _Default_ is **Y.**  
**PREPARE= Y | N** |  Set to **1** , **Y** or **y** to use prepared statements. Prepared statements are pre-compiled SQL that may improve performance. _Default_ is **N**.  
**PSWD=**_xxxx_ _._ |  Specifies password.  
**REC=**_fld_ _, fld, ..._ |  Provides the column names, type, and size. This is typically done to improve performance. If this information is not provided, then PxPlus must query the database for this information. See [**ODB/OCI/DB2 Record Processing**](oci.htm#Mark12).  
**RECDATA=**_fld_ |  Identifies a column to return as full record. This can be used for variant records that use complex rules to identify the record type.  
**SHARED** |  Sets all tables to share a single connection to the Oracle database.  _(Default)_  
**STDDATE** |  Overrides the above formatting on individual columns.  
**STRIP** |  Removes trailing spaces from fields  
**TEXTMAX=**_nnn_ |  Overrides maximum size for text fields. (_Default_ is 8192 bytes.)  
**TOP=**_nnn_ |  Specifies use of the TOP clause in SELECT statements (limits the number of rows to return in a result set). If **TOP=**_n_ is non-zero, then the **[KEF( )](../functions/kef.md)** / **[KEL( )](../functions/kel.md)** functions issue a **SELECT TOP 1...SQL** statement, which improves system performance. If **TOP=**_n_ > 0, then PVX issues SELECT TOP _n_ to reduce the data transferred. **TOP=-1** indicates the driver supports SELECT TOP, but normal reading should not use it. _Default_ is **0** (TOP **_not_** supported).  
**TYP=**_xxxx_ |  Sets identifier for different variant records. See [**ODB/OCI Variant Record Processing**](oci.htm#Mark7).  
**UNIQUE=Y | N** |  Set to **1** , **Y** or **y** to have new OPENs be on a new unique connection to the database. _Default_ is **N** (shared connection).  
**USER=**_uuu_ |  Specifies login name.  
**VALIDATE=Y | N** |  Set to **1** , **Y** or **y** to validate the data. This option can be included in the respective **INI** section by database type. Date validation for database connections will only be included if the database OPEN specifies a date format using the **[DATEFMT=](oci.htm#Mark13)** or **[MAS90DATE](oci.htm#Mark14)** option. For additional data validation information, see **[IOLIST](../directives/iolist.htm#Mark5)** directive. _(The VALIDATE option was added in PxPlus 2017.)_  
  
**_Use of Global String Variables as Option Values_**

In database connection options, you can provide the value following the **=** (_equals sign_) in global string variables. When opening the connection to the database, the system will check to see if the value following the **=** (_equals sign_) starts with a **%** and ends with a **$** and is the name of a valid global string variable. If so, the value is replaced with the contents of that global variable.

For example, the option **USER=**_%UserName_ _$_ would be dynamically changed by the EXE on the OPEN to replace the text _%UserName$_ with whatever is in that global variable.

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
**[[MYSQL] Open MySql Native Database Link](mysql.htm)**  
**[[ODB] Open Database](odb.htm)**  
**[Database Export Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Export.md)**

##  ODB/OCI/DB2 Record Processing

The **REC=** phrase is used to control the formatting of the data record as viewed by the PxPlus application. The format consists of a series of field descriptors and/or literals, each separated by either a **,** (_comma_) or a **+** (_plus sign_).

The simple format is:

> **REC=**_fieldspec_**{** **,** **| + }**  _fieldspec_ ****

**_Where:_**

> _fieldspec_ contains the name of the field and optional format, length and scale.

Fields are separated by either a **,** (_comma_) or **+** (_plus sign_). When _comma_ -separated, then a field delimiter is inserted. When _plus_ -separated, then the field is padded to full size, and no separator is inserted. Literals may be included if enclosed in apostrophes.

**_Example:_**

> REC=CST_ID,NAME,ADDRESS

This results in a record with three fields, each separated by a field separator:

> REC=CST_ID+NAME+ADDRESS

This results in a record consisting of three fields with each one padded to its full length and no intervening field separator. If CST_ID is 6 characters long and NAME and ADDRESS are both 30, then the record would be 67 characters long, including the record terminator.

Any column name can be followed by an optional colon and format specification. This format specification consists of a data type (if not numeric or string) followed by the field length. If the field is numeric, the length includes a decimal point followed by the number of decimal positions.

The possible data types are:

|  **P** |  Packed (BIN) data  
---|---|---  
|  **H** |  Data is stored in Hex  
|  **B** |  Data is a Binary field  
|  **D** |  Field is a Date  
  
**_Example:_**

|  CST_ID:7 |   
---|---|---  
|  OWING:8.2 |  (8 digits with 2 decimal places)  
|  AMOUNT:P4.2 |  (4 bytes containing BIN value scaled by 100)  
|  NAME:B30 |  (30 byte binary field)  
  
It is a good idea to include the field descriptions for all fields since this prevents PxPlus from having to read the table's data dictionary to determine field sizes and types.

Hex and Binary values can be used to store non-printable and/or binary data that would cause problems otherwise when passed in a SQL statement.

Binary fields (type P) can be used to define numeric data that has been packed into a string using the **[BIN( )](../functions/bin.md)** and **[DEC( )](../functions/dec.md)** functions. If specified, the scale indicates the number of implied decimal places that the value contains.

Literals may be inserted within the record layout to insert padding where a field or column is not presently used but space has been reserved for it. Literals should be enclosed with _apostrophes_ and separated by a _comma_ or _plus sign_.

##  ODB/OCI Variant Record Processing

To emulate multi-record type files (variant records), the database record must contain _all possible columns_. If record type 1 consists of the fields Prefix and Value when Prefix="ABC", and record type 2 consists of the fields Prefix and Percentage when the second and third characters of Prefix="EF", the database record would contain three columns Prefix, Value and Percentage.

**TYP=** specifies the field(s) that determine the record type. Using a **?** in the **REC=** clause defines the value. Special masking options for **?** include:

|  **.** |  Any one character (i.e. wildcard character)  
---|---|---  
|  **[abc]** |  Any one of bracketed characters  
|  **[0-9]** |  Any character from 0 to 9  
|  **[ ]** |  Indicates end-of-field  
|  **^** |  Indicates records that don't match  
  
**_Example:_**

> TYP=Prefix;REC=?"ABC",Prefix,Value,?".EF",Prefix,Percentage

If the table contains two records:

> "ABC",9,0   
>  "AEF",0,99.99

Using the statement read(chan)A$,B:

> On the 1st **READ** , A$="ABC",B=9.  
>  On the 2nd **READ** , A$="AEF",B=99.99.

The following would insert a new record into the database consisting of "XEF",0,50.5:

> write (chan)"XEF",50.5
