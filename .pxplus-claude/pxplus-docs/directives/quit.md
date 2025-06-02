# Directives

**QUIT** |  **_Terminate PxPlus Session_**  
---|---  
  
##  Format

**QUIT**

##  Description

Use the **QUIT** directive to terminate a PxPlus session and return to the operating system. If the **ERR** variable's value is not zero (i.e. an error has occurred), then the operating system is informed that an error has occurred within PxPlus. This allows you to do external testing of error conditions.

When you use **QUIT** in a compound statement, it must be the final directive.

##  See Also

**[BYE Terminate PxPlus Session](bye.md)**  
**[RELEASE Terminate PxPlus Session](release.md)**

##  Example

if ctl=4 \  
then quit  
save  
quit
