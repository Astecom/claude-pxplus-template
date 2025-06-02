# C-Library File IO Routines  
  
**PVK_read( )** |  **_Read a Record from a File_**  
---|---  
  
## Format

int **PVK_read**(int  _fh_ , char _*dtabfr_ , int  _dtasz_ , int  _function_);

**_Where:_**

_fh_ |  File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**  
---|---  
_dtabfr_ |  Pointer to the data buffer to receive the record data  
_dtasz_ |  Size (in bytes) of the data buffer  
_function_ |  Type of read to be performed. Values are: |  PVKRD_CUR |  Returns current  
---|---  
PVKRD_NEXT |  Returns next  
PVKRD_PRIOR |  Returns prior  
PVKRD_LOCK |  OR'ed into function to lock the record  
PVKRD_UNLOCK |  OR'ed into function to unlock all records  
  
## Description

**PVK_read(** **)** is used to read a record from a PxPlus Keyed, Indexed or EFF file. The return value will contain the length of the record in bytes or -1 if an error occurred. A return value of -2 indicates that the supplied buffer was not large enough to store the entire data record.

A record may be locked or extracted by specifying PVKRD_LOCK in conjunction with the appropriate function (e.g. PVKRD_NEXT | PVKRD_LOCK).

#### **Note** :  
For files with an external key (Direct files), the data returned will consist of the external key followed by the data.  
  
**_Example:_**  
  
A Direct file with a 6-character key and an 80-character record size will return an 86 byte record - characters 1 - 6 will be the external key padded with nulls followed by the record data.
