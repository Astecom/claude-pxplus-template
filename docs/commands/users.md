# Extended Commands

**USERS Console Command** |  **_View PxPlus Users_**  
---|---  
  
## Format

**USERS**

## Description

Typing the **USERS** command will display a list of all current PxPlus user processes on the system. Included in this list will be the process number, OS User ID, remote User ID and workstation (if running Simple Client Server), current application state (as set by ***it.dbg/Set_state**) and Command Line parameters.

When run on a **_graphical_** device such as on Windows or on a WindX-connected workstation, the output will be presented in a tree view with the option to highlight a specific task and terminate it.

When run on a **_text mode_** device, a simple list is displayed. (The user should use the **[KILL](kill.md)** command to terminate a process, if desired.)

_(The USERS command was added in PxPlus v9.00.)_
