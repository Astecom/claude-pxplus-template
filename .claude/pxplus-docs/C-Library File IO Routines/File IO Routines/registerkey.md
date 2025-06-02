# C-Library File IO Routines

**PVK_RegisterKey( )** |  **_Register Usage of Library_**  
---|---  
  
## Format

int **PVK_RegisterKey**(**HPVKENV** _hEnv_ _,_ char  _*reg_str, long reg_num_);

**_Where:_**

_hEnv_ |  Handle to environment structure created by **[PVK_AllocEnv( )](allocenv.md)**  
---|---  
_reg_str_ |  Registration string provided by PVX Plus Technologies Ltd.  
_reg_num_ |  Registration number provided by PVX Plus Technologies Ltd.  
  
## Description

**PVK_RegisterKey(** **)** must be called prior to opening the first file in order to provide the DLL with a valid registration string and key. Without this registration information, a warning message that requires user intervention will be displayed whenever a file is opened.

#### **Note:**  
The PXPIO routines are not to be redistributed as part of any application without first having purchased and obtained a proper registration string and number from PVX Plus Technologies Ltd.
