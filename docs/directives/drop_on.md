# Directives 

**DROP..ON** |  **_Drag and Drop_**  
---|---  
  
##  Formats

1. |  _Define Drag & Drop_: |  **DROP** _source_ctl_id_ __**ON** _dest_ctl_id_**RETURN** _new_ctl_id_  
---|---|---  
2. |  _Remove Logic_ : |  **DROP** _source_ctl__ id **ON** _dest_ctl_id_**REMOVE**  
3. |  _Temporarily Disable:_ |  **DROP** _source_ctl_id_ __**ON** _dest_ctl_id_**DISABLE**  
4. |  _Re-Enable Drag & Drop_: |  **DROP** _source_ctl__ id **ON** _dest_ctl_id_**ENABLE**  
  
**_Where:_**

_dest_ctl_id_ |  Unique numeric identifier for the destination control or zero for the window itself.  
---|---  
_new_ctl_id_ |  CTL signal that is generated when the drop occurs on the destination object. Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or special negative CTL values set by the system. See [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md).  
_source_ctl_id_ |  Unique numeric identifier for the source control or the keyword **FILE**. See **External File Dragging**.  
  
##  Description

The Drag and Drop feature allows for copying or moving of information from one object to another object. The drop event is triggered when a mouse is used to select information from the source object, drag the selection to another object, and deposit the information at the new location. The application is responsible for adding the information to the destination object and removing it from the source object.

The available **_Drag From_** or source controls are multi-lines and various types of list boxes, drop boxes, and grids.

The available **_Drop On_** or destination controls are buttons, check boxes, drop boxes, grids, multi-lines, list boxes, radio buttons, tri-state boxes. The highlighting of items on which the drop will occur is not supported in simple or formatted list boxes; however, this is supported in list view, report view, and tree view objects.

#### **Note:**  
When using the **DISABLE** syntax, the cursor will still change indicating that the drop is valid, however the signal indicating the drop took place is not generated.

##  External File Dragging

You can also allow external applications, such as Windows Explorer, to drop file names onto an input control such as a list box, tree view, or multi-line by specifying FILE as the name of the _source_ctl_id_.

> **DROP FILE ON** _dest_ctl_id_**RETURN** _new_ctl_id_

Whenever a file is dropped onto the control, the system will generate the CTL event specified by _new_ctl_id_.

The application can get a list of the file pathnames being dropped from the [**FIN(0, "DROPFILES")**](../functions/fin.htm#dropfiles) function call. All pathnames will be fully expanded and separated by a SEP character.

_(The ability to detect a DROP of a file was added in PxPlus v6.30.)_
