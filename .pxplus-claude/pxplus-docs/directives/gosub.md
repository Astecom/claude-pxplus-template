# Directives 

**GOSUB..RETURN** |  **_Execute Subroutine_**  
---|---  
  
##  Format

**GOSUB**  _stmtref_ **[WITH**  _variable=value,_ ... **]**

**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_variable_ |  Variable (string or numeric) to be set prior execution of the subroutine. The original value of the variable will be saved and restored when the subroutine **RETURN** s.  
_value_ |  Value (literal or expression) to load into the _variable._  
  
##  Description

Use **GOSUB** to access a subroutine embedded in your current program. The current location in the program is saved on a stack, and control is passed to the statement number or label you specify (or if no statement exists with the number specified, to the next higher statement). PxPlus continues execution from there until a **RETURN** is executed. Then, it returns control to the position saved on the stack.

If you want to exit from a **GOSUB** subroutine without returning to the calling point, you can use the **EXITTO** directive to remove the return point from the stack. You must use either a **RETURN** or an **EXITTO** directive to terminate each **GOSUB** subroutine. 

Do not place a **RETURN** directive inside a **FOR** /**NEXT** loop or a **WHILE** /**WEND** loop.

There is no pre-set limit (apart from memory space) to the number of **GOSUB** /**RETURN** entries that you can have on the stack.

#### **Note:**  
The [**BEGIN**](begin.md), [**CLEAR**](clear.md), [**RESET**](reset.md), [**STOP**](stop.md) and [**END**](end.md) directives reset all entries in the **GOSUB/RETURN** stack.

_(Support for a WITH clause to pre-set variables prior running the subroutine was added in PxPlus v10.10.)_

##  See Also

[**EXITTO End Loop, Transfer Control**](exitto.md)  
[**RETURN Return from a Subroutine**](return.md)  
[**Structured Error Handling Using ON ERR**](on_err.md)

##  Example

D$="",D1$="",D2$=""  
/  
0100 input "Enter starting date DD/MM/YY: ",D$  
0110 gosub 1000  
0120 let D1$=D$  
0130 input "Enter ending date DD/MM/YY: ",D$  
0140 gosub 1000  
0150 let D2$=D$  
0160 print "DONE"; stop  
1000 rem Subroutine  
1010 if len(D$)<>8 then goto 1090  
1020 if D$(3,1)<>"/" or D$(6,1)<>"/" then goto 1090  
1030 let D=num(D$(1,2),err=1090),M=num(D$(4,2),err=1090),Y=num(D$(7,2),err=1090)  
1040 if D<1 or D>31 then goto 1090  
1050 if M<1 or M>12 then goto 1090  
1060 return  
1090 print "Invalid. Restart.."  
1100 exitto 0100  
  
->run  
Enter starting date DD/MM/YY: 05/03/99  
Enter ending date DD/MM/YY: 31/03/99  
DONE
