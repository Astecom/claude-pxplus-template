# List Box Controls

**Variable List Box Control**|   
---|---  
  
A _Variable List Box_ control is similar to a **[Standard](List%20Box%20Type.htm#standard)** List Box control but with the added capability of allowing variable input. This means that users can either select from the List Box or manually enter a different value not in the list.

|  The _Variable_ List Box control on the left displays a list of predefined items. Rather than selecting from the list, a different value (_bird_) has been manually entered.  
  
If the number of items in the list overflows the size of the List Box, a vertical scrollbar is automatically displayed.  
  
A **[List Box Data Class](../../../Data%20Dictionary/Data%20Classes/Listbox.md)** can also be applied to a Variable List Box control.  
---|---  
  
## Creating a Variable List Box

Below are the steps to create a Variable List Box:

|  1. |  To draw a new List Box control, select the List Box control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object. The **[List Box Properties](List%20Box%20Type.htm#properties)** dialogue is also displayed.  
---|---|---  
|  2. |  To make this a **_Variable List Box_** , the **[List Box Type](List%20Box%20Type.htm#display)** (on **Display** tab) must be set to _Standard_. To allow users to input their own values, select the **[Allow Variable Input](List%20Box%20Type.htm#display)** attribute (on **Attributes** tab). An **[Input Length](List%20Box%20Type.htm#display)** can be optionally specified (on **Display** tab).  
|  3. |  Define other attributes for this control as needed.  
  
#### **Note:**  
A List Box control can also be created from a **_data class_** or a data dictionary **_element_**. See [**Data Class Controls**](https://manual.pvxplus.com/PXPLUS/NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark4) and [**Data Element Controls**](https://manual.pvxplus.com/PXPLUS/NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark5).

For a list of properties that can be applied to a **_Variable List Box_** , see **[VARLIST_BOX Properties](../../../control_object_properties/varlistbox_properties.md)**.

## See Also

**[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**  
**[VARLIST_BOX Directive](../../../directives/varlist_box.htm#Mark3)**
