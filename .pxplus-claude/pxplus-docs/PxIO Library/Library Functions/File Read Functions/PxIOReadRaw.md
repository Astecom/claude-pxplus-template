# File Read Functions 

**PxIOReadRaw** |  **__**  
---|---  
  
## Description

Performs a raw read system call on the specified file. For information on the exact behavior of read, refer to the OS-specific read documentation.

The read system call simply reads data from a file.

## Format

**int** **PxIOReadRaw(PxIOFileHandle handle, void *buf, size_t *nByte);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**buf** |  On input, a storage buffer for the read data; on output, the read data.  
**nByte** |  On input, the number of bytes to read; on output, the number of bytes read.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**. 
