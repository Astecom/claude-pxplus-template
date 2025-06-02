# Webster+

**Using iNomads with Webster+**|   
---|---  
  
Webster+ and **[iNomads](../iNOMADS/iNOMADS%20Introduction.md)** use different Web server setups. For Webster+, your Web server will generally have the document root directory, **_docroot_** , in the directory where Webster+ is installed. For iNomads, the root directory will generally be ***plus/inomads**. Due to these differences, you will require different server configurations to allow these two facilities to co-exist.

To allow both Webster+ and iNomads to be used within the same application, you will need to have two unique Web server setups - one to run Webster+ and another for iNomads. These can run on different ports on the same server or be on different hosts. For example, you might run Webster+ on the standard HTTPS Port 443 and iNomads on Port 8888. Both could use SSL as long as the URL starts with HTTPS; however, for Webster+ functions, you will not have to specify the port number, as Port 443 is the default for HTTPS. For iNomads, the URL will need to include the port number (":8888" after the domain name).

If using **[EZWeb](../EZWebServer/EZweb%20Introduction.md)**, you simply need to launch two different EZWeb servers - one that specifies the Webster+ **_docroot_** directory in the third **-arg** parameter, and another that does not specify the starting directory, which results in the default of ***plus/inomads**. Typical shortcuts for these would be:

**Webster+:** |  ./pxplus.exe "*ezweb/server" -arg 443 server.pem "c:\webster\docroot"  
---|---  
**iNomads:** |  ./pxplus.exe "*ezweb/server" -arg 8888 server.pem  
  
For information on the Webster+ setup needed to run iNomads, see **[Webster+ Setup for iNomads](Using%20iNomads%20with%20Webster.htm#setup_inomads)**.

## Webster+ Configuration for iNomads

Webster+ has built-in support for launching iNomads transactions from **[Sidebar Links](Sidebar%20Links%20Maintenance.md)** and **[Menu Bar](Menu%20Maintenance.md)** entries. Both of these support an "iNomads" _Action_ where you can specify the iNomads transaction and other parameters in the _Associated Name_ field.

_(Support for using iNomads with Webster+ was added in PxPlus 2023.)_

**_Example:_**

In the Sidebar Link definition below, a new link, "iNomads Admin", was specified that will launch the iNomads transaction, _admin_. This was done by providing _txid_ _=admin_ in the _Associated Name_ column.

Along with the _txid_ , this field can contain any other parameters that you want to pass to iNomads. In this example, the special parameter _embed_ was added. Normally, when Webster+ spawns an iNomads process, it will be launched as a new page using the iNomads template. If you provide the keyword parameter _embed_ , the iNomads page will be presented within your current Webster+ template.

> The following example shows how the screen would look **_without_** the _embed_ option:

> If the _embed_ option is **_included_** , the iNomads transaction would appear inside a Webster+ template:

> #### **Note:**  
The _embed_ option can **_only_** be used if using a secure connection (i.e. https, **_not_** http).

##  Webster+ Setup for iNomads

To use the iNomads interface feature in Webster+, you need to first specify the URL required to launch iNomads. This is done in the _iNomads URL/port_ field on the **[Misc](General%20Configuration.htm#misc)** tab in the Webster+ Setup:

> If you are using the same domain and protocol (**http** vs. **https**) but on a different port, you only need to specify the port number to be used. Webster+ will automatically determine the domain and protocol to use.

#### **Note:**  
To support embedded iNomads Webster+ pages, Webster+ and iNomads should be on the same domain and use the same protocol (**http** vs. **https**).  
  
This makes it easier to just specify an iNomads port number instead of a URL.

If you do not specify the _iNomads URL/port_ , any attempt to launch an iNomads transaction from a link or menu item will result in the following error message:

> ## Accessing iNomads Using Webster+ Short Codes

The Webster+ short code **[[link]](Short%20Codes.htm#link)** allows you to indicate that you want to launch an iNomads transaction. This is done by specifying "**inomads:** " as the target for the link:

**_Example:_**

> [link inomads:txid=admin target=new]iNomads Admin[/link]

This link, if selected, would launch the iNomads transaction _admin_ in a new tab. In general, you should always launch iNomads transaction in a "new" tab; however, you can specify a target of "same", if desired.
