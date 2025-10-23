# External Components

**Calling DLLs from PxPlus** |  **__**  
---|---  
  
A **DLL** is essentially a free-standing library of functions contained in a single file that allows different applications to run various shared services. Applications use DLLs to access external functionality such as that provided as part of an **API** by opening a DLL file and by calling each function within the DLL as it is required.

The functions that provide the services available within a large operating system API are likely to be contained in a number of DLL files.

**_Example:_**

Access to the **_Microsoft Windows API_** is handled via calls to the following primary DLL files:

|  **gdi32.dll** |  For graphics-oriented functionality  
---|---|---  
|  **kernel32.dll** |  For access to low level operating system features  
|  **user32.dll** |  For controlling most visible screen controls  
  
As of Windows XP, these basic controls reside in comctl32.dll, together with the common controls (Common Control Library).

Programmers must already know which functions are available and how to access them if they plan to include DLL calls in their program's code. It is also important to ensure DLL version compatibility and to acquire/consult the necessary API system documentation in order to implement DLLs successfully.

#### **Warning!**  
You can use third-party DLLs but be certain of what you are passing and getting back. PVX Plus Technologies Ltd. offers assistance on how to call a DLL but will not provide support for third-party DLLs. There is no validation on what you pass. Bad pointers are liable to cause memory and data corruption and may result in a GPF.
