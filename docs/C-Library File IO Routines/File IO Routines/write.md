# C-Library File IO Routines

**PVK_write( )** |  **_Write/Rewrite a Record_**  
---|---  
  
## Format

int **PVK_write**(int  _fh_ , char *_dtabfr_ , int  _dtasz_ , char *_keybfr_ , int  _keysz_);

**_Where:_**

_fh_ |  File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**  
---|---  
_dtabfr_ |  Pointer to the data buffer to receive the record data  
_dtasz_ |  Size of the record in bytes  
_keybfr_ |  Pointer to a buffer containing the external key, if applicable  
_keysz_ |  Size of the external key in bytes  
  
## Description

**PVK_write(** **)** is used to write or rewrite a record to a PxPlus keyed, indexed or EFF file.

The **PVK_insert** and **PVK_update** functions may be used if an application needs to differentiate between creating new records versus updating existing records.

The data buffer must contain a properly formatted record with the length of the record specified. The value supplied in _dtasz_ should contain the actual size of the record rather than the size of the data buffer. **PVK_write** will pad the data record with nulls as required for files with fixed length records.

The key buffer and length must contain the necessary key information for a file with an external key. If no external key is defined for the file, then the _keysz_ field must be set to zero.

The calling application is responsible for constructing a valid PxPlus data record using field separators as required.

If successful, this function will return 0; otherwise, it will return -1.
