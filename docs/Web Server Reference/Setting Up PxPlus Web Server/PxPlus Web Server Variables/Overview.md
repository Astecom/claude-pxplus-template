# Web Server Reference  
  
**PxPlus Web Server Variables** |  **__**  
---|---  
  
The PxPlus Web Server gives you access in your programs to some of its own variables. These variables are created or filled by the Web Server and/or with information received from the browser. A leading **%**  _(percent sign)_ indicates that the variable is global.

**Web Server Variable** |  **Value(s)**  
---|---  
**Warning** |  The following variables are reserved for exclusive use by the PxPlus Web Server for special file channel values.

#### **Important Note:  
DO NOT** use these file channels:  
  
%mime   
%tmpl   
%hits   
%serv   
%TCP_FN

You can use **%body_buff** in your applications but for READing only. See **%body_buff** below.  
**%allow$** |  Allowed methods recognized by the browser.  
**%args$[%args]** |  The **%args$[ ]** array contains the command line arguments passed to the task handler by the URL request, with **%args** (number of arguments passed) ranging from 1 to the total number of arguments passed.  
**%authorization$** |  USERID/PASSWORD screen if passed from the browser. Typically encoded in Base64.  
**%body_buff** |  The Web Server uses this file channel for an incoming request's body. It converts the first 32000 bytes into variables and ignores the rest, but leaves all of the body in **%body_buff** so that it is available if you need it. This is a *memory* file with a maximum record size of 8192 bytes. Data is blocked into more than one data record (beginning IND=0 to IND=n). You can use **%body_buff** in your applications, but it should only be READ from. The file whose channel is in the numeric variable **%body_buff** contains any body information sent in a POST request. If your POST sends more information than will fit in a single PxPlus STRING variable, then you must retrieve it manually from the **%body_buff** channel.

#### **Note:   
%content_type$** will tell you the mime type of the body content. **%content_length** will tell you the body's total length (number of bytes).

**_Example:_** READ RECORD(%BODY_BUFF,IND=0)A$ !Reads first block  
READ RECORD(%BODY_BUFF,END=DONE) !Reads remaining blocks  
**%cgi$** |  Contains a compiled IOLIST of all the variable names passed.  
**%content_encoding$** |  Data encoding if the browser pre-encodes the data.  
**%content_filename$** |  If you set this to a file name (no path), the Web Server adds a Content-Disposition header to the outgoing data stream. This notifies the browser to "Save As" the file name you supply.

#### **Note:   
**You can use this to send a PxPlus program to a browser without running it. (A typical link to a browser page would RUN a PxPlus program if clicked on.)  
  
**%content_length** |  Length of the content received. This variable will contain the length of the response if it is provided by the browser. You do not need to set this when your PxPlus application finishes. The task handler will calculate it, based on the data output and any automatic translation done to send your data back.  
**%****content_type$** |  Content or mime type. If the browser sends a content type, the value is available to your PxPlus program. If your PxPlus application does not assign a **%content_type$** , the Web Server defaults to **text/html**. If your PxPlus application overrides the default **%content_type$** , then the Web Server will pass your value for the content type back to the browser. If the **%content_type$** begins with **"text/"** , then the Web Server automatically performs any required end-of-line conversions.  
**%****cookie.rcv** |  Number of cookies received from the browser.  
**%****cookie.snd** |  Number of cookies you SET and send to the browser. The cookies are stored in strings of **%cookie.n$** , where _n_ is the cookie number.  
**%document_label$** |  The line label entry point for your program, if given in the URL; e.g. myprog;entry.  
**%document_root$** |  The Root directory for the request.  
**%document_uri$** |  The file name portion after the protocol and server in the URL request.

#### **Note:  
uri** is an acronym for Uniform Resource Indicator.  
  
**%****exit_code** |  Error status on exit. The task handler will set **%exit_code** to an appropriate value. The value is typically 200 ("OK") unless there is a problem (such as in situations where the task prematurely disconnects, or there is no data output). Valid codes include: 200 - OK  
201 - Created  
202 - Accepted  
204 - No Content  
300 - Multiple Choices  
301 - Moved Permanently  
302 - Moved Temporarily  
304 - Not Modified  
307 - Temporary Redirect  
400 - Bad Request  
401 - Unauthorized  
403 - Forbidden  
404 - Not Found  
500 - Internal Server Error  
501 - Not Implemented  
502 - Bad Gateway  
503 - Service Unavailable The Web Server returns an **_Error 403 Forbidden_** on browser requests for PxPlus data files (i.e. keyed, indexed). You can assign a value to **%exit_code** if you want to force the task handler to return a specific error code. For example, if you set %exit_code=401, the task handler will return an **_Error 401_** to the browser.  
**%****exit_include_html** |  Setting this variable, along with setting **[%exit_code](Overview.htm#exit_code)**, tells the Web Server that the output that has been output to **[%print_fn](Overview.htm#print_fn)** should be returned to the browser instead of the generic error message page. This is often used to return additional error information or JSON data providing details of the problem. _(The %exit_include_html variable was added in PxPlus 2021.)_  
**%from$** |  Source, if the browser sends a From.  
**%hit_counter** |  Current number of hits for your page, if any.  
**html_file** **$** |  Name of the HTML page you want *web/merge to evaluate and dynamically send to the **[%print_fn](Overview.htm#print_fn)** channel.  
**%http_accept$** |  Mime content types the browser will accept from you. */* means any content type.  
**%http_accept_encoding$** |  Any inline encoding or compression methods the browser has available for your use.  
**%http_accept_language$** |  Language that the browser wants you to send in.  
**%http_cookie$** |  The string of cookies received from the browser.  
**%http_extraheaders** |  This variable can be loaded by the application with additional HTTP headers to be returned with the Web page. Each header should be separated by $0A$ or the SEP character. _(The %http_extraheaders variable was added in PxPlus v11.00.)_  
**%http_referer$** |  Referral source, if the browser was pointed to your Web site by some other location. The name of the URL that originated the request.  
**%http_user_agent$** |  Details about the browser type connecting to you.  
**%ismas90** |  Value is 1 if using the Web Server inside Mas90's internet access module; otherwise, value is 0 (zero).  
**%lang$** |  The LANG file extension in use in PxPlus. (**_Default_** is **.en**.)  
**%new_location$** |  This is an internal variable set during a redirection request. It should be used only when the user's browser should go to another page automatically. When a browser makes a request for a URL, you can force the browser to "go somewhere else" or make another request for something else by setting **%new_location** to the URL you actually want the browser to request and by setting your **%exit_code=301** (see **[%exit_code](Overview.htm#exit_code)**). You must set both these values to force a browser to automatically generate a new request for the URL in **%new_location$**.  
**%path_translated$** |  The Root directory plus the file name portion of the URL requested, with delimiters based on the O/S on which the Web Server is currently running (the **\**  _backslash_ for Windows or the standard **/**  _forward slash_ for UNIX).  
**%****print_fn** |  The setting for the file channel that the Web Server uses as a standard output channel. In effect, the Web Server sets up a memory-resident logical file on the **%print_fn** channel. You dump your data into this file by using PRINT, WRITE and other output directives with **%print_fn** as the file channel and the Web Server transmits the contents for you (i.e. PRINT (%print_fn)data). The task handler will read the data in this example when your application is complete and send it back to the port monitor for transmission to the browser.

#### **Note:   
**Your PxPlus Web application should use ONLY this as the file channel for data that is sent to the browser.  
  
**%query_string$** |  The string of arguments following the file name in the URL.  
**%raw_next$** |  If set, **%raw_next** will add a NEXT button to the bottom of your **[%print_fn](Overview.htm#print_fn)** data if **%raw_text=1**. (**%raw_text$** should be set to the URL to which you wish the button to jump.)  
**%raw_next_lbl$** |  The text to appear on your "next" button. (**_Default_** is the word "next".)  
**%raw_text** |  **0** = Output to the browser as is.  
**1** = Wrap HTML header/body around output from the PxPlus application.  
**%raw_title$** |  If **%raw_text** is set, then **%raw_title$** will be the title used in the HTML generated around your **[%print_fn](Overview.htm#print_fn)** output.  
**%remote_ip$** |  IP address (or DNS name) of the browser.  
**%request_method$** |  HTTP request method (set to GET, HEAD or POST).  
**%server_name$** |  Name of your host, as supplied by the browser connecting to you; e.g. www.pvxplus.com.  
**%server_port** |  TCP socket number that the Web server is monitoring.  
**%server_protocol$** |  Set to **HTTP/1.0**.  
**%server_rootdir$** |  Default Root directory for the given server.  
**%server_software$** |  Name of the Web Server and version.  
**%smtp_gateway$** |  SMTP gateway you selected in your SMTP dialogue.  
**%smtp_socket** |  SMTP socket number you specified in your SMTP dialogue, prefixed by a **;**  _(semi-colon)_. (**_Default_** is **;25**.)  
**%tcp_fn** |  File channel that the task handler is using to talk to the port monitor.

#### **Warning!_  
_ DO NOT** perform any I/O on the **%tcp_fn** channel.  
  
**%time_offset** |  The offset to GMT time; e.g. =-500 (-5 hrs.) or =430 (+4 hrs. 30 minutes).  
  
#### **Note:**  
When you create PxPlus applications to service Web requests, the Web Server automatically CLOSEs any and all file channels upon completing your PxPlus program task, except for: (a) any files belonging to the Web Server itself, and (b) any files which were open when the Web Server launched (any files you OPENed in your START_UP).

Regular variables are destroyed automatically when your application exits.

Clear any GLOBAL variables you create in your application. Since the Web Server works by multiple-task handling, the values will not be available between tasks and therefore are useless as a method of passing information from page to page. (Use cookies to pass information from one request to another.) **DO NOT issue a START command**.
