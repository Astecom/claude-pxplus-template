# Web Utilities

***WEB/WEBSERVICE** |  **_Web Service Utility_**  
---|---  
  
## Description

The ***web/webservice** utility may be called to display a **[Web Service](../PxPlus%20Web%20Services.md)** within a resizable dialog containing a **[*BROWSER](../utilities/browser.md)** control.

#### **Note:**  
This utility is **_not applicable_** when running WindX.

_(The *web/webservice utility was added in PxPlus 2018.)_

## Calling Sequence

**CALL "*web/webservice"** , _url_ _$, title$, servername$, errormsg$_

**_Where:_**

_url_ _$_ |  **_(Input)_** URL needed to produce the Web Service.  
  
If the Web Service has been previously defined using the **[Web Services Maintenance](../Web%20Services%20Maintenance.md)** utility, this _url_ _$_ value can be simplified to the following format:  
  
**id** =_serviceID_  
  
** _Where:_**  
  
_serviceID_ is the Service ID value used when defining the Web Service. Additional _type_ parameter values can be entered _(optional)_ , each separated by a space. **_Example:_** **id=_tasks &_type=_pdf_** Using this example, the Web Service ID is **_tasks_** , and the **_pdf_** output type overrides the default output type defined for this Web Service **_only_** if _Allow Override_ is selected. If _Allow Override_ is **_not_** selected, the **_pdf_** output type will **_not_** override the default output type. An HTML error will display when a widget for this Web Service is in the Dashboard or when this Web Service is run as a URL on a browser. The HTML error will indicate that this Web Service ID does not allow the override of the specified parameter(s).  
---|---  
_title$_ |  **_(Input)_** A string value to be used as the Windows dialog title bar.  
  
If the _url_ _$_ value has been defined to reference a Web Service ID value and this parameter is left blank, the **[Title](../Web%20Services%20Maintenance.htm#parameter)** from the Web Service definition will be used.   
_servername_ _$_ |  **_(Input)_** When referencing an existing Web Service ID, you may specify an alternate Web server to use (other than EZWeb running locally) by entering the _server_ and _port_ in the following format: _servername_ _$_ :_port_ #  
_errormesg_ _$_ |  **_(Output)_** If an error is encountered when attempting to display the Web Service, the program will load this variable with a textual description of the problem and then exit.  
  
## Examples

**_Example 1:_**

To display a Web Service defined with a Service ID of _QUERY_ and a Title of _Invoice Query_ using the **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** running locally:

> **CALL** "***web/webservice** ","id=QUERY"

**_Example 2:_**

To override the Title, check for errors and use a Web Server running on machine _SERVERNAME_ , port 8888:

> **CALL** "* **web/webservice** ","id=QUERY","Different Title","http://SERVERNAME:8888",_errormsg_ _$_

**_Example 3:_**

To display a Web page:

> **CALL** "* **web/webservice** ","http://www.pvxplus.com","PxPlus Web Page",_errormsg_ _$_

**_Example 4:_**

To display a **[Dashboard](../PxPlus%20Dashboard/Overview.md)**:

> **CALL** "***web/webservice** ","http://SERVERNAME:8888/services/dashboard","Dashboard Title",_errormsg_ _$_
