# Extended Commands

**KILL Console Command** |  **_Terminate PxPlus Process_**  
---|---  
  
## Format

**KILL** _procid_

**_Where:_**

_procid_ |  Process ID of the task to be terminated.  
---|---  
  
## Description

The **KILL** command can be used to terminate a PxPlus process on the system (although technically it can terminate any process). The process ID specified in _procid_ __ will be verified as a currently running process, and if so, a terminate request will be sent to the task.

The **KILL** command will not allow users to kill their own process.

_(The KILL command was added in PxPlus v7.65.)_

## Security

The **KILL** command can be secured by creating a security program ***it.dbg/security** and placing a password on it. Whatever password is chosen for the program will be the password required to issue a **KILL** command. The contents of the program are not used; therefore, a simple remark line as the program would be sufficient.

In addition, Operating System security will also control who can **KILL** a process. Generally, only a system supervisor (such as the UNIX/Linux root User ID) or a user with Administrator permissions can terminate processes.
