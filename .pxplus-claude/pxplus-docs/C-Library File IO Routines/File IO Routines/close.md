# C-Library File IO Routines

**PVK_close( )** |  **_File Close_**  
---|---  
  
## Format

int **PVK_close**(int  _fh_);

**_Where:_**

_fh_ File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**

## Description

**PVK_close(** **)** closes the file and releases all resources (memory) associated with the specified file handle.
