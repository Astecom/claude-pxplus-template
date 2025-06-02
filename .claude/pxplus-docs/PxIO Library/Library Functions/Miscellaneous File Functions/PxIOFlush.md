# Miscellaneous File Functions 

**PxIOFlush** |  **__**  
---|---  
  
## Description

Forces the system to write all updates to a file to disk. This can be used to make sure that critical updates are fully written to the file specified.

## Format

**int** **PxIOFlush(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
This function provides functionality similar to the PxPlus **[FLUSH](../../../directives/flush.md)** directive.
