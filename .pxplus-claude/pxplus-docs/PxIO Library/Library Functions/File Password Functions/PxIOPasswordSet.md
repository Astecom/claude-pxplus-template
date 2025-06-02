# File Password Functions 

**PxIOPasswordSet** |  **__**  
---|---  
  
## Description

Sets the keyed file password

## Format

**int** **PxIOPasswordSet(PxIOFileHandle handle, const char *password, size_t passwordSize, unsigned char permission);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**password** |  A character string containing the new password  
**passwordSize** |  Length of the new password  
**permission** |  The permissions that the new password will provide. The following predefined permissions are available: |  POPEN |  The password is required to open the file, read and write to it.  
---|---  
PWRITE |  The password is required to write to the file.  
POPENDATA |  The password is required to open the file, read and write to it. Data is encrypted.  
PWRITEDATA |  The password is required to write to the file. Data is encrypted.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note** :  
For the function to succeed, the file must be empty, locked, and not have a password. This function provides functionality similar to the PxPlus **[PASSWORD](../../../directives/password.md)** directive.
