# C-Library File IO Routines

**PVK_AllocEnv( )** |  **_Allocate Environment_**  
---|---  
  
## Format

**HPVKENV PVK_AllocEnv( );**

**_Where:_**

**HPVKENV** |  Handle to the environment structure, 4-byte value. Returns null on failure.  
---|---  
  
## Description

**PVK_AllocEnv( )** is used to allocate the environment. The environment handle must be passed to the following functions to provide thread safety of PXPIO operations: **[PVK_RegisterKey( )](registerkey.md)**, **[PVK_OpenExt( )](openext.md)**, **[PVSetEnvMode( )](setenvmode.md)** and **[PVGetEnvMode( )](getenvmode.md)**. The environment handle must be freed at the end of the session to avoid resource leaks.

#### **Warning!**  
Attempting to pass a bad or invalid environment handle to any PXPIO function can cause unpredictable results that may lead to abnormal termination.
