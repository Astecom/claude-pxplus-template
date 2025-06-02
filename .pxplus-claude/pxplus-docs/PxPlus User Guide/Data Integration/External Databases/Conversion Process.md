# External Databases

**Conversion Process** |  **__**  
---|---  
  
The conversion process moves the data from the PxPlus database to the new tables in the target database. It may also involve some program modifications for the application to function correctly and efficiently with the new database.

## Loading the Data

Once the prefix file has been defined, the load is as easy as _read record_ \- _write record_. There are two approaches to opening the existing tables and the database.

One approach is to set the prefix file (using the **[PREFIX FILE](../../../directives/prefix.md)** directive), open the data directory, and then (for each file in the data directory) to open the physical file plus the database table.

**_Example:_**

> 10 begin   
>  20 prefix file "db2_prefix.dat"   
>  30 open(1)"data/"   
>  40 read (1,end=eod)f$   
>  50 open(2)"data/"+f$ ! include the directory so it doesn't match prefix file key   
>  60 open(3)f$ ! prefix file will redirect to database   
>  70 read record (2,end=eoi)r$   
>  80 write record(3)r$   
>  90 goto 70   
>  100 eoi:   
>  110 close(2); close(3)   
>  120 goto 40   
>  130 eod:   
>  140 print "done"

This approach works well with a few data directories; however, it can be clumsy when there are complex prefix rules.

An alternative approach is to open the prefix file and use it in conjunction with the prefix rules to open the physical data files.

**_Considerations When Loading Data_**

The approach taken for opening tables can vary, depending on the conversion situation. If it is a _one-off_ conversion, then hard-coded paths may be acceptable. However, if the conversion may have to be run on hundreds of sites, each with a unique directory structure, then a more flexible procedure should be considered.

Be sure to account for reloads. It is unlikely that the data load will only be run once. It is more likely there will be multiple loads, as the process is adjusted to achieve correct data conversion. A table may need to be reloaded, because either the database table itself changed, or the rules applied by the prefix file have changed. It may be that the entire conversion will need to be rerun, or a single table may need to be reloaded.

One of the more difficult situations to handle is when the database table has been _altered_. It is best to manually adjust the input database, rather than write a routine that must check for differences between the database table and the original definition. This is not impossible, and it can be accomplished using the***dict/sql** and related objects.

## Test Your Application

This is the area that will take the most time. Every line of code that affects what is read or written to file needs to be **_tested_**. Before and after versions of reports need to be **_compared_** , and every insert, update and delete needs to be tested. Timing tests should be run to see which areas suffer significant performance degradation due to the overhead associated with the external database system.

Other areas that need to be thoroughly examined are those that involve file creation, deletion or renames. One example would be the creation of a new company. This is an area that has to be rewritten if the logic creates new keyed files, as the**KEYED** statement is not translated into a**CREATE** statement. Not only would the table creation have to be addressed, but the tables would also need to be added to the prefix file.

As well, check areas that depend on the **[FIN( )](../../../functions/fin.md)** and **[FIB( )](../../../functions/fib.md)** functions. These functions do not contain all the information that is available for a Keyed file; e.g. the key definitions and current record count are not available.

Dynamically-named temporary tables can also be difficult to emulate. Often these files are left as PxPlus files due to their _temporary_ nature.

#### **Note:**  
If a version of PxPlus prior to version 7 is used, the **[ERASE](../../../directives/erase.md)** and **[PURGE](../../../directives/purge.md)** directives are not supported on external database tables.  
  
Support for these directives was added in version 7; however, they may still fail if there is insufficient information to open the database.

## Performance Tuning

Generally speaking, external databases are slower than native PxPlus files. This is for two reasons usually: (1) indirect access to the data, and (2) different data models (result set vs. row set orientation). However, by adjusting a number of system options, you may be able to improve system performance (substantially in some cases).

The following approaches can be taken to improve the performance of an application:

  * Shared connections
  * Eliminate data dictionary lookup (define record layout)
  * Using the TOP option in the SELECT statement
  * Stored procedure for RNO
  * Using the TSQL option
  * Prepared statements



#### **Note:**  
Some of these settings may not be ideal for all applications.

## Shared Connections

Using shared connections reduces time to**OPEN** files and uses fewer resources and users on the server. This is enabled by default for PxPlus Professional or Web bundle activations unless the INI file contains UNIQUE=Y, or y, or 1.

It shares connections in same sessions that have same DSN/database name and have same database/qualifier.

System performance is improved by sharing the connection, since all the logic involved with user authentication, security, and establishing the connection is avoided. This leads to quicker file**OPEN** s in the application, as well as reduced system resources by sharing connections.

Another advantage of using shared connections is that database servers often charge based on the number of concurrent connections used. Sharing a single connection per process can reduce costs.

The criteria to share files is that both must have the same DSN and Database/Qualifier name (case is not important).

## Eliminate Data Dictionary Lookups

By default, whenever PxPlus opens an external database, it reads the data dictionary for the table in order to determine column names, data types, and format (size/scale). This can account for a _significant_ amount of processing and data transfer _overhead_. It can be particularly critical if a file is being opened only to access a couple of records.

To avoid this, include the field format on the**REC=** clause. If all the columns specified in the**REC=** clause have their size and type defined, then PxPlus will not attempt to read the data dictionary for the table and will assume that the definition supplied is correct.

There is one drawback to defining the field formats on the**REC=** clause. There is no run-time validation to check that the columns that have been specified, actually exist within the database. Therefore, it is possible to cause PxPlus to create SQL directives that cannot execute.

## Defining the Record Layout

The**REC=** phrase is used to control the formatting of the data record as viewed by the PxPlus application. The format consists of a series of field descriptors and/or literals, each separated by either a comma or a **+**_plus sign._ (Record type indicators can be present within the**REC=** phrase as well.)

The simple format is:

> **REC=**_fieldspec_**{ ,**_or_**\+ }**_fieldspec_****

**_Where:_**

The _fieldspec_ contains the name of the field and optional format, length and scale. Fields are separated by either a **,** (_comma_) or **+** (_plus sign_). When _comma_ -separated, then a field delimiter is inserted. When _plus_ -separated, then the field is padded to full size and no separator is inserted. Literals may be included if enclosed in apostrophes.

**_Example:_**

> REC=CST_ID, NAME, ADDRESS

This results in a record with three fields, each separated by a field separator.

> REC=CST_ID + NAME + ADDRESS

This results in a record consisting of the fields, with each one padded to its full length and no intervening field separator.

**_Example:_**

If CST_ID is 6 characters long and NAME and ADDRESS are both 30, then the record would be 67 characters long, including the record terminator.

Any column name can be followed by an optional colon and format specification. This format specification consists of a data type (if not numeric or string), followed by the field length. If the field is numeric, the length includes a decimal point, followed by the number of decimal positions.

The possible data types are:

|  **P** |  Packed (BIN) data  
---|---|---  
|  **H** |  Data is stored in HEX  
|  **B** |  Data is a Binary field  
|  **D** |  Field is a Date  
  
Some examples would be:

|  CST_ID:7 |  (_string, seven characters long_)  
---|---|---  
|  OWING:8.2 |  (_8 digits with 2 decimal places_)  
|  AMOUNT:P4.2 |  (_4 bytes containing BIN value scaled by 100_)  
|  NAME:B30 |  (_30-byte binary field_)  
  
It is a good idea to include the field descriptions for all fields, since this prevents PxPlus from having to read the table's data dictionary to determine field sizes and types. If PxPlus has to use the database dictionary, the**REC=** values may be overwritten.

Hex and Binary values can be used to store non-printable and/or binary data that would cause problems otherwise when passed in a SQL statement. Binary fields (type P) can be used to define numeric data that has been packed into a string using the **[BIN( )](../../../functions/bin.md)** and **[DEC( )](../../../functions/dec.md)** functions. If specified, the scale indicates the number of implied decimal places that the value contains.

Literals may be inserted within the record layout in order to insert padding where a field or column is not presently used, but space has been reserved for it. Literals should be enclosed with apostrophes and separated by a comma or **+**_plus sign_.

## Defining a Keyed File

The following is required:

  * DSN or database name
  * Table name
  * Record format optional, if each field matches the database definition
  * Keys using the**KEY=** option
  * First**KEY=** is**KNO #0** ; Second is**KNO #1** , 



The most common file format within PxPlus applications is a Keyed file where the key for the record is contained in the record data. These types of files can be defined directly as tables, with each data field defined as a single column in the database.

The**KEY=** clause can be used to define the field(s) that comprise the record key. If more than one key is required, then multiple**KEY=** clauses can be included for each alternate key required.

**_Example:_**

The following is an example of the definition for a Keyed file:

**File:** |  ICALPXF |   
---|---|---  
**Fields:** |  Company |  2 char  
**** |  Alpha_sort |  10 char  
**** |  Item_num |  20 char  
**** |  Stocked |  1 char  
**** |  Update_Inventory |  1 char  
**Key 1:** |  Company, Item_num  
**Key 2:** |  Company, Alpha_sort, Item_num  
**Key 3:** |  Company, Stocked, Alpha_sort, Item_num  
**Key 4:** |  Company, Update_Inventory, Alpha_sort, Item_num  
**Key 5:** |  Company, Stocked, Update_inventory, Alpha_sort, Item_num  
  
**_Definition:_ **

> [DB2]MYDB;IC_ITEM_ALPHA;   
>  REC=COMPANY, ALPHA_SORT, ITEM_NUM, STOCKED, UPDATE_INVENTORY;   
>  KEY=COMPANY, ITEM_NUM;   
>  KEY=COMPANY, ALPHA_SORT, ITEM_NUM;   
>  KEY=COMPANY, STOCKED, ALPHA_SORT, ITEM_NUM;   
>  KEY=COMPANY, UPDATE_INVENTORY, ALPHA_SORT, ITEM_NUM;   
>  KEY=COMPANY, STOCKED, UPDATE_INVENTORY, ALPHA_SORT, ITEM_NUM

This would declare a Keyed type of file with one primary and four alternate keys.

## Defining an Indexed File

The following is required:

  * DSN name
  * Table name
  * Record format
  * Record Index field
  * Must be a numeric field in database
  * Should be 8 digits in length - no decimal points



While databases do not typically support an Indexed-style table structure, PxPlus can emulate this file structure using a numeric field within the table as the record index. This numeric field should contain a minimum of 8 digits with no decimal points.

**_Example:_**

The following is an example of the definition for an Indexed file:

**File:** |  PODABC.SOA |  |   
---|---|---|---  
**Index field:** |  IndexSql |  Numeric 8 |   
**Fields Rec#0:** |  RecordsActivelyUsed |  Numeric 19.7 |   
**** |  MaximumRecordsInFile |  Numeric 19.7 |   
**** |  NextNewIndexAvailable |  Numeric 19.7 |   
**** |  LastRemovedIndexRecord |  Numeric 19.7 |   
**Fields other:** |  StdMessageLine1 |  50 char |  (concatenated with)  
**** |  StdMessageLine2 |  50 char |   
  
**_Definition:_**

> [MYSQL]MyDB;POD_POMessage;   
>  IND=IndexSql:8; TYP=IndexSql,1,8; REC=?"00000000"+   
>  RecordsActivelyUsed:19.7, MaximumRecordsInFile:19.7,   
>  NextNewIndexAvailable:19.7, LastRemovedIndexRecord:19.7+   
>  ?"........"+ StdMessageLine1:50+ StdMessageLine2:50+ ' '

## Defining a Direct File

Basically, this is the same as a Keyed file. The following is required:

  * If the External Key does not exist as field(s) within the record data, then the**KEYDATA=** clause must be specified.
  * **KEYDATA=** must specify a single field.
  * This field is the primary key of the record.
  * Field must not appear within the**REC=** fields.



Most Direct files can be defined using the same format as a Keyed file. However, if the key for a Direct file is not contained within the data columns, then a special**OPEN** syntax is required. This is due to the fact that PxPlus normally attempts to generate the record key from the contents of the record data columns.

The**KEYDATA=** option is used to define a single column name for the data that contains the record key. In many cases, it will be used when the key is not derived directly from the data in any logical manner, or when the file is non-normalized and the key components vary from record type to record type. The column specified in the**KEYDATA=** clause must not exist in the**REC=** clause.

**_Example:_**

The following is an example of the definition for a Direct file whose key is not made up of column data and contains two record types:

**File:** |  ARWABC.SOA |  |   
---|---|---|---  
**Fields "F" rec:** |  RecordNo |  1 char |  (concatenated with..)  
**** |  FromDivision |  2 char |  (concatenated with..)  
**** |  FromCustomerNumber |  7 char |  (concatenated with..)  
**** |  ToDivision |  2 char |  (concatenated with..)  
**** |  ToCustomerNumber |  7 char |   
**Fields "T" rec:** |  RecordNo |  1 char |  (concatenated with..)  
**** |  ToDivision |  2 char |  (concatenated with..)  
**** |  ToCustomerNumber |  7 char |  (concatenated with..)  
**** |  FromDivision |  2 char |  (concatenated with..)  
**** |  FromCustomerNumber |  7 char |   
  
**_Definition:_**

> [ODB]MyDB;ARW_GlobalCustRenEntry  
>  KEYDATA=KeySql:B10; TYP=RecordNo,1,1; REC=?"F"+RecordNo:1+   
>  FromDivision:2+ FromCustomerNumber:7+ ToDivision:2+   
>  ToCustomerNumber:7+ ?"T"+RecordNo:1+ ToDivision:2+   
>  ToCustomerNumber:7+ FromDivision:2+ FromCustomerNumber:7

Basically, the key for this file is the record as defined, thus the actual columns used to create the key vary between the "T" and "F" records.

## Defining a Sort File

Defining a Sort file requires the following:

  * DSN and table name
  * Record format
  * Fields must be concatenated with the ' **+** ' operator
  * Specify**KEY=*** This indicates that the key is the record
  * No record data will exist logically



Sort files pose a different problem to the PxPlus interface, as there is no data record but just a key field.

To define a Sort file, the table definition should contain the columns that are required to construct the key with a**REC=** clause, which defines the layout of the key. This requires the use of the**+**_plus sign_ between all the fields. Use a**KEY=*** option to indicate that the record itself is the key and that no record actually exists.

**_Example:_**

An example of an**OPEN** definition for this type of file follows:

**File:** |  ARCALX |   
---|---|---  
**Fields:** |  Company |  2 char  
**** |  Alpha_Sort_Key |  10 char  
**** |  Customer_Num |  10 char  
  
**_Definition:_**

> [ODB]MyDB;AR_Cust_Alpha ;   
>  REC=Company+Alpha_Sort_key+Customer_Num ; KEY=*

## TOP Option in the SELECT Statement

The**TOP=** option is a method to limit the number of rows being retrieved for a result set. The syntax varies between databases, but the effect is the same. It reduces data transfer.

Specifying the**TOP=**_nnn_ option, either in the appropriate database section of the PxPlus INI file or on the**OPEN** options, indicates to PxPlus that the database accepts the**"SELECT TOP _nnn_** _..."_ SQL command. If this option is not present, then PxPlus assumes that the database does not support this capability. The DB2, MySQL, and Oracle interfaces also support **TOP=** ; however, they use the database specific syntax.

If**TOP=** is provided using the value -1, then the **[KEF( )](../../../functions/kef.md)**,**[KEL( )](../../../functions/kel.md)** and **[KEP( )](../../../functions/kep.md)** functions will generate code that requests only a single record from the database. Without the option, these functions generate SQL statements that will result in a dataset the size of the table being generated.

In addition, if this option is specified with a positive non-zero value, then the standard read next logic will limit its reads to a series of**SELECT** statements, each limited to the number specified. This may reduce unneeded data selections from occurring. For example, consider a file with 1,000 records that are grouped by individual prefixes so that never more than 20 records are retrieved. By adding**TOP=20** , the database will stop generating the result set once it has found 20 records.

If**TOP=** is greater than zero, it is possible to 'lose' records. When a non-unique key is read sequentially with a**TOP=** clause, once the result set is read, PxPlus will start with the next group of records.

**_Example:_**

Five non-unique alternate keys:

> ID, Job   
>  0001 MANAGER,   
>  0002 MANAGER,   
>  0003 SALESREP,   
>  0004 SALESREP,   
>  0005 SALESREP

If reading the above using Job as the sort sequence and a**TOP=** value of 1, then only one MANAGER record and one SALESREP record would be retrieved:

> 0001, MANAGER   
>  0003, SALESREP

This is because the result set is exhausted after one**READ** , so PxPlus would generate a**WHERE** clause with the value greater than the value just read.

The SQL statements are:

> SELECT TOP 1 * FROM Employee WHERE Job > ''   
>   
>  A**READ** retrieves ID 0001. The next**READ** returns no data, so the next SQL statement is:  
>   
>  SELECT TOP 1 * FROM Employee WHERE Job > 'MANAGER'   
>   
>  A**READ** retrieves ID 0003. The next**READ** returns no data, so the next SQL statement is:  
>   
>  SELECT TOP 1 * FROM Employee WHERE Job > 'SALESREP'   
>   
>  This returns end-of-file.

## Stored Procedure for RNO

This applies to applications that use the**RNO( )** function in PxPlus. The**RNO=** file access option requires that the system is able to position itself to a record specified by its logical sequence within a file/table. Unfortunately, there is no equivalent functionality within most external databases.

The standard PxPlus implementation of access by**RNO** involves**SELECT** s of the complete data set, then skipping forward to the specified record. This is a slow process that can have a major impact on the system performance. If possible, consider re-engineering code using**RNO**.

To improve the performance when running against an external database, use the**EXEC_SPRNO** option on the database**OPEN** and execute a stored procedure to duplicate this functionality. The**RNO( )** search is performed on the host, which minimizes data transfer and provides much faster access times. The disadvantage to this approach is that database-specific knowledge is required to create the stored procedure.

The following stored procedure has been used with MS SQL Server:

1st field:

> [odb]MAS200SQL;APB_CheckHistory;DB=MAS_PVX;

2nd field:

> KEY=BankCode,CheckNumber,SeqNumber;KEY=Division,VendorNumber,   
> BankCode,CheckNumber,SeqNumber;REC=BankCode:1+CheckNumber   
>  :6+SeqNumber:1+ CheckType:1+CheckDate:D+ ClearedBank:1+   
>  Division:2+VendorNumber:7+Source:2+PayeeName:30,CheckAmount   
>  :19.7;EXEC_SPRNO 

You must create a stored procedure for each table and key for which an**RNO** is needed.

> _Format:_**spRNO** _tablename_keynumber_

The**RNO** stored procedure (written for MS SQL Server):

> CREATE PROCEDURE [spRNOAPB_CheckHistory_0]   
>  (@rno int)   
>  AS BEGIN   
>  SET NOCOUNT ON   
>  DECLARE @BankCode VARCHAR (1)   
>  DECLARE @CheckNumber VARCHAR (6)   
>  DECLARE @SeqNumber VARCHAR (1)   
>  DECLARE tmpCur CURSOR DYNAMIC FOR   
>  SELECT BankCode,CheckNumber,SeqNumber FROM APB_CheckHistory ORDER BY   
> BankCode,CheckNumber,SeqNumber   
>  OPEN tmpCur   
>   
>  Fetch Relative @rno from tmpCur INTO @BankCode,@CheckNumber,@SeqNumber   
>   
>  CLOSE tmpCur   
>  DEALLOCATE tmpCur   
>  SELECT * from APB_CheckHistory WHERE BankCode = @BankCode AND CheckNumber   
>  = @CheckNumber AND SeqNumber = @SeqNumber   
>  END 

The above stored procedure creates a cursor that represents the keys of all of the records in the table sorted in the order as defined by the key. Then, we issue a relative fetch of the desired record to obtain the key for the record, and then use this key to actually read and return the record.

## Using the TSQL Option

Many applications read data files sequentially looking for selected records, such as unprinted invoices, past due accounts, accounts with current transactions, etc. Application execution time can be improved by having SQL server pre-process the data and return only those records that the application requires.

To accomplish this task, the**TSQL=** option was added for external databases. The TSQL option allows a manually defined**SQL SELECT** directive that is going to be used to retrieve the file data for the application.

When using a TSQL directive, simple**READ NEXT** statements (or**KEY( )** functions) will execute the SQL command provided in order to obtain the data. The SQL statement must be constructed manually - PxPlus won't do it.

Use of the TSQL function requires application changes, as well as a fair amount of SQL expertise. It is not an easy change to implement, but the results can be very impressive in the areas implemented.

The following example shows a simplified use of the**TSQL=** option. Note the use of the**REC=** clause. Failure to correctly define the resulting record can cause memory corruption. The SQL statement in the example returns only two columns of a larger table where the employee ID is less than 7600, sorted by name descending.

**_Example:_**

> 0030 OPEN (1)"[oci]robertf.pvx;emp;user=scott;pswd=demo;tsql=select   
> empno, ename from emp where empno < 7600 order by ename   
> desc;rec=Empno:N22,Ename:C20"   
>  0051 READ RECORD (1,END=*NEXT)r$; PRINT CVS(CVS(SUB(r$,SEP," * "),16),32);   
>  INPUT 'CI',*; IF CTL<>4 THEN GOTO *SAME

## Prepared Statements

Basically, an SQL _prepared statement_ is a parameterized SQL statement that can be pre-compiled, then re-executed repeatedly while simply changing the parameter values. A typical use of this would be to access a file by a key where the SQL statement rarely changes other than in the key value itself. The advantage to this approach is that the database server does not need to re-compile the statement on every execution. This technique may improve performance significantly:

**_Example:_**

> SELECT BankCode, CheckNumber, SeqNumber, CheckType, CheckDate, ClearedBank, Division, VendorNumber, Source, PayeeName, CheckAmount  
>  FROM "APB_CheckHistory"   
>  WHERE BankCode = ? AND CheckNumber = ? AND SeqNumber = ? 

PxPlus will generate the above SQL statement and pre-compile it. Then, when accessing the file by key, it simply re-executes the statement after changing parameters 1, 2 and 3.

## Multiple Record Types

Non-normalized files are a critical aspect of a number of applications. These are files that use multiple record formats to contain the data used by the application. Applications developed by many Business Basic developers have a number of these types of files. Unfortunately, this type of data structure is not supported in a normalized database, such as IBM DB2 or MS SQL Server.

To migrate these files to a SQL-based database, the table contents have to be normalized. The PxPlus database interfaces have a mechanism built into it to convert data from a SQL normalized file to appear as a non-normalized file. The approach used is to define one column for each potential field which can exist in all the different record layouts within the table that contains the PxPlus data file contents. Then, we define to PxPlus the record layout to be used based upon the contents of one or more fields.

To accomplish this, PxPlus must know which fields/columns contain the data needed to determine the record format to be used. The column(s) are declared in the**TYP=** option.

If multiple columns are required, each column must be separated by a **+**_plus sign,_ as in the following example:

**_Example:_**

> TYP=CST_ID+CST_TYPE

This requires the definition of values to be returned by the contents of the fields defined in the**TYP=** clause within the**REC=** clause. These values are identified by question marks, followed by the contents to match against the fields.

The contents of the value to match can contain a number of special characters that are designed for simplified matching:

|  **_._** |  _(Period)_ Matches any character.  
---|---|---  
|  **[abc]** |  Matches any of the characters a, b, or c.  
|  **[0-9]** |  Matches any of the characters between 0 and 9.  
|  **[ ]** |  Matches end-of-string/no data.  
|  **^** |  If the first character is a '^', then records that do not match the string are selected; e.g. '?^PROD' selects anything that does not match PROD.  
  
The column names specified in the**TYP=** clause can be followed by a comma and a length specifier, if you only want the first _nnn_ columns used in the match. 

**_Example:_**

The clause TYP=CST_ZIP,3 would only check the first three positions of the field CST_ZIP. The following is a typical example of a non-normalized file, where each record has a three-character prefix on the key field definition:

**File:** |  GCOMP (two record types "G/L" and "DPT")  
---|---  
**All record:** |  Prefix Key |  3 char |   
**** |  Company Key |  2 char |   
**** |  Id Key |  10 char |  (Dept. or Acct. No.)  
**** |  Name |  35 char |  (Dept. or G/L Name)  
**"DPT" rec:** |  Restriction_flag |  1 char |   
**"G/L" rec:** |  Control_acct |  1 char |   
**** |  Stmt_A_Line |  4 numeric |   
**** |  Stmt_B_Line |  4 numeric |   
**** |  Subaccount_flag |  1 char |   
**** |  Inventory_acct |  1 char |   
**** |  Print_zero |  1 char |   
  
**_Definition:_ **

> [db2]MyDB;GL_Dept_master;   
>  KEY=Prefix,Company,Id; TYP=Prefix;   
>  REC=?"DPT",Prefix,Company,Id,Name,Restriction_flag,?"G/L",   
> Prefix,Company,Id,Name,Control_acct,Stmt_A_Line,Stmt_B_Line,   
> Subaccount_flag,Inventory_acct,Print_zero
