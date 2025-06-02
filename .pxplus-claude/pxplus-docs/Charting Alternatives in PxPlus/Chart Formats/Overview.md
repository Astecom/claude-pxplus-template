# Charting Alternatives in PxPlus

**Chart Formats** |  **__**  
---|---  
  
One of the ways that a chart control can be defined is by using the **[Chart Properties](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartproperties)** dialog in the NOMADS Panel Designer. To set the chart display (i.e. Plus, RGraph, Google) for an individual chart, select the **[Chart Brand](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartbrand)** option on the **Display** tab.

The various chart formats are displayed below.

**Format****and Description** |  **Plus** |  **RGraph** |  **Google**  
---|---|---|---  
**_Area Chart_** Displays a series as a set of points connected by a line, with all the area filled in below the line.  
  
Available in 2D only.  
  
Not available in RGraph, which substitutes the Line chart. |  |  **_Not Available_** |   
|  |  |   
**_Bar Chart_** A graph consisting of parallel horizontal bars or rectangles, each of which represents the value of one item of data. Available in 2D and 3D **_except_** for Google, which has 2D only. |  |  |   
|  |  |   
**_Column Chart_** A graph consisting of parallel vertical bars or rectangles, each of which represents the value of one item of data. Available in 2D and 3D, **_except_** for Google, which has 2D only. |  |  |   
|  |  |   
**_Donut Chart_** A circular chart with a hole in the center, divided into slices proportional to the percentages of the whole. Available in 2D and 3D in Plus Charts and RGraph. The 2D Pie chart is substituted in Google Interactive Charts. |  |  |   
|  |  |   
**_Gauge Chart_** Each numeric value is displayed as a gauge. Available in Plus Charts, Google Interactive Charts and RGraph only. The Plus and Google gauges can show multiple values by displaying multiple gauges. RGraph shows only one gauge. |  |  |   
|  |  |   
**_Line Chart_** Displays a series as a set of data points connected by a line. Available in 2D only, **_except_** for Plus Charts and RGraph, which also support a 3D version. |  |  |   
|  |  |   
**_Pie Chart_** A circular chart divided into triangular areas proportional to the percentages of the whole. Available in 2D and 3D. |  |  |   
|  |  |   
**_Scatter Chart_** Also known as an XY Chart. Plots sets of Cartesian coordinates. (Each dataset consists of X and Y value pairs.) Available in Plus Charts, RGraph, and Google Interactive Charts in 2D. |  |  |   
|  |  |   
**_Stack Chart_** A column chart whose data values are stacked (accumulated). Available in 2D and 3D, **_except_** for Google Interactive Charts, which displays a 2D chart. |  |  |   
  
_(Plus Charts were added in PxPlus 2019.)_

## Chart Format/Type Availability

**Format** |  **Plus Charts** |  **RGraph** |  **Google Interactive** |  **PVX Internal**  
---|---|---|---|---  
_Area_ |  2D |  \-- |  2D |  2D  
_Bar_ |  2D, 3D |  2D, 3D |  2D |  2D, 3D  
_Column_ |  2D, 3D |  2D, 3D |  2D |  2D, 3D  
_Donut_ |  2D, 3D |  2D, 3D |  \-- |  \--  
_Gauge_ |  2D |  2D |  2D |  \--  
_Line_ |  2D, 3D |  2D, 3D |  2D |  2D, 3D  
_Pie_ |  2D, 3D |  2D, 3D |  2D, 3D |  2D, 3D  
_Ribbon_ |  3D |  \-- |  \-- |  2D, 3D  
_Scatter_ |  2D |  2D |  2D |  2D, 3D  
_Stack_ |  2D, 3D |  2D, 3D |  2D |  2D, 3D  
  
#### **Note:**  
Where not available, Ribbon charts are displayed as Line charts with no dots marking the points, Donuts are displayed as Pies, and 3D versions of Line, Area and Scatter charts map to the corresponding 2D version. The Gauge chart maps to the default chart format.
