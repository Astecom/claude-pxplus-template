# CHART Create/Control Chart

**CHART Properties**|   
---|---  
  
The Chart control is used to create illustrations for an application. A chart is usually designed to be a **_display only_** object that requires no user interaction.

This control can be created either by using either the **[CHART](../directives/chart.md)** directive or by using the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to draw a **[Chart Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)** (including **_Plus Charts_**) and apply the desired attributes.

The **[*OBJ/CHART Plus Charting Utility](../utilities/chart_object.md)** can also be used as a simple means to display charts on the screens or print file.

_(Plus Charts and the *OBJ/CHART utility were added in PxPlus 2019.)_

Below is a list of properties used to define and manipulate Chart controls. Use the links in the **Property** column to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

#### **Note:**  
Many of the properties below can also be used with **[Plus Charts](../Charting%20Alternatives%20in%20PxPlus/Introduction.htm#pluscharts)**. For a list of supported properties, see **[Properties and Methods](../utilities/chart_object.htm#properties)**.

**Property** |  **Description**  
---|---  
**[AutoScale](../properties/autoscale.md)** |  Auto scaling for text elements: 0 = Off; 1 = On. (**_Default:_** 1) When set to _On_ , chart text elements (labels, legends) are automatically resized to fit the given area.  
**[BackColor$  
BackColour$](../properties/backcolor_.md)** |  Background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Bitmap$](../properties/bitmap_.md)** |  Bitmap to appear as the background for the chart when used with **[Plus Charts](../Charting%20Alternatives%20in%20PxPlus/Introduction.htm#pluscharts)**. See **[Chart Processing](../Charting%20Alternatives%20in%20PxPlus/Chart%20Processing/Overview.htm#properties)**. **_Example:_** !Stop (embedded bitmap)  
C:\windows\clouds.bmp (external bitmap)  
**[BitmapPosition$](../properties/bitmapposition_.md)** |  Bitmap position/appearance of chart: Predefined positions include TopLeft, Left, BottomLeft, TopRight, Right and BottomRight (**_Default:_** "TOPLEFT"). These preserve bitmap size and proportions. Use the **STRETCH** parameter to force the bitmap to be stretched within the chart's window. The **TILE** parameter creates a "tile" effect multiplying the original bitmap to cover the entire chart's window. A custom position may be defined using syntax: _"x:y:column:line"_. With this syntax, the bitmap is positioned within the given rectangle. Proportions and the size of the bitmap are altered to fit the rectangle.  
**[Border](../properties/border.md)** |  Add border: 1 - Border; 0 - No border (**_Default:_** 1)

#### **Note:**  
Applicable only when using Windows XP or Windows 7 style controls.  
  
**[BringToTop](../properties/bringtotop.md)** |  This property, when set to **_any_** value, will cause the control to be moved to the top of the display order. Once at the top of the display order, the control will appear visually on top of any other control on the window. (**_Default:_** Not Applicable - Always returns 0)  
**[Col](../properties/col.md)** |  Screen position (column) of control.  
**[Cols](../properties/cols.md)** |  Width of control in column units.  
**[CtlName$](../properties/ctlname_.md)** |  Control type ("CHART"). See **[CHART](../directives/chart.md)** directive.  
**[CurrentPoint](../properties/currentpoint.md)** |  Current data point. (**_Default:_** 1; 0 if no data)  
**[CurrentSet](../properties/currentset.md)** |  Current data set. (**_Default:_** 1; 0 if no data)  
**[Enabled](../properties/enabled.md)** |  Enabled indicator: 1 = True; 0 = False (**_Default:_** 1)  
**[Eom$](../properties/eom_.md)** |  Last change terminator. See **[CHART](../directives/chart.md)** directive for specific _eom_ _$_ character value.  
**[FaceColorBack$  
FaceColourBack$](../properties/facecolorback.md)** |  Color for background face. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT)  
**[FaceColorBottom$  
FaceColourBottom$](../properties/facecolorbottom.md)** |  Color for bottom face (3D chart). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT)  
**[FaceColorLeft$  
FaceColourLeft$](../properties/facecolorleft.md)** |  Color for left face (3D chart). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT)  
**[Fmt$](../properties/fmt_.md)** |  Control format definition. Refer to the **FMT=** option as described in the **[CHART](../directives/chart.md)** directive.  
**[Font$](../properties/font_.md)** |  This property is used to reference the font for a control. It will contain (or can be set to) a string containing three comma-separated fields of the font name, size and attributes. See **['FONT'](../mnemonics/font.md)** mnemonic. **_Example:_** To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B".  
**[Footer$](../properties/footer_.md)** |  Chart footer.  
**[Height](../properties/height.md)** |  Height of control in pixels.  
**[hWnd](../properties/hwnd.md)** |  Windows handle for control.  
**[IndexMode](../properties/indexmode.md)** |  Set Index mode: This allows additional views of existing chart types to be opened; e.g. for a 2D column chart, setting IndexMode to 1 creates a clustered column chart. |  1 |  Natural number _(1 .. n)_ indexing  
---|---  
2 |  Integer _(0 .. i)_ indexing  
3 |  Arbitrary _x_ value indexing  
**[LabelLocation$](../properties/labellocation.md)** |  Custom positioning of chart labels. Use syntax "column:line" or "AUTOMATIC" (to set label locations to the default mode). **_Example:_** x'LabelLocation$="10:15"  
**[Left](../properties/left.md)** |  Left margin for control in pixels.  
**[LegendLocation$](../properties/legendlocation_.md)** |  Location of chart legend. Values include TopLeft, Left, BottomLeft, TopRight, Right and BottomRight.  
**[LegendText$](../properties/legendtext_.md)** |  Legend text for a data set.  
**[Line](../properties/line.md)** |  Screen position of control.  
**[Lines](../properties/lines.md)** |  Height of control in number of lines.  
**[LookAndFeel](../properties/lookandfeel.md)** |  Defines how a control will look. Possible values are: |  2 |  Old Windows 3.1 2D look.  
---|---  
3 |  Windows 95/98 3D look.  
4 |  Windows XP/Vista/Windows 7 look.  
**[MarginBottom](../properties/marginbottom.md)** |  Set line number for bottom chart margin.  
**[MarginLeft](../properties/marginleft.md)** |  Set column number for left chart margin.  
**[MarginRight](../properties/marginright.md)** |  Set column number for right chart margin.  
**[MarginTop](../properties/margintop.md)** |  Set line number for top chart margin.  
**[Margins$](../properties/margins_.md)** |  Set all chart margins. Use syntax "top:bottom:left:right" or "AUTOMATIC" to set margins to the automatic (**_Default_**) mode. **_Example:_** X'MARGINS$="10:10:20:10"  
**[MenuCtl](../properties/menuctl.md)** |  This property reports/sets the CTL value to generate when an object is selected on a right-click of the mouse.  
**[NumPoints](../properties/numpoints.md)** |  Largest number of data points within data set.  
**[NumSets](../properties/numsets.md)** |  Total number of data sets.  
**[ObjectID](../properties/objectid.md)** |  User object method. (**_Default:_** 0 - No object specified) The 'ObjectID property allows applications to intercept property values and add methods to controls. When set to a valid Object ID by the application, you can add methods and add/override property logic for any control in the system. When set in the system, it allows the application to logically request methods against the control that, in turn, will be performed by the related Object ID. It will also first check the object for any property requests and, if the property is defined in the object, set or get that property instead of the controls. To allow the specified object to get true access to the control, while executing within the object identified by the 'ObjectID property, the system will direct any property requests directly to the control.

#### **Note:**  
When a control is deleted from the system, any object identified by an 'ObjectID property will be automatically dropped.  
  
**[OnTipCtl](../properties/ontipctl.md)** |  This property controls the CTL event that will be fired prior to the system displaying the Tip for any control. If the value of this property is non-zero, the system will use its value of a CTL event to fire and will defer the display of the tip until the application changes the value in 'Tip$. If the value in 'Tip$ is not changed, no tip will be displayed. Setting this to zero **_(Default)_** disables the event from being sent and the current 'Tip$ will be displayed.  
**[Parent](../properties/parent.md)** |  Parent window handle.  
**[PointText$](../properties/pointtext_.md)** |  Single string of point label values where the last character is the delimiter.  
**[ProportionDW](../properties/proportionDW.md)** |  Sets percentage of chart depth to chart width for altering depth proportions of three-dimensional charts. Assigning a 0 (zero) forces default values according to chart type. (**_Default:_** ProportionDW=100 for Pie charts; ProportionDW=50 for other chart types)  
**[ProportionHW](../properties/proportionHW.md)** |  Sets percentage of chart height to chart width for altering proportions of two-dimensional charts. Assigning a 0 (zero) forces default values according to chart type. (**_Default:_** ProportionHW=5 for Pie charts; ProportionHW=100 for other chart types)  
**[Proportions2M](../properties/proportions2M.md)** |  Proportions to margins: 0 = Off; 1 = On. (**_Default:_** 0) Sets the chart to the variable-proportion mode, which means that it is proportional to the current height-to-width ratio of the chart window that contains the chart.  
**[RangeMax](../properties/rangemax.md)** |  Set ceiling value of the Y-axis. The chart view will be adjusted according to RangeMin and RangeMax values.  
**[RangeMin](../properties/rangemin.md)** |  Set floor value of the Y-axis. The chart view will be adjusted according to RangeMin and RangeMax values.  
**[RangeText$](../properties/rangetext.md)** |  Text of custom label for Stack Chart (one point per data set). Labels are placed on the right side. Labels must be added sequentially, starting from 1, up to the number of sets. **_Example:_** X'CURRENTSET =1, X'CURRENTPOINT=1, X'RANGETEXT$="Label One"  
**[SelectIndex](../properties/selectindex.md)** |  Index to **['SelectItem](../properties/selectitem.md)**: Set this property to point to a selected element; e.g. 1 points to the first item selected, 2 points to the second item selected, etc.  
**[Sep$](../properties/sep_.md)** |  Separator character between each field, column or data point.  
**[SepLoad$](../properties/sepload_.md)** |  Separator character for each row or data set.  
**[TextColor$  
TextColour$](../properties/textcolor_.md)** |  Foreground text color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Tip$](../properties/tip_.md)** |  Tip message for control.  
**[Title1$](../properties/title1_.md)** |  Primary chart title.  
**[Title2$](../properties/title2_.md)** |  Secondary chart title.  
**[Top](../properties/top.md)** |  Top of control in pixels.  
**[Value$](../properties/value_.md)** |  Current item or grid cell value.  
**[Visible](../properties/visible.md)** |  Control visible flag: 1 = Yes; 0 = No (**_Default:_** 1)  
**[Width](../properties/width.md)** |  Width of control in pixels.  
**[XAxisLocation$](../properties/xaxislocation_.md)** |  X-Axis location: Back or Bottom (**_Default:_** "Bottom")  
**[XAxisTitle$](../properties/xaxistitle_.md)** |  X-Axis title.  
**[YAxisLocation$](../properties/yaxislocation_.md)** |  Y-Axis location: Back or Left (**_Default:_** "Left")  
**[YAxisMax$](../properties/yaxismax_.md)** |  Y-Axis maximum value.  
**[YAxisMin$](../properties/yaxismin_.md)** |  Y-Axis minimum value.  
**[YAxisTitle$](../properties/yaxistitle_.md)** |  Y-Axis title.  
**[ZAxisLocation$](../properties/zaxislocation_.md)** |  Z-Axis location: Bottom or Left (**_Default:_** "Left")  
**[ZAxisTitle$](../properties/zaxistitle_.md)** |  Z-Axis title.  
**[_PropList$](../properties/_proplist_.md)** |  Controls the list of properties to be returned in '_PropValues$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropSep$](../properties/_propsep_.md)** |  Controls the separator used between each of the values of the properties returned in '_PropValues$ as defined by '_PropList$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropValues$](../properties/_propvalue_.md)** |  Accesses the values of the properties defined in '_PropList$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
  
## See Also

**[NOMADS Chart Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)  
[Charting Alternatives in PxPlus](../Charting%20Alternatives%20in%20PxPlus/Introduction.md)**  
**[*OBJ/CHART Plus Charting Utility](../utilities/chart_object.md)**  
**[CHART Directive](../directives/chart.md)**  
**[Color Properties](colour_properties.md)**  
**['COLOUR' & '_COLOUR' Mnemonic](../mnemonics/colour.md)**  
**[Using Property Names](../control_object_properties.htm#Mark1)**  
**[Compound Properties](compound_properties.md)**
