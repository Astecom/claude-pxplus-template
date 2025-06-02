# Special Command Tags

**[DLL]** |  **_Dynamic Link Library_**  
---|---  
  
##  Format

**OPEN** (_chan_ ,[_fileopt_])"**[DLL:_lib_name_ ;_fnc_name_]**_params_ "  
  
**_Where:_**

**[****DLL ..]** |  File tag clause to inform PxPlus that it will be opening a **_Dynamic Link Library_** (DLL).  
---|---  
_chan_ |  Channel or logical file number to open.  
_fileopt_ |  File options.  
_fnc_name_ |  Case-sensitive name of the function. It acts as the entry point into the library. String expression.  
_lib_name_ |  Path and/or name of the freestanding Dynamic Link Library that contains the external function you want to invoke. String expression.  
_params_ |  DLL-specific parameters. Semi-colon separated arguments and/or variables to receive returned values, etc.  
  
##  Description

#### **Note:**  
DLL is supported for use in **_WindX_** or **_Windows only_**.

The **[DLL]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to an external (user defined) DLL. The **[DLL]** tag is built into the PxPlus programming language, which recognizes the tag and deals with it internally at run time. A DLL is a freestanding Dynamic Link Library of 'C'-style functions (external to PxPlus) that is used in Windows environments. For library names, the .DLL extension is not mandatory (other extensions, such as .EXE, are also used). Case-sensitive function names serve as entry points into the DLL.

#### **Warning!**  
You can use third party DLLs; however, make sure you have good documentation on what you are passing and getting back. Sage Software can provide assistance on how to call a DLL but does not provide support for third party DLLs. There is no validation on what you pass. Bad pointers can cause memory corruption.

GPFs are not uncommon.

##  Example

process server "Inventory" on "[DLL]c:\app\server.dll;Entry"  
open (1)"[dll:dbase2.dll;entry]cust.db"

##  See Also

**[DLL( ) / DLX( ) Call External Function](../functions/dll.md)**  
**[OPEN Open a File for Processing](../directives/open.md)**
