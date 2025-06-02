# Introduction to Using PxPlus

**Web Services**|   
---|---  
  
Web Services is the exchange of information between applications using the standard Web protocol that is used for browsers. A consumer can obtain information provided on the Web such as the weather conditions and access information provided by other Web-based applications. A service provider can allow other applications to access your information, as well as accept requests for information from other applications. With PxPlus, you can be a consumer of Web services, a provider of services or both.

PxPlus provides a utility for submitting a request with data and returning the result:

> **"*plus/web/request"**

This utility supports secure (https://) and unsecure (http://) requests and also allows you to specify the content type, custom SSL certificate and additional headers. Extra headers are typically used for authorization information, cookies and the _From_ email name.

See **[Web Services](../../Web%20Services/Overview.md)** for information on making and submitting a Web request.

## PxPlus Web Services

PxPlus Web Services are Web-based services that are designed to take advantage of existing logic - **[NOMADS Queries](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**, **[NOMADS Charts](../../Charting/Introduction.md)**, **[Report Writer](../../Report%20Writer/Introduction.md)** and **[Data Dictionary](../../Data%20Dictionary/Introduction.md)**. PxPlus Web Services can work with **[PxPlus EZWeb Server](../../EZWebServer/EZweb%20Introduction.md)** or **[Apache Web Server](../../apache.md)** and can be run on a Web browser.

The **[Web Services Maintenance](../../Web%20Services%20Maintenance.md)** utility simplifies the creation of URLs for the different types of PxPlus Web Services by providing an easy-to-use interface for specifying parameter values based on the type.

PxPlus Web Services can be used with the **[PxPlus Dashboard](../../PxPlus%20Dashboard/Overview.md)** and the **[PxPlus Web IDE](../../PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)**. Both of these display a dashboard for viewing multiple sources of information at the same time. Once PxPlus Web Service records are created, you can customize dashboard contents by adding widgets based on these records. See **[Examples - Web Service Widgets](../../Examples%20Web%20Service%20Widgets.md)** for the different Web Service widgets that can be created.

You can also define PxPlus Web Services as tasks that can be added to a menu and launched from the **[IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** with the results displayed on a resizable panel.

See **[PxPlus Web Services](../../PxPlus%20Web%20Services.md)**.
