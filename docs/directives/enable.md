# Directives

**ENABLE** |  **_Re-enable Use of Prefix Table Entry_**  
---|---  
  
##  Format

**ENABLE** (_prefix_[,**ERR=**_stmtref_])  
  
**_Where:_**

_prefix_ |  Numeric value of the **PREFIX** to re**-** enable. Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
This directive is used primarily in the conversion to or from old Business Basic languages where you could **DISABLE** and **ENABLE** a specific disk drive.

##  Description

Use the **ENABLE** directive to notify PxPlus that you want a given prefix reactivated. To disable a prefix, use the **DISABLE** directive.

##  See Also

**[DISABLE Disable Use of Prefix Table Entry](disable.md)**  
**[PREFIX Set File Search Rules](prefix.md)**

##  Example

prefix (1)"/disk1/data/"  
disable (1) ! Tell PxPlus to ignore PREFIX (1)  
enable (1) ! Reactivate PREFIX (1)
