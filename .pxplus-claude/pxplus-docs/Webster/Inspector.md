# Webster+

**Webster+ Inspector**|   
---|---  
  
The **Webster+ Inspector** page displays the contents of the directory that contains your Webster+ installation (defaults to the _docroot_ directory). It provides options for viewing, creating, editing and deleting files and directories.

When the security system in Webster+ is enabled, a new **Inspector** option displays on the left side. Clicking the **Inspector** option brings up the **Webster+ Inspector** page if the user is allowed to access it. Only users who are part of the _Admin_ group (System Administrators) or the _Dev_ group (Application Developers) are allowed to access the **Webster+ Inspector** page.

> **_Opening a File or Directory_**

Click on the file or directory to select it and then click the _Explore_ button. This opens the file in view-only mode or displays a list of the files in the directory. Double clicking on a file or directory does not open it.

**_Opening a Screen Library_**

First, open the directory where the screen library is located. Then, click on the screen library to select it and then click the _Explore_ button. This opens the **Webster+ Library Object Selection** page, which displays a list of the objects in the selected screen library (similar to **[NOMADS Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**).

For information on working with screen libraries within Webster+, see **[Viewing Screen Libraries](Inspector.htm#view_libs)**.

_(The Webster+ Library Object Selection page was added in PxPlus 2024.)_

**_Using Webster+ Inspector_**

The ability to edit text files, program files, HTML files or screen libraries depends on whether the user is part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option. PxPlus data files can only be viewed, not edited, within Webster+.

For information on working with text files, data files, report definition files (_*.pvr_), and PDF files within Webster+, see **[Viewing Text Files, Data Files, Report Files and PDFs](Inspector.htm#view_text)**.

For information on working with program files and HTML files within Webster+, see **[Viewing Program Files](Inspector.htm#view_pgm)** and **[Viewing HTML Files](Inspector.htm#view_html)**.

_(The ability to view, create, edit and delete files and directories through Webster+ Inspector was added in PxPlus 2021 Update 1.)_

The **Webster+ Inspector** page consists of the following:

_Directory_ |  When the **Inspector** option is selected, the directory defaults to the _docroot_ directory where _webster.pxp_ was installed. Enter a different directory or click the _Up_ button to change to a directory one level up. To set the top level directory, see **[Setting the Top Level Directory](Inspector.htm#topdir)**.  
---|---  
_Explore_ |  Opens the selected file in view-only mode or displays a list of the files in the selected directory.  
_Up_ |  Changes to a directory one level up.  
_Refresh_ |  Refreshes the list of files in the selected directory.  
_New Text_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Invokes the **New Text File** window for creating a new text file using the Text editor within Webster+. The types of text files that can be created are ".txt", ".js", ".json", ".css", ".csv", ".conf", ".ini", ".log" and ".xml". When naming a new text file, the file extension needs to be included so that Webster+ will recognize the file type and open it. _(The New Text button was added in PxPlus 2022.)_  
_New Program_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Invokes the **New Program** window for creating a new program file using the ED+ program editor within Webster+.  
_New HTML_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Invokes the **New HTML File** window for creating a new HTML file using the HTML editor within Webster+.  
_New Directory_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Invokes the **New Directory** window for creating a new directory.  
_Delete_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Deletes the selected file or directory. Prior to deleting, a message will display.  
_Print_ |  Prints a listing of the selected directory contents to the viewer.  
_(Files List)_ |  Displays details about the files in the selected directory, including file size, creation date and last modified date.  
  
##  Viewing Text Files, Data Files, Report Files and PDFs

Text files can be viewed and edited within Webster+. See **[Example: Text File](Inspector.htm#ex_text)**.

PxPlus data files, however, can only be viewed, not edited. When a data file is opened, the records (sorted by prime key) and the prime key definition are displayed. The **[File Info](Inspector.htm#file_info)** button allows you to view detailed data dictionary information, if applicable. See **[Example: Data File](Inspector.htm#ex_data)**.

When a report definition file (_*.pvr_) is opened, it is opened as a text file, which can be viewed and edited within Webster+. See **[Example: Report File](Inspector.htm#ex_report)**. The **[Generate Report](Inspector.htm#generate)** button generates the report based on the report definition (*_.pvr_) file, and if applicable, allows you to specify the parameters and/or filter criteria to be applied to the report at run time.

PDF files can be viewed within Webster+. When a PDF file is opened, its contents are displayed in a new tab on the Web browser.

_(The ability to create text files, view data files and open PDFs was added in PxPlus 2022.)  
(The ability to view, edit, filter and generate reports was added in PxPlus 2022 Update 1.)_

**_Example:_****Text File**

This example shows a text file (Clients_List.txt) opened in view-only mode:

> **_Example:_****Data File**

This example shows a PxPlus data file (clients) opened in view-only mode with navigation buttons shown (when applicable) near the bottom:

> **_Example:_****Report File**

This example shows a PxPlus report file (SalesrepList.pvr) opened as a text file in view-only mode:

> This page consists of the following:

_Close_ |  Closes the contents page and returns to the **Webster+ Inspector** page.  
---|---  
_Refresh_ |  Refreshes the contents of the displayed text file, data file or report file.  
_Edit_ |  **_(Applicable for Text Files and Report Files Only)_** This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Clicking this button opens the selected text file or report (._pvr_) file in the Text editor within Webster+: This window consists of the following: |  _Save_ |  Writes the current text file.  
---|---  
_Save As_ |  Invokes a separate window for entering the text file/path name to be written.  
_New_ |  Invokes a separate window for creating a new text file.  
_Close_ |  Closes the current text file. If you have made changes to the file without saving them, you are asked if you want to save the changes.  
_Undo_ |  Reverse the last change(s).  
_Redo_ |  Reverses the previous Undo operation.  
_Goto_ |  Invokes a separate window for entering a specific line number to jump to in the program. Clicking the _Jump_ button positions the insertion cursor at the beginning of the specified line.  
_Find_ |  Invokes the logic to search for a specified text value. Click the up/down arrows to search for the previous/next occurrence of this text. A _Regexp_ check box option is available if the search text is a regular expression. A _Match Case_ option is also available if the search is case sensitive. A _Whole Word_ option is used to search for the specified text value as a whole word only rather than as part of another word.  
_Replace_ |  Invokes the logic to search for and replace the specified text value. Enter the text value to be replaced and then below that, enter the replacement text value. Click the up/down arrows to search for the previous/next occurrence of the text to be replaced. A _Regexp_ check box option is available if the text to be replaced is a regular expression. A _Match Case_ option is also available if the search is case sensitive. A _Whole Word_ option is used to search for the specified text value as a whole word only rather than as part of another word.  
_File Info_ |  **_(Applicable for PxPlus Data Files Only)_** Opens a PxPlus Wiki page in a new tab on the Web browser that shows detailed data dictionary information. If a data class was used to define a field, the class name shows as a link that can be selected to view the data class information. **_Example:_**  
_Generate Report_ |  **_(Applicable for Report Files Only)_** Generates the report based on the report definition (*_.pvr_) file. If a report was defined with parameters and/or data filters, a page will display to allow you to specify the parameters and/or filter criteria to be applied to the report at run time. **_Example:_** The report for this example was defined with both parameters and run-time filters: This window consists of the following: |  _Report Parameters  
Run-time Filters_ |  Displays any report parameters and/or run-time filters that were defined for the report, if applicable.  
---|---  
_Run Report_ |  Displays the report in a new tab on the Web browser, applying any filter criteria.  
_Cancel Report_ |  Closes this page, cancelling any selections, and returns to the report's contents page.  
  
_(The Generate Report button was added in PxPlus 2022 Update 1.)_  
  
_Print_ |  Prints a listing of the selected text file, report file or data file contents to the viewer.  
  
##  Viewing Program Files

This example shows a program file (gl_account.pvc) opened in view-only mode:

> This page consists of the following:

_Close_ |  Closes the contents page and returns to the **Webster+ Inspector** page.  
---|---  
_Refresh_ |  Refreshes the displayed program file contents.  
_Edit_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Clicking this button opens the file in the ED+ program editor within Webster+: This window consists of the following: |  _Save_ |  Saves the current program file.  
---|---  
_Save As_ |  Allows you to name and save the current program file.  
_New_ |  Invokes a separate window for creating a new program file.  
_Close_ |  Closes the current program file. If you have made changes to the program without saving them, you are asked if you want to save the changes.  
_Undo_ |  Reverses a change.  
_Redo_ |  Reverses the previous _Undo_ operation.  
_Strip Lines_ |  Strips line numbers from a program that currently has line numbers. All line number references will be replaced with statement labels or *same or *next logical statement labels where applicable. You are prompted for a label prefix that will be used for the base label name for any labels that must be generated.  
_Reformat_ |  Reorganizes the lines of code for the current program by applying proper formatting for indentation, if applicable.  
_Goto_ |  Invokes a separate window for entering a specific line number to jump to in the program. Clicking the _Jump_ button positions the insertion cursor at the beginning of the specified line.  
_Find_ |  Invokes the logic to search for a specified text value. Click the up/down arrows to search for the previous/next occurrence of this text. A _Regexp_ check box option is available if the search text is a regular expression. A _Match Case_ option is also available if the search is case sensitive. A _Whole Word_ option is used to search for the specified text value as a whole word only rather than as part of another word.  
_Replace_ |  Invokes the logic to search for and replace the specified text value. Enter the text value to be replaced and then below that, enter the replacement text value. Click the up/down arrows to search for the previous/next occurrence of the text to be replaced. A _Regexp_ check box option is available if the text to be replaced is a regular expression. A _Match Case_ option is also available if the search is case sensitive. A _Whole Word_ option is used to search for the specified text value as a whole word only rather than as part of another word.  
_Bookmarks_ |  Provides a list of the file's methods and labels for quick access to a specific part of the file. Use the vertical scroll bar to locate the method or label you want to modify and then click on that bookmark to jump directly to that location in the file.  
_Print_ |  Prints a listing of the selected program file contents to the viewer.  
  
##  Viewing HTML Files

This example shows an HTML file (salespersons.html) opened in view-only mode:

> This page consists of the following:

_Close_ |  Closes the contents page and returns to the **Webster+ Inspector** page.  
---|---  
_Refresh_ |  Refreshes the displayed HTML file contents.  
_Edit_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Clicking this button opens the file in the HTML editor within Webster+: This window consists of the following: |  _Save_ |  Writes the current HTML file.  
---|---  
_Save As_ |  Invokes a separate window for entering the HTML file/path name to be written.  
_New_ |  Invokes a separate window for creating a new HTML file.  
_Close_ |  Closes the current HTML file. If you have made changes to the file without saving them, you are asked if you want to save the changes.  
  
For an explanation of the HTML editor menu bar and tool bar options, see **[Menu Bar Options](../HTML%20Editor.htm#Mark1)** and **[Tool Bar Options](../HTML%20Editor.htm#Mark11)**.  
  
_Preview_ |  Opens the selected HTML file in a new tab in your browser.  
_Print_ |  Prints a listing of the selected HTML file contents to the viewer.  
  
##  Viewing Screen Libraries

This example shows the **Webster+ Library Object Selection** page for the selected screen library (scrnlib.en):

> _(The Webster+ Library Object Selection page was added in PxPlus 2024.)_

This page consists of the following:

_Open_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. In addition, this button is only available if the **[iNomads URL/port](General%20Configuration.htm#inomadsurl)** setting is specified; otherwise, this button does not display. To access this setting, click the **Setup** option on the left side to bring up the **System Configuration** page. Then, click the **Misc.** tab. Click this button to open the selected library object for editing. If the object is a Window (_Type_ = W), a message will display, advising you to use NOMADS to edit the screen. This message also displays if the object is a Dialog (_Type_ = D) and is not a File Maintenance panel (i.e. _By_ field does not indicate "File Maint."). If the Dialog (_Type_ D or Dh) is a File Maintenance panel, the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** will be launched via iNomads for the selected panel. If the object is a Standard Query (_Type_ = Q) or a Query List (_Type_ = q), the Query (or Query List) Definition will be launched via iNomads for the selected query. If the object is a Menu Bar (_Type_ = P) or Popup Menu (_Type_ = P), the Menu Definition will be launched via iNomads for the selected menu.  
---|---  
_Refresh_ |  Refreshes the **Library Object Selection** page.  
_Copy_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Copies the selected library object. When prompted, enter a name for the copy.

#### **Note:**  
When a **[File Maintenance](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** panel with a Webster+ HTML page (object **[Type](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.htm#type)** "Dh") is copied, the HTML page will not be copied.  
  
_Delete_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. Deletes the selected library object. Prior to deleting, a message will display.  
_Test_ |  Tests the selected library object. If the object is a Window (_Type_ = W), the window will launch via iNomads if the **[iNomads URL/Port](General%20Configuration.htm#inomadsurl)** setting was specified; otherwise, an error message will display. If the object is a Dialog (_Type_ = D) and is not a File Maintenance panel (i.e. _By_ field does not indicate "File Maint."), the dialog will launch via iNomads if the _iNomads_ _URL/Port_ setting was specified; otherwise, an error message will display. If the Dialog is a File Maintenance panel and an HTML version of the panel also exists (i.e. Dialog _Type_ = Dh), the Webster+ HTML page will be launched. If the object is a Standard Query (_Type_ = Q) or a Query List (_Type_ = q), the query will be launched. The _Print_ and _Download_ buttons on the Webster+ query page can be used to print the query data to the viewer or download it to a .CSV file. If the object is a Menu Bar (_Type_ = P) or Popup Menu (_Type_ = P), a message will display, indicating that testing menus is not supported. _(The query page Print and Download buttons were added in PxPlus 2024.)_  
_New Query_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. In addition, this button is only available if the **[iNomads URL/port](General%20Configuration.htm#inomadsurl)** setting is specified; otherwise, this button does not display. To access this setting, click the **Setup** option on the left side to bring up the **System Configuration** page. Then, click the **Misc.** tab. Click this button to create a new query. When prompted, enter a name for the new query, and then select a **[Query Type](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.htm#type)**, either _Standard Query_ or _Query List_. Another window launches via iNomads for defining the Query (or Query List).  
_New Menu_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. In addition, this button is only available if the **[iNomads URL/port](General%20Configuration.htm#inomadsurl)** setting is specified; otherwise, this button does not display. To access this setting, click the **Setup** option on the left side to bring up the **System Configuration** page. Then, click the **Misc.** tab. Click this button to create a new menu. When prompted, enter a name for the new menu. Another window launches via iNomads for defining the menu.  
_New File_ _Maint_ |  This button is only available to users who are part of the _Inspector Edit Access_ group selected for the **[Access Control](General%20Configuration.htm#accesscontrol)** option; otherwise, this button does not display. In addition, this button is only available if the **[iNomads URL/port](General%20Configuration.htm#inomadsurl)** setting is specified; otherwise, this button does not display. To access this setting, click the **Setup** option on the left side to bring up the **System Configuration** page. Then, click the **Misc.** tab. Click this button to create a new File Maintenance panel. When prompted, enter a name for the new panel. The **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** launches via iNomads for defining the panel.  
_Print_ |  Prints a listing of the selected object to the viewer.  
_(Objects List)_ |  Lists the objects within the selected screen library (similar to the **[Objects List](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.htm#objectlist)** in NOMADS Library Object Selection). The following details are displayed for each object: |  _Icon_ |  Task type icon.  
---|---  
_Object Name_ |  Name of the panel, dialog or window.  
_Type_ |  Letter code used to identify the object type.  
_Title_ |  Title that was entered in the object definition.  
_Revised Date_ |  Date and time stamp identifying the most recent modification.  
_By_ |  User ID of the person responsible for the most recent modification.  
  
##  Setting the Top Level Directory

The setting of **%inspector_top$** controls the top level directory allowed in the **Webster+ Inspector**. It can be set in _webster.pxp_.

**_Example:_**

> %inspector_top$="C:\webster-plus\"
