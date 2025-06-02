# File Read Functions 

**PxIOKeyRead** |  **__**  
---|---  
  
## Description

Reads the record associated with the given key from the specified file

## Format

**int** **PxIOKeyRead(PxIOFileHandle handle, RecordInfo *record, KeyInfo *key, int keyNumber, PxIOReadType readType);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**record** |  Pointer to a RecordInfo structure. When the function returns, this structure will contain a pointer to the requested record's contents and the record's size.  
**key** |  Pointer to a KeyInfo structure containing key information corresponding to the record to read  
**keyNumber** |  The key number used to specify whether the specified key is the primary key or one of the alternate keys (if any). If the value passed is -1, then the key sequence will be based on the one previously used with the file handle. The initial key sequence of a file will be the primary sequence.  
**readType** |  Determines the behavior of the function with respect to other users. See **[Appendix C](../Appendix%20References/Appendix%20C.md)** for more information on this option.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note** :  
If another process has already locked the record, an error is returned immediately.
