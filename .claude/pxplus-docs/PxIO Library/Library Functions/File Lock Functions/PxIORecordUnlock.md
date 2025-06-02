# File Lock Functions 

**PxIORecordUnlock** |  **__**  
---|---  
  
## Description

Unlocks a previously locked record of a file

## Format

**int** **PxIORecordUnlock(PxIOFileHandle handle);**

**_Where:_**

**handle** |  The handle of an open file containing the record to unlock  
---|---  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
The record in question must have been previously locked by the caller using the [**PxIORead**](../File%20Read%20Functions/PxIORead.md), [**PxIOKeyRead**](../File%20Read%20Functions/PxIOKeyRead.md), [**PxIOIndexRead**](../File%20Read%20Functions/PxIOIndexRead.md), or [**PxIORecordRead**](../File%20Read%20Functions/PxIORecordRead.md) functions with the READ_TYPE_LOCK readType parameter. Since a thread can only lock one record at a time, there is no parameter in this function to indicate the record to be unlocked, as it is assumed that the last record locked is the record in question. This will NOT unlock a record that was locked via another file handle.
