# File Information Functions 

**PxIOGetFileHeader** |  **__**  
---|---  
  
## Description

Retrieves file header

## Format

**int** **PxIOGetFileHeader(PxIOFileHandle handle, void *fileHeaderBuffer);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**fileHeaderBuffer** |  A pointer to the memory buffer, which will receive the file header  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
