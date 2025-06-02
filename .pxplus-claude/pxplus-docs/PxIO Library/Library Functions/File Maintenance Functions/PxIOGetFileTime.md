# File Maintenance Functions 

**PxIOGetFileTime** |  **__**  
---|---  
  
## Description

Sets one of the timestamps of an open file

## Format

**int** **PxIOGetFileTime(PxIOFileHandle handle, int64_t *timestamp, PxIOFileTimeType fileTimeType);**

**_Where:_**

**handle** |  The handle of an open file.  
---|---  
**timestamp** |  A pointer to an int64_t variable that will receive the requested timestamp value. Timestamp values are in POSIX time format.  
**fileTimeType** |  The specific timestamp to retrieve. See **[Appendix F](../Appendix%20References/Appendix%20F.md)** for a list of currently allowed timestamps.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
POSIX time format is a standard that is defined as the number of seconds since 00:00:00, January 1st, 1970, Coordinated Universal Time (UTC). Coordinated Universal Time is roughly equivalent to Greenwich Mean Time. This standard is widely used in many "Unix-like" systems.
