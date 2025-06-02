# NOMADS Graphical Application

**Creating Panel Controls** |  **__**  
---|---  
  
**_Controls_** are the graphical components within a panel that allow users to interact with an application. Below is a list of the **[Types of Controls](Introduction.htm#types)** that can be added to a panel using the NOMADS **[Panel Designer](../Panel%20Designer/Introduction.md)**. Various attributes, settings and logic can also be applied to controls in the Panel Designer.

The number of controls that can be placed on a panel is limited and can range from 1 to 999, depending on various factors. See **[Maximum Number of Controls](Introduction.htm#limits)**.

The Panel Designer can be invoked from the **[Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** window. Use the _Designer_ menu to select which version of the Panel Designer to use when creating and modifying panels: **[NOMADS+ Toolbar](../../NOMADS+%20Toolbar/Introduction.md)**, **[Folder Style](../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** or **[Property Sheets](../Panel%20Designer/Properties%20Table/Overview.md)**.

The Panel Designer includes a **_Controls_** toolbar, which is a collection of creation tools that can be used when adding controls to any panel. For a description of each tool, see **[Controls Toolbar](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**.

**_To create a control:_**

|  1. |  Click the appropriate tool in the **[Controls Toolbar](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)** or select the _Controls_ menu.  
---|---|---  
|  2. |  Draw the control on the panel by holding down the left mouse button, dragging the dotted outline to the desired size and releasing the mouse button. The control's **Properties** window displays.  
|  3. |  Enter the associated logic and set other design properties as needed.  
  
#### **Note:**  
Controls can also be created from a data class or from a data element. See [**Data Class Controls**](Introduction.htm#Mark4) and [ **Data Element Controls**](Introduction.htm#Mark5) below.

**_Dynamic Control Properties_**

PxPlus 2018 introduces the capability to create **_dynamic control properties_** for individual controls. When combined with **[Data Classes](../../Data%20Dictionary/Data%20Classes/Overview.htm#Mark1)**, dynamic control properties are ideally suited for data elements with similar properties in an application (i.e. dates, numeric codes, descriptions or lists of values).

Dynamic control properties are available for Multi-Lines, Drop Boxes, List Boxes and Check Boxes.

See **[Dynamic Control Properties](../../Data%20Dictionary/Data%20Classes/Dynamic.md)** for information and examples.

#### **Note:**  
Dynamic control properties are supported in NOMADS _and_ [ **iNomads**](../../iNOMADS/iNOMADS%20Introduction.md) environments.

##  Types of Controls

The table below lists the types of controls that can be created. Use the links provided to access details on how to define a specific control type.

**Control Type** |  **Description**  
---|---  
**[Box/Frame Control](Frame%20Control/Frame.md)** |  Creates a box or frame that is used to visually group sections of a panel (e.g. to draw a frame around all the controls used for shipping data).  
**[Button Control](Button%20Control/Overview.md)** |  Creates a button that is usually defined to send a signal to the application to perform a specific action.  
**[Chart Control](Chart%20Control/Chart.md)** |  Used to define two- and three-dimensional chart illustrations from the following available chart types: _Area, Bar, Column, Line, Pie, Ribbon, Scatter, Stack, Donut_ and _Gauge_.  
**[Check Box and Tri-State Control](Check%20Box%20and%20Tri-State%20Control/Overview.md)** |  Creates a button-type control that allows users to toggle between two states (i.e. On/Off), as well as an optional third state (**_Tri-State_** control).  
**[External Control](COM%20Control/COM%20Control.md)** |  Creates a control that allows you to integrate external components produced by third-party vendors into your Windows-based PxPlus application (e.g. progress bar, spreadsheet, browser or calendar). The types of external controls that can be created are _Chromium Browser_ , _ActiveX Controls_ , _PVX Plus Controls_ and _.NET Controls_. _(The Chromium Browser Object was added in PxPlus 2017.)  
__(Support for .NET controls was added in PxPlus 2025.)_  
**[Drop Box Control](Drop%20Box%20Control/Overview.md)** |  Displays initially as a single line control with a down arrow that, when clicked, presents a drop down list with predefined items for selection.  
**[Variable Drop Box Control](Drop%20Box%20Control/Variable%20Drop%20Box.md)** |  Similar to a Drop Box control but with the added capability of allowing variable input, which means that users can either click on the down arrow to select from the drop down list or manually enter a different value not in the list.  
**[Embedded Panels](Embedded%20Panels/Overview.md)** |  Allows the contents of a different panel to be placed at a location within the current panel. For example, you may have a common format for a set of _First, Prior, Next_ and  _Last_ navigation buttons. Rather than recreating these controls on multiple panels, you can create them once in one panel, and then embed the contents of that panel into all the panels that need them. You only need to edit the source panel to have the changes occur wherever those controls are embedded.  
**[Folder Controls](Folder%20Controls/Overview.md)** |  Allows panels to be set up so that they appear as layered file folders to give users easy access to different sub-panels within the window.  
**[Fonted/Fixed Text Control](Text%20Control/Text.md)** |  Used to create labels or titles to describe how controls are to be used in your panel.  
**[Grid Control](Grid%20Control/Overview.md)** |  Creates a grid control with a spreadsheet-style input format.  
**[Image/Picture Control](Image%20Control/Image.md)** |  Used to insert a bitmap or multimedia image in a panel (e.g. company logo, product diagram or photograph).  
**[List Box Controls](List%20Box%20Controls/Overview.md)** |  Creates a control that allows users to make a selection from a displayed predefined list.  
**[Variable List Box Control](List%20Box%20Controls/Variable%20List%20Box.md)** |  Similar to a Standard List Box control but with the added capability of allowing variable input, which means that users can either select from the list box or manually enter a different value not in the list.  
**[Menu Bar](Menu%20Bar/Overview.md)** |  Creates a menu bar that lists user options/controls or provides quick access to other areas or modules in the application.  
**[Multi-Line Control](Multi-Line%20Control/Overview.md)** |  Creates a control that is used to enter one or more lines of text.  
**[Popup Menu](Popup%20Menu/Overview.md)** |  Creates a popup menu that is designed to "pop up" over the current window when you right-click on selected panel controls.  
**[Radio Button Control](Radio%20Button%20Control/Overview.md)** |  Creates a group of related radio button controls, each representing one possible value for the variable the group represents; however, only one button can be selected at a time.  
**[Scrollbar Controls (Horizontal/Vertical)](Scrollbar%20Controls/Overview.md)** |  Creates slider controls that can be used to create a spinner control, progress bar or volume slide for a panel object.  
**[Shape Control](Shape%20Control/Shape.md)** |  Used to draw basic graphics, such as _Arc, Circle, Line, Pie, Polygon_ and _Rectangle_ , directly on a panel.  
  
##  Data Class Controls

**[Data Classes](../../Data%20Dictionary/Data%20Classes/Overview.md)** can be placed as controls on a panel. When the control is drawn, the control properties are loaded with information from the selected data class. After that, adjustments can be made to particular properties, if necessary.

To create a control from a **_data class_** , use either of the following methods:

**_Method 1:_**

(Use with **[Multi-Lines](Multi-Line%20Control/Multi-Line%20Properties.md)**, **[Drop Boxes](Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[List Boxes](List%20Box%20Controls/List%20Box%20Type.md)** and **[Check Boxes](Check%20Box%20and%20Tri-State%20Control/Overview.md)**)

|  1. |  Click the appropriate tool in the **[Controls Toolbar](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)** or select the _Controls_ menu.  
---|---|---  
|  2. |  Draw the control on the panel.  
|  3. |  In the control's **Properties** window, enter a defined data class in the _Class_ field by clicking the Query button (binoculars), typing the name of an existing data class for the control type, or creating a data class on the fly by entering a new _Class_ name.  
|  4. |  The control's properties are loaded with the information from the data class.  
  
**_Method 2:_**

(Use with **[Multi-Lines](Multi-Line%20Control/Multi-Line%20Properties.md)**, **[Drop Boxes](Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[List Boxes](List%20Box%20Controls/List%20Box%20Type.md)**, **[Radio Buttons](Radio%20Button%20Control/Overview.md)** and **[Check Boxes](Check%20Box%20and%20Tri-State%20Control/Overview.md)**)

|  1. |  In the **[Controls Toolbar](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**, click the _Class_ button (or Query down arrow) to display a list of defined data classes.  
---|---|---  
|  2. |  Select a data class.  
|  3. |  Draw the control on the panel. See **_Radio Button Data Class Controls_** below.  
|  4. |  The control's properties are automatically loaded with information from the data class.  
  
**_Radio Button Data Class Controls_**

When drawing a **_Radio Button_** data class control in the Panel Designer, the placement of the radio buttons is determined by the height and width of the control when it is drawn.

If the **_height_** of the control is **_greater_** than its width, the radio buttons will be stacked vertically.

> If the **_width_** of the control is **_greater_** than its height, the radio buttons will be placed horizontally side by side.

> _(Radio buttons placement was added in PxPlus 2018.)_

##  Data Element Controls

**[Data Elements](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.md)** can be placed as controls on a panel. When the control is drawn, the control properties are loaded with information from the selected data element. After that, adjustments can be made to particular properties, if necessary.

To generate a fonted text label for a data dictionary _Element_ control (**_except_** Check Boxes and Radio Buttons) when the control is drawn on the panel, select the **[Incl. Label](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.htm#label)** check box (if using NOMADS+ toolbar, select **[Include Element Label](../../NOMADS+%20Toolbar/Introduction.htm#label)** check box) or the **[Create Label For Dictionary Element](../Panel%20Designer/Work%20Area/Menu%20Options.htm#options)** menu option.

_(The Incl. Label check box was added in PxPlus 2018 Update 0001.)_

To create a control from a **_data element_** , use either of the following methods:

**_Method 1:_**

|  1. |  In the **[Controls Toolbar](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**, click the _Element_ button (or Query down arrow) to display a list of _all_ elements for _all_ dictionary files.  
---|---|---  
|  2. |  Select an element.  
|  3. |  Draw the control on the panel. See **Note** below.  
|  4. |  The control's properties are automatically loaded with information from the element.  
  
**_Method 2:_**

_(Similar to Method 1 except a dictionary file is selected first)_

|  1. |  In the **[Controls Toolbar](../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**, click the _File_ button (or Query down arrow) to display a list of dictionary files.  
---|---|---  
|  2. |  Select the dictionary file containing the desired element.  
|  3. |  Click the _Element_ button (or Query down arrow) to display a list of the elements in the selected file.  
|  4. |  Select an element.  
|  5. |  Draw the control on the panel. See **Note** below.  
|  6. |  The control's properties are automatically loaded with information from the element.  
  
#### **Note:**  
  
**_When drawing a data element control:_**  
  
If the element was defined with a data class that is **_not dynamic_** , the element values will be written to the control properties.  
  
If the element was defined with a **_dynamic_** data class, a message will ask if the element values are to overwrite data class values for corresponding properties. Respond _Yes_ to apply the element values or _No_ to apply the data class values. See **[Dynamic Control Properties](../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)_

##  Maximum Number of Controls

A simple panel can have a maximum of 999 interactive controls. Interactive controls include **[Buttons](Button%20Control/Overview.md)**, **[Check Boxes](Check%20Box%20and%20Tri-State%20Control/Overview.md)**, **[Radio Buttons](Radio%20Button%20Control/Overview.md)**, **[List Boxes](List%20Box%20Controls/Overview.md)**, **[Drop Boxes](Drop%20Box%20Control/Overview.md)**, **[Scrollbars](Scrollbar%20Controls/Overview.md)**, **[Grids](Grid%20Control/Overview.md)**, **[Charts](Chart%20Control/Chart.md)**, **[Folders](Folder%20Controls/Overview.md)** and **[External Controls](COM%20Control/COM%20Control.md)**.

Non-interactive controls, such as **[Fonted Text](Text%20Control/Text.md)**, **[Images](Image%20Control/Image.md)**, **[Shapes](Shape%20Control/Shape.md)** and **[Frames](Frame%20Control/Frame.md)**, are not counted in the maximum limits.

If the panel has a Folder control, the maximum of 999 applies to **_both_** the controls on the main panel **_plus_** the controls on the currently active Folder panel. Any controls on an **[Embedded Panel](Embedded%20Panels/Overview.md)** or **[Title Bar](../Custom%20Title%20Bars.md)** are also included.

**[Concurrent Panels](../Program%20Interaction/Concurrent%20Panels/Overview.md)** can have a maximum of 199 interactive controls per panel. If the parent panel has less than 200 controls, a maximum of four active concurrent panels is allowed. Between 200 and 399 controls on the main panel reduces the maximum number of active concurrent panels to 3, and so on such that a main panel with over 800 controls supports **_no_** active concurrent panels.

The invocation of a concurrent panel reduces the maximum number of controls allowed on the main panel by 200 for each concurrent panel that is active. With no active concurrent panels, the main panel, in conjunction with an active Folder, can have a maximum of 999 interactive controls. With one active concurrent window, the maximum is reduced to 799. With two active concurrent windows, the maximum is reduced to 599, and so on until four active concurrent windows reduce the maximum number of controls allowed on the main panel to 199.

#### **Note:**  
At run time, if any of the above maximum limits are exceeded, the additional controls are not drawn and a warning message is displayed.

_(Support to increase the maximum number of controls on a panel was added in PxPlus 2021.)_

## See Also

**[NOMADS+ Toolbar](../../NOMADS+%20Toolbar/Introduction.md)**
