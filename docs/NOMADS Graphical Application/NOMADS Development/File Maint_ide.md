# Accessing Library Objects from IDE

**Accessing File Maintenance Generator from IDE**|   
---|---  
  
The _File Maintenance Generator_ task on the **[IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** is used to invoke the **[File Maintenance Generator](../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** for creating or editing a file maintenance panel.

To select this task, expand the _Graphical Application Builder (NOMADS)_ category on the _Menu_ list. This task opens the **New/Existing File Maintenance** window, which is used to specify a library and the name of a new or existing file maintenance panel.

_(The File Maintenance Generator task was added in PxPlus 2023 Update 1.)_

> This window consists of the following:

_Library_ |  Defaults to the **[Default Library](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#defaultlib)** defined for the current project. If a default library was not defined, this will be blank. Enter the name of the library file or click the Query button.  
---|---  
_Name_ |  Enter the name of the file maintenance panel or click the drop-down arrow to select from a list of the existing file maintenance panels in the library. If the file maintenance panel name does not exist, you will be able to create the new file maintenance panel when you click _Ok_.

#### **Note:**  
When entering a new file maintenance panel object name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_Ok_ |  Launches **[File Maintenance Generator](../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**.  
_Cancel_ |  Closes the **New/Existing File Maintenance** window with no further action taken.
