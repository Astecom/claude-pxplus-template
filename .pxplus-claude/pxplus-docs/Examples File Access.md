# PxPlus Web Services  
  
**Examples - File Access Web Service**|   
---|---  
  
Below are examples of _File Access_ Web services that were defined using **[Web Services Maintenance](Web%20Services%20Maintenance.md)** to create URL-style read and write requests for accessing files.

_(Support for defining Web Services for file access was added in PxPlus 2022.)_

## Simple Read Requests

This is an example of a _File Access_ Web service defined for a simple read request.

The _Function_ parameter is set to _Read_ , and then the _Dir_ , _Dict_ and _Type_ parameters are defined. For _URL Order_ and the _Allow Override?_ check box, the default settings can be left as is. The enabling of OAuth2 _Security_ is optional.

> **_GET Request Format_**

The following format runs the _File Access_ Web service for a simple read request:

> GET "http://localhost:8080/do/_service_name_ /_table_ /_key_ "

**_Example:_**

> call "*plus\web\request","http://localhost:8080/do/read/states/ON ","",resp$,resphdr$

If desired, additional parameters, such as _kno_ , _beg_key_ , _end_key_ , and _filter_ , can be manually added.

## Full Read Request

The possible parameters for a full read request are _function_ , _dir_ , _dict_ , _table_ , _kno_ , _key_ , _beg_key_ , _end_key_ , _filter_ and _type_. Valid types are JSON, XML and CSV.

**_GET Request Format_**

The following format runs the _File Access_ Web service for a full read request:

> GET "http://localhost:8080/services/fileaccess.pxp?**function** =_read_ &**dir** =_data_path_ &**dict** =_dict_ &**table** =_table_name_ &**beg_key** =_key_ &**end_key** =_key_ &**filter** =_filter_ &**type** =_output_type_ "

**_Example:_**

> call "*plus\web\request","http://localhost:8080/services/fileaccess.pxp?function=read&dir=C%3A\Users\User\workspace\data&dict=providex.ddf&table=states&beg_key=NC&end_key=NY&filter= taxrate%3C5&type=JSON","",resp$,resphdr$

Using **Web Services Maintenance** , you can easily define a _File Access_ Web service for a read request. Set the _Function_ to _Read_ , and then define any parameters to pre-set. Specify any parameters to override by selecting the _Allow Override?_ check box. You must define this to enable OAuth2 security.

**_GET Request Format_**

> GET "http://localhost:8080/services/service.pxp?**id** =_service_name_ &**table** =_table_name_ &**beg_key** =_key_ &**end_key** =_key_ &**filter** =_filter_ "

**_Example:_**

> call "*plus\web\request","http://localhost:8080/services/service.pxp?id=read&table=states&kno=%231&key=New%20York&type=XML","",resp$,resphdr$

## Simple Write Requests

This is an example of a _File Access_ Web service defined for a simple write request.

The _Function_ parameter is set to _Write_ , and then the _Dir_ , _Dict_ and _Type_ parameters are defined. For _URL Order_ and the _Allow Override?_ check box, the default settings can be left as is. If you need to write to tables with external keys, set the _URL Order_ and _Allow Override?_ check box for the key parameter. The enabling of OAuth2 _Security_ is optional.

> **_POST Request Format_**

The following formats run the _File Access_ Web service for a simple write request:

> POST "http://localhost:8080/do/_service_name_ /_table_ /_data_ "

> POST "http://localhost:8080/do/_service_name_ /_table_ /_key_ /_data_ " **_(External Key Write)_**

**_Example:_**

> call "*plus\web\request;post","http://localhost:8080/do/write/states/NP%8ANew%20Province%8ACanada%8A13","",resp$,resphdr$

## Full Write Requests

**_POST Request Format_**

The following format, with the write request as the POST data, runs the _File Access_ Web service for a full write request (see **[Write Request Format](Examples%20File%20Access.htm#write_request)**):

> POST "http://localhost:8080/services/fileaccess.pxp?**function** =_write_ &**dir** =_data_path_ &**dict** =_dict_ "

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

**_Example:_**

> dim writeRequest$  
> writeRequest$["requests.1.type"]="insert"  
> writeRequest$["requests.1.table"]="states"  
> writeRequest$["requests.1.data.1.stateCode$"]="AY"  
> writeRequest$["requests.1.data.1.stateName$"]="Anywhere"  
> writeRequest$["requests.1.data.1.country$"]="Canada"  
> writeRequest$["requests.1.data.1.taxRate"]="6"  
> writeRequest$["requests.1.data.2.stateCode$"]="AW"  
> writeRequest$["requests.1.data.2.stateName$"]="A&W Burgers"  
> writeRequest$["requests.1.data.2.country$"]="Canada"  
> writeRequest$["requests.1.data.2.taxRate"]="20"  
> writeRequest$["requests.2.type"]="update"  
> writeRequest$["requests.2.table"]="states"  
> writeRequest$["requests.2.data.1.stateCode$"]="AW"  
> writeRequest$["requests.2.data.1.stateName$"]="A&W Burgers and Root Beer"  
> writeRequest$["requests.2.data.1.country$"]="Canada"  
> writeRequest$["requests.2.data.1.taxRate"]="18"  
> writeRequest$["requests.3.type"]="remove"  
> writeRequest$["requests.3.table"]="states"  
> writeRequest$["requests.3.key"]="AY"  
> json$=dim(list edit writeRequest${all})

> call "*plus\web\request","http://localhost:8080/services/fileaccess.pxp?function=write&dir=C%3A\Users\User\workspace\data&dict=providex.ddf",json$,resp$,resphdr$,"application/json","",""

Using **Web Services Maintenance** , you can easily define a _File Access_ Web service for a write request. Set the _Function_ to _Write_ , and then define any parameters to pre-set. Specify any parameters to override by selecting the _Allow Override?_ check box. You must define this to enable OAuth2 security.

**_POST Request Format_**

> POST "http://localhost:8080/services/service.pxp?id=write"

**_Example:_**

> call "*plus\web\request","http://localhost:8080/services/service.pxp?id=write",json$,resp$,resphdr$,"application/json","",""

## See Also

**[Web Services](Web%20Services/Overview.md)**  
**[Web Services Maintenance](Web%20Services%20Maintenance.md)**
