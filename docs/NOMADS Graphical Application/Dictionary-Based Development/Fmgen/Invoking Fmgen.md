# File Maintenance Generator  
  
**Invoking File Maintenance Generator**|   
---|---  
  
To invoke the File Maintenance Generator, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then select _File Maintenance Generator_. See **[Accessing File Maintenance Generator from IDE](../../NOMADS%20Development/File%20Maint_ide.md)**. _(The File Maintenance Generator task on the IDE was added in PxPlus 2023 Update 1.)_  
From **[NOMADS Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Use one of the methods described below, which is based on the option selected from the **[Views](../../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#views)** menu: |  **Views Menu Option** |  **Method** When entering a new panel _Name_ , valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message displays.  
---|---  
_Button View_ |  Under **Objects New/Maintain** , type a new file maintenance panel name in the _Name_ field (see **Note** above). Then either click the _File Maint_ button or select _Objects > File Maint_ from the menu bar. The **Welcome** panel is launched.  
_Toolbar View_ |  Click the _File Maint_ button on the toolbar, and when prompted, type a new file maintenance panel _Name_ (see **Note** above). The **Welcome** panel is launched. Another method is to select _Objects > File Maint_ from the menu bar, and when prompted, type a new file maintenance panel _Name_.  
_Menubar_ _View_ |  Select _Objects > File Maint_ from the menu bar, and when prompted, type a new file maintenance panel _Name_ (see **Note** above). The **Welcome** panel is launched.  
From **[Webster+ Library Object Selection](../../../Webster/Inspector.htm#view_libs)** |  In Webster+ Inspector, first open the directory where the screen library is located and then open the screen library. When the **Webster+ Library Object Selection** page displays, click the **[New File Maint](../../../Webster/Inspector.htm#file_maint)** button. When prompted, enter a name for the new panel. The **[File Maintenance Generator](Fmgen%20Introduction.md)** is launched. _(The Webster+ Library Object Selection page was added in PxPlus 2024.)_  
  
## Welcome Panel

The **Welcome** panel is launched when a **_new_** file maintenance panel name is entered. It shows the new panel name and provides general information about the File Maintenance Generator:

> This panel also provides two links:

> **_How to Create File Maintenance Panels_** link launches PxPlus Help documentation for the **_current_** version of the File Maintenance Generator.

> **_To access the legacy version of the File Maintenance Generator click here_** link launches the **_legacy_** version of the **[File Maintenance Generator](../File%20Maintenance%20Generator/Overview.md)**.

Click _Next_ to proceed to **[Step 1: Definition](Object%20Definition.md)**.

Each step in the File Maintenance Generator presents a panel with three main sections: a _Progress Bar_ , a _Work Area_ and a _Navigation Bar_ :

This table describes each section:

**Section** |  **Description**  
---|---  
_Progress Bar_ |  Displays the seven steps for generating a file maintenance panel. A white step number against a dark red background indicates the current step being defined. Clicking on a step number goes directly to that step without having to select intermediate steps in order. This is useful when reviewing or changing previous selections before exiting the generator. Keep in mind that certain steps may require data before advancing to subsequent steps.  
_Work Area_ |  Body of the File Maintenance Generator panel that consists of fields used to process each step.  
_Navigation Bar_ |  Consists of buttons that are enabled or disabled, depending on the current step being defined: |  _Preview NOMADS Panel  
(**or** Preview HTML Page)_ |  This button is enabled on **_all_** panels in the File Maintenance Generator after a _Table Name_ is entered or selected in **[Step 1: Definition](Object%20Definition.md)**. It is used to display a preview of the layout of the NOMADS panel or HTML page; however, the controls will not actually function. The button text defaults to _Preview NOMADS Panel_ or _Preview HTML Page_. Click the drop-down arrow for preview options. See **[Preview Mode](Preview.md)**.  
---|---  
_(First browse button)_ |  Goes directly to **[Step 1: Definition](Object%20Definition.md)**.  
_Back_ |  Returns to the previous panel.  
_Next_ |  Advances to the next panel. If information is required before advancing to the next panel, a message will display.  
_(Last browse button)_ |  Goes directly to **[Step 7: Finish](Completion.md)**. If no fields (besides Key fields) have been added in **[Step 6: Fields](Field%20Layout.md)**, a message will display about adding fields to the Main panel.  
_Finish_ |  Completes the File Maintenance Generator and generates the NOMADS panels and/or HTML pages. See **[Step 7: Finish](Completion.md)**.  
_Cancel_ |  Closes the File Maintenance Generator. No panels or HTML pages are generated.  
  
## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**
