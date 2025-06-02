# System Functions

**ATH( )** |  **_Convert Hex_**  
---|---  
  
##  Format

**ATH(**_hex_string_ _$_[,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_hex_string_ _$_ |  Hex string expression to be converted to ASCII. The string must be an even number of bytes in length and consist of only the characters 0 (zero) through 9 and A through F.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

ASCII value corresponding to string of Hex data.

##  Description

The **ATH( )** function converts string containing valid Hexadecimal data to ASCII. The ASCII string returned by the **ATH( )** function is the converted value of each set of two Hex characters to one ASCII character.

##  Example

h$="414243"  
?ath(h$)  
ABC  
  
ath ("414240") ! yields AB@ (Hex 40= "@")
