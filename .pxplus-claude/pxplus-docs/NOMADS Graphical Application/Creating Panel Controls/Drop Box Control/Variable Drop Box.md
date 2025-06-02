# Drop Box Control

**Variable Drop Box Control**|   
---|---  
  
A _Variable Drop Box_ control is similar to a **[Drop Box](Overview.md)** control but with the added capability of allowing variable input. This means that users can either click on the down arrow to select from the drop down list or manually enter a different value not in the list.

|  The _Variable_ Drop Box control on the left displays a drop down list of predefined items when the down arrow is clicked. Rather than selecting from the list, a different value (_bird_) has been manually entered.  
  
If the number of items in the list overflows the size of the Drop Box, a vertical scrollbar is automatically displayed.  
  
A **[Drop Box Data Class](../../../Data%20Dictionary/Data%20Classes/Dropbox.md)** can also be applied to a Variable Drop Box control.  
---|---  
  
## Creating a Variable Drop Box

The steps to create a Variable Drop Box are:

|  1. |  To draw a new Variable Drop Box on your panel, select the Drop Box control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.  
  
A Drop Box control can also be created from a **_data class_** or a data dictionary ** _element_**. See **[Data Class Controls](https://manual.pvxplus.com/PXPLUS/NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark4)** and **[Data Element Controls](https://manual.pvxplus.com/PXPLUS/NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark5)**.  
---|---|---  
|  2. |  To make this a **_Variable Drop Box_** : In **[Drop Box Properties](Drop%20Box%20Properties.htm#properties)**, select the **[Allow Variable Input](Drop%20Box%20Properties.htm#attributes)** attribute (on **Display** or **Attributes** tab) to allow users to input their own values. An **[Input Length](Drop%20Box%20Properties.htm#display)** can be optionally specified (on **Display** tab).  
|  3. |  Define any other specific attributes for this control as needed.  
  
For a list of properties that can be applied to a **_Variable Drop Box_** , see **[VARDROP_BOX Properties](../../../control_object_properties/vardropbox_properties.md)**.

## See Also

**[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**  
**[VARDROP_BOX Directive](../../../directives/vardrop_box.htm#Mark3)**
