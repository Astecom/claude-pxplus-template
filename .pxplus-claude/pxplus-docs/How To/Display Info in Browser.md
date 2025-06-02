# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Display Information in a Browser**|   
---|---  
  
Some of the items created previously based on query definitions (see **[Display Lookup Table](Display%20Lookup%20Table.md)**, **[Create Charts](Create%20Charts.md)** and **[Supply Data to the PxPlus Report Writer](Supply%20Data%20to%20Rpt%20Writer.md)**) can be displayed in a Web browser.

Displaying these in a dashboard, for example, can be done in five steps:

1. |  You will need a Web server to interface with the browser so **[Launch EZWeb Server](../EZWebServer/EZweb%20Introduction.htm#Mark1)**. Take note of the Port Number you are using as this will be used in the next steps. In this example, you will launch locally on Port 8080.  
---|---  
2. |  Invoke **[Web Services Maintenance](../Web%20Services%20Maintenance.md)** to define a Service ID and parameters for the items to be displayed. In this example, Service IDs will be created for the _QClient_ query, the _Sales by Sales Rep_ chart definition and the _SalesRepClients.pvr_ report.  
3. |  Invoke **[Configure Dashboard](../PxPlus%20Dashboard/Overview.htm#configdashboard)** and edit **dashboard.json** to add the items to the dashboard options. Use the Service ID to set up the URL for the items. **_Example:_**

> { "ttl":"Client List",  
>  "url":"/services/service.pxp?id=CLIENT LIST"  
>  },

> 4. |  Invoke the **[PxPlus Dashboard](../PxPlus%20Dashboard/Overview.md)** in your browser. The syntax for loading the dashboard is **http://your.website.com/services/dashboard**. Since you are running locally on Port 8080, the URL for this example is **http://localhost:8080/services/dashboard/**. Once the dashboard is loaded, you can load the widgets.  
5. |  The sample PxPlus Dashboard comes with a PVX Plus Technologies widget displaying our Web site.

> You can move this down by clicking the Gear button in the top right of the browser window and turning off the **[Auto Arrange](../PxPlus%20Dashboard/Overview.htm#settings)** option. Then, click the **+** (_plus sign_) below the Gear button three times to add new widgets. Arrange and size them. Click the Gear button at the top of the widget to define the content of the widget. The _Contents_ list should now contain the Service IDs you created in Step 2. Select one of the IDs for each widget.

> When the content is assigned, click the _Save_ button, and the widget will be automatically populated.

> 
