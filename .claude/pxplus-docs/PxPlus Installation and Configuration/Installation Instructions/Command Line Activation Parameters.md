# Installation Instructions

**Command Line Activation Parameters** |  **__**  
---|---  
  
The PxPlus activation for Windows and UNIX/Linux can be set up to run directly from the command line. The activation utility supports various parameters that can be used in place of the interface/prompts.

#### **Important Note:_  
_** When performing an activation from the command line, ensure that _all_ key-related parameters are supplied together and contain valid information. These specific parameters are listed with an *****_asterisk_ below. Arguments that include spaces must be enclosed in quotes; e.g. -n "ABC Industries Ltd."

**Windows** command prompt _pxpwactv.exe_ parameters:

**Parameter** |  **Description**  
---|---  
**-a**  _xxxx_ |  _xxxx_ is the directory to hold the activate key file  
**-c**  _xxxx_ |  _xxxx_ is the pathname to the INI file  
**-d** |  Create a DEMO key  
**-do** |  Create a DEMO key if there is no pre-existing key  
**-h** |  Hidden - no dialog and no confirmation message  
**-i** |  Initialize/reset the file  
**-k**  _key_ |  * Product key  
**-l**  _xxxx_ |  _xxxx_ is the LIB directory  
**-n**  _name_ |  * _name_ is the registered name for the user  
  
**UNIX/Linux** prompt  _pxpreg_ parameters:

**Parameter** |  **Description**  
---|---  
**-a**  _xxxx_ |  _xxxx_ is the directory for the keys  
**-d** |  Create a DEMO key  
**-do** |  Create a DEMO key if there is no pre-existing key  
**-i** |  Initialize/reset the registration file  
**-k**  _key_ |  * Process and record 25-character registration key  
**-l**  _xxxx_ |  _xxxx_ is the LIB  
**-n**  _name_ |  * _name_ is the registered name for the user  
**-r**  _nnnn_ |  Remove package number _nnnn_ from keys  
**-v** |  View existing keys on system  
**-?** |**-h** |  View list of options  
  
#### **Note:**  
Activations are verified by PxPlus at start up, not by the activation utility. Therefore, if an activation is recorded incorrectly, the session will fail and return the error message: NO VALID ACTIVATION FOUND!! See **[Troubleshooting](../Troubleshooting/Activation%20Messages.md)**.
