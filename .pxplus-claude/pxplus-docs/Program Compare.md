# System Utilities

**Program Compare Utility**|   
---|---  
  
The **Program Compare Utility** is used to compare two versions of an existing program file on a line-by-line basis to detect any differences; however, it does not attempt to match lines whose line numbers have changed.

This utility is invoked from the **[System Utilities](System%20Utilities.md)** window by clicking the _Compare_ tool bar option or by selecting _Utilities > Programs > Compare_ from the menu bar after selecting the directory containing the original program files to be compared.

An example of the Program Compare Utility with a completed comparison is displayed below:

> This window consists of the following:

_Original Program/Directory_ |  Pathname of the original directory/program file name to compare.  
---|---  
_Revised Program/Directory_ |  Pathname of the revised directory/program file to be compared against the original.  
_Selected Programs_ |  **_(Available when specifying a Directory for the Original and Revised Pathnames)_** Specify the list of program files to be compared. **_Default:_** Displays an *****  _(asterisk)_ , which represents "all" program files within the specified _Original_ directory. If you do not want to compare _all_ the program files, you can customize this list by selecting only the ones to compare. To do this: |  1. |  Click the Reload selected programs list button (circular arrow).  
---|---  
2. |  In the **File List** window, click the _Expand List_ button to display a list of the program files in the specified directory.  
3. |  To remove a file name from this list (file is **_not_** deleted from the directory), highlight the file name and press the Delete key (also delete the blank line left behind).  
4. |  When you are done, click the _Close_ button to return to the main **Program Compare Utility** window. Click the _Selected Programs_ drop box to view the modified list of selected programs.

#### **Note:**  
Any changes made to the _Selected Programs_ list will not be retained the next time the Reload selected program list button is selected.  
  
_Output Results To_ |  Output destination for the Compare results: _Viewer_ , _Screen**(Default)** , Printer_.  
_Print only the lines which have been changed_ |  When selected **_(Default)_** , only the lines that are different will be printed. When not selected, all lines will be printed and any lines that are different will be flagged.  
_Ignore case_ |  Determines whether case sensitivity will be ignored. **_Default:_** This check box is selected.  
_(Results Output Box)_ |  The output consists of a side-by-side listing of the _Original Program_ and the _Revised Program_. Any differences (i.e. additions, deletions, changes) will be noted in the middle of the report and can be viewed by using the scroll bar.  
_Original/Revised_ |  **_(Display Only)_** When the _Apply_ button is selected, the pathnames of the _Original Program/Directory_ and the _Revised Program/Directory_ being compared, as well as the line numbers, will be displayed.  
_Apply_ |  Starts the comparison process. A prompt displays when the process is completed.  
_Stop_ |  **_(Available Only during the Comparison Process)_** Button that displays when the _Apply_ button is selected and is used to abort the comparison process. This button is hidden when the comparison is aborted or completed.  
_Close_ |  Exits the utility and returns to the **System Utilities** window.
