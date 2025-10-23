# Utility Routines

***INIFILE** |  **_Update INI File_**  
---|---  
  
## Formats

1. |  _Read from an INI File:_ |  **CALL "*inifile;READ"** , [_file_id_ _$_], [_sect_id_ _$_], [_item_id_ _$_], [_default$_], _value$_ , [_max_len_]  
---|---|---  
2. |  _Write to an INI File:_ |  **CALL "*inifile;WRITE"** , [_file_id_ _$_], _sect_id_ _$_ , _item_id_ _$_ , _value$_  
3. |  _Remove an Entry from an INI File:_ |  **CALL "*inifile;REMOVE"** , [_file_id_ _$_], _sect_id_ _$_ , [_item_id_ _$_] __ ** _OR_**  
**CALL "*inifile;DELETE"** , [_file_id_ _$_], _sect_id_ _$_ , [_item_id_ _$_]  
  
**_Where:_**

__ |  _file_id_ _$_ |  Path and name of the INI file to be read, created or modified. (If not specified, this defaults to **_pxplus.ini_**.)  
---|---|---  
__ |  _sect_id_ _$_ |  Name of the section in the specified INI file that is to be read, created, modified or deleted. (If not specified on a **READ** , then **_all_** section names are returned.)  
__ |  _item_id_ _$_ |  Name of the item in the specified section that is to be read, created, modified or deleted. (If not specified on a **READ** , then **_all_** item names in the section are returned. If not specified on a **REMOVE/DELETE** , then **_all_** items in the section are removed.)  
__ |  _default$_ |  Default value to be returned if the specified section and/or item does not exist in the INI file.  
__ |  _value$_ |  On a **READ** , this returns the value that is read in the INI file for the specified section and/or item. On a **WRITE** , this is the value written to the INI file for the specified section and/or item.  
__ |  _max_len_ |  Numeric value that contains the maximum length of the value returned via _value$_. (Default is 8192.)  
  
## Description

This system utility allows you to read, create and modify INI files when running on Windows and UNIX/Linux.

You can read item values, section names or the item names in a section. You can also write a new item value, and if the specified section does not exist, it is created. You can modify an existing item value, as well as remove an existing item or an entire section.

If you are writing to an INI file that does not exist, it is created by the utility using the path and filename in _file_id_ _$_.

_(Support for reading, writing and deleting entries when running on UNIX was added in PxPlus 2016.)_

## See Also

**[INI Files (Windows)](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Files%20\(Windows\).htm)**
