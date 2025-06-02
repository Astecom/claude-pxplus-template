# IT - Integrated Toolkit™  
  
**Debug Facility** |  **__**  
---|---  
  
IT provides a number of features and capabilities through its built in debugger. The Debug tools allow you to launch a new session to debug, as well as allow you to connect to any other currently running session to help solve problems that might occur while a program is up and running.

The debugger can be involved on the current program at any time by pressing **F7** , which will launch a new PxPlus session and automatically start the debug session. Alternatively, you can select _Debug_ from the menu bar and attach to an existing application process.

Once in debug mode, the Debug control panel and display area will be displayed either at the bottom of the main *IT screen or in a separate window. This is controlled by clicking the toggle button (button with four triangles) in the upper right corner of the Debug display. Displaying the Debug control panel as a separate window provides you with more space to view/edit the program and gives you the option to move it to another part of your workstation or even to a separate monitor where it can be resized as desired.

The horizontal sizer bar control above the Debug control panel can be used to adjust the size of the Debug display. Position the mouse pointer on the sizer control until the pointer changes to a double-headed arrow, and then drag the mouse to the desired size. The location of the sizer bar is saved between sessions.

The bar across the top of the Debug panel provides the following tools for controlling the execution of the application:

_Task#_ |  Displays the Task or Process ID of the process you are debugging.

#### **Note:**  
You can also see the Task or Process ID (if running Windows or WindX) by selecting _About PxPlus_ from the system menu.  
  
---|---  
_(Views drop box)_ |  Displays the five main views of a process being debugged: |  _Call Stack_ |  The _Call Stack_ displays a list of all the programs currently on the program execution stack. Program GOSUB/RETURN, FOR/NEXT or WHILE/WEND on the local stack display when expanding the program tree entry. Double clicking on an entry in the Call Stack will cause the system to load and transfer to the selected program/statement.  
---|---  
_Watch values_ |  The _Watch_ value display allows you to view the variables and expressions from the currently running program. To add entries to the Watch list, you can simply type the name of the variable or expression in the _Expression_ field, or select the _Add to Watch_ option when right clicking on a variable in the program Synopsis display.

#### **Note:**  
When using expressions, avoid functions or methods that might affect the application execution, such as the RCD function that changes file positions.  
  
_Breakpoints_ |  The _Breakpoints_ display allows you to add/delete breakpoints (places in the process where you want execution to automatically halt) from the system. The display includes the line number and program name for all current breakpoints. To add new breakpoints, load the program, right click on the statement where you want the breakpoint inserted and select _Insert Breakpoint_ from the popup menu.  
_Files_ |  The _Files_ display shows the currently opened files and their state, which includes the current record key, extract status, etc.  
_Trace_ |  During a debug session, the system tracks program execution in an internal trace buffer. Selecting the _Trace_ display allows you to view the last 500 instructions from that buffer. The Trace list uses a special Tree View display, allowing for the automatic collapsing and expanding of the trace output in the programs. Like the _Call Stack_ , double clicking an entry in the Trace list will cause the program and line to be displayed in the Edit window. Right clicking or pressing CTRL - F3 brings up a search function that is used to search a trace for a specific character sequence.  
_Load Program_ |  Causes the current program being edited to be loaded into the process.  
_Stop_ |  Ends the execution of the process (effectively issues an END).  
_Pause_ |  Pauses execution of the process.  
_Refresh_ |  Updates all the debug information and attempts to resync the program edit window with the application being debugged.  
_Terminate Process_ |  Terminates the task and closes the debug session.  
_Run_ |  Resumes execution of the process.  
_Single Step_ |  Executes a single directive in the process being debugged.  
_Continuous Steps_ |  Repeatedly executes a Step followed by a Refresh, providing the programmer a real time display of the process as the code is executed.  
_Step Over_ |  Executes the next directive, and if a GOSUB, CALL or other such directive, stops only once the directive completes.  
_Step Out_ |  Resumes execution of the process until the current GOSUB, CALL or other stacked logic is completed.  
  
## Live Data Display

During a debug session, the program display/edit region becomes an active variable and expression display. When the mouse pointer is positioned over a variable in the program display/edit region, the system displays the variable contents in a tip window.

In addition, when you highlight full expressions with the mouse and then position the mouse pointer over the highlighted expression, the system evaluates and displays the result of the expression.

## Application Interface

The Debug facility comes with two special interfaces that can be used to help co-ordinate between the debugger and the application being debugged:

**Wait for Debugger** |  **CALL** "*it.dbg/process;Wait", _description$_ The Wait entry point in *it.dbg/process can be used to cause an application to wait until the debugger is attached and monitoring its execution. The optional description field can be used to help the programmer identify the process waiting. The value in the _description_ parameter will be displayed in the list of active tasks shown in the "Attach Process" and "Terminate Process" process lists.  
---|---  
**Identify Process** |  **CALL** "*it.dbg/process;Set_State", _description$_ The Set_State entry point can be used to identify a process on the system. Like the Wait entry point, it takes the description passed and will record it for display in the process list. This function can be used by application designers in general to aid in the identification of processes. By calling this function during normal execution, the *IT debugger can be used to locate and track processes in the system. For example, if an application's menu system updated the state to indicate the current menu selection being processed, the *IT process list could be used to determine what each user in the system was doing.
