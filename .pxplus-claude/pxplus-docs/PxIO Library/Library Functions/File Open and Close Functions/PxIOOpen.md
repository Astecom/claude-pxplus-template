# File Open and Close Functions 

**PxIOOpen** |  **__**  
---|---  
  
## Description

Opens a PxPlus file

## Format

**int** **PxIOOpen(PxIOService service, PxIOFileHandle *handle, const char *pathname, int16_t isz, const char *password, const char *options, int flags);**

**_Where:_**

**service** |  PxIOService to use when opening the file.  
---|---  
**handle** |  Pointer to storage to save the newly created PxIOFileHandle.  
**pathname** |  Pathname of the file to open. If remote, this should be relative to the remote system.  
**isz** |  Reserved for future use.  
**password** |  A NULL-terminated string containing the file password, if applicable.  
**options** |  Reserved for future use.  
**flags** |  A bit array specifying the methods to be used to open the file. The following predefined flags are allowed: |  OPEN_LOCK |  Opens the file for exclusive use  
---|---  
OPEN_READ_ONLY |  Opens the file as Read Only  
OPEN_PURGE |  Purges the file of all entries immediately after opening  
OPEN_BBX |  Opens the file in BBx mode  
  
## Return Value

If the function succeeds, the file's record size is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
Opens a PxPlus file locally or remotely, depending on the service passed in.

BBx is a registered trademark of BASIS International Ltd.
