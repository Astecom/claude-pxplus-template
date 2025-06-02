# File Lock Functions 

**PxIOFileLock** |  **__**  
---|---  
  
## Description

Locks the specified file

## Format

**int** **PxIOFileLock(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
If another process has already the file locked, an error is returned immediately.
