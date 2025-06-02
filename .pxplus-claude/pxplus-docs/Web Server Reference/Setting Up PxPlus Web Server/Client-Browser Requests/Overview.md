# Web Server Reference

**Client/Browser Requests** |  **__**  
---|---  
  
The PxPlus Web Server addresses two forms of browser requests:

  * Requests to return file contents (e.g., web pages, data) **OR**
  * Requests to RUN your PxPlus programs to process data



Requests contain a header block terminated by a blank line and can also (optionally) contain a data block known as the body. Each line of information sent to or from a web server or browser ends in a CRLF terminator (i.e. carriage return plus line feed: $0D0A$).

## See Also

**[URL Request to GET a File](../URL%20Request%20to%20GET%20a%20File/Overview.md)  
[URL Request to Run a PxPlus Program](../URL%20Request%20to%20Run%20a%20PxPlus%20Program/Overview.md)  
[Merge Dynamic Data with HTML Templates (*web/merge)](../PxPlus%20Web%20Server%20Utilities/Merge%20Dynamic%20Data%20with%20HTML%20Templates.md)  
[Appendix - HTML Examples](../Appendix%20-%20HTML%20Examples/Overview.md)**

## Request Methods

Three methods or types of requests are described as follows:

**Method** |  **Description**  
---|---  
**GET** |  Most common method. Typically used for files and small CGI requests. It contains the name of the file being requested and (optionally) can include command line arguments or a short variable list. There is no body information, just a header. The size limit is typically about 100 characters.  
**POST** |  Typically used for data from forms or for large CGI requests. POSTS can contain body information in addition to the header block. Parameters (command line arguments, variables) are relegated to the body of the request.  
**HEAD** |  Typically used by a browser or URL validator to check the validity of a request without receiving data. HEAD requests are handled like GET requests, except that only the HTTP Header will be returned. No HTTP Body is actually sent.  
  
The main difference between the GET and POST methods is in the amount of information you want to pass in the request. Use the GET method for simple URL requests. There is a limit of about 100 characters when you are passing parameters (arguments, variables, etc.) in your URL request.

If you want to pass large amounts of information, use the POST method instead. Use the POST method in your HTML pages.

**_Example:_**  
  
In the example **Orders Web Page 1 - login.htm** in the section **[Appendix - HTML Examples](../Appendix%20-%20HTML%20Examples/Overview.md)**:  
  
<td><form method="POST" action="/orders/webord;logon">

## Request Examples

**_Example 1_** \- This example illustrates the GET method in a file request from MS Internet Explorer 5 (IE5):

> GET /mypage.htm HTTP/1.1   
>  Accept: application/vnd.ms-excel, application/msword, application/vnd.ms-powerpoint, image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, */*  
>  Accept-Language: en-us  
>  Accept-Encoding: gzip, deflate  
>  User-Agent: Mozilla/4.0 (compatible; MSIE 5.0b2; Windows 98) Host: 127.0.0.1  
>  Connection: Keep-Alive

**_Example 2_** \- This example is a URL request to GET a file:

> http://www.pvxplus.com:3000/support/home.htm
