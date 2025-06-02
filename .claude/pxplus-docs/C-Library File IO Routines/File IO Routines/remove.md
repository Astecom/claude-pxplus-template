# C-Library File IO Routines

**PVK_remove( )** |  **_Remove a Record_**  
---|---  
  
## Format

int **PVK_remove**(int  _fh_ , char *_keybfr_ , int  _keysz_);

**_Where:_**

_fh_ |  File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**  
---|---  
_keybfr_ |  Pointer to a buffer containing the external key of the record to remove  
_keysz_ |  Size of the primary key in bytes  
  
## Description

**PVK_remove(** **)** is used to remove a record from a PxPlus keyed file. The length and value of the primary key for the record must be specified. Records can only be removed from a file using the primary key. Alternate keys cannot be used. This function cannot be used with indexed files.

If successful, this function will return 0; otherwise, it will return -1.
