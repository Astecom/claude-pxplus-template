# 

**Calendar** |  **__**  
---|---  
  
The Calendar feature provides a user-friendly way to enter date information into a Multi-Line input area. When applied to a **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)** control, it can be used to invoke a month calendar popup that allows users to pick a date to be inserted automatically into the input area.

A calendar button can be added next to the control (if the _Create Calendar Button_ check box is selected in the **Calendar Control Definition** window). The user will also be able to invoke the calendar by pressing **Shift - F2**.

> #### **Note:**  
A Multi-Line can only contain a query **_or_** a calendar definition _(not both)_ as defined via **[Query Type](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)** (located on the **Query** tab of the **[Multi-Line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)** dialog).

## Calendar Control Definition

The **Calendar Control Definition** window in NOMADS is used to set up how the Calendar feature will be applied in your application. Definitions created using this window will be stored in the _providex.cal_ file.

To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then, expand the _Setup_ category and select _Calendar_.  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Utilities_ menu, select _Calendar_.  
From **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  From the _Utilities_ menu, select _Calendar_. _(The Calendar utility was added to the Utilities menu in PxPlus 2022.)_  
From the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** |  From the _Utilities_ menu, select _Calendar_.  
  
This window consists of the following:

_Name_ |  Name of calendar entry. Maximum length is 64 characters. Type a new name and press Enter or click the Query button (binoculars) to select from a list of existing entries. This is the primary key for the file. Adds the definition to the Calendar List.  
---|---  
_Date Format_ |  Date formatting rules based on the defaults of the **[DTE( )](../../../functions/dte.md)** function. Click the drop-down arrow for a list of possible options or enter a new date format. A **;** (_semi-colon_) cannot be used (the string after the _semi-colon_ is ignored). If the time formatting string is used, the current time is assumed.  
_Create Calendar Button_ |  Check box to indicate that the calendar button is to be created.  
**Button Text/Bitmap**  
_Text_ |  Text that will display on the button.  
_Bitmap_ |  Bitmap that will display on the button. Default is !Date. Click the Bitmap Library button to select a different embedded or external bitmap reference. _If you only want text on the button, then leave this field blank._  
_Bitmap Position_ |  Bitmap position. Available selections are _Left_ or _Right_ of the text. Default is _Right_.  
_Bitmap Transparency_ |  Bitmap transparency option. Available selections are _None_ , _Pixel sets transparency_ , or _'Light Gray' is transparent_. Default is _None_.  
**Properties**  
_Button Height_ |  Height of the button. If set to 0 (default), then the height of the associated Multi-Line control will be applied to the button.  
_Button Width_ |  Width of the button. If set to 0 (default), then the width of the associated Multi-Line control will be applied to the button.  
__  
_Write_ |  Adds/updates the current record.  
_Delete_ |  Removes the current record.  
_Clear_ |  Clears the current record.  
_Exit_ |  Closes the **Calendar Control Definition** window. You will be prompted to save any changes prior to closing.  
  
## Assigning a Calendar Definition

To assign a specific calendar control definition to a Multi-Line control, a Query must be associated with the Multi-Line control. To do this:

|  1. |  Select the **Query** tab of the **[Multi-Line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)** dialog.  
---|---|---  
|  2. |  For the **[Query Type](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**, select _Calendar_.  
|  3. |  Select the **Calendar** drop-down arrow for a list of existing calendar control definitions that were previously defined using the **Calendar Control Definition** window.  
|  4. |  Click _OK_ to save and exit the **Multi-Line Properties** dialog. A calendar button displays beside the Multi-Line control.  
  
See **[Assigning a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#assigningquery)**.
