# File Dictionary Functions 

**PxIOGetDictionaryInfo** |  **__**  
---|---  
  
## Description

Returns file dictionary information, such as embedded IOL, from the specified keyed file

## Format

**int** **PxIOGetDictionaryInfo(PxIOFileHandle handle, char *buffer, size_t *bufferSize, PxIODictionaryInfoType dictionaryInfo);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**buffer** |  A pointer to a buffer into which to return the dictionary information  
**bufferSize** |  A pointer to a size_t variable. When the function is called, this variable should contain the size of the buffer field and should take into account a terminating NULL character at the end of the dictionary to be returned. Upon return, this value will contain the size of the retrieved information. If the function has failed because the buffer field is not large enough or because buffer is NULL, it will contain the required size of the buffer field.  
**dictionaryInfo** |  The embedded information requested. The available options are: |  DICTIONARY_INFO_TYPE_PRIMARY |  Returns the embedded IOList  
---|---  
DICTIONARY_INFO_TYPE_ALTERNATE |  Returns the alternate IOList  
DICTIONARY_INFO_TYPE_FORMATS |  Returns the valid record formats list  
DICTIONARY_INFO_TYPE_EMBEDDED |  Returns the embedded IO path  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
For more information on the IOList format, see **[Input and Output Parameters](../../../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Input%20and%20Output%20Parameters.md)**.
