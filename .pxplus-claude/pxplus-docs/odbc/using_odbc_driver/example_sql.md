# Using the PxPlus SQL ODBC Driver

**Example SQL**|   
---|---  
  
The examples below use three tables: _Customer_ , _SalesRep_ and _Commission_.

The _Customer_ table contains four fields: **CustomerId** , **Name** , **SalesRepId** and **ARBalance**.  
The _SalesRep_ table contains two fields: **SalesRepId** and **Name**.  
The _Commission_ table contains two fields: **SalesRepId** and **Rate**.

The _Customer_ table contains two rows:

**CustomerId** |  **Name** |  **SalesRepId** |  **ARBalance**  
---|---|---|---  
0001 |  ABC Corp. |  01 |  1234.99  
0002 |  Acme Inc. |  |  1.23  
  
The _SalesRep_ table contains three rows:

**SalesRepId** |  **Name** |  **HireDate** |  **TotalSales** |  **District**  
---|---|---|---|---  
01 |  John Doe |  20060323 |  58246.21 |  1  
02 |  Jane Smith |  20120714 |  93220.03 |  2  
03 |  House Account |  20110122 |  67349.88 |  1  
  
The _Commission_ table contains three rows:

**SalesRepId** |  **Rate**  
---|---  
01 |  4.0  
02 |  4.8  
03 |  4.2  
  
The following examples illustrate the results of a variety of different SQL queries.

## Date Filter

SELECT *  
FROM Customer  
WHERE HireDate > { d '2010-01-01' }

Result set 

**SalesRepId** |  **Name** |  **HireDate** |  **TotalSales** |  **District**  
---|---|---|---|---  
02 |  Jane Smith |  20120714 |  93220.03 |  2  
03 |  House Account |  20110122 |  67349.88 |  1  
  
#### **Note:  
** The date escape syntax is optional, and it is possible to omit the { d }. _(as of PxPlus SQL ODBC Driver version 6.00)_

##  Sort and Limit

SELECT Rate  
FROM Commission  
LIMIT 2  
ORDER BY Rate DESC

Result set 

**Rate**  
---  
4.8  
4.2  
  
## Scalar Functions

SELECT { FN SUBSTR(Name, 1, { FN POSITION(' ' IN Name)} 1)}  
FROM SalesRep

Result set 

**Name**  
---  
John  
Jane  
House  
  
#### **Note:**  
The scalar function escape syntax is optional, and it is possible to omit the { FN }. _(as of PxPlus SQL ODBC Driver version 6.00)_

## Aggregate Function and Group By

SELECT District, SUM(TotalSales)  
FROM Customer  
GROUP BY District

Result set 

**District** |  **TotalSales**  
---|---  
1 |  125596.09  
2 |  93220.03  
  
##  Case Conditional _(as of PxPlus SQL ODBC Driver version 6.00)_

SELECT  
SalesRepId,   
CASE District  
WHEN 1 THEN 'Canada'  
WHEN 2 THEN 'U.S.'  
END AS Country  
FROM SalesRep

Result set 

**SalesRepId** |  **Country**  
---|---  
01 |  Canada  
02 |  U.S.  
03 |  Canada  
  
_(Support for SQL CASE syntax was added in PxPlus 2016.)_

## Sub-Query

SELECT *  
FROM SalesRep  
WHERE SalesRepId IN (SELECT SalesRepId  
FROM Customer)

Result set 

**SalesRepId** |  **Name** |  **HireDate** |  **TotalSales** |  **District**  
---|---|---|---|---  
01 |  John Doe |  20060323 |  58246.21 |  1  
  
## Cross Join

SELECT Customer.Name, SalesRep.Name  
FROM Customer Customer, SalesRepSalesRep  
  
Result set ...

**Customer.Name** |  **SalesRep.Name**  
---|---  
ABC Corp. |  John Doe  
ABC Corp. |  Jane Smith  
ABC Corp. |  House Account  
Acme Inc. |  John Doe  
Acme Inc. |  Jane Smith  
Acme Inc. |  House Account  
  
##  Inner Join

SELECT Customer.Name, SalesRep.Name  
FROM { OJ Customer Customer INNER JOIN SalesRep SalesRep ON Customer.SalesRepId = SalesRep.SalesRepId }  
  
Result set ...

**Customer.Name** |  **SalesRep.Name**  
---|---  
ABC Corp. |  John Doe  
  
####  **Note****:**  
The join escape syntax is optional, and it is possible to omit the { OJ }. _(as of PxPlus SQL ODBC Driver version 6.00)_

## Left Outer Join

SELECT Customer.Name, SalesRep.Name  
FROM { OJ Customer LEFT OUTER JOIN SalesRep ON Customer.SalesRepId = SalesRep.SalesRepId }  
  
Result set ...

**Customer.Name** |  **SalesRep.Name**  
---|---  
ABC Corp. |  John Doe  
Acme Inc. |   
  
##  Right Outer Join _(as of PxPlus SQL ODBC Driver version 6.00)_

SELECT Customer.Name, SalesRep.Name  
FROM { OJ Customer RIGHT OUTER JOIN SalesRep ON Customer.SalesRepId = SalesRep.SalesRepId }  
  
Result set ...

**Customer.Name** |  **SalesRep.Name**  
---|---  
ABC Corp. |  John Doe  
|  Jane Smith  
|  House Account  
  
#### **Note:  
** The join escape syntax is optional, and it is possible to omit the { OJ }. _(as of PxPlus SQL ODBC Driver version 6.00)_

_(Support for RIGHT OUTER JOIN was added in PxPlus 2016.)_

## Full Outer Join _(as of PxPlus SQL ODBC Driver version 6.10)_

SELECT Customer.Name, SalesRep.Name  
FROM { OJ Customer FULL OUTER JOIN SalesRep ON Customer.SalesRepId = SalesRep.SalesRepId }

Result set ...

**Customer.Name** |  **SalesRep.Name**  
---|---  
ABC Corp. |  John Doe  
Acme Inc. |   
ABC Corp. |  John Doe  
|  Jane Smith  
|  House Account  
  
#### **Note:  
** The join escape syntax is optional, and it is possible to omit the { OJ }. _(as of PxPlus SQL ODBC Driver version 6.00)_

_(Support for FULL OUTER JOIN was added in PxPlus 2018.)_

## Distinct

SELECT DISTINCT Customer.Name, SalesRep.Name  
FROM { OJ Customer FULL OUTER JOIN SalesRep ON Customer.SalesRepId = SalesRep.SalesRepId }

Result set ...

**Customer.Name** |  **SalesRep.Name**  
---|---  
ABC Corp. |  John Doe  
Acme Inc. |   
|  Jane Smith  
|  House Account  
  
#### **Note:  
** The join escape syntax is optional, and it is possible to omit the { OJ }. _(as of PxPlus SQL ODBC Driver version 6.00)_

## Nested Join

SELECT Customer.Name, SalesRep.Name, Commission.Rate  
FROM { OJ Customer RIGHT OUTER JOIN SalesRep LEFT OUTER JOIN Commission ON SalesRep.SalesRepId = Commission.SalesRepId ON Customer.SalesRepId = SalesRep.SalesRepId }

Result set ...

**Customer.Name** |  **SalesRep.Name** |  **Commission.Rate**  
---|---|---  
ABC Corp. |  John Doe |  4.0  
|  Jane Smith |  4.8  
|  House Account |  4.2  
  
#### **Note:  
** The join escape syntax is optional, and it is possible to omit the { OJ }. _(as of PxPlus SQL ODBC Driver version 6.00)_

##  Union  _(as of PxPlus SQL ODBC Driver version 6.00)_

SELECT Name FROM Customer UNION SELECT Name FROM SalesRep

Result set 

**Name**  
---  
ABC Corp.  
Acme Inc.  
House Account  
Jane Smith  
John Doe  
  
_(Support for SQL UNION syntax was added in PxPlus 2016.)_

## Delete

DELETE  
FROM Customer  
WHERE SalesRepId IS NULL

Customer table after delete 

**CustomerId** |  **Name** |  **SalesRepId** |  **ARBalance**  
---|---|---|---  
0001 |  ABC Corp. |  01 |  1234.99  
  
#### **Note:  
** The IS NULL could also be written as = ''. _(as of PxPlus SQL ODBC Driver version 6.00)_

## Insert

INSERT INTO Customer  
VALUES ('0003','New Customer', 02, 9999.99)

Customer table after insert 

**CustomerId** |  **Name** |  **SalesRepId** |  **ARBalance**  
---|---|---|---  
0001 |  ABC Corp. |  01 |  1234.99  
0002 |  Acme Inc. |  |  1.23  
0003 |  New Customer |  02 |  9999.99  
  
## Update

UPDATE Customer  
SET SalesRepId = '02'  
WHERE CustomerId = '0002'

Customer table after update 

**CustomerId** |  **Name** |  **SalesRepId** |  **ARBalance**  
---|---|---|---  
0001 |  ABC Corp. |  01 |  1234.99  
0002 |  Acme Inc. |  02 |  1.23  
  
## Hint Key

SELECT * FROM my_table WHERE id='John Smith' AND amount > 50000 HINT KEY 2

In this example, my_table has two keys. The first key is id+amount, and the second key is id+amount in descending order.

By default, the PxPlus SQL ODBC Driver would select the first key that best matches the WHERE conditions. In this example, the first key matches perfectly so it would be selected. The second key also matches, but the PxPlus SQL ODBC Driver would choose the first key by default with no hint. However, using the above SQL statement tells the PxPlus SQL ODBC Driver to use the second key, which would be faster in this case. This is because amount values > 50000 are at the top when ordered in descending order.

_(Support for SQL HINT was added in PxPlus 2016.)_

##  Constructing a Left Outer Join Using the Syntax Table

The following example applies the syntax descriptors explained in the [**SQL Syntax Table**](sql_syntax_table.md). In the descriptions below, a "**::=** " symbol represents the phrase "consists of" and a "**|** " symbol represents an exclusive OR.

Suppose we want a statement that will retrieve all rows from the _Customer_ table. We want to display the customer name and also display the name of the sales representative when the customer has a sales representative assigned. Because the _Customer_ table and the _SalesRep_ table both contain a column called _Name_ , we must use an _alias_ so that the PxPlus SQL ODBC Driver can determine to which column we are referring.

We begin with 

> _statement_**::=** SELECT _select_ _orderby_

which consists of

> _select_**::=**_selectcols_ FROM _tablelist_  _where groupby having_

which has

> _selectcols_ **::=**  _selectallcols_ * | _selectallcols_ _selectlist_

We want to display a limited number of columns, so we want a

> _selectlist_ **::=**  _selectlistitem_ , _selectlist_ | _selectlistitem_

which consists of two

> _selectlistitem_ **::=**_expression_ | _expression aliasname_ | _expression_ AS _aliasname_ | _aliasname_.* | _colref_

Our two _selectlist_ items are

> _colref_ **::=**  _aliasname_ . _columnname_ | _columnname_

which are composed of an

> _aliasname_ **::=**_identifier_

and a

> _columnname_ **::=**_identifier_

An _identifier_ consists of an identifier (identifiers containing spaces must be enclosed in double quotes).

As the _alias_ , we use the name of the table; however, an alias is not limited to the table name. Thus far, we have:

> SELECT Customer.Name, SalesRep.Name FROM

Now we parse the _tablelist_.

> _tablelist_ **::=**  _tablelistitem_  _crossjointerm_  _tablelist_ | _tablelistitem_

where a

> _tablelistitem_ **::=**  _tableref_ | _outerjoin_

and we want all rows from the first table and matching rows from the second table, if any. Therefore, we need an

> _outerjoin_ **::=**  _ojshorthand_ _| oj_

Since we do not like to type, we use _ojshorthand_**::=** {OJ _oj_ }

where

> _oj_**:=**  _tablerefojterm_  _tableref_ ON _boolean_ _  
> ojterm_ **:=** LEFT OUTER JOIN

We have two

> _tableref_ **::=**  _tablename_ | _tablename_ _aliasname_

where

> _tablename_ **::=**_identifier_

Thus far, we have:

> SELECT Customer.Name, SalesRep.Name FROM {OJ Customer LEFT OUTER JOIN SalesRep ON }

The final piece is the relationship between the _Customer_ table and the _SalesRep_ table, which is specified with

> _boolean_ **::=**_and_ | _and_ OR _boolean_

Ultimately, we want a _comparison_ which is part of

> _not_**::=**_comparison_ | NOT _comparison_

which is part of

> _and_**::=**_not_ | _not_ AND _and_

The _comparison_ is _expression op expression_ where the expressions are _colref_ and the _op_ is an **=**.

The result is:

> SELECT Customer.Name, SalesRep.Name FROM {OJ Customer LEFT OUTER JOIN SalesRep ON Customer.SalesRepId = SalesRep.SalesRepId }
