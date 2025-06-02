# Web Utilities

***WEB/SMTP** |  **_SMTP Utility_**  
---|---  
  
## Description

The ***web/smtp** utility may be called to send an email message to a server, which is running an SMTP mail daemon. This utility will **_only_** work if run from the PxPlus ***web** directory.

Up to two sub-directories will be created:

|  ***web/outbox** |  Email awaiting delivery.  
---|---|---  
|  ***web/outbox/sent** |  Email files will be kept in this directory after being sent, depending on the value of _eraseit_.  
  
If connecting to an SMTP server that supports/requires OAuth2 authentication instead of User Name/Password authentication, you can pass in an OAuth2 access token. The program will use OAuth2 authentication instead of User Name/Password authentication.

To get a valid access token, you will need to have set up OAuth2 with the server provider. Using the credentials given to you and their authorization and/or token URLs, you can request an access token.

You can use ***plus/web/request** for the **grant_type=client_credential** OAuth2 flow, or you can use the ***obj/OAuth2** object for the **grant_type** **=authorization_code** flow to get access tokens.

See **[Access OAuth2 Restricted Web Service](../../Access%20Oauth2%20Web%20Service.md)** for an example of getting the access token for a PxPlus Web service.

See **[Submitting a Web Request](../../Web%20Services/Overview.htm#submitting)** for information on using the ***plus/web/request** utility.

_(OAuth2 support for the *web/smtp utility was added in PxPlus 2025.)_

##  Calling Sequence

**CALL "*web/smtp"**[,**ERR** =_stmtref_], _filename$_ , _smtpserver_ _$_ , _timeout_ , _eraseit_ , _errormesg_ _$_[, _sentdirectory_ _$_[, _accesstoken_ _$_]]

**_Where:_**

_filename$_ |  **_(Input)_** Path and file name of an email message file to send to an SMTP server. If _filename$_ is null, then all files ending in ".EML" in the *web/outbox directory will be sent. See **[File Name](Overview.htm#filename)**.  
---|---  
_smtpserver_ _$_ |  **_(Input)_**  _smtpserver_ _$_ contains the name of the SMTP server. It should be in the form of SERVER;SOCKET. **_Example:_** smtp.pvxplus.com;25 If no socket number is specified, then a default SMTP socket number of 25 is used. If no Server Name is specified (_smtpserver_ _$_ is NULL) or contains the word "<<OUTBOX>>", then the email will be generated and left in the *web/outbox directory. If the SMTP server requires authorization, this field can contain the UserID and Password. For a connection secured via SSL/TLS, you must add "**-secure** " following the Port Number. To use an SMTP server that is protected by STARTTLS encryption (usually ones that run on Port 587), the **"-secure** " must be left out of the SMTP server string. See **[SMTP Server](Overview.htm#server)**.  
_timeout_ |  **_(Input)_** If non-zero, this parameter specifies the timeouts for sending directly to the SMTP server. If 0 (zero), the timeout value will be set to 60 seconds. (Values greater than 0 only have an effect on PxPlus version 4.15 or higher.)  
_eraseit_ |  **_(Input)_** The value specified in this parameter indicates whether the program is to delete or save the generated .EML file that is output by this program. It is used ** _only_** if the message has been successfully sent. Possible values are: |  0 |  Leave the message file alone. **_(Default)_**  
---|---  
1 |  Delete the Sent message file.  
2 |  Save the Sent message to a Sent folder.  
_errormesg_ _$_ |  **_(Output)_** If an error is encountered during the compile of an email or in the course of sending an email, the program will load this variable with a textual description of the problem and then exit with an error. See **[Errors and Results](Overview.htm#errors)**.  
_sentdirectory_ _$_ |  Indicates the directory name to use to save Sent items. This is valid only when _eraseit_ =2.  
_accesstoken_ _$_ |  OAuth2 access token. If non empty, OAuth2 authentication will be used with the SMTP server. (Defaults to empty string; i.e. no OAuth2.) _(accesstoken$ was added in PxPlus 2025.)_  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Debug Tracing

To assist with debugging, an email utility **_trace_** can be enabled by setting the global variable **%trace_email** to 1 and opening the program **[TraceWindow](../../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Windows%20Debugging%20Environment.htm#trace)**. This will output the utility's actions and any errors to the trace window; however, it will not trace the entire program.

_(Tracing was added in PxPlus 2018.)_

##  SMTP Server

If the SMTP server to which you are connecting requires authorization, you can include the UserID and Password in the _smtpserver_ _$_ value following the server name and port number:

> _server;__port;userid;password_

For a connection secured via SSL/TLS, you must add "**-secure** " following the Port Number in the SMTP server string.

**_Example:_**

> smtp.gmail.com;465**-secure** ;userid;password

To use an SMTP server that is protected by STARTTLS encryption (usually ones that run on Port 587), the **"-secure** " must be left out of the SMTP server string. This is because STARTTLS encryption requires making an unsecure connection and negotiating a secure connection.

**_Example:_**

> mail.abccorp.com;25;userid;password

##  File Name

The _filename$_ parameter may contain either no file name or one file name. If this parameter is null, then all files with an extension of .EML that exist within the *web/outbox directory will be sent to the _smtpserver_ _$_ specified. If a file name is given, then it must contain only one email message.

##  Errors and Results

If, during the course of posting the email, one of the recipients is invalid, then the email will be posted to all it can be, and the ones that are not able to be posted will be returned in the _errormesg_ _$_ field.

## Examples

**_Example 1_** \- To connect to SMTP server with a password:

> call "*web/smtp","out/","smtp.myserver.ca;587;example@myserver.ca;mypassword",60,0,ERRMSG$

**_Example 2_** \- To connect to SMTP server with an OAuth2 access token:

> call "*web/smtp","out/cur.eml","smtp.myserver.ca;587;example@myserver.ca",60,0,ERRMSG$,"",ACCESSTOKEN$

## See Also

**[*WEB/EMAIL Utility](../Email%20Utility/Overview.md)  
[*WEB/TESTEMAIL Utility](../Testemail.md)  
[*WEB/POP3 Email Retrieval Utility](../Pop3%20Email%20Retrieval.md)**
