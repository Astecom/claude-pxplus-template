# System Functions

**ERR( )** |  **_Test Error Value_**  
---|---  
  
##  Formats

1. |  _Return ERR Position_ _:_ |  **ERR(**_compare1,compare2,..._[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Return Extended Error Information_ _:_ |  **ERR(**_keyword$_ | "***** "**)**  
2a. |  _Return Extended Error History_ _:_ |  **ERR(**_keyword$_ , _occurrence_**)**  
  
**_Where:_**

***** |  _(asterisk)_ Lists the names of the returned values.  
---|---  
_compare1,  
compare2, ..._ |  Comma-separated list of numeric values for comparison with the value of the internal **ERR** variable.  
_keyword$_ |  Currently supported return values: |  **Keyword** |  **Value Returned**  
---|---  
ERR |  Error condition  
RET |  OS error  
OSERR |  OS error message; i.e. **MSG(-1)**  
PROGRAM |  Pathname of program with error  
STNO |  Statement number  
OBJ |  Object number  
METHOD |  Method name invoked  
LFA |  Last file accessed  
LFO |  Last file opened  
LASTPATH |  Last pathname referenced  
LASTKEY |  Record key value, only valid for Error 11s  
_*_ |  Returns a list of all the possible **ERR** function keywords, comma-separated  
_occurrence_ |  Error history occurrence where 1 is the last recorded error, 2 is the error before that, etc. Maximum value must be <= the value in the **['EH'](../parameters/eh.md)** system parameter. (added in PxPlus v10.10)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **ERR( )** function can be used to determine the value of the internal **ERR** variable or receive additional information about the last un-trapped error.

##  Format 1

**_Return ERR Position_**

**ERR(**_compare_1,compare_2,...compare_n_[,**ERR=**_stmtref_]**)**

Use this format to compare the value of the internal **ERR** variable with a list of possible external error values. If a match is found, the function returns an integer reporting the relative position of the value, which matches the value in the external **ERR** system variable. The function returns 0 (zero) if no match is found.

**_Example:_**

> 0040 on err(1,11,2) goto 1000,1010,1110,1020

Possible results:

|  ERR=1 |  Control transfers to line 1010.  
---|---|---  
|  ERR=11 |  Control transfers to line 1110.  
|  ERR=2 |  Control transfers to line 1020.  
|  ERR=0 |  _No match._ Control transfers to line 1000.  
  
##  Format 2

**_Return Extended Error Information_**

**ERR(**_keyword$_ [,_occurrence_]**)**

**_Where:_**

_keyword$_ |  Identifier of the error information you want returned.  
---|---  
_occurrence_ |  Option occurrence when accessing the error history, if enabled using the **['EH'](../parameters/eh.md)** system parameter. If omitted, the **_default_** error information from the last un-trapped exception is returned.  
  
This format provides additional information for diagnosing un-trapped errors. The valid keywords vary from release to release. The currently supported keywords can be found by requesting **ERR("*")** , which will return a comma-delimited list of the keywords currently supplied. As of **_PxPlus 2018_** , this list contains:

**Keyword** |  **Description**  
---|---  
ERR |  Error code  
ERX |  Extended error code _(Not Currently Used)_  
RET |  OS error code  
OSERR |  OS error message  
PROGRAM |  Program that encountered error  
ENTRYPOINT |  Entry point where execution started in program  
STNO |  Statement/Line number where error occurred  
OBJ |  Object handle if error occurred in object  
METHOD |  Entry point if error occurred within an object method  
LFA |  Last file accessed  
LFO |  Last file opened  
LASTPATH |  Pathname of last file opened  
LASTKEY |  Last key used  
MODULE |  Internal PxPlus module that trapped error  
LINE |  Line in module  
  
The information returned by the **_default_** ERR( ) function is not affected by errors that are programmatically trapped using a **SETERR** or any of the **ERR=** /**DOM=** /**BSY=** options.

**_Example:_**

> ! Display ERR("xxx") return values  
>  error_handlerpgn+";ErrorHandler"  
>  print 4/0  
>  stop  
>  !  
>  !  
> ErrorHandler:  
>  print "Un-trapped error",err,":"  
>  !  
>  for x$ from err("*") ! Process all entries in ERR information  
>  print x$,"=",err(x$)  
>  next x$  
>  !  
>  exit err

##  See Also

[**ERR Last System-Detected Error Value**](../variables/err.md)  
[**'EH' Error History Tracking**](../parameters/eh.md)  
**[Error Codes and Messages](../appendix/list_of_messages.md)**
