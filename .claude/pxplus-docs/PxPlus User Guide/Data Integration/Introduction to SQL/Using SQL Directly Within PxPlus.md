# Introduction to SQL  
  
**Using SQL Directly Within PxPlus** |  **__**  
---|---  
  
The generic SQL statements described in the previous pages can also be passed "as is" from PxPlus to the target database. There are two ways that this can be accomplished.

In the syntax examples below,**[_tag_]** represents one of the available database options, and** <**_SQL_** >** represents an actual SQL statement embedded within a PxPlus statement.

**_Example:_**

The following syntax sends the SQL statement through a channel tied to a table (limited to the size of the**KNO** used): 

> **OPEN (**_chan_**,IOL=*)"[**_tag_**]**_database_**;**_table_ [;_fileopt_ ]**"  
>  READ (**_chan_**,KEY="! <**_SQL_** >")**

SQL statements can be passed directly using a straight connection to the database without specifying the table name: 

> **OPEN (**_chan_**,IOL=*)"[**_tag_**]**_database_**;** [;_fileopt_ ]**"**

To issue an SQL statement and retrieve the first result value: 

> **READ [RECORD] (**_chan_**,KEY="! <**_SQL_** >")**_iolist_

To simply issue an SQL statement: 

> **WRITE RECORD (**_chan_**)" <**_SQL_** >"**

To retrieve the results: 

> **READ [RECORD] (**_chan_**)**_iolist_

#### **Note:**  
Ensure that you are using the correct SQL syntax for the target database. Refer to specific product documentation for the database system being accessed.
