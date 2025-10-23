# Directives 

**REFILE** |  **_Clear Record from File_**  
---|---  
  
##  Format

**REFILE [ TABLE ]**_filename$_ **[** ,**OPT=**_options$_**] [** ,**ERR=**_stmtref_**]**

**_Where:_**

_filename$_ |  Name of the file to clear. String expression.  
---|---  
_options$_ |  Options to apply to the **REFILE**. Currently, the only valid option is "ALLSEG" to erase all segments of a multi-segmented file.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(The TABLE option was added in PxPlus v6.30.)_

##  Description

Use the **REFILE** directive to erase all data in a specified file. If you use the **REFILE** directive to erase a file, the file still exists in the system but contains no data. (The system returns disk space to the system while preserving the lock.) Any **READ** directives for the file will return an End-of-File message.

Using either the **REFILE** or **PURGE** directive is faster than deleting the file and recreating it.

If the given filename does not already exist, the system returns an Error #12: File does not exist (or already exists). If the file is in use by another user, the application will receive an Error #0: Record/file busy.

Unlike the **PURGE** directive, the **REFILE** directive works if the file is not opened.

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. REFILE "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

##  TABLE Option

The keyword **TABLE** before the _filename$_ indicates that the value provided is the logical table name for the file as defined in the currently opened data dictionary file. See [**OPEN DICTIONARY**](open.htm#Dictionary).

_(The TABLE option was added in PxPlus v6.30.)_

## Multi-Segment Files

If you want to erase the contents of a file that may have multiple segments, you need to either include an **,OPT="ALLSEG"** or enable the **['+E'](../parameters/pluse.md)** system parameter. This will assure all segments are deleted from the system.

_(The REFILE logic to clear related segments was added in PxPlus v7.00.)_

##  See Also

[**LOCK Reserve File for Exclusive Use**](lock.md)  
[**PURGE Clear Data from a File**](purge.md)  
**['SK' Shrink Keyed Files](../parameters/sk.md)**

##  Example

refile "PRNTFL" ! Pre-clear data file  
open (2)"PRNTFL"  
lock (2)  
print (2)'FF',"Date:",day,@(40),TTL$
