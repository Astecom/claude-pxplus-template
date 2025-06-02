# Utility Routines

***DIRTREE** |  **_Return Directory Tree_**  
---|---  
  
## Invocation

**CALL "*dirtree",**_starting_dir_ _$, file_list$, file_sep$, include_dir_flag_

**_Where:_**

_starting_dir_ _$_ |  Required |  Input |  This string variable/expression defines the directory whose tree structure is to be returned.  
---|---|---|---  
_file_list_ _$_ |  Required |  Output |  This string variable will be loaded with the pathnames of all the files (and optional sub-directories) with the directory provided. Each pathname will be separated by the character defined in _file_sep_ _$._  
_file_sep_ _$_ |  Optional |  Input |  This optional string variable/expression defines the character (or string of characters) to be inserted between each pathname returned. If omitted, the default system separator character will be used. If it is null and the _include_dir_flag_ parameter is included, _file_sep_ _$_ is null and no character is inserted between each pathname.  
_include_dir_flag_ |  Optional |  Input |  This numeric variable/expression, if non-zero, indicates that sub-directory names are to be included. If omitted or zero, only file names will be included in _file_list_ _$_. Sign of _include_dir_flag_ indicates if directory names precede or follow files. If **+** , it precedes files; if **-** , it follows (suitable for deletes).  
  
## Description

This routine will return a string consisting of a list of the pathnames to all the files in a directory, including its sub-directories.

**_Calling Sequence:_**

> **CALL**  _"*dirtree", start_dir$, file_list$, sep_char$, include_flag_

An error will be generated if the starting directory does not exist. Passing a filename in the _starting_dir_ _$_ will have unpredictable results.

When including sub-directory names (_include_dir_flag_ non-zero), the directory names will be included in the file list. If _include_dir_flag_ is positive, the directory names will precede the file names; if negative, the directory names will occur following all the file names. Using a negative value in _include_dir_flag_ __ will allow the resultant file list to be used when deleting sub-directory structures.

#### **Note:**  
The filenames "." and ".." will be omitted from the resultant file list.

_(The *DirTree utility was added in PxPlus v10.20.)_
