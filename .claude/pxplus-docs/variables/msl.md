# System Variables

**MSL** |  **_Length of String Matching Last MSK_**  
---|---  
  
**_String System Variable_**

##  Contents

Integer, length of string matching last **MSK( )** function

##  Description

The **MSL** variable contains a numeric value (integer) that indicates the length of the string that matched the last **MSK(** **)** function. **TCB(16)** also reports the length of the string.

##  See Also

**[MSK( ) Scan String for Mask](../functions/msk.md)**  
**[TCB( ) Return Task Information](../functions/tcb.md)**

##  Example

print msk("my name is Foxxy","[A-Z][a-z]*"),msl  
12 5
