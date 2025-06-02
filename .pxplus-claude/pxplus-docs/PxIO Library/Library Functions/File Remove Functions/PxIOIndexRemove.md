# File Remove Functions 

**PxIOIndexRemove** |  **__**  
---|---  
  
## Description

Removes a record from a keyed file based on the record's index number

## Format

**int** **PxIOIndexRemove(PxIOFileHandle handle, uint64_t indexNumber);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**indexNumber** |  The index number of the record to be removed  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
