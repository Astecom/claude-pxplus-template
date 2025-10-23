# 

**Ed+ Program Editor**|   
---|---  
  
The **Ed+ Program Editor** is a Web-based program editor that is easily accessible from the **[PxPlus Web IDE](PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)** and the Windows-based **[IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)**. It is also used in the **[Webster+ Inspector](Webster/Inspector.md)** for creating or editing a PxPlus program file.

Like the **[*IT - Integrated Toolkit](toolkit1/overview.md)**, Ed+ provides some of the more common functions for creating and modifying your application programs. These functions are available as **[Menu Options](Ed%20Program%20Editor.htm#menu)** and **[Tool Bar Options](Ed%20Program%20Editor.htm#toolbar)**.

When opening PxPlus programs, NOMADS launches the *IT - Integrated Toolkit by default. To make Ed+ the default program editor, change the setting for the **[%NOMADS'Program_Editor](NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The Ed+ Program Editor was added in PxPlus 2016.)  
(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_

For quick access to a specific part of the file, a _Book Marks_ list of the file's Methods and Labels is provided to the left of the main editor panel. Use the vertical scroll bar to locate the method or label you want to modify and then click on that book mark to jump directly to that location in the file.

To invoke the Ed+ program editor, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Under the _PxPlus IDE_ category, select _Ed+_.  
From the **[PxPlus Web IDE](PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)** |  Select _Ed+_ from the menu bar.  
From the PxPlus Command line |  Enter: **ED+**  
  
For this example, the Ed+ program editor was invoked from the PxPlus IDE Main Launcher (Windows), and then two existing program files were loaded:

> ##  Menu Options

The options below are described in the order in which they appear on the menu bar: **[File](Ed%20Program%20Editor.htm#file)**, **[Edit](Ed%20Program%20Editor.htm#edit)**, **[Options](Ed%20Program%20Editor.htm#options)**, **[Tools](Ed%20Program%20Editor.htm#tools)**, **[Run](Ed%20Program%20Editor.htm#run)**, **[Version Control](Ed%20Program%20Editor.htm#versionctrl)**, **[Project](Ed%20Program%20Editor.htm#project)** and **[Help](Ed%20Program%20Editor.htm#help)**.

#### **Note:**  
If using the [**PxPlus Web IDE**](PxPlus%20IDE/IDE%20Main%20Launcher_Web.md), the menu bar for the Ed+ program editor is accessed by clicking the [**Hamburger Menu**](iNOMADS/Template%20Configuration.htm#hamburger) button beside the _Ed+ - Advanced Program Editor_ title.

**File******|  **Description** |  **Keyboard Shortcuts**  
---|---|---  
_New_ |  Sets up an empty "No Name" program file. |  _New:_ Ctrl+N _(Shortcut was added in PxPlus 2019.)_  
_Open_ __|  Loads an existing program file. If the editor is asked to open a non-program file, it will try to open the appropriate PxPlus program if the file is one of the following types: |  **File Type** |  **Program**  
---|---  
A PxPlus data file |  Opens the **[File Update Utility](File%20Update%20Utility.md)**  
A PxPlus report file (_.pvr_) |  Opens the **[Report Designer](Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)**  
An HTML file (_.htm,__.html_) |  Opens the **[HTML Editor](HTML%20Editor.md)**  
  
If the non-program file is not one of these types, a message will indicate that the file type is invalid and ask if you want the operating system to try opening the file.

_(The opening of non-program files based on file type was added in PxPlus 2023.)_

_Open:_ Ctrl+O _(Shortcut was added in PxPlus 2019.)_  
_Find Program_ |  Locates a program file using current search rules. If the search is unable to locate the exact file name requested but does locate an object file with the same file name ending with _.pvc_ , you will be asked if you want to load the _.pvc_ file. If the search is unable to locate the file name requested either with or without the _.pvc_ extension, a message will inform you that the file could not be located. _(The search functionality to include files ending with .pvc was added to PxPlus 2017 Update 0002.)_ |   
_Close Program_ |  Closes the current program file. If you have made changes to the program without saving them, you will be asked if you want to save the changes. |  _Close Program:_ F4  
_Save_ |  Saves the current program file. If the file has no name, a message will ask if you want to save the current program as a PROGRAM or TEXT file. Respond by clicking the _Program_ or _Text_ button. A separate window launches for entering and saving the file name. |  _Save:_ Ctrl+S  
_Save As Version_ |  Allows you to assign a version number to the current program file, along with a comment. _(The Save As Version option was added in PxPlus 2023.)_ |   
_Save As Program_ |  Allows you to name and save the current program file. |   
_Save As Text_ |  Saves the program file in text format. A separate window launches for entering the file name. Clicking the _Save_ button displays a message that asks if you also want to save this file as program code. |   
_Save All_ |  Saves all the open programs. Any unnamed programs will invoke the "Save as" logic. _(The Save All option was added in PxPlus 2023.)_ |   
_Properties_ __|  Displays the pathname and historical information about the current program file. _(The Properties option was added in PxPlus 2023.)_ |   
_Print_ |  Prints the current program. |  _Print:_ Ctrl+P _(Shortcut was added in PxPlus 2019.)_  
_Recent Files_ |  Displays a list of recently opened program and text files. |   
_Favorite Files_ |  Displays options for adding the current file to or removing it from a list of favorites. A current list of the files marked as favorites is also shown, which can be used when selecting a file to open. |   
_Exit_ |  Closes the editor and returns to the PxPlus IDE. If you have made changes to a program without saving them, you will be asked if you want to save the changes. |   
  
**Edit** |  **Description** |  **Keyboard Shortcuts**  
---|---|---  
_Undo_ |  Reverses a change. _(The Undo option was added in PxPlus 2023.)_ |  _Undo:_ Ctrl+Z  
_Redo_ |  Reverses the previous _Undo_ operation. _(The Redo option was added in PxPlus 2023.)_ |  _Redo:_ Ctrl+Y  
_Cut_ |  Selects and removes a segment of code to the Clipboard. You can cut a segment of code from a single line of code or a block of entire lines. When the selection includes more than one line of code, the lines are selected in their entirety. To select a single line in its entirety, begin selection at the leftmost column of that line. _(The Cut option was added in PxPlus 2023.)_ |  _Cut:_ Ctrl+X  
_Copy_ |  Selects and copies a segment of code to the Clipboard. You can copy a segment of code from a single line of code or a block of entire lines. When the selection includes more than one line of code, the lines are selected in their entirety. To select a single line in its entirety, begin selection at the leftmost column of that line. _(The Copy option was added in PxPlus 2023.)_ |  _Copy:_ Ctrl+C  
_Paste_ |  Pastes code from the Clipboard into the current program. Partial lines are inserted at the cursor location. To insert a block of lines, place the cursor at the beginning of the line in front of which you wish to paste. _(The Paste option was added in PxPlus 2023.)_ |  _Paste:_ Ctrl+V  
_Delete_ |  Selects and removes a segment of code. _(The Delete option was added in PxPlus 2023.)_ |  _Delete:_ Del  
_Select All_ |  Selects the entire program. _(The Select All option was added in PxPlus 2023.)_ |  _Select All:_ Ctrl+A  
_Find and Replace_ |  |  _Find_ |  Invokes the logic to search for a specified text value. The following buttons are provided: |  _Left/Right Arrows_ |  Click these buttons to search for the previous/next occurrence of the specified text value.  
---|---  
_All_ |  Click the _All_ button (beside the Right Arrow button) to highlight all matches in the program.  
**_.*_** |  The _RegExp Search_ toggle button is available if the search text is a regular expression.  
_Aa_ |  The _CaseSensitive Search_ toggle button is available if the search is case sensitive.  
_\b_ |  The _Whole Word Search_ toggle button is used to search for the specified text value as a whole word only, rather than as part of another word.  
_S_ |  The _Search in Selection_ toggle button is used to search only in the selected text.  
_Find Next_ |  Finds the next occurrence of the currently selected text.  
_Find Previous_ |  Finds the previous occurrence of the currently selected text.  
_Replace_ |  Invokes the logic to search for and replace the specified text value. Enter the text value to be replaced, and then below that, enter the replacement text value. The following buttons are provided: |  _Left/Right Arrows_ |  Click these buttons to search for the previous/next occurrence of the specified text value to be replaced.  
---|---  
_All_ |  Click the _All_ button (beside the Right Arrow button) to highlight all matches in the program.  
_Replace_ |  Click this button to replace the currently found text with the replacement text.  
_All_ |  Click the _All_ button (beside the _Replace_ button) to replace all matches in the program.  
**_.*_** |  The _RegExp Search_ toggle button is available if the search text is a regular expression.  
_Aa_ |  The _CaseSensitive Search_ toggle button is available if the search is case sensitive.  
_\b_ |  The _Whole Word Search_ toggle button is used to search for the specified text value as a whole word only, rather than as part of another word.  
_S_ |  The _Search in Selection_ toggle button is used to search only in the selected text.  
  
_(The Find and Replace sub-menu was added in PxPlus 2023.)_

_Find:_ Ctrl+F _Find Next:_ Ctrl+K _Find Previous:_ Ctrl+Shift+K _Replace:_ Ctrl+H  
_Goto_ |  Launches a separate **Jump to line** window for specifying a line number to go to in the program. This window consists of the following: |  _Line no._ |  Enter the line number to go to.  
---|---  
_Go_ |  Positions the insertion cursor at the beginning of the specified line number.  
_Cancel_ |  Cancels the operation, closes the **Jump to line** window and returns to the main editor panel.  
_Goto_ _:_ Ctrl+G _(Shortcut was added in PxPlus 2019.)_  
_Autocomplete_ |  Displays a drop-down list with suggestions for completing the current word you are typing. **_Example:_** The Autocomplete suggestions are based on PxPlus directives, system functions and system variables. It also makes suggestions based on the text already in the program; i.e. it can suggest variable names and statement labels if they already exist in the program. If the _Live Autocomplete_ check box (in **[Web Editor Preferences](Ed%20Program%20Editor.htm#preferences)**) is selected, the Autocomplete drop-down list will pop up automatically as you are typing without the need to manually invoke it. _(The Autocomplete option was added in PxPlus 2023.)_ |  _Autocomplete:_ Ctrl+Space  
_Advanced_ |  |  _Duplicate Lines_ |  Creates a duplicate of the selected lines.  
---|---  
_Move Lines Up_ |  Shifts all the selected lines up one line.  
_Move Lines Down_ |  Shifts all the selected lines down one line.  
_Sort Lines_ |  Alphanumeric ascending sort of all selected lines.  
_UPPERCASE_ |  Converts the current selection entirely into uppercase.  
_lowercase_ |  Converts the current selection entirely into lowercase.  
_Toggle Comment_ |  Comment/Uncomment the currently selected lines of code.  
  
_(The Advanced sub-menu was added in PxPlus 2023.)_

_Duplicate Lines:_ Alt+Shift+Down _Move Lines Up:_ Alt+Up _Move Lines Down:_ Alt+Down _Sort Lines:_ Ctrl+Alt+S _UPPERCASE:_ Ctrl+U _lowercase:_ Ctrl+Shift+U _Toggle Comment:_ Ctrl+/  
  
**Options** |  **Description**  
---|---  
_Preferences_ |  Launches the **[Web Editor Preferences](Ed%20Program%20Editor.htm#preferences)** window.  
  
**Tools** |  **Description** |  **Keyboard Shortcuts**  
---|---|---  
_Check Errors_ |  Checks for errors in the current program. |   
_Next Error_ |  Goes to the next line that has a coding error. _(The Next Error option was added in PxPlus 2023.)_ |  _Next Error:_ Alt+E  
_Previous Error_ |  Goes to the previous line that has a coding error. _(The Previous Error option was added in PxPlus 2023.)_ |  _Previous Error:_ Alt+Shift+E  
_Strip Line numbers_ |  Strips line numbers from a program that currently has line numbers. All line number references will be replaced with statement labels or *same or *next logical statement labels where applicable. You are prompted for a label prefix that will be used for the base label name for any labels that must be generated. |   
_Reformat_ |  Reorganizes the lines of code for the current program by applying proper formatting for indentation, if applicable. |   
_Compare Programs_ |  Invokes the **[Program Compare Utility](toolkit1/Program%20Compare.md)** that is used to compare different versions of a program to detect any differences. _(The Compare Programs option was added in PxPlus 2023.)_ |   
_Macro_ |  Macros are a sequence of keystrokes that can be recorded and then played back on demand to save time. For example, you may have a long list that you want to reformat. Instead of doing it manually, you can record a macro of the keystrokes while making the change to one item and then play back the macro for all other items in the list. |  _Start Recording_ |  Start macro keystroke recording.  
---|---  
_Stop Recording_ |  Stop macro keystroke recording.  
_Play_ |  Play a previously recorded keystroke macro.  
  
_(The Macro sub-menu was added in PxPlus 2023.)_

_Start Recording:_ Ctrl+Alt+E _Stop Recording:_ Ctrl+Alt+E _Play:_ Ctrl+Shift+E  
  
**Run** |  **Description**  
---|---  
_PxPlus_ |  Opens the PxPlus command window.  
_PxPlus Program_ |  Runs the current program.  
_Program Setup_ |  Displays the **Program Launch Setup** window for entering the _Lead Program, Argument List_ and _System Parameters_.  
_Panel_ |  Invokes the panel specified using the _Panel Setup_ option. If no panel was specified, the **Panel Launch Setup** window is invoked for specifying a Library and Panel.  
_Panel Setup_ |  Displays the **Panel Launch Setup** window for specifying a Library and Panel.  
_Nomads_ |  Launches the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)**.  
_Utilities_ |  Invokes the **[System Utilities](PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** window.  
_HTML Editor_ |  Invokes the **[HTML Editor](HTML%20Editor.md)** window.  
_Report Designer_ |  Invokes the **[Report Designer](Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)** window.  
_Run_ |  Allows you to select a program to run.  
  
_(The Run menu was added in PxPlus 2023.)_

**Version Control** |  **Description**  
---|---  
_TortoiseSVN Setup_ |  Sets up TortoiseSVN. See **[PxPlus Version Control System Using TortoiseSVN](PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**.  
_TortoiseSVN Commit_ |  Invokes the TortoiseSVN Commit procedure to commit the modified files in the current directory to the repository. Selections are _Current Program_ , _All Open Programs_ , _Program or File_ , and _Directory_. See **[Committing Changes](PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Committing)**.  
_TortoiseSVN Update_ |  Invokes the TortoiseSVN Update procedure to update files in the current directory. Selections are _Program or File_ and _Directory_. See **[Updating Your Files](PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Updating)**.  
  
_(The Version Control menu was added in PxPlus 2023.)_

**Project** |  **Description**  
---|---  
_Create New Project_ |  Launches the **[Create Project](PxPlus%20IDE/IDE%20Main%20Launcher.htm#projects)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
  
_(The Project menu was added in PxPlus 2023.)_

**Help** |  **Description**  
---|---  
_ED+ Program Editor_ |  Launches the **Ed+ Program Editor** Help.  
_Keyboard Shortcuts_ |  Displays a list of all supported keyboard shortcuts. _(The Keyboard Shortcuts option was added in PxPlus 2023.)_  
  
##  Tool Bar Options

The **_tool bar options_** are listed below.

**Tool Bar Button** |  **Description**  
---|---  
_Load program_ |  Loads a program from a file.  
_Find program_ |  Finds a program using search rules. If the search is unable to locate the exact file name requested but does locate an object file with the same file name ending with _.pvc_ , you will be asked if you want to load the _.pvc_ file. If the search is unable to locate the file name requested either with or without the _.pvc_ extension, a message will inform you that the file could not be located. _(The search functionality to include files ending with .pvc was added to PxPlus 2017 Update 0002.)_  
_New program_ |  Starts a new program and clears the edit buffer.  
_Save program_ |  Saves the program.  
_Save As Program_ |  Saves the program to a different file. A separate window launches for entering the file name.  
_Save As Text_ |  Saves the program file in text format. A separate window launches for entering the file name. Clicking the _Save_ button displays a message that asks if you also want to save this file as program code.  
_Undo_ |  Reverses a change.

#### **Note:**  
If you make a change to a file and then switch to a different file, the Undo/Redo for the modified file will be cleared.  
  
_Redo_ |  Reverses the previous _Undo_ operation.  
_Cut text_ |  Cuts text to the Clipboard.  
_Copy text_ |  Copies text to the Clipboard.  
_Paste text_ |  Pastes text from the Clipboard.  
_Force update_ |  Forces update of the program to the server.  
_Reformat current program_ |  Reorganizes the lines of code for the current program by applying proper formatting for indentation, if applicable.  
_User preferences_ |  Launches the **[Web Editor Preferences](Ed%20Program%20Editor.htm#preferences)** window for specifying additional options.  
_Theme_ |  Click the drop-down arrow to select from a list of available themes for the editor display. **_(Default:_**_Github**)**_  
_Search_ |  Invokes the logic to search for a specified text value. The following buttons are provided: |  _Left/Right Arrows_ |  Click these buttons to search for the previous/next occurrence of the specified text value.  
---|---  
_All_ |  Click the _All_ button (beside the Right Arrow button) to highlight all matches in the program.  
**_.*_** |  The _RegExp Search_ toggle button is available if the search text is a regular expression.  
_Aa_ |  The _CaseSensitive Search_ toggle button is available if the search is case sensitive.  
_\b_ |  The _Whole Word Search_ toggle button is used to search for the specified text value as a whole word only, rather than as part of another word.  
_S_ |  The _Search in Selection_ toggle button is used to search only in the selected text.  
_Replace_ |  Invokes the logic to search for and replace the specified text value. Enter the text value to be replaced, and then below that, enter the replacement text value. The following buttons are provided: |  _Left/Right Arrows_ |  Click these buttons to search for the previous/next occurrence of the specified text value to be replaced.  
---|---  
_All_ |  Click the _All_ button (beside the Right Arrow button) to highlight all matches in the program.  
_Replace_ |  Click this button to replace the currently found text with the replacement text.  
_All_ |  Click the _All_ button (beside the _Replace_ button) to replace all matches in the program.  
**_.*_** |  The _RegExp Search_ toggle button is available if the search text is a regular expression.  
_Aa_ |  The _CaseSensitive Search_ toggle button is available if the search is case sensitive.  
_\b_ |  The _Whole Word Search_ toggle button is used to search for the specified text value as a whole word only, rather than as part of another word.  
_S_ |  The _Search in Selection_ toggle button is used to search only in the selected text.  
_Display Shortcut List_ |  Displays a list of all supported keyboard shortcuts. _(The Display Shortcut List option was added in PxPlus 2023.)_  
_Help_ |  Launches the **Ed+ Program Editor** Help.  
  
##  Web Editor Preferences

The **Web Editor Preferences** window is used to specify additional options to be applied when working with the Ed+ program editor.

To invoke this window, select _Preferences_ from the **Options** menu or click the User Preferences tool bar button beside the _Theme_ drop box.

> This window consists of the following:

_User Identification_ |  A locked field that displays the current User ID.  
---|---  
_Font Size (__px_ _)_ |  Click the drop-down arrow to select the font size in pixels. **_(Default:_**_12**)**_ _(The Font Size option was added in PxPlus 2023.)_  
_Default Theme_ |  Click the drop-down arrow to select the default theme from a list of available themes. Select the _Use Current_ text to change the default theme to match the _Theme_ selected on the main editor panel.  
_Show hidden text_ |  Select to display hidden text. **_(Default:_**_Off**)**_  
_Use Edit mode_ |  Allows you to change existing statements in the program.**_(Default:_**_On**)**_  
_No statement numbers_ |  If selected, statement numbers will not be shown for a file being created or opened. **_(Default:_**_Off**)**_  
_Suppress LET_ |  Displays the code without LET directives. ** _(Default:_**_Off**)**_  
_Live Autocomplete_ __|  If selected, the **[Autocomplete](Ed%20Program%20Editor.htm#autocomplete)** drop-down list will pop up automatically as you are typing with suggestions for completing the current word. **_(Default:_**_Off**)**_ The Autocomplete suggestions are based on PxPlus directives, system functions and system variables. It also makes suggestions based on the text already in the program; i.e. it can suggest variable names and statement labels if they already exist in the program. _(The Live Autocomplete option was added in PxPlus 2023.)_  
_Auto Bracket_ |  If selected, when you type an "open" square bracket, parenthesis, or double quote, the matching "close" symbol for the pair is inserted automatically. **_(Default:_**_Off**)**_ _(The Auto Bracket option was added in PxPlus 2023.)_  
_Tab Stops_ |  Number of spaces that the insertion point will move each time the Tab key is pressed. **_(Default:_**_6**)**_ To change, click the adjacent up/down arrows or enter the value. _(The default tab stop change from 5 to 6 was added in PxPlus 2023.)_  
_Insert Tabs as Spaces_ |  Tabs will be inserted as spaces instead of tabs. **_Example:_** If the _Tab Stops_ option is set to 6, then six spaces will be inserted instead of a literal tab character. _(The Insert Tabs as Spaces option was added in PxPlus 2023.)_  
_Mixed case Variables_ |  Displays the code with mixed case variables. ** _(Default:_**_On**)**_  
_Lower case Variables_ |  Displays the code with lowercase variables. ** _(Default:_**_Off**)**_  
_Lower case Directives_ |  Displays the code with lowercase directives. ** _(Default:_**_Off**)**_  
_List from top after Goto_ |  Select this option when you want the **[Goto](Ed%20Program%20Editor.htm#goto)** function (on the _Edit_ menu) to display the specified "go to" statement number or line label as the starting line at the top of the program display. **_(Default:_**_Off**)**_ _(The List from top after Goto option was added in PxPlus 2023.)_  
_Server update_ |  Indicates the frequency that the program is updated to the server. Click the drop-down arrow for a list of selections: _Immediate  
5 Seconds  
10 Seconds **(Default)**  
20 Seconds  
30 Seconds  
1 Minute_  
_When loading program file check for text version in <same path>.pxprg_ |  Controls how you want to handle the possible existence of a text version (_.pxprg_) of the program file being loaded. Click the drop-down arrow for a list of selections: _Yes, check and use .pxprg if found_ ** _(Default)_**  
_No, don't check for presence of .pxprg_  
_Ask which to use if .pxprg is present_  
_When loading program file check if SVN source version exists_ |  Controls how you want to handle the possible existence of a SVN source version of the program file being loaded. Click the drop-down arrow for a list of selections: _Yes, check and use the SVN text source_ ** _(Default)_**  
_No, edit program object code and let OS update SVN_  
_Ask which to use if SVN text source exists_  
_When saving a program to text file, and program file exists_ |  Controls how you want to handle the saving of a program to a text file if a corresponding program file already exists. Click the drop-down arrow for a list of selections: _Automatically update the program file as well_ ** _(Default)_**  
_Don't update the program file_  
_Ask if you also want the program file updated_  
_Save_ |  Saves the current settings and closes this window, returning to the main editor panel. These settings are saved to the appropriate project-related files. _(The ability to save settings by project was added in PxPlus 2023.)_  
_Cancel_ |  Cancels any changes to the settings and closes this window, returning to the main editor panel.
