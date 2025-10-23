# File Maintenance Generator  
  
**Step 7: File Maintenance Generator Completion**|   
---|---  
  
Review the selections for the previous steps, which are presented in a grid format with a vertical scroll bar. At this point, the _Finish_ button is enabled on **_all_** panels in the File Maintenance Generator.

> #### **Note:**  
If no fields (besides Key fields) have been added in **[Step 6: Fields](Field%20Layout.md)**, navigating to **Step 7: Finish** by any method (i.e. _Next_ button, **Step 7: Finish** button or Last browse button) will display a message about adding fields to the Main panel.  
  
Responding _Yes_ adds all fields to the Main panel. Responding _No_ does not add any fields; however, this message will continue to redisplay until at least one field is added or the _Finish_ button is selected.

This panel consists of the following:

_Save Template_ |  Button that launches the **File Maintenance Template Save Settings** window for saving File Maintenance template settings to a file name. Saving them to a file name allows the same settings to be used again when defining new panels by selecting the desired _Template_ in **[Step 1: Definition](Object%20Definition.md)**. Using File Maintenance templates makes it easier to maintain a consistent look and feel to panels that are generated. This window consists of the following: |  _Template_ |  Enter the name of the new template to be saved. If a template name is entered that already exists, a message will display.  
---|---  
_Default Template_ |  Select this check box to save the current template settings as the default to be used when creating new file maintenance panels. This default template will initially display as the _File Maintenance Template_ (in **[Step 1: Definition](Object%20Definition.htm#template)**) when a new file maintenance panel is being created. _(The Default Template check box was added in PxPlus 2020.)_  
_OK_ |  Saves the current settings to the template and closes the **File Maintenance Template Save Settings** window.  
_Exit_ |  Closes the **File Maintenance Template Save Settings** window without saving the template.  
_Confirm file and panels updated on completion_ |  When this option is checked **_(Default)_** , a confirmation message will display after clicking the _Finish_ button. This message shows the names of panels that have been generated, including folders, and the pathname of the HTML page that was created if the _HTML Page_ option was selected in **[Step 1: Definition](Object%20Definition.htm#formtype)**. If this option is unchecked, the confirmation message will not display, and this option will remain unchecked for panels and HTML pages that are subsequently generated in the current screen library. _(The Confirm file and panels updated on completion option was added in PxPlus 2021.)_  
_Launch the Screen Designer to edit 'xxxxxx' after completion_ |  Select this check box to open the generated main panel in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** after clicking the _Finish_ button. If this check box is **_not_** selected, the NOMADS Panel Designer will not launch. Instead, **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** will open with the file maintenance panel(s) added to the _Object Name_ list.  
_Finish_ |  This button is enabled in **Step 7: Finish** , at which time, it is also enabled on **_all_** panels in the File Maintenance Generator. It is used to complete the File Maintenance Generator and generate the file maintenance panel(s). If required fields are missing in **[Step 6: Fields](Field%20Layout.md)**, a message will display. The main panel will be generated using the object name specified. Any additional folders will be created with the name _object_name.n_ _**where** n_ is a sequence number beginning with 1. **_Example:_** Client_mnt _(Main Panel)_  
Client_mnt.1 _(Folder Panel 1)_  
Client_mnt.2 _(Folder Panel 2)_  
  
## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**  
**[Updating a Generated File Maintenance Panel](Updatepnl.md)**

****
