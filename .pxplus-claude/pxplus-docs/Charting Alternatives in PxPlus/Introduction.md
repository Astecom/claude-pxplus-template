# Charting

**Charting Alternatives in PxPlus** |  **__**  
---|---  
  
PxPlus supports **[Plus Charts](Introduction.htm#pluscharts)**, **[RGraph Charts](Introduction.htm#rgraph)**, and **[Google Interactive Charts](Introduction.htm#googlecharts)** (using the Google Visualization API) as options to replace the internal PxPlus chart control. These charts are interactive and animated with attractive displays and expose events such as the mouse click.

For examples of the various chart formats, see **[Chart Formats](Chart%20Formats/Overview.md)**.

_(Plus Charts were added in PxPlus 2019.)_

Most existing internal chart formats are supported (_Area, Bar, Column, Line, Pie_ and _Stack_) with additional formats (_Scatter, Donut_ and _Gauge_) supported selectively. Most CHART directives are also supported, as are selected properties. This makes it possible to switch chart displays from the internal chart to one of the alternate chart options with little or no code changes. The alternate chart interfaces are designed to work in both NOMADS and iNomads environments.

|    
  
**NOMADS** |  **  
**  
**iNomads**  
---|---|---  
  
One of the ways that a chart control can be defined is by using the **[Chart Properties](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartproperties)** dialog in the NOMADS Panel Designer. The definition interface is the same as for the standard internal chart, although some of the properties are not applicable.

Once a chart is defined, the switch to an alternate chart display is relatively simple. The chart brand can be set system wide or for an individual chart. When working in a **NOMADS** environment, set your charting option system wide by setting the global variable **[%NOMADS'Chart$](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart)** to "plus", "rgraph" or "google". If **%NOMADS'Chart$** is not set, the default will be "plus" charts. See **[Plus Charts](Introduction.htm#pluscharts)**.

_(Support to default to Plus Charts when %NOMADS'Chart$ is not set was added in PxPlus 2024 Update 1.)_

**_Example:_**

> %Nomads'Chart$="plus"

To set the chart brand system wide when working in an **_iNomads_** environment:

|  1. |  Invoke the **[iNomads System Administration Functions](../iNOMADS/iNomads%20Setup.md)** (admin) dialog.  
---|---|---  
|  2. |  Under **Template Settings** , select a template from the _Template_ drop box.  
|  3. |  Click the _Options_ button to launch **[Template Configuration Maintenance](../iNOMADS/Template%20Configuration.md)**.  
|  4. |  On the **Misc** tab, select a chart brand from the **[Charting Object to Use](../iNOMADS/Template%20Configuration.htm#chart_obj)** drop box.  
  
To set the chart display for an individual chart in **_NOMADS_** :

|  1. |  Invoke the NOMADS **[Chart Properties](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartproperties)** dialog for the chart.  
---|---|---  
|  2. |  On the **Display** tab, select a chart brand from the **[Chart Brand](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#display)** drop box. This setting will override the system wide setting for the chart unless set to _Default_ , in which case the **[%NOMADS'Chart$](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart)** setting will be used.  
  
## See Also

**[Chart Formats](Chart%20Formats/Overview.md)**  
**[Chart Processing](Chart%20Processing/Overview.md)**  
**[Properties and Methods](../Automation%20in%20PxPlus/Properties%20and%20Methods/Overview.md)**  
**[Events](../Automation%20in%20PxPlus/Events/Overview.md)**  
**[NOMADS AutoChart](../NOMADS%20AutoChart/Introduction.md)**

##  Plus Charts

Plus Charts emulate a chart control, rendering NOMADS charts using printed shapes and iNomads charts using HTML. Plus Charts are **_strongly recommended_** , as they support all chart formats and most properties, and they are not dependent upon third-party software or Internet connections. Simply set the _Chart Brand_ option to "Plus".

See **[*OBJ/CHART Plus Charting Utility](../utilities/chart_object.md)**.

_(Plus Charts were added in PxPlus 2019.)_

## RGraph Charts

RGraph is an HTML5 canvas graph library. The required files are part of the PxPlus install; therefore, all you have to do is set your charting option to "rgraph". In an iNomads environment, RGraph charts are supported on any browser that supports the canvas element.

For information on RGraph, visit **[https://www.rgraph.net](https://www.rgraph.net/ "http://www.rgraph.net")**.

#### **Note:**  
As of PxPlus 2019, RGraph (v4) is supported.

##  Google Interactive Charts

To use Google Interactive Charts, all that is required is access to the Internet and setting the charting option to "google". At run time, the PxPlus chart interface works in conjunction with your Internet browser to request the Visualization API and chart packages from the Google website. All code and data are processed and rendered in the browser; security issues are addressed, as no data is sent to any external server for processing.

For information on the Google Visualization API and Terms of Use, visit **<https://code.google.com/apis/visualization/interactive_charts.html>** and **<https://developers.google.com/chart/terms?hl=en>**.
