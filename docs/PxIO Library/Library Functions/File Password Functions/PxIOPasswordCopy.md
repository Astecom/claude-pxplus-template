# File Password Functions 

**PxIOPasswordCopy** |  **__**  
---|---  
  
## Description

Copies a password from one keyed file to another

## Format

**int** **PxIOPasswordCopy(PxIOFileHandle handleTo, PxIOFileHandle handleFrom);**

**_Where:_**

**handleTo** |  The handle of the open destination keyed file  
---|---  
**handleFrom** |  The handle of the open source keyed file containing the password  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
The destination file must not currently have a password associated with it.
