# Creating Panel Controls

**Chart Control** |  **__**  
---|---  
  
The Chart control tool is used to create more advanced two- and three-dimensional Chart illustrations in your graphical application. When defining a Chart, you can select from several different Chart types: _Area, Bar, Column, Line, Pie, Ribbon, Scatter, Stack, Donut_ and _Gauge_. For examples of each of these Chart types, see **[Chart Formats](../../../Charting%20Alternatives%20in%20PxPlus/Chart%20Formats/Overview.md)**.

#### **Note:**  
Use the **[Image](../Image%20Control/Image.md)** tool to insert images created outside of NOMADS and PxPlus. For more simplistic drawings, use the **[Shape](../Shape%20Control/Shape.md)** control tool.

To learn about using Plus Charts, RGraphCharts, and Google Interactive Charts (using the Google Visualization API) as options to replace the internal PxPlus Chart control, see **[Charting Alternatives in PxPlus](../../../Charting%20Alternatives%20in%20PxPlus/Introduction.md)**.

For information on how you can define simple Charts based on the columns of a List Box, Grid or Query, see **[NOMADS AutoChart](../../../NOMADS%20AutoChart/Introduction.md)**.

To learn how you can use a Query-based AutoChart definition to load a **_Smart Chart_** control, see **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.md)**.

To learn about creating images of Charts for display on dashboards, on your website, or as part of your application, see **[Chart Images Generation](../../../Chart%20Images%20Generation/Introduction.md)**.

For information on the utilities to use when working with Chart images, see **[Chart Image Utilities](../../../Chart%20Image%20Utilities/Introduction.md)**.

## Drawing a Chart

To draw a Chart object on your panel, select the Chart control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Chart Properties](Chart.htm#chartproperties)** and **[Defining a Chart](Chart.htm#definingachart)**.

##  Chart Properties

When creating or editing a _Chart_ control, the **Chart Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing Chart properties: **[Display](Chart.htm#display)**, **[Font/Color](Chart.htm#font)**, **[Attributes](Chart.htm#attributes)**, **[Logic](Chart.htm#logic)** and **[User Aids](Chart.htm#useraids)**.

_Name_ |  Unique name of the Chart object (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Smart Load_ |  Select this button to set up a Smart control that will self-load based on a query definition. See **[Smart Controls](../../Smart%20Controls/Overview.md)**. _(The Smart Load button was added in PxPlus 2019.)_  
**Display**  
**Properties** |  |  _Chart Type_ |  Determines the type of Chart to be created. Click the drop-down arrow for a list of selections: _Area, Bar, Column, Line, Pie, Ribbon, Scatter, Stack, Donut_ and _Gauge_.  
---|---  
_3D Effect_ |  Visual mode for Chart.  
_Chart Brand_ |  Select the brand of Chart to display (see **[Charting Alternatives in PxPlus](../../../Charting%20Alternatives%20in%20PxPlus/Introduction.md)**): |  _Default_ |  Chart brand specified in **[%NOMADS'Chart$](../../Appendix/NOMADS%20Variables/Overview.htm#chart)**. If **%NOMADS'Chart$** is not set, the default will be "plus" charts. See **[Plus Charts](../../../Charting%20Alternatives%20in%20PxPlus/Introduction.htm#pluscharts)**. _(Support to default to Plus Charts when %NOMADS'Chart$ is not set was added in PxPlus 2024 Update 1.)_  
---|---  
_Plus_ |  Image-based (NOMADS) or HTML-base (iNomads) Charts from PVX Plus  
_RGraph_ |  HTML-based Charts from RGraph  
_Google_ |  Uses the Google Visualization API (requires Internet access)  
_Native_ |  Internal PVX Plus Chart control  
_Title 1_ |  Primary Chart title (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Title 2_ |  Secondary Chart title (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Footer_ |  Footer title for the Chart (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Bitmap Path_ |  Bitmap for the Chart background (_Fixed_ value or string _Expression_). Specify embedded (e.g. !Stop) or external file (e.g. C:\windows\clouds.bmp). For available images, see **[Recognized File Types](../../../PxPlus%20User%20Guide/Appendix%20of%20Miscellaneous%20Topics/Handling%20Images%20and%20Icons/Overview.htm#Mark2)**.  
  
_(The Chart Brand option was added in PxPlus 2019.)_  
  
**Position** |  |  _Column_ |  Starting column for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of control in number of columns - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of control in number of lines - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Attributes** |  |  _Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
---|---  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Borderless_ |  Control is drawn with no border or frame.  
_Bitmap Position_ |  Controls the position and appearance of the bitmap. Select from pre-set selections or enter coordinates (**_syntax:_**_X:Y:columns:lines_); e.g. 1:2:10:20.  
_Column Separator_ |  Delimiter character. Click the drop-down arrow for a list of selections.  
**User Tag Field** |  For controls, data/tag field that can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  For each of the following **Color** options, click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
---  
_Foreground_ |  Click the Query button to access color selections.  
_Background_ |  Click the Query button to access color selections.  
_Back Face_ |  Affects the appearance of the Chart's back face surface. Click the Query button to access color selections.  
_Bottom Face_ |  Affects the appearance of the Chart's bottom face surface. Click the Query button to access color selections.  
_Left Face_ |  Affects the appearance of the Chart's left face surface. Click the Query button to access color selections.  
  
#### **Note:**  
The _Chart Colors_ property in **[Themes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#colors)** and **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#colors)** can be used to select the colors to apply when plotting the different data sets of a Chart.  
  
_(The Chart Colors property in Themes Maintenance and Visual Classes Maintenance was added in PxPlus 2020.)_  
  
**Attributes** |  Optional attributes (_Bold, Italics_ , etc.).  
**Visual Class** |  Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The iNomads Class property was added to Charts in PxPlus 2019.)_  
**Attributes**  
**Margins** |  |  _Left_ |  Number of columns offset from the left border of the Chart window. Valid format can be a _Fixed_ value (number between 0 - 127) or a numeric _Expression_.  
---|---  
_Right_ |  Number of columns offset from the right border of the Chart window. Valid format can be a _Fixed_ value (number between 0 - 255) or a numeric _Expression_.  
_Top_ |  Number of lines offset from the top border of the Chart window. Valid format can be a _Fixed_ value (number between 0 - 127) or a numeric _Expression_.  
_Bottom_ |  Number of lines offset from the bottom border of the Chart window. Valid format can be a _Fixed_ value (number between 0 - 255) or a numeric _Expression_.  
**Proportions** |  |  _Depth/Width_ |  Sets percentage of Chart depth to width for altering proportions of three-dimensional Charts. Valid formats can be a _Fixed_ value (number between 0 - 99999) or a numeric _Expression_.  
---|---  
_Height/Width_ |  Sets percentage of Chart height to width for altering proportions of two-dimensional Charts. Valid formats can be a _Fixed_ value (number between 0 - 99999) or a numeric _Expression_.  
_To Margins_ |  Sets the Chart to the variable-proportion mode, which means that the Chart should be proportioned to the current height-to-width ratio of the window that contains the Chart.  
**Range** |  |  _Minimum_ |  Minimum Chart value.  
---|---  
_Maximum_ |  Maximum Chart value.  
**Axis Location and Axis Title** |  |  _X_ |  Axis location (_Back_ or _Bottom_). Axis title (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
---|---  
_Y_ |  Axis location (_Back_ or _Left_). Axis title (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Z_ |  Axis location (_Bottom_ or _Left_). Axis title (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed. _(The Ignore Change Flag property was added in PxPlus 2017.)_  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Data Set is Selected from Chart** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aids**  
**Help Reference** |  Help text to be invoked at run time by pressing Shift - F1 while focus is on a control. |  _Type_ |  Select from _External_ or _Internal_ help types: |  _External_ |  **_(Default)_** Standard Windows help system consisting of a help _File Name_ (._html_ , ._hlp_ , ._doc_ , etc.) and an optional _Keyword_ or _Reference_ number (_Fixed_ value or string _Expression_).  
---|---  
_Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_File Name_ |  Name of the help file.  
_Keyword_ |  Indicates that the text in the adjacent field is the index entry for the topic in the indicated help file.  
_Reference_ |  Indicates that the adjacent field contains the reference number for a specific topic in the context sensitive help.  
_Popup_ |  Select this check box to display the help topic as a popup rather than as an independent window.  
_Test_ |  Tests the current help settings.  
**Floating Tip** |  Mouse pointer message for control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The **Floating Tip** drop box and multi-line input cannot be changed once an **[HTML](../Defining%20an%20Info%20Tip.htm#tiptype)** tip has been defined.

**_NOMADS Wiki Help_** The floating tip text can be used when displaying the **[Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. Info tips, however, are not supported and will be ignored. _(Support for customizing Floating Tips was added in PxPlus 2016.)  
(Support for the use of Floating Tip text in the Wiki Help was added in PxPlus 2023.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a floating menu that will appear when you right-click the mouse over a control or a blank area on a panel. Valid formats are a NOMADS popup object or a user-supplied program (_Fixed_ value or string _Expression_).  
_Presets_ |  Invokes the **Presets** dialogue. See **[Presets Definition](Chart.htm#presetsdef)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
##  Defining a Chart

Set the Chart Type and Effect properties to change the shape and dimensional appearance. This information is used in the **[CHART](../../../directives/chart.md)** directive's **FMT=** option during creation of the object. Since a Chart is a visual aid with limited user interaction, the only logic assignments possible are _Post Create_ and _When Data Set is Selected from Chart_.

Once created, the Chart can be updated in your program code using **[CHART LOAD](../../../directives/chart.htm#Mark7)** or **[CHART WRITE](../../../directives/chart.htm#Mark19)** directives or by using the control object property **'[Value$](../../../properties/value_.md)** to read/write data in the Chart in conjunction with the data set and data point.

## Presets Definition

To aid in the development of Chart applications, the NOMADS toolkit supports preset definition records. These presets allow the designer to build a table of properties that can be assigned to specific data sets and data points. The value set for the Data Set and Data Point correspond to the different Chart elements. Through the presets, the user can change the text color, font, label location, as well as control the auto-scaling mode for a particular Chart label.

The presets are assigned to the Chart after it has been created and prior to the execution of the Post Create logic.

Click the _Presets_ button to invoke the **Presets** dialogue:

> At run time, the following will occur when the above presets are applied to the Chart:

  1. Auto-scaling is turned Off for the primary Chart title.
  2. The text color for the primary Chart title is set to "RGB:0 128 225".
  3. The font for the primary Chart title is set to "Algerian,1,I".
  4. The text color for the secondary Chart title is set to "light cyan".
  5. The font for the secondary Chart title is set to "Comic Sans MS,1".
  6. Auto-scaling is turned Off for the secondary Chart title.



The **Presets** dialogue allows you to define a maximum of 999 preset records, consisting of data set, data point, property and value.

This dialogue consists of the following:

_Data Set_ |  Value to be placed in the [**'CurrentSet**](../../../properties/currentset.md) property (numeric). Valid entries: 0, 1, -1, -2 or -3.  
---|---  
_Data Point_ |  Value to be placed in the **['CurrentPoint](../../../properties/currentpoint.md)** property (numeric). Valid entries: 0, 1, -1, -2 or -3.  
_Property_ |  Click the drop-down arrow for a list of **CHART** control object properties: **['AutoScale](../../../properties/autoscale.md)**, **['Font$](../../../properties/font_.md)**, **['LabelLocation$](../../../properties/labellocation.md)** and **['TextColor$](../../../properties/textcolor_.md)**.  
_Exp_ |  Check box to indicate that the contents of the _Value/Expression_ column is an expression. The default **_(Off)_** indicates literal/fixed.  
_Value/Expression_ |  Value that will be assigned to the property. If the value is not marked as an expression, click the drop-down arrow to access defaults for the selected property (if applicable). The cell type for this column is determined by the selected property.  
_Delete Row(s)_ |  Deletes preset records.  
_Move Up  
Move Down_ |  Changes the order of existing preset records.  
  
## See Also

**[CHART Properties](../../../control_object_properties/chart_properties.md)**  
**[CHART Directive](../../../directives/chart.htm#Mark3)  
[Charting Alternatives in PxPlus](../../../Charting%20Alternatives%20in%20PxPlus/Introduction.md)  
[NOMADS AutoChart](../../../NOMADS%20AutoChart/Introduction.md)  
[Smart Controls](../../Smart%20Controls/Overview.md)  
[Chart Images Generation](../../../Chart%20Images%20Generation/Introduction.md)  
[Chart Image Utilities](../../../Chart%20Image%20Utilities/Introduction.md)**
