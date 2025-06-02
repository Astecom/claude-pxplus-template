# System Functions

**CRC( )** |  **_Cyclic-Redundancy-Check_**  
---|---  
  
##  Format

**CRC(**_chars$_[,_basis$_][,_type_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_chars$_ |  String of characters on which to calculate a cyclic redundancy check.  
---|---  
_basis$_ |  Optional _initial_ value to be used as the basis of the CRC. It must be _two_ characters long (CRC-16 ) or _four_ characters long (CRC-32) if included in the statement. (**_Default:_** $0000$)  
_type_ |  Optional numeric used to determine if a 16-bit (CRC-16) or 32-bit (CRC-32) cyclic redundancy checksum should be calculated. Only accepted values are 16 or 32. (**_Default:_** 16)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The **CRC( )** function is used primarily for generating transmission checksums on synchronous communications.

##  Returns

Cyclic redundancy checksum (in internal format).

##  Description

The **CRC( )** function returns the 16-bit or 32-bit cyclic redundancy checksum of a string of characters. The default is the 16-bit cyclic redundancy checksum.

Use the initial value (_basis$_) to generate an overall **CRC( )** of multiple strings. See the **Example** below where CRC(B$) with an initial value of CRC(A$) will be the same as CRC(A$+B$).

If you omit the initial value, PxPlus uses the default value $0000$.

##  Example

A$="Hello",B$="World"  
0010 let C$=crc(A$)  
0020 let C$=crc(B$,C$)  
  
yields the same result as:  
  
0030 let C$=crc(A$+B$)

_That is:_

**HTA(C$)** |  **Value**  
---|---  
After line 0010 |  $F353$  
After line 0020 |  $6053$  
After line 0030 |  $6053$
