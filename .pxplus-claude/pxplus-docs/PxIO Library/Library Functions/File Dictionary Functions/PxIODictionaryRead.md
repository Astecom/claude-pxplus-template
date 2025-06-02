# File Dictionary Functions 

**PxIODictionaryRead** |  **__**  
---|---  
  
## Description

Reads a record from the embedded data dictionary of the specified keyed file

## Format

**int** **PxIODictionaryRead(PxIOFileHandle handle, int dictionaryIndex, char *dictionaryBuffer, size_t *dictionaryBufferSize);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**dictionaryIndex** |  Index number of the dictionary record to read  
**dictionaryBuffer** |  A pointer to the buffer into which to save the record  
**dictionaryBufferSize** |  A pointer to a size_t variable. When the function is called, this variable should contain the size of dictionaryBuffer. Upon return, it will contain the size of the retrieved record. If the function has failed because the buffer is not large enough, it will contain the required size of the buffer.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
The Dictionary format is outlined in the _PxPlus_ **[Data Dictionary](../../../Data%20Dictionary/Introduction.md)** documentation.
