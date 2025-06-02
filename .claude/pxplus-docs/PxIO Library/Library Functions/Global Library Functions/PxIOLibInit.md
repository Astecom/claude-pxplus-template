# Global Library Functions 

**PxIOLibInit** |  **__**  
---|---  
  
## Description

Initializes the PxIO Library

## Format

**int** **PxIOLibInit(BOOL multithread);**

**_Where:_**

**multithread** |  This value is used to indicate if the library will be expected to deal with more than a single thread of execution.  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
This function _must_ be one of the first called. Only PxIOActivation can be called before it, and it must be called before making any other calls to the library, aside from a call to **[PxIOActivation](PxIOActivation.md)**.
