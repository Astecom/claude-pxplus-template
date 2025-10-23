# File Password Functions

**PxIOPasswordRemove** |  **__**  
---|---  
  
## Description

Removes a keyed file's password

## Format

**int PxIOPasswordRemove(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open file containing a password  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
