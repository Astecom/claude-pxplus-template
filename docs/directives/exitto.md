# Directives 

**EXITTO** |  **_End Loop, Transfer Control_**  
---|---  
  
##  Format

**EXITTO** [_stmtref_]

**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
  
##  Description

The **EXITTO** directive terminates the currently active **FOR** ... **NEXT** , **GOSUB** ... **RETURN** , **REPEAT** ... **UNTIL** or **WHILE** ... **WEND** loop prematurely and transfers control to the statement number indicated.

**EXITTO** lets you terminate one of these processes early by removing its associated entry from the top of the stack. If there is no active entry on the stack, PxPlus returns Error #27: Unexpected or incorrect WEND, RETURN, or NEXT.

When used in a compound statement, **EXITTO** must be the final directive.

##  See Also

[**FOR ..NEXT Loop While Incrementing**](for.md)  
[**GOSUB.. Execute Subroutine**](gosub.md)  
[**REPEAT ..UNTIL Repetitive Execution**](repeat.md)  
[**WHILE ..WEND Repeat Statements**](while.md)

##  Example

0010 begin  
0020 for i=1 to 10  
0030 input x  
0040 if ctl=4 \  
then exitto 0060  
0050 acc+=x  
0060 next i  
0070 if i>1 \  
then avg=acc/(i-1)  
0080 print avg
