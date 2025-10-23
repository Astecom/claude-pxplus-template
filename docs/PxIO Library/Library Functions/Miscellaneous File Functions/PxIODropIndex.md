# Miscellaneous File Functions 

**PxIODropIndex** |  **__**  
---|---  
  
## Description

Drop a key from a keyed file without having to rebuild the file

## Format

**int** **PxIODropIndex(PxIOFileHandle handle, int nKeyNo);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**nKeyNo** |  The key number of the key to drop  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**. 
