# Themes and Visual Classes

**Chart Properties**|   
---|---  
  
This table lists all the **_Chart_** properties:

**Property** |  **Description**  
---|---  
**Attributes**  
_Bitmap_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** Bitmap to appear as the background for the chart. Click the dotted Query button to specify a bitmap (can be _Fixed_ or an _Expression_). Generally, this image will be scaled to cover the region. For all but PDF output, the system will retain the aspect ratio while cropping any excess imagery that will not fit.

#### **Note:**  
When a bitmap is set, the system will ignore the **[FaceColorBack$](Themes_vc%20Chart.htm#faceclrback)** property.

_(Bitmap property was added in PxPlus 2019.)_  
_Borderless_ |  Control has no border or frame.  
_Connector Line_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** **_(Column and Bar Charts Only)_** When selected, the system will draw lines between the ends of the columns or bars for each point/set in the chart. _(Connector Line property was added in PxPlus 2019.)_  
_Legend Location_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** Location of chart legend. Click the drop-down arrow for a list of selections: _Top, Bottom, Left, Right, TopLeft, TopRight, BottomLeft, BottomRight_ and _None_. _(Legend Location property was added in PxPlus 2019.)_  
_Pastel Palette_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** When selected, the system will use a different set of more pastel colors to display the charts. _(Pastel Palette property was added in PxPlus 2019.)_  
_Show Values_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** When selected, the system will display the actual point values on the chart. For **_Column_** charts, the values will appear above/below the column. For **_Stacked_** charts, the values will appear in the segment of the chart. For **_Bar_** charts, the values will appear to the left/right of the bar. For **_Pie/Donut_** charts, the values will appear as a percentage inside the pie chart (may be suppressed if not enough room). For **_Scatter_** charts, the X/Y values will appear above the point. _(Shows Values property was added in PxPlus 2019.)_  
**Colors**  
_Click the dotted_ _Query button or double click inside the cell to access_ **[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background_ |  Background color of the chart. Plus and Native charts use the background color outside the chart area. RGraph charts use the color in the chart area itself. Google charts apply the background color to both areas. Due to different areas being affected, it is recommended that a background color of White be used to remain consistent with all brands.  
_Chart Colors_ |  Colors to apply when plotting the different datasets of a chart. See **[Chart Colors](../../../Charting%20Alternatives%20in%20PxPlus/Colors/Overview.htm#chart_colors)**. Colors can be specified using standard PxPlus colors (e.g. Light Red, Dark Blue, etc.), Custom colors (e.g. RGB:192 255 192), User-Defined colors (e.g. COLOR16) and/or Expressions. The number of colors is not restricted; however, if there are more datasets than colors specified, the colors will repeat. See **[Colors](../../../Charting%20Alternatives%20in%20PxPlus/Colors/Overview.md)** for additional information on controlling the colors used for chart datasets. _(Chart Colors property was added in PxPlus 2020.)_  
_Default Color_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** Can be set to the default color to use for all text and non-chart lines (border, chart frame, etc.). If not set, Black will be used. _(Default Color property was added in PxPlus 2019.)_  
_Face Color (Back)_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** Color of the back plane of the chart. _(Face Color (Back) property was added in PxPlus 2019.)_  
_Face Color (Bottom)_ |  **_(Applicable to Plus Charts, which are available starting with PxPlus 2019)_** Color used on the zero ledge on 3D charts. _(Face Color (Bottom) property was added in PxPlus 2019.)_  
_Foreground_ |  Text color of the chart. Titles and labels are affected differently by this color setting in the different chart brands; therefore, it is recommended that a foreground color of Black be used to remain consistent with all brands.  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes, such as _Bold_ , _Italics_ , etc. See **[Font Properties](Font%20Properties.md)**. _(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Other**  
_iNomads_ _Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
