# Directives 

**ADD INDEX** |  **_Add Key to Keyed File_**  
---|---  
  
##  Format

**ADD INDEX** _keydescription_ _$_**TO** _filespec_ [,**ERR=**_stmtref_]

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname of the file to which the key will be added. If using the file channel, it must be to a keyed or memory file, and if it is a keyed file, the channel must be locked.  
---|---  
_keydescription_ _$_ |  Description of the key using the same format as **KEYED** statement.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**TO** |  Mandatory keyword, not case-sensitive.  
  
_(Support for using a file channel was added in PxPlus 2023 Update 1.)_

##  Description

The **ADD INDEX** directive allows keys to be added to a PxPlus Keyed file without having to rebuild the file. When adding keys to the file:

  * PxPlus builds keys on the fly.
  * Exclusive access to the file is required.
  * Keys are assigned the next available key number.
  * When adding a unique alternate key, the ADD generates an error, and the key is not defined if duplicate keys are in the desired index.
  * Only one key can be added at any one time (**ADD** or **DROP** cannot execute at the same time and will fail with an error zero).
  * The key names are case insensitive (key will be converted to uppercase characters).
  * The first character of the key name cannot be a "#" as this is reserved for access to the keys by key number.
  * If a key name is specified, it cannot be null; e.g. "".
  * Spaces are valid and significant. A name of " " (space) is valid and is not the same as a key of " " (space space).



#### **Note:**  
A total key length that exceeds 240 characters will result in Error #80: Invalid key definition.

##  See Also

[**DROP INDEX Drop Key from Keyed File**](drop_index.md)  
[**RENAME..INDEX Rename Keys in Keyed File**](rename_index.md)

##  Example

add index ["KeyName":2:1:30]+[1:1:6] to "cstfile"
