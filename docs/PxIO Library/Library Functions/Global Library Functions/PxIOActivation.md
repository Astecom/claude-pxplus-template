# Global Library Functions 

**PxIOActivation** |  **__**  
---|---  
  
## Description

Activates the PxIO Library

## Format

**int** **PxIOActivation(const char *activationString, int activationNumber);**

**_Where:_**

**activationString** |  Null-terminated registration string provided by Pvx Plus Technologies Ltd.  
---|---  
**activationNumber** |  A registration number provided by Pvx Plus Technologies Ltd.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
Ideally, this will be the first function called. It should be called prior to opening any files to provide the library with a valid activation. Without activation, a warning message that requires user intervention will be displayed whenever a file is opened with the **[PxIOOpen](../File%20Open%20and%20Close%20Functions/PxIOOpen.md)** function.
