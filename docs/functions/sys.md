# System Functions

**SYS( )** |  **_Invoke Operating System Command_**  
---|---  
  
##  Formats

1. |  _Invoke Operating System Command_: |  **SYS(**_command$_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Signal Another Process (UNIX/Linux Only)_: |  **SYS(**_pid_[,_signal_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_command$_ |  Command to be processed. Maximum string size 8KB.  
---|---  
_pid_ |  UNIX/Windows Process ID value to check/notify. Numeric expression.  
_signal_ |  Optional signal value to send to the UNIX Process ID. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Operating system code identifying command passed to it by the function.

##  Description

The **SYS( )** function passes a given string or numeric Process ID to the operating system command processor for execution.

If the **['IW'](../parameters/iw.md)** system parameter is disabled (**_Off_**), the user can force PxPlus to exit the wait state and continue to run by clicking on the PxPlus window or changing focus to it.

##  Format 1

**_Invoke Operating System Command_**

**SYS(**_command$_**[,ERR=**_stmtref_**])**

**SYS( )** returns the operating system's code identifying the command. It returns 0 (zero) if the task is running and not zero (usually -1) if it is unsuccessful. The value in the system variable **[RET](../variables/ret.md)** can be checked for an error value if the function was unsuccessful.

**_Example_**** _:_**

> 0010 print 'CS',"Menu"  
>  0020 print " 1: List directory"  
>  0030 print " 2: Run WORD processor"  
>  0040 print " 3: Run SPREADSHEET"  
>  0050 print " X: Sign off"  
>  0060 input "Enter selection:",X$  
>  0070 if X$="1" then let X$="ls"; goto 0500  
>  0080 if X$="2" then let X$="wp"; goto 0500  
>  0090 if X$="3" then let X$="123"; goto 0500  
>  0100 if X$="X" then quit  
>  0110 print 'RB',; goto 0060  
>  0500 A=sys(X$)  
>  0510 if A<>0 then print "Command '"+X$+"' FAILED"  
>  0520 goto 0020

##  Format 2

**_Signal/Terminate_**** _Another_ _Process_**

**SYS(**_pid_[,_signal_][,**ERR=**_stmtref_]**)**

The **SYS** function can be used to determine the state or interrupt/terminate another process on the system. If the _signal_ is omitted or set to 0 (zero), the **SYS** function will return 0 if the specified process is still executing or -1 if the process cannot be found (terminated).

On **_Windows_** , the **SYS** function can only be used to get the status of or terminate a process with the terminate status given in _signal_.

On **_UNIX/Linux_** , the **SYS** function can be used to send a signal to another process, which **_may_** cause the other process to terminate depending on the signal chosen. Sending a signal 2 (SIGBREAK) from a session or from the UNIX shell will initiate a program's **SETESC** logic. Sending a signal 15 requests that the process shutdown. Signal 9 is a forced termination request.

**_Example:_**

On **_UNIX/Linux_** , to send an ESCAPE/Break to the process whose ID is in _pid_ :

> X=SYS(_pid_ ,2)

The first argument is the _pid_ signal to send, and the second is the signal number. To obtain the _pid_ for the current process, use **TCB(** **89)** , which returns the numeric value of the current Process ID.

On **_Windows_** , a special _pid_ value of -1 can be specified to check the state of the process initiated by the last [**SYSTEM_HELP**](../directives/system_help.md) directive.

##  See Also

[**INVOKE Execute Operating System Command**](../directives/invoke.md)  
[**GID Operating System Process Identifier**](../variables/gid.md)  
**['IW' Force INVOKE WAIT](../parameters/iw.md)**
