# Introduction to SQL

**How PxPlus Translates to SQL** |  **__**  
---|---  
  
When a PxPlus application accesses an external database and table, file I/O directives and functions are mapped automatically to the equivalent SQL statements described previously. This process is described below.

For information on supported interfaces, see **[External Databases](../External%20Databases/Overview.md)**.

For information on the PxPlus input and output operations, see **[File Handling](../../File%20Handling/Introduction.md)**.

To open an external database table for access from within PxPlus, the _filename_ must consist of a**[_tag_]** representing the supported interface, followed by the _database_ and _table_ name.

**_Example:_**

> OPEN (1) "[ODB]MYDB;CUSTOMER"

The example above establishes a connection to the ODBC data source name (DSN) "MYDB" and table "Customer". Current database **[Interface Options](../External%20Databases/Selecting%20a%20Database%20Type.htm#options)** in PxPlus include: **[ODB]** ,**[OCI]** ,**[DB2]** and **[MYSQL]**. For the specific **_syntax_** for these interfaces, see **[[ODB]](../../../command_tags/odb.htm)**, **[[OCI]](../../../command_tags/oci.htm)**, **[[DB2]](../../../command_tags/db2.htm)** and **[[MYSQL]](../../../command_tags/mysql.htm)**.

Once the channel is defined as an external database file, PxPlus will automatically generate SQL statements in place of the input and output operations to that channel.

Each **[READ](../../File%20Handling/Processing%20Data%20Files/File%20Processing%20Directives.md)**, **[WRITE](../../File%20Handling/Processing%20Data%20Files/File%20Processing%20Directives.md)** and **[REMOVE](../../File%20Handling/Processing%20Data%20Files/File%20Processing%20Directives.md)**is translated into SQL commands specifically for the selected table.

**_Example:_**

> 0010 ! SQL001 - Basic SQL access   
>  0020 OPEN (1)"[ODB]MYDB;CUSTOMER"   
>  0030 READ RECORD (1)R$   
>  0040 PRINT R$   
>  0050 END

A simple**READ** directive to the database and table from the PxPlus application would issue the following SQL statement:

> SELECT * FROM CUSTOMER

Each row of data returned by the SQL statement results in a logical record consisting of columns with each column separated by the field separator ($8A$). PxPlus has a built-in SQL debugging facility that allows you to see the generated SQL directive. To view the actual SQL, set the**'!Q='** system parameter.

## Keyed Access to an SQL Database

To emulate**KEYED** file access, the open file name can include the name of the field (or fields) to be used as the record key.

**_Example:_**

> 0010 ! SQL002 - Basic SQL Keyed access   
>  0020 OPEN (1)"[ODB]MYDB;CUSTOMER;KEY=CST_ID"   
>  0030 LET K$=KEY(1)   
>  0040 READ RECORD (1)R$   
>  0050 TRANSLATE R$,",",SEP ! Change Sep to ',' for readability   
>  0060 PRINT "Key=<",K$,"> Rec=<",R$,">"   
>  0070 END

The database can then be accessed as if it was a keyed file with the key field being the CST_ID column:

> READ (1,KEY="PVX PLUS")

This converts into the following SQL:

> SELECT * FROM CUSTOMER WHERE CST_ID = 'PVX PLUS'

A subsequent**READ** translates to the following:

> SELECT * FROM CUSTOMER WHERE CST_ID > 'PVX PLUS' ORDER BY CST_ID

Multiple**KEY=** clauses may be specified. The first**KEY=** clause defines the Primary key, which must be unique. All subsequent**KEY=** clauses define the alternate keys and can be referenced using the**KNO=** option in the**READ** and**WRITE** directives.

The**KEY( )** ,**KEP( )** ,**KEL( )** ,**KEF( )** and**RNO( )** functions can be used against an external database, as well as the**RNO=** option.**KEN( )** does not return key information, but it does return information about the database. The**REFILE** directive is not supported.

## Building an IOList from an SQL Database

If the**OPEN** directive includes the**IOL=*** option, then PxPlus automatically creates an**IOList** based on information in the external database.

**_Example:_**

> 0010 ! SQL003 - Creating IOList   
>  0020 BEGIN   
>  0030 OPEN (1,IOL=*)"[ODB]MYDB;CUSTOMER;KEY=CST_ID"   
>  0040 PRINT LST(IOL(1))   
>  0050 ESCAPE   
>  0060 READ (1)R$   
>  0070 DUMP   
>  0080 END

PxPlus accesses the internal data dictionary to get fields for the table. Column names are used to generate field names within the generated IOList. Invalid characters are replaced with the **_**_underscore_ character. Numeric data is converted to numeric variables, while all other data types are converted to strings.

## Defining a Logical Record Layout

If desired, a**REC=** option can be included in the**OPEN** pathname to define the exact format of the record that is to be returned to the PxPlus application.

**_Example:_**

> 0010 ! SQL004 - Manually defining record   
>  0020 BEGIN   
>  0030 OPEN (1)"[ODB]MYDB;CUSTOMER;REC=CST_ID,CST_NAME+CST_ADDR"   
>  0040 READ RECORD (1)R$   
>  0050 DUMP   
>  0060 END

The**REC=** option consists of a series of column names separated by either _commas_ or**+**_plus signs_. If column names are separated by a _comma_ , then a field delimiter character is inserted between the columns. If the column names are separated by a **+**_plus sign,_ then the first column will be padded to its maximum length, followed immediately by the second column.

In this example, REC=CST_ID,CST_NAME+CST_ADDR yields a record consisting of the contents of the CST_ID column, a field separator ($8A$), and the contents of CST_NAME padded to its maximum length, which is immediately followed by the contents of CST_ADDR.

The record format specified is used as well to parse record data written to the file by PxPlus programs.
