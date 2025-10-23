# Web Server Reference  
  
***WEB/COOKIE** |  **_Set, Send and Retrieve Cookies_**  
---|---  
  
## Description

The PxPlus Web Server ***web/cookie** utility can be used to **SET** and/or **GET** cookies. Each cookie is a VARIABLE=DATA pair with return characteristics (path to match, domain, expiry and secure). Although Web Server requests are separate and unrelated and cannot share variables or data on the server, you can get around this by using cookies to pass data and variables to the browser, which, in turn, can send that information back for different requests.

When you SET a cookie, it is included in the header, along with your data, and sent back to the browser. The return characteristics determine when or if the browser will return the cookie with a request. All cookie parameters are cleared when the task is complete.

**_Format 1:_ CALL "*web/cookie;GET"**,_number,name$,data_ _$_

Use Format 1 to retrieve a cookie. Your CALL should include three arguments. You must pass the number of the cookie (1 to **[%cookie.rcv](../PxPlus%20Web%20Server%20Variables/Overview.htm#cookie_rcv)**). The program will return the _name$_ and the _data$_.

**_Format 2:_ CALL "*web/cookie;SET"**,_name$,data$,path$,expires$,domain_ _$_**[** ,_secure_**]**

Use Format 2 to create and send a cookie. Your CALL should include five arguments. A sixth parameter can be set to make sure the TCP connection is secure.

**** |  _name$_ |  Name of the cookie  
---|---|---  
**** |  _data$_ |  Data to send to the browser  
**** |  _path$_ |  Your file path criteria for matching the URL's path  
**** |  _expires$_ |  Cookie's expiry date and/or time  
**** |  _domain$_ |  Domain name of your web site  
|  _secure_ |  Indicates if the cookie should only be sent on **_secure_** connections  
  
If the conditions warrant it, the browser will return the cookie to the server when your user requests specific web pages. For instance, you can use SET to assign the user's LOGIN ID/PASSWORD to a cookie so that the user only has to enter it once. With cookies, you can also create shopping cart style applications that "remember" the items and quantities chosen.

Each VARIABLE=DATA pair is 1 cookie. You can SET up to 300 cookies, each with a size limit of 4K. The browser will return as many as it believes match a given request.

#### **Note:**  
The internal variable **[%cookie.snd](../PxPlus%20Web%20Server%20Variables/Overview.htm#cookie_snd)** is incremented for each cookie you SET. Cookies are stored in strings in temporary variables as _%cookie.nnn_ _$**where** nnn_ is the cookie number.

## Format

***web/cookie EntryPoints**

  1. **_Return:_** **EntryPoint** **=GET CALL "*web/cookie;GET",**_number,name$,data_ _$_
  2. **_Send:_** **EntryPoint** **=SET CALL "*web/cookie;SET",**_name$,data$,path$,expires$,domain_ _$_**[,**_secure_**]**



**_Where:_**

_number_ |  Ordinal number of the given cookie (Range: 1 to 300, Size Limit = 4K each).

#### **Note:**  
The Web Server sets **[%cookie.rcv](../PxPlus%20Web%20Server%20Variables/Overview.htm#cookie_rcv)** to the total number of cookies received or 0 (zero) for no cookies received.  
  
---|---  
_name$_ |  Name of the cookie (like a variable name).  
_data$_ |  Data in the given cookie.  
_path$_ |  The minimum match you want with a file path before the cookie is sent back. (If no match is found, the cookie is not sent back from the browser.) The _path$_ should be followed by a trailing **/**  _(forward slash)_. **_Example:_** The **/**  _(forward slash)_ alone would match any URL on your Web site.  
  
_/sales/orders/_ would match _/sales/orders/myapp_ and _/sales/orders_ but would **_not_** match _/sales_ or _/support/orders_.  
_expires$_ |  _expires_ _$_ is the date (and/or time) that the cookie will expire. See **["expires$" Parameter](Set,%20Send%20and%20Retrieve%20Cookies.htm#expires)** below for a list of acceptable values you can assign.  
_domain$_ |  _domain_ _$_ is the domain name for your host site. The cookie is only valid for the current domain/host. If _domain$ >_"", then it must include a minimum of 2 periods. **_Example:_** _domain_ _$_ =".pvxplus.com" is a cookie that is valid for any _path$_ in the pvxplus.com domain.  
_domain_ _$_ ="proxy.pvxplus.com" is a cookie that is only valid for any _path$_ on the "proxy" machine in the pvxplus.com domain. If _domain$_**=** "", then the cookie will only be valid for the current browser session. It will be cleared if the user moves to another site.  
_secure_ |  If you include this parameter, the cookie will only be returned if the TCP connection is secure. The Boolean values are:  
  
=1 (one) if you only want the cookie returned when the connection is secure.  
  
=0 (zero) otherwise. The value is 0 (zero) if you omit secure, as in the following: **_Example:_** **CALL "*web/cookie;SET"** ,_name$,data$,path$,expires$,domain_ _$_  
  
## "expires$" Parameter

The table below lists valid values for the _expires$_ parameter in the ***web/cookie;SET** sub-routine.

**If:** |  **Then:**  
---|---  
_expires$=""_ |  No expiry date is sent and the cookie will expire at the end of the current browser session.  
_expires$="0"_ |  The date/time equivalent of RIGHT NOW will be sent.  
_expires$="YYYYMMDDHHMMSS"_ |  Expiry is set to a specific date. The date must be in the format YYYYMMDDHHMMSS. **_Example:_**   
  
expires$="19990709143030" (HH is in 24-hour time)  
_expires$="+nnnn"_**  
  
_or_** _  
  
expires$="-nnnn"_ |  The cookie will expire NOW plus or minus _nnnn_ time units. The default time unit is seconds, but you can append an alpha code to change or override the current setting (Y = Years; D = Days; H = Hours; M = Minutes, S = Seconds). **_Example:  
_**_  
expires$="_ +1Y" sets an expiry 1 year from NOW   
_expires$="_ +30D" sets an expiry 30 days from NOW   
_expires$="_ +5H" sets an expiry 5 hours from NOW
