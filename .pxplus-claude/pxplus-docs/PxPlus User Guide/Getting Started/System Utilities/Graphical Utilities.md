# Getting Started

**System Utilities** |  **__**  
---|---  
  
PxPlus comes equipped with several utilities that are not, strictly speaking, part of the language, but provide various design, configuration, maintenance and diagnostic services within the development environment. These utilities are actually separate programs that reside as auxiliary files in the PxPlus system sub-directory, _Lib_. All of the utilities are installed with the PxPlus base system, but some were originally designed for use in a character-based environment, some apply to a graphical (Windows) system only, and some require a thorough understanding of PxPlus internal code and may not be available for general use. The majority of system utilities are intended for the creation, debugging, and management of PxPlus programs, files, and directories. See **[Development Tools](../../Development%20Tools/Introduction.md)**.

The **System Utilities** window provides access to the graphical utilities. Graphical utilities are available for systems running PxPlus for Windows or via WindX. They have all the capabilities of the classic character-based utilities plus access to a few features that are specific to graphical and Web-based development environments; i.e. **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)** and **[Ed+](../../../Ed%20Program%20Editor.md)** program editor.

To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Select _System Utilities_ from the _PxPlus IDE_ category.  
From the **[NOMADS Session Manager](../../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  Select _Utilities_ > _System_ from the menu bar.  
From the PxPlus Command line |  Type: **_gui_**  
  
The **System Utilities** window is displayed:

> This window consists of the following:

_Directory_ |  Initially displays the full pathname of the current working directory. To display the files for a different directory, select the Directory Browse button (beside the _Directory_ field) or manually enter the full pathname.  
---|---  
_(Move Up)_ |  Button used for moving up one directory.  
_(Directory Browse)_ |  Button used for changing to a different directory.  
_(Refresh)_ |  Button used for refreshing the list of files displayed in the left pane.  
_(Left pane)_ |  Lists the available files in the displayed directory, along with the file name, type and time stamp details.  
_(Right pane)_ |  Displays additional details about the file selected in the left pane. This information is dependent on the type of file: program, data file, link reference or device.  
  
## Menu Bar Options

These options are listed in the order that they appear on the menu bar: **[Files](Graphical%20Utilities.htm#files_menu)**, **[Utilities](Graphical%20Utilities.htm#utils_menu)** and **[Tools](Graphical%20Utilities.htm#tools_menu)**.

**Files** |  **Description**  
---|---  
_List Open Files_ |  Launches a separate window with a list of open files that can be sorted by file number, type, record size, key length, pathname and Keyed/Indexed information.  
_Exit_ |  Closes the **System Utilities** window.  
  
**Utilities******|  Displays a drop-down menu of system utilities, grouped into categories: **[Files](Graphical%20Utilities.htm#files)**, **[Directories](Graphical%20Utilities.htm#directories)**, **[Programs](Graphical%20Utilities.htm#programs)**, **[Configuration](Graphical%20Utilities.htm#configuration)** and **[General](Graphical%20Utilities.htm#general)**.  
---|---  
_Files_ |  |  _Make_ |  Launches the **Make File Utility** for creating a new file (_Keyed, Indexed, Sort, Serial, Zip_). Provides options for specifying applicable parameters such as record size, record type, key size, etc.  
---|---  
_Delete_ |  Launches the **Delete Utility** for deleting a file. To delete a directory, see **[Directories](Graphical%20Utilities.htm#directories)** menu (_Delete_ option).  
_Rename_ |  Launches the **Rename Utility** for entering the new name of an existing file.  
_Print_ |  Launches the **Print File Utility** for printing the contents of a data file. Provides options for entering the starting/ending key and for printing multiple fields per line.  
_View_ |  Launches the **[File View Utility](../../../File%20View%20Utility.md)** for viewing (not modifying) the contents of a selected data file, if applicable. Available as a tool bar option.  
_Update_ |  Launches the **[File Update Utility](../../../File%20Update%20Utility.md)** for viewing, modifying and updating the contents of a selected data file, if applicable. Available as a tool bar option.  
_Copy_ |  Launches the **Copy File Utility** for copying the contents of a file. Provides options for clearing the data in the new file and for copying the data dictionary.  
_Purge_ |  Launches the **Purge Contents of File Utility** for clearing the contents of a selected data file while preserving the file definition. Provides an option for erasing the imbedded data dictionary.  
_Admin_ |  Displays the file administration sub-menu with the following selections: |  _Maximum Size_ |  Launches the **Adjust Maximum Number of Records** window for changing the maximum size of a file.  
---|---  
_Check_ |  Launches the **Check Keyed File** window for verifying the integrity of a keyed file.  
_Re-Construct_ |  Launches the **Keyed/Direct/EFF File Key Reconstruction Utility** for repairing a damaged keyed file. This utility copies each physical record into a holding file, then recreates and reloads the keyed file.  
_Directories_ |  |  _Make_ |  Launches the **Create Directory Utility** for creating a new directory.  
---|---  
_Delete_ |  Launches the **Delete Utility** for deleting a directory. Provides an option for deleting any existing subordinate files/directories in the specified directory. To delete a file, see **[Files](Graphical%20Utilities.htm#files)** menu (_Delete_ option).  
_Rename_ |  Launches the **Rename Utility** for entering the new name of an existing directory.  
_Print_ |  Launches the **Print Directory Utility** for printing the contents of a directory. Provides options for sorting the report by filename and for selecting _Detailed_ or _Summary_ output.  
_Programs_ |  |  _Make_ |  Launches the **Create Program Utility** for creating a new program file.  
---|---  
_Delete_ |  Launches the **Delete Utility** for deleting program files from the system. Provides an option for deleting any existing subordinate files/directories if a directory is selected.  
_Rename_ |  Launches the **Rename Utility** for entering the new name of an existing program file.  
_Compare_ |  Launches the **[Program Compare Utility](../../../Program%20Compare.md)** for comparing two existing programs on a line-by-line basis. Available as a tool bar option.  
_List_ |  Launches the **Program List Utility** for printing a listing of a program or a series of programs. Provides options for printing a listing and/or a cross reference, as well as formatted printing.  
_Bulk-Edit_ |  Launches the **[Bulk Program Scan/Edit Utility](../../../Bulk%20Program%20Scan%20Edit.md)** for performing a common string search and/or replacement against selected programs. Available as a tool bar option.  
_Secure_ |  Replaced with ***obj/secure**.  
_Patch_ |  _(Not Used)_  
_Configuration_ |  |  _Link Files_ |  Launches the **Link File Utility** for creating and maintaining device, file and printer link files, as well as specifying the link's path name and device driver.  
---|---  
_Keyboard_ |  Launches the **Keyboard Definition Utility for Windows** for defining the input sequences that will be received from the various terminal keyboard. It allows for the editing or re-assignment of the key sequences by manually pressing the keys on the keyboard. All keyboard input sequences are maintained by terminal type and optionally by User ID to allow custom implementations for specific users.  
_Parameters_ |  Launches the **PxPlus Startup Settings** window for setting system parameters.  
_General_ |  |  _Display Bitmaps_ |  Launches the **Bitmaps** library. See **[Displaying Bitmaps/Icons](../../../appendix/displaying_bitmaps~icons.md)**. Available as a tool bar option.  
---|---  
_Display Font and Colours_ |  Launches the **Available Fonts and Colors** window for specifying _Font_ /_Size_ , _Foreground_ /_Background_ colors, and attributes such as _Bold_ , _Italics_ , and _Underscore All Characters_. Available as a tool bar option. Click the Color Query button to access **[Color Selections](../../../NOMADS%20Graphical%20Application/Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions. _(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Message Library Maintenance_ |  Launches **[Message Library Maintenance](../../../NOMADS%20Graphical%20Application/Message%20Library%20Maintenance/Overview.md)** for adding messages to a message library in NOMADS.  
_Error Message Update_ |  Launches the **Error Message Update** window that displays a list of numerically arranged error codes. For a list of error codes and their meanings, see **[Error Codes and Messages](../../../appendix/list_of_messages.md)**.  
  
**Tools******|  **Description**  
---|---  
_Calendar_ |  Launches a Calendar popup.  
_Calculator_ |  Launches the Calculator.  
_Program Editor_ |  Launches the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To use **[Ed+](../../../Ed%20Program%20Editor.md)** as the default program editor instead, change the setting for the NOMADS **[Program_Editor](../../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. This can be done by using the **[NOMADS Environment Maintenance](../../../NOMADS%20Graphical%20Application/Maintain%20Nomads%20Environment.md)** utility. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
_Notepad_ |  Launches Notepad.  
  
## Tool Bar Options

The following tool bar options provide convenient access to commonly used functions that are also available as **[Menu Bar Options](Graphical%20Utilities.htm#menubar)**:

**Tool Bar Option** |  **Description**  
---|---  
_View File_ |  Launches the **[File View Utility](../../../File%20View%20Utility.md)** for viewing (not modifying) the contents of a selected data file, if applicable. Can also be accessed from _Utilities > Files > View_ on the menu bar.  
_File Update_ |  Launches the **[File Update Utility](../../../File%20Update%20Utility.md)** for viewing, modifying and updating the contents of a selected data file, if applicable. Can also be accessed from _Utilities > Files > Update_ on the menu bar.  
_Compare_ |  Launches the **[Program Compare Utility](../../../Program%20Compare.md)**. Can also be accessed from _Utilities > Programs > Compare_ on the menu bar.  
_Bulk Edit_ |  Launches the **[Bulk Program Scan/Edit Utility](../../../Bulk%20Program%20Scan%20Edit.md)**. Can also be accessed from _Utilities > Programs > Bulk-Edit_ on the menu bar.  
_Bitmap Library_ |  Launches the **Bitmaps** library. See **[Displaying Bitmaps/Icons](../../../appendix/displaying_bitmaps~icons.md)**. Can also be accessed from _Utilities > General > Display Bitmaps_ on the menu bar.  
_Fonts Color_ |  Launches the **Available Fonts and Colors** window for specifying _Font_ /_Size_ , _Foreground_ /_Background_ colors, and attributes such as _Bold_ , _Italics_ , and _Underscore All Characters_. Can also be accessed from _Utilities > General > Display Font and Colours_ on the menu bar. Click the Color Query button to access **[Color Selections](../../../NOMADS%20Graphical%20Application/Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions. _(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Primary Dictionary  
Alternate Dictionary_ |  **_(Available when the selected file is a PxPlus data file with a primary/alternate embedded data dictionary)_** Launches the **View Embedded Dictionary** window for viewing the file layout details.  
  
## NOMADS

**[NOMADS](../../../NOMADS%20Graphical%20Application/Introduction.md)** (**N** on-procedural **O** bject **M** odule **A** pplication **D** evelopment **S** ystem) is an integrated suite of utilities that simplify the development of graphical user interface based applications using PxPlus.

NOMADS allows you to separate data access, logic and graphical controls into reusable segments, localize changes, design a graphical front-end for character-based components and create event-driven applications. The toolset includes a common data manager for consistent access to a variety of data files, as well as a generic error-handling interface.

For an introduction to graphical user interface development in PxPlus, see **[Graphical User Interfaces](../../Graphical%20User%20Interfaces/Introduction.md)**.
