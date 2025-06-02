# Directives 

**READ DATA** |  **_Read Data from Program_**  
---|---  
  
##  Formats

1\. _Read Data_ _:_ |  **READ DATA** _varlist_ ,...[,**ERR=**_stmtref_]  
---|---  
2\. _Read from String_ : |  **READ DATA FROM** _data$_[_,fileopt_] **TO** _varlist_  
  
**_Where:_**

_data$_ |  Data to be parsed into the _varlist_. String expression.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used where _string$_ contains the record prefix.)  
**SEP=**_char$_ |  Default separator character to parse data. Hex or ASCII string value. Dynamic **SEP=*** separators are **_not_** supported.  
If the **READ DATA** statement also contains a **REC=** clause, the **REC=** clause must precede the **SEP=** clause.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_varlist_ |  List of variables to receive the values from the **DATA** statements. Comma-separated numeric and string variables are allowed.  
  
##  Description

Use the **READ DATA** directive to read data embedded in a program.

##  Format 1

**_Read Data_**

**READ DATA** _varlist_**,...[,ERR=**_stmtref_**]**

Use this format to transfer the values/expressions from data statements in a program to the variables identified in _varlist_. When **READ DATA** is executed, PxPlus evaluates each expression in the data statements in order and places the values into the corresponding variables defined in your **READ DATA** directive.

PxPlus increments an internal pointer to the next data expression during the reading of _data$_. When the end of a data statement is reached, the next data statement in the program is used. Use a **RESTORE** directive to reset the pointer to the start of the first data statement.

**_Example 1:_**

Include the **END=** or **ERR=** option to avoid an Error #2 when the pointer is at end of file:

> 0010 data "Dog","Cat","Pig"  
>  0020 data "Pig","Cat","Dog"  
>  0030 read data X$, end=1000  
>  0040 print X$," | ",  
>  0050 goto 0030  
>  1000 restore  
>  1010 print "DONE"; stop  
>   
>  ->begin  
>  ->run  
>  Dog | Cat | Pig | Pig | Cat | Dog | DONE

##  Format 2

**_Read Data from String_**

**READ DATA FROM** _data$_**[,REC=**_string$_**][SEP=**_char$_**] TO** _varlist_**[,ERR=**_stmtref_**]**

You can **READ DATA FROM** a string to initialize a list of variables or to parse a record into different IOLists.

**_Example 2 - Initialize Variables:_**

You can **READ DATA _to_** an IOList to initialize all variables:

> 0010 ! Clear all variables in an IOLIST  
>  0100 read data from "" to iol=8000  
>  8000 iolist ID$,NAME$,AMT  
>   
>  0010 read data from "",rec=WORK$ to iol=iol(WORK)

**_Example 3 - Parse Record:_**

You can use **READ DATA** to parse a record into different IOLists:

> 0100 read record (1)R$  
>  0200 if R$(1,1)="T" then read data from R$ to iol=8000  
>  0200: else read data from R$ to iol=8010  
>  8000 iolist TYPE$,TRN_DATE$,TRN_AMOUNT  
>  8010 iolist TYPE$,PAY_DATE$,PAY_AMOUNT

##  See Also

[**DATA Define Data Elements**](data.md)  
[**RESTORE Reset Program Data Position**](restore.md)  
[**BEGIN Reset Files and Variables**](begin.md)  
[**LOAD Read Program into Memory**](load.md)
