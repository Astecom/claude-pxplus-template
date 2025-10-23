# PLUSLIB DLL Library

**Maintenance Utility** |  **__**  
---|---  
  
A maintenance utility, **'*plus/dll/maint'** , is provided with PxPlus that allows you to build a DLL library from existing programs and data files. This simple text-based utility accepts the following commands:

**Command** |  **Function**  
---|---  
**ADD** _xxxx_ _,_ |  The **[ADD](../../directives/add.md)** directive will add one or more programs/files, including images, to the currently open library. For information on including images in the DLL library, see **[Images](../overview.htm#Mark1)**. The actual **ADD** operation will only take place when you issue an **UPDATE** command. If you have **_multiple_** files to add, you can place the file names in an external text file and pass that file name to the **ADD** command prefixed by a **<**  _less than sign_ (e.g. **ADD <appl1** will add all files/programs listed in _appl1_ to the library). See **[File Lists](b.md)**. _(Support for including images in the DLL library was added in PxPlus 2021.)_  
**CLOSE** |  Closes the currently open library. If any changes are pending (**ADD** s or **REMOVE** s), you will be prompted to apply the **UPDATE** before closing the file. If the update is not done, the pending changes will be lost.   
**HELP** |  Displays the Help text for the various commands.  
**LIST** _> xxxx _ |  Lists the contents of the library. If _> xxxx_ is supplied, the output will be routed to the file specified in _xxxx_.  
**MAKE** _xxxx_ __ |  Creates a new library and initializes it with the base line PLUSLIB.DLL found in ***plus/dll/pluslib_base.dll**.  
**OPEN** _xxxx_ __ |  Opens an existing library.  
**REMOVE** _xxxx_ _, ..._ |  The **[REMOVE](../../directives/remove.md)** directive will remove one or more comma-separated file(s) from the currently open DLL library. The actual **REMOVE** operation will only take place when you issue an **UPDATE** command. If you have **_multiple_** files to remove, you can place the file names in an external text file and pass that file name to the **REMOVE** command prefixed by a **<**  _less than sign_ (e.g. **REMOVE <appl1 **will remove the files/programs listed in _appl1_ from the library). See **[File Lists](b.md)**.  
**UPDATE** |  Physically updates the library with any pending **ADD** or **REMOVE** operations.  
**QUIT** |  Exits the utility.  
  
## See Also

**[File Lists](b.md)**  
**[DLL Library Conventions](c.md)**
