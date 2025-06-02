# Running on the Web

**Apache HTTP Interface** |   
---|---  
  
In addition to the standard PxPlus Web Server, the Web version of PxPlus supports an interface to the Apache HTTP Server. This interface provides most of the features and capabilities of the PxPlus Web Server but relies on an Apache HTTP front end; thus, a wider variety of Web services is supported.

An additional advantage to using the PxPlus Apache interface is that all non-PxPlus requests are serviced directly by the Apache server; therefore, downloads, image transfers, and basic HTML pages can be served up directly using the high-performance capabilities of the Apache HTTP server.

To use the Apache interface with PxPlus applications, all programs need to have an Apache recognized file suffix. The file suffix, generally _.pxp_ or _.pvp_ , is used by the Apache engine to determine how to process the file request.

When Apache receives a request for a file/page with one of these suffixes, it will run a CGI script that in turn launches PxPlus that will run the program specified. The CGI process takes all the Apache-style environment parameters, converts them into PxPlus global variables and then invokes the program identified in the Web request.

## See Also

[**Apache Configuration**](apache/config.md)  
[**Special File Prefixes**](apache/fileprefixes.md)  
[**Global Variables**](apache/globalvar.md)  
[**Compatibility with Web Server**](apache/compatibility.md)  
[**File Uploads/Multi-Part Forms**](apache/multipart.md)
