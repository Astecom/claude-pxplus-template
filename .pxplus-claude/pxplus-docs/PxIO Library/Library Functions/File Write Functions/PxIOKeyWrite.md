# File Write Functions 

**PxIOKeyWrite** |  **__**  
---|---  
  
## Description

Writes a record to a file that possesses external keys

## Format

**int** **PxIOKeyWrite(PxIOFileHandle handle, RecordInfo *record, KeyInfo *key, BOOL overwrite);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**record** |  A pointer to a RecordInfo structure containing a pointer to the record to be written and its size. The calling procedure is responsible for constructing a valid PxPlus data record using field separators as required. PxIOKeyWrite will pad the data record with nulls as required for files with fixed length records.  
**key** |  A pointer to a KeyInfo structure that specifies the external key to write  
**overwrite** |  If the external key already exists within the file or if data in the passed record will result in a conflict within one or more of the file's internal key sequences, this flag indicates whether or not the file entry causing the current key sequence conflict(s) should be overwritten. If TRUE is passed, the overwrite occurs; otherwise, no change is made to the file, and an ERR_DOM (duplicate or missing key error) is returned.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
