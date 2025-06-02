# Chart Images Generation

**Define the Contents of the Chart** |  **__**  
---|---  
  
The first step is to define the appearance and the contents of the chart. This can be done by creating an **[AutoChart](../NOMADS%20AutoChart/Introduction.md)** definition based on a Query+ definition or by writing a program that creates the chart and its contents.

Chart appearance is also dependent upon the currently selected chart brand. The chart brand is set up by using the **[%NOMADS'Chart$](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart)** property in NOMADS, and in iNomads, it is set in the **[iNomads Configuration](../iNOMADS/Template%20Configuration.htm#misc)**. Only Plus, Google and RGraph Charts can be generated on a Windows server. Only Plus Charts are supported on Linux.

See **[Charting Alternatives in PxPlus](../Charting%20Alternatives%20in%20PxPlus/Introduction.md)**.

## Creating a Query+ Based AutoChart Definition

The AutoChart definitions that are used to generate chart images are based on the **[Query+](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** interface. The query definition defines the columns and the data required to generate the chart. You can use existing definitions or design a definition exclusively for generating the chart. See **[Defining a Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.md)**.

#### **Note:**  
The data used to generate the chart will **_not_** be affected by any personal run-time filters that users may have defined for viewing the query.

After the query has been defined, you can create the **[AutoChart Definition](../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)**, which defines the parameters for the chart. This can be done using one of the following methods:

**Method** |  **Description**  
---|---  
Select the _Define Chart_ button on the **[Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** toolbar. |  This invokes the **[Chart Wizard](../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)** that will step you through the process of creating, editing or deleting a chart definition.

#### **Note:**  
The chart must be defined as a _public_ chart.  
  
Define the AutoChart at run time. |  Run the query either from the NOMADS **[Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** on the **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** window or from the **Query Definition** window by clicking the _Test_ button, or invoke the query from within your application. At run-time, click the _Charts_ button at the top of the query or select _Charts_ from the right-click popup menu. Then, select _Define a Chart_ to invoke the **[Chart Wizard](../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)**.  
Select the **[Smart Load](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartproperties)** button when defining a NOMADS Chart control. _(The Smart Load button for NOMADS Chart controls was added in PxPlus 2019.)_ |  This invokes the **Smart Chart Definition** window, which includes additional **[Chart Selection](../NOMADS%20Graphical%20Application/Smart%20Controls/Defining%20Smart%20Controls.htm#Mark5)** options.  
  
## Creating the Chart Image Using a Program

AutoChart definitions associated with queries are limited in the complexity of the data analysis and display attributes. An alternate method is to create and generate chart images using the PxPlus chart class and image generation utility.

Simply instantiate the Plus, Google or RGraph Chart object, set chart properties as desired, then generate and load the chart data. The chart class has a method for generating an HTML page, which, when saved to a file, can be passed to the **[*TOOLS/HTMLIMAGE](../utilities/html_image.md)** utility to generate the image.

**_Example:_**

This chart was generated using the code illustrated below.

> > ! Generate a chart image  
>  !  
>  ! Instantiate the chart class  
>  chartBrand$="plus" ! could also be "rgraph" or "google"  
>  c=new("*plus/inomads/add-ons/charts/"+chartBrand$+"/chart")  
>  !  
>  ! Set chart properties  
>  c'fmt$="3dcolumn"  
>  c'title1$="Weekly Sales"  
>  c'xAxisTitle$="Day"  
>  c'yAxisTitle$="Sales Amounts in $1000's"  
>  c'rangemax=10  
>  !  
>  ! Load the chart data  
>  c'sep$=","  
>  salesData$="Tom=1,2,3,4,5,6,7;Dick=2,4,6,3,5,7,9;Harry=5,4,7,6,8,7,2;" ! sample data  
>  c'load(salesData$)  
>  c'pointText$="Sun,Mon,Tue,Wed,Thu,Fri,Sat,"  
>  !  
>  ! Set the size (in pixels) of the html page and generate it  
>  imgWidth=600  
>  imgHeight=400  
>  html$=c'HTML_Page$(imgWidth,imgHeight)  
>  !  
>  ! Finished with the object  
>  drop object c  
>  !  
>  ! Create a temporary serial file and load it with the code for the html page  
>  serial "chart.htm",err=*next  
>  open purge (hfn,isz=-1,err=Done)"chart.htm"  
>  htmlfile$=pth(lfo)  
>  write record (lfo)html$  
>  close (lfo)  
>  !  
>  ! Set the name for the image file, including image suffix (e.g. .png,.gif,.jpg)  
>  imgPath$="chart.png"  
>  !  
>  ! Call the utility to generate the image  
>  call "*tools/htmlimage",err=*next,htmlfile$,imgPath$,imgWidth,imgHeight  
>  !  
>  ! Erase the temporary html file  
>  erase htmlfile$,err=*next  
>  !  
>  system_help imgPath$ ! debug line - remove from live system  
>  !  
>  Done:  
>  end
