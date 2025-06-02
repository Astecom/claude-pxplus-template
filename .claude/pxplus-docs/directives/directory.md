# Directives   
  
**DIRECTORY** |  **_Create Subdirectory_**  
---|---  
  
##  Format

**DIRECTORY**  _name$_[,**ERR=**_stmtref_]

**_Where:_**

_name$_ |  String variable contains the name of the directory to create.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **DIRECTORY** directive to create a directory within the operating system's file structure.

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. DIRECTORY "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

##  Example

directory "DATA"  
directory "WRK."+str(dec($00$+gid))  
directory "/WORK/WRK1"  
directory "/WORK/WRK1/WRK2"

#### **Note:**  
A subdirectory can only be created within an existing directory; therefore, WRK1 must exist in order to create WRK2.
