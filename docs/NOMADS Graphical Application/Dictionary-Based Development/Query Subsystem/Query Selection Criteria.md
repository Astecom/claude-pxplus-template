# Query Subsystem 

**Query Selection Criteria** |  **__**  
---|---  
  
## Query Selection Definition

The **Query Selection Definition** window defines criteria for selecting records to be displayed in a query.

To invoke this window, click the _Filter_ toolbar button on the **Query Definition** window.

> This window consists of the following:

_Apply Prefix/Range To_ |  For PxPlus data files: **_Query+, Drop Query and Classic Query with Sort by Column Option SET:_** Choose to apply the prefix to the _Primary Key_ or to the '_Sort By' Key_. **_Classic Query with Sort by Column Option NOT SET:_** The prefix can be applied to the primary key only.  
---|---  
**Prefix** |  String of characters that must be the leading characters of the key for all records selected (_Fixed_ value or string _Expression_). See **[Passing External Data to Query](Query%20Selection%20Criteria.htm#Mark1)**. **_(Classic Query)_** Since the field containing the prefix is identical for the entire query, it is not usually displayed as part of the query data. If you define a _Key Prefix_ for your query, end-users do not have to enter the prefix part of the key for the _Start At Value_ for primary sort keys. NOMADS adds it automatically at run time.  
**Range** |  Records whose key falls within the range defined by _From_ and _To_ are displayed (_Fixed_ value or string _Expression_). See **[Passing External Data to Query](Query%20Selection%20Criteria.htm#Mark1)**. |  _From_ |  Value defaults to the beginning of the file if left blank.  
---|---  
_To_ |  Value defaults to the end of the file.  
  
#### **Note:**  
A range can be combined with a prefix, where the range values are appended to the prefix value.  
  
**Selection Logic** |  Enter the criteria for selecting individual records. See **[Passing External Data to Query](Query%20Selection%20Criteria.htm#Mark1)**. Click the drop-down arrow for possible selections: |  _Ignore_ |  **_(Default)_** No processing occurs.  
---|---  
_Test_ |  If selected, enter a PxPlus expression for selection logic in the input field. A selection is made if the condition is found to be true. **_Example:_**  
  
IMPORT_FLAG$="D"  
CST_AMT<>0  
_Call_ |  If selected, enter the path to a called program, followed by any arguments to be passed. If the record does not satisfy selection criteria in the called program, an error code value must be returned by the called program's **[EXIT](../../../directives/exit.md)** directive. If no value is returned, the record is selected. **_Example:_**  
  
CALL "SELPROG", TRN_CD$,TRN_AMT  
In Called Program:  
0010 ENTER CODE$,AMT  
(Select Code)  
0080 EXIT ! Select Record  
:  
0100 EXIT 123 ! Reject Record   
**Continue While** |  **_(Query+)_** Enter the criteria to continue processing the query. When the criteria are not met, the query will stop processing any further records. The criteria are applied only to those records that have successfully passed the **Selection Logic** criteria, if applicable. In addition, the initial order of the records read will affect the outcome. Click the drop-down arrow for possible selections: |  _Ignore_ |  **_(Default)_** No processing occurs.  
---|---  
_Test_ |  If selected, enter a PxPlus test expression in the input field. The query will continue processing while the condition is true. **_Example 1:_** QRY_REC_COUNT <=100 The query will display the first 100 records that have been selected.

#### **Note:**  
**[QRY_REC_COUNT](Designing%20and%20Using%20the%20Query%20Subsystem.htm#qryreccount)** is a special query variable that returns the number of records successfully selected at the time it is accessed.

**_Example 2:_** UCS(REGION$)<>"ONTARIO" When the first "Ontario" is encountered, the test is false; therefore, the query stops processing at that point and does not continue.  
_Call_ |  If selected, enter the path to a called program, followed by any arguments to be passed. Arguments may consist of PxPlus variables and expressions, including record elements. Based on the information passed to the program, the program logic must determine whether the query should continue or stop at that point. To stop the query at a particular point, an error code value must be returned by the called program's **[EXIT](../../../directives/exit.md)** directive. If no error code is returned, the query will continue. **_Example:_** CALL "SELPROG", TRN_CD$,TRN_AMT  
In Called Program:  
0010 ENTER CODE$,AMT  
(Program code to determine to continue/stop)  
0080 EXIT ! Continue processing the query  
:  
0100 EXIT 123 ! Stop the query here  
  
_(The Continue while option was added in PxPlus 2023.)_  
  
**Suppress Duplicates** |  |  _Suppress records based on duplicate return values_ |  **_(Query+ Only)_** Select this option to suppress query lines based on duplicate return values. This allows the query to show/process only the first record of a series. If selected, you can also define the _Return Value_ here.  
---|---  
_Return Value_ |  The value to be returned when a record is selected. If omitted, the default is the value in the first column of the query. This value can also be used to determine if lines are to be suppressed when duplicate return values are encountered. Use a PxPlus expression. Values can be returned for a single field or multiple fields concatenated in a format you can parse after the value is returned: PROD_ID$ CST_SMN$+","+CST_NAME$(1,1) PAD(X1$,6)+PAD(X2$,12)+STR(LNK.AMT:"00000.00") SLS.FLD#1*100 You can also gain access to external keys using the special NOMADS query variable **[PRIME_KEY$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#primekey)** and return an entire record using the special NOMADS query variable **[ENTIRE_RECORD$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#entirerecord)**: PRIME_KEY$+ENTIRE_RECORD$  
_Do not return the value to application_ |  Select this option to ensure that the _Return Value_ is not set when the query panel is exited. When a query is invoked, you can pass a _Start At_ value as an argument. When the query panel exits, the same argument is used for the _Return Value_. Rather than loading this argument with the value of the currently selected record, the argument is left unchanged. The value in a control with an attached query is not changed when the query ends.  
_Build Return Value_ |  **_(Available when the Suppress records based on duplicate return values option is selected)_** Click this link to invoke the **[Build Return Value](Query%20Header.htm#returnvalue)** window for defining the _Return Value_.  
  
_(The ability to suppress query lines based on duplicate return values was added in PxPlus 2021.)_  
  
##  Passing External Data to Query

Global variables should be used to define expressions to use for the _Key Prefix_ , _Range_ and _Selection Logic_ settings.

#### **Important Note:**  
**_Do not use ARG_n$ variables._** These are **_reserved_** for internal query processing.

The special global query variables, **%QRY_VARIOL$** and **%QRY_VARDATA$** , can also be used to pass external data to the run-time Query+ logic. The **%QRY_VARIOL$** variable can be loaded with a compiled IOList containing the names of the variables to hold external data. The **%QRY_VARDATA$** can be loaded with the data for the variables in REC( ) format. It is recommended that these variables be declared as LOCAL.

**_Example:_**

> LOCAL %QRY_VARIOL$=CPL("IOLIST MYVAL$,XVAL")

> LOCAL %QRY_VARDATA$=REC(IOL=%QRY_VARIOL$)

At run time, the Query+ logic loads the data from **%QRY_VARDATA$** into the variables in **%QRY_VARIOL$** ; therefore, the data in these variables is available to use for query selection criteria.

Besides populating the variables specified in **%QRY_VARIOL$** , the query populates the same variables with a _VAR. prefix that can be used as well.

_(The %QRY_VARDATA$ and %QRY_VARIOL$ variables, along with the _VAR. prefix, were added in PxPlus 2021.)_
