# File Remove Functions 

**PxIOKeyRemove** |  **__**  
---|---  
  
## Description

Removes the record associated with a specific external or primary key from a keyed file

## Format

**int** **PxIOKeyRemove(PxIOFileHandle handle, KeyInfo *key);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**key** |  A pointer to a KeyInfo structure that specifies the external key to remove  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
