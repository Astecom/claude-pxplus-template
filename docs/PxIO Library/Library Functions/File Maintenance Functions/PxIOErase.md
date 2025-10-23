# File Maintenance Functions 

**PxIOErase** |  **__**  
---|---  
  
## Description

Erases the specified file

## Format

**int** **PxIOErase(PxIOService service, const char *pathname, BOOL allSegmentsFlag);**

**_Where:_**

**service** |  A previously created PxIOService  
---|---  
**pathname** |  Path and file name of the file to erase  
**allSegmentsFlag** |  The flag indicates whether all segments of a multi-segmented file should be renamed  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
The service must be included for security purposes, and the pathname is relative to the service. For a remote service using PxServer, the path is relative to the machine on which PxServer is running.
