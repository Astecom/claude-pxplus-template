# Running on the Web

**Web Services**|   
---|---  
  
**_Web Services_** is the exchange of information between applications using the standard Web protocol for browsers. As a _consumer_ , you can obtain information provided on the Web such as the weather conditions and access information provided by other Web-based applications. As a _service provider_ , you can allow other applications to access your information and accept requests for information from other applications. With PxPlus, you can be a consumer of Web services, a provider of services or both.

Refer to the information below on Web requests, using the PxPlus utility **"*plus/web/request"** for **[Submitting a Web Request](Overview.htm#submitting)**, and **[oAuth2 Authorization](Overview.htm#oauth2)**.

## Web Requests

Web messages (HTTP/HTTPS) have two main components: a **_header_** that describes the message and a **_body_** that contains the message. The header consists of simple concise text lines of **Keyword: Value** and primarily defines content size, type, source and destination.

The processing of Web requests begins with a URL:

> **http://**_target-system-name**/** target...**?** parameters_

**_Where:_**

> _target_ __ can be either a physical file or a process/program.

The two basic types of requests are:

|  **GET** Request |  Requests the contents of a _target_ from the server  
---|---|---  
|  **POST** Request |  Sends some data (i.e. a form) to a specific target on the server  
  
**_Example:_**

The following is an example of a Web request:

**_URL:_**

> **http://www.pvxplus.com/pgsrvr.pvp?pg=products**

A request is sent to the system **www.pvxplus.com**.

The request sent is a **GET** of the file **pgsrvr.pvp**.

The server assesses the request to determine the action that is needed; i.e. whether it must send back the contents of the file or run the file and return its results. In this example, the **.pvp** tells the server to run the file.

When running the file, the target will be passed the parameters **pg=products**.

The result of what the program outputs is displayed by the browser.

##  REST

**REST** (Representational State Transfer) is a set of commonly used design principles for Web services that adheres to the following fundamental design requirements:

  * Exchanges must be stateless, which means that no information or state must remain on the server between requests.
  * Requests should be cacheable.
  * Requests should include any required metadata.



The criteria behind using REST design is to avoid using parameters. REST requests should expose a directory-like structure in URI (Uniform Resource Identifier).

**_Example:_**

Below is an example of how this can be done via the Apache Web Server by configuring aliases to map:

> **http://yoursite.com/services/qry.pxp?lib=xxx &panel=yyy&type=HTML**

> _to_

> **http://yoursite.com/services/query/xxx/yyy/html**

**[PxPlus Web Services](../PxPlus%20Web%20Services.md)** are designed to conform to the REST design principles.

##  Submitting a Web Request

PxPlus provides the following utility for submitting a request with data and returning the result:

> **"*plus/web/request"**

The ***plus/web/request** utility supports secure (HTTPS://) and unsecure (HTTP://) requests. It uses HTTP version 1.1 protocol to make Web requests and receive responses. If necessary, ***plus/web/request** can be forced to use HTTP version 1.0 protocol by defining the global variable **%web_request_http_ver$** as "1.0".

_(Support for the use of HTTP version 1.1 protocol was added in PxPlus 2021.)_

#### **Note:**  
By default, the user agent used by ***plus/web/request** will be the same as if the request came from a Windows version of Google Chrome with the version of PxPlus appended to it. This user agent can be overridden with a preferred user agent by including a user agent header in the _extrahdrs_ _$_ argument of a ***plus/web/request** call. See **[Calling Sequence](Overview.htm#call)**.  
  
**_Example:_**  
  
_extrahdr_ _$_ ="User-Agent: MyApp/1.00.0000"  
  
_(Support for overriding the user agent was added in PxPlus 2021.)_

The default request is a **GET** if no data is provided; otherwise, a **POST** is used. The following eight entry points for additional request types are available: **GET** , **POST** , **DELETE** , **PUT** , **TRACE** , **OPTIONS** , **PATCH** and **HEAD**. This utility also allows you to specify the content type, custom SSL certificate and additional headers.

**_Calling Sequence:_**

> **CALL"*plus/web/request"** , _url_ _$, postdata$, recvdata$, recvhdr$, mimetype$, certificate$, extrahdrs$, method$, timeout_

**_Where:_**

|  _url_ _$_ |  Specifies target server and if secure or non-secure  
---|---|---  
|  _postdata_ _$_ |  Data to send to the server  
|  _recvdata_ _$_ |  String variable to receive response  
|  _recvhdr_ _$_ |  Header of response received  
|  _mimetype_ _$_ |  Optional content type of data  
|  _certificate$_ |  Optional path of certificate, if needed  
|  _extrahdrs_ _$_ |  Optional additional headers to include on send  
|  _method$_ |  HTTP request method  
|  _timeout_ |  Timeout value (if not provided, defaults to 15 seconds)  
  
_(The timeout option was added in PxPlus 2020.)_

The _header_ describes the message and contains information about the transmission. The **"*plus/web/request"** utility includes the use of extra headers, which are typically used for authorization information, cookies and the _From_ __ email name. Extra headers can also be used to include an _if-modified-since_ request, which allows the Web service to send data if it has changed; otherwise, it will return an error 304.

UNIX/Linux provides the **'curl'** command that allows you to make Web requests from a Command line. A typical **'curl'** command line would look as follows:

> **curl** https://instance_name.salesforce.com/services/data/v31.0/-H 'Authorization: Bearer sessionID' d client=123456 >Respfile

Compare this to using a ***plus/web/request** :

> CALL "*plus/web/request",  
>  "https://instance_name.salesforce.com/services/data/v31.0/","client=123456", Resp$,Hdr$,"","","Authorization: Bearer sessionID"

##  Web Server Configuration

To access **[PxPlus Web Services](../PxPlus%20Web%20Services.md)**, a Web server must be operating and configured to run PxPlus programs. PxPlus Web Services can run on either the PxPlus EZWeb Server or the Apache Web Server.

**_PxPlus EZWeb Server_**

The PxPlus EZWeb Server handles Web Services by default without additional configuration. See **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)**.

**_Apache Web Server_**

The Apache Web Server must first be configured to run PxPlus programs. See **[Apache Interface](../apache/config.md)** for instructions on configuring Apache.

The next step is to configure the Apache Web Server to handle PxPlus Web Services by adding the following lines to the **httpd.conf** file:

#### **Note:  
** The path to PxPlus should be substituted with the actual path to PxPlus on the server.

> #uncomment out this line  
> LoadModule rewrite_module modules/mod_rewrite.so  
>   
> SetEnv TEMP /tmp  
> SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1  
>   
>  Alias /services/rgraph/ "/pxplus/lib/_plus/inomads/add-ons/charts/rgraph/"   
>  <Directory "/pxplus/lib/_plus/inomads/add-ons/charts/rgraph/">  
>  Options Indexes FollowSymLinks  
> AllowOverride None  
>  # Use line below for Apache 2.4 and later  
>  Require all granted  
>  # Use next 3 lines below for Apache 2.2 and earlier  
>  # Order allow,deny  
>  # Allow from all  
>  # DirectoryIndex index.html  
>  </Directory>  
>   
>  Alias /services/ "/pxplus/lib/_web/services/"   
>  <Directory "/pxplus/lib/_web/services/">  
>  Options Indexes FollowSymLinks  
> AllowOverride None  
>  # Use line below for Apache 2.4 and later  
>  Require all granted  
>  # Use next 3 lines below for Apache 2.2 and earlier  
>  # Order allow,deny  
>  # Allow from all  
>  # DirectoryIndex index.html  
>  </Directory>  
>   
> RewriteEngine On  
> RewriteRule "/do/([^/]+)/(.*)" "/services/do.pxp?id=$1&args=$2" [B,PT]

## oAuth2 Authorization

The "***obj/oauth2** " object performs oAuth2 authorization with third-party Web services. It allows you to get authorized with Web services, such as Google, Salesforce or any Web service that uses oAuth2 authorization.

You set up a UserID/Client with the Web service provider. They will provide you with a Client ID and a secret code, as well as two URLs: one to the Authorization server, and one to the Token server. Once you have this information, the process consists of two stages:

> The **_First_** stage is to have the user grant your application (based on Client ID and secret code) access to an account of the provider.

> The **_Second_** stage is where you can access the user data from the server.

You can use the PVX Plus hosted oAuth2 agent or self-host the oAuth2 agent if you want to avoid relying on the PVX Plus servers being up.

See **[*OBJ/OAUTH2](../utilities/obj_oauth2.md)** object.

_(Support for self-hosting the oAuth2 agent was added in PxPlus 2023.)_

**_Example:_**

> ! This is an example of doing a fill authorization  
>  clientID$="this_should_be_your_client_id"  
>  clientSecret$="this_should_be_your_client_secret"  
>  !  
> ! Init oAuth2 object  
>  oAuth2=new("*obj/oauth2")  
>  oAuth2'Service$="salesforce"  
>  oAuth2'client_id$=clientID$  
>  oAuth2'client_secret$=clientSecret$  
>  !  
>  oAuth2'Enable_Certification("Do you consent to allow access of your Salesforce account to example app?")  
>  !  
>  ! Wait a little for it to process  
>  wait 1  
>  !  
> ! Get user logon URL  
>  url$=oAuth2'Get_Authorization_URL$()  
>  !  
> ! Open login URL in users default browser  
>  system_helpurl$  
>  !  
> ! Wait for user to complete sign-in and allow us access  
>  input "Press any key to continue after logging into account and allowing PxPlus access:",*;  
>  print ""  
>  !  
>  oAuth2'Get_Access_token() ! Gets a short lived token  
>  !  
> ! Save the refresh token  
>  serial "token",err=*next  
>  open purge (hfn)"token"  
>  print (lfo)oAuth2'Refresh_token$  
>  close (lfo)  
>  ! Set this into header for all subsequent requests  
>  extrahdr$="Authorization: Bearer "+oAuth2'Access_token$  
>  ! Response ALSO included which server has users data  
>  dim oAuth2$  
>  dim load oAuth2${all}=oAuth2'jsonData$  
>  ! So we need to derive the system that has the user data  
>  base_url$=oAuth2$["instance_url"]+"/services/data/v30.0"  
>  drop object oAuth2 ! Done with this object  
>  ! So now let us run a query  
>  q$="SELECT NAME FROM Account"  
>  url$=base_url$+"/query/?q="+cvs(q$,"ASCII:URL")  
>  call "*plus/web/request",url$,"",resp$,resphdr$,"","",extrahdr$  
>  dim json$  
>  dim load json${all}=resp$  
>  print "Formatted reply:",'LF',dim(list edit json${all})

## See Also

**[PxPlus Web Services](../PxPlus%20Web%20Services.md)**
