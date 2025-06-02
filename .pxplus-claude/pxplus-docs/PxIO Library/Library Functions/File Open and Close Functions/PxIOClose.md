# File Open and Close Functions 

**PxIOClose** |  **__**  
---|---  
  
## Description

Closes a file

## Format

**int** **PxIOClose(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
Upon successful return from this function, the passed file handle is invalid and should not be used again.
