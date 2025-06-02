# Options and Utilities 

**Panel Bulk Edit Utility** |  **__**  
---|---  
  
The **Panel Bulk Edit** utility allows you to change the design properties of **_two or more_** selected **[Panel Controls](../../Creating%20Panel%20Controls/Introduction.md)** within the current active panel.

To invoke this utility in the **[NOMADS Panel Designer](../Introduction.md)**, select _Utilities > Bulk Edit_ from the menu bar or click the _Bulk Edit_ tool bar option.

> This utility consists of the following:

_Controls Selected_ |  Click the drop-down arrow for the names of the controls selected for bulk editing in the current panel.   
---|---  
_Property_ |  Lists the property names, grouped into categories. See **[Property Categories](Bulk%20Edit%20Utility.htm#categories)**.

#### **Note:**  
Not all properties are applicable to every control. To see which controls are affected by a specific property setting, position the mouse pointer over the property name in the table. A popup message displays a list of all applicable controls. This makes it easier to select the controls that you want to change using this utility.  
  
_Value_ |  Displays the current value assigned to a given property. The method for entering or displaying these values is dependent on the property type. Some fields are intended for entering free-form values; e.g. co-ordinates for _Height_ and _Width_. Drop box style cells are identified by a down arrow button, which indicates that pre-set selections are available; e.g. _Tab Stop, Initially Disabled, Enable Scrolling, Object Persistence, Implied Decimal_ , etc. Query style cells are identified by a three-dotted button. These cells are often associated with more than one field, and clicking the button invokes a separate dialog for entering/changing field values. The dialog that is invoked varies depending on the property. Double clicking inside the cell either invokes the same dialog as the dotted button or allows values to be entered directly into the cell. The _As is_ option indicates that the current/default setting for a given property will be maintained "as is" for the controls listed in the _Controls Selected_ drop box. _(The ability to double click inside a Query style cell was added in PxPlus 2023.)_  
_OK_ |  Applies the changes to the selected properties.

#### **Note:**  
To reverse the changes, click the _Undo_ button on the Panel Designer toolbar.  
  
_Cancel_ |  Closes the utility without applying any changes.  
  
##  Property Categories

The properties in the _Property_ column are grouped into categories and sorted alphabetically within each group by default. These categories can be expanded/collapsed by clicking the **+**  _(plus)_ or **-**  _(minus)_ button adjacent to the category name.

By default, the categories are displayed in the following order: _Events, Coordinates, Display, Attributes, Colours, Font, User Aids, Other_ :

|  _Events_ |  Logic that will execute when a particular event occurs (i.e. _On Change_ , _On Focus_ , _Post Create_).  
---|---|---  
|  _Coordinates_ |  Coordinates for the _Height_ (in number of lines) and _Width_ (in number of columns) of a control.  
|  _Display_ |  Visual display information (i.e. _Implied Decimal, Input Format, Input Length_).  
|  _Attributes_ |  Control attributes (i.e. _Auto Tab Skip, Bitmap Button, Enable Scrolling_).  
|  _Colours_ |  _Background_ and _Foreground_ colours of the control or panel.  
|  _Font_ |  Graphic font.  
|  _User Aids_ |  _Floating Tip, Help Reference, Message Bar_ text.  
|  _Other_ |  Additional control or panel features (i.e. _User Tag, Visual Class, iNomads Class_).  
  
#### **Note:**  
You can customize the sort order of these property categories and their associated properties. See **[Change Bulk Edit/Property Sort Order](Change%20Sort%20Order.md)**.

## See Also

**[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)**
