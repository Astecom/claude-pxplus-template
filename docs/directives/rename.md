# Directives 

**RENAME** |  **_Change a File's Name_**  
---|---  
  
##  Format

**RENAME**  _old_name_ _$_{, **|** **TO}**  _new_name_ _$_**[,OPT=**_options$_**] [** ,**ERR=**_stmtref_**]**

**_Where:_**

_new_name_ _$_ |  New name for the file. String expression.  
---|---  
_old_name_ _$_ |  Name of an existing file to be renamed. String expression.  
_options$_ |  Options to apply to the **RENAME**. Currently, the only valid option is "ALLSEG" to rename all segments of a multi-segmented file.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**TO** |  Keyword, not case-sensitive (a comma may substitute for **TO**).  
  
##  Description

Use the **RENAME** directive to change the name of an existing file. The first string must contain the current name of the file. (The file must already exist.) Use the second string expression for the new name of the file.

When the **'[OR](../parameters/or.md)**' system parameter is set or the file to be renamed is a remote file accessed via the PxServer, the **RENAME** directive will assume that the new filename contains a fully expanded OS pathname to the same directory as the old filename. If the path is omitted from the existing file name, the standard PxPlus search rules will apply. If the path is omitted from the new name, the renamed file will be located in the local working directory.

#### **Note:**  
The new filename must not duplicate an existing filename. You must have exclusive access to the file you are renaming. PxPlus is subject to OS rules for the renaming of files.  
  
If an operating system stores files by _inode_ number, it may permit the renaming of active files because it is the _inode_ that is in use and not the name associated with it. Other operating systems require that files not be in use before they can be renamed. Some operating systems do not allow you to rename a file to a different directory.

## Multi-Segment Files

If you want to rename a file that may have multiple segments, you need to either include an **,OPT="ALLSEG"** or enable the **'[+E](../parameters/pluse.md)'** system parameter. This will assure all segments are renamed to correspond to the primary file's new name.

Prior renaming the main file, the system will verify that all segments can be renamed without conflict. If a file name conflict occurs for any segment, an error will be generated and no files will be renamed.

_(Renaming related segments was added in PxPlus v7.00.)_

##  Example

erase "ordlst"  
rename "ordcur","ordlst"  
keyed "ordcur",6  
  
rename "OLDFILE" to "NEWFILE"
