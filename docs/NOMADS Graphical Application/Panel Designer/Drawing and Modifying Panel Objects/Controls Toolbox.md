# Drawing and Modifying Panel Objects 

**Controls Toolbar** |  **__**  
---|---  
  
The **_Controls_** toolbar is a collection of creation tools that are used when adding controls to any panel. These tools are explained below.

**_To create a control:_**

|  1. |  Click the appropriate tool in the _Controls_ toolbar.  
---|---|---  
|  2. |  Draw the control on the panel by holding down the left mouse button, dragging the dotted outline to the desired size and releasing the mouse button. The control's **Properties** window displays.  
|  3. |  Enter the associated logic and set other design properties as needed.  
  
For information on drawing, resizing, moving and arranging objects in the Panel Designer, see **[Creating Panel Controls](../../Creating%20Panel%20Controls/Introduction.md)** and **[Modifying Objects](Modifying%20Objects.md)**.

|  **Pointer Tool** |  **_(NOMADS+ and Property Sheets)_** Use the Pointer Tool **_(default)_** for selecting either a single control or for drawing a selection box around multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. _(The Pointer tool and Default to Pointer option in NOMADS+ were added in PxPlus 2019.)_  
---|---|---  
|  **[Button](../../Creating%20Panel%20Controls/Button%20Control/Overview.md)** |  Standard button control familiar to all graphical user interface users.  
|  **[Radio Button](../../Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)** |  Radio buttons typically appear in a group of two or more circular buttons, where only one button in the group may be activated (set to **_On_**) at any time.  
|  **[Check Box and Tri-State](../../Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)** |  Users can toggle check boxes between states: **_On_** to select an option, **_Off_** to disable it. An optional **_third_** state may be defined (for a _Tri-State_ control).  
|  **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)** |  List box controls allow users to select items from a displayed list. The different list box styles available in NOMADS include **[Standard](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#standard)**, **[Formatted](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#formatted)**, **[List View](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#listview)**, **[Report View](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#reportview)** and **[Tree View](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#treeview)**.  
|  **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)** |  A drop box is similar to a list box, but it only displays a single line of text and provides a drop-down arrow button for access to other items in the list.  
|  **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)** |  A multi-line control is an input field used primarily for entering one or more lines of text.  
|  **[Fonted/Fixed Text](../../Creating%20Panel%20Controls/Text%20Control/Text.md)** |  Provides headings and labels for controls in a panel. _Fonted_ text provides several style options. _Fixed (standard)_ text is for fixed PxPlus font only.  
|  **[Image/Picture](../../Creating%20Panel%20Controls/Image%20Control/Image.md)** |  Places a graphic on the panel. Does not respond to events.  
|  **[Box/Frame](../../Creating%20Panel%20Controls/Frame%20Control/Frame.md)** |  Draws a box/frame around a selected group of controls on the panel. Does not respond to events.  
|  **[Shape](../../Creating%20Panel%20Controls/Shape%20Control/Shape.md)** |  Draws graphics on a panel. Does not respond to events.  
|  **[Vertical/Horizontal Scrollbar](../../Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.md)** |  Vertical and horizontal scrollbars provide slider controls.  
|  **[Folder](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)** |  Panels can be set up to appear as a layered file folder to provide access to tabbed sub-panels.  
|  **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Overview.md)** |  The grid is a two-dimensional array of cells (similar to a spreadsheet) that may comprise a combination of different panel components.  
|  **[Chart](../../Creating%20Panel%20Controls/Chart%20Control/Chart.md)** |  Creates a chart-style illustration on the panel.  
|  **[External Control](../../Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)** |  Creates a control that allows you to integrate external components produced by third-party vendors into your Windows-based PxPlus application (e.g. progress bar, spreadsheet, browser or calendar). The types of external controls that can be created are _Chromium Browser_ , _ActiveX Controls_ , _PVX Plus Controls_ and _.NET Controls_. _(The Chromium Browser Object was added in PxPlus 2017.)  
(Support for .NET controls was added in PxPlus 2025.)_  
|  **[Embed Panel](../../Creating%20Panel%20Controls/Embedded%20Panels/Overview.md)** |  Allows you to place the contents of another panel onto the current panel.  
|  **Group Items** |  **_(NOMADS+ and Folder Style)_** Used for selecting multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. When this tool is selected, use the mouse to draw a selection box around the controls to be grouped. (Similar functionality to the **_Pointer Tool_**.)  
|  **Suppress Groups** |  Click the text portion of this button to launch the **[Suppress Groups](../Options%20and%20Utilities/Suppress%20Groups.md)** utility that is used for choosing which group(s) of controls to display or temporarily suppress from displaying on the current panel in the NOMADS Panel Designer. Click the drop down arrow to access a _Display All Groups_ option for displaying all groups on the current panel. _(The Suppress Groups utility was added in PxPlus 2021.)_  
|  **Class** |  **_(Available only if Data Class Definitions file exists)_** This button (or the Query down arrow) displays a list of defined data classes stored in the _providex.dcl_ file. For information on creating data classes, see **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**. Select a data class for the type of control to be placed on the panel. When selected, the text _Class_ is replaced with the name of the selected class, and the button color changes to dark red. When the control is drawn, the **Properties** window is automatically loaded with information from the selected class.  
|  **File** |  **_(Available only if Data Dictionary file exists)_** This button (or the Query down arrow) displays a list of dictionary files stored in the _providex.ddf_ file. Select the dictionary file that contains the element(s) to be placed on the panel, and then use the _Element_ button to select an element from the selected file. When a file is selected, the text _File_ is replaced with the name of the selected file, and the button color changes to dark red.  
|  **Element** |  **_(Available only if Data Dictionary file exists)_** If a dictionary _File_ was selected previously, this button (or the Query down arrow) displays a list of the elements in the selected file only. If **_no_** dictionary _File_ was selected, this button displays a list of **_all_** the elements in **_all_** dictionary files (sorted by _Table Name_). Elements are stored in the _providex.dde_ file. For information on defining elements, see **[Element Description](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.md)**. Select an element to be placed on the panel. When selected, the text _Element_ is replaced with the name of the selected element. If a dictionary _File_ was not selected previously, then the text _File_ is replaced with the name of the dictionary file containing the selected element. The _Element_ button color changes to dark red. When the control is drawn, the **Properties** window is displayed for the selected element.

#### **Note:**  
  
**_When drawing a data element control:_**  
  
● If the element was defined with a data class that is **_not dynamic_** , the element values will be written to the control properties.  
  
● If the element was defined with a **_dynamic_** data class, a message will ask if the element values are to overwrite data class values for corresponding properties. Respond _Yes_ to apply the element values or _No_ to apply the data class values. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
|  **Incl. Label******|  **_(Available only when a Data Dictionary element is selected)_** When selected, this option generates a fonted text label for a data dictionary _Element_ control (see **[Data Element Controls](../../Creating%20Panel%20Controls/Introduction.htm#Mark5)**) when the control is drawn on the panel. At the same time, the **[Create Label For Dictionary Element](../Work%20Area/Menu%20Options.htm#options)** option (**Options** menu) is selected. Both of these options remain selected until either one is deselected or the panel designer is exited.

#### **Note:**  
This option has **_no effect_** on Check Box and Radio Button element controls and will be ignored if selected. These controls will be created as normal.

To **_apply_** this option: |  1. |  Select an **[Element](Controls%20Toolbox.htm#element)** to be placed on the panel. The _Element_ button changes to dark red and displays the name of the selected element. At the same time, the _Incl. Label_ check box displays. (If using NOMADS+, the _Include Element Label_ check box displays above the **[Controls Toolbar](../../../NOMADS+%20Toolbar/Introduction.htm#label)**.)  
---|---  
2. |  Click the _Incl. Label_ check box.  
3. |  Draw the element control. (At this point, a message displays **_only_** if the selected element is associated with a **[Dynamic Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.htm#Mark2)**.)  
4. |  A **[Fonted Text Properties](../../Creating%20Panel%20Controls/Text%20Control/Text.md)** window displays for the generated element label. By default, the label is positioned to the left of the control but can be adjusted if needed.  
  
_(The Incl. Label check box was added in PxPlus 2018 Update 0001.)_  
  
## See Also

**[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)**
