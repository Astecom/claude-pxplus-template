# File Position Functions 

**PxIOKeySeek** |  **__**  
---|---  
  
## Description

Positions the key pointer to a specified location within a file based on the passed key information

## Format

**int** **PxIOKeySeek(PxIOFileHandle handle, KeyInfo *key, int keyNumber);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**key** |  Pointer to a KeyInfo structure containing information on the key to seek  
**keyNumber** |  The key number used to specify whether the key is the primary key or one of the alternate keys (if any). If the value passed is -1, then the key sequence will be based on the one previously used with the file handle. The initial key sequence of a file will be the primary one.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
