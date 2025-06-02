# System Functions

**LRC( )** |  **_Longitudinal-Redundancy Check_**  
---|---  
  
##  Format

**LRC(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  Character string whose longitudinal redundancy checksum is to be calculated.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

One-byte string, longitudinal checksum.

#### **Note:**  
The **LRC( )** function is used primarily in conjunction with synchronous communications.

##  Description

The **LRC( )** function returns the longitudinal redundancy checksum of a character string. The longitudinal redundancy check of a character string is a one-byte string resulting from a logical **[XOR( )](xor.md)** comparison of all the characters in the string.

##  Example

A$=hta(lrc($0102$)) ! yields Hex 03  
A$=hta(lrc($0305$)) ! yields Hex 06
