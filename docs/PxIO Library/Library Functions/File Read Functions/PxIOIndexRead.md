# File Read Functions 

**PxIOIndexRead** |  **__**  
---|---  
  
## Description

Reads the record associated with the given index number from the specified file

## Format

**int** **PxIOIndexRead(PxIOFileHandle handle, struct RecordInfo *record, uint64_t indexNumber, int keyNumber, PxIOReadType readType);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**record** |  Pointer to a RecordInfo structure. When the function returns, this structure will contain a pointer to the requested record's contents and the record's size.  
**indexNumber** |  The index of the record to read  
**keyNumber** |  The key number used to specify whether to use the primary key or one of the alternate keys (-1 for current). Ignored for non-keyed files.  
**readType** |  Determines the behavior of the function with respect to other users. See **[Appendix C](../Appendix%20References/Appendix%20C.md)** for more information on this option.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note** :  
If another process has already locked the record, an error is returned immediately.
