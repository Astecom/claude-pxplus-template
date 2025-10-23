# File Remove Functions

**PxIORemove** |  **__**  
---|---  
  
## Description

Removes the current record from a keyed file

## Format

**int PxIORemove(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
