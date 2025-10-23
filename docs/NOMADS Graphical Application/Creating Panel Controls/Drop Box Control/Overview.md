# Creating Panel Controls

**Drop Box Control** |  **__**  
---|---  
  
A Drop Box control is similar to a **[Standard](../List%20Box%20Controls/List%20Box%20Type.htm#standard)** List Box; however, the default state only displays a single line of text. The remaining list is available by clicking the drop-down arrow.

The illustration on the left shows the same Drop Box control, first in its default state and then in its expanded state to show all the elements.

By default, users can make one selection from a pre-assigned list of items. To allow users to input their own values, select the _Allow Variable Input_ attribute. See **[Drop Box Properties](Drop%20Box%20Properties.htm#attributes)**.

A Drop Box takes a smaller amount of space on the screen than a comparable List Box. In addition, PxPlus automatically supplies vertical scrollbars if the number of elements overflows the size of the Drop Box.

Combine these features to optimize the screen design, particularly when display space is at a premium. A predefined **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** can also be applied to a Drop Box control.

## Creating a Drop Box

To draw a new Drop Box on your panel, select the Drop Box control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

A Drop Box control can also be created from a **_data class_** or a data dictionary **_element_**. See **[Data Class Controls](../Introduction.htm#Mark4)** and **[Data Element Controls](../Introduction.htm#Mark5)**.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Drop Box Properties](Drop%20Box%20Properties.md)**.

For information and examples on the use of **_dynamic data classes_** and **_dynamic control properties_** , see **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

## Loading Data Elements in a Drop Box

Once created, a Drop Box can be loaded using **DROP_BOX LOAD** syntax in your program code. **[Smart Controls](../../Smart%20Controls/Overview.md)** can also be used to simplify this process by auto-loading data based on query definitions. Use the _Auto Load_ property to set this feature (if activated).

You can programmatically retrieve or set a selected item in a Drop Box, using the variable with the same name as the control. See **[Accessing and Manipulating Controls](../../Program%20Interaction/Event-Handler%20Routines/Accessing%20and%20Manipulating%20Controls.md)**.

## See Also

**[Variable Drop Box](Variable%20Drop%20Box.md)**  
**[DROP_BOX Directive](../../../directives/drop_box.htm#Mark3)**
