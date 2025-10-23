# File Maintenance Generator

**Step 2: File Maintenance Object Properties**|   
---|---  
  
Define the options for record update behavior, screen behavior and record messages.

#### **Note:**  
If an existing file maintenance object is entered in **[Step 1: Definition](Object%20Definition.htm#maint_obj)**, the options in **Step 2: Properties** will be set based on the values in the selected file maintenance object and cannot be modified.  
  
See **[File Maintenance and Object Inheritance](File%20Maintenance%20and%20Object%20Inheritance.md)** for information on file maintenance objects.

When only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , options that are not applicable are not displayed, as shown in the second screen shot:

|    
**_When only "HTML Page" is selected_**  
---|---  
  
This panel consists of the following:

**Select the update behavior** |  _Select the record locking behavior when a record is updated._  
---|---  
_Review Before Write_ |  **_(Default)_** Record's contents are reviewed before the record is written to determine if another user changed any fields.  
_Lock Record_ |  **_(Applicable for NOMADS Panels Only)_** Locks the record.  
_No Record Lock_ |  **_(Applicable for NOMADS Panels Only)_** Writes the record with no lock.  
**Select the screen behavior** |  _Select the screen behavior on a new record, for saving changes and after writing or deleting a record._  
_Do Not Clear Fields_ |  **_(Default)_** Record's contents are not cleared from data fields. This behavior can be applied after a new record key is entered and after a record is written or deleted.  
_Auto-Clear All Fields_ |  Record's contents are automatically cleared from data fields. This behavior can be applied after a new record key is entered and after a record is written or deleted.  
_Standard Save_ |  **_(Default)_** To save a new or edited record, the _Write_ button is selected; otherwise, a confirm-save message displays when tabbing off an input control and selecting the _Clear_ , _Exit_ , browse or X (_Close_) buttons.  
_Auto-Save Changes_ |  **_(Applicable for NOMADS Panels Only)_** A new or edited record is automatically saved when tabbing off an input control and selecting the _Exit_ , browse or X (_Close_) buttons. No _Write_ button is provided.  
**Select record message options** |  _Select the messages that will display when a record is created or deleted._  
_Confirm New Record_ |  A message asks to create the new record before proceeding.  
_Acknowledge Writes_ |  A message confirms that the new record has been added or an existing record has been updated.  
_Confirm Delete Request_ |  **_(Default)_** A message asks to delete the selected record before proceeding.  
_Acknowledge Deletes_ |  **_(Default)_** A message confirms that the selected record is deleted.  
  
## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**
