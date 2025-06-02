# System Functions

**XEQ( )** |  **_In-line Subprogram Execute_**  
---|---  
  
##  Format

**XEQ(**_subprog_ _$_ ,_expression_ , [ _arglist_ __ |** *** ] ,[,**ERR=**_stmtref_]**)**

**_Where:_**

***** |  _(Asterisk)_ Indicates that program will be PERFORMed rather than CALLed; thus, all variables will be passed.  
---|---  
_arglist_ |  Comma-separated list of arguments to pass to the subprogram.  
_expression_ |  Expression will be evaluated after the call and used as the return value for the function.  
_subprog_ _$_ |  Name of the subprogram to call. Maximum string size 8KB.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Evaluated value in expression after executing in-line **CALL** or **PERFORM**.

##  Description

The **XEQ( )** function executes an in-line **CALL** or**PERFORM** directive. When PxPlus encounters the **XEQ( )** function, the subprogram named in the function will be CALLed with any arguments supplied. If an ***** (_asterisk_) is specified, the subprogram is PERFORMed instead. After the subprogram exits, the **XEQ( )** function evaluates the expression and returns it.

The primary advantage of **XEQ( )** is in single-line Global functions. Consider the following:

**_Was:_** |  0010 CALL "GETDTE",DT,DATE$  
---|---  
|  0020 PRINT "Date:",DATE$  
**_Now:_** |  0010 PRINT "Date:",XEQ("GETDTE",_D$,DT,_D$)  
  
Or you could define a Global function in a start-up program:  
|  DEF FN%DTE$(_DT)=XEQ("GETDTE",_D$,_DT,_D$)  
**_Then:_** |  0010 PRINT "Date:",FN%DTE$(DT)  
  
_(The ability to have the XEQ function PERFORM a program instead of CALL was added in PxPlus v 7.00.)_
