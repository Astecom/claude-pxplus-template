# Chart Images Generation

**Generate the Chart Image** |  **__**  
---|---  
  
The third and last step is to generate the chart image. This page explains how to generate charts on a **_timed_** basis, as well as how to generate them **_on demand_**.

## Timed Chart Generation

If a chart schedule entry has a timed frequency setting, then the Chart Scheduler must be run to generate the chart images on a timed basis. To do this, start the Chart Scheduler program. This is usually done by running a program called "*gencharts" as a background task. This program is not interactive; however, if you run it in a live PxPlus window, it will display polling intervals and the name of any charts currently being generated. (You can break out of the program by pressing the **F4** or **ESC** keys.)

If more than one chart is scheduled for generation at the same time, they are generated sequentially. If a particular chart requires heavy processing, this may delay the processing of subsequent charts scheduled at the same time. If a chart consistently fails to generate, it is automatically removed from the schedule file after 90 days.

The appearance of the chart is dependent on the chart brand setting (see **[Define the Contents of the Chart](Define%20the%20Contents%20of%20the%20Chart.md)**). In a NOMADS environment, this is dependent on the setting of **[%NOMADS'Chart$](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart)**. Chart image generation supports Plus, Google and RGraph Charts. The **%NOMADS'Chart$** setting can be set, for instance, in the START_UP program.

If you are running your application on a Windows server, the Chart Scheduler can be set to run as a Windows Service. A utility program called **"*plus/winutl/chartservice"** can be run to create a service called PxPlusCharts. See **[Installing Chart Generator as a Windows Service](../Chart%20Image%20Utilities/Installing%20Chart%20Generator%20as%20a%20Windows%20Service/Overview.md)**.

## On Demand Chart Generation

Chart images with the frequency set to _On Demand_ can be generated from **[Chart Image Generation Schedule Maintenance](Schedule%20the%20Chart%20Generation.md)** or generated **_programmatically_**.

To generate a chart on demand using **Chart Image Generation Schedule Maintenance** , click to highlight the desired entry from the list of schedule entries and select the _Generate_ button. If the selected entry is based on a Query+ AutoChart definition, the result is displayed, along with an option of deleting the generated image. If the entry is based on a user program, then the program will be called.

To generate a chart on demand **_programmatically_** , call the **"*gencharts;Generate_Chart"** program, passing the schedule item name as an argument, as in the example below.

**_Example:_**

> **call** "***gencharts;Generate_Chart",err** =stmt_ref,ScheduleEntryName$
