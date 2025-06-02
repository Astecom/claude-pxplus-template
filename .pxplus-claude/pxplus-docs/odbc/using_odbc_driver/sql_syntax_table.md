# Using the PxPlus SQL ODBC Driver  
  
**SQL Syntax Table**|   
---|---  
  
The PxPlus SQL ODBC Driver supports the SQL syntax described in the table below. For an illustration of this syntax, see **[Constructing a Left Outer Join Using the Syntax Table](example_sql.htm#Mark32)**.

In the following table, SQL keywords are shown in uppercase, the vertical bars _(pipes)_ "|" separate choices where more than one command is represented, and a _blank_ indicates that no qualifier is required.

**Syntax** |  **Description**  
---|---  
_statement_ |  **SELECT**  _select_ _orderby_ | **INSERT**  _insert_ | **DELETE** _delete_ | **UPDATE** _update_  
_top_ |  _blank_ | **TOP** _integer_  
_select_ |  _top selectcols_ **FROM** _tablelist_ _where groupby having limit hint union_  
_insert_ |  **INTO**  _tablename_ _insertvals_  
_delete_ |  **FROM**  _tablename_ _where_  
_update_ |  _tablename_ **SET** _setlist_ _where_  
_setlist_ |  _set_ | _setlist_ , _set_  
_set_ |  _columnname_ = **NULL** | _columnname_ = _expression_  
_insertvals_ |  **(**_columnlist_**) VALUES (**_valuelist_**)** | **VALUES (**_valuelist_**)** |  
**  
(**_columnlist_**) VALUES (SELECT** _select_**)** |  
**  
VALUES (SELECT** _select_**)**  
_columnlist_ |  _columnname_ , _columnlist_ | _columnname_  
_valuelist_ |  **NULL** , _valuelist_ | _expression_ , _valuelist_ | _expression_ | **NULL**  
_selectcols_ |  _selectallcols_ ***** | _selectallcols_ _selectlist_  
_selectallcols_ |  _blank_ | **ALL** | **DISTINCT**  
_selectlist_ |  _selectlistitem_ , _selectlist_ | _selectlistitem_  
_selectlistitem_ |  _expression_ | _expression aliasname_ | _expression_ **AS**  _aliasname_ | _aliasname_**.*** | _colref_  
_where_ |  _blank_ | **WHERE** _boolean_  
_having_ |  _blank_ | **HAVING** _boolean_  
_limit_ |  _blank_ | **LIMIT** _integer limitoffset_  
_limitoffset_ |  _blank_ |**OFFSET** _integer_  
_union_ |  _blank_ _|_**UNION** _select |_**UNION ALL** _select_  
  
 _(Support for SQL UNION and UNION ALL syntax was added in PxPlus 2016.)_  
_boolean_ |  _and_ | _and_**OR**  _boolean_  
_and_ |  _not_ | _not_**AND**  _and_  
_not_ |  _comparison_ | **NOT** _comparison_  
_comparison_ |  **(**_boolean_**)** | _colref_ __**IS NULL** | _colref_ **IS NOT NULL** |  
_  
expression_ **LIKE**  _pattern_ | _expression_ **NOT LIKE**  _pattern_ |  
_  
expression_ **IN (**_valuelist_**)** | _expression_ **NOT IN (**_valuelist_**)** |  
_  
expression op expression_ | **EXISTS (SELECT**  _select_**)** |  
_  
expression op selectop_ **(SELECT**  _select_**)** |  
_  
expression_ **IN (SELECT**  _select_**)** |  
_  
expression_ **NOT IN (SELECT**  _select_**)** |  
_  
expression_ **BETWEEN**  _expression_ **AND**  _expression_ |  
_  
expression_ **NOT BETWEEN**  _expression_ **AND**  _expression_  
_selectop_ |  _blank_ | **ALL** | **ANY**  
_op_ |  **>** | **> =** | **<** | **< =** | **=** | **< >**  
_pattern_ |  _string_ | **?** | **USER**  
_expression_ |  _expression_ \+ _times_ | _expression_ \- _times_ | _times_  
_times_ |  _times_ * _neg_ | _times_ / _neg_ | _neg_  
_neg_ |  _term_ | + _term_ | - _term_  
_term_ |  **(**_expression_**)** | _colref_ | _simpleterm_ | _aggterm_ _| scalar_ |_case_  
_case_ |  **CASE**  _when else_ **END**  
_when_ |  _expression simplewhen_ | _searchedwhen_  
_simplewhen_ |  **WHEN**  _expression_**THEN** _expression_ | _simplewhen_ _simplewhen_  
_searchedwhen_ |  **WHEN**  _boolean_ __**THEN** _expression_ | _searchedwhen_ _searchedwhen_  
_else_ |  _blank_ | **ELSE** _expression_  
_scalar_ |  _scalarshorthand_ | _fn_  
_scalarshorthand_ |  **{FN**  _fn_**}**  
_fn_ |  _functionname_ **(**_valuelist_**)** | _functionname_**( )**  
_aggterm_ |  **COUNT (** * **)** | **AVG (**_expression_**)** | **MAX (**_expression_**)** |  
**  
MIN (**_expression_**)** | **SUM (**_expression_**)** |  
**  
COUNT (**_expression_**)**  
_simpleterm_ |  _string_ | _realnumber_ | **?** | **USER** | _date_  
_groupby_ |  _blank_ | **GROUP BY**  _groupbyterms_  
_groupbyterms_ |  _colref_ | _colref_ , _groupbyterms_  
_orderby_ |  _blank_ | **ORDER BY**  _orderbyterms_  
_orderbyterms_ |  _orderbyterm_ | _orderbyterm_ , _orderbyterms_  
_orderbyterm_ |  _colref_ _asc_ | _integer asc_  
_asc_ |  _blank_ | **ASC** | **DESC**  
_hint_ |  _blank_**** |**HINT KEY** _integer_  
_colref_ |  _aliasname_._columnname_ | _columnname_  
_tablelist_ |  _tablelistitem_ _crossjointerm tablelist_ | _tablelistitem_  
_crossjointerm_ |  **_,_** | **CROSS JOIN**  
_tablelistitem_ |  _tableref_ | _outerjoin_  
_outerjoin_ |  _ojshorthand_ | _oj_  
_ojshorthand_ |  **{OJ**  _oj_**}**  
_inneroj_ |  _tableref_ _innerojterm tableref_**ON** _boolean |  
  
tableref innerojterm oj _**ON** _boolean |  
  
oj innerojterm tableref _**ON** _boolean |  
  
oj innerojterm oj _**ON** _boolean_  
_innerojterm_ |  **INNER JOIN** | **JOIN**  
_oj_ |  _tableref_  _ojterm_  _tableref_ **ON**  _boolean_ |  
_  
tableref ojterm oj_**ON**  _boolean_ |  
_  
oj_  _ojterm_  _tableref_ **ON**  _boolean_ |  
_  
oj_  _ojterm_  _oj_ **ON**  _boolean_ |  
_  
inneroj_ |  
  
( _oj_ )  
_ojterm_ |  **LEFT OUTER JOIN** | **LEFT JOIN** |  
**  
RIGHT OUTER JOIN** | **RIGHT JOIN** |  
**  
FULL OUTER JOIN** | **FULL JOIN** _(Support for FULL OUTER JOIN | FULL JOIN was added in PxPlus 2018.)_  
_tableref_ |  _tablename_ | _tablename_ _aliasname_  
_indexname_ |  _identifier_  
_functionname_ |  _identifier_ (see [**Scalar Functions**](scalar_functions.md))  
_tablename_ |  _identifier | qualifier.identifier_  
_qualifier_ |  _identifier_ (The qualifier is ignored. The PxPlus SQL ODBC Driver does not support a data dictionary directory other than the one specified in the DSN or connection string.) _(Support for qualifier was added in PxPlus 2017.)_  
_datatype_ |  _identifier_  
_columnname_ |  _identifier_  
_aliasname_ |  _identifier_  
_identifier_ |  An identifier (must be enclosed in double quotes if it contains spaces)  
_string_ |  A string (enclosed in single quotes)  
_realnumber_ |  A non-negative real number (including E notation)  
_integer_ |  A non-negative integer  
_date_ |  _dateshorthand_ _| dateval_  
_dateshorthand_ |  **{**_d dateval_**}**  
_dateval_ |  Date in _yyyy_ _-mm-dd_ format in single quotes (e.g. '1996-02-05')  
  
## SQL Comments

The PxPlus SQL ODBC Driver also allows comments within SQL queries. Both block and line comments are supported. _(added in PxPlus 2016)_

**Block Comment:** |  /* This is a comment */  
---|---  
**Line Comment:** |  \-- This is also a comment  
  
**_Example:_**

/* This is an example SQL query with comments */  
SELECT * --Get all rows  
FROM 'Customer' --List all customers
