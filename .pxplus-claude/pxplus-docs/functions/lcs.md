# System Functions

**LCS( )** |  **_Return Lowercase String_**  
---|---  
  
##  Format

**LCS(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  String expression whose lower case ASCII counterpart is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Lowercase counterpart of string.

##  Description

The **LCS( )** function returns the lowercase counterpart of the original string (with all uppercase alphabetic characters replaced by their corresponding lowercase characters).

##  See Also

**[UCS( ) Return Uppercase String](ucs.md)**

##  Example

input "Enter name: ",NAME$  
NAME$(2)=lcs(NAME$(2))  
NAME$(1,1)=ucs(NAME$(1,1))  
print "Name is",@(10),": ",NAME$

->run  
Enter name: SMITH  
Name is : Smith

#### **Note:**  
If you use an ***** (_asterisk_) instead of a string (i.e. LCS(*)), the function returns the 256-byte Lowercase Conversion Table.
