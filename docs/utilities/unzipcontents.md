# Utility Routines

***TOOLS/UNZIP** |  **_Unzip Contents of ZIP File into a Directory_**  
---|---  
  
## Invocation

**CALL "*tools/unzip"** [_,_**ERR** =_stmtref_], _zipfile_ _$_ , [_targetDirectory_ _$_[_,suppressMsg_[_,suppressOverwrite_]]]

**_Where:_**

_zipfile_ _$_ |  |  Name of the ZIP file to unzip.  
---|---|---  
_targetDirectory_ _$_ |  Optional |  Directory into which the ZIP file will be unzipped. (Default is the current directory.)  
_suppressMsg_ |  Optional |  Suppress message flag. Set to non-zero to suppress messages. (Messages are displayed by default.)  
_suppressOverwrite_ |  Optional |  If the _suppressMsg_ flag is set to non-zero, then this flag can be set to zero to overwrite existing files (default) or to non-zero to suppress replacing existing files. If the _suppressMsg_ flag is set to zero, then the end user will be asked via MSGBOX whether to overwrite or skip existing files or to abort the unzip process. This flag will be used to set the default MSGBOX button.  
  
## Description

Extract the contents of a ZIP file into the specified directory.

## See Also

**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**
