# Extended Commands

**TASKS Console Command** |  **_View PxPlus Tasks_**  
---|---  
  
## Format

**TASKS{**_mask_**}**

**_Where:_**

_mask_ |  Contains an optional mask name to be applied to files opened by the running tasks. **_(Optional)_**  
---|---  
  
## Description

Typing the **TASKS** command will display a list of all PxPlus tasks (using the same executable) running on the system. Each task will have its respective process number and associated user name.

All files opened by the task will also be displayed along with open the current file status.

If a _mask_ is supplied, the command will only display those processes that have a file opened whose pathname contains the characters provided in the mask (case insensitive). This provides a simple means to display only those processes that may have a specific file open and/or record locked.

_(The TASKS command was added in PxPlus v7.65.)_
