# System Functions

**UCS( )** |  **_Return Uppercase String_**  
---|---  
  
##  Format

**UCS(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_string$_ |  String expression whose uppercase ASCII counterpart is to be returned.  
  
##  Returns

Uppercase string equivalent of lowercase string.

##  Description

The **UCS( )** function replaces all lowercase ASCII characters in a given string with their corresponding uppercase values.

#### **Note:**  
If an ***** (_asterisk_) is passed to the **UCS( )** function instead of a string, the function returns the 256-byte Uppercase Conversion Table.

##  See Also

**[LCS( ) Return Lowercase String](lcs.md)**

##  Example

input "Enter name: ",NAME$  
NAME$(2)=lcs(NAME$(2))  
NAME$(1,1)=ucs(NAME$(1,1))  
print "Name is: ",NAME$  
  
->run  
Enter name: rOBERT Name is: Robert
