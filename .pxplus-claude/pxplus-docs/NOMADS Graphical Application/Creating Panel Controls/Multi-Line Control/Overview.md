# Creating Panel Controls

**Multi-Line Control** |  **__**  
---|---  
  
A Multi-Line control is used for entering one or more lines of text. Depending on the Multi-Line input field, the user will press a function key, **Tab** or **Enter** to submit the input.

If you define a Multi-Line input field as more than one line in height, PxPlus adds scrollbars and applies word wrapping. If the input area is only one line high, the Multi-Line input region will not have a vertical scrollbar but will scroll horizontally as required.

Your application may use a locked and borderless Multi-Line to display text, which can be updated by your program (a dynamic alternative to fonted text).

A predefined **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** can also be applied to a Multi-Line control.

## Creating a Multi-Line

To draw a new Multi-Line on your panel, select the Multi-Line control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left-mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

A Multi-Line control can also be created from a **_data class_** or a data dictionary **_element_**. See **[Data Class Controls](../Introduction.htm#Mark4)** and **[Data Element Controls](../Introduction.htm#Mark5)**.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Multi-Line Properties](Multi-Line%20Properties.md)**.

For information and examples on the use of **_dynamic data classes_** and **_dynamic control properties_** , see **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

## Loading Data Elements

Once created, values in a Multi-Line are accessible to retrieve or set using the variable with the same name as the control. See **[Accessing and Manipulating Controls](../../Program%20Interaction/Event-Handler%20Routines/Accessing%20and%20Manipulating%20Controls.md)**.

**[Smart Controls](../../Smart%20Controls/Overview.md)** can be used to simplify this process by auto-loading data based on query definitions. Use the Auto Load property to set this feature (if activated).

An **[EZ Load Multi-Line](Ez%20Load%20Multiline.md)** is a Multi-Line that self-loads based on the value of another control or variable associated with its panel. When the value of the other control changes, the EZ Load Multi-Line is re-populated with the associated value.

## See Also

**[MULTI_LINE Directive](../../../directives/multi_line.htm#Mark3)**
