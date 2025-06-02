# Creating Panel Controls

**Grid Control** |  **__**  
---|---  
  
PxPlus includes the ability to create a highly flexible  _Grid_ control. Grids provide a spreadsheet-style input format - basically a two-dimensional array of control objects (cells) that may comprise Multi-Lines _(default)_ , Check Boxes, Buttons, Drop Boxes, or any combination of controls (each cell can be a different type). It is a very powerful but complex control. A similar but more simplistic version of this control can be created using a **[Report View List Box](../List%20Box%20Controls/List%20Box%20Type.htm#reportview)**.

NOMADS also uses a grid in several places. For example, the **Tabs Definition** grid, which is used for creating Folder controls in NOMADS, includes several types of cells:

Grid controls are a very useful way of dealing with tabular data. However, loading and interacting with a grid can sometimes be slow, especially when working in a WindX environment. For information and examples on the different ways to speed up grid interactions, see **[How to Speed Up Grid Loading and Processing](../../../How%20To/How%20to%20Speed%20Up%20Grid.md)**.

## Creating a Grid

To draw a grid, select the **Grid** control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the grid control object.

Use **[Grid Properties](Grid%20Properties.md)** to specify various attributes. If you are working with aspects of the entire control, see **[Formatting a Grid](Formatting%20a%20Grid.md)**. When formatting specific columns, rows or individual cells, use **[Presets Definition](Presets%20Definition.md)**.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

A system popup menu consisting of extraction, search and print options can also be added to any grid or list box (except Tree Views). See **[List Box and Grid System Popup Menu](../Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.

## See Also

**[GRID Directive](../../../directives/grid.htm#Mark3)**
