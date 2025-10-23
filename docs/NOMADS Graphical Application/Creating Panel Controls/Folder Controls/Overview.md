# Creating Panel Controls  
  
**Folder Controls** |  **__**  
---|---  
  
Panels may be set up so that they appear as layered _file folders_ , giving the user easy access to different sub-panels within the window. This effect is achieved via the _Folder_ control, which links and displays previously defined sub-panels using a tabbed or tabless (wizard style) format. Users can navigate between sub-panels by clicking on a tab, using the **Alt** key, or pressing the arrow keys while focus is on the Folder control.

#### **Note:**  
There is no equivalent directive in PxPlus for creating folders. A folder can be drawn using an OOP object, which can be instantiated in code outside of NOMADS. See **[Folder Object](../../Program%20Interaction/Object-Oriented%20Programming/Overview.htm#folder_obj)**.

NOMADS stores the name of the currently active folder control in the **_folder_id_ _$_** variable and stores a reference for each tab/sub-panel in a variable named **FLDR**._subpanelname._**CTL**.

**_Example:_**

> FLDR.CSTMAINT.CTL

You can use this variable to refer to a sub-panel in your program. The following restrictions apply to folder controls:

  * A panel contains one folder control only; however, that object can contain multiple sub-panels.
  * A folder control cannot be contained within a sub-panel; i.e. no folders on folders. You can have multiple folder objects active, provided each is in a different window where multiple active windows are in effect.
  * Query objects or popup menus cannot be assigned to a folder control as one of the sub-panels (i.e. panels that contain queries and popup menus can be used as sub-panels); however, if you were to specify an actual query or popup object, the application would error out.



## Creating Folders

To draw folders on your panel, select the _Folder_ control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create a new empty folder control.

Sub-panels are added to a folder control using the **Tabs/Folder Properties** dialogue. See **[Folder Properties](Folder%20Properties.md)** and **[Adding and Modifying Sub-Panels](Adding%20and%20Modifying%20Sub-Panels.md)**.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.
