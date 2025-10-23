# System Parameters

**'NN'** |  **_No Line Numbers as References_**  
---|---  
  
##  Description

Invalidates statements that reference line numbers; e.g. GOTO 1050 is not allowed. PxPlus returns Error #85: Program does not support line numbers. A statement label is required; i.e. GOTO Label_1050.

##  Default

**_Off_** \- Statements can reference line numbers. (No Error #85)
