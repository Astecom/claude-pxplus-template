# Panel Designer

**Using Property Sheets** |  **__**  
---|---  
  
The Property Sheet is a resizable window in the work area that presents the design properties for a selected control object or the panel header using a two-column table format. When the NOMADS Panel Designer is initially launched, this window is anchored to the right side of the work area by default.

The **[Menu Bar](../Work%20Area/Menu%20Options.md)** and **[Tool Bar](../Work%20Area/Tool%20Bar.md)** options above the work area provide access to Panel Designer functionality. The name of the current project is also displayed.

_(The project name display was added in PxPlus 2023.)_

The **[Controls Toolbox](../Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)** to the left of the work area provides a collection of creation tools for adding controls to any panel.

To select Property Sheets, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[NOMADS Panel Designer](../Introduction.md)** |  Select _Utilities > Property Sheets_ from the menu bar.  
From **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Select _Designer > Property Sheets_ from the menu bar **_before_** creating a new panel or selecting an existing panel.  
  
The example below shows the Property Sheets version of the NOMADS Panel Designer. On the design panel, a button control is selected, and the **Button Properties** for this control are displayed using the Property Sheet:

> The Property Sheet presents the design properties in a table with two columns, _Property_ and _Value_. Three buttons, _Preview_ , _Test_ and _Help_ , are also provided.

_Property_ |  This column lists the property names for the _Control Type_ selected. Use the scroll bar to navigate through the full list of properties. Only the properties that apply to the selected control type (see **[Types of Controls](../../Creating%20Panel%20Controls/Introduction.htm#types)**) or panel header (see **[Panel Header Properties](../Panel%20Header/Overview.htm#properties)**) are displayed. Hover the mouse pointer over a _Property_ cell in the table to display a floating tip with Help information for the associated property. See **[Help Text](Overview.htm#HelpText)**.  
---|---  
_Value_ |  This column contains the current value defined (or assigned by default) for the property. The method for entering or displaying these values is dependent on the property type. Some fields are intended for entering free-form values; e.g. object co-ordinates for _Column, Height, Line_ , _Width_ , etc. Check boxes may be used to toggle _On/Off_ selections; e.g. _Tab Stop, Initially Disabled, Enable Scrolling_ , etc. Drop box style cells are identified by a down arrow button, which indicates that pre-set selections are available; e.g. _Alt-Key, Object Persistence, Implied Decimal_ , etc. Query style cells are identified by a three-dotted button. These cells are often associated with more than one field, and clicking the button invokes a separate dialog for entering/changing field values. The dialog that is invoked varies depending on the property. Double clicking inside the cell either invokes the same dialog as the dotted button or allows values to be entered directly into the cell. Hover the mouse pointer over a _Value_ cell in the table to display a floating tip with Help information for the associated property. See **[Help Text](Overview.htm#HelpText)**. _(The ability to double click inside a Query style cell was added in PxPlus 2023.)_  
_Preview_ |  Some graphical user interface controls, such as Buttons and Check Boxes, are displayed in a limited _edit mode_ format as you draw them on the panel. Click the _Preview_ button to get a quick look at how the visible properties of a control will appear at run time.

#### **Note:**  
The _Preview_ button will be visible or hidden depending on the type of control selected.  
  
_Test_ |  The _Test_ button switches the panel into _test mode_ , which processes the panel and allows panel controls to function in an interactive state (as they would appear to the user). To exit _test mode_ and return to _edit mode_ , press the **Esc** or the **F4** key, or use the X (Close) button on the test panel.  
_Help_ |  Launches PxPlus Help.  
  
##  Property Categories

All properties listed in the Property Sheet are categorized into groups. The default order consists of the following: _Name/Type, Events, Coordinates, Display, Validation, Attributes, Colors, Font, User Aids, Other_. You can customize the sort order of the property categories and their associated properties. See **[Change Bulk Edit/Property Sort Order](../Options%20and%20Utilities/Change%20Sort%20Order.md)**.

The property categories are defined as follows:

_Name/Type_ |  Contains the _Control Name_ , _Control Type_ , _Data Class_ , and any additional properties such as _List Box Type_ and _Shape_.  
---|---  
_Events_ |  Logic that will execute when a particular event occurs; e.g. _On Change_ , _On Focus_ and _Post Create_ events.  
_Coordinates_ |  Object co-ordinates for _Column, Height, Line_ and _Width_.  
_Display_ |  Visual display information; e.g. _Bitmap Button, Input Length, Input Format_.  
_Validation_ |  Validation logic for Multi-line controls; e.g. _Formatter, Validation Rules_ and _Validator._  
_Attributes_ |  Control attributes represented as a series of check box cells in the property list; e.g. _Auto Tab Skip, Numeric, Initially Hidden_.  
_Colors_ |  _Background_ and _Foreground_ colors of the control or panel.  
_Font_ |  Graphic font.  
_User Aids_ |  _Floating Tip_ , _Help Reference_ and _Message Bar_ text.  
_Other_ |  Additional panel/object features; e.g. _Comments_ , _Groups, Popup Menu, Query, Security_ and _User Tag_ references.  
  
##  Adjusting the Format and Appearance

Property Sheets can be enlarged by dragging the window border. The property categories (i.e. _Name/Type_ , _Coordinates, Events_ , _Display, Attributes,_ etc.) can be expanded or collapsed by clicking the Up/Down arrow buttons adjacent to each category heading. If needed, you can minimize the Property Sheet to the bottom of the Panel Designer work area while you adjust the layout of your panel.

To adjust the format and appearance of Property Sheets, select _Options > Properties Table_ from the menu bar to access the following options:

_Change Bulk Edit/Property Sort Order_ |  This option opens the **[Change Bulk Edit/Property Sort Order](../Options%20and%20Utilities/Change%20Sort%20Order.md)** window for customizing how property groupings are displayed in Property Sheets, as well as in the **[Panel Bulk Edit Utility](../Options%20and%20Utilities/Bulk%20Edit%20Utility.md)** and the **[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** (for the **Properties to Edit** grid).  
---|---  
_Save Window Settings_ |  This option is used to maintain panel persistence of the Property Sheet on exit from the Panel Designer. With this setting, the Property Sheet will be restored to the same format, size and location the next time you return to the Panel Designer. It also remembers if the Property Sheet is disabled. This setting is saved in the _nomads.ini_ file or a project settings file under [Options]/Save.  
_Disable Window_ |  This option is used to disable access to the Property Sheet. It also prevents the Property Sheet from being reloaded each time a control is selected (moved, resized, etc.), which can improve performance when running NOMADS across a WindX connection. This setting is saved in the _nomads.ini_ or a project settings file under [PropertiesWindow]/Disable.  
_Show Minimized Window_ |  This option exposes the minimized Property Sheet in the bottom left corner of the Panel Designer. This can be used as a quick method to locate the Property Sheet when it seems out of sight behind the Panel Designer work area. The Restore button can be used to maximize the Property Sheet.  
  
## On-the-Fly Changes

When a control is edited or created, design properties for that component are loaded automatically in the Property Sheet. The heading bar identifies the control type or panel header selected for editing.

When a property value is changed in the Property Sheet, the change is reflected immediately in the panel. When using the mouse to resize or move a control on the panel, the _Column, Height, Line_ and _Width_ property values (under the _Coordinates_ category in the Property Sheet) are updated.

To reverse any changes, click the _Undo_ tool bar button.

To save any changes, click the _Save_ tool bar button or select _Panel > Save_ from the menu bar; otherwise, close the panel without saving changes.

##  Help Text

When the mouse pointer is positioned over a cell in the _Property_ or _Value_ column, a floating tip displays with Help information for the associated property. These tips are hidden or shown based on the _Hide Tips_ option that is available by clicking the PxPlus icon in the upper left corner of the Property Sheet.

## See Also

**[Using NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)**  
**[Using Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)**
