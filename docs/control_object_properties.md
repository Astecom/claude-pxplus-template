# Language Reference

**Control Object Properties** |   
---|---  
  
Various properties of graphical control objects in PxPlus (i.e. Button, Drop Box, Scrollbar, etc.) can be referenced and modified **_dynamically_** using a control's assigned CTL value (_ctl_id_) followed by the apostrophe operator and one of the associated **_property names_**.

For each graphical control object, a list of properties and their descriptions is included with the Help for the associated control directive. For example, a list of _Button Properties_ is available by expanding the Help node for the **BUTTON** directive. For a list of _Chart Properties_ , expand the Help node for the **CHART** directive, and so on. See **[Graphical Control Objects](control_object_properties/graphical_control_objects.md)**.

For quick access to the properties for a **_specific_** control type, use the links below:

|  [**Button**](control_object_properties/button_properties.md) |  [**Grid**](control_object_properties/grid_properties.md) |  [**Radio_Button**](control_object_properties/radiobutton_properties.md) |  [**Tree_View**](control_object_properties/treeview_properties.md)  
---|---|---|---|---  
|  [**Chart**](control_object_properties/chart_properties.md) |  [**List_Box**](control_object_properties/listbox_properties.md) |  **[Report_View](control_object_properties/reportview_properties.md)** |  [**Tristate_Box**](control_object_properties/tristate_box_properties.md)  
|  [**Check_Box**](control_object_properties/checkbox_properties.md) |  [**List_View**](control_object_properties/listview_properties.md) |  [**Scrollbar (Horizontal)**](control_object_properties/hscrollbar_properties.md) |  [**Vardrop_Box**](control_object_properties/vardropbox_properties.md)  
|  [**Drop_Box**](control_object_properties/dropbox_properties.md) |  [**Multi_Line**](control_object_properties/multiline_properties.md) |  [**Scrollbar (Vertical)**](control_object_properties/vscrollbar_properties.md) |  [**Varlist_Box**](control_object_properties/varlistbox_properties.md)  
  
For a list of **_all_** the properties on one page (in alphabetical order), see [**Properties List**](control_object_properties/properties_list.md).

#### **Note:**  
Different types of controls can also be created using NOMADS [**Panel Designer**](NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md). For details on how to define a specific control type, see [**Creating Panel Controls**](NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md).

## See Also

**[Compound Properties](control_object_properties/compound_properties.md)**  
**[Color Properties](control_object_properties/colour_properties.md)**

##  Using Property Names

Access to control object properties is provided via the [**Apostrophe Operator**](appendix/apostrophe_operator.md). An apostrophe operator _(tick)_ allows **_dynamic_** access to the properties and methods available for a given COM, OOP or graphical object. Some properties are denoted with dollar signs to indicate that they represent string values; e.g. 'Msg$ or 'Tip$.

**_Example:_**

A button's location, size, text and color would be represented by properties named **[Height](properties/height.md)**, **[Font$](properties/font_.md)**, **[Text$](properties/text_.md)**, **[TextColor$](properties/textcolor_.md)**, etc. If the variable _MyButton_ contained the CTL value associated with a button, you could change its text as follows:

> MyButton'Text$="Hit me now"

Other common properties include:

**Property** |  **Description**  
---|---  
**['Col](properties/col.md)** |  Column  
**['Line](properties/line.md)** |  Line  
**['Cols](properties/cols.md)** |  Width of the control  
**['Lines](properties/lines.md)** |  Height of the control  
**['Tip$](properties/tip_.md)** |  Tip for the control  
**['Msg$](properties/msg_.md)** |  Message line for the control  
**['Fmt$](properties/fmt_.md)** |  Format mask for the control  
**['TextColor$](properties/textcolor_.md)** |  Text Color  
**['Value$](properties/value_.md)** |  Current value/state of the control  
  
#### **Note:**  
While programs can access or update property values, properties cannot be specified as the target for any file I/O or CALL parameter lists.

Generally, numeric properties are type insensitive; i.e. a property such as **['Line](properties/line.md)** returns (or receives) a number. If desired, you can access the same value using the property **'Line$**. This is also true for string properties, assuming that they only return numeric values.

Some properties return different values based on the type of reference you make. For example, most color properties return a text description of the RGB color when accessed as a string or a 24-bit color number when accessed as a numeric.

PxPlus also supports objects that are external to PxPlus (this section does not deal with the properties (and methods) that apply to them). See [**Apostrophe Operator**](appendix/apostrophe_operator.md).
