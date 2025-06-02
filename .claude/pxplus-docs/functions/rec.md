# System Functions

**REC( )** |  **_Expand IOList Specification_**  
---|---  
  
##  Formats

1. |  _Expand IOList from Object Code_ _:_ |  **REC(**_iol_obj_ _$_[,**REC=**_name$_][,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Expand from IOList_ _:_ |  **REC(IOL=**_iolref_[,**REC=**_name$_][**SEP=**_char$_][,**ERR=**_stmtref_]**)**  
3. |  _Return Default Value_ _:_ |  **REC(FILE** _chan_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_char$_ |  Hex or ASCII string value. Character to use as separator to parse the data; e.g. SEP=".". Dynamic **SEP=*** separators are **_not_** supported. If the **REC( )** function statement also contains a **REC=** clause, the **REC=** clause must precede the **SEP=** clause.  
---|---  
_chan_ |  File (channel) from which the **REC=** value will be returned.  
_iol_obj_ |  String expression that contains the object code of an IOList.  
_iolref_ |  Either a string variable containing the object code of an IOList or a statement reference to an IOList (statement number/label).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_name$_ |  String variable. Optional record name/prefix for all of the variables in the IOList (**REC=VIS(**_string$_**)** can also be used).  
  
##  Returns

String, name/contents of IOList.

##  Description

The **REC( )** function returns the name or contents of an IOList and can be used to define a record prefix.

##  Format 1

**_Expand_**** _IOList_ _from Object Code_**

**REC(**_iol_obj_ _$_[,**REC=**_string$_][,**ERR=**_stmtref_]**)**

With this format, the string returned by the **REC( )** function is expanded from a string expression consisting of the object code of an IOList.

##  Format 2

**_Expand from_**** _IOList_**

**REC(IOL=**_iolref_[,**REC=**_string$_][**SEP=**_char$_][,**ERR=**_stmtref_]**)**

The string returned by the **REC( )** function in this format is expanded from a variable list (**IOL=**_iolref_).

In both the above formats, you can add a **REC=** clause to assign a record name as a prefix to all the variables in the list (similar to a prefix for a composite string variable); that is, the variable you identify in your string variable defines a prefix for the variable names in your IOList. Both formats also allow you to have other functions and directives return values based on a variable name for the record: e.g. LEN (X$) and PRINT X$.

You can also use a **SEP=**_char$_. Note that if you include both this and a **REC=** clause, the **REC=** clause must precede the **SEP=** clause.

**_Example:_**

In the following example, PxPlus would place the input data in CUST.NAME$, CUST.ADR1$ and CUST.ADR2$ using the IOList at line 0110 as a template (even though there is no matching prefix in the IOList); that is, you can use the same IOList as a template for different **REC=** prefix specifications:

> 0100 print X$  
>  0110 iolist NAME$,ADR1$,ADR2$  
>  0120 input edit "Name",@(9),": ",CUST.NAME$  
>  0130 input edit "Address 1: ",CUST.ADR1$  
>  0140 input edit @(8),"2: ",CUST.ADR2$  
>  0150 let X$=rec(iol=0110,rec=CUST$)  
>  0160 if len(X$)>100 then print "TOO-LONG"; goto 0120  
>  0170 print X$  
>   
>  ->run  
>  BRETT'S BODYSHOP  
>  123 SOME ST. ANYTOWN SK S0M 0V0  
>   
>  Name : YVONNE'S BODYSHOP _The values are displayed with the prompts.__The user edits to change them._  
>  Address 1: 123 SOME RD.  
>  2: NEWTOWN SK S0M 0V0  
>   
>  YVONNE'S BODYSHOP  
>  123 SOME RD. NEWTOWN SK S0M 0V0

##  Format 3

**_Return Default Value_**  
  
**REC(FILE** _chan_[,**ERR=**_stmtref_]**)**

Use this format to obtain the name of the **REC=** default value for your given file.
