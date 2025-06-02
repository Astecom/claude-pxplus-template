# System Functions

**CHR( )** |  **_ASCII Character of Value_**  
---|---  
  
##  Format

**CHR(**_num_[,**ERR=**_stmtref_]**)**

**_Where:_**

_num_ |  Value of the character to return. Numeric expression. Range: integer from 0 to 255 (the character's number in the ASCII table).  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Single ASCII character.

##  Description

The **CHR( )** function returns a single**-** character ASCII string of the numeric expression defined by _num_. The value of _num_ must be an integer in a range from 0 to 255 (the position of the character in the ASCII table). The first printable character in the ASCII character set is the blank, $20$, which is **CHR**(32).

#### **Special * Option:**  
Using **CHR(*)** allows the programmer to access the table non-printable characters. The table consists of a string 256 bytes long where each byte contains a $00$ or $01$.  
  
$01$ indicates a printable character, and $00$ indicates non-printable. See [**DEF CHR**](../directives/def_cvs~dte~lcs~ucs.md) directive.

_(The ability to access/change the printable character tables was added in PxPlus v7.10.)_

##  See Also

[**ASC( ) Get Internal Character Value**](asc.md)

##  Example

X$=chr(65) ! (Sets X$ to "A")  
X$=chr(33) ! (Sets X$ to "!")
