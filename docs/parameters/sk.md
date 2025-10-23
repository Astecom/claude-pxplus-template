# System Parameters

**'SK'** |  **_Shrink Keyed Files_**  
---|---  
  
##  Description

Shrinks Keyed files when executing the **PURGE** or **REFILE** directives. PxPlus returns the freed space to the operating system.

##  Default

**_Off_**

By default, PxPlus simply re-initializes the file header information when it encounters a **PURGE** or **REFILE** directive for a data file (Keyed or Direct). This means that if you accidentally **PURGE** /**REFILE** such a data file, the PxPlus Keyed/Direct file key reconstruction utility (*UFAR) can salvage most, if not all, of the information originally stored in the file.

##  See Also

[**PURGE Clear Data from a File**](../directives/purge.md)  
[**REFILE Clear Record from File**](../directives/refile.md)
