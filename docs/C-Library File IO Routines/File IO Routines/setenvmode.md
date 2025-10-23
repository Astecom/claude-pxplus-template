# C-Library File IO Routines

**PVSetEnvMode( )** |  **_Set Environment Variables_**  
---|---  
  
## Format

intptr_t **APIDEF PVSetEnvMode**(**HPVKENV**  _hEnv_ , int  _iFlag_ , intptr_t  _iValue_);

**_Where:_**

_hEnv_ |  Handle to environment structure  
---|---  
_iFlag_ |  Selector of the environment variable to be modified Can be one of the following constants: |  PV_BURST_MODE |  1  
---|---  
PV_DIRTY_READ |  2  
PV_LOCK_MODE |  3  
PV_READ_ONLY |  4  
PV_MAX_MB |  5  
_iValue_ |  Corresponding value for _iFlag_ _:_ |  PVK_BURST_ON |  1  
---|---  
PVK_BURST_OFF |  0  
PVK_DIRTY_ON |  1  
PVK_DIRTY_OFF |  0  
PVK_DONT_CHECK_LOCK |  1 _(Don't check, never lock read records)_  
PVK_CHECK_LOCK |  2 _(Check for extracted records)_  
PVK_CHECK_LOCK_NOWAIT |  4 _(Check for extracted records, exit if locked)_  
PVK_HDR_LOCK_NOWAIT |  8 _(Don't wait for a locked header)_  
PVK_READONLY_ON |  1  
PVK_READONLY_OFF |  0  
PV_MAX_MB |  _(Maximum size of file segment in MB, integer value 0 to 2000)_  
  
## Description

**PVK_SetEnvMode(** **)** is used to set the value of environment variables. If successful, the function returns the previous value of the modified environment variable.

If specified and _iValue_ is not valid, ERR_BAD_TYPE(-5) is returned. Returns PV_ERROR(-1) on failure.

## Additional Notes

**PV_BURST_MODE**

Normal processing of a file involves locking each area of the file as it is read. Activating burst mode greatly reduces the number of locks issued against a file. With Burst mode set, the PXPIO routines lock the file header for either 50 file operations or three-tenths of a second, whichever occurs first. This decreases the number of times the file must be locked and the number of times that internal buffers may need to be reloaded.

**PV_DIRTY_READ**

Dirty Read mode of operation skips the normal file consistency checks. Dirty reads can speed file processing by reducing the number of locks issued against a file. However, this may result in inconsistent data should the file be updated while being read by the PXPIO routines.

**PV_LOCK_MODE**

The Lock Mode is used to control whether to check for locked/extracted records when reading and writing. The default setting is to **_not_** check for locked records for backwards compatibility with older versions of the PXPIO routines.

#### **Note:**  
This flag should normally be set to PVK_CHECK_LOCK when files are being updated concurrently by PxPlus and applications using the PXPIO routines. A setting of PVK_DONT_CHECK_LOCK will allow the PXPIO routines to read and write a record that is extracted in PxPlus. The remaining settings provide a quicker means of checking for a locked record or file header and will return immediately rather than retrying the lock.

**PV_MAX_MB**

The PV_MAX_MB setting is used to control the approximate size of a file in megabytes before additional segments are created. This setting is functionally equivalent to the 'MB' (mega-bytes) system parameter in PxPlus. Values for PV_MAX_MB must be in the range of 0 (zero) to two thousand (2000). The default is two thousand (2000). Specifying a value of 0 (zero) resets this parameter to its default.
