# Drawing and Modifying Panel Objects   
  
**Modifying Objects** |  **__**  
---|---  
  
Accessing the properties of panel objects provides one method for controlling the appearance and functionality of panel components. The Panel Designer work area includes several handy tools for copying, moving and resizing objects in a panel, which automatically updates associated design properties in the process.

#### **Helpful Tip** :  
The properties of panel objects can be accessed by right clicking on a selected object and choosing _Properties_ from the popup menu.

## Moving/Resizing Components

To **_move_** an object using the mouse, click and drag the object to a new location. During this action, the mouse pointer changes to crossed arrows and a tooltip shows the object's changing coordinates.

> #### **Note:**  
To display a floating tooltip showing the name and position/size co-ordinates for a selected object, the _Show Tooltip_ option (on the **[Panel](../Work%20Area/Menu%20Options.htm#panelmenu)** menu) must be set to **_On_**.

Release the mouse when the object is positioned in its new location. The status bar at the bottom of the Panel Designer shows the coordinates of the new location (Col, Ln).

> To **_resize_** an object using the mouse, select the object and then position the mouse pointer on the dotted outline until the pointer changes to a double-headed arrow. Click and drag the mouse to resize the dotted outline. A tooltip shows the object's changing coordinates.

> Release the mouse when the object has reached the desired size. The status bar at the bottom of the Panel Designer shows the new dimensions (Wd, Hi).

#### **Helpful Tip:**  
To correct any unwanted changes, use the _Undo_ button.

## Alternate Methods for Moving/Resizing

Besides using the mouse, other methods are available for changing the size and placement of a panel object. Once an object is selected in the Panel Designer, you can change the coordinate values directly in the object's properties window, or use the keyboard and menu options.

The arrow keys can be used to move or resize a selected object:

**Shift + Up Arrow** |  Switches a selected object to **_moving_** mode. The four arrow keys can then be used to move the dotted outline for the object to a new location on the panel. This is confirmed by the coordinate values displayed in the tooltip, as well as on the status bar.  
---|---  
**Ctrl + Up Arrow** |  Switches a selected object to **_resizing_** mode. The four arrow keys can then be used to change the dimensions of the dotted outline for the object. This is confirmed by the coordinate values displayed in the tooltip, as well as on the status bar.  
  
Different menu bar and hot key options are also available for modifying an object. To access **_moving_** mode, select the _Edit > Move_ menu option or use the hot-key combination **Alt + E** to invoke the _Edit_ menu and then press **M** for _Move_. To access **_resizing_** mode, select the _Edit > Size_ menu option or use the hot-key combination **Alt + E** to invoke the _Edit_ menu and then press **S** for _Size_.

For a list of the standard edit keys and hot keys, see **[Edit Keys](../Work%20Area/Edit%20Keys.md)**.

##  Duplicating Components

To **_copy_** an object, several methods are available:

**Method** |  **Description**  
---|---  
Panel Designer **[Menu Bar](../../Creating%20Panel%20Controls/Menu%20Bar/Overview.md)** |  From the _Edit_ menu, select the _Copy_ and _Paste_ options.  
Right Click Popup Menu |  Right click on a selected object in a panel to access the _Copy_ and _Paste Object(s)_ options from the popup menu.  
Ctrl + C  
Ctrl + V |  Press **Ctrl + C** to copy an object.  
Press **Ctrl + V** to paste it in the target location.  
Ctrl + D |  To create a **_duplicate_** of a selected panel object with the same dimensions and properties as the original, follow these steps: |  1. |  Press **Ctrl + D** to copy the object.  
---|---  
2. |  Use the arrow keys to move the copied object to the desired location.  
3. |  Press Enter to complete the copy process and launch the object's properties window.  
  
The same results can be achieved by using **Ctrl + C** to copy followed by **Ctrl + V** to paste the object in the new location.  
  
Ctrl + N |  To create a **_new_** object with only the same dimensions, but not the same properties, of a selected panel object, follow these steps: |  1. |  Select the existing panel object with the dimensions you want to copy to the new object.  
---|---  
2. |  In the **[Controls Toolbar](Controls%20Toolbox.md)**, select the tool for the new object you want to create if it is not already highlighted.  
3. |  Press **Ctrl + N** to create the new object.  
4. |  Use the arrow keys to position the new object in the desired location. Press Enter to complete the creation process.  
5. |  A properties window launches automatically for the new object (based on the highlighted tool in the Controls Toolbar). The width and height dimensions of the new object are copied from the existing panel object selected in step 1.  
  
**_Example:_**

In the panel, the selected object is a _button_. In the Controls Toolbar, the highlighted tool is a _multi-line_. After following the above steps using **Ctrl+N** , the new object that is created is a _multi-line_.  
  
For a list of the standard edit keys and hot keys, see **[Edit Keys](../Work%20Area/Edit%20Keys.md)**.

##  Moving/Resizing Multiple Components

Two methods are available for **_selecting a group of objects_** for modification:

  * Select the **_Group Items_** tool in the **[Controls Toolbar](Controls%20Toolbox.md)**. Use the mouse pointer to draw a selection box around the group of objects. Releasing the mouse button selects all the objects within the selection box.


  * Hold down the **Shift** key and left click on each object in the group to draw a dotted outline around each object. This method allows multiple objects to be selected.



**_Moving a Group of Objects_**

Select the group of objects using one of the methods above. Then, position the mouse pointer over one of the selected objects in the group. Click and drag the dotted selection box to the new location. Releasing the mouse button moves all of the objects in the group to the new location.

**_Resizing a Group of Objects_**

Select the group of objects using one of the methods above. Then, position the mouse pointer over the dotted outline of a selected object in the group until the pointer changes to a double-headed arrow. Click and drag the dotted selection box to increase/decrease the dimensions. Releasing the mouse button resizes all of the objects in the group.

The **[Panel Bulk Edit Utility](../Options%20and%20Utilities/Bulk%20Edit%20Utility.md)** can also be used to modify the height/width of several objects simultaneously.

#### **Note:**  
When moving **_Fixed Text_** controls as part of a group of selected objects, set the _Grid Alignment_ option (**Edit** menu) to _Full Line_ for best results. The reason is that Fixed Text controls can move only one full line at a time; therefore, any other grid alignment setting may produce unexpected results.

##  Alignment and Distribution of Multiple Objects

To justify or space a group of objects uniformly, follow these steps:

1. |  In the **[Panel Designer](../Introduction.md)**, first select all the objects by using **Shift-Click** or the **_Group Items_** tool in the **[Controls Toolbar](Controls%20Toolbox.md)**.  
---|---  
2. |  Select _Edit > Align or Distribute_ on the menu bar and choose from a list of available options. Alternatively, these options can be accessed by right clicking on the selected panel objects and choosing _Align/Distribute_ from the popup menu: |  _Align Left  
Align Centre  
Align Right_ |  These options are used to align objects **_vertically_**.  
---|---  
_Align Top  
Align Middle  
Align Bottom_ |  These options are used to align objects **_horizontally_**.  
_Distribute Vertically  
Distribute Horizontally_ |  These options adjust the spacing evenly between selected objects. NOMADS calculates vertical distribution based on the bottom- and top-most objects. Horizontal distribution is based on the left- and right-most objects.  
  
**_Example:_**

To give you an example of how the alignment/distribution rules work, if you select three controls to _Align Right_ , then the right alignment (justification) for all three selected controls will be based on the right most control (not the first control selected).
