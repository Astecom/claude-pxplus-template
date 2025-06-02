# System Parameters

**'ZP'** |  **_Accept Zero-Length Programs_**  
---|---  
  
##  Description

Ignores Error #18: Program not loaded/Invalid program format. As of version 4.20, empty program files are considered to be valid.

##  Default

**_Off_** \- **RUN** , **CALL** , **LOAD** or **PERFORM** commands with an empty program file generate an Error #18.

## See Also

**[RUN Transfer and Execute a Program](../directives/run.md)**  
**[CALL Transfer to Subprogram](../directives/call.md)**  
**[LOAD Read Program into Memory](../directives/load.md)**  
**[PERFORM Call Subprogram, Share Variables](../directives/perform.md)**
