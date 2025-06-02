# System Parameters

**'OM'** |  **_Old Style Mask_**  
---|---  
  
##  Description

Defines the behavior of the **MSK( )** function.

0 |  **MSK(** **)** supports industry standard Perl compatible RegEx.  
---|---  
1 |  **MSK(** **)** supports POSIX compatible RegEx, the same as Unix Grep.  
2 |  **MSK(** **)** supports a sub-set of POSIX compatible RegEx. **_Where:  
_**  
The **|** operator works on the character that precedes it and comes after it unless parentheses are used.  
  
**_Example:  
_**  
"cat|dog|pig" does not match "I want a cat". To match, you need to use the pattern "(cat)|(dog)|(pig)".

#### **Note** :  
This is a legacy mode retained for compatibility.  
  
##  Default

**'OM'=0**

## See Also

**[MSK( ) Scan String for Mask](../functions/msk.md)**
