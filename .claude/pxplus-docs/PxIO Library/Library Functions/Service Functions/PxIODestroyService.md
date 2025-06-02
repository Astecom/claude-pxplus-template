# Service Functions 

**PxIODestroyService** |  **__**  
---|---  
  
## Description

Destroys the specified service

## Format

**int** **PxIODestroyService(PxIOService service);**

**_Where:_**

**service** |  PxIOService handle of the service to destroy  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note** :  
This function should be called when the thread has finished using the library. It cleans up any resources in use by the service and closes any open files. Upon successful return from this function, the passed service handle is invalid and should not be used again.
