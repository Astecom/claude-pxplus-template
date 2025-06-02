# Directives

**WEND** |  **_End WHILE Loop_**  
---|---  
  
##  Format

**WEND**

#### **Note:**  
For complete syntax, see **[WHILE..WEND Repeat Statements](while.md)**.

##  Description

The **WEND** directive marks the end of a **WHILE** /**WEND** loop. When PxPlus reaches the **WEND** directive, the expression defined in the currently active **WHILE** is re-evaluated.

If the result of the evaluation is not zero, control is returned to the directive following the **WHILE**. If the value is 0 (false), control transfers to the directive following the **WEND**.

##  See Also

**[WHILE..WEND Repeat Statements](while.md)**

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
