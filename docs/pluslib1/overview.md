# 

**PLUSLIB DLL Library** |  **__**  
---|---  
  
PxPlus supports the ability to create a freestanding program and data library within a single Windows DLL. This facility allows you to combine multiple programs and files, including images, into a convenient single file that can be included with the PxPlus EXE in order to run an application.

#### **Note:**  
**_Windows Only_** \- This feature is not available for UNIX/Linux installations.

Normally, when shipping a PxPlus-based application, the developer needs to include not only PxPlus but also the application's programs and supporting control files such as NOMADS panel libraries. Using the PxPlus DLL Library allows the application, along with its related programs and files, to be placed into a single DLL, which can be installed alongside PxPlus. This simplifies the installation process and minimizes the risk that individual programs and/or files could get lost or damaged, resulting in the application not working as designed.

Not only can the application itself be embedded within the DLL Library, but also all the PxPlus supporting programs and utilities that are normally found in the _Lib_ sub-directory.

**_Images_**

Images can also be added to the DLL library, and PxPlus can use them as if the images were in the current directory. All image types supported by PxPlus can be added (_.png_ , ._jpg_ , ._bmp_ , ._gif_ , ._ico_).

#### **Important Note:**  
If using WindX and images are being added, make sure that the PLUSLIB.DLL with the images **_is on the client_**.

_(Support for including images in the DLL library was added in PxPlus 2021.)_

**_Why Use the PxPlus DLL Library?_**

Below are some of the key advantages to using PxPlus DLL libraries as a means to distribute your application:

  * Reduces the number of files needing to be installed
  * Eliminates potential for changes to required code and/or control structures
  * Convenient way to release updates as a single DLL
  * Consistent with Vista UAC rights to prevent unwanted changes to application logic
  * Faster load times when accessing modules/files for DLL



The net result can be an application that installs with only the PxPlus EXE, its required DLLs (Grid, etc.) and your application DLL, all of which can be installed securely and in sections of the operating system that prevent unwanted tampering without proper authorization.

## See Also

**[Maintenance Utility](sect1.1/a.md)**  
**[File Lists](sect1.1/b.md)**  
**[DLL Library Conventions](sect1.1/c.md)**
