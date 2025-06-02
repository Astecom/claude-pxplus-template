# File Maintenance Functions 

**PxIORenameFile** |  **__**  
---|---  
  
## Description

Renames the specified file

## Format

**int** **PxIORenameFile(PxIOService service, const char *oldFilename, const char *newFilename, BOOL allSegmentsFlag);**

**_Where:_**

**service** |  A previously created PxIOService  
---|---  
**oldFilename** |  Path and filename of the file to rename  
**newFilename** |  Path and filename to which the file is to be renamed  
**allSegmentsFlag** |  The flag indicates whether all segments of a multi-segmented file should be renamed  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
The service must be included for security purposes, and the pathname is relative to the service. For a remote service using PxServer, the path is relative to the machine on which PxServer is running.
