# Primary Syntax Elements

**Control Object Properties** |  **__**  
---|---  
  
Various properties of **[Graphical Control Objects](../../../control_object_properties/graphical_control_objects.md)** in PxPlus (Button, Drop Box, Scrollbar, etc.) can be referenced and modified ** _dynamically_** using a control's assigned CTL value (_ctl_id_), followed by the **[Apostrophe Operator](../../../appendix/apostrophe_operator.md)** and one of the associated **_property names_**.

Below is a list of some commonly used control object properties:

|  **['Col](../../../properties/col.md)** |  Column  
---|---|---  
|  **['Line](../../../properties/line.md)** |  Line  
|  **['Cols](../../../properties/cols.md)** |  Width of the control  
|  **['Lines](../../../properties/lines.md)** |  Height of the control  
|  **['Tip$](../../../properties/tip_.md)** |  Tip for the control  
|  **['Msg$](../../../properties/msg_.md)** |  Message line for the control  
|  **['Fmt$](../../../properties/fmt_.md)** |  Format mask for the control  
|  **['TextColor$](../../../properties/textcolor_.md)** |  Text color  
|  **['Value$](../../../properties/value_.md)** |  Current value/state of the control  
  
For each graphical control object, a list of properties and their descriptions is included with the Help for the associated control directive. For example, a list of _Button Properties_ is available by expanding the Help node for the **BUTTON** directive. A list of _Chart Properties_ is available by expanding the Help node for the **CHART** directive, and so on.

> The following links provide information on all the **_properties_** that can be used for each control type:

|  [**Button**](../../../control_object_properties/button_properties.md) |  [**Grid**](../../../control_object_properties/grid_properties.md) |  [**Radio_Button**](../../../control_object_properties/radiobutton_properties.md) |  [**Tree_View**](../../../control_object_properties/treeview_properties.md)  
---|---|---|---|---  
|  [**Chart**](../../../control_object_properties/chart_properties.md) |  [**List_Box**](../../../control_object_properties/listbox_properties.md) |  **[Report_View](../../../control_object_properties/reportview_properties.md)** |  [**Tristate_Box**](../../../control_object_properties/tristate_box_properties.md)  
|  [**Check_Box**](../../../control_object_properties/checkbox_properties.md) |  [**List_View**](../../../control_object_properties/listview_properties.md) |  [**Scrollbar (Horizontal)**](../../../control_object_properties/hscrollbar_properties.md) |  [**Vardrop_Box**](../../../control_object_properties/vardropbox_properties.md)  
|  [**Drop_Box**](../../../control_object_properties/dropbox_properties.md) |  [**Multi_Line**](../../../control_object_properties/multiline_properties.md) |  [**Scrollbar (Vertical)**](../../../control_object_properties/vscrollbar_properties.md) |  [**Varlist_Box**](../../../control_object_properties/varlistbox_properties.md)  
  
#### **Note:**  
Different types of controls can be added to a panel by using the NOMADS [**Panel Designer**](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md). To define a specific control type, see [**Creating Panel Controls**](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md).

## See Also

**[Properties List](../../../control_object_properties/properties_list.md)**  
**[Dynamic Control Properties](../../Graphical%20User%20Interfaces/Introduction.htm#dynamic)**
