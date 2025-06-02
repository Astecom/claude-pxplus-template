# Directives

**FILE** |  **_Create New File from File Descriptor_**  
---|---  
  
##  Format

**FILE** _file_info_[,**ERR=**_stmtref_]  
  
**_Where:_**

_file_info_ |  Contents provide the internal file description for the file to create. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Warning!**  
The **FILE** directive will **_not_** recreate an embedded data dictionary. When you have an embedded data dictionary, use a **PURGE** or **REFILE** directive instead to clear the data from an existing file and preserve the dictionary.

##  Description

Use the **FILE** directive to define a file based on the contents returned by the **FID( )** or **FIB( )** functions. These functions return character strings with the file type, size and format.

#### **Note 1:**  
The format of the **FID( )** value will depend on the current emulation mode you are using for PxPlus. To avoid potential problems when running in emulation modes, use the value returned from the **FIB( )** function instead of the **FID( )** function.  
  
**Note 2:**  
This directive is **_not supported_** by WindX. When you need to create files on a WindX PC, encapsulate the command in an **EXECUTE "[WDX]..."** directive.

##  See Also

**[FIB( ) Return File Information Block](../functions/fib.md)**  
**[FID( ) Return File Information Descriptor](../functions/fid.md)**  
**[PURGE Clear Data from a File](purge.md)**  
**[REFILE Clear Record from File](refile.md)**  
**[[WDX] Direct Action to Client Machine](../command_tags/wdx.htm)**

##  Example

open (2)"PRNTFL"  
F$=fid(2)  
close (2)  
erase "PRNTFL"  
file F$  
open (2)F$(25,60)
