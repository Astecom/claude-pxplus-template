# C-Library File IO Routines

**PVK_seek( )** |  **_Position Within a File_**  
---|---  
  
## Format

int **PVK_seek**(int  _fh_ , char *_keybfr_ , int  _keysz_ , int  _keyno_);

**_Where:_**

_fh_ |  File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**  
---|---  
_keybfr_ |  Pointer to a buffer containing the key  
_keysz_ |  Size of the key in bytes  
_keyno_ |  Key number to use (0 = Current key, 1 = Primary, 2 = First alternate, etc.)  
  
## Description

**PVK_seek(** **)** is used to position the key pointer to a specified location within a file for subsequent processing. By default, the Key IO routines read using the primary access key (KEY 1). An alternate key chain may be specified in the _keyno_ parameter.

If _keyno_ is set to 0, the current key is used. If successful, a status of 0 is returned.
