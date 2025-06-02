# Miscellaneous File Functions 

**PxIOExecuteDirection** |  **__**  
---|---  
  
## Description

Sets the direction that the PxIORead command will use to read records

## Format

**int** **PxIOExecuteDirection(PxIOFileHandle handle, int direction);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**direction** |  Number of records forwards (a positive value) or backwards (a negative value) that the PxIORead function should automatically move the next time it is called _(Default value: 1)_  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
To emulate some legacy systems, it is necessary to change the auto-increment value that the **[PxIORead](../File%20Read%20Functions/PxIORead.md)** function uses to determine the next record to be read. This function implements that option and is equivalent to the PxPlus **DIR=** option in the **[READ](../../../directives/read.md)** directive. This function's effect is limited in that it only has effect until the next Read function is executed. Hence, it must be repeatedly called after each Read function call to fully emulate the legacy system.
