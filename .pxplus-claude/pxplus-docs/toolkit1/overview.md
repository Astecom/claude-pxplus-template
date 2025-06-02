# 

**IT - Integrated Toolkit™** |  **__**  
---|---  
  
The PxPlus Integrated Toolkit™ (*IT) provides a comprehensive integrated development environment that brings together many of the components needed for the development and debugging of a PxPlus application. At the core of *IT is a graphical program editor used for directly entering and editing application programs.

The main Integrated Toolkit screen provides three separate regions for program information, program editing/development and debugging information. See **[Screen Layout](sect1.1/a.md)**. The components that make up the Integrated Toolkit include:

|  |  **[Program Editor](Using%20the%20Program%20Editor.md)**  
---|---|---  
|  |  **[Program Synopsis](sect1.1/d.md)**  
|  |  **[Debug Facility](sect1.1/b.md)** (including Client Server applications)  
|  |  Built-in Program **[Version Control](sect1.1/c.md)** interfaces  
|  |  **[Program Compare Utility](Program%20Compare.md)**  
|  |  **[Projects Manager](sect1.1/e.md)**  
|  |  **[Library Manager](sect1.1/f.md)** for NOMADS Object, Program and Text Macro libraries  
  
All of these components are designed to work together within the Windows environment, or they can be used remotely using the Client Server interfaces within PxPlus.

To invoke the *IT - Integrated Toolkit, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Select _Program Editor (*IT)_ from the **PxPlus IDE** category at the top of the tree view.  
From the PxPlus Command line |  Enter: **IT**  
  
When you type **IT** at the Command prompt, the current program in memory is loaded into the editor. When you finish editing your program, **_save_** the program and the program will automatically be reloaded from disk into memory when you exit the editor.

#### **Important Note:**  
If you do not save the program prior to exiting the editor, you will lose your changes.  
  
From the PxPlus Command line |  Enter: **RUN "*IT**  
From the PxPlus Command window |  From the _Utilities_ menu, select _Integrated Toolkit._  
  
**_OR_**  
  
From the _Edit_ menu, select _Edit (graphical)_.  
Launch programmatically |  Use the **[CALL](../directives/call.md)** directive. The **CALL** directive accepts optional arguments that include the name of the program to be loaded and the label or line number at which to position the editor. **_Examples:_** call "*it" ! Invokes *it  
call "*it", "myprog" ! Invokes *it and loads "myprog"  
call "*it", "myprog","1000" ! Invokes *it, loads "myprog" and positions at line number 1000  
call "*it", "myprog","mylabel" ! Invokes *it, loads "myprog" and positions at "mylabel" label  
call "*it", "myprog;mylabel" ! Invokes *it, loads "myprog" and positions at "mylabel" label  
**[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** |  To enter program logic, select the **Logic** folder tab in the control's properties window and click the Program logic button. For information on entering program logic in NOMADS, see **[Program Editor](../NOMADS%20Graphical%20Application/Program%20Interaction/Events%20Logic/Program%20Editor.md)**.  
Windows shortcut |  The Graphical Program Editor can be invoked directly from a Windows shortcut. Create a shortcut whose _target_ is: **[path to PxPlus]\pxplus.exe *it** Optional arguments may also be used that include the name of the program to be loaded and the label or line number at which to position the editor. **_Examples:_** /pvxplus/pxplus.exe *it  
/pvxplus/pxplus.exe *it arg "myprog" "1000"  
/pvxplus/pxplus.exe *it arg "myprog;1000"  
/pvxplus/pxplus.exe *it arg "myprog" "mylabel"  
/pvxplus/pxplus.exe *it arg "myprog;mylabel"  
Windows program association |  The Graphical Program Editor can be invoked through a Windows association. If your programs have a common extension, you can set up an association to invoke the editor and load the program when you double click on the file in Windows Explorer. When you set up the association, set the _'Action'_ to OPEN, and for _'Application used to perform action'_ , enter: **"[path to PxPlus]\pxplus.exe" *it arg "%1"** (include the quotes) **_Example:_** "C:\pxplus\pxplus.exe" *it arg "%1"
