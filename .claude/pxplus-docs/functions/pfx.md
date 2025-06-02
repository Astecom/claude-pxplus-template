# System Functions

**PFX( )** |  **_Return Prefix Value_**  
---|---  
  
##  Formats

1. |  _Return Specific Prefix_ : |  **PFX(**_num_**)[** ,**ERR=**_stmtref_**])**  
---|---|---  
2. |  _Return Prefix for PGN_ : |  **PFX(PGN[,ERR=**_stmtref_**])**  
  
**_Where:_**

_num_ |  **PREFIX** number to use. Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, current value of given **PREFIX**.

##  Description

The **PFX( )** function returns the current value of your given prefix number. If no prefix has been defined, the function will return a null string. If your specific prefix has been disabled, PxPlus returns an Error #14: Invalid I/O request for file state. (Use an **ERR=** option to transfer control on the error.)

You can obtain the  [**PREFIX FILE**](../directives/prefix.htm#Mark10) value by using PFX(-1). The **PFX** system variable contains the current PREFIX(0) value. 

The **PFX( )** function also returns the **[PREFIX DIRECTORY](../directives/prefix.htm#virtual)** values:

**_Example:_**

> print pfx("*usr")  
>   
>  C:\Users\Guest\AppData\Roaming\PxPlus

You can only retrieve entries for which you know the matching string.

##  See Also

[**PREFIX Set File Search Rules**](../directives/prefix.md)  
[**PFX Current Prefix Setting**](../variables/pfx.md)

##  Example

4000 rem  
4010 let I=-1  
4020 let X$=pfx(I,err=4040)  
4030 print "PREFIX("+str(I)+")=",X$  
4040 if I<=8 then let I=I+1; goto 4020  
4050 print "PREFIX PGN=",pfx(pgn);stop  
  
->goto 4000  
->run  
PREFIX(-1)=  
PREFIX(0)=\OTHER\===\\\OTHER\CUST\CASHRCPT\\\OTHER\CUST\MSC\\\OTHER\CUST\SALES\  
PREFIX(2)=\MANUALS\===\\\PVX\TESTS\  
PREFIX(3)=  
PREFIX(4)=  
PREFIX(5)=  
PREFIX(6)=  
PREFIX(7)=  
PREFIX(8)=  
PREFIX(9)=  
PREFIX PGN=\OTHER\PGMS\===\\\OTHER\PGMS\PVX\\\OTHER\PGMS\CUST\
