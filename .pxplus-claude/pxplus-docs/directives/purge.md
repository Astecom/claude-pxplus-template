# Directives 

**PURGE** |  **_Clear Data from a File_**  
---|---  
  
##  Format

**PURGE** (_chan_[,**ERR=**_stmtref_])

**_Where_** _:_

_chan_ _$_ |  Channel or logical file number of the file to be purged.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **PURGE** directive to erase all data from a given file number. Before you can execute the **PURGE** directive, the file must be opened and locked. A file erased using a **PURGE** directive still exists in the system but contains no data. (The system returns disk space to the system while preserving the lock.) Any **READ** directives for a purged file return an End-of-File status.

Using **PURGE** (or **REFILE**) is faster than deleting the file and recreating it.

#### **Note:**  
Under WindX, you can use EXECUTE "[WDX]..." to encapsulate a directive that is not supported across a WindX connection. See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm).

## Multi-Segment Files

If you want to erase the contents of a file that may have multiple segments, you should make sure that the **['+E'](../parameters/pluse.md)** system parameter is enabled. This will assure all segments are deleted from the system.

_(The ability to automatically purge related segments was added in PxPlus v7.00.)_

##  See Also

[**REFILE Clear Record from File**](refile.md)  
[**LOCK Reserve File for Exclusive Use**](lock.md)  
**['SK' Shrink Keyed Files](../parameters/sk.md)**

##  Example

open (2)"PRNTFL"  
lock (2)  
purge (2)  
write (2)tim,day
