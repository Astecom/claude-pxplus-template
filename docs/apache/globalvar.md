# Apache HTTP Interface  
  
**Global Variables** |   
---|---  
  
The following Global variables are loaded by this interface:

**Global Variable** |  **Description** |  **Apache Environment Value**  
---|---|---  
**%args$ [ ]** |  This string array will contain all the arguments passed to the program from the original URL/Query request. This array is one based. |   
**%args** |  This numeric variable contains the number of arguments within the array %args$. |   
**%body_content$** |  This variable will contain the complete contents of the body of the request as received from the workstation. |  <raw input>  
**%content_length** |  This variable contains the length of %body_content$ (length of body text as received from the browser workstation). |  CONTENT_LENGTH  
**%content_type$** |  This variable will contain the type of contents received from the browser. |  CONTENT_TYPE  
**%cookie.rcv** |  Number of cookies that were received from the workstation with the request. |   
**%cookie.snd** |  This variable is set initially to zero and will be incremented by the *web/cookie to track the number of cookies that will be downloaded to the workstation. |   
**%document_root$** |  This will have the root directory as provided by the 'DocumentRoot' directive in the Apache configuration. Generally, this will be where the server files reside. **_Example:_** %DOCUMENT_ROOT$="/var/www/myweb/html" |  DOCUMENT_ROOT  
**%document_url$** |  Actual URL being processed. |  REDIRECT_URL  
**%http_accept$** |  This field will contain the MIME types that the requesting browser will accept according to the HTTP header. |  HTTP_ACCEPT  
**%http_accept_encoding$** |  This contains the types of MIME encoding that the requesting browser will accept according to the HTTP header. |  HTTP_ACCEPT_ENCODING  
**%http_accept_language$** |  This field will have the LANGUAGE types browser is requesting the server to supply. **_Example:_** %HTTP_ACCEPT_LANGUAGE$="en-us" |  HTTP_ACCEPT_LANGUAGE  
**%http_cookie$** |  This variable will contain the string defining the cookies received from the workstation. Each cookie will be _semi-colon_ separated. |  HTTP_COOKIE  
**%http_extraheaders** |  This variable can be loaded by the application with additional HTTP headers to be returned with the Web page. Each header should be separated by $0A$ or the SEP character. _(The %http_extraheaders variable was added in PxPlus v11.00.)_ |   
**%http_user_agent$** |  This field contains the type of browser or requesting program. |  HTTP_USER_AGENT  
**%lang$** |  Language code to use for application (this is hard-coded to ".en"). |   
**%path_translated$** |  Pathname to the target file that the request was looking for. |  PATH_TRANSLATED  
**%path_info$** |  This field contains the relative pathname. |  PATH_INFO  
**%print_fn** |  Logical file number to which your application should print (send) the HTML response. When not running in Debug mode and cookies disabled, this will be 0 _(zero)_ ; otherwise, it will point to a memory file that holds the output pending transmission to the workstation. |   
**%query_string$** |  Parameters following the "?" in the URL for this request. |  QUERY_STRING  
**%remote_ip$** |  Remote workstation/browser IP address. |  REMOTE_ADDR  
**%request_method$** |  Type of HTTP request being processed; i.e. "POST", "GET" or "HEAD". |  REQUEST_METHOD  
**%script_name$** |  This field will contain the file name of the CGI Script relative to DOCUMENT_ROOT directory. |  SCRIPT_NAME  
**%server_address$** |  Server IP address plus port number. |  SERVER_ADDR"+":"+"SERVER_PORT"  
**%server_ip$** |  Server IP address. |  SERVER_ADDR  
**%server_name$** |  Server name as extracted from the HTTP request. |  SERVER_NAME  
**%server_admin$** |  Email address for the system administrator as defined in the Apache configuration file. |  SERVER_ADMIN  
**%server_protocol$** |  Type and version of protocol being used for the request (HTTP/1.1, etc...). |  SERVER_PROTOCOL  
**%server_rootdir$** |  Document root directory. |   
**%server_software$** |  Name of the server and associate software as reported to the browser. |  SERVER_SOFTWARE
