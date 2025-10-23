# Mnemonics 

**'+S' & '-S'** |  **_Substitute Solid Lines On/Off_**  
---|---  
  
**Behaviour _or_ GUI Printer**

##  Format

_Substitute Solid Lines:_**'+S'**  
_  
Do Not Substitute:_**'-S'**

##  Description

When you use **'+S'** , PxPlus automatically replaces two or more occurrences of the **_** (_underscore_), **-** (_dash_) or **=** (_equals sign_) with solid underlines in graphics mode when printing to ***WINPRT***. This only applies to fields that are printed separately. (Primarily for use in legacy code where these characters were used in place of solid lines.) Use **'-S'** to disable **'+S'**.

#### **Note:**  
This is not for use on display devices.

## See Also

**[*WINPRT* Windows Printing](../file_handling/~winprt~.md)**

##  Example

0010 dim A$(10,"_"),B$(10,"-"),C$(10,"=")  
0020 let CHAN=unt; open (CHAN,err=*end)"*winprt*"  
0030 print (CHAN)'font'("MS Sans Serif",1),'DF',  
0040 print (CHAN)'-S',@(0),A$,@(12),B$,@(24),C$  
0050 print (CHAN)'+S',@(0),A$,@(12),B$,@(24),C$  
0060 print (CHAN)@(0),A$+" "+B$+" "+C$

In this example, PxPlus will only print solid lines when it executes line 0050. It will neither print solid lines for line 0040 (with '-S') nor for line 0060 (where the string expression does not exclusively contain underscores, dashes and/or equals signs).
