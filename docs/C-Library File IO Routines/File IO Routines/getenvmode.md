# C-Library File IO Routines

**PVGetEnvMode( )** |  **_Get Environment Variables_**  
---|---  
  
## Format

intptr_t **APIDEF PVGetEnvMode(HPVKENV**  _hEnv_ , int  _iFlag_);

**_Where:_**

_hEnv_ |  Handle to environment structure  
---|---  
_iFlag_ |  Selector of the environment variable to retrieve the value  
  
## Description

**PVK_GetEnvMode(** **)** is used to get the value of the environment variable. If successful, the function returns the value of the environment variable specified by _iFlag_. Returns PV_ERROR(-1) on failure.
