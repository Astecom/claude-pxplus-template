# Maintaining Library Objects 

**Copying Library Objects** |  **__**  
---|---  
  
The **Copy Screen Objects** utility is used to copy selected objects within the same library or to a different library. Multiple copy operations using different source and destination libraries can be performed without exiting the utility. If a destination library does not exist, the utility will ask to create it.

This utility can also be used to change the way an object is displayed in the Object list in **Library Object Selection** by changing the case of the name.

_(Letter case support for object names in the Object list was added in PxPlus 2023.)_

#### **Note:**  
When a **[File Maintenance](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** panel with a Webster+ HTML page (object **[Type](../Library%20Object%20Selection/Console%20and%20Object%20List.htm#type)** "Dh") is copied, the HTML page will not be copied.

> _(Support for object selection, multiple copy operations and output library creation was added in PxPlus 2021.)_

In **[Library Object Selection](../Library%20Object%20Selection/Console%20and%20Object%20List.md)**, select the object(s) to copy in the Object list. Then, invoke this utility by using one of the following three methods:

> Click the _Copy_ tool bar button.

> Select  _Options > Copy_ on the menu bar.

> Right click on selected objects in the Object list and choose _Copy_ from the popup menu.

The objects pre-selected in the Object list are displayed in the **Copy Screen Objects** grid. This grid is used by the utility to determine which objects are to be copied. This list can be changed or additional objects can be selected by clicking the _Select Objects_ button.

The **Copy Screen Objects** window consists of the following:

_Input Library_ |  Identifies the source library for the copy operation. The currently selected library is loaded by default. This can be changed to any existing library by clicking the drop-down arrow to select from a list of (up to nine) previous selections, clicking the Query button or entering a library pathname.  
---|---  
_Select Objects_ |  Button that invokes the **Select Objects** window. A grid displays a list of all the objects in the specified _Input Library_. This list is used to select the objects to include for the copy operation. Any objects that were pre-selected in the Object list in **Library Object Selection** are already highlighted. To select additional objects while keeping original selections highlighted, use Ctrl-Click. Left clicking on a row highlights that object and removes the highlighting from the original object selections. To restore the original selections, click the _Reset_ button. If the _Input Library_ is changed, the _Select Objects_ window will be invoked automatically. To select multiple objects, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). This window consists of the following: |  _(Selection Grid)_ |  Displays a list of all the objects in the specified _Input Library_ , which is used to highlight and select the objects to be copied.  
---|---  
_Reset_ |  Restores the original selections.  
_OK_ |  Adds the highlighted objects to the _Panel(s)_ list on the main **Copy Screen Objects** window and closes the **Select Objects** window.  
_Cancel_ |  Cancels any changes and returns to the main **Copy Screen Objects** window.  
  
_(The Select Objects button was added in PxPlus 2021.)_  
  
_Output Library_ |  Identifies the destination library for the copy operation. The currently selected library is loaded by default. This can be changed by clicking the drop-down arrow to select from a list of (up to nine) previous selections, clicking the Query button or entering a library pathname. If the specified _Output Library_ does not exist, the utility will ask to create it.  
_Panel(s)_ |  Grid that is used to list the objects that have been selected to be copied, including objects that were pre-selected in the Object list in **Library Object Selection**. |  **From** |  Object(s) to be copied from the source _Input Library_ (as selected from the **Library Object Selection** Object list or the **Select Objects** list).  
---|---  
**To** |  Name(s) of the object(s) to be copied to the destination _Output Library_. By default, this is identical to the copy **From** name. When copying objects within the same library, double click on this name to change it, since an object cannot be copied to itself. Valid characters for object names are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display. The case of the object name entered in the **To** column will be used as the object name in the Object list in **Library Object Selection**. You can also change the object name case of an existing object by copying it to itself with a different case. _(Letter case support for object names in the Object list was added in PxPlus 2023.)_  
**Done** |  _Display-only_ check box that is automatically selected when the copy operation is successfully completed.  
_Warn on Overwrite_ |  Select this check box to request that the copy operation provide a warning when it is about to overwrite an object of the same name.  
_OK_ |  **_(Available when objects have been selected)_** Copies the selected objects and closes the **Copy Screen Objects** utility when the copy is completed.  
_Apply_ |  **_(Available when objects have been selected)_** Copies the selected objects and keeps the **Copy Screen Objects** utility open for any additional copy operations.  
_Close_ |  Exits the **Copy Screen Objects** utility.
