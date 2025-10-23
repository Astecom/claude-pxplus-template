# Directives 

**DROP INDEX** |  **_Drop Key from Keyed File_**  
---|---  
  
##  Format

**DROP INDEX** {_keynumber_**|**_keyname_ _$_}__**FROM** _filespec_ [,**ERR=**_stmtref_]

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname of the file from which the key will be dropped. If using the file channel, it must be to a keyed or memory file, and if it is a keyed file, the channel must be locked.  
---|---  
**FROM** |  Mandatory keyword, not case sensitive.  
_keyname_ _$_ |  Name of the key to drop (if assigned). String expression.  
_keynumber_ |  Key number (KNO value) to drop.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(Support for using a file channel was added in PxPlus 2023 Update 1.)_

##  Description

The **DROP INDEX** directive drops keys from a PxPlus Keyed file without having to rebuild the file.

When dropping keys from a file:

  * The key is removed from the data file and the space previously occupied by the key table is made available for subsequent use within the file.
  * Only one drop can be processed against a file at one time.
  * Exclusive access to the file is required.
  * The primary key is required and cannot be dropped.



##  See Also

[**ADD INDEX Add Key to Keyed File**](add_index.md)  
[**RENAME..INDEX Rename Keys in Keyed File**](rename_index.md)

##  Example

drop index 3 from "cstfile"  
drop index CustName from "cstfile"
