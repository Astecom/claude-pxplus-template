# Web Server Reference  
  
**URL Request to Run a PxPlus Program** |  **__**  
---|---  
  
## Format

**_URL to Run Program:_** |  protocol://server[:socket]/program[;entry][?argument[&argument...]]  
---|---  
  
**_Where:_**

**protocol** |  Applicable network protocol; e.g. http:// or ftp://.  
---|---  
**server** |  Server name. Use an IP (Internet Protocol) address such as 127.0.0.1 or a DNS (domain name) such as www.pvxplus.com.  
**socket** |  Optional TCP socket or port number (an integer preceded by a colon). Valid range: 1 to 65535. Values below 2000 are normally reserved for standard Internet activities. By default, all requests from a client are sent to TCP socket 80 unless you override the port number in your URL statement. To do this in any HTTP-compliant browser, include a **:**_colon_ and the port number right after the server name. **_Example:_** The first URL below would default to TCP socket 80. The second would connect with TCP socket 3000:   
  
http://www.pvxplus.com/support/home.html   
http://www.pvxplus.com:3000/support/home.html  
**program** |  Name of the PxPlus program that the browser is asking the Web Server to RUN. Note that **[Your Web Application Must "Stand Alone"](Overview.htm#stand_alone)** (see below).  
**entry** |  Optional line label where the PxPlus program starts.See **[Entry Points](Overview.htm#entry_points)**. If you omit this, PxPlus starts running your application at the first executable line of code in your program.  
**argument(s)** |  Optional argument(s). Mark the start of your argument list with a leading **?**  _question_  _mark_ and when you have more than one argument, use an **&**_ampersand_ as the separator between arguments.  
  
**_Example:_**  
  
?myvar1&data=abc+123&nextvariable See **[Variables as Arguments](Overview.htm#variables)** and **[Command Line Arguments](Overview.htm#comline_arguments)**.  
  
## Description

The following points explain how the Web Server works when it receives a URL request to run a program:

  * The Web Server (port monitor) receives a browser's request to RUN your PxPlus program file and checks for validity. (i.e. Does the file exist? Is it a program file in tokenized code?) If the request is valid, it assigns the task to a task handler.
  * The task handler parses variables and arguments from the request, loads the variables with available data, suspends itself and RUNs your PxPlus program, starting at the entry point if you specify one in the URL.
  * Your program creates the output and directs it to the **%print_fn** channel. See **[%print_fn](../PxPlus%20Web%20Server%20Variables/Overview.htm#print_fn)**. Then your program exits.



#### **Note:  
** If your program is creating output other than the default "text/html" mime type, make sure you assign the matching mime type to the Web Server's **%content_type$** variable. See **[%content_type$](../PxPlus%20Web%20Server%20Variables/Overview.htm#content_type)** and **[Mime Configuration](../Mime%20Configuration/Overview.md)**.

  * The task handler regains control, processes your incoming data according to its mime type and builds the blocks of outgoing data. Then, it builds the outgoing header information for your data and returns the data to the port monitor.
  * The port monitor returns the data to the browser when the job is completed.



##  Your Web Application Must "Stand Alone"

Incoming requests are processed by the next available task handler. All requests are independent of each other and do not interrelate or share information with each other. Each Web application must stand alone in the here and now.

Note that task handlers will:

  * Automatically CLOSE any files left open when your task is completed except for any files that were open when it launched.
  * Automatically clear all LOCAL variables (leaving their values unavailable to the next task handler).



Task handlers will not automatically clear your GLOBAL variables, and the global variables are not shared between task handlers (so you must initialize your global variables in your applications).

You can use a Web concept called a "cookie" to share information from one request to another. See **[*web/cookie Utility](../PxPlus%20Web%20Server%20Utilities/Set,%20Send%20and%20Retrieve%20Cookies.md)**.

You can use URLs (Uniform Resource Location requests) to pass arguments and information to your given applications. See the examples and explanations below.

#### **Note:**  
The Web Server accepts standard CGI arguments as valid for PxPlus programs but does not currently allow for other types of CGI scripts. PxPlus programs will run faster if in tokenized format. However, you can use ASCII text PxPlus programs if they have a file extension, and you set the mime type for that extension to **application/PxPlus.**

**_Example:_**

The example shown here is a simple GET request to run a PxPlus program. (The POST method would relegate variables and data to the body of the request. See **[Client-Browser Requests](../Client-Browser%20Requests/Overview.md)** for information on the differences between GET and POST requests.)

http://server/myapp/myprog;start_here?my_str_var=abc&my_B_var&next_var=123

#### **Note:**  
Characters allowed in a URL are uppercase A-Z, lowercase a-z, integers 0-9, and $ - _ . + ! * ' ( ) , (i.e. _dollar sign, minus sign, underscore, period, plus sign, exclamation mark, asterisk, single quotation mark, standard brackets, and comma_). Anything else must be encoded as a leading **%**  _percent sign_ plus the ASCII representation of the character's HEX value (i.e. its HTA( ) value). For example, a space character is represented as $20$ in hex, and you would use %20 in your URL.

##  Entry Points

The PxPlus Programming Language allows you to use line-label entrypoints (e.g. in **CALL** directives). You can also include entry points in Web Server URLs to redirect processing in your Web applications. In the previous example, a PxPlus Web Server task handler would run the PxPlus program _myprog_ , starting execution at the program line labelled _start_here:_ instead of at the first executable line of the program.

##  Variables as Arguments

If you include variables as arguments in your URL, PxPlus treats them as real variables in PxPlus itself. The task handler parses the URL and creates any variables it finds in your argument list. It preloads them (either with any data sent along with them or with Boolean values) before it runs your program. You can use:

  * String variables in variable=data pairs. In the previous example, the task handler would create a variable my_str_var$ with a value ="abc". (In the URL itself, there is no trailing **$**  _dollar sign_ in the variable name, and there are no _quotation marks_ enclosing the string value.) You can use a **+**  _plus sign_ in your URL to encode spaces in strings, as in data=abc+123; in this case, the equivalent of the PxPlus code data$="abc 123".


  * Numeric (Boolean) variables do not have an assignment with an **=**  _equals sign_ nor can they have **+**  _plus signs_ in their names (no encoded spaces). The task handler sets the value of a numeric variable to 1. (In the example above, my_B_var would have an assigned value =1.)



You can use your URL arguments to load values into your application to set conditions controlling processing.

#### **Note:**  
During a POST operation, the browser only sends the Web Server variables which are greater than NULL and <>0 (zero).

## PxPlus Web Server Variables

In addition to your own variables, you can make use of the PxPlus Web Server's own variables in your programs. See the list of reserved **[PxPlus Web Server Variables](../PxPlus%20Web%20Server%20Variables/Overview.md)**.

##  Command Line Arguments

Your URL can also include command line arguments. Note**this** and**+that** in the example below. PxPlus evaluates everything between the argument separators (?, &) as a unit. If a unit has no **=**_equals sign_ but includes a **+**_plus sign,_ the Web Server interprets the unit as command line arguments.

#### **Note:**  
The task handler adds any command line arguments it finds to the **%ARGS $[ ]** array, containing from 1 argument to the number of arguments passed.

**_Example:_**

http://server/makewish;init?this+that&what=PxPlus+Web+Server&mine

The task handler would parse this URL and load the arguments as:

  * Two command line arguments (this and that) in %ARGS$[1] and %ARGS$[2]


  * One string variable with decoded spaces (what$="PxPlus Web Server")


  * One Boolean variable (mine=1)


