# System Maintenance Tools

**Copy Theme**|   
---|---  
  
The **Copy Theme** utility is used to copy the records for a selected Theme from the Theme Definition file in the _Input Directory_ to the Theme Definition file in the _Output Directory_. If the Theme Definition file does not exist in the _Output Directory_ , a message will display, asking to create it. The option to copy related Visual Class records is also provided.

Standard PxPlus Themes and Visual Classes are found in the **_*plus/winutl_** directory. **[Themes](Themes.md)** are stored in the **_providex.dfs_** file, and **[Visual Classes](Visual%20Classes.md)** are stored in the **_providex.ccl_** file.

_(The Copy Theme utility was added in PxPlus 2024.)_

See the tutorial **[How to Copy a Theme](../../../How%20To/How%20to%20Copy%20Theme.md)**.

> To invoke the **Copy Theme** utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then, expand the _Setup_ category and select _Copy Theme_.  
From **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Select _Copy Themes_ from the **[Utilities](../../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#utilities)** menu.  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  Select _Options_ > _Copy Theme_ from the menu bar.  
  
This window consists of the following:

_Input Directory_ |  Path to the directory where the Theme Definition file to copy the records from is located. Defaults to the Theme Definition file location for the current project. This can be changed by entering a different path or clicking the Query (_folder_) button. If no Themes have been defined in the specified location, a message will display.  
---|---  
_Use PxPlus Themes_ |  When this check box is selected, the _Input Directory_ defaults to the location where the PxPlus Themes and Visual Class definitions are stored (i.e. *plus/winutl). By default, this check box is not selected. PxPlus Themes and Visual Classes are used throughout the development toolkit and the following user facing applications: **[Report Writer](../../../Report%20Writer/Introduction.md)**, **[Views](../../../Views%20System/Introduction.md)**, **[Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** and **[Customizer](../../Customizer/Overview.md)**. Copying PxPlus Themes allows you to create your own copy of these definitions and modify them for use in your application.  
_Output Directory_ |  Enter the path to the directory where the Theme Definition file to copy the records to is located or click the Query (_folder_) button. This directory can be the same as or different from the _Input Directory_. However, it cannot be the same location where the PxPlus Themes and Visual Class definitions are stored (i.e. *plus/winutl); otherwise, a message will display. _(The ability to copy a Theme from/to the same directory was added in PxPlus 2024 Update 1.)_  
_Copy from Theme_ |  Click the drop down arrow for a list of the Themes defined in the _Input Directory_. If the _Use PxPlus Themes_ check box is selected, only the predefined PxPlus Themes are listed.  
_Copy to Theme_ |  Enter the name of the Theme to copy to. Defaults to the _Copy from Theme_ name when the _Input Directory_ and _Output Directory_ are different. This can be changed if you want the Theme to have a different name in the _Output Directory_. If copying a Theme from/to the same directory, a new _Copy to Theme_ name, which is different from the _Copy from Theme_ name, must be entered; otherwise, a message will display.  
_Copy Visual Class Records_ |  When selected **_(Default)_** , the Visual Class records related to the selected Theme will be copied to the Visual Classes Definition file in the _Output Directory_.  
_Proceed_ |  This button is enabled after _Input Directory_ , _Output Directory_ , _Copy from Theme_ and _Copy to Theme_ have been entered. Clicking this button copies the Theme records for the selected Theme from the Theme Definition file in the _Input Directory_ to the Theme Definition file in the _Output Directory_. If this file does not exist in the _Output Directory_ , a message will display, asking to create it. If the _Copy Visual Class Records_ check box is selected, the Visual Class records related to the selected Theme are also copied. If the Visual Classes Definition file does not exist in the _Output Directory_ , a message will ask if you want to create it. If duplicate Theme records already exist in the _Output Directory_ , a message will display, asking how you want to proceed: _Yes_ will overwrite the individual record indicated in the message. _No_ will skip this individual record. _All_ will overwrite all of the duplicate Theme records. _Cancel_ will skip the rest of the Theme records. A similar message will display if duplicate Visual Class records already exist in the _Output Directory_. When the Copy is completed, a message displays to indicate the number of Theme and Visual Class records that were copied.  
_Exit_ |  Closes the **Copy Theme** utility.  
  
## See Also

**[How to Copy a Theme](../../../How%20To/How%20to%20Copy%20Theme.md)  
[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
