# Charting Alternatives in PxPlus

**Chart Processing** |  **__**  
---|---  
  
## Properties

The alternate chart interfaces support the following **_common control properties_** :

|  **[BackColor$](../../properties/backcolor_.md)** |  **[Enabled](../../properties/enabled.md)** |  **[Line](../../properties/line.md)** |  **[Top](../../properties/top.md)** |  **[_PropList$](../../properties/_proplist_.md)**  
---|---|---|---|---|---  
|  **[Col](../../properties/col.md)** |  **[Fmt$](../../properties/fmt_.md)** |  **[Lines](../../properties/lines.md)** |  **[Visible](../../properties/visible.md)** |  **[_PropSep$](../../properties/_propsep_.md)**  
|  **[Cols](../../properties/cols.md)** |  **[Height](../../properties/height.md)** |  **[Sep$](../../properties/sep_.md)** |  **[Width](../../properties/width.md)** |  **[_PropValues$](../../properties/_propvalue_.md)**  
|  **[CtlName$](../../properties/ctlname_.md)** |  **[Left](../../properties/left.md)** |  **[SepLoad$](../../properties/sepload_.md)** |  |   
  
Besides the standard chart formats (_Area, Bar, Column, Line, Pie, Ribbon, Scatter_ and _Stack_), two additional formats are available: _Donut_ for RGraph, and the Google RGraph and Gauge.

#### **Note:**  
PxPlus supports [ **Plus Charts**](../Introduction.htm#pluscharts), [**RGraph Charts**](../Introduction.htm#rgraph), and [**Google Interactive Charts**](../Introduction.htm#googlecharts) (using the Google Visualization API) as options to replace the internal PxPlus chart control.  
  
_(PxPlus Charts were added in PxPlus 2019.)_

For information on defining a Chart control in the NOMADS Panel Designer, see **[Chart Control](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)**.

For information on how you can define simple charts based on the columns of a List Box, Grid or Query, see **[NOMADS AutoChart](../../NOMADS%20AutoChart/Introduction.md)**.

To learn how you can use a Query-based AutoChart definition to load a Smart Chart control, see **[Smart Controls](../../NOMADS%20Graphical%20Application/Smart%20Controls/Overview.md)**.

To learn about creating images of charts for display on dashboards, on your website, or as part of your application, see **[Chart Images Generation](../../Chart%20Images%20Generation/Introduction.md)**.

For information on the utilities to use when working with chart images, see **[Chart Image Utilities](../../Chart%20Image%20Utilities/Introduction.md)**.

The following **_chart-specific properties_** are also supported:

|  **[CurrentPoint](../../properties/currentpoint.md)** |  **[NumSets](../../properties/numsets.md)** |  **[SelectIndex](../../properties/selectindex.md)******|  **[Title2$](../../properties/title2_.md)**  
---|---|---|---|---  
|  **[CurrentSet](../../properties/currentset.md)** |  **[RangeMax](../../properties/rangemax.md)** |  **[TextColor$](../../properties/textcolor_.md)** |  **[XAxisTitle$](../../properties/xaxistitle_.md)**  
|  **[LegendLocation$](../../properties/legendlocation_.md)** |  **[RangeMin](../../properties/rangemin.md)** |  **[Title1$](../../properties/title1_.md)** |  **[YAxisTitle$](../../properties/yaxistitle_.md)**  
|  **[NumPoints](../../properties/numpoints.md)**|  |  |   
  
The following **_additional properties_** are also supported:

**Property** |  **Chart Type** |  **Description**  
---|---|---  
**Animate** |  Plus |  Controls the animation of a Web/HTML rendered chart. When this property is set (non-zero) and the chart is first rendered, Bars and Columns grow from the zero line to full size, and all other charts are set to fade in when rendered. Only the chart contents are animated (not the frame, titles or set/point names) and only when rendered as HTML for use on the Web. _(Animate support for Plus Charts was added in PxPlus 2019.)_  
**AutoAnimate** |  RGraph |  If **_On_** (1), the chart is animated whenever it is redrawn. _(AutoAnimate support for RGraph was added in PxPlus 2019.)_  
**Bitmap$** |  Plus |  Bitmap to appear as the background for the chart. Generally, this image will be scaled to cover the region. For all but PDF output, the system will retain the aspect ratio while cropping any excess imagery that will not fit.

#### **Note:**  
When a Bitmap is set, the system will ignore the **FaceColorBack$** property.

_(Bitmap$ support for Plus Charts was added in PxPlus 2019.)_  
**Border** |  Plus |  When this property is set, the chart will be drawn with a thin black border around the outside of the defined area. _(Border support for Plus Charts was added in PxPlus 2019.)_  
**ChartColors$** |  Plus  
RGraph  
Google |  List of colors to apply when plotting the different datasets of a chart. Color references may include PxPlus colors (e.g. Light Red, Dark Blue), RGB colors (e.g. RGB:130 0 130), User-defined colors (e.g. Color20) or Expressions (e.g. =myColor$). The colors are separated by a separator character that is the last character of the list. **_Example:_** Below is a sample color string: "Light Red;RGB:100 100 45;=myColor$;Color19;" See **[Colors](../Colors/Overview.md)** for additional information on controlling the colors used for chart datasets. _(The ChartColors$ property was added in PxPlus 2020.)_  
**ColorByPoint** |  Plus |  When this property is set (non-zero) and there is **_only_** one set of data, the system will draw each point in a different color as if each point was a set. _(ColorByPoint support for Plus Charts was added in PxPlus 2019.)_  
**ConnectorLine** |  Plus |  **_(Applicable for Column and Bar Charts Only)_** When this property is set (non-zero), the system will draw lines between the ends of the columns or bars for each point/set in the chart. _(ConnectorLine support for Plus Charts was added in PxPlus 2019.)_  
**Currency** |  Plus  
RGraph |  Indicates whether or not to display currency symbols.  
  
0 = No currency symbol  
1 = Display currency symbol in front of number  
-1 = Display currency symbol after number _(Currency support for Plus Charts was added in PxPlus 2019.)_  
**DecimalPrecision** |  Plus |  Number of digits to display after the decimal point. (Default is 2. Maximum is 6.) _(DecimalPrecision support for Plus Charts was added in PxPlus 2019.)_  
**DefaultColor$** |  Plus |  Can be set to the default color to use for all text and non-chart lines (border, chart frame, etc.). If not set, Black will be used. _(DefaultColor$ support for Plus Charts was added in PxPlus 2019.)_  
**DisplayFormat$** |  Plus |  PxPlus numeric format to use when displaying numbers. If formatting fails, the system will default to its internal format. _(DisplayFormat$ support for Plus Charts was added in PxPlus 2019.)_  
**EnableTooltip** |  RGraph  
Google |  If **_On_** (1), tooltips are shown when the user clicks on a chart segment. Boolean (0/1). Default is 1.  
**FaceColorBack$** |  Plus |  Color of the back pane of the chart. _(FaceColorBack$ support for Plus Charts was added in PxPlus 2019.)_  
**FaceColorBottom$** |  Plus |  Color used on the zero ledge on 3D charts. _(FaceColorBottom$ support for Plus Charts was added in PxPlus 2019.)_  
**FontColor1$****  
FontColour1$** |  Plus  
RGraph  
Google |  Plus - Color of the text on the main title. This color takes precedence over **DefaultColor$** for the main title.  
  
Google - Color of all text **_except_** the key legend.  
  
RGraph - Color of the main title. _(FontColor1$/FontColour1$ support for Plus Charts was added in PxPlus 2019.)_  
**FontColor2$****  
FontColour2$** |  Plus  
RGraph  
Google |  Plus - Color of the text for point names, values and all titles and legends **_except_** the main title. This color takes precedence over **DefaultColor$**.  
  
Google - Color of the text in the key legend.  
  
RGraph - Color of all text **_except_** the main title. _(FontColor2$/FontColour2$ support for Plus Charts was added in PxPlus 2019.)_  
**Footer$** |  Plus |  Chart footer (text displayed centered below the chart). This is suppressed if there is no room to display. _(Footer$ support for Plus Charts was added in PxPlus 2019.)_  
**FormatNumberScale** |  Plus |  Boolean value indicating whether to display numbers with formatted scale (e.g. 4.5K or 1.2M) or as full numbers (e.g. 45,000 or 1,200,000). Default is to use a formatted scale (1).  
**LegendLocation$** |  Plus |  Location of chart legend. Possible values are _Top_ , _Bottom_ , _Left_ , _Right_ , _TopLeft_ , _TopRight_ , _BottomLeft_ , _BottomRight_ and _None_. _(LegendLocation$ support for Plus Charts was added in PxPlus 2019.)_  
**LegendText$** |  Plus |  Legend text for a dataset. _(LegendText$ support for Plus Charts was added in PxPlus 2019.)_  
**MarginBottom** |  Plus |  Set the number of lines for the bottom chart margin. _(MarginBottom support for Plus Charts was added in PxPlus 2019.)_  
**MarginLeft** |  Plus |  Set the number of columns for the left chart margin. _(MarginLeft support for Plus Charts was added in PxPlus 2019.)_  
**MarginRight** |  Plus |  Set the number of columns for the right chart margin. _(MarginRight support for Plus Charts was added in PxPlus 2019.)_  
**MarginTop** |  Plus |  Set the number of lines for the top chart margin.  
**Margins$** |  Plus |  Set all chart margins. Use syntax "top:bottom:left:right" or "AUTOMATIC" to set margins to the automatic **_(default)_** mode. **_Example:_** x'margins$="10:10:20:10" _(Margin$ support for Plus Charts was added in PxPlus 2019.)_  
**NoChartDots** |  Plus |  When this property is set (non-zero), suppresses the small dots that mark the data points on Area and Line charts. _(NoChartDots property for Plus Charts was added in PxPlus 2023.)_  
**NoUpdate** |  Plus |  When this property is set (non-zero), suppresses redrawing the chart when a property is changed. Setting it to 0 (zero) triggers a redraw, and subsequent property changes will also cause the chart to be redrawn. _(NoUpdate support for Plus Charts was added in PxPlus 2019.)_  
**PastelPalette** |  Plus  
RGraph  
Google |  When this property is set (non-zero), the system will use a different set of more pastel colors to display the charts. _(PastelPalette support for Plus Charts was added in PxPlus 2019.)_  
**PointText$** |  Plus |  Point label values. Single string of point label values where the last character is the delimiter. _(PointText$ support for Plus Charts was added in PxPlus 2019.)_  
**ProportionHW** |  Plus |  Used to determine the ratio of the chart height to width when drawing responsive HTML charts. A value of 1 indicates the width and height should be considered the same; .56 works out to a roughly 9/16 aspect ratio.

#### **Note:**  
When set, the width is always the governing factor for a responsive chart -- that is, the chart is drawn to fill the width available.

_(ProportionHW support for Plus Charts was added in PxPlus 2019.)_  
**SelectPoint** |  Plus  
RGraph  
Google |  Sequence number of the selected point. _(SelectPoint support for Plus Charts was added in PxPlus 2019.)_  
**ShowValues** |  Plus |  When this property is set (non-zero), the system will display the actual point values on the chart.  
  
For Column charts, the values appear above/below the column.  
  
For Stacked charts, the values appear in the segment of the chart.  
  
For Bar charts, the values appear to the left/right of the bar.  
  
For Pie/Donut charts, the values appear as a percentage inside the pie chart (may be suppressed if not enough room).  
  
For Scatter charts, the X/Y values appear above the point. _(ShowValues support for Plus Charts was added in PxPlus 2019.)_  
**TextColor$** |  Plus  
RGraph  
Google |  When the **[CurrentSet](../../properties/currentset.md)** property is set to zero, setting the **TextColor$** property sets both **[FontColor1$](Overview.htm#fontcol1)** and **[FontColor2$](Overview.htm#fontcol2)** to the specified color. When the **CurrentSet** property is greater than zero, setting **TextColor** **$** sets the color for the dataset represented by **CurrentSet**. _(TextColor$ support for Plus, RGraph and Google Charts was added in PxPlus 2024.)_  
**Value** |  Plus  
RGraph  
Google |  Value for the point currently selected by setting the **CurrentPoint** and **CurrentSet** properties. _(Value support for Plus Charts was added in PxPlus 2019.)_  
**XAxisLocation$** |  Plus |  X-Axis location (Back or Bottom). _(XAxisLocation$ support for Plus Charts was added in PxPlus 2019.)_  
**YAxisLocation$** |  Plus |  Y-Axis location (Back or Left). _(YAxisLocation$ support for Plus Charts was added in PxPlus 2019.)_  
**greenFrom** |  Plus  
Google |  **_(Applicable for Gauge Charts Only)_** Numeric value where the gauge will start turning green. _(greenFrom support for Plus Charts was added in PxPlus 2019.)_  
**greenTo** |  Plus  
RGraph  
Google |  **_(Applicable for Gauge Charts Only)_** Numeric value where the gauge will stop turning green. On RGraph gauges, this also denotes the beginning of the yellow zone. _(greenTo support for Plus Charts was added in PxPlus 2019.)_  
**majorTicks$** |  Google |  **_(Applicable for Gauge Charts Only)_** String of labels for the major tick marks on the gauge. The last character of the string is used as the label separator.  
**minorTicks** |  Google |  **_(Applicable for Gauge Charts Only)_** Number of tick marks between each major tick. Default is 2.  
**redFrom** |  Plus  
RGraph  
Google |  **_(Applicable for Gauge Charts Only)_** Numeric value where the gauge will start turning red. On RGraph gauges, this also denotes the end of the yellow zone. _(redFrom support for Plus Charts was added in PxPlus 2019.)_  
**redTo** |  Plus  
Google |  **_(Applicable for Gauge Charts Only)_** Numeric value where the gauge will stop turning red. _(redTo support for Plus Charts was added in PxPlus 2019.)_  
**yellowFrom** |  Plus  
Google |  **_(Applicable for Gauge Charts Only)_** Numeric value where the gauge will start turning yellow. _(yellowFrom support for Plus Charts was added in PxPlus 2019.)_  
**yellowTo** |  Plus  
Google |  **_(Applicable for Gauge Charts Only)_** Numeric value where the gauge will stop turning yellow. _(yellowTo support for Plus Charts was added in PxPlus 2019.)_  
  
Properties which are not supported are available as dummy properties; they may be accessed but do not perform any function.

## Methods

The following methods are available:

**Method** |  **Description**  
---|---  
**Animate( )** |  **_(Applicable for RGraph Charts Only)_** The chart is redrawn with animation. _(The Animate( ) method was added in PxPlus 2019.)_  
**Load(**_string$_**)** |  This method can be used in place of the **[CHART LOAD](../../directives/chart.md)** directive to load data into a chart. The last character of the string identifies the separator for each dataset while the value defined by **SEP=** when the chart is created (or the **'Sep$** property afterwards) is used to separate the different data points within each dataset. Legend labels can be specified as the first element in a dataset definition followed by an **=** (_equals sign_). **_Example:_** CHART_1.CTL'load("100,200,300,400/150,250,350,450/")  
CHT.CTL'load("Last Year=100,200,300,400/This Year=150,250,350,450/") _(The Load(string$) method was added in PxPlus 2019.)_  
**getOptions$( )** |  Returns a string consisting of the additional options that have been set using the **setOption****( )** method. The format of the string will vary depending on the type of chart used.  
**setOption(**_op$,val$_**)** |  **(_Not available for Plus charts, as all Plus methods are available directly from the Plus chart object. See_** **[*OBJ/CHART](../../utilities/chart_object.md).)** Sets additional chart options specific to a particular chart. For RGraph charts, these options are the properties set using the **Set( )** method. For Google charts, these are the options set using the **Draw( )** method. See the appropriate API documentation for options and their possible values.

#### **Note:   
**Options are case sensitive.  
  
## Events

The _Select_ (click) event is fired when the user clicks a graph segment. When a point, bar or pie slice is clicked, the chart's **SelectIndex** property is set with the dataset number, the **SelectPoint** property is set with the point number, and an OnChange event is fired.

## Chart Directives

All chart directives are supported ** _except_** the **CHART** creation directive and **CHART REMOVE**. See **[CHART](../../directives/chart.md)** directive.
