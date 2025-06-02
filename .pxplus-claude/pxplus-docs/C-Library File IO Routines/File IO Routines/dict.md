# C-Library File IO Routines

**PVK_dict( )** |  **_Read Dictionary_**  
---|---  
  
## Format

int **PVK_dict**(int  _fh_ , int  _dctidx_ , char *_dctbfr_ , int  _dctbsz_);

**_Where_** _:_

_fh_ |  File handle returned from a prior call to **[PVK_OpenExt( )](openext.md)**  
---|---  
_dctidx_ |  Data dictionary entry  
_dctbfr_ |  Pointer to the data buffer to receive the data dictionary record  
_dctbsz_ |  Size of the data buffer in bytes  
  
## Description

This function can be used to read the embedded data dictionary records held within a file. The format of the information contained within the data dictionary is subject to change and as such is not documented in this reference manual.
