# File Lock Functions 

**PxIOFileUnlock** |  **__**  
---|---  
  
## Description

Unlocks a file

## Format

**int** **PxIOFileUnlock(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open file that was previously locked  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
