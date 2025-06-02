# System Variables

**CTL** |  **_Control Code: Key to End Input_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, end input code

##  Description

The **CTL** variable contains a numeric code (integer) that represents a signal of user input from the keyboard or mouse. From the keyboard, this code represents how the user ended the last INPUT statement.

**Value** |  **Represents**  
---|---  
0 |  Enter key (normal)  
1 - 4 |  F1 to F4 keys  
5 |  Input terminated due to SIZ= option  
6 - 12 |  F6 to F12 keys  
> 12 |  Positive CTL codes (in the range 0 to 32767) represent function keys, as well as user-defined control signals that are to be returned to the application  
< 0 |  Negative CTL codes are handled internally by PxPlus (see [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md))
