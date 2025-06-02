# File Position Functions 

**PxIOGetRecordNumber** |  **__**  
---|---  
  
## Description

Retrieves the next record number. For keyed files, the next record number corresponds to the key sequence number. For other file types, the next record number is the same as the index number plus one.

## Format

**int** **PxIOGetRecordNumber(PxIOFileHandle handle, int *recordNumber, int keyNumber);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**recordNumber** |  A pointer to an _int_ variable into which the record number will be saved  
**keyNumber** |  The key sequence number upon which the record's sequence is based. Ignored for non-keyed file types.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

If the current record is locked, then the retrieved record number will be that of the current record. Otherwise, it will be that of the record following.
