# System Utilities

**Bulk Program Scan/Edit Utility**|   
---|---  
  
The Bulk Program Scan/Edit Utility is used to perform one or more string searches and/or replacements against a series of programs. The search can be done by exact words, by regular expression, or without regard to case. See **[MSK](functions/msk.htm#Mark6)** function for a definition of the supported regular expression syntax.

This utility is invoked from the **[System Utilities](PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** window by clicking the _Bulk Edit_ tool bar option or by selecting _Utilities > Programs > Bulk-Edit_ from the menu bar after selecting the directory containing the program files to be searched.

An example of the Bulk Program Scan/Edit Utility with a completed search is displayed below:

> This window consists of the following:

_Search String_ |  Enter the string to search for.  
---|---  
_Replacement String_ |  If the string you are searching for is to be replaced, enter the replacement text.  
_Search Only_ |  When selected **_(Default)_** , the utility will only search for, but not replace, the specified search string. When not selected, the utility will replace all instances of the _Search String_ it finds with the _Replacement String_.  
**Type of Search** |  Select the type of search to be performed: |  _Exact Match_ |  The string(s) must match exactly. **_(Default)_**  
---|---  
_Ignore case_ |  The string(s) can occur in either uppercase or lowercase.  
_Word only_ |  The string(s) must occur as an independent word (variable name, command, etc.).  
_Mask_ |  The string(s) being searched for is an MSK( ) expression. See **[MSK( )](functions/msk.htm#Mark6)** function.  
_Starting directory_ |  Directory from which to begin the search. (**_Default_** : Displays the directory specified on the main **System Utilities** window.)  
_Include sub-directories_ |  When selected, the search will include any sub-directories within the specified _Starting directory_. When not selected **_(Default)_** , only the _Starting directory_ will be searched.  
_Selected Programs_ |  Specify the list of program files to be searched. (**_Default_** : Displays an *****  _(asterisk)_ , which represents "all" program files within the specified _Starting directory_ (and sub-directories if the _Include sub-directories_ check box is selected). If you do not want to search _all_ the program files, you can customize this list by selecting only the ones to search. To do this: |  1. |  Click the File List button (circular arrow).  
---|---  
2. |  In the **File List** window, click the _Expand List_ button to display a list of the program files in the specified directory (and sub-directories, if applicable)..  
3. |  To remove a file name from this list (file is **_not_** deleted from the directory), highlight the file name and press the Delete key (also delete the blank line left behind).  
4. |  When you are done, click the _Close_ button to return to the main **Bulk Program Scan/Edit** window. Click the _Selected Programs_ drop box to view the modified list of selected programs.  
  
If a deleted file name needs to be re-inserted (i.e. deleted in error), you can manually add it to the bottom of the File List by typing it. You can also restore the entire list of original file names and customize the list again. To restore the list, first clear the current list by highlighting it and pressing the Delete key, then click the _Expand List_ button to redisplay all the files.

#### **Note:**  
Any changes made to the _Selected Programs_ list will not be retained after exiting the **Bulk Program Scan/Edit** utility.  
  
_Send output to printer_ |  Opens a **Printer Selection** window for specifying an additional output destination for the search results. When not selected **_(Default)_** , search results will be displayed to the _Programs_ list box only.  
_Programs_ |  List box that displays search results when the _Scan_ button is selected.  
_Show matches only in results window_ |  When selected, the _Programs_ list box will display only the programs in which a match was found. _(added in PxPlus 2017)_ When not selected **_(Default)_** , the _Programs_ list box will display **_all_** the programs that were searched by the utility, regardless if a match was found.  
_Scan_ |  Starts the search process based on the criteria specified. When performing a search and replace and a match is found, the result is outputted to the _Programs_ list box, and a prompt is displayed with selections to _Update_ , _Skip_ or _Update All_ : |  _Update_ |  Change only this program and continue to search subsequent programs, if applicable. **_(Default)_**  
---|---  
_Skip_ |  Leave the current program unchanged and continue to search subsequent programs, if applicable.  
_Update All_ |  Automatically update this **_and_** all subsequent programs that match without displaying a prompt each time.  
_Stop_ |  **_(Available only during the Scanning Process)_** Button that displays when the _Scan_ button is selected and is used to abort the search process. This button is hidden when the search is aborted or completed.  
_Close_ |  Exits the utility and returns to the **System Utilities** window.
