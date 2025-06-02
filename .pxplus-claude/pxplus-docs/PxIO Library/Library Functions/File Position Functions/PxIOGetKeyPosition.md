# File Position Functions 

**PxIOGetKeyPosition** |  **__**  
---|---  
  
## Description

Retrieves the index position of the record corresponding to a specified key and key number

## Format

**int** **PxIOGetKeyPosition(PxIOFileHandle handle, KeyInfo *key, int keyNumber, uint64_t *position);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**key** |  Pointer to a KeyInfo structure containing key information used as the basis to determine the index position.  
**keyNumber** |  The key number used to specify whether the key is the primary key or one of the alternate keys (if any). If the value passed is -1, then the key sequence will be based on the one previously used with the file handle. The initial key sequence of a file will be the primary one.  
**position** |  A pointer to a uint64_t variable used to save the index position  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
