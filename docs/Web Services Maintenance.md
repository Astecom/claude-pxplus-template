# PxPlus Web Services

**Web Services Maintenance**|   
---|---  
  
The **Web Services Maintenance** utility simplifies the creation of URLs for **[PxPlus Web Services](PxPlus%20Web%20Services.md)**. Using this utility, you can create records and define the parameters for different types of Web services. Once Web service records are created, you can customize the **[PxPlus Dashboard](PxPlus%20Dashboard/Overview.md)** by adding widgets. See **[Adding and Maintaining a Widget](PxPlus%20Dashboard/Overview.htm#widget)**.

In addition, Web services can be run on a Web browser. See **[Running the Web Service on a Browser](Web%20Services%20Maintenance.htm#browser)**.

You can define Web services as tasks that can be added to a menu and launched from the IDE Main Launcher. See **[Task Definition](PxPlus%20IDE/IDE%20Main%20Launcher.htm#taskdefinition)**.

You can also define Web services that create REST-based URL-style read and write requests for file access. See **[Examples - File Access Web Service](Examples%20File%20Access.md)**.

_(The Web Services Maintenance utility was added in PxPlus 2016.)  
(Support for defining Web services as tasks was added in PxPlus 2017.)  
(The file access Web service was added in PxPlus 2022.)_

To invoke **Web Services Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher (Windows)](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _Web Services Maintenance_.  
From the **[PxPlus Web IDE](PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)** |  Select _Web Deployment_ > _Web Services Maintenance_.  
  
Below are examples of **Web Services Maintenance** with a _Query_ record and a _Chart_ record entered.

|    
**Web Services Maintenance -_Query_ record** |    
**Web Service Maintenance -_Chart_ record**  
---|---|---  
  
This window consists of the following:

_Settings_ |  **_Menu bar option_** that displays the following: |  _Force ID in URL_ |  When unchecked **_(default)_** , you can add widgets to the Dashboard by specifying the Web Service ID to use and the required parameters.

#### **Warning!**  
Leaving this option unchecked may allow users with knowledge of the system architecture to access data in files that they should not be allowed to access.

Selecting this option (shows a check mark) forces the use of the new Web Service ID for **_all_** widgets on the Dashboard. For added security, the _Allow Override_ checkbox should be **_unchecked_** for any parameters other than _Type_ , _Width_ and _Height_.  
---|---  
_Service ID_ |  Enter a unique alpha-numeric ID. Maximum length is 20 characters. When creating a record, type a new _Service ID_. To select an existing record, click the Query button _(binoculars)_ , use the browse buttons, or type the ID.  
_Copy Web Service_ |  **_(Available when an existing Web Service ID is selected)_** Button used to create a new Web Service ID by copying the settings from an existing Web Service ID. Once it is created, **_the new Web Service ID must be saved_** , as the Copy process does not do this. _(The Copy Web Service button was added in PxPlus 2020.)_  
_Service Type_ |  Select the type of Web service. This field is available when creating a new Service ID record. For an existing record, it can only be viewed. If the _Service Type_ needs to be modified for an existing record, you will need to delete that record using the _Delete_ button and then create a new record. Select from the list of available Service Types: |  _Query_ |  **_(Default)_** Displays a list containing data from one or more linked files. For information on queries, see **[Query Subsystem](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**.  
---|---  
_Chart_ |  Displays a defined chart (i.e. pie, bar, column, line). For information on charts, see **[Charting](Charting/Introduction.md)**.  
_Report_ |  Displays the contents of a defined Report Writer report. For information on reports, see **[Report Writer](Report%20Writer/Introduction.md)**.  
_Maintenance_ |  Generates an HTML form for user input with fields from the specified data table. For information on data dictionary definitions, see **[Data Dictionary](Data%20Dictionary/Introduction.md)**.  
  
As of PxPlus 2017, the appearance of **_Maintenance_** Web Service pages can be customized by specifying the settings to be applied in a user-defined **_*web/services/maint_style.css_** style sheet.  
_File Access_ |  Creates REST URL-style read and write requests for file access. See **[PxPlus Web Services](PxPlus%20Web%20Services.htm#file_access)** and **[Examples - File Access Web Service](Examples%20File%20Access.md)**.  
  
#### **Note:**  
The _Service Type_ determines the parameters that are loaded into the grid. See _Parameter_.

_(The File Access service type was added in PxPlus 2022.)_  
  
_Select Chart_ |  **_(Available when Service Type is Chart)_** When creating or editing a Web Service ID record with a **_Chart_** Service Type, select this button to invoke the **[Select a Chart Definition](Chart%20Images%20Generation/Schedule%20the%20Chart%20Generation.htm#addingachart)** window. This window presents a tree-view structure that lists all of the public query AutoChart definitions that exist at the current display level and lower, arranged by directory, screen library, query and chart definition. When a chart definition is selected, the values for the _Title_ , _Dir_ , _Lib_ , _Qry_ and _Chart_ parameters on the **Web Services Maintenance** window are automatically populated. Alternatively, a chart can be selected by manually entering the values for these parameters. _(The Select Chart button was added in PxPlus 2020.)_  
_Parameter_ |  Lists the standard parameters to be supplied to the Web service, based on the _Service Type_ selected. Not all of the parameters are mandatory. Hover the mouse pointer over a parameter in the grid to display a tooltip with a brief description of that parameter. A description of each parameter and the Service Type(s) to which it applies is provided below. To define a parameter as an expression, enter the value beginning with "**=** " (_equals sign_). **_User-defined parameters_** , such as parameters defined for a report, can be added in the blank row(s) at the bottom of the grid.

#### **Note:**  
User-defined parameters **_cannot_** be named the same as the standard parameters that exist for any of the service types (i.e. _Title, Dir, Lib, Dict, Table, Type_ , etc.).

|  _Title_ |  **_(Query, Chart, Report, Maintenance and File Access Types)_** Enter the text to use for the title if adding the current Web Service ID to the JSON file (see **[Add as an Option in JSON file](Web%20Services%20Maintenance.htm#json)**). Maximum length is 50 characters.

#### **Note:**  
_Title_ is required when updating to the JSON file.  
  
---|---  
_Function_ |  **_(File Access Type)_** Select whether the Web service will _Read_ or _Write_ to PxPlus files. _(The Function parameter was added in PxPlus 2022.)_  
_Dir_ |  **_(Query, Chart, Report, Maintenance and File Access Types)_** Path for the starting directory. May contain _Start_up_ program.  
_Lib_ |  **_(Query and Chart Types)_** Pathname for the NOMADS screen library.  
_Qry_ |  **_(Query and Chart Types)_** Query object name.  
_Type_ |  **_(Query, Chart, Report and File Access Types)_** Select the Output type: |  _Query_ |  CSV, JSON, XML, PDF, HTML, TABLE (**_Default:_** HTML)  
---|---  
_Chart_ |  PNG, HTML (**_Default:_** HTML)  
_Report_ |  CSV, HTML, PDF (**_Default:_** PDF)  
_File Access_ |  CSV, JSON, XML (**_Default:_** JSON)  
  
#### **Note:**  
For _Maintenance,_ the type is **_always_** HTML.

_(File Access was added in PxPlus 2022.)_  
  
_Sort_ |  **_(Query Type)_** Select the column to use for sorting the query output. If no sort column is specified, the query output will be sorted based on the **[Query Definition](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**. Columns defined as "hidden" in the query definition are not available as sort columns. To clear a selected _Sort_ column, select the "null" option from the drop down list. _(The Sort parameter was added in PxPlus 2019.)_  
_Descending_ |  **_(Query Type - Available when a Sort column is selected)_** When unchecked **_(default)_** , the query output will be sorted in Ascending order.

#### **Note:**  
The _Descending_ parameter will reset to the default (unchecked) if the _Qry_ or the _Sort_ parameter is changed.

_(The Descending parameter was added in PxPlus 2019.)_  
_Records_ |  **_(Query Type - Available when a Sort column is selected)_** Enter the number of records to display in the query output. If blank **_(default)_** , **_all_** records will be displayed. **_Example:_** A _Clients_ query with the _Sort_ parameter set to the _Year-to-Date Sales_ column, _Descending_ set to _On_ and _Records_ set to _20_ would result in a query output consisting of 20 records with the highest _Year-to-Date Sales_ values in descending order.

#### **Note:**  
The _Records_ parameter will reset to the default (blank) if the _Qry_ or the _Sort_ parameter is changed.

_(The Records parameter was added in PxPlus 2019.)_  
_Chart_ |  **_(Chart Type)_** Chart name.  
_Width_ |  **_(Chart Type)_** Width of the chart (in pixels). Defaults to fit widget.  
_Height_ |  **_(Chart Type)_** Height of the chart (in pixels). Defaults to fit widget.  
_Rpt_ |  **_(Report Type)_** Pathname for the report file.  
_Dict_ |  **_(Maintenance and File Access Types)_** Pathname for the data dictionary file, _providex.ddf_ _._  
_Table_ |  **_(Maintenance and File Access Types)_** Data table name in the data dictionary.  
_Key_Field_ |  **_(Maintenance Type)_** Key field in the data table.  
_Key_ |  **_(File Access Type)_** Enter the key of the record to read or write. This is usually left blank and the **[Allow Override?](Web%20Services%20Maintenance.htm#override)** check box is set to **_On_** to enable each request to specify the data to be written. _(The Key parameter was added in PxPlus 2022.)_  
_Data_ |  **_(File Access Type)_** Record data to write to the table. This is usually left blank and the **[Allow Override?](Web%20Services%20Maintenance.htm#override)** check box is set to **_On_** to enable each request to specify the data to be written. _(The Data parameter was added in PxPlus 2022.)_  
_Security_ |  **_(Query, Chart, Report, Maintenance and File Access Types)_** Security classification required for access via OAuth2 authentication. To prevent security being bypassed if this is set, the **[Force ID in URL](Web%20Services%20Maintenance.htm#settings)** option (the **Settings** menu) is also automatically set and the **[Allow Override?](Web%20Services%20Maintenance.htm#override)** check box for this field is locked. For information on how to access restricted PxPlus Web services, see **[Access OAuth2 Restricted Web Service](Access%20Oauth2%20Web%20Service.md)**.

#### **Note:**  
A Web service with security enabled cannot be used with the dashboard or as an IDE task.

_(OAuth2 security was added in PxPlus 2021.)_  
  
_Value_ |  Specify the parameter value by clicking the Browse button (where applicable) to locate the directory/file or by selecting from the drop-down list. Quotes are not required around pathnames. When creating a new record, the _Value_ cells for all the parameters, except _Title_ , are initially locked. As each parameter value is entered in grid row sequence, the following row becomes available for entry. When modifying an existing record, changing a parameter value resets and clears one or more other parameter values. **_Example:_** For a _Maintenance_ Service, changing the _Table_ value clears the _Key_Field_ value, while changing the _Dict_ value clears the _Table**and** Key_Field_ values.  
_URL Order_ |  Specify the order in which the URL sections of the request will be interpreted: "http://localhost:8080/do/service_name/_URL_Order_1_ /_URL_Order_2_ /_URL_Order_3_ / ..." **_Example:_** Suppose that a file access Web service is being defined with the _Function_ set to _Read_. The _Table_ parameter may be defined as URL Order 1, a user-defined parameter (e.g. kno) as URL Order 2, and the _Key_ parameter as URL Order 3. This order will be reflected in the URL when it is created: "http://localhost:8080/do/service_name/_table/kno/key_ " See **[Examples - File Access Web Service](Examples%20File%20Access.md)**. _(URL Order was added in PxPlus 2022.)_  
_Allow Override?_ |  When selected, the parameter can be overridden by modifying the URL. For details on modifying the URL, see **[Adding and Maintaining a Widget](PxPlus%20Dashboard/Overview.htm#widget)**. When unchecked **_(default)_** , the parameter is **_not_** overridden, even if a different value is entered in the URL. **_Example:_** **id=_tasks_ type=_pdf_** Using this example, the Web Service ID is **_tasks_** , and the **_pdf_** output type overrides the default output type defined for this record **_only_** if _Allow Override_ is selected. If _Allow Override_ is **_not_** selected, the **_pdf_** output type will **_not_** override the default output type. An HTML error will display when a widget for this Web service is in the Dashboard or when this Web service is run as a URL on a browser. The HTML error will indicate that this Web Service ID does not allow the override of the specified parameter(s).

#### **Note:**  
Other parameters can be overridden in the same manner.  
  
_Add as an Option in JSON file_ |  Select this check box to add the current Web Service ID to the JSON file. Specify the JSON file in the input control by clicking the Query button or typing the full pathname. When the Web Service ID record is written, the JSON file is updated, and a backup file is created. The new Web service record is added to the **["options"](PxPlus%20Dashboard/Overview.htm#options)** section of the JSON file. This information is used to load the _Contents_ drop box for adding and maintaining a Dashboard widget. See **[Adding and Maintaining a Widget](PxPlus%20Dashboard/Overview.htm#widget)**.

#### **Note:**  
Resetting the Dashboard (see [**Dashboard Settings**](PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#dashboardsettings)) reverts to the settings in the JSON file.  
  
_Test_ |  **_(Available only when the Web service record is written to file)_** Button used to test the Web service record. If the Web service record has been defined correctly, the output displays on a separate test panel, using the default **[EZWeb Server](EZWebServer/EZweb%20Introduction.md)** settings. When the _Test_ button is selected, EZWeb Server will automatically start (if not already running), using the default port and secure (HTTPS) settings specified in the **[Launch EZWeb Server](EZWebServer/EZweb%20Introduction.htm#Mark1)** window. If no default port has been assigned, a message will prompt you to define it. If you choose to define it, the **Launch EZWeb Server** window displays for entering a port. If you choose not to define it, you are returned to the **Web Service Maintenance** window with the current record still displayed.  
  
_(The ability to enable secure TLS/SSL mode for the EZWeb server was added in PxPlus 2022.)_ If any of the settings is changed on an existing record, selecting the _Test_ button automatically updates the record prior to displaying the test panel. This ensures that you are testing with the latest changes.

#### **Note:**  
The _Test_ button is **_not applicable_** when running WindX.

_(The Test button was added in PxPlus 2017.)_  
_Write_ |  Updates the current record. If the _Add as an Option in JSON file_ check box is selected and a JSON file is entered, the JSON file is updated. The previous version of the JSON file is retained with a _.bak_ extension.  
_Delete_ |  Removes the current record. If this record was previously updated to a JSON file, a warning message displays, and you are asked to confirm the deletion. If the record is deleted, you should also edit the JSON file to remove the record's information. To edit a JSON file, select _Configure Dashboard_ from the _Web Deployment_ menu on the **[PxPlus Web IDE](PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#webheader)** or from the _Web Deployment_ category on the **[IDE Main Launcher (Windows)](PxPlus%20IDE/IDE%20Main%20Launcher.md)**. Select the file to edit from the list of JSON files stored in the ***web/services/dashboard** directory.  
_Clear_ |  Clears the current record and does not exit the program.  
_Exit_ |  Cancels any changes to the current record and exits the program.  
  
##  Running the Web Service on a Browser

To run the Web service on a browser, the URL must be entered with the following syntax:

> **http://..site../services/service.pxp?id=**_service_**& type=**_output_

**_Where:_**

__ |  _service_ |  **[Service ID](Web%20Services%20Maintenance.htm#serviceid)** assigned to the Web service record.  
---|---|---  
__ |  _output_ |  **_(Optional)_** Valid output **[Type](Web%20Services%20Maintenance.htm#type)** for this Service ID. If **[Allow Override](Web%20Services%20Maintenance.htm#override)** is selected, this output type overrides the default defined for this record. If _Allow Override_ is **_not_** selected, the default output type is **_not_** overridden. An HTML error will display, indicating that the particular Web Service ID does not allow the override of specified parameter(s).  
  
For information on how to access restricted PxPlus Web services, see **[Access OAuth2 Restricted Web Service](Access%20Oauth2%20Web%20Service.md)**.

_(OAuth2 security was added in PxPlus 2021.)_

**_Example:_**

The following URL will run the Web service record _tasks_ and output to a _CSV_ file:

> http://..site../services/service.pxp?**_id=tasks &type=csv_**

#### **Note:**  
Only parameter values that are valid for the _Type_ of Web service can be entered.  
  
**_Example:_**  
  
If the Web service record is a _Query_ , you cannot enter **type=png** , as this applies only to a _Chart_.
