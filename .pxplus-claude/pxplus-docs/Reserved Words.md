# 

**User Reserved Words Maintenance**|   
---|---  
  
**User Reserved Words Maintenance** is used to reserve specific words to restrict their use as table and element names in the Data Dictionary or as names of NOMADS controls or both.

This program is designed to allow two word lists: **_PxPlus Supplied Words_** and **_User-Defined Words_**. The _PxPlus Supplied Words_ list is a predefined PxPlus system list, which cannot be edited. The _User-Defined Words_ list is initially empty to allow developers to add whatever words they choose whenever they want, as well as delete words. If desired, the same word may be used for both lists. However, adding a word from the _PxPlus Supplied Words_ list to the _User-Defined Words_ list allows the default restrictions on the word to be overridden, changing the PxPlus-supplied behavior for that word.

When a new table name or element name is entered in Data Dictionary Maintenance, both lists are checked to determine if the word is restricted for use in the Data Dictionary. When a new control name is entered in the NOMADS Panel Designer, both lists are checked to determine if the word is restricted for use as a NOMADS control name. In both cases, a warning message displays when a reserved word is detected.

_(User Reserved Words Maintenance was added in PxPlus 2020.)_

> To invoke **User Reserved Words Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category. Select _User Reserved Words Maintenance_.  
From the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Dictionary_ menu, select _User Reserved Words Maintenance_.  
From the PxPlus Command line |  Enter: **CALL** "*winproc","resv_words","*win/scrnlib.en"  
  
This window consists of the following:

_Reserved Words to Display_ |  Select the list of words to display in the _Reserved Words_ grid below: _User-Defined Words_ or _PxPlus Supplied Words_. By default, _User-Defined Words_ is selected. This list is initially empty when **User Reserved Words Maintenance** is accessed the first time.

#### **Note:**  
If unsaved changes to the _User-Defined Words_ list are detected when selecting _PxPlus Supplied Words_ from the drop box, a message will display to save the changes.  
  
---|---  
_(Reserved Words Grid)_ |  Displays the words in the list selected from the _Reserved Words to Display_ drop box and indicates if a word is restricted for use in the Data Dictionary and/or for NOMADS controls. This grid is used when adding, editing and deleting a reserved word. The _PxPlus Supplied Words_ list is a predefined PxPlus system list and cannot be edited. The _User-Defined Words_ list is initially empty to allow developers to add whatever words they choose whenever they want, as well as delete words. If desired, the same word may be used for both lists. However, adding a word from the _PxPlus Supplied Words_ list to the _User-Defined Words_ list allows the default restrictions on the word to be overridden, changing the PxPlus-supplied behavior for that word. |  _Reserved Word_ |  Word that is reserved. To add a new _User-Defined Word_ , type the new word in the next available blank row. _User-Defined Words_ ** _must_** begin with a letter and contain only alphanumeric, period, underscore or dash characters (no spaces). These words are case insensitive. _PxPlus Supplied Words_ cannot be edited and are shown in uppercase letters with their rows grayed out. If adding a _User-Defined Word_ that is also in the list of _PxPlus Supplied Words_ , this word will be grayed out in the _Reserved Word_ column; otherwise, _User-Defined Words_ are accessible for editing. Reserved words are initially sorted alphabetically in ascending order. Click the _Reserved Word_ column heading to toggle between ascending/descending order.  
---|---  
_Data Dictionary_ |  Select this check box to indicate that the reserved word should **_not_** be used for a table name or element name in the Data Dictionary; otherwise, leave it unchecked to allow it to be used.

#### **Note:**  
If this check box is selected and the reserved word is subsequently used in a new table name or element name, a warning **[Message](Reserved%20Words.htm#warning)** will display.  
  
_NOMADS Controls_ |  Select this check box to indicate that the reserved word should **_not_** be used for a NOMADS control name; otherwise, leave it unchecked to allow it to be used.

#### **Note:**  
If this check box is selected and the reserved word is subsequently used in a new NOMADS control name, a warning **[Message](Reserved%20Words.htm#warning)** will display.  
  
_Delete Words(s)_ |  Button used to delete one or more _User-Defined Words_ selected in the grid. _PxPlus Supplied Words_ cannot be deleted. To delete multiple words, select the words using Shift-Click (consecutive selections) or Ctrl-Click (random selections) and then click the _Delete Word(s)_ button. Prior to deleting the selected words, a message will display.  
_Search Dictionary_ |  Button that launches the **Search Data Dictionary for Reserved Words** window. This window is used to search the current Data Dictionary to look for instances where reserved words restricted for use in the Data Dictionary may have been previously used as table names or element names. Click the _Search_ button to activate the search. Any instances that are found are displayed in the grid. This window consists of the following: |  _(Search Results Grid)_ |  Displays any instances where a reserved word restricted for use in the Data Dictionary was located in either a table name or an element name. |  _Table Name_ |  Name of the Data Dictionary table in which the reserved word was located.  
---|---  
_#_ |  Displays the element number if the reserved word was located as a data element. This column will be blank if the reserved word was located as a table name.  
_Element Name_ |  Displays the element name if the reserved word was located as a data element name. This column will be blank if the reserved word was located as a table name.  
_Reserved Word_ |  Displays the reserved word.  
_User_ |  A check mark indicates that the reserved word found is a _User-Defined Word_.  
_Search_ |  Button used to activate the search. When the search is completed, a message displays in the lower left corner of the Search window to indicate if any reserved words were located.

#### **Note:**  
Once search results are displayed, right click within the grid to access popup menu options for finding the next or previous instance of a particular word, for exporting the results to a spreadsheet and for printing the results.  
  
_Exit_ |  Closes the Search window and returns to **User Reserved Words Maintenance**.  
_OK_ |  Saves any changes and exits **User Reserved Words Maintenance**.  
_Cancel_ |  Closes **User Reserved Words Maintenance** without saving any changes.  
_Apply_ |  Saves any changes without exiting **User Reserved Words Maintenance**.  
  
## Reserved Words Usage

Reserved words that are restricted for use in the Data Dictionary are typically SQL commands that may cause issues in the event that a PxPlus application is ported to a relational database. These words are checked when a new **[Table Name](Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.htm#name)** or **[Element Name](Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.htm#elements)** is entered in **Data Dictionary Maintenance**.

Reserved words that are restricted for use as NOMADS control names are NOMADS variables used within the NOMADS programs. These words are checked when a new control name is entered in the **[NOMADS Panel Designer](NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**.

In both cases, a warning message is displayed when a reserved word is detected:

|    
**_When a reserved word is detected (Data Dictionary)_** |    
**_When a reserved word is detected (NOMADS Control)_**  
---|---|---  
  
Responding _OK_ will override the warning and allow the reserved word to be used.

Responding _No_ will not allow the reserved word to be used.

Responding _Always OK_ will add the reserved word to the list of _User-Defined Words_ , removing any restriction for its use either in the Data Dictionary or for NOMADS control names.

#### **Important Note:**  
Any new Data Dictionary element names and NOMADS control names starting with the characters "FN" will be flagged and will not be accepted to avoid confusion with Function names.  
  
If a new element or control name starting with "FN" is entered, a message will display. To continue, enter a new name that does not start with "FN".

## See Also

**[Creating Panel Controls](NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md)**
