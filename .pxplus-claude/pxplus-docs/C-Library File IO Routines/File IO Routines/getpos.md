# C-Library File IO Routines

**PVK_getpos( )** |  **_Get Address/Position Within File_**  
---|---  
  
## Format

long **PVK_getpos**(int  _fh_);

**_Where:_**

_fh_ File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**

## Description

**PVK_getpos** **( )** returns the address of the record associated with the current key pointer for the specified file handle.

A return value of -1 is returned if the function is unsuccessful.
