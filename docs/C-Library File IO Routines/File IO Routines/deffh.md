# C-Library File IO Routines

**PVK_deffh( )** |  **_Pointer to Internal Structure Block_**  
---|---  
  
## Format

struct PVKINF * **PVK_deffh**(intfh);

**_Where_** _:_

_fh_ File handle returned from a prior call to **PVK_OpenExt( )**

## Description

This function may be used to obtain a pointer to the internal structures maintained by PXPIO.

#### **Note:**  
The values contained within this structure should not be modified by an outside application. Any attempt to do so may result in file corruption and/or cause the application to become unstable.

If successful, this function will return valid pointer; otherwise, it will return null.

#### **Warning!**  
Passing a bad or invalid file handle can cause unpredictable results that may lead to abnormal termination.
