# C-Library File IO Routines

**PVK_setpos( )** |  **_Set Address/Position of File_**  
---|---  
  
## Format

int **PVK_setpos**(int  _fh_ , long _addr_);

**_Where:_**

_fh_ |  File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**  
---|---  
_addr_ |  Address/position of the record  
  
## Description

**PVK_setpos( )** sets the current record address based on the specified address. If successful, a status of 0 is returned.
