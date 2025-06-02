# System Functions

**PGM( )** |  **_Return Program Line_**  
---|---  
  
##  Format

**PGM(**_lineno_[,_prog_level_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_lineno_ |  Statement line number. Numeric expression. If between integer from 1 and 64999, defines line number. -1, -2, or -3 returns program names instead. See **[Description](pgm.htm#Mark4)**.  
---|---  
_prog_level_ |  Optional numeric value indicating which program level to return.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, compiled format of statement.

##  Description

The **PGM( )** function returns a string containing the internal (compiled) format of a given program statement number. If the line number is -1, the main (level 1) program name is returned; -2 returns the current program name, and -3 returns the complete name of the program as specified on the **CALL** /**LOAD** /**PERFORM** or **RUN**.

If the statement number does not exist and an **ERR=** option is specified, PxPlus returns an Error #21: Statement number is invalid and transfers control to _stmtref_. If the statement number does not exist and the **ERR=** option is omitted, PxPlus returns the next higher statement.

A typical occasion to use the _prog_level_ would be to obtain lines from programs higher in the call stack, such as X$=lst(pgm(1,tcb(12)-1)), which would return the first line of the calling program.

##  Example

The following examples illustrate different uses for the **PGM( )** function:

**_Example 1:_**

> 1030 SWAPTST:  
>  2:  
>  2:A$=pgm(-1)  
>  2:B$=pgm(-2)  
>  2:print A$," | ",B$  
>   
>  C:\OTHER\PGM\VX_MAINPR | C:\OTHER\PGM\PVX_SUBPR

**_Example 2:_**

> 0010 ! testpgm.-3  
>  0020 call pgn+";label1;additional info"  
>  0030 stop  
>  0040 LABEL1:  
>  0050 print "pgm(-3)='",pgm(-3),"**'** "  
>  0060 exit  
>   
> pgm(-3)='C:\PVX\testpgm.-3;label1;additional info'

**_Example 3:_**

> 0380 rem  
>  0390 input "Enter statement to display OR <F4> to Stop: ",A  
>  0400 if ctl<>4 then let X$=pgm(A,err=0440) else goto 0430  
>  0410 print lst(X$)  
>  0420 goto 0390  
>  0430 print "DONE"; stop  
>  0440 print "Error Transfer Works"; stop  
>  64999 print "Cannot find statement"; end  
>   
>  ->run  
>  Enter statement to display OR <F4> to Stop: 400  
>  0400 if ctl<>4 then let X$=pgm(A,err=0440) else goto 0430  
>  Enter statement to display OR <F4> to Stop: 7000  
>  64999 print "Cannot find statement"; end  
>  Enter statement to display OR <F4> to Stop: <F4> (not printable)  
>  DONE  
>   
>  ->run  
>  Enter statement to display OR <F4> to Stop: 65999  
>  Error Transfer Works
