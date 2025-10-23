# Utility Routines

***TOOLS/ZIP** |  **_Zip Contents of a Directory into ZIP File_**  
---|---  
  
## Invocation

**CALL "*tools/zip"** [_,_ **ERR** =_stmtref_], _zipfile_ _$_ , [_zipDirectory_ _$_[_,suppressMsg_[_,excludeZip_]]]

**_Where:_**

_zipfile_ _$_ |  |  Name of the ZIP file to load.  
---|---|---  
_zipDirectory_ _$_ |  Optional |  Directory to zip into the ZIP file. The simple directory name will be the root of the ZIP file, e.g. zipping _"/app/progs"_ will create a root directory entry _"progs"_ in the ZIP file. All subordinate directories and files will be included. (Default is to zip the current directory.)  
_suppressMsg_ |  Optional |  Suppress messages flag. Set to non-zero to suppress messages. (Messages are displayed by default.)  
_excludeZip_ |  Optional |  Exclude other ZIP files flag. Set to non-zero to exclude other ZIP files that may reside in the directory structure being zipped. (Other ZIP files are included by default.)  
  
## Description

Zip the contents of a directory and its subdirectories into a ZIP file.

## See Also

**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**
