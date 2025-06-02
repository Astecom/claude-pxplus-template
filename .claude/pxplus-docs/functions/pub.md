# System Functions

**PUB( )** |  **_List Public Programs_**  
---|---  
  
##  Format

**PUB(**_index_[,**ERR=**_stmtref_]**)**

**_Where:_**

_index_ |  Index in the **ADDR** table for the entry to be returned. Numeric expression. (Base 0)  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String containing information for the program identified by _index._

##  Description

The **PUB( )** function returns a string reporting the names, starting addresses and sizes of all programs for which the **ADDR** directive is active. The information is returned as a character string containing the name and description of each program addressed.

The index indicates the relative program number in the **ADDR** table. PxPlus updates the table to account for your subsequent **ADDR** and **DROP** directives and changes index numbers accordingly. (They are not static.) PxPlus returns Error #41: Invalid integer encountered (range error or non-integer) if no entry in the **ADDR** table exists for your given index.

This table lists the contents of the string returned by the **PUB( )** function:

**Byte** |  **Contents**  
---|---  
1 to 2 |  Program size in bytes  
3 |  $01$  
4 to 13 |  Reserved for PxPlus use  
17 _+_ |  Fully qualified pathname to the program  
  
##  See Also

[**ADDR Load and Lock Program in Memory**](../directives/addr.md)  
[**DROP Removes Program from Memory**](../directives/drop.md)

##  Example

A$=pub(1)  
print A$(17) ! C:=$433A$, starts at position 17 (see below)  
print hta(A$)  
  
->run  
C:\MANUALS\PVX\TEST   
03BD0000000080C51000000000000000433A5C4D414E55414C535C5056585C54455354
