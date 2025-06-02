# IT - Integrated Toolkit™  
  
**Using the Program Editor**|   
---|---  
  
The *IT - Integrated Toolkit provides an easy-to-use graphical program editor for PxPlus program development and maintenance. It can be used on the various Windows operating systems, as well as non-graphical systems (such as UNIX or Linux) using WindX.

In addition, the Web-based **[Ed+](../Ed%20Program%20Editor.md)** program editor is easily accessible and provides much of the same functionality as the *IT - Integrated Toolkit.

The *IT program editor supports programs written with or without line numbers and offers several display-oriented options. Tools for adding and removing line numbers are also available. The editor is menu-driven with a tool bar and hot key access to the more common functions, as well as a program bar to move easily among open programs. Programs can be loaded and saved as program or text files.

**_Opening Non-Program Files_**

If the editor is asked to open a non-program file, it will try to open the appropriate PxPlus program if the file is one of the following types:

**File Type** |  **Program**  
---|---  
A PxPlus data file |  Opens the **[File Update Utility](../File%20Update%20Utility.md)**  
A PxPlus report file (_.pvr_) |  Opens the **[Report Designer](../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)**  
An HTML file (_.htm,__.html_) |  Opens the **[HTML Editor](../HTML%20Editor.md)**  
  
If the non-program file is not one of these types, a message will indicate that the file type is invalid and ask if you want the operating system to try opening the file.

_(The opening of non-program files based on file type was added in PxPlus 2023.)_

##  Function/Edit Keys

The *IT program editor can be controlled with either the mouse or the keyboard. The Function/Edit keys that are used within the editor are listed below, categorized according to functionality in the same order as the **Function/Edit Keys** window accessed from the _Help > Edit keys_ menu.

#### **Note:**  
In describing the functionality of the Function/Edit keys listed in the tables below:  
  
\- The term **_line_** is used to refer to one line (or row) in the *IT program listing, regardless of whether the _Edited list_ option (**Options** menu) has been enabled.  
  
\- The term **_statement_** refers to the entire statement of code, which may consist of compound statements and/or take more than one line to display.

**Navigation Keys** |  **Description**  
---|---  
RIGHT ARROW |  Move one character to the right  
LEFT ARROW |  Move one character to the left  
UP ARROW |  Move up one line  
DOWN ARROW |  Move down one line  
TAB |  Move one tab stop to the right  
SHIFT - TAB |  Move one tab stop to the left  
HOME |  Move to the beginning of the line  
HOME - HOME |  Move to the beginning of the text  
END |  Move to the end of the line  
Ctrl - HOME |  Move to the beginning of the file  
Ctrl - END |  Move to the end of the file  
  
#### **Note:**  
RIGHT/LEFT/UP/DOWN ARROWS, PAGE UP/DOWN, END and HOME can also be used in conjunction with the SHIFT key to select text.

**Editing Keys** |  **Description**  
---|---  
INSERT |  Toggle between Insert/Overwrite mode  
DELETE |  Delete character at current position  
BACKSPACE |  Delete character to the left  
Ctrl - DELETE |  Delete to the end of the line  
Ctrl - BACKSPACE |  Delete to the start of the line  
Ctrl - A |  Select All  
Ctrl - C |  Copy  
Ctrl - D |  Duplicate current line  
Ctrl - E |  Delete statement  
Ctrl - V |  Paste text  
Ctrl - W |  Delete to the end of the statement  
Ctrl - X |  Cut selected text  
Ctrl - Y |  Redo last undo  
Ctrl - Z |  Undo last edit  
  
**Find/Replace Keys** |  **Description**  
---|---  
Ctrl - F |  Find  
F3 |  Find again (next occurrence)  
Ctrl - G |  Go to statement number/label  
Ctrl - R |  Find and Replace text  
Ctrl - DOWN ARROW |  Find next statement  
Ctrl - UP ARROW |  Find prior statement  
Ctrl - PAGE DOWN |  Find next label/remark  
Ctrl - PAGE UP |  Find prior label/remark  
Ctrl - RIGHT ARROW |  Find next word  
Ctrl - LEFT ARROW |  Find prior word  
  
**Miscellaneous Keys** |  **Description**  
---|---  
Ctrl - F6 |  Switch to next window  
Ctrl - SHIFT - F6 |  Switch to prior window  
Ctrl - SHIFT - TAB |  Switch to prior window  
Ctrl - TAB |  Switch to last window shown  
Ctrl - N |  New File  
Ctrl - O |  Open File  
Ctrl - P |  Print File  
Ctrl - S |  Save File  
F1 |  Online help  
F2 |  Insert Synopsis item name  
F7 |  Debug current program  
  
**Debug Keys** |  **Description**  
---|---  
F5 |  Run  
Ctrl - F5 |  Pause  
Shift - F5 |  Halt/Terminate  
F11 |  Single Step  
Shift - F11 |  Multi Step  
F10 |  Step Over  
Shift - F10 |  Step Out  
Ctrl - B |  Insert Breakpoint  
Ctrl - U |  Erase Breakpoint  
  
#### **Note:**  
These function keys refer to **_Debug_** functions and therefore will **_work only when the debugger control panel is open_**.  
  
##  Menu Options

These options are described in the order in which they appear on the menu bar: **[File](Using%20the%20Program%20Editor.htm#file)**, **[Edit](Using%20the%20Program%20Editor.htm#edit)**, **[Options](Using%20the%20Program%20Editor.htm#options)**, **[Tools](Using%20the%20Program%20Editor.htm#tools)**, **[View](Using%20the%20Program%20Editor.htm#view)**, **[Debug](Using%20the%20Program%20Editor.htm#debug)**, **[Run](Using%20the%20Program%20Editor.htm#run)**, **[Windows](Using%20the%20Program%20Editor.htm#windows)**, **[Version Control](Using%20the%20Program%20Editor.htm#versionctrl)**, **[Project](Using%20the%20Program%20Editor.htm#project)** and **[Help](Using%20the%20Program%20Editor.htm#help)**.

Several of the menu options are also available via the **[Tool Bar](Using%20the%20Program%20Editor.htm#toolbar)**.

**File** |  **Description**  
---|---  
_New_ |  Sets up an empty "Noname" program file.  
_Open_ |  Loads an existing program or text file. You can choose a previously opened file by selecting it from the history list at the bottom of the _File_ menu. The history list keeps track of the last nine files opened. The opening of non-program files, based on the file type, is also supported. See **[Opening Non-Program Files](Using%20the%20Program%20Editor.htm#nonprog_files)**.  
_Find File_ |  Locates a data or program file using current search rules. (Current file/program search rules are displayed for reference.) If the search is unable to locate the exact file name requested but does locate an object file with the same file name ending with _.pvc_ , you are asked if you want to load the _.pvc_ file. If the search is unable to locate the file name requested either with or without the _.pvc_ extension, a message indicates that the file could not be located. The opening of non-program files, based on the file type, is also supported. See **[Opening Non-Program Files](Using%20the%20Program%20Editor.htm#nonprog_files)**. _(The search functionality to include files ending with .pvc was added to PxPlus 2017 Update 0002.)_  
_Close_ |  Closes the current program file. If you have made changes to the program without saving them, you will be asked if you want to save them.  
_Make library_ |  Creates a new Program, NOMADS or Text Macros library.  
_Save_ |  Saves the current program file in its original format (i.e. program or text). If the file has no name, the "Save as" logic is automatically invoked.  
_Save Version_ |  Allows you to assign a version number to the current program file, along with a comment.  
_Save as_ |  Allows you to name and save the current program file. A separate window displays for indicating whether the program is to be saved in program or text format. (When saving in text format, you can specify that the program is to be saved in edited list format by selecting the _Format text files when saving_ option from the _Options_ menu.)  
_Save all_ |  Saves all the open programs. Any unnamed programs will invoke the "Save as" logic.  
_Properties_ |  Displays the pathname and historical information about the current program file.  
_Print_ |  Prints the current program. Print options are: |  **Attributes** |  |  _Edited list_ |  Prints a formatted listing with indentations.  
---|---  
_Suppress headings_ |  Suppresses headings and form feeds.  
_Use colour_ |  Prints the listing in colour.  
**Range** |  Prints a range of line numbers. If _From_ is blank, the default is the beginning of the program. If _To_ is blank, the default is the end of the program. The default is to print the entire program if both are blank.  
**Font Size** |  Prints the listings with _Small_ , _Regular_ or _Large_ font size.  
_Print Setup_ |  Sets up the printer options, paper size and orientation (Portrait or Landscape).  
_Exit_ |  Closes the editor. If you have made changes to a program without saving them, you will be asked if you want to save them.  
  
**Edit** |  **Description**  
---|---  
_Undo_ |  Reverses a change.  
_Redo_ |  Reverses the previous _Undo_ operation.  
_Cut_ |  Selects and removes a segment of code to the Clipboard. You can cut a segment of code from a single line of code or a block of entire lines. When the selection includes more than one line of code, the lines are selected in their entirety. To select a single line in its entirety, begin selection at the leftmost column of that line. There is a 32K limit on the amount of text that can be cut at one time.  
_Copy_ |  Selects and copies a segment of code to the Clipboard. You can copy a segment of code from a single line of code or a block of entire lines. When the selection includes more than one line of code, the lines are selected in their entirety. To select a single line in its entirety, begin selection at the leftmost column of that line. There is a 32K limit on the amount of text that can be _copied_ at one time.  
_Paste_ |  Pastes code from the Clipboard into the current program. Partial lines are inserted at the cursor location. To insert a block of lines, place the cursor at the beginning of the line in front of which you wish to paste. Line numbers will be removed from/added to the clipped code to match the program that is receiving the pasted code. If renumbering is required to accommodate the pasted code, you will be advised of this and given the option to proceed or abort (unless the _Auto Renumber_ option has been selected).

#### **Note:**  
If special renumbering comments (e.g. 100 ! ^100) are included in the pasted lines, the renumbering comments will be overridden (i.e. changed to 100 ! ! ^100) in the paste process.  
  
_Delete_ |  Selects and removes a segment of code.  
_Select All_ |  Selects the entire program.  
_Find_ |  Invokes the logic to find a text value in the program. Enter the text you want to search for and select the _Match case_ option if the search is to be case sensitive. Select the _Find Next_ or _Find Prior_ button to search for the text.  
_Find Next_ |  Finds the next occurrence of the specified _Find_ value.  
_Find Previous_ |  Finds the previous occurrence of the specified _Find_ value.  
_Replace_ |  Invokes the logic to find and replace the specified text value. Enter the text to be replaced and the replacement text value. Available options include finding the next and previous occurrences of the text to be replaced, as well as options for replacing a specific occurrence of that text or replacing all occurrences of that text. A _Match case_ option is also available if the search is case sensitive.  
_Goto_ |  Goes to a specified line of code in the program. Enter a statement number or line label into the _Statement_ field of the **Go to** window. When the _Show Labels/Functions_ option is selected, you can use the _Statement_ drop box to select from the labels listed in alphabetical order. When the _Show Remarks_ option is selected, the drop box shows a list of remark lines, excluding any lines containing **_only_** __**!**_(exclamation mark)_. _(Support to exclude lines containing only ! was added in PxPlus 2017 Update 0002.)_  
_Next Error_ |  Goes to the next line that has a coding error.  
_Previous Error_ |  Goes to the previous line that has a coding error.  
  
**Options** |  **Description**  
---|---  
_Edited list_ |  Displays the program in a formatted manner with indentation. Code may be entered with or without formatting but will be redisplayed with the formatting. If you are entering formatted code, lines which are to be continued must end with a _semi-colon_ (**;**) or _backslash_ (**\**). **_Example:_** 00140 IF LANG$="" \  
THEN LET LANG$=LCS(ENV("LANG"));  
IF LANG$="" \  
THEN LET LANG$="en"  
_List from top after Goto_ |  Select this option when you want the _Goto_ function (_Edit_ menu) to display the specified "go to" statement number or line label as the starting line at the top of the program display. If you subsequently resize the *IT - Integrated Toolkit dialogue while the "go to" line is at the top of the display, the position of the "go to" line will not change and will remain at the top.  
_Default to INSERT mode_ |  Select this option to set _Insert_ mode, rather than _Overwrite_ mode, as the default when the *IT program editor is launched. (By default, this option is not selected.) When selected, the bottom message bar changes from OVR to INS. If the _Save settings_ option (on the **Options** menu) is also checked, the INS mode will persist the next time *IT is launched. _(The Default to INSERT mode option was added in PxPlus 2020.)_  
_Disallow line number references_ |  Selecting this option sets the **['NN'](../parameters/nn.md)** system parameter to _On_ , which does not allow statements to reference line numbers. New lines of code that reference line numbers are flagged with Error 85: Program does not support line numbers.  
_Auto bracket_ |  Select this option if you want the editor to automatically generate closing quotes and brackets when the corresponding opening quotes/brackets are entered in _Insert_ mode. Enter **"** , **(** , **[** or **{** and the editor will generate **"** , **)** , **]** or **}**.  
_Auto renumber_ |  By default, any time that renumbering is required to insert new code, the editor will prompt you to allow or abort the renumber. Select this option to bypass the prompt and automatically allow the editor to renumber the code.

#### **Note:**  
Whenever code is renumbered, it is renumbered from the point in the program where the renumbering is required to the end; the entire program is **_not_** renumbered.)  
  
_Use lower case directives_ |  Displays the code with lowercase directives.  
_Use lower case variables_ |  Displays the code with lowercase variables.  
_Use mixed case variables_ |  Displays the code with mixed case variables.

#### **Note:**  
This option is only available if the **['MC'](../parameters/mc.md)** parameter is turned _On_.  
  
_Suppress LET directive_ |  Displays the code without LET directives.  
_Suppress function help_ |  Hides the "function" help window so that it does not pop up when you are entering a function on a new line.  
_Colour_ |  Sets the foreground/background colours, tips colour, as well as the syntax colour scheme (i.e. _Search Results, Variables, Literals, Remarks,_ etc.). Select the _Colored syntax_ check box to display listings in colour. If not selected, the listings will be displayed with no colour, except for lines with errors, which are displayed in red. To change the colours, click on the button for the element you want to change to cycle through the colours available for that element. A sample preview of each selected colour displays next to the button. For example, clicking the _Foreground_ button repeatedly changes the text in the sample preview to a different colour each time until you have cycled through the colour range and are returned to the original colour. To restore the original default colours, select the _Reset_ button. To save and apply the colour selections, click _OK_. Click _Cancel_ to close the window without saving changes.  
_Font_ |  Sets the fixed font type and/or size. Choosing this option displays the **Font Selection** dialogue for either selecting a different size of the same font currently used or selecting a completely different fixed font and size. This is useful when the preference is to display a font that is just easier to read or that clearly differentiates between the number 0 (zero) and the letter O. |  _Fixed Fonts_ |  A different font and/or font size can be selected from the drop boxes.  
---|---  
_Sample Text_ |  Provides a preview of sample text with the new font selections applied.  
_OK_ |  If _Save Settings_ on the _Options_ menu has been selected (as indicated by the check mark), clicking _OK_ will save the font selections to the _pvxedit.ini_ file for future *IT sessions. If the _Save Settings_ option has not been selected, clicking _OK_ will apply the font selections to the current *IT session only so that when the current *IT session is closed and a new session is started, the new font selections will no longer be applicable.  
_Use Ctrl-CR to break lines_ |  Breaks a line using <Ctrl+Enter> keystrokes. A simple <Enter> places the cursor at the beginning of the next line. If this option is not selected, the default is to break a line with a simple <Enter>.  
_Format text files when saving_ |  Saves a text file with edited list format. The default is to save a text file with no format.  
_Auto-update Version on OPEN_ |  Automatically updates the program when it is opened (if you are connected to the **[PxPlus Version Control System](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Updating)**).  
_Save settings_ |  Saves your current Options settings for the next editor session. These settings are saved to the appropriate project-related files. By default, this option is **_On_** (as indicated by a check mark). _(The ability to save settings by project was added in PxPlus 2023.)_  
  
**Tools** |  **Description**  
---|---  
_Add line numbers_ |  Adds line numbers to a program that does not currently have line numbers. If the program contains numbering comments (e.g. ! ^100), the program will be renumbered to reflect these comments.  
_Strip line numbers_ |  Strips line numbers from a program that currently has line numbers. All line number references will be replaced with statement labels or *same or *next logical statement labels where applicable. You are prompted for a label prefix that will be used for the base label name for any labels that must be generated.  
_Renumber_ |  Renumbers the program. The default is to renumber the whole program starting with line number 10. You can indicate different increments and ranges of lines to be renumbered.  
_Change line number_ |  Changes the line number of the current line of code. If the new line number is already used, you are asked if you want to overwrite the old line. If the new line number is out of sequence, the line will be moved to put it in proper order.

#### **Note:**  
Any references to the original line number are **_not_** resolved to the new one. (Maximum line number is 64900.)  
  
_Duplicate line_ |  Creates a duplicate of the selected line.  
_Compare programs_ |  Invokes the **Program Compare Utility** window that is used to compare different versions of a program to detect any differences.  
  
**View** |  **Description**  
---|---  
_Normal_ |  Removes the region to the left of the program edit/display region to provide more space for displaying and editing the current program.  
_Program Synopsis_ |  Displays a list to the left of the program edit/display region that includes Statement Labels and Variables for easier navigation and manipulation of the current program.  
_Projects_ |  Displays a list of projects to the left of the program edit/display region.  
_Program library_ |  Opens the **Program Library** window that lists the program libraries for viewing and accessing. Click the Query button to locate a program library to open.  
_NOMADS Object library_ |  Opens the **NOMADS Object Library** window that lists the contents (i.e. panel layouts, queries, etc.) for the last referenced Library. To specify a different Library Path, click the Query button or use the drop box to select a previously specified path. The drop box lists the last nine NOMADS libraries that were accessed. To edit an object in the NOMADS **[Object List](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.htm#objectlist)**, you can either double click on the object to launch the NOMADS editor, or right click on the object and select _Open/Edit panel_ from the popup menu.  
_Text macro library_ |  Opens the **Text Macro Library** window. Click the Query button to locate a Text Library (*.txtlib) to open or select a previously specified Text Library from the drop box.  
  
**Debug** |  **Description**  
---|---  
_Debug current program_ |  Initiates the debugging process for the current application program.  
_New process_ |  Launches a new debugging process and presents the option of specifying a program command line and the Start-in Directory.  
_Connect to process_ |  Connects to an existing PxPlus process on the system that shares the same ICON/INI file.  
_Disconnect from process_ |  Disconnects from an existing PxPlus process (if previously connected using the _Connect to process_ option).  
_Terminate process_ |  Ends any process in the system. (On UNIX, this is restricted to 'root' or the same User ID.) You will be prompted to confirm the termination of the selected process.  
_Run_ |  Executes the application code in real time.  
_Pause_ |  Pauses execution of the application code.  
_Halt_ |  Stops execution of the application code.  
_Single Step_ |  Allows the application to step through the next instruction.  
_Multi Step_ |  Allows the application to continuously step through the code until another debug option is selected.  
_Step Over_ |  Executes the next directive and if a GOSUB, CALL or other such directive, stops only once the directive completes.  
_Step out_ |  Resumes execution of the process until the current GOSUB, CALL or other stacked logic is completed.  
_Insert Breakpoint_ |  Adds a stopping point where you want the debugging process to halt automatically.  
_Erase Breakpoint_ |  Deletes a breakpoint.  
  
**Run** |  **Description**  
---|---  
_PxPlus_ |  Opens the PxPlus command window.  
_PxPlus Program_ |  Runs the current program.  
_Program Setup_ |  Displays the **Program Launch Setup** window for entering the _Lead Program, Argument List_ and _System Parameters_.  
_Panel_ |  Invokes the panel specified using the _Panel Setup_ option. If no panel was specified, the **Panel Launch Setup** window is invoked for specifying a Library and Panel.  
_Panel Setup_ |  Displays the **Panel Launch Setup** window for specifying a Library and Panel.  
_Nomads_ |  Launches the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)**.  
_Utilities_ |  Invokes the **[System Utilities](../PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** window.  
_HTML Editor_ |  Invokes the **[HTML Editor](../HTML%20Editor.md)** window. _(The HTML Editor menu option was added in PxPlus 2023.)_  
_Report Designer_ |  Invokes the **[Report Designer](../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)** window. _(The Report Designer menu option was added in PxPlus 2023.)_  
_Run_ |  Allows you to select a program to run.  
  
**Windows** |  **Description**  
---|---  
|  You can make a different program current by selecting it from the list of open program files.  
  
**Version Control** |  **Description**  
---|---  
_TortoiseSVN Setup_ |  Sets up TortoiseSVN. See **[PxPlus Version Control System Using TortoiseSVN](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**.  
_TortoiseSVN Commit_ |  Invokes the TortoiseSVN Commit procedure to commit the modified files in the current directory to the repository. Selections are _Current program_ , _All open programs_ , _Program or File_ , and _Directory_. See **[Committing Changes](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Committing)**.  
_TortoiseSVN Update_ |  Invokes the TortoiseSVN Update procedure to update files in the current directory. Selections are _Program or File_ and _Directory_. See **[Updating Your Files](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Updating)**.  
  
**Project** |  **Description**  
---|---  
_Create New Project_ |  Launches the **[Create Project](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
  
**Help** |  **Description**  
---|---  
_Using Integrated Toolkit_ |  Displays the PxPlus Help for *IT - Integrated Toolkit.  
_Edit keys_ |  Displays a list of standard function and editing keys used by the editor. See **[Function/Edit Keys](Using%20the%20Program%20Editor.htm#functionkeys)**.__  
_About_ |  Displays information about the current *IT - Integrated Toolkit.  
  
##  Tool Bar Options

The tool bar options are listed below. The tool bar provides convenient access to many of the functions that are also available as **[Menu Options](Using%20the%20Program%20Editor.htm#menuoptions)**.

**Tool Bar Option** |  **Description**  
---|---  
_New Program_ |  Sets up an empty "Noname" program file.  
_Load Program_ |  Opens an existing program or text file. The opening of non-program files, based on the file type, is also supported. See **[Opening Non-Program Files](Using%20the%20Program%20Editor.htm#nonprog_files)**.  
_Save Program_ |  Saves the current program file in its original format (i.e. program or text). If the file has no name, the "Save as" logic is automatically invoked.  
_Undo_ |  Reverses a change.  
_Redo_ |  Reverses the previous _Undo_ operation.  
_Print Program_ |  Prints the current program.  
_Cut text_ |  Cut text to the Clipboard.  
_Copy text_ |  Copy text to the Clipboard.  
_Paste text_ |  Paste text from the Clipboard.  
_Find previous_ |  Finds the previous occurrence of the specified _Find_ value.  
_Find text_ |  Invokes the logic to find a text value in the program.  
_Find next_ |  Finds the next occurrence of the specified _Find_ value.  
_Goto_ |  Goes to a specified line of code in the program. Enter a statement number or line label into the _Statement_ field of the **Go to** window.  
_Toggle to previous GoTo_ |  Switches between the last _Goto_ value and the _Goto_ value specified just before that.  
_Next Error_ |  Goes to the next line that has a coding error.  
_Prior Error_ |  Goes to the previous line that has a coding error.  
_Launch PxPlus_ |  Opens the PxPlus command window.  
_Launch a PxPlus program_ |  Launches the currently selected PxPlus program.  
_Process a panel_ |  Displays the **Panel Launch Setup** window for entering the Library and Panel to be processed.  
_Launch Nomads_ |  Opens the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)**.  
_Launch Utilities_ |  Launches the **[System Utilities](../PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** window.  
_Run other programs_ |  Displays another window for entering or selecting the program to be run.  
_Debug current program_ |  Open the PxPlus Command window.  
_Commit current program to TortoiseSVN_ |  Commits the current program to the TortoiseSVN repository. See **[Committing Changes](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Committing)**.  
_Commit all open programs to TortoiseSVN_ |  Commits all open programs to the TortoiseSVN repository. See **[Committing Changes](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Using%20the%20Version%20Control%20System/Introduction.htm#Committing)**.  
  
## Simultaneous Editing

A single user may have the same file opened multiple times in one edit session. The Graphical Editor keeps track of the last version saved, and displays a warning message if a previous version is being saved over the latest version.

If a user attempts to open a file currently being edited by another user, a warning message is presented. If the second user continues and opens the file, neither user can save the file until one relinquishes control by closing the file.

## Passwords

When loading a password-protected program, a **Password Required** dialogue is presented for entering the password. If the password is correct, the program is loaded, and the password is used to set the current common password (i.e. PASSWORD *,"password"). This allows subsequent programs sharing the same password to be loaded without having to re-enter the password. You can also set a common password prior to invoking the editor.
