# System Functions

**NOT( )** |  **_Invert String Bits/Logical Condition_**  
---|---  
  
##  Formats

1. |  _Invert String:_ |  **NOT(**_data$_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Invert Logical Condition_: |  **NOT(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_data$_ |  Data whose bits are to be inverted. String expression.  
---|---  
_num_ |  Value for inverting a logical condition. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Inverted value, string or numeric.

##  Description

This function returns the inverted value of a string or numeric (i.e. with all ON bits turned OFF and vice versa).

##  Format 1

**_Invert String_**  
  
**NOT(**_data$_[,**ERR=**_stmtref_]**)**

The **NOT( )** function inverts the value of the bits in the character string specified. The string returned by the **NOT( )** function will be the same length as the given data string. All OFF bits in the string will be returned ON while all ON bits will be returned OFF. The string expression can be a literal like "abc" or $8A$, a variable such as A$, or an expression using operators, such as A$="1234".

**_Example:_**

|  A$=not($0010$) |  _yields_ A$=$FFEF$  
---|---|---  
|  A$=not($FF00FF$) |  _yields_ A$=$00FF00$  
|  A$=not($5A5A$) |  _yields_ A$=$A5A5$  
  
##  Format 2

**_Invert Logical Condition_**  
  
**NOT(**_num_[,**ERR=**_stmtref_]**)  
**  
Use this format to invert a logical condition. If the result of the condition is 0 (_false_), this function returns 1 (_true_); otherwise, this function returns 0 (_false_):

> if not(CST_ID$=CMPR_ID$) \  
>  then gosub NO_MATCH
