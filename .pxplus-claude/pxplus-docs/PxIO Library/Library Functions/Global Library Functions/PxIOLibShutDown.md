# Global Library Functions 

**PxIOLibShutDown** |  **__**  
---|---  
  
## Description

Shuts down the PxIO Library

## Format

**int** **PxIOLibShutDown(void);**

## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note** :  
All services should be terminated before calling this function. All allocated resources are returned to the operating system, and after calling this function, no further calls will be serviced, including **[PxIOLibInit](PxIOLibInit.md)**.
