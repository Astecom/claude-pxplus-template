# System Functions

**MID( )** |  **_Return Substring_**  
---|---  
  
##  Format

**MID(**_string$_ ,_offset_[,_len_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_len_ |  Length of the substring.  
---|---  
_offset_ |  Starting position of the substring. Numeric expression, integer. If the integer is negative, the offset is taken from the end of the string.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  String expression whose hash value is to be returned.  
  
##  Returns

Extracted portion of string (similar to substring).

##  Description

Use the **MID( )** function to extract a portion of a string. Using this function is similar to using a substring except that it can be used directly with the return value of a function, variable or expression:

> if mid(mse,22,1)>$00$ and mid(mse,22,1)<$FF$ \  
>  then %WDX$="[WDX]"

In addition, if the offset is negative, PxPlus uses it as an offset from the end of the string. For example, mid(X$,-1) is the last character of X$. If the length is negative, then PxPlus uses it as the number of characters preceding the offset; that is, mid("ABCD",-1,-1) returns C (the first character preceding the last character) and mid("abcde",-2,-4) yields abc.

By default, if this function is passed an invalid offset, it returns a null string. If passed an invalid length, then it returns the rest of the string.

##  Example

F_KSZ=dec($00$+mid(fid(0),11,1))
