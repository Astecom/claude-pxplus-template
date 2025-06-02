# File Dictionary Functions 

**PxIODictionaryRemove** |  **__**  
---|---  
  
## Description

Removes a record from the dictionary of the specified keyed file

## Format

**intPxIODictionaryRemove(PxIOFileHandle handle, int dictionaryIndex);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**dictionaryIndex** |  Index number of the dictionary record to remove  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
