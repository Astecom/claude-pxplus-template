# Calling DLLs from PxPlus

**PxPlus DLL Interface** |  **__**  
---|---  
  
In PxPlus, the **DLL( )** function is used to load, find and execute functions within external OS-loadable modules. It provides a direct interface for both MS Windows **_DLL files_** and UNIX/Linux **_shared object modules_**. The function **TCB(196)** will return 1 to indicate that**DLL( )** is supported for a particular UNIX/Linux environment.

The general methods for using this function involve the following formats:

|  Accessing the DLL by name: |  _lib_num_ = **DLL(ADDR** _lib_string$_ [, **ERR=**_stmtref_ ] **)**  
---|---|---  
|  Accessing the DLL using its internal library identifier: |  **DLL(**_lib_num,fnc_name$,arg_ [ _,arg,arg..._ ][ _,_**ERR=**_stmtref_ ] **)**  
|  Accessing a function within the DLL by its memory address: |  _fnc_addr_ _=_**DLL(FIND** _lib_num,fnc_name$_ [ _,_**ERR=**_stmtref_ ] **)**  
  
Other formats for calling by string, library number, or function address are also available.

For complete syntax details, see **[DLL( )](../../../functions/dll.md)** function.

#### **Note:**  
The**[DLL]** special command tag is **_not_** associated with the PxPlus**DLL( )** function (DLL interface). It is used as a prefix in an**OPEN** statement to denote that PxPlus is to route all file I/O requests via an external (user-defined) DLL file.
