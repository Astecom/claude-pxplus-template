# 

**PxPlus Web Services**|   
---|---  
  
PxPlus 2014 provides a number of Web-based services that are designed to take advantage of existing application logic - **[NOMADS Queries](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**, **[NOMADS Charts](Charting/Introduction.md)**, **[Report Writer](Report%20Writer/Introduction.md)** and **[Data Dictionary](Data%20Dictionary/Introduction.md)**. These Web services can be used with the **[PxPlus Dashboard](PxPlus%20Dashboard/Overview.md)** and the **[PxPlus Web IDE](PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)** and can work with either **[Apache](apache.md)** or **[EZWeb](EZWebServer/EZweb%20Introduction.md)**. While **[iNomads](iNOMADS/iNOMADS%20Introduction.md)** allows existing graphical applications to run on the Web, PxPlus Web Services can be integrated with other Web-based applications.

PxPlus Web Services provide:

  * Data (XML, JSON, CSV) to Web applications. See **[Query Service](PxPlus%20Web%20Services.htm#query_service)**.
  * Reports on demand. See **[Report Writer Service](PxPlus%20Web%20Services.htm#rw_service)**.
  * Charts as images that can be directly embedded into pages. See **[Chart Service](PxPlus%20Web%20Services.htm#chart_service)**.
  * A file maintenance panel for user input. See **[Maintenance Service](PxPlus%20Web%20Services.htm#maintenance)**.
  * URL-style read and write requests for file access. See **[File Access Service](PxPlus%20Web%20Services.htm#file_access)**.



To access PxPlus Web Services, a Web server must be operating and configured to run PxPlus programs. PxPlus Web Services can run on either the PxPlus EZWeb Server or the Apache Web Server. See **[Web Server Configuration](Web%20Services/Overview.htm#configuration)**.

PxPlus Web Services are designed to conform to the **[REST](Web%20Services/Overview.htm#rest)** design principles.

OAuth2 security can be added to restrict access to PxPlus Web Services. First, OAuth2 clients must be defined using either **[OAuth2 Client Maintenance](NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Oauth2%20Client%20Maintenance.md)** or the **[OAuth2 Clients Object](Oauth2%20Clients%20Object.md)**. Next, access is restricted either via NOMADS security on a query or report or by security enabled in **[Web Services Maintenance](Web%20Services%20Maintenance.htm#security)**. For information on how to access restricted PxPlus Web Services, see **[Access OAuth2 Restricted Web Service](Access%20Oauth2%20Web%20Service.md)**.

#### **Note:**  
A Web service with security enabled cannot be used with the dashboard or as an IDE task.

_(OAuth2 security was added in PxPlus 2021.)_

The following links provide additional information about working with XML and JSON:

|  _XML Object_ |  **[*OBJ/XML](utilities/obj_xml.md)**  
---|---|---  
|  _System Functions_ |  **[DIM( ) Generate String/Get Array Size](functions/dim.md)**  
|  _Directives_ |  **[DIM Define Arrays and Strings](directives/dim.md)**  
  
##  Query Service

The following request runs the NOMADS **_Query (qry) Service_** to return data:

> **GET http://..site../services/qry.pxp?qry=query &lib=library**

**_Parameters:_**

__ |  _qry_ _=_ |  Name of the query panel in the NOMADS library.  
---|---|---  
__ |  _lib=_ |  Name of the NOMADS library.  
__ |  _type=xxx_ |  Output type (CSV, JSON, XML, HTML, PDF, TABLE) (**_Default_** is CSV.) For information on the TABLE output type, see **[Table Output for Query Web Service](Table%20Output%20for%20Query%20Web%20Service.md)**.  
__ |  _dir_ _=dddd_ |  Directory in which it is to run if not the document root directory.  
__ |  _sort_ |  Column to use for sorting the query output. If no sort column is specified, the query output will be sorted based on the **[Query Definition](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**. Columns defined as "hidden" in the query definition are not available as sort columns. _(The Sort parameter was added in PxPlus 2019.)_  
__ |  _descending_ |  Set to "1" or "Y" to sort the query output in _Descending_ order. To sort in _Ascending_ order, do not set this value at all, or set to "0", "N" or "null". This parameter is ignored unless the _sort_ parameter has been set. _(The Descending parameter was added in PxPlus 2019.)_  
__ |  _records=###_ |  Number of records to display in the query output. If "null", **_all_** records will be displayed. _(The Records parameter was added in PxPlus 2019.)_ **_Example:_** A _Clients_ query with the _Sort_ parameter set to the _Year-to-Date Sales_ column, _Descending_ set to _On_ and _Records_ set to _20_ would result in a query output consisting of 20 records with the highest Year-to-Date Sales values in descending order.  
  
A **[Web Services Maintenance](Web%20Services%20Maintenance.md)** utility has been added that simplifies the creation of a URL value.

_(The Web Services Maintenance utility was added in PxPlus 2016.)_

##  Chart Service

The following request runs the **_Chart Service_** to return a chart:

> **GET http://..site../services/chart.pxp?qry=query &lib=library&chart=name**

**_Parameters:_**

__ |  _qry_ _=_ |  Name of the query in the library.  
---|---|---  
__ |  _lib=_ |  Name of the NOMADS library.  
__ |  _chart=_ |  Name of the chart.  
__ |  _type=xxx_ |  Output type (PNG, HTML). ** _Default_** is PNG.  
__ |  _dir_ _=dddd_ |  Directory in which it is to run if not the document root directory.  
__ |  _animate_ |  Animate the chart. _(HTML only where possible)_  
__ |  _width=_ |  Width of the chart (in pixels).  _(If omitted, HTML is full screen resizable, PNG = 600.)_  
__ |  _height=_ |  Height of the chart (in pixels).  _(If omitted, HTML is full screen resizable, PNG = 3/4 of width.)_  
  
The following is a list of **_Chart Service parameters_** for non-query based charts (**chart=xxxx** not provided in URL):

__ |  _style=_ |  Chart style.  
---|---|---  
__ |  _data=_ |  Data to chart; e.g. "Name=val,val,val;Name=val,val,val" _(If not supplied, qry and lib then use query values.)_  
__ |  _max=_ |  Maximum value for chart.  
__ |  _labels=_ |  Comma-separated list of value names.  
__ |  _title1=_ |  Chart title.  
__ |  _xAxisTItle_ _=_ |  Chart X-Axis sub-title.  
__ |  _yAxisTitle_ _=_ |  Chart Y-Axis sub-title.  
  
A **[Web Services Maintenance](Web%20Services%20Maintenance.md)** utility has been added that simplifies the creation of a URL value.

_(The Web Services Maintenance utility was added in PxPlus 2016.)_

##  Report Writer Service

The following request runs the **_Report Writer (rpt) Service_** to return data:

> **GET http://..site../services/rpt.pxp?rpt=reportname**

**_Parameters:_**

__ |  _rpt_ _=_ |  Name of the report file.  
---|---|---  
__ |  _type=xxx_ |  Output type (PDF, HTML, CSV). ** _Default_** is PDF.  
__ |  _dir_ _=dddd_ |  Directory in which it is to run if not the document root directory.  
  
#### **Note:  
** Includes all report parameters as well.

|   
| | |   
  
A **[Web Services Maintenance](Web%20Services%20Maintenance.md)** utility has been added that simplifies the creation of a URL value.

_(The Web Services Maintenance utility was added in PxPlus 2016.)_

##  Maintenance Service

The following request runs the File **_Maintenance Service_** to generate a file maintenance panel with controls based on a specified Data Dictionary table where the primary key has only one segment:

_(The File Maintenance Service based on a data dictionary was added in PxPlus 2016.)_

> **GET http://..site../services/maint.pxp?dir=directory &dict=dictionary&table=tablename&key_field=keyfield**

**_Parameters:_**

|  _dir_ _=_ |  Path for the starting directory (may contain Start_up program).  
---|---|---  
|  _dict_ _=_ |  Pathname for the data dictionary file, _providex.ddf_ _._  
|  _table=_ |  Data table name in the data dictionary.  
|  _key_field_ _=_ |  Key field in the data table.  
  
A **[Web Services Maintenance](Web%20Services%20Maintenance.md)** utility has been added that simplifies the creation of a URL value.

_(The Web Services Maintenance utility was added in PxPlus 2016.)_

##  File Access Service

The following HTTP GET request runs the **_File Access Service_** for a read request:

> **GET "http://localhost:8080/services/fileaccess.pxp?function=read &dir=data_path&dict=dict&table=table_name&beg_key=key&end_key=key&filter=filter&type=output_type"**

The following HTTP POST request, with the write request as the POST data, runs the **_File Access Service_** for a write request (see **[Write Request Format](PxPlus%20Web%20Services.htm#write_request)**):

> **POST "http://localhost:8080/services/fileaccess.pxp?function=write &dir=data_path&dict=dict"**

**_Parameters:_**

|  _function=_ |  Either _Read_ or _Write_.  
---|---|---  
|  _dir_ _=_ |  Path for the starting directory (may contain Start_up program).  
|  _dict_ _=_ |  Pathname for the data dictionary file, _providex.ddf_ _._  
|  _table=_ |  Data table name in the data dictionary.  
|  _kno_ _=_ |  Key name or number. If a key number, use format **#**_num_ (i.e. #0 for the primary key, #1 for the first alternate key, etc.). Only used for read requests and is optional. If omitted, defaults to #0 (primary key).  
|  _key=_ |  Key of the record. Optional for read requests, and if a key range or filter is specified, then the key is not needed. For write requests, the key is used only for tables with an external key.  
|  _beg_key_ _=_ |  Starting key of a range of records to read. String expression. Multiple colon-separated segments may be specified, if needed. Only used for read requests and is optional.  
|  _end_key_ _=_ |  Ending key of a range of records to read. String expression. Multiple colon-separated segments may be specified, if needed. Only used for read requests and is optional.  
|  _filter=_ |  Condition must return true or false. If a record makes the condition true, then the record is read. If the record makes the condition false, then it is not read. Usually, field name variables are used in the condition to accomplish this; e.g. taxRate>10 would only read records with a tax rate higher than 10% from a table that includes a numeric field called taxRate. Numeric or string expressions are supported. Only used for read requests and is optional.  
|  _type=_ |  Output type. Only used for read requests. Can be JSON, XML and CSV. If omitted, defaults to JSON.  
  
#### **Note:**  
One or more of the following arguments must be included in a read request: _key_ , _beg_key_ , _end_key_ or _filter_. If a _key_ argument is specified, then no _beg_key_ , _end_key_ or _filter_ argument is accepted. If no _key_ argument is specified, then you must specify one or more _beg_key_ , _end_key_ or _filter_ arguments.

**_Write Request Format_**

For POST request data, the valid request types are Insert, Update and Remove. The request can be in JSON or XML:

> **_JSON:_**

> { "requests":[  
>  {"type":"_insert_ "|"_remove_ "|"_update_ ",  
>  "table":"_table_name_ ",  
>  "key":"_key_data_ ", (Optional. Required only for tables with an external key.)  
>  "data":[  
>  {"_field_name_ ":"_field_data_ ",  
>  (All fields from the table are included here.)  
>  ]  
>  }, (Multiple requests can be included. A comma is required only if there is another request.)  
>  ]  
>  }

> **_XML:_**

> <root>  
>  <requests>  
>  <request>  
>  <type>_insert_ |_remove_ |_update_ </type>  
>  <table>_tablename_ </table>  
>  <key>_key_data_ </key> (Optional. Required only for tables with an external key.)  
>  <data>  
>  <_field_name_ >_field_data_ </_field_name_ >  
>  (All fields from the table are included here.)  
>  </data>  
>  </request>  
>  (Multiple requests can be included.)  
>  </requests>  
>  </root>

The **[Web Services Maintenance](Web%20Services%20Maintenance.md)** utility simplifies the creation of URL-style read and write requests for accessing files.

See **[Examples - File Access Web Service](Examples%20File%20Access.md)**.

_(The file access Web Service was added in PxPlus 2022.)_
