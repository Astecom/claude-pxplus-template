# Application Server  
  
**Customizing**|   
---|---  
  
The sections below describe some of the customizable features of the PxPlus Application Server, including the text language, login and change password dialogues, and ***CLIENT**.

## Language Code

All displayed text for the configuration system, the server, and the clients are located in a single message library: ***APPSERV/APSMESG.**_??_. The default language suffix for displayed text is **EN**(English). You can change the language by using a different language code for the extension.

The Application Server language is dependent on how the message library is loaded (in a specific order). If an attempt to load the message library succeeds, then that is considered to be the correct language suffix for all message library and NOMADS panel library files. Attempts to load the file will continue until successful, or **EN** is chosen as the default.

The order of the attempts is:

1\. %LANG$ Global variable set possibly via a START_UP program  
2\. Environment variable PVXLANG  
3\. Environment variable LANG  
4\. Default of **EN**

## Login and Change Password Dialogs

***CLIENT** attempts to use dealer-supplied panels before loading the default panels.

**_Login Screen_**

_Attempted Panel from Library:_ |  ***APPSERV/DEALER.**_??_  
---|---  
_Arguments:_ |  _LoginID_ _$, LoginPassword$, ChgPasswordFlag_ $  
  
**_Where:_**

_??_ represents the language code. The arguments returned by the panel include:

|  _LoginID_ _$_ |  String containing the user ID to send to the server daemon. If this is null, then ***CLIENT** will terminate without logging in.  
---|---|---  
|  _LoginPasswrd_ _$_ |  String containing the password for _LoginID_ _$_ given.  
|  _ChgPasswordFlag_ _$_ |  String containing a **1** , which indicates the user wishes to change their password, or any other value, which is ignored.  
  
**_Change Password Screen_**

_Attempted Panel from Library:_ |  ***APPSERV/DEALER.**_??_  
---|---  
_Arguments:_ |  _Password1$, Password2$_  
  
**_Where:_**

_??_ represents the language code. The arguments returned by the panel include:

|  _Password1$_ |  String of the new password. If null, then the change password operation is aborted, and the ***CLIENT** program is terminated.  
---|---|---  
|  _Password2$_ |  String that must match _Password1$._  
  
## Custom *CLIENT Programs

Because the Application Server uses a protocol concept to connect the clients to the server, you may customize the ***CLIENT** program or create your own to provide your software with a custom interface for your end-users.

The protocol for the requests that the server accepts is similar to HTTP protocol. You send a **_request_** , and the server will respond with an answer. Requests must be issued in the form:

> <METHOD><SPACE><REQUEST><SPACE><PROTOCOL><CRLF>  
>  <METHOD> can be: LOGIN, SESSION, PASSWORD, QUIT  
>  <REQUEST> is the data required by the method in encoded form.  
>  <PROTOCOL> is always "PVXAS/1.0"  
>  <CRLF> is $0D0A$  
>  <SPACE> is always " " or $20$

The encoding is done using the following function:

> **def** **fnEncrypt$(local dat$)=hta(rdx(hta(dat$)))**

While this encoding is not difficult to break, it ensures that the text of all commands is encoded and not sent as readable text. This makes it much more difficult for people to obtain user ID's and passwords when you are not running SSL encryption. Only the commands sent to the server are encoded. The responses from the server are not. In addition, once the session has been started successfully and WindX has taken control, there is no further encoding in place.

Many customization features exist. The **%APSobject** and the ***CLIENT** program for the client side of the connection contain properties and methods which may be used to establish communications and send and receive responses. Some of the methods include the ability to transfer files and so on.

**_Protocol Methods_**

All protocols require a $8A$ between any arguments in their <REQUEST> section, including a trailing **SEP** for the last field in the <REQUEST>.

|  LOGIN |  Request Fields: _LoginID_ _$, LoginPassword$_  
---|---|---  
|  SESSION |  Request Fields: _Application$, Fid$, StartInDirectory$, ExtraCmdOptions$, ExtraArguments$_  
|  PASSWORD |  Request Fields: _Password1$, Password2$_  
|  QUIT |  Request Fields: NONE  
  
**_Example:_**

The following is an example of a LOGIN request, where the User ID is "Harry" and the password "YaItsMe":

> OUTSTRING$="LOGIN"+"  
>  "+fnEncrypt$("Harry"+$8a$+"YaItsMe"+$8a$)+"  
>  "+"PVXAS/1.0"+$0D0A$

All responses from the server are in the form of a single line of text ending in a $0D0A$. The single line of text is broken down into 3 sections:

> **< RESULT CODE><SPACE><TEXT><SPACE><PROTOCOL><CRLF>**

The Result Codes are 3-digit numerical codes:

|  Codes 100 - 199 |  Are not sent to the clients but are used internally by the server.  
---|---|---  
|  Codes 200 - 299 |  Indicate acceptance.  
|  Codes 300 - 399 |  Indicate acceptance but further action is required.  
|  Codes 400 - 499 |  Indicate failure.  
|  Codes 500 - 599 |  Indicate a server level failure.  
  
With **_codes 400 or higher_** , the server will automatically close the connection to the client right after it sends its response. If you wish to talk to the server, you must re-establish the connection.

The <TEXT> given will indicate the nature of the response, or at times, it will give back information that should be maintained for future reference. The methods LOGIN, PASSWORD and QUIT will only ever get one response from the server.

The method SESSION will get one, possibly two responses from the server. If a successful SESSION request is received by the server, then the server will respond with a 200 result. The text of the result will contain a Session Token, which the client should hold on to for future reference. When the client receives a 200 response, it must immediately recheck its receive channel and wait for a 205 response, which indicates OK To Go Ahead, meaning go ahead and run WindX.

If the SESSION request was unsuccessful, then the client will only receive 1 response indicating why it failed.

**_Example:_**

An example of a SESSION request would be:

> Application$="MyApp"  
>  Fid$="T99"  
> StartInDirectory$=""  
> ExtraCmdOptions$=""  
> ExtraArguments$=""  
>   
>  OUTSTRING$="SESSION"+" "+fnEncrypt$  
>  (Application$+$8a$+Fid$+$8a$+StartInDirectory$+$8a$+ExtraCmdOptions$+$8a$+ExtraArguments$+$8a$)+" "+"PVXAS/1.0"+$0D0A$

An example of a response you would receive would be:

> "200"+" "+"ABC34FG91ETSFJL34923"+" "+"PVXAS/1.0"+$0D0A$

The response codes typically received for a session request are:

|  200 |  Successful. Session Token contained in text. Now wait for a 205.  
---|---|---  
|  205 |  Go ahead. Both server and client are ready to connect to each other.  
|  301 |  You must Login first.  
|  410 |  Console Mode is not allowed.  
|  412 |  Access to Application is denied.  
|  414** _to_** 502 |  Other errors indicating specific failure. The specifics of the error is given with the <TEXT> returned.
