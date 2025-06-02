# Directives 

**SETTRACE** |  **_Enable Program Tracing_**  
---|---  
  
##  Formats

1\. _Set Trace, Define File:_ |  **SETTRACE**[**(**_chan_**)**]  
---|---  
2\. _Trace File String:_ |  **SETTRACE PRINT** _strval_ _$**|** numval****_**[** ,...**]**  
3\. _Set Tracing of Windows Host Program:_ |  **SETTRACE SERVER**  
4\. _Trace String to System Log:_ |  **SETTRACE RECORD** _strval_ _$**|** numval****_**[** ,...**]**  
5\. _Open Trace Window (Windows Only):_ |  **SETTRACE SHOW**  
6\. _Minimize Trace Window (Windows Only):_ |  **SETTRACE HIDE**  
7\. _Clear Trace Window:_ |  **SETTRACE CLEAR**  
8\. _Disable Object Tracing:_ |  **SETTRACE DISABLE**  
9\. _Open Trace Window, Enable Trace Log:_ |  **SETTRACE OPEN** _pathname_  
10\. _Close Trace Window, Close Trace Log:_ |  **SETTRACE CLOSE**  
11\. _Suppress Trace Output:_ |  **SETTRACE STOP**  
12\. _Resume Trace Output:_ |  **SETTRACE START**  
  
**_Where_**:

_chan_ |  Channel or logical file number of the file to which the trace output will be written.  
---|---  
**CLEAR** |  Keyword indicating you want the Trace window to be cleared.  
**CLOSE** |  Keyword indicating you want to close both the trace window and any log file that is being used to capture the trace output. No error will be generated if tracing is currently not active.  
**DISABLE** |  Keyword indicating you want to disable the ability to trace (or step into) an object whose definition include SETTRACE DISABLE.  
**HIDE** |  Keyword indicating you want the Trace window to be minimized.  
_numval_ _$_ |  Numeric value that will be converted to a string and sent to the trace output.  
**OPEN**  _pathname_ |  Keyword indicating you want to open the trace window and enable logging of the trace records to the pathname specified. The file must already exist; otherwise, an Error 12 will be generated.  
**PRINT** |  Keyword indicating the trace of a file string.  
**RECORD** |  Keyword indicating the data will be sent to the system error log.  
**SERVER** |  **_For Internal Use Only_**  
**SHOW** |  Keyword indicating you want the Trace window to show.  
**START** |  Keyword indicating you want to resume trace output on the Debug window.  
**STOP** |  Keyword indicating you want to suppress trace output on the Debug window.  
_strval_ _$_ |  Character string expression to be sent to the trace output.  
  
_(Support for the RECORD keyword was added in PxPlus v8.11, build 9182.4.)  
(Support for the CLEAR, DISABLE, HIDE and SHOW keywords was added in PxPlus v11.00.)_

##  Description

When you use the **SETTRACE** directive, the system lists all statements as they are executed until an **ENDTRACE** is encountered.

The **END** and **STOP** directives halt tracing. Tracing is suppressed during the execution of a password-protected program. When tracing, execution lists the statements either to the terminal or to a file (if you designate a channel in a **SETTRACE** directive). If you use a file, you have to open it first, and if it is a serial file, you have to lock it.

It can be confusing if an error occurs in the output/trace file since the error will be reported as an error for the current statement being traced, which itself may not be in error.

The **SETTRACE PRINT** produces no output if no trace file or window is active.

#### **Note:**  
When a program run via WindX encounters a **SETTRACE PRINT** , a message is always sent to the WindX client, regardless of whether a trace file is defined or a trace window is open. This will result in a performance hit to the program every time it encounters a **SETTRACE PRINT** since it has to send a message over a network.

The **SETTRACE RECORD** produces no output if no system log exists. When defining the log file, you can specify the maximum file size (in megabytes) that you want the log file to grow. See **[PxPlus Log File](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Additional%20Debugging%20Procedures%20and%20Facilities.htm#logfile)**.

Any file with a true Key cannot be used since the output internally is done using the Print logic. The following file types can be used with **SETTRACE** : Serial file, Pipe, TCP/IP, Device, Indexed file or PDF.

#### **Note:**  
The record length for trace output can get quite large on complex directives; therefore, file types with fixed-length records (such as Indexed) should be avoided.

_(The ability to pass multiple values to the PRINT and RECORD options was added in PxPlus v10.00.)_

##  See Also

[**ENDTRACE End Trace Output**](endtrace.md)

##  Example

0010 I=3  
0020 A=A*A  
0030 I=I-1; if I<>0 then goto 0020  
  
->settrace  
->run  
0010 I=3  
0020 A=A*A  
0030 I=I-1; if I<>0 then goto 0020  
0020 A=A*A  
0030 I=I-1; if I<>0 then goto 0020  
0020 A=A*A  
0030 I=I-1; if I<>0 then goto 0020  
->endtrace
