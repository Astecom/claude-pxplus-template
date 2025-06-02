# PxPlus Web Services  
  
**Table Output for Query Web Service**|   
---|---  
  
With PxPlus 2016, you have the capability to return the data output for an existing query in a table format on a Web page. A new output type of TABLE has been added to the Query Service (qry.pxp) that returns an inner HTML for a table with <th> for the header and <td> for the data columns. For information on Web Services, see **[PxPlus Web Services](PxPlus%20Web%20Services.md)**.

Additional options are available for the TABLE output type:

__ |  _LIMIT=nnn_ |  Limits the number of rows  
---|---|---  
__ |  _HEADER=no_ |  Suppresses the column headers  
  
A simple JavaScript utility **(*web/services/pxplus.js**) is provided that contains a routine (**PlusQryTable**) for populating the table.

**_Calling Sequence:_**

> **PlusQryTable** (_QryName_ , _TableId_ , _InputId_ , _Options_ , _ServerURL_)

**_Where:_**

__ |  _QryName_ |  **_(Required)_** Name of the query used to populate the table  
---|---|---  
__ |  _TableId_ |  **_(Required)_** ID of the HTML table whose contents will be loaded from the Query data (including the header)  
__ |  _InputID_ |  **_(Optional)_** ID of the HTML INPUT field whose value will be passed as a Global variable to the query  
  
** _Example:_**  
  
'INVOICE' would set %INVOICE$ to the value in the HTML input whose ID was INVOICE.  
__ |  _Options_ |  **_(Optional)_** A string with additional options needed to run the query such as LIB=  
__ |  _ServerURL_ |  **_(Optional)_** URL to the server if not the same as the current server  
  
#### **Note:**  
Trailing optional fields may be omitted from the CALL. Interim optional fields should be passed as null or 0.

To add the JavaScript function, the HTML page must include a script load of the **/services/pxplus.js** source file using something similar to the following:

> <script src="/services/pxplus.js"></script>

**_Example:_**

INV_QRY is a query defined in the APP.EN directory. This query displays invoice information, and one of the columns (ClientId$) contains Client Code numbers. As a filter, the **Selection Logic** for the query (see **[Query Selection Criteria](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Selection%20Criteria.md)**) checks if a global variable (%ClientId$) is populated, and if so, the record is only included if ClientId$=%ClientId$.

> **_Sample file_ _TEST_Q.HTML:_**

> <html>  
>   
>  <head>  
>  <meta http-equiv="Content-Type"   
>  content="text/html; charset=iso-8859-1">  
>  <title>Qry Table load Sample HTML</title>  
>  </head>  
>   
>  <body>  
>   
>  <script src="/services/pxplus.js"></script>  
>   
>  <div onclick="PlusQryTable('INV_QRY', 'mytbl', null, 'lib=app.en');" style='text-decoration: underscore;'>Click to load all records</div>  
>   
>  Client ID: <input type='text' width=10 id="clientid" onchange="PlusQryTable('INV_QRY', 'mytbl', 'clientid', 'lib=app.en');" />  
>   
>  <br /><br />  
>   
>  <table width=50% border="1" cellpadding="0" cellspacing="0"  
>  id="mytbl">  
>  <tr>  
>  <td width="100%">&nbsp;</td>  
>  </tr>  
>  </table>  
>  </body>  
>  </html>

This sample HTML code demonstrates the use of the **PlusQryTable** routine in two different ways:

**_Method 1:_** |    
  
Clicking on the text _Click to load all records_ will populate the table _mytbl_ with the entire contents of the file, as illustrated below.

> ---|---  
**_Method 2:_** |  Entering a _Client ID_ number in the text field will populate the %ClientId$ variable, filtering the data by Client ID, as illustrated below.  
  
If you want to suppress the table header or limit the number of records returned, add the optional parameters to the options string passed to the **PlusQryTable** routine as follows:

> PlusQryTable('INV_QRY', 'mytbl', null, 'lib=app.en&header=no&limit=3')
