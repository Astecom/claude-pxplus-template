# Directives

**SETCTL** |  **_GOSUB on CTL Event_**  
---|---  
  
##  Format

**SETCTL** _ctl_id:stmtref_  
  
**_Where:_**

_ctl_id_ |  CTL value to intercept. Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

When PxPlus executes the **SETCTL** directive, it intercepts CTL values on **INPUT** statements and transfers control via a **GOSUB** to the specified line or statement label. On completion of the subroutine (e.g. on a **RETURN**), control will pass back to the **INPUT** statement where the event was intercepted.

To reset a **SETCTL** , set _stmtref_ to 0000. If _stmtref_ = 0000, the logic to intercept the CTL value is deleted.

#### **Note:**  
**SETCTL** is only valid for the program it was executed in, not any subsequent programs (e.g. those initiated through **CALL** , **PERFORM** or **RUN** directives).

##  See Also

**[GOSUB.. Execute Subroutine](gosub.md)**  
**[CTL Control Code: Key to End Input](../variables/ctl.md)**

##  Example

0010 setctl 3:2000  
0020 setctl 4:9000  
0100 input (0,err=0100)@(x,y),"Enter Name:",A$  
0110 stop  
2000 ! Refresh screen  
2010 print 'RS',; return  
9000 ! Exit routine  
9010 exitto 9900  
9900 end

In the above example, whenever the CTL=3 on the **INPUT** statement (i.e. the user hits the F3 key), control is passed to the subroutine at line 2000. When the **RETURN** statement is executed, control passes back to the line that contained the **INPUT** statement.
