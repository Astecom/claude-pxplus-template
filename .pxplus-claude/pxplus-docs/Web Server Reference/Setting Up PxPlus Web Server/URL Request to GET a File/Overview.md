# Web Server Reference  
  
**URL Request to GET a File** |  **__**  
---|---  
  
## Format

**_URL Request:_** |  protocol://server**[** :socket**]** /filename.ext**[**?argument**[** &argument...**]]**  
---|---  
  
**_Where:_**

_protocol_ |  Applicable network protocol; e.g. http:// or ftp://.  
---|---  
_server_ |  Server name. Use an IP (Internet Protocol) address such as 127.0.0.1 or a DNS (domain name) such as www.pvxplus.com.  
_socket_ |  Optional TCP socket or port number (an integer preceded by a colon). Valid range: 1 to 65535. By default, all requests from a client are sent to TCP socket 80, unless you override the port number in your URL statement. To do this in any HTTP-compliant browser, include a **:**  _colon_ and the port number right after the server name. **_Example:_** The first URL below would default to TCP socket 80, and the second would connect with TCP socket 3000:  
  
http://www.pvxplus.com/support/home.htm   
http://www.pvxplus.com:3000/support/home.htm  
_filename.ext_ |  Item that the browser is requesting. This could be the name of:

  * An HTML page; e.g. myfile.htm
  * A directory (include a trailing forward slash)
  * A PxPlus program
  * Any file or any type (including a directory listing) that appears in the Web Server's root directory or subdirectories of the root directory

See **[URL Request to Run a PxPlus Program](../URL%20Request%20to%20Run%20a%20PxPlus%20Program/Overview.md)** and **[Appendix - HTML Examples](../Appendix%20-%20HTML%20Examples/Overview.md)**.  
_argument(s)_ |  Optional argument(s). If you include arguments:

  * Mark the start of a list of arguments with a leading **?**  _(question_  _mark)_.
  * You can use numeric variables, but they cannot have an **=**_equals sign_ or a **+**  _plus sign_ (i.e. encoded space). By default, the Web Server sets the value of a numeric (Boolean) variable to 1.
  * You can use string variables in variable=data pairs; e.g. data=abc+123. (The **+**  _plus sign_ represents an encoded space in the string. That is, abc+123 is the equivalent of "abc 123". There are no quotation marks enclosing the string value in the URL.)
  * You can include command line arguments.
  * If you include more than one argument, use an **&**  _(ampersand)_ as a separator; e.g. ?myvar1&data=abc+123&nextvariable.



#### **Note:   
**The Web Server saves command line arguments in: %ARGS$[1:%ARGS].  
  
**_Where:_**  
  
%ARGS$ Stores the arguments (such as the ARG( ) function return value).  
%ARGS Stores the number of the arguments (such as the NAR system variable).  
  
## Description

The Web Server uses the information in your URL statements to locate the file or information being requested. Each object on a page is a separate request from a browser to a web server. The PxPlus Web Server can handle virtually any type of file and serve it back to the client.

**_Exception:_** The Web Server does not currently allow for CGI scripts other than PxPlus programs.

#### **Note:**  
Characters allowed in a URL are: uppercase A-Z, lowercase a-z, integers 0-9, and $ - _ . + ! * ' ( ) , (i.e. _dollar sign, minus sign, underscore, period, plus sign, exclamation mark, asterisk, single quotation mark, standard brackets and comma_). Anything else must be encoded as a leading **%**  _percent sign_ plus the ASCII representation of the character's HEX value (i.e. its HTA( ) value).

## Request Examples

The following table provides some request examples:

**_Example 1:_** |  This example is a request for the file "myfile.htm" from the root directory of the Web Server www.pvxplus.com. Since no optional TCP socket is specified, the request would be made to the www.pvxplus.com Web Server on TCP socket 80 (default): http://www.pvxplus.com/myfile.htm?numvar1&stringvar=abc%20def This would pass two variables to the file: numvar1 would become the numeric variable numvar1 with a value of 1.  
stringvar would become the string variable STRINGVAR$ with a value of "abcdef" (%20 becomes the space).  
---|---  
**_Example 2:_** |  This example, http://127.0.0.1/somprog?one+two+three, is a request for the file "someprog" from the Web Server currently running on the local machine and passes it three arguments, which the Web Server returns in %ARGS$[%ARGS] as: %ARGS$[1]="one", %ARGS$[2]="two" and %ARGS$[3]="three" The value in %ARGS=3. See **[PxPlus Web Server Variables](../PxPlus%20Web%20Server%20Variables/Overview.md)**.  
**_Example 3:_** |  The two examples below are requests for the program "someprog" from the sub-directory "somedir" in the Web Server's root directory. The first example creates a numeric variable, ONE=1. The second passes the values in %ARGS$[1]="one" and %ARGS=1: http://127.0.0.1/somedir/someprog?one  
http://127.0.0.1/somedir/someprog?+one  
**_Example 4:_** |  This example requests the file named "myprog", which, if it is a PxPlus program, will start execution at the label LOOP: http://127.0.0.1/myprog;loop?comp=001&name=Your+Name+Here&copies=3&copy&now+then It is passing the following from the URL for use in the PxPlus program: comp=001 **_as_** COMP$="001"  
name=Your+Name+Here ** _as_** NAME$="Your Name Here"  
copies=3 **_as_** COPIES$="3"  
copy **_as_** COPY=1  
now+then ** _as_** %ARGS$[1]="now", %ARGS$[2]="then", %ARGS=2  
**_Example 5:_** |  This example is a request to the Web Server listening on port 2000 to RUN the file "someprog", if it is a PxPlus program: http://127.0.0.1:2000/someprog?name=you&name=me&name=them Note that the arguments all have the same variable name. This is handled as a special case. When a variable name is passed more than once, the Web Server creates a single variable (in this instance, NAME$) and concatenates the data from each consecutive pass to the previous value in the variable as +SEP+extra data (in this instance, NAME$="you"+SEP+"me"+SEP+"them").  
**_Example 6:_** |  The Web Server builds a special COMPOSITE STRING named **CGI$**. When you pass variables (either string or Boolean numeric, but not arguments), the Web Server builds an IOLIST of your variable names and then DIMensions CGI$ to that IOLIST. Variable names passed more than once only appear in the IOLIST once: http://127.0.0.1/myprog;loop?comp=001&name=Your+Name+Here&copies=3&copy&now+then For the example above, a **PRINT LST(IOL(CGI$))** directive returns: IOLIST COMP$,NAME$,COPIES$,COPY You can assign the current data values to the DIMensioned composite string CGI$ from the variables passed in the URL by using CGI$=REC(IOL(CGI$)) when RUNning your program. This allows you to gain access to the data as composite string elements, in this instance, with the following values: CGI.COMP$="001" CGI.NAME$="Your Name Here" CGI.COPIES$="3"  
CGI.COPY=1
