# File Information Functions 

**PxIOGetKeyLayout** |  **__**  
---|---  
  
## Description

Retrieves the key layout of a keyed file

## Format

**int** **PxIOGetKeyLayout(PxIOFileHandle handle, char *keyLayoutBuffer, size_t *keyLayoutBufferSize);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**keyLayoutBuffer** |  A pointer to the character buffer which will receive the key layout  
**keyLayoutBufferSize** |  A pointer to a size_t variable. When the function is called, this variable should contain the size of keyLayoutBuffer. Upon return, it will contain the size of the retrieved key layout. If the function has failed because keyLayoutBuffer is not large enough, it will contain the required size.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
