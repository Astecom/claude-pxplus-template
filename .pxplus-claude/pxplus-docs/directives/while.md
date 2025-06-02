# Directives 

**WHILE .. WEND** |  **_Repeat Statements_**  
---|---  
  
##  Format

**WHILE** _expression  
..._**  
WEND**

**_Where:_**

_expression_ |  An expression whose value determines if the condition is True or False. In _numeric_ expressions, a zero value will indicate FALSE; otherwise, any non-zero value will indicate TRUE. In _string_ expressions, a null (empty or blank) value will indicate FALSE; otherwise, any non-null value will indicate TRUE.  
---|---  
  
_(The ability to use a string expression was added in PxPlus v10.)_

##  Description

Use the **WHILE** directive for conditional looping in a program. PxPlus executes all directives between a **WHILE** directive and the next **WEND** directive repeatedly until the value of the numeric expression is 0 (_zero_).

When PxPlus encounters a **WHILE** directive, it evaluates the numeric expression. If the _expression_ returns a TRUE value (non-zero for numeric, non-null for string), PxPlus continues execution until a corresponding **WEND** directive is encountered, at which point the numeric expression is re-evaluated. The system continues to loop back to the directive following the **WHILE** directive until the expression yields a FALSE value. At this point, execution proceeds to the first directive following the **WHILE** directive's corresponding **WEND** directive and terminates the loop. Then, control transfers to the statement following the **WEND**.

If the system encounters a **WEND** directive but is not currently processing a **WHILE** /**WEND** loop, it returns an Error #27: Unexpected or incorrect WEND, RETURN, or NEXT. All **FOR/NEXT** , **GOSUB/RETURN** , and **WHILE/WEND** sequences executed within the **WHILE/WEND** loop must be completed.

Use a conditional **EXITTO** or **BREAK** to exit a **WHILE** /**WEND** loop early.

##  See Also

[**BREAK Immediate Exit of Loop**](break.md)  
[**CONTINUE Initiates Next Iteration of Loop**](continue.md)  
[**EXITTO End Loop, Transfer Control**](exitto.md)  
[**Structured Error Handling Using ON ERR**](on_err.md)

##  Example

0100 while A$<>"E"  
0110 let K$=key(1,end=1000)  
0120 read (1)N$  
0130 print "Key: ",K$," Name: ",N$  
0140 input "Delete (Y/N):",A$  
0150 if A$="Y" then remove (1,key=K$)  
0160 wend  
0170 stop  
1000 print "End-of-file..."  
1010 exitto 0170
