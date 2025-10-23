# Data Integration

**Introduction to SQL** |  **__**  
---|---  
  
The information below is a brief introduction to Structured Query Language (SQL) and how SQL syntax works with PxPlus. It is recommended that you consult specific database manuals, industry publications, tutorials, and other online resources for more in-depth SQL documentation.

SQL is an English-like database access language created specifically for end users to view, retrieve and manipulate information from relational databases. All databases and/or file systems that supply generic interfaces, such as ODBC, must provide an SQL interface. PxPlus is no exception to this rule.

Over the years, the language has been standardized by ANSI and adopted by a large number of database manufacturers. SQL's original intent was to provide ad-hoc access to data  not as a development language or as a database interface tool. With the advent of ODBC and other generic interfaces, SQL has become the de-facto industry standard for manipulating databases.

Because the SQL language is English-like in its structure, it is easy to learn and understand. The following is a typical SQL statement:

> SELECT cst_id, cst_name FROM Customer

This retrieves customer numbers and names from the Customer table.

For other SQL syntax examples, see **[Data Access Using SQL](Data%20Access%20Using%20SQL.md)**.

## SQL Terminology

SQL has its own terminology that is intended to be better understood by the end user. It is similar to the terms used to describe a spreadsheet.

The most commonly used SQL terms are as follows:

**_Database_** |  In SQL, a database is a collection of tables. For example, if you had a Sales Order application, you would consider all the related tables within the application (such as the Customer table, the Order table, the Product table, etc.) as a database. A system can have one or more databases, depending on the needs of the application. The database may consist of one or more physical files.  
---|---  
**_Table_** |  Normally, this term is used to describe a _logical_ rather than _physical_ file. For example, our database might have a Customer table, a Product table, etc. Each table is referred to by a meaningful logical name, such as Customer, rather than by its physical name. Depending on the system, each table may be associated with a different physical file, or several tables may reside within a larger common physical file.  
**_Row_** |  This term applies to each of the logical records within a **_table_** (or file).  
**_Column_** |  This term applies to each of the logical fields within each **_row_** (or record). For instance, a Customer file/table contains records/rows, which contains fields/columns, such as Customer Number, Name, Address, Amount Owed, etc.
