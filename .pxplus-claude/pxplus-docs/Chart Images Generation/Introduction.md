# Charting

**Chart Images Generation** |  **__**  
---|---  
  
PxPlus provides the facility to create images of charts for display on dashboards, on your website, or as part of your application. Chart images (_.png_ , ._jpg_ or _.bmp_) are generated based on **[AutoChart](../NOMADS%20AutoChart/Introduction.md)** definitions associated with PxPlus queries, or they can be generated using your own code in conjunction with PxPlus objects and utilities. The generation of chart images can be scheduled to occur on a timed basis or on-demand.

Generating a chart image involves the following three steps:

> 1\. **[Define the Contents of the Chart](Define%20the%20Contents%20of%20the%20Chart.md)**

> 2\. **[Schedule the Chart Generation](Schedule%20the%20Chart%20Generation.md)**

> 3\. **[Generate the Chart Image](Generate%20the%20Chart%20Image.md)**

## Requirements

To generate a chart image, certain third-party applications are required:

**_On Windows Servers:_**

> The **_Chrome_** browser is recommended for generating images based on Plus, Google and RGraph charts; however, the **_Firefox_** browser (v57 and later) can be used to generate images based on Plus charts.

**_On Linux Servers:_**

> The **_Firefox_** browser (v57 and later) will generate _.png_ images for Plus charts. To generate _.jpg_ and _.bmp_ images, the **_ImageMagick_** command line tool must also be installed.

## See Also

**[NOMADS Chart Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)**  
**[NOMADS AutoChart](../NOMADS%20AutoChart/Introduction.md)**
