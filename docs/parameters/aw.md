# System Parameters

**'AW'=** |  **_Alternate Windows Setup Configuration_**  
---|---  
  
##  Description

**_(Windows/WindX Only)_**

Switches WINPRT_SETUP from implementing legacy 16-bit compatible functions to the Windows-recommended API calls (which observe account privileges).

Enabling the **'AW'** system parameter assures that the windows printer select routines properly handle account security and configuration settings. This can be highly important when running a Terminal Services system or Ctrix where multiple users will share a common hardware platform.

##  Default

Default state is **_Off_**  _(On for ProvideX)_.

#### **Note:**  
The default state of this parameter is different between PxPlus and the older Pr _o_ videX product. It is suggested that you set this parameter to whatever your desired setting is should you run a mixed environment.
