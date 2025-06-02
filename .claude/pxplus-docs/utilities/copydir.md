# Utility Routines

***TOOLS/COPYDIR** |  **_Copy Directory and its Contents_**  
---|---  
  
## Invocation

**CALL "*tools/copydir"** , _source_dir_ _$_ , _dest_dir_ _$_ , _recursive_

**_Where:_**

_source_dir_ _$_ |  Source directory to copy.  
---|---  
_dest_dir_ _$_ |  Destination directory where the copy should be created. If left blank, the destination directory will be the current directory.  
_recursive_ |  Flag indicating whether the copy should recursively copy all sub-directories and their contents.  
  
## Description

Copy the source directory and its contents to the destination directory.

_(The CopyDir utility was added in PxPlus 2021 Update 1.)_

## Example

In this example, the utility will copy the directory "myData" and its contents, including all sub-directories and their contents, to the "backup" directory:

> call "*tools/copydir","myData/","backup/",1
