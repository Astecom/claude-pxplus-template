# Error Functions 

**PxIOGetError** |  **__**  
---|---  
  
## Description

Converts an error code returned by a library function to the corresponding PxPlus error code

## Format

**int** **PxIOGetError(int returnStatus, char *errorMessageBuffer, size_t *errorMessageBufferSize);**

**_Where:_**

**returnStatus** |  The return status to convert  
---|---  
**errorMessageBuffer** |  A pointer to a character buffer to store the corresponding text error message. If set to NULL, no message will be returned.  
**errorMessageBufferSize** |  A pointer to a size_t variable. When the function is called, this variable should contain the size of errorMessageBuffer. Upon return, it will contain the size of the retrieved text error message, or if the function has failed because errorMessageBuffer is not large enough, it will contain the required size.  
  
## Return Value

The converted error code on success. If the size of errorMessageBuffer is too small (as indicated by errorMessageBufferSize), then a length error will be returned. If the returnStatus value is not an error code, then the value PXIO_NO_ERROR will be returned.
