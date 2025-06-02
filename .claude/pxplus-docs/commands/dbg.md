# Extended Commands

**DBG Console Command** |  **_Debug Task_**  
---|---  
  
## Format

**DBG [_process_** _-**id**_**]**

**_Where:_**

_process-id_ |  Process number of the task to be connected to for debugging.  
---|---  
  
## Description

The **DBG** command provides a built in text mode debugger that allows the developer to monitor and control other PxPlus tasks in the system. To use the debugger, the user must first identify and select the process to debug. The process ID can be provided on the Command line, or the **Connect** command can be used to establish the connection.

The debug commands are listed below.

**Command** |  **Description**  
---|---  
**_C_ onnect **_procid_ |  Connect to process.  
**_D_ isconnect** |  Disconnect from process.  
**_T_ asks [** * **]** |  List known processes. If you specify an _asterisk_ on the request, all tasks along with their current program will be displayed.  
**_H_ alt** |  Halt/suspend the process.  
**_G_ o** |  Resume the process.  
**_E_ xecute**  _xxxx_ |  Execute command within process (e.g. E Goto 10, E X$="newvalue").  
**_L_ ist [**  _from_ **[**_to_ **]]** |  List statements (optional _from_ /_to_ line numbers).  
**_K_ ill** |  Terminate/kill the process. System asks to confirm this process before proceeding.  
**_P_ rint** _xxxx_ |  Evaluate and show _xxxx_ from process (e.g. P X$).  
**_F_ iles** |  Show a list of all open files and their current state.  
**_S_ tack** |  Shows the current **CALL/GOSUB/FOR/WHILE** stack.  
**_W_ here** |  Show current program and line number.  
**_._**  _xxx_ _(period)_ |  The "_dot_ " command can be used to step through a program either a single statement at a time or until the condition specified in _xxx_ occurs: |  **xxx** |  **Step Until Condition**  
---|---  
_Program_ |  Till program change  
_Around_ |  Around next **GOSUB/CALL** /etc.  
_Out_ |  Out of current program level  
_nnn_ |  _nnn_ Instructions are executed  
**_Q_ uit** |  Disconnects from the current process (if any) and exits the debugger.  
**_?_** |  Displays help on the debug commands.  
  
All commands accept the first character only, as in "P X$" to print X$.

The **DBG** processor remembers the last 100 commands, and they can be recalled using the Up/Down arrows.

_(The DBG command was added in PxPlus v8.30.)_
