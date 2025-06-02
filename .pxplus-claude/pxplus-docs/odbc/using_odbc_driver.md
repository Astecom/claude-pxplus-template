# PxPlus SQL ODBC

**Using the PxPlus SQL ODBC Driver**|   
---|---  
  
ODBC is primarily used to provide access to data files from other products such as Crystal reports, Excel or Word on Windows and OpenOffice/LibreOffice Calc and Base on UNIX/Linux. Most programming languages have an ODBC access facility to allow files to be read or updated as well. The process of bringing PxPlus data to your application begins with making a data connection the steps involved will vary according to your application and your server technology.

For specifics on PxPlus ODBC DSNs and connection information, see **[Configuration Procedures](configuration_procedures.md)**.

Once a data connection is established, the PxPlus data itself can be accessed from the database using SQL commands. SQL (**S** tructured **Q** uery **L** anguage) is the standard interactive programming language for accessing and manipulating databases.

This Help section describes the specific elements of SQL that can be used with the PxPlus SQL ODBC Driver.

For examples of different SQL queries, see **[Example SQL](using_odbc_driver/example_sql.md)**.

For answers to some commonly asked questions about the PxPlus SQL ODBC Driver and other PxPlus ODBC products, see **[Frequently Asked Questions](odbc_faq.md)**.

##  Statements

An SQL statement __ is used to perform various operations on the database. The PxPlus SQL ODBC Driver supports four types of SQL statements:

**Type** |  **Description**  
---|---  
**SELECT** |  Retrieves data from the database.  
**INSERT** |  Adds new data to the database.  
**DELETE** |  Removes data from the database.  
**UPDATE** |  Changes data in the database.  
  
##  Joining

SQL statements operate with logical sets of data - they declare what data is required, not how the data is to be retrieved.

When data is required from two or more tables, the statement can establish a relationship between the tables. In SQL, this concept is called _joining._ The join operation selects rows from two different tables such that the value in one column of Table 1 also appears in a column of Table 2.

**_Example:_**

> A _customer_ table includes a code for sales representatives called SALESREP and the _sales representative_ table includes a SALESREP code among other information about sales representatives (names, addresses, etc.). A join relationship between the _customer_ table and _sales representative_ table can be established because they each have a SALESREP column.

To join three or more tables, you can nest a join operation within another join operation.

##  Types of Joins

The PxPlus SQL ODBC Driver supports four types of joins:

**Type** |  **Description**  
---|---  
CROSS JOIN |  Returns all the records in Table 2 for each common record in Table 1. To create a cross join, a _comma_ is used to separate the declared tables. The keywords CROSS JOIN can be used in place of the comma. **_Example:_** SELECT * FROM Customer, SalesReps  
JOIN / INNER JOIN |  Discards unmatched rows in either table. The keyword INNER is optional. The outer join escape sequence is optional. _(as of PxPlus SQL ODBC Driver version 6.00)_ **_Example:_** SELECT * FROM {oj Customer INNER JOIN SalesReps ON Customer.SALESREP = SalesReps.SALESREP}  
LEFT JOIN / LEFT OUTER JOIN |  LEFT [OUTER] JOIN will, for each record in Table 1, join the matching record in Table 2, if any. The keyword OUTER is optional. The outer join escape sequence is optional. _(as of PxPlus SQL ODBC Driver version 6.00)_ **_Example:_** SELECT * FROM {oj Customer LEFT OUTER JOIN SalesReps ON Customer.SALESREP = SalesReps.SALESREP}  
RIGHT JOIN / RIGHT OUTER JOIN  
 _(as of PxPlus SQL ODBC Driver version 6.00)_ |  RIGHT [OUTER] JOIN will, for each record in Table 2, join the matching record in Table 1, if any. The keyword OUTER is optional. The outer join escape sequence is optional. _(as of PxPlus SQL ODBC Driver version 6.00)_ **_Example:_** SELECT * FROM {oj Customer RIGHT OUTER JOIN SalesReps ON Customer.SALESREP = SalesReps.SALESREP}  
FULL JOIN / FULL OUTER JOIN  
 _(as of PxPlus SQL ODBC Driver version 6.10)_ |  FULL [OUTER] JOIN will do a LEFT JOIN and then a RIGHT JOIN. The keyword OUTER is optional. The outer join escape sequence is optional. _(as of PxPlus SQL ODBC Driver version 6.00)_ **_Example:_** SELECT * FROM {oj Customer FULL OUTER JOIN SalesReps ON Customer.SALESREP = SalesReps.SALESREP}  
  
**_Three or More Table Joins_**

The PxPlus SQL ODBC Driver supports nesting join operations, which allow for joining three or more tables:

**Join** |  **Description**  
---|---  
JOIN NESTED IN TABLE 1 POSITION  
 _(as of PxPlus SQL ODBC Driver version 6.00)_ |  This will perform a left outer join with Table 1 and Table 2, take the results of that join and perform a left join with Table 3. The parentheses around the nested join are optional. **_Example:_** SELECT * FROM {oj (Customer LEFT OUTER JOIN SalesReps ON Customer.SALESREP = SalesReps.SALESREP) LEFT OUTER JOIN Shipping ON Customer.CUSTID = Shipping.CUSTID}  
JOIN NESTED IN TABLE 2 POSITION |  This will perform a left outer join with Table 2 and Table 3, take the results of that join and use them as the right side and left join them with Table 1. Optional parentheses around the nested join are allowed. _(as of PxPlus SQL ODBC Driver version 6.00)_ **_Example:_** SELECT * FROM {oj Customer LEFT OUTER JOIN SalesReps LEFT OUTER JOIN Commission ON SalesReps.SALESREP = Commission.SALESREP ON Customer.SALESREP = SalesRep.SALESREP}  
  
Mixing different types of joins is supported; i.e. you can nest an inner join within a left outer join. It is also possible to join more than three tables by nesting more than once. **_Caution must be used when joining three or more tables_** , as the more tables you join, the longer the SQL query will take to complete. This is proportional to the sizes of the tables being joined.

## Unions _(as of PxPlus SQL ODBC Driver version 6.00)_

Another method for getting data from two or more tables is to _union_ select statements together. A _union_ combines the results of two or more select statements. The select statements within the _union_ must have the same number of columns. The columns must also have similar data types. In addition, the columns in each select statement must be in the same order.

To _union_ three or more tables together, you can chain unions together one after another.

**_Example:_**

If you had an _invoice2014_ table and an _invoice2015_ table each containing invoices for their respective years and you wanted to query the invoices for the last two years, you could simply _union_ the results of a select on each table. Using an ORDER BY, it is also possible to sort the combined results from the two tables.

**_Types of Unions_**

The two types of unions are UNION and UNION ALL:

**Type** |  **Description**  
---|---  
UNION |  A UNION will combine the results of the select statements, remove duplicate records and sort the results based on the first column. This is equivalent to a DISTINCT on the combined results. **_Example:_** SELECT * FROM invoice2014 UNION SELECT * FROM invoice2015  
UNION ALL |  A UNION ALL will simply combine the results of the select statements. **_Example:_** SELECT * FROM invoice2014 UNION ALL SELECT * FROM invoice2015
