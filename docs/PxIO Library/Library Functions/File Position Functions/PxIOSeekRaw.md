# File Position Functions 

**PxIOSeekRaw** |  **__**  
---|---  
  
## Description

Performs a raw lseek system call on the specified file. For information on the exact behavior of lseek, refer to OS-specific lseek documentation for details.

The lseek system call simply moves a file pointer to the specified location.

## Format

**int** **PxIOSeekRaw(PxIOFileHandle handle,** **long *offset, int whence);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**offset** |  On input, the offset to seek to; on output, the resulting offset.  
**whence** |  Flag used to determine how offset is interpreted. Refer to OS-specific lseek documentation for details.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**. 
