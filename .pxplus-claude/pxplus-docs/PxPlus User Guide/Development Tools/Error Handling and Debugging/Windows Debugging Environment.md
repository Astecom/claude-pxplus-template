# Error Handling and Debugging

**Windows Debugging Environment** |  **__**  
---|---  
  
The Windows version of PxPlus includes a debugging environment that can be accessed via the PxPlus icon drop-down menu by selecting _Debugging Environment_. It comprises four separate windows that allow you to display lines of code, set break points, monitor variables and/or expressions, and work in a stand-alone command console while executing a program for testing.

To access these tools, simply press the key combination **Alt + Spacebar + D** , and then select one of the following debugging actions: **[TraceWindow](Windows%20Debugging%20Environment.htm#trace)**, **[WatchWindow](Windows%20Debugging%20Environment.htm#watch)**, **[BreakWindow](Windows%20Debugging%20Environment.htm#break)** or **[CommandWindow](Windows%20Debugging%20Environment.htm#command)**.

Debugging functionality can also be set on-the-fly in PxPlus using the **['OPTION'](../../../mnemonics/option.htm#debugging)** mnemonic:

> print 'OPTION'("DebugWindow","Trace")

## Disabling the Debugging Environment

The debugging facilities are automatically disabled if a lead program (see **[LPG](../../../variables/lpg.md)** system variable) is specified in the command for launching PxPlus. This can be overridden by adding the line DEBUG=1 to the [Config] section of the INI file. (The name of the INI file can be obtained via the**ARG(-1)** function.)

The debugging environment can be disabled by setting the DEBUG option to a value of -1 (negative one) in the INI file.

See **[INI Contents](../../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.md)** for explanations of these options.

## TraceWindow

TraceWindow is used to trace the execution of an application. It displays (up to) the last 4096 lines executed, which can be saved to a file for subsequent analysis. The menu items for this window include:

**Options** |   
---|---  
_Always on Top_ |  Displays TraceWindow always on top of PxPlus.  
_Font_ |  Changes font and font size for text in TraceWindow.  
_Auto-Start_ |  Auto-activates TraceWindow when PxPlus starts.  
_Log all Errors_ |  Logs errors trapped by**ERR=** ,**DOM=** ,**SETERR**.  
_Suppress Program trace_ |  Suppresses normal program tracing.  
_Suppress System Library_ |  Suppresses trace output from any program in the system library.  
_Trace If status_ |  Adds trace lines to **_both_** any active trace file (or console) **_and_** the Trace Window that consist of any IF condition evaluated and its result (True or False). The tracing of IF conditions is also available when single stepping through a program. The output consists of "IF: xxxxxx ! True/False" immediately after the trace line output and displays with a pale red or green background to clearly indicate if the results are True (green) or False (red).

#### **Note:**  
The IF output is shown **_only_** if the line is displayed on the trace (i.e. no display on protected programs).

The [**'IT'**](../../../parameters/it.md) system parameter can also be used to control the setting for this option. _(The Trace If status option was added in PxPlus 2018.)  
(The tracing of IF conditions when single stepping through a program was added in PxPlus 2019.)_  
_Jump trace_ |  Traces every transfer of control executed within the program and displays information that identifies the location (program/line number) of the logic executed. _(The Jump trace option was added in PxPlus 2018.)_  
_Trace to file_ |  Initiates the output of the TraceWindow to a serial file. When first selected, the system will request a file name, create it, and begin sending all of the data from the TraceWindow to this file. While the trace file is active (that is, tracing is being captured to a file), a small check mark will appear beside the "Trace to file" option on the menu. If you select this entry again, the system will stop output to the file, and the check mark will be removed.  
_AutoOpen trace file_ |  Automatically logs all trace output to a file. The output will be sent to the last file defined in the "Trace to file" whenever the TraceWindow is active.

#### **Note:**  
Trace output is **_only_** sent to the trace file **_if_** the TraceWindow is active. The window may be minimized, but tracing will end when it is closed.  
  
_Suppress Display_ |  Suppresses the display of the trace output.  
_Host Trace_ |  **_(WindX Only)_** Log All Errors and Trace Programs options for server-side programs. Trace lines from the host are prefixed with <h>.  
_Show Property GET_ |  Enables/disables property **GET** option.  
_Show Property SET_ |  Enables/disables property **SET** option.  
_Trace file Opens_ |  Enables/disables trace file opens option.  
_Trace Program Loads_ |  Controls the tracing of every program load and provides information as to why the load occurred (associated RUN, CALL, PERFORM, etc.).  
_Trace SQL commands_ |  Outputs a trace of all SQL commands issued by the system when running against a database.  
_File open Failures_ |  Enables/disables trace file open failures option.  
_File IO operation trace_ |  Enables/disables file IO operation trace option.  
_DebugPlus_ _with Backtrace_ |  Enables/disables DebugPlus backtrace option.  
_Exit_ |  Closes TraceWindow.  
**Edit** |   
_Copy_ |  Copies TraceWindow contents to the Windows Clipboard.  
_Find_ |  Search forward/backwards for search string.  
_Save to file_ |  Save TraceWindow contents to a file.  
_Clear trace list_ |  Clear the contents of the TraceWindow.  
_Trace List Size_ |  Options for setting the size of the trace buffer window: 1K, 2K, 8K, 16K or 32K lines. If the selected trace buffer is smaller than the data currently in the buffer, then the trace buffer will be reset.  
  
The **[SETTRACE PRINT](../../../directives/settrace.md)** directive can be used throughout an application to output directly to the TraceWindow; however, this directive is ignored if the _Suppress Program Trace_ option is active.

**_Under WindX_** , TraceWindow serves a dual purpose. Normal tracing/error logging options are relative to the WindX workstation itself. Host tracing capabilities are controlled by a separate Options item. This allows the application to follow program execution on the server while tracing remote calls back to the workstation.

## WatchWindow

WatchWindow allows you to constantly monitor variables and/or expressions during program execution. These settings may be copied to the Clipboard or saved in a file for subsequent reload. The menu items for this window include:

**Options** |   
---|---  
_Always on Top_ |  Displays WatchWindow always on top of PxPlus.  
_Font_ |  Changes font and font size for text in WatchWindow.  
_Auto-Load_ |  Auto-loads watch values from the last Save to file.  
_No data break_ |  Output without breaks.  
_50 byte data break_ |  Automatic breaking of string data every 50 bytes.  
_100 byte data break_ |  Automatic breaking of string data every 100 bytes.  
_Host Watch_ |  **_(WindX Only)_** Enables/disables server-side watch values.  
_Exit_ |  Closes WatchWindow.  
**Edit** |   
_Copy_ |  Copies WatchWindow settings/contents to the Clipboard.  
_Save to file_ |  Save WatchWindow settings/contents to a file.  
_Load from file_ |  Load settings from a previously saved file.  
_Clear all watches_ |  Remove all of the current watch values.  
_Add new watches_ |  Prompts for a variable/expression to add to WatchWindow. The window stays open after a new watch is added to allow multiple watches to be added one after the other. _(The ability to add multiple new watches consecutively was added in PxPlus 2022.)_  
_Delete current watch_ |  Delete the currently selected watch value from the window.  
**Add new watches**|   
|  Same as selecting _Add new watches_ on the **Edit** menu.  
  
_(The "Add new watches" top-level menu was added in PxPlus 2022.)_

## BreakWindow

BreakWindow is used to assign logical break points for halting execution in an application. You can specify the name of the program, line reference, and optional condition to test. The menu items for this window include:

**Options** |   
---|---  
_Always on Top_ |  Displays BreakWindow always on top of PxPlus.  
_Font_ |  Changes font and font size for text in BreakWindow.  
_Auto-Start_ |  Auto-activates BreakWindow when PxPlus starts.  
_Host Breakpoints_ |  **_(WindX Only)_** Enables/disables server-side break points.  
_Exit_ |  Closes the BreakWindow.  
**Edit** |   
_Copy_ |  Copies BreakWindow contents to the Clipboard.  
_Save to file_ |  Save BreakWindow settings to a file.  
_Load from file_ |  Load settings from a previously saved file.  
_Clear all breaks_ |  Remove all of the break points.  
_Add new breaks_ |  Establish a new break point with the parameters listed below. The window stays open after a new break point is added to allow multiple break points to be added one after the other. |  _Program_ |  Program name to add a break point to. Click the _Browse_ button to specify a program name.  
---|---  
_Statement_ |  Statement (number or label) for the break point.  
_Break when_ |  Break when on variable name or Boolean expression.  
_Changes_ |  Changes condition regarding variable specified.  
_Is true_ |  "Is true" condition regarding Boolean expression specified.  
_Limit to current level/object_ |  Select this check box to indicate that the value specified is **_only_** checked when the program/process runs at the current level or is sharing the variable stack with the current level, as in the case of an object or [**PERFORM**](../../../directives/perform.md) directive. Selecting this option prevents the break point from being "tested" when a subroutine is called.  
  
_(The ability to add multiple new break points consecutively was added in PxPlus 2022.)_  
  
_Delete current break_ |  Delete the currently selected break point from the window.  
**Add new breaks**|   
|  Same as selecting _Add new breaks_ on the **Edit** menu.  
  
_(The "Add new breaks" top-level menu was added in PxPlus 2022.)_

## CommandWindow

This window can be used to handle all console commands without disrupting your standard screen display. The menu items for this window include:

**Options** |   
---|---  
_Always on Top_ |  Displays CommandWindow always on top of PxPlus.  
_Font_ |  Changes font and font size for text in CommandWindow.  
_Auto-Start_ |  Auto-activates CommandWindow when PxPlus starts.  
_Exit_ |  Closes the CommandWindow.  
**Program** |   
_New program_ |  Set up an empty "No Name" program file.  
_Load_ |  Load a program from a file.  
_Save_ |  Save the current program file.  
_Save as_ |  Allows you to name and save the current program file.  
_Print Setup_ |  Set up the printer options, paper size, etc.  
_Print_ |  Print the current program.  
**Edit** |   
_Copy_ |  Specify a range of lines to copy to the Clipboard.  
_Paste_ |  Pastes text from the Clipboard.  
_List lines_ |  Specify a starting and ending statement range to list.  
_Delete lines_ |  Specify a starting and ending statement range to delete.  
_Find_ |  Find a text value in the current program.  
_Replace_ |  Find and replace a specified text value.  
_Renumber_ |  Renumbers the current program.  
**Run** |   
|  Start execution of the current program.  
**Step** |   
|  Single step through the current program.  
**Terminate** |   
|  Stop execution of the current program.  
  
#### **Note:**  
The CommandWindow facility is also available under WindX.
