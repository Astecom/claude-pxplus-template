# File Information Functions 

**PxIOGetRawKeyLayout** |  **__**  
---|---  
  
## Description

Retrieves the raw binary key layout information of a keyed file

## Format

**int** **PxIOGetRawKeyLayout(PxIOFileHandle handle, char *rawKeyLayoutBuffer, size_t *rawKeyLayoutBufferSize);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**rawKeyLayoutBuffer** |  A pointer to the character buffer which will receive the raw key layout  
**rawKeyLayoutBufferSize** |  A pointer to a size_t variable. When the function is called, this variable should contain the size of rawKeyLayoutBuffer. Upon return, it will contain the size of the retrieved raw key layout. If the function has failed because rawKeyLayoutBuffer is not large enough, it will contain the required size.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
