# 

**C-Library File IO Routines**|   
---|---  
  
The PxPlus C-Library interface enables PxPlus Keyed, Indexed and EFF files to be accessed by programs written in 'C' and other programming languages. It consists of the following file IO functions:

**Function** |  **Description**  
---|---  
**[PVGetEnvMode( )](File%20IO%20Routines/getenvmode.md)** |  Get Environment Variables  
**[PVK_AllocEnv( )](File%20IO%20Routines/allocenv.md)** |  Allocate Environment  
**[PVK_close( )](File%20IO%20Routines/close.md)** |  File Close  
**[PVK_DeAllocEnv( )](File%20IO%20Routines/deallocenv.md)** |  De-allocate Environment  
**[PVK_deffh( )](File%20IO%20Routines/deffh.md)** |  Pointer to Internal Structure Block  
**[PVK_dict( )](File%20IO%20Routines/dict.md)** |  Read Dictionary  
**[PVK_geterrno( )](File%20IO%20Routines/geterrno.md)** |  Return Last Error Status  
**[PVK_getpos( )](File%20IO%20Routines/getpos.md)** |  Get Address/Position Within File  
**[PVK_insert( )](File%20IO%20Routines/insert.md)** |  Write a New Record  
**[PVK_OpenExt( )](File%20IO%20Routines/openext.md)** |  Extended File Open  
**[PVK_read( )](File%20IO%20Routines/read.md)** |  Read a Record from a File  
**[PVK_RegisterKey( )](File%20IO%20Routines/registerkey.md)** |  Register Usage of Library  
**[PVK_remove( )](File%20IO%20Routines/remove.md)** |  Remove a Record  
**[PVK_seek( )](File%20IO%20Routines/seek.md)** |  Position Within Keyed/Indexed File  
**[PVK_setpos( )](File%20IO%20Routines/setpos.md)** |  Set Address/Position of File  
**[PVK_strerr( )](File%20IO%20Routines/strerr.md)** |  Return Last Error Message  
**[PVK_update( )](File%20IO%20Routines/update.md)** |  Update an Existing Record  
**[PVK_write( )](File%20IO%20Routines/write.md)** |  Write/Rewrite a Record  
**[PVSetEnvMode( )](File%20IO%20Routines/setenvmode.md)** |  Set Environment Variables  
  
In addition to the above functions, two 'C' header files are provided:

|  **PVKIO.H** |  Contains file structures and function prototypes  
---|---|---  
|  **SYBEX.H** |  Contains computer word size definitions and macros  
  
**_Environments Provided_**

These functions have been pre-compiled for the 32-bit and 64-bit Windows environment.

## Registration

Use and distribution of this package is prohibited without first obtaining an authorized registration key. A warning message to this effect is presented whenever a file is opened unless the application first invokes the **PVK_RegisterKey( )** function with a valid registration string and registration number.

Distribution of the PXPIO routines is restricted to only those companies that apply for and receive a registration string and number directly from PVX Plus Technologies Ltd.
