# Getting Started

**PxPlus Environment** |  **__**  
---|---  
  
PxPlus has capabilities and features that make the process of program development easier for both novice and expert users. When you are ready to develop a program in PxPlus, you begin by starting a PxPlus **_session_**. This serves as the environment where programming instructions are input, understood and executed by the system. It is also where you create, load, modify and execute applications. Once the session is started, you can create a new application or load an existing application for modification.

The basic start up and operation of the PxPlus programming environment begins with the procedures described below.

**_Starting PxPlus in MS Windows_**

In MS Windows, you can invoke a session by clicking the PxPlus shortcut under the _Start > Programs > PVX Plus Technologies_ menu. This will start the PxPlus session within a new interface window (console).

Click the PxPlus icon at the top left corner of the window for a drop-down menu that enables you to manipulate console properties and session-related actions; e.g. changing the font size changes the size of the console work area.

These and other settings are saved in the _pxplus.ini_ file each time PxPlus is terminated. By default, the _Help_ menu below the PxPlus icon contains links that will not function properly until they are configured for use in an application.

**_Starting PxPlus in UNIX/Linux_**

On a UNIX/Linux system (non-graphical environment), PxPlus can be started by entering the command path (e.g. _path_ /pxplus/pxplus). The session opens with a serial number and the _PVX Plus Technologies Ltd._ copyright notice and is followed by the PxPlus prompt **- >** (or **-}** under WindX). At this point, PxPlus interposes itself between you and the operating system and controls all work.

For information on the options for starting an application, see **[Customizing PxPlus](../../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Overview.md)**.

## Modes of Operation

A PxPlus session is either in **_Command Mode_** or **_Execution_ _Mode_**. The session initializes in Command mode, as indicated by the standard PxPlus prompt**- >.**

This prompt represents a "pointer" to the session input area known as the **_Command Line_**. It comprises two characters that may be altered by the system, depending on the current input mode or the "state" of a currently loaded program. The standard prompt, -** >** or**-}** , changes to**-:** when a program is being modified. It reverts back once the program is saved. When a program has been interrupted due to an error, the dash in the prompt changes to a number that indicates the current program level.

**_Command Mode_**

This is the state in which the system is "waiting for instructions" - in PxPlus, these instructions are known as **[Directives](../../Language%20Elements/Primary%20Syntax%20Elements/Directives.md)**. When a valid directive is entered at the Command Line, the system proceeds directly to execution; there are no intermediate stages of compilation, assembly or linkage. When execution is complete, the system displays the result (if any) and awaits the next directive. Error messages pertaining to the syntax of the input are displayed as soon as they occur.

If a directive has a leading **_line number_** , the system does not proceed to execution, but uses the directive in the construction of a program. The PxPlus prompt changes from**- >** to**-:** to indicate that the program is being **_edited_** (and not yet saved). There may be other input modes during a PxPlus session (e.g. using an editor, running an application); however, command mode is where the system returns when these other tasks are completed.

#### **Note:**  
Programs may be created without using line numbers. However, [**Numberless Programs**](../../Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Overview.htm#Mark1) must be edited and saved via full-screen editors, such as the PxPlus **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)** and **[Ed+](../../../Ed%20Program%20Editor.md)** program editor.

**_Execution Mode_**

Execution mode begins whenever a **[RUN](../../../directives/run.md)** or a **[CALL](../../../directives/call.md)** directive is used to execute a program during a PxPlus session. Some programs may be interactive and have a user interface that awaits input from the user while being executed - programs remain in Execution mode until completed via **STOP** or **END** , halted due to an error, or suspended via Ctrl - Break or an ESCAPE instruction.

Some PxPlus applications can be designed to start and run directly from an operating system prompt/icon. These are actually launched using an initialization procedure that "hides" the PxPlus session running underneath.

See the **[Language Elements](../../Language%20Elements/Introduction.md)** Help section for information on loading, executing, and terminating programs in PxPlus.

## Command Line Editing

The Command line allows some basic editing functionality (but you cannot move from line to line, page up/down). When entering text on the Command line, most edit keys function as per the normal operation of a standard keyboard; i.e. **Backspace** deletes the preceding character, **Spacebar** inserts a space, cursor (**Arrow**) keys move through the input, etc.

In addition to the basic keyboard actions, the following key combinations can be used for further editing and cursor functionality:

|  **Ctrl-End** |  Clears input from the current cursor position to the end of the line.  
---|---|---  
|  **Tab/Shift-Tab** |  Advances/backspaces 10 spaces over input.  
|  **Ctrl - Right Arrow** |  Advances to next word.  
|  **Ctrl - Left Arrow** |  Moves to the previous word.  
  
#### **Note:**  
For information on more advanced editing features of the PxPlus development environment, see **[Development Tools](../../Development%20Tools/Introduction.md)**.

**_Command Shortcuts_**

PxPlus allows the following shortcuts for frequently used language and console commands:

**Key** |  **Function/Purpose**  
---|---  
**?** |  Question mark substitutes the **[PRINT](../../../directives/print.md)** directive.  
**/ or \** |  Either forward or back slash substitutes the LIST directive.  
**`** |  Back apostrophe substitutes the EDIT directive.  
**!** |  Exclamation mark substitutes the REM directive for a comment.  
**.** |  Period steps through a program. See **[Stepping Operations](../../Development%20Tools/Error%20Handling%20and%20Debugging/Stepping%20Operations.md)**.  
**;** |  Semi-colon steps through compound statements.  
**"** |  Double quote opens a shell to the operating system from PxPlus.  
  
#### **Note:**  
The **[LET](../../../directives/let.md)** directive is assumed when PxPlus encounters a statement that begins with a variable. In addition, comma delimiters can be used to represent multiple **LET** directives in a statement.  
  
**_Example:_**  
  
Z4=A+4.5,Z5=Z4*.85

**_Typos and Alternate Spellings_**

The following alternate spellings are accepted without error (and corrected) when a statement is processed:

  * PxPlus automatically appends quotes where closing quotes are missing.
  * **LIST** directive can be entered as **LSIT** without causing an error.
  * **LOAD** directive can be entered as **LAOD** without causing an error.
  * **END_IF** directive can also be entered as **FI**.



The above spellings/shortcuts are built-in. Use the **[USER_LEX](../../../directives/user_lex.md)** directive to change existing directive names in PxPlus.

## Command Line Recall

A history of Command Line input is maintained by the system throughout a PxPlus session. When a line is entered, the input is appended to the end of a buffer - the number of lines preserved in the buffer is configurable using the **['SL'=](../../../parameters/sl.md)** system parameter. When the buffer fills to capacity, the earliest lines are deleted to make room for new material.

Use the UP ARROW (or DOWN ARROW) key to select and recall lines to the PxPlus prompt **- >**. Each recalled line can be edited and resubmitted by pressing Enter, which has the same effect as typing and entering a new line at the prompt. You can reuse only one logical line at a time.

## Using the Mouse (Windows)

When running a PxPlus session in MS Windows, the mouse can be used to move the cursor along the Command Line, copy and paste text, or activate the drop-down menu from the PxPlus icon and access Help menu options.

#### **Note:**  
While the initial console offers limited mouse support, the NOMADS toolset takes full advantage of the functionality available when working in a graphical environment. See **[Graphical User Interfaces](../../Graphical%20User%20Interfaces/Introduction.md)**.

**_Copy and Paste_**

Activate the Edit option from the PxPlus icon drop-down menu to copy or paste text using the mouse.

To **_copy_** (mark) text from the current session window into the Windows Clipboard:

|  1. |  Select the PxPlus icon > _Edit_ > _Mark/Copy_.  
---|---|---  
|  2. |  Drag the mouse pointer over the block of text you wish to copy.  
|  3. |  Press Enter.  
  
To **_paste_** text from the Windows Clipboard into the current session window:

|  1. |  Place the cursor at a location on the Command Line.   
---|---|---  
|  2. |  Select the PxPlus icon > _Edit_ > _Paste_.  
  
#### **Note:**  
The PxPlus icon drop-down menu can also be accessed directly (without using the mouse) by pressing the **Alt - Spacebar** key combination.

## Exiting a PxPlus Session

A PxPlus session can be terminated using one of three directives: **[BYE](../../../directives/bye.md)**, **[QUIT](../../../directives/quit.md)** or **[RELEASE](../../../directives/release.md)**. When invoked from the Command Line or used in an application, these directives close all opened files, return all memory in use to the operating system, and terminate the PxPlus session.

On a Windows system, you can also click the X _(close)_ button on the top right corner of the PxPlus console to terminate the session and close the window.

If **[STOP](../../../directives/stop.md)** or **[END](../../../directives/end.md)** is used in an application that was invoked directly by an operating system command (bypassing Command mode), they will automatically terminate the session and return you to the operating system.
