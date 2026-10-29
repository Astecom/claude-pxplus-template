# Troubleshooting

**Activation Messages** |  **_ _**  
---|---  
  
While PxPlus activation is normally a straightforward process, some issues may arise because of missing files/directories, incorrect licensing, permission difficulties, etc. Be aware that activations are verified during the PxPlus start_up, not by the activation utility itself. The PxPlus version and serial number are displayed when starting a new session.

If you experience an issue, submit a Helpdesk ticket to PVX Plus Support at **[https://helpdesk.pvxplus.com](https://helpdesk.pvxplus.com/)**. Select the **_Open a New Ticket_** button or top menu bar option.

Enter your support request and include the following:

  * A valid email address
  * Your full name
  * System ID
  * Machine Class Number
  * Product Serial Number **_(Do not include license Activation Keys)_**
  * Software versions and types of equipment
  * Description of the issue and symptoms (only one issue description per ticket)



#### **Important Note:**  
To help resolve your issue as quickly as possible, all requested information must be provided. Missing details will result in delays.  
  
An administrative fee may apply for licenses not enrolled in the **[Continuous Care Program (CCP)](../Licensing%20and%20Activation%20Keys/Overview.htm#ccp)** and for unsupported versions.

## Activation Messages (Windows)

The message below indicates that PxPlus cannot locate or open the **ACTIVATE.PVX** file.

> Possible causes of this issue include:

  * Incorrect permissions on the directories leading to the activation file or on the **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)** file itself. See **[Permission Issues](Permission%20Issues.md)**.
  * The Library= setting in the INI file points to an invalid directory.
  * The **[PVXLIB](../Customizing%20PxPlus/Environment%20Variables.htm#Mark22)** environment variable references an invalid directory.
  * The **ACTIVATE.PVX** file does not exist, which means that the activation program was not run correctly (or at all).



The message below indicates that the activation data does not agree with the current machine configuration:

> Possible causes of this issue include:

  * The path name, _Library=_ , in the INI file points to the wrong directory.
  * The activation file was copied from another machine.
  * PxPlus was moved from a different location on disk or from another file system.
  * The system information has changed since the activation key was generated.
  * An attempt was made to upgrade or install a permanent activation over a demo activation. When purchasing a license, the demo activation must be completely removed and replaced by the new temporary or permanent activation values you were issued; i.e. new serial number, user count, expiry date (if any), and activation key.
  * The activation file was restored from a backup (i.e. system information has changed). This requires an updated activation key.



## Activation Messages (UNIX/Linux)

The message below indicates that PxPlus cannot locate the ACTIVATE.PVX file.

> _Cannot open ACTIVATION key file  
>  NO VALID ACTIVATION FOUND!!_

Possible causes of this issue include:

  * Incorrect permissions on the directories leading to the activation file or on the **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)** file itself. See **[Permission Issues](Permission%20Issues.md)**.
  * The **[PVXLIB](../Customizing%20PxPlus/Environment%20Variables.htm#Mark22)** environment variable has not been set, or it references an invalid directory.
  * The **ACTIVATE.PVX** file does not exist, which means that the activation program was not run correctly (or at all).
  * Use of ./ _(dot-slash)_ instead of the full path name to launch the executable.



The message below indicates that the activation data does not agree with the current machine configuration:

> _Configuration Mismatch - Activation Rejected  
>  NO VALID ACTIVATION FOUND!!_

Possible causes of this issue include:

  * The activation was copied from another machine.
  * PxPlus was moved from a different location on disk or from another file system.
  * The system information has changed since the activation key was generated.
  * An attempt was made to upgrade or install a permanent activation over a demo activation. When purchasing a license, the demo activation must be completely removed and replaced by the new temporary or permanent activation values you were issued; i.e. new serial number, user count, expiry date (if any), and activation key.
  * The activation file was restored from a backup (i.e. system information has changed).



 

 

 
