# File Write Functions 

**PxIOWriteRaw** |  **__**  
---|---  
  
## Description

Performs a raw write system call on the specified file. For information on the exact behavior of write, refer to OS-specific write documentation for details.

The write system call simply writes data to a file.

## Format

**int** **PxIOWriteRaw(PxIOFileHandle handle, const void *buf, size_t *nByte);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**buf** |  A buffer with the data to write  
**nByte** |  On input, the number of bytes to write; on output, the number of bytes written.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
