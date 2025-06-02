# Directives

**DISABLE** |  **_Disable Use of Prefix Table Entry_**  
---|---  
  
##  Format

**DISABLE** (_prefix_[,**ERR=**_stmtref_])  
  
**_Where:_**

_prefix_ |  Numeric value of the prefix to disable. Numeric expression, integer.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **DISABLE** directive to notify PxPlus that you do not want to use a given prefix table entry. This directive is used primarily in the conversion to or from old Business Basic languages where you could disable a specific disk drive.

To re**-** enable the prefix, use the **ENABLE** directive.

#### **Note:**  
This directive is included in PxPlus for compatibility with other languages.

##  See Also

**[ENABLE Re-Enable Use of Prefix Table Entry](enable.md)**  
**[PREFIX Set File Search Rules](prefix.md)**

##  Example

prefix (1)"/disk1/data/"  
prefix (2)"/disk2/data/"  
disable (1)

This causes PxPlus to ignore prefix (1).
