# Directives 

**FLUSH** |  **_Force Flush File Updates_**  
---|---  
  
##  Format

**FLUSH** (_chan_[,**ERR** =_stmtref_])

**_Where:_**

_chan_ |  Channel or logical file number of the file to be flushed to disk.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **FLUSH** directive to force the system to write all updates to a file to disk. This directive can be used to make sure that critical updates are fully written to the file specified.

#### **Note:**  
This directive is **_not supported_** on WindX-connected files.

_(The FLUSH directive was added in PxPlus v11.00.)_
