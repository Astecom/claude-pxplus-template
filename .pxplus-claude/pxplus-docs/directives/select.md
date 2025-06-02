# Directives 

**SELECT** |  **_Select/Query From ... Where_**  
---|---  
  
##  Formats

1\. _Open, Read and Query Records:_  
---  
**SELECT** _iolist_ __**[** ,**REC=**_string$_**] FROM {**__**[ TABLE ]**_filename$_ **|**  _chan_**}[ ,KNO=**_num_ **|**_name$_**]**  
|  **[ BEGIN** _key$_**[ :**_key$_**: ... ] ]**  
|  **[** **END** _key$_ **[ :**_key$_ **: ... ] ]**  
|  **[ [ STATIC ]** **WHERE** _expression_**]**  
|  **[ WITH [ REQUIRED ]**  _select_**]**  
|  **[** ,**ERR=**_stmtref_ **]**  
2\. _Return Full Record Contents:_  
**SELECT RECORD** _var$_**FROM {**__**[ TABLE ]**_filename$_ **|**  _chan_**}[ ,KNO=**_num_ **|**_name$_**]**  
|  **[ BEGIN** _key$_**[ :**_key$_**: ... ] ]**  
|  **[** **END** _key_ **[ :**_key$_ **: ... ] ]**  
|  **[ [ STATIC ]** **WHERE** _expression_**]**  
|  **[** ,**ERR=**_stmtref_ **]**  
3\. _Return Key Portion of the Record:_  
**SELECT KEY** _var$_**FROM {**__**[ TABLE ]**_filename$_ **|**  _chan_**}[ ,KNO=**_num_ **|**_name$_**]**  
|  **[ BEGIN** _key$_**[ :**_key$_**: ... ] ]**  
|  **[** **END** _key$_ **[ :**_key$_ **: ... ] ]**  
|  **[ [ STATIC ]** **WHERE** _expression_**]**  
|  **[** ,**ERR=**_stmtref_ **]**  
  
#### **Note:**  
An **ERR=** can be added after an **END=** , as well as before and after a **WHERE**.

**_Where:_**

_chan_ |  Channel or logical file number to be read from.  
---|---  
_expression_ |  Condition must return _true_ or _false_. Numeric or string expression.  
_filename$_ |  Name of the file to be opened and read from. String expression.  
_iolist_ |  List of variables to be read from the file. The order in which the variables are specified (_A$, B$, C$, ...)_ corresponds to how the fields are read from each record (1st, 2nd, 3rd, ...). If you use an *****  _(asterisk)_ , then all fields defined by the embedded data dictionary will be returned. You can use an **IOL=**_iolref_ as your _iolist_.  
_var_ _$_ |  String variable. Receives the contents of the record or key being read. If you use an *****  _(asterisk)_ , then the record or key contents will **_not_** be saved.  
**KNO=**_num_ **|**_name$_ |  File access key value (_num_) or name (_name$_).  
**BEGIN** _key$_ **[ :**_key$_ **: ... ]** |  Starting key of the range to select.  _key_ _$_ is a string expression. Multiple colon-separated segments may be specified if needed.  
**END** _key$_ **[ :**_key$_ **: ... ]** |  Ending key of the range to select.  _key_ _$_ is a string expression. Multiple colon-separated segments may be specified if needed.  
_string$_ |  Record prefix. (**REC=VIS(**_string$_**)** can also be used.)  
_select_ |  Another **SELECT** directive used to define a join. See **[Join Select](select.htm#Mark6)**.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(STATIC WHERE was added in PxPlus 2017_.)  
_(WITH and WITH REQUIRED were added in PxPlus 2018.)_

##  Description

Use the **SELECT** directive to open, read and query records from the specified data file or just to read data from a specified file number. As each record is read, the system processes any logic you include following the **SELECT** directive up to the **NEXT RECORD**. When a **NEXT RECORD** statement is encountered with no records found for a nested **SELECT** , it will locate the corresponding **SELECT** statement.

If you include a **WHERE** clause, the loop will process only those records **WHERE** the condition is _true_.

The **BEGIN** and **END** clauses are supported only for keyed and memory files. You can use these clauses with WindX-connected files. Note that if you are using **BEGIN** and **END** in **SELECT** statements for files with descending keys, the **END** value must be lower than the **BEGIN** value.

#### **Note:**  
Every **SELECT** must have a corresponding **NEXT RECORD** directive and must be in the correct sequence. A mismatched number of **SELECT** and **NEXT RECORD** directives can result in either an Error #27: Unexpected or incorrect WEND, RETURN or NEXT, or an Error #28: No corresponding FOR for NEXT.

Because the system pads descending keys to their full length with $FF$, the **BEGIN** value is _item$_ +$FF$ and the **END** value should be _item$_ +$00$ so that the ending key is less than the beginning key; i.e. the correct format is currently **SELECT * FROM** _filename_**BEGIN** _item$_**END** _item$_ +$00$.

Although the incorrect statement **SELECT * FROM** _filename_**BEGIN** _item$_**END** _item$_ +$FF$ may have worked in prior versions, it no longer does as of version 4.20. You must either include a **NEXT RECORD** directive to end the **SELECT** loop or instruct the system to exit the loop early (with an **[EXITTO](exitto.md)** directive). When an **EXITTO** directive is used, the file will be closed if **SELECT** specified a data filename rather than a channel.

In earlier versions of the language, the **CONTINUE** and **BREAK** directives (and corresponding ***CONTINUE** and ***BREAK** labels) were not supported for use with **SELECT** /**NEXT RECORD** directives. As of version 4.20, it is currently possible to include **[BREAK](break.md)** and **[CONTINUE](continue.md)** commands in **SELECT** structures.

The keyword **TABLE** before the _name$_ indicates that the value provided is the logical table name for the file as defined in the currently opened data dictionary file. See [**OPEN DICTIONARY**](open.htm#Dictionary).

For non-join selects on **[Keyed](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.md)** or **[EFF](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Enhanced%20File%20Format.md)** PxPlus data files, you can enable select optimization via the **['SO'](../parameters/so.md)** system parameter.

_(The TABLE option was added in PxPlus v6.30.)_

##  External Database Access

If you are working with an external database such as MySQL or Microsoft SQL Server, PxPlus will use the **WHERE** clause to filter the results **_before_** they are returned to PxPlus. Filtering the results **_before_** they are returned to PxPlus is generally much faster, as this reduces the number of file reads and writes, as well as network traffic.

PxPlus will filter **_before_** if the **WHERE** expression consists of the following format:

> _field_ **[** $**]** **comparison_op**  _literal_ **[** **{AND | OR}**  _field_**[** $**]** **comparison_op**  _literal_ **]**...

**_Example:_**

> **SELECT** addresses **WHERE** city$="Toronto" **OR** city$="Markham"

If the **WHERE** expression contains any variables that **_do not match_** database table field names or has any arithmetic or functions calls, then PxPlus will use the **WHERE** clause to filter the results **_after_** they are returned to PxPlus:

**_Example:_**

> search_city$="Vancouver"  
>    
> **SELECT** addresses **WHERE** city$=search_city$

In this case, the results must be filtered ** _after_** because PxPlus does not know if the variable's value will change for each row processed by the **SELECT**. You can, however, use the **STATIC WHERE** syntax to force PxPlus to use the **WHERE** clause to filter the results **_before_** they are returned to PxPlus. **STATIC WHERE** will use the beginning value of any variables in the expression that **_do not match_** database table field names to filter the results.

**STATIC WHERE** can only force the results to be filtered ** _before_** they are returned if the only reason it was not filtered **_before_** was the use of any variables that **_do not match_** database table field names. If any arithmetic or function calls are used in the **WHERE** expression, the results will always be filtered **_after_**. You can easily do the function calls and/or arithmetic before the **SELECT** call and store the result in a variable, and then use the variable in a **STATIC WHERE** expression to accomplish the same thing.

_(Support for the WHERE clause to filter results was added in PxPlus 2017.)_

##  Join Select

You can use a single _select_ to join data from multiple tables. Two types of joins are supported: left join (**WITH**) and inner join (**WITH REQUIRED**). For left joins, all the records from the first (left) _select_ table will be returned along with any matched records from the joined (right) _select_ table. For an inner join, only the records that meet the join condition are returned.

Joins are done by chaining together **SELECT** directives using a **WITH [REQUIRED]**. It is possible to join three or more tables together. The **WHERE** expression of the first **SELECT** directive will filter all joined results. The **WHERE** expressions of joined **SELECT** directives are used to determine which records from the joined tables match records returned by any prior **SELECT** directives.

**_Example:_**

Suppose you need to print the Employee Name and Department Name of all U.S.-based employees; however, that information is stored in two tables, the Employee table and the Department table. The Employee table contains Employee Name and Department ID. The Department table contains Department ID and Department Name.

A single **SELECT** can be used to join the Employee and Department tables on the Department ID and filter the results of the join based on the country:

> **SELECT** *,**REC=** empl$ **FROM** "employee" **WHERE** empl.country$="US" **WITH SELECT** *,**REC=** dept$ **FROM** "department" **WHERE** empl.dept_id=dept.dept_id  
>  **PRINT** empl.name$ + " " + dept.name$  
> **NEXT** **RECORD**

#### **Note:**  
Join selects are supported for **_both_** PxPlus data files **_and_** external database tables.

**_Optimization_**

For join selects on **[Keyed](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.md)** or **[EFF](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Enhanced%20File%20Format.md)** PxPlus data files, select optimization is always enabled, regardless of the **['SO'](../parameters/so.md)** system parameter.

For join selects on external databases where all tables in the select join are from the same database, the system will attempt to optimize the SQL query. The SQL query will be optimized by generating a single join SQL query instead of multiple SQL queries. Executing a single SQL query to do the join is significantly faster than doing the join with multiple SQL queries and then having PxPlus join the records. PxPlus cannot optimize the join select if any of the external database tables was opened with any of the following options set: **IND=** , **TYP=** , **RECDATA=** , **KEYDATA=** , and **TSQL=**.

If using join selects on external databases, the **WHERE** expression of the first **SELECT** directive may be sent as part of the SQL query if it is optimizable. For joins, only comparisons involving fields from the first (left) _select_ table can be optimized. If you have any comparisons involving fields from other _select_ tables **_and_** are doing an inner join, you can move those comparisons to a join condition **WHERE** expression. See **[External Database Access](select.htm#Mark5)**.

#### **Note:**  
For the best performance, minimize the number of tables joined.

_(Support for a single select to join data from multiple tables was added in PxPlus 2018.)_

##  Formats 2 and 3

**SELECT RECORD and SELECT KEY Options**

The **SELECT .. NEXT RECORD** statement can include syntax for full record contents or key portion of the record. **SELECT RECORD** allows the specification of a single variable as per the **[READ RECORD](read_record.md)** directive. **SELECT KEY** reads the file and treats the key contents as if it were the data. A single variable can be specified to receive the key value.

For both formats, you can specify ***** (_asterisk_) instead of a variable to ignore the actual read record or key. This is useful, for example, if you are using the **SELECT** to count the number of records within a certain key range but you do not need to actually read in the data.

**_Example:_**

> **SELECT KEY** * **FROM** "ABC" **BEGIN** "0002" **END** "0004"  
>  count++  
> **NEXT RECORD**

See **[Example](select.htm#Mark4)**.

##  Read Next Physical

If you specify **KNO=*** on the **SELECT** directive, the system will read and return the next physical record from the file. The read will **_not_** utilize any of the key tables to access the data. This significantly reduces the overhead involved in the data retrieval process.

#### **Note:**  
Using the **SELECT** directive with the **KNO=** option to access records by a logical position is **_not supported on FLR files_** because the key blocks are randomly intermingled with the data and deleted records are not distinguishable from live data.

Use of the Read Next Physical capability can greatly reduce the time it takes to process a file where the order of the data is not important.

_(The ability to read next by physical location was added in PxPlus v6.30.)_

##  See Also

[**NEXT RECORD End SELECT Statement**](next_record.md)  
[**BREAK Immediate Exit of Loop**](break.md)  
[**CONTINUE Initiates Next Iteration of Loop**](continue.md)  
[**EXITTO End Loop, Transfer Control**](exitto.md)  
[**Structured Error Handling Using ON ERR**](on_err.md)  
**['SO' Select Optimization](../parameters/so.md)**

##  Example

The following example illustrates use of the **SELECT WHERE** clause:

> 0010 select iol=0100 from "VEND_FILE",kno=1 begin "ABC CO." end "THAT CO." where CITY$="CLARENDON"  
>  0020 print rec(iol=0100)  
>  0030 next record  
>  0100 iolist VEND$,NAME$,ADDR1$,ADDR2$,CITY$,PROV$,POSTAL$,INV_DT$,INV,AMT,TERMS,DUE_DT$  
>  0110 print "DONE"; end

In the following example, **SELECT KEY** is issued to return the key portion of the record:

> select key cst_name$ from "cstfile",kno=1 begin StartName$ end StartName$+$FF$ where cst_name$<>SkipName$  
>  print cst_name$  
>  next record

The following example uses the **SELECT RECORD** directive to return the full record contents:

> select record r$ from "cstfile",kno=1 begin "D" end "D"+$FF$  
>  print r$  
>  next record
