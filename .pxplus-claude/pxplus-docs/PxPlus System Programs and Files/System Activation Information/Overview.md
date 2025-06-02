# PxPlus System Programs and Files

**ACTIVATE.PVX** |  **_System Activation Keys Control File_**  
---|---  
  
The **ACTIVATE.PVX** file contains the internal activation information for your version of PxPlus. The information includes:

  * System Name
  * Software Serial Number
  * System Identification Number
  * Maximum Simultaneous User Count
  * Expiry Date



#### **Warning!**  
**This file should NOT be modified or moved under any conditions.  
  
Any attempt to modify or move this file may result in the partial or total deactivation of your software! Reactivation of your software caused by tampering with this file is a billable service.**

## Location of Activation File

Depending on the version of PxPlus and the operating system, the activation file can reside in different places. The actual location of the file can be specified on the PxPlus Command line by using the **-K:** command line argument or by defining an **ENVIRONMENT** variable of **PVXKEY** with the pathname to the directory where the **ACTIVATE.PVX** file resides.

The following are the **_default locations_** for the activation file:

**UNIX/Linux** |  The default placement of the **ACTIVATE.PVX** file is in the **Lib** directory where PxPlus is installed.  
---|---  
**Windows - PxPlus Version 2014 and later** |  The default placement of the **ACTIVATE.PVX** file is in a **PxpKeys** directory _one level above_ where PxPlus is installed. **_Example:_** If PxPlus is installed in the default "C:\PVX Plus Technologies\PxPlus 2014" location, then the **ACTIVATE.PVX** file will be placed in "C:\PVX Plus Technologies\PxpKeys".

#### **Note:**  
This placement allows multiple versions of PxPlus to be installed on the same machine and to share the activation file/keys.  
  
**Windows - PxPlus V6 through V11 and ProvideX** |  The default placement of the **ACTIVATE.PVX** file is in a **Keys** sub-directory within the **Lib** directory where PxPlus is installed.
