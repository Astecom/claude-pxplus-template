# Introduction to SQL

**Data Access Using SQL** |  **__**  
---|---  
  
The basic SQL commands for accessing data are**SELECT** (to read and return data),**UPDATE** (to alter existing data records),**INSERT** (to add records) and**DELETE** (to remove data records), which are explained below.

For a complete overview of the SQL syntax that is supported by PxPlus, see **[SQL Syntax Table](../../../odbc/using_odbc_driver/sql_syntax_table.md)**.

## Reading Data

The**SELECT** statement is used to**READ** data from tables in a SQL database.

> **SELECT** _columns_**FROM** _table  
> _**WHERE** _condition_**ORDER BY** _columns_

**SELECT** returns all rows that match the condition specified:

> SELECT * FROM "table"

This returns all columns from all rows in the specified table. The**WHERE** clause is used to specify which rows that the application is interested in retrieving:

> SELECT * FROM "Customer" WHERE SALESMAN = "MFK"

This would retrieve only those rows that have the column SALESMAN equal to the value MFK. Ideally, the columns specified on the**WHERE** clause will be a key/index field within the database, thus avoiding a linear scan of the table in order to return only those records that match the criteria.

You can also specify that only certain columns are to be retrieved by stating their names in the SQL statement:

> SELECT CUSTOMER_NO, NAME, SALESMAN FROM "Customer"

## Writing and Altering Data

The**INSERT** statement is used to**WRITE** new data to a SQL table.

> **INSERT INTO** _table(columns_)   
> **VALUES** (_values_)

The**INSERT** directive is used to add new rows to an SQL database:

> INSERT INTO "Customer" (CUSTOMER_NO, NAME, SALESMAN) VALUES ("123456", "Acme Plumbing", "MFK")

This would add a row/record to the table and update all the required key indices. If not all the columns for the table were specified in the**INSERT** command, then the columns omitted would be set to null.

Depending on the database definition, each field may have validation rules, such as ranges, reference tables, etc. If any of these validation rules are violated, the**INSERT** reports an error, and the row would not be added.

The**UPDATE** directive is used to alter the contents of all rows in the database that satisfy the condition.

> **UPDATE** _table_**SET** _column=value,_  
> **WHERE** _condition_

If no condition (**WHERE** clause) is specified, all records in the table are altered:

> UPDATE "Customer" SET NAME = "Acme Plumbing"

This statement would set the column NAME to Acme Plumbing for all rows/records in the Customer table. In almost all cases, there will be a**WHERE** clause when using**UPDATE**.

## Removing Data

The**DELETE** directive is used to remove rows from a table.

> **DELETE FROM** _table_   
> **WHERE** _condition_

Like the**UPDATE** directive, there is almost always a **WHERE** clause to identify the rows to be removed:

> DELETE FROM "Customer"

The above SQL statement will result in the deletion of all rows in the Customer table, whereas the following will result in the removal of only those records that have CUSTOMER_NO = "1234".

> DELETE FROM "Customer" WHERE CUSTOMER_NO = "1234"
