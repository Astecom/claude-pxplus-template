# Accessing Library Objects from IDE

**Accessing Panel Definition from IDE**|   
---|---  
  
The _Panel Definition_ task on the **[IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** is used to invoke the **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)** for creating or editing a panel.

To select this task, expand the _Graphical Application Builder (NOMADS)_ category on the _Menu_ list. This task opens the **New/Existing Panel** window, which is used to specify a library and the name of a new or existing panel.

_(The Panel Definition task was added in PxPlus 2023 Update 1.)_

#### **Note:**  
This task is not available in the [**PxPlus Web IDE**](../../PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#webide).

> This window consists of the following:

_Library_ |  Defaults to the **[Default Library](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#defaultlib)** defined for the current project. If a default library was not defined, this will be blank. Enter the name of the library file or click the Query button.  
---|---  
_Name_ |  Enter the name of the panel or click the drop-down arrow to select from a list of the existing panels in the library. If the panel name does not exist, you will be able to create the new panel when you click _Ok_.

#### **Note:**  
When entering a new panel object name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_Ok_ |  Launches **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)**. If an existing file maintenance panel was selected, a message will display to ask if you want to open the **[File Maintenance Generator](../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. Respond _Yes_ to open it. Respond _No_ to open the Panel Designer instead.  
_Cancel_ |  Closes the **New/Existing Panel** window with no further action taken.  
  
## See Also

**[Creating Panel Controls](../Creating%20Panel%20Controls/Introduction.md)**
