# System Functions

**LNO( )** |  **_Return Line Number_**  
---|---  
  
##  Formats

1\. _Passing a Line Number:_ |  **LNO (**_stmtref_**)**  
---|---  
2\. _Passing a String Expression:_ |  **LNO (**_stringexpr_ _$_ [ ,**ERR** =_stmtref_ ]**)**  
  
**_Where:_**

_stmtref_ |  Statement label for which the **LNO** function is to return the line number.  
---|---  
_stringexpr_ _$_ |  String expression to be evaluated.  
  
_(Format 2 was added in PxPlus 2021.)_

##  Returns

Line number of the statement referred to by _stmtref_.

##  Description

The **LNO( )** function is used to get the line number of a PxPlus statement. Normally, it is passed a line label and will return the line number that the label is in; however, it can also be passed a line number. While it may seem useless to pass the **LNO** function a line number, passing a line number to the function assures that, within the program, the line number reference will be adjusted during a **[RENUMBER](../directives/renumber.md)** directive.

Format 2 can be used wherever a statement number or label is used (i.e. after a GOTO, GOSUB, ERR=, etc.). The **LNO** function will evaluate the string expression and use that to find and return the line reference to be used:

**_Example:_**

> GOTO LNO("evt_"+event$,err=Bad_Label)

The above will transfer to the statement labeled **evt_**_xxxxxxx_ where _xxxxxxx_ is the contents of the variable **_event$_**. If no such label exists, an error will be thrown.

## Example

Consider the following statements:

> 0100 ! ^100 - Update Logic  
>  0110 print (TRACE)"Start section",lno(0100)

If you were to issue a RENUMBER, the system will recognize the 0100 within the **LNO** function as a line number and will adjust it accordingly so that if statement 0100 moved to 0200, the value within the **LNO** function would be adjusted.
