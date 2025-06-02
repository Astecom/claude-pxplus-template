# Options and Utilities   
  
**Drag and Drop Utility** |  **__**  
---|---  
  
The **Drag and Drop** utility enables selected items to be moved between a source control and a destination control. It allows you to define a source object and a destination object for drag and drop functionality in your panel.

The application is responsible for moving and dropping items from the source to destination controls. When the drop signal occurs, the application logic will be invoked. The following controls are able to use this functionality:

|  _Drag From_ (source) controls are **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)**, **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)**, **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)** and **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Overview.md)**. You can also specify *FILE as the source to allow external applications, such as Windows Explorer, to drop file names onto a destination input control. (The *FILE option is not supported in iNomads.)  
---|---  
|  _Drop On_ (destination) controls are **[Button](../../Creating%20Panel%20Controls/Button%20Control/Overview.md)**, **[Radio Button](../../Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)**, **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)**, **[Check Box/Tri-State](../../Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**, **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Overview.md)** and **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)**.  
  
If the drag and drop functionality will occur between the main panel and a **[Concurrent Panel](../../Program%20Interaction/Concurrent%20Panels/Overview.md)**, it must be defined in this utility for the concurrent panel. If the drag and drop functionality will occur between two concurrent panels, it must be defined on both panels. In these cases, only the controls on the current panel will appear in the _Drag From_ or _Drop On_ drop boxes; however, other control names may be manually typed.

_(Support for drag and drop between concurrent windows was added in PxPlus 2020.)_

Invoke the **Drag and Drop** utility from the **[NOMADS Panel Designer](../Introduction.md)** by selecting _Utilities > Drag&Drop_ from the menu bar or the _DragDrop_ option on the tool bar.

The following window is displayed:

> This window consists of the following:

_Drag From_ |  Click the drop-down arrow to select from the list of source controls that you can _drag from_ or type another control name. You can also specify *FILE as the source to allow external applications, such as Windows Explorer, to drop file names onto a destination input control. The result of the drop event is a list of full pathnames of the dragged files, separated by a SEP character, that is loaded into the NOMADS Reserved Variable **[DROPFILES$](../../Appendix/NOMADS%20Variables/Overview.htm#dropfiles)**. The list is also available using the FIN(0,"DROPFILES") function.

#### **Note:**  
The *FILE option is not supported in iNomads.

_(The variable drop box functionality was added in PxPlus 2020.)  
(The *FILE option to drag and drop files from an external source was added in PxPlus 2021 Update 1.)_  
---|---  
_Drop On_ |  Click the drop-down arrow to select from the list of destination controls you can _drop on_ or type another control name. _(The variable drop box functionality was added in PxPlus 2020.)_  
_Logic_ |  Enter the logic to be executed when the drop signal event occurs. Click the dotted button to invoke the **Logic** window for creating or editing this string. Available processes include _Ignore, Link, Perform, Call, Execute, Help, Jumpto, End_. See **[Actions and Parameters](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row.  
_Delete_ |  Removes the currently selected row.  
_OK_ |  Saves any changes and closes the **Drag and Drop Utility**.  
_Cancel_ |  Closes the **Drag and Drop Utility** without saving any changes.
