# Directives 

**ERASE** |  **_Delete File/Directory from System_**  
---|---  
  
##  Format

**ERASE[ TABLE]**_name$_**[** ,**OPT=**_options$_**] [** ,**ERR=**_stmtref_ __**]**

**_Where:_**

_name$_ |  Name of file or directory to be deleted from the system. String expression.  
---|---  
_options$_ |  Options to apply to the **ERASE**. Currently the only valid option is "ALLSEG" to erase all segments of a multi-segmented file.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Restrictions:  
** A directory can only be deleted if it does not contain any files. PxPlus is subject to OS rules for the deletion of files or directories. In some operating systems, the **ERASE** directive is not accepted and will not delete the directory.

##  Description

Use the **ERASE** directive to delete the file or directory you name. All disk space that was used by the file or directory is returned to the system. If you erase a file, all data in the file is lost.

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. ERASE "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

_(The TABLE option was added in PxPlus v6.30.)  
(The ERASE logic to delete related segments was added in PxPlus v7.00.)_

##  TABLE Option

The keyword **TABLE** before the _name$_ indicates that the value provided is the logical table name for the file as defined in the currently opened Data Dictionary file. See [**OPEN DICTIONARY**](open.htm#Dictionary).

## Multi-Segment Files

If you want to erase the contents of a file that may have multiple segments you need to either include an ,OPT="ALLSEG" or enable the **['+E'](../parameters/pluse.md)** system parameter. This will assure all segments are deleted from the system.

##  Example

0010 erase "PRNTFL"  
0030 erase "SRTFL1",err=0040
