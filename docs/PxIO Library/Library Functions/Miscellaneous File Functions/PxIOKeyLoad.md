# Miscellaneous File Functions 

**PxIOKeyLoad** |  **__**  
---|---  
  
## Description

Rebuild key table(s) for a keyed file

## Format

**int** **PxIOKeyLoad(PxIOFileHandle handle, int keyNumber);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**keyNumber** |  The key number used to specify which key tree to rebuild (-1 for all key trees)  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**. 
