# Directives

**BYE** |  **_Terminate PxPlus Session_**  
---|---  
  
##  Format

**BYE**

##  Description

Use the **BYE** directive to end a PxPlus session and return to the operating system.

If the **ERR** system variable has a value other than zero (i.e. an error has occurred), then the operating system is informed that an error has occurred within PxPlus. This allows you to do external testing of error conditions.

The PxPlus compiler converts the **BYE** directive into a **QUIT** directive. When you use it in a compound statement, the **BYE** directive must be the final directive.

##  See Also

**[QUIT Terminate PxPlus Session](quit.md)**  
**[RELEASE Terminate PxPlus Session](release.md)**
