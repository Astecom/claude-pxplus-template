# Directives 

**RENAME..INDEX** |  **_Rename Keys in Keyed File_**  
---|---  
  
##  Format

**RENAME** _filename$_**INDEX** {_keynumber_**|**  _keyname_ _$_}__**TO** {_newkeyname_ _$_} [,**ERR=**_stmtref_]  
  
**_Where:_**

_filename$_ |  Name of the file from where the key will be renamed. String expression.  
---|---  
_keyname_ _$_ |  Name of the key to rename (if assigned). String expression.  
_keynumber_ |  Key number (KNO value) to rename.  
_newkeyname_ _$_ |  New key name.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**TO** |  Mandatory keyword, not case sensitive.  
  
##  Description

The **RENAME..INDEX** directive allows you to rename, or name, keys. When you need to modify existing names or add key names to an older Keyed file, use the **RENAME..INDEX** directive to change the names.

##  See Also

[**ADD INDEX Add Key to Keyed File**](add_index.md)  
[**DROP INDEX Drop Key from Keyed File**](drop_index.md)

##  Example

rename "cstfile" index 1 to "Customer_no"  
rename "cstfile" index "#2" to "Customer_Name"
