# File Dictionary Functions 

**PxIODictionaryWrite** |  **__**  
---|---  
  
## Description

Adds/updates a record to the dictionary for the specified keyed file

## Format

**int** **PxIODictionaryWrite(PxIOFileHandle handle, int dictionaryIndex, const char *dictionaryRecord, size_t dictionaryRecordSize);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**dictionaryIndex** |  Index number of the dictionary record to write  
**dictionaryRecord** |  A pointer to a buffer containing the dictionary record to write  
**dictionaryRecordSize** |  Size of the dictionary record to be written  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
