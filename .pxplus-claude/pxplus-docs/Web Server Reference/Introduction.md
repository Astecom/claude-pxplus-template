# Running on the Web  
  
**Web Server Reference** |  **__**  
---|---  
  
The PxPlus Web Server Reference contains technical information to help you set up and use the PxPlus Web Server. The reference is intended primarily as a resource for application programmers and analysts. It is designed to help you with your PxPlus Web Server's installation, configuration and associated Web-based internet programming. Please note that PxPlus Web Server version 1.2 must be used with PxPlus 4.12C or higher.

Before you begin, you will find it helpful to familiarize yourself with the **[Glossary of Common Terms](Introduction.htm#Glossary)** and the list of descriptive Conventions provided below.

##  Glossary of Common Terms

Some of the naming conventions used in the PxPlus Web Server Reference are listed below. In addition, common internet acronyms are expanded to their full terms. See any standard browser manual for detailed definitions of Internet acronyms.

**Term/Acronym** |  **Meaning _(in the PxPlus Web Server Reference)_**  
---|---  
Base launcher |  The basic PxPlus Web Server launcher or engine, responsible for reading the configuration and launching the individual Web servers (port monitors).  
CGI |  Common Gateway Interface.  
Client/browser |  A browser or query engine sending a request for information or tasks.  
Cookie |  A variable=data pair you can use to transfer status and tracking information from one page to another.  
DNS |  Domain Name Server.  
FTP |  File Transfer Protocol.  
GMT |  Greenwich Mean Time.  
HTML |  HyperText Markup Language.  
HTTP |  HyperText Transfer Protocol.  
IP |  Internet Protocol.  
Port monitor |  An individual Web server that monitors a given port or TCP/IP socket. The terms "port monitor", "Web server" and "server" are sometimes used interchangeably in this reference and in the PxPlus Web Server dialogue box prompts on-screen. See **[Port Monitors](Components%20of%20the%20Web%20Server/Overview.htm#port_monitors)**.  
SMTP |  Simple Mail Transfer Protocol.  
Task handler |  PxPlus Web Server application that processes requests from the port monitor and returns completed results to the port monitor. (Task handlers are also referred to as sub-servers.) See **[Task Handlers](Components%20of%20the%20Web%20Server/Overview.htm#task_handlers)**.  
TCP/IP |  Transmission Control Protocol/Internet Protocol.  
TCP/IP Socket |  The number you assign to the port or socket. The typical default socket for a Web server number is 80. Each port monitor must have a unique socket or port number.  
URL |  Uniform Resource Location request. Use standard URL coding conventions for requests to the Web Server. Requests to run PxPlus programs follow standard CGI coding conventions.  
Web Server |  Case-sensitive, mixed case is the PxPlus Web Server application. Any other usage (case insensitive) is a port monitor. The terms "port monitor", "Web server" and "server" are sometimes used interchangeably in this reference and in the Web Server dialogue boxes on screen.  
  
The word _application_ in this reference is a literal term meaning _use/usage_. An application can be as simple as a function, a few lines of code, or a subroutine controlling a process (e.g. creating a Web page) in a single program, or it can be a complex series of programs (e.g. a lead program with sub-programs, a full website, the Web Server).

## Conventions

**_Format Conventions_**

The following conventions have been applied to the format for each directive in the PxPlus Web Server Reference:

**Symbol(s)** |  **Meaning**  
---|---  
[ ] |  Square brackets enclose optional elements in the syntax format.  
  
**_Example:_**  
  
With the special HTML code format ~~argument[?suffix]~~, you can use either an argument with a suffix (e.g. ~~Total?F:####0.00~~) or just an argument (e.g. ~~Total~~).  
{ } |  Curly brackets enclose a list of elements where you must select one item.  
  
**_Example:  
_**  
With {yes|no}, you must select either _yes_ or _no_.  
| |  Vertical bars **|**_pipes_ are used to separate a series of possible values.  
  
**_Example:_**   
  
{yes|no}  
... |  Dots indicate the continuation of a list of elements.  
  
**_Punctuation Conventions_**

If you are new to PxPlus, below are some of the punctuation conventions you will see in the syntax in this reference:

**Symbol(s)** |  **Meaning**  
---|---  
! |  **_Exclamation mark:_** Use the _exclamation mark_ in the PxPlus language to begin a programmer's remark. It is syntactically the same as using a REMark directive.  
  
**_Example:_** ! This is a remark.   
REM This is a remark, too.  
" ... " |  **_Double quotes:_** Use _double quotes_ to enclose string literals in your PxPlus programs. _Double quotes_ are not used in URL syntax. **_Example:_**  
  
**?stringvar=abc** in your URL is the equivalent of **stringvar$="abc"** in your PxPlus code.  
#! |  **_Pound sign + Exclamation mark:_** An ASCII CGI program starts with the _pound sign_ plus an _exclamation mark_. Use the mime type **application/PxPlus** for ASCII PxPlus programs. CGI programs (other than PxPlus programs) are not currently supported.  
% |  **_Percent sign:_** A leading _percent sign_ in your PxPlus program denotes a global variable, as in the Web Server system variables: **%exit_code** and **%print_fn**.   
  
A leading _percent sign_ is also used in Web Server syntax as a prefix for characters that are invalid in HTML but still needed in your transmission to the browser. (Send them as their HTA value, prefixed by the % _percent sign._)  
& |  **_Ampersand:_** Use the _ampersand_ as the separator between arguments in a URL statement. **_Example:_**  
  
http://server/myapp/myprog?stringvar=abc&nextvar&a_var  
* |  **_Asterisk:_** When you include the leading _asterisk_ as in ***web** , PxPlus will prefix your program name with the full path name to the PxPlus lib directory automatically and will change the _asterisks_ to _underscores_.  
  
**_Example:_**  
  
*web/merge would become something like: g:\software\pxplus VX.X\lib\\_web\merge.   
  
You can also use _asterisks_ in the PxPlus language to enclose specialty file names, such as *MEMORY*, and to serve as operators (e.g., in multiplying value*1.05 and in 'C'-type operators, etc.).  
+ |  **_Plus sign:_** Use the _plus sign_ in your URLs to encode spaces on the data side of a variable=data pair or spaces between arguments on the variable side (no equals sign).  
  
**_Example:_**  
  
http://www.pvxplus.com/makewish;init?this+that&what=dog+cat+pig (_Plus signs_ in your PxPlus language syntax have the usual conventional meanings, i.e. as addition operators, etc.)  
: |  **_Colon:_** Use the trailing _colon_ to denote the end of a line label in your PxPlus program. An entrypoint in your URL, such as **yourprog;entrylabel** , refers to the **ENTRYLABEL:** line label in your program where the task handler would start executing your Web application.  
; |  **_Semi-colon:_** Use the _semi-colon_ in an URL to indicate an entrypoint in a program (i.e. a line label where execution should start).  
  
**_Example:_**  
  
call "yourprog;start_here", this_arg,that_arg   
http://server/makewish;init?this+that&what=dog+cat  
<...> |  **_Greater than_** and **_Less than:_** Use _greater than_ and _less than_ symbols as brackets to enclose special HTML attributes or object tags. **_Example in a PxPlus program:_**   
  
0020 PRINT (%PRINT_FN)"<html><head>"  
? |  **_Question mark:_** Use a leading _question mark_ to denote the start of an argument list in your URL.   
  
**_Example:_**  
  
http://myapp/mypvxprog?myvar&stringvar=abc&anothervar You also use a _question mark_ to denote the start of a suffix in a Web Server specialty code in HTML pages.  
  
**_Example:_**  
  
~~Total?F:####0.00~~   
~~myprog;filltable?T~~ In conventional PxPlus syntax, a _question mark_ is the same as a PRINT directive.  
  
**_Example:_**  
  
You can use either ? (%PRINT_FN)"<html><head>"_**OR** _PRINT (%PRINT_FN)"<html><head>"  
~~ ... ~~  |  Enclosed by **_double tilde:_** Use _double tildes_ to enclose Web Server specialty codes in HTML template pages.  
  
**_Example:_**  
  
~~myprog;filltable?T~~  
  
## PxPlus Web Server

The PxPlus Web Server is HTTP/1.0 compliant. It lets you integrate your HTML and your PxPlus programs in your Web applications. The PxPlus Web Server's coding standards for an HTML Web page, for running a PxPlus program and passing it data follow standard CGI conventions. You can create HTML using PxPlus and/or using your favourite HTML editor (e.g. MS Word, Frontpage, etc.).

You can use the PxPlus Web Server as your only Web server, or you can use it to augment your existing Web server. For instance, you can use Apache, Microsoft-IIS or Netscape to serve your main site and use the PxPlus Web Server to run your PxPlus Web applications and create Web pages to gain access to your data.

#### **Note:**  
If you need to handle responses larger than 700 kilobytes, the recommendation is to use **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)**, **[Apache](../apache.md)** or IIS.  
  
If this is not an option, you can set the **[PXP_WEB_BSZ](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark17)** environment variable to a value greater than 80 kilobytes _(default)_ to allow PXPlus Web Server to handle larger responses; however, increasing this value will cause the PxPlus Web Server to use more memory.  
  
_(PXP_WEB_BSZ functionality was added in PxPlus 2022.)_

You can use the PxPlus Web Server to:

  * Integrate your PxPlus programs directly with standard Web Server operations.


  * Gain direct access to PxPlus data files, ODBC data files and other PxPlus file structures for use in your Web applications (i.e. your PxPlus programs).


  * Use almost any PxPlus programming feature in your Web application.


  * Give your users access to your Web applications without the time delay of launching a CGI application. (The Web Server accepts and runs CGI-compliant URLs as PxPlus programs.)


  * Perform high volume simultaneous request processing (as many as 1,000 at a time) and automatic restarting of stopped/stalled requests.


  * Reconfigure your Web server on the fly.



You can transfer files of any size and any type with the Web Server. There is no delay before the file transfer begins. You can also force the browser to "Save As" the file name you specify for display to the user. Transferring files of any size has no effect on memory requirements. (No additional RAM is used.)

## See Also

**[Setting Up PxPlus Web Server](Setting%20Up%20PxPlus%20Web%20Server/Introduction.md)**
