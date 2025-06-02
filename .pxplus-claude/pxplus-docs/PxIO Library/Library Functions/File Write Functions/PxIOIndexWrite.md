# File Write Functions 

**PxIOIndexWrite** |  **__**  
---|---  
  
## Description

Writes a record to a file and specifies an index

## Format

**int** **PxIOIndexWrite(PxIOFileHandle handle, RecordInfo *record, uint64_t indexNumber, BOOL overwrite);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**record** |  A pointer to a RecordInfo structure containing a pointer to the record to be written and its size. The calling procedure is responsible for constructing a valid PxPlus data record using field separators as required. PxIOIndexWrite will pad the data record with nulls as required for files with fixed length records.  
**indexNumber** |  The index position to write  
**overwrite** |  If writing to a keyed file, and the data in the passed record will result in a conflict within one or more of the file's key sequences, this flag indicates whether or not the file record causing the current key sequence conflict(s) should be overwritten. If TRUE is passed, the overwrite occurs; otherwise, no change is made to the file, and an ERR_DOM (duplicate or missing key error) is returned.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
