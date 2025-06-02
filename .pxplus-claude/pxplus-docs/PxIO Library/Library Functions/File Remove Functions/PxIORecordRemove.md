# File Remove Functions 

**PxIORecordRemove** |  **__**  
---|---  
  
## Description

Removes a record from the specified keyed file based on its record number and key number

## Format

**intPxIORecordRemove(PxIOFileHandle handle, int recordNumber, int keyNumber);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**recordNumber** |  The record number of the record to be removed  
**keyNumber** |  The key sequence number of which the record number is a member. If the value passed is -1, then the key sequence will be based on the one previously used with the file handle. The initial key sequence of a file will be the primary one.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
