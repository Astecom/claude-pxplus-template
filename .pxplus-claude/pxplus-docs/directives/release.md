# Directives 

**RELEASE** |  **_Terminate PxPlus Session_**  
---|---  
  
##  Format

**RELEASE** [_num_]  
  
** _Where_ _:_**

_num_ |  Status to be returned to the operating system when PxPlus terminates. Optional. Numeric expression.  
---|---  
  
##  Description

Use the **RELEASE** directive to terminate a PxPlus session and return to the operating system. The numeric value is returned to the OS as a termination value, allowing for external testing of error conditions; e.g. by the system shell processor or using a 'C' program.

When you use the **RELEASE** directive in a compound statement, it must be the final directive.

#### **Note:**  
The numeric value _num_ is ignored on Windows platforms.

##  See Also

[**BYE Terminate PxPlus Session**](bye.md)  
[**QUIT Terminate PxPlus Session**](quit.md)

##  Example

release 101
