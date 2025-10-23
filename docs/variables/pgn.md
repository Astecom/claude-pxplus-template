# System Variables

**PGN** |  **_Current Program Pathname_**  
---|---  
  
**_String System Variable_**

##  Contents

String, name of currently loaded program

##  Description

The **PGN** variable contains the name of the currently loaded program, complete with its full operating system pathname.

#### **Note:**  
**_One exception to the above:_** If you have the **'OP'** (original program) system parameter set to **_On_** , **PGN** returns only the program name (i.e. without an expanded pathname).

##  See Also

**['OP' Return Original Program Name](../parameters/op.md)**

##  Example

print pgn  
set_param 'OP'  
print pgn  
  
->run  
C:\PVX\MANUAL\TST\TST_EGS TST_EGS
