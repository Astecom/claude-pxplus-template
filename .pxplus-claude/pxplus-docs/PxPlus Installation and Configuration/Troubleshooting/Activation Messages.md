# Troubleshooting 

**Activation Messages** |  **__**  
---|---  
  
## Windows

> The above message indicates that PxPlus cannot locate or open the ACTIVATE.PVX file. Possible causes of this problem include:

  * Incorrect permissions on the directories leading to the activation file or on ACTIVATE.PVX itself. See **[Permission Issues](Permission%20Issues.md)**.
  * The Library= setting in the INI file points to an invalid directory.
  * The PVXLIB environment variable references an invalid directory.
  * The ACTIVATE.PVX file does not exist, which means that the activation program was not run correctly (or at all).



> The above message indicates that the activation data does not agree with the current machine configuration. This can happen for many different reasons, which include:

  * The path name, _Library=_ , in the INI file points to the wrong directory.
  * The activation file was copied from another machine.
  * PxPlus was moved from a different location on disk or from another file system.
  * The system information has changed since the activation key was generated.
  * An attempt was made to upgrade or install a permanent activation over a demo activation. When purchasing a license, the demo activation must be completely removed and replaced by the new temporary or permanent activation values you were issued; i.e. new serial number, user count, expiry date (if any), and activation key.
  * The activation file was restored from a backup (i.e. system information has changed). This requires an updated activation key.



## UNIX/Linux

**_Message 1:_**

> _Cannot open ACTIVATION key file  
>  NO VALID ACTIVATION FOUND!!_

The above message indicates that PxPlus cannot locate the ACTIVATE.PVX file. Possible causes of this problem include:

  * Incorrect permissions on the directories leading to the activation file or on ACTIVATE.PVX itself. See **[Permission Issues](Permission%20Issues.md)**.
  * The PVXLIB environment variable has not been set, or it references an invalid directory.
  * The ACTIVATE.PVX file does not exist, which means that the activation program was not run correctly (or at all).
  * Use of **./**  _(dot-slash)_ instead of the full path name to launch the executable.



**_Message 2:_**

> _Configuration Mismatch - Activation Rejected  
>  NO VALID ACTIVATION FOUND!!_

The above message indicates that the activation data does not agree with the current machine configuration. Possible causes of this problem include:

  * The activation was copied from another machine.
  * PxPlus was moved from a different location on disk or from another file system.
  * The system information has changed since the activation key was generated.
  * An attempt was made to upgrade or install a permanent activation over a demo activation. When purchasing a license, the demo activation must be completely removed and replaced by the new temporary or permanent activation values you were issued; i.e. new serial number, user count, expiry date (if any), and activation key.
  * The activation file was restored from a backup (i.e. system information has changed).


