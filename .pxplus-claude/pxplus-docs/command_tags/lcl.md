# Special Command Tags

**[LCL]** |  **_Access to User's Local Machine_**  
---|---  
  
## Description

The **[LCL]** tag can be included in a number of system directives to route the command to the user's local machine irrespective as to whether the user is using the system via WindX or directly executing the application. Its purpose is to allow the application designer to create code that will be portable. It will route requests to the end user local workstation without the application having to know how the user is connected.

When the **[LCL]** tag is used on the system, if the user is running the application directly, then the tag is ignored and dropped. If the application is being run via WindX or JavX, the **[LCL]** tag is automatically replaced with a **[WDX]** tag. See [**[WDX] Direct Action to Client Machine**](wdx.htm).

The commands/directives that support the **[LCL]** command tag are:

|  CALL "**[LCL]**..." , ... |  KEYED "**[LCL]**..."  
---|---|---  
|  DEF OBJECT id, "**[LCL]** ..." |  NEW ( "**[LCL]**..." )  
|  DIRECT "**[LCL]**..." |  OPEN (..) "**[LCL]**...."  
|  DIRECTORY "**[LCL]**..." |  PROGRAM "**[LCL]**..."  
|  ERASE "**[LCL]**..." |  REFILE "**[LCL]**..."  
|  EXECUTE "**[LCL]**..." |  SERIAL "**[LCL]**..."  
|  INDEXED "**[LCL]** " |  SORT "**[LCL]**..."  
|  INVOKE "**[LCL]**..." |   
  
The use of the **[LCL]** tag is also supported in _Format 2_ of the **[PTH( )](../functions/pth.md)** function.

_(Support for the [LCL] tag was added in PxPlus v6.30.)_

## Example

The following logic will open the file "C:\data\spread.csv" on the local workstation currently being used by the user:

> open (hfn)"[LCL]C:\data\spead.csv"

#### **Note:**  
WindX will support all the directives and functions that are used against a file channel that was previously opened with a **[[WDX]](wdx.htm)** or **[LCL]** tag.

## See Also

**[CALL Transfer to Subprogram](../directives/call.md)**  
**[DEF OBJECT Define Windows Object](../directives/def_object.md)**  
**[DIRECT Create File with Keyed Access](../directives/direct.md)**  
**[DIRECTORY Create Subdirectory](../directives/directory.md)**  
**[ERASE Delete File/Directory from System](../directives/erase.md)**  
**[EXECUTE Execute Basic Instruction](../directives/execute.md)**  
**[INDEXED Create Indexed File](../directives/indexed.md)**  
**[INVOKE Execute Operating System Command](../directives/invoke.md)**  
**[KEYED Create Single/Multi-Keyed File](../directives/keyed.md)**  
**[NEW( ) Create New Object](../functions/new.md)**  
**[OPEN Open a File for Processing](../directives/open.md)**  
**[PROGRAM Create or Assign Program File](../directives/program.md)**  
**[REFILE Clear Record from File](../directives/refile.md)**  
**[SERIAL Create a Sequential File](../directives/serial.md)**  
**[SORT Create File for Sorting](../directives/sort.md)**
