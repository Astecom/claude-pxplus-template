# File Position Functions 

**PxIOPositionSeek** |  **__**  
---|---  
  
## Description

Sets a file's index pointer to the specified index position

## Format

**int** **PxIOPositionSeek(PxIOFileHandle handle, uint64_t position);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**position** |  The requested index position  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
In a keyed file, not all assumed index positions are valid at any given time. For instance, if a keyed file contains a thousand entries, there is no guarantee that index positions 0 to 999 will correspond to legitimate index positions. They are entirely determined by the current state of the file and the sequence in which the records were written.
