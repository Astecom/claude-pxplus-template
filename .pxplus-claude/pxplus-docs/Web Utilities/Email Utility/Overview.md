# Web Utilities

***WEB/EMAIL** |  **_Email Utility_**  
---|---  
  
## Description

The ***web/email** utility may be called to generate a mime-compliant email message. The file generated will have a long but unique file name assigned by this utility and will have a file extension of .EML. This utility will only work if run from the PxPlus ***web** directory.

Up to three sub-directories will be created:

|  ***web/outbox** |  Generated email may be left in this directory for later delivery.  
---|---|---  
|  ***web/outbox/new** |  All email is generated as a file in this directory until delivery status can be determined, at which time it will be moved or deleted.  
|  ***web/outbox/sent** |  Email may be kept after being sent if parameters dictate that they be saved.  
  
When sending email via an SMTP server that supports/requires OAuth2 authentication instead of Username/Password authentication, you can pass in an OAuth2 access token, and the program will use OAuth2 authentication instead of Username/Password authentication.

To get a valid access token, you will need to have set up OAuth2 with the server provider. Using the credentials given to you and their authorization and/or token URLs, you can request an access token.

You can use ***plus/web/request** for the **grant_type=client_credential** OAuth2 flow, or you can use the ***obj/OAuth2** object for the **grant_type** **=authorization_code** flow to get access tokens.

See **[Access OAuth2 Restricted Web Service](../../Access%20Oauth2%20Web%20Service.md)** for an example of getting the access token for a PxPlus Web service.

See the **[Examples](Overview.htm#examples)** below for additional OAuth2 authorization information when sending an email.

See **[Submitting a Web Request](../../Web%20Services/Overview.htm#submitting)** for information on using the ***plus/web/request** utility.

_(OAuth2 support for the *web/email utility was added in PxPlus 2025.)_

#### **Note:**  
For ease of testing, you can use the **[*web/testemail](../Testemail.md)** utility to quickly send a test email. It will also output the necessary ***web/email** command to send an email that you can then put in your program, changing the subject and message as required.

##  Calling Sequence

**CALL "*web/email"[** ,ERR=_stmtref_**]** , _fromaddress_ _$, replyaddress$, toaddress$, ccaddress$, bccaddress$, subject$, message$, attachments$, option$, smtpserver$, servertimeout, linewrapsat, body encoding$, eraseit, errormesg$, senddirectory$, savedfilename$_[,_accesstoken_ _$_]

**_Where:_**

_fromaddress_ _$_ |  **_(Input)_** Address to be used in the mail header to indicate who is sending the mail. (Only one address is allowed.) See **[Email Addresses](Overview.htm#emailaddr)**.  
---|---  
_replyaddress_ _$_ |  **_(Input)_** Address to be used when the recipient of the message wishes to force any replies to be routed to a different address. See **[Email Addresses](Overview.htm#emailaddr)**.  
_toaddress_ _$_ |  **_(Input)_** Address(es) to whom to send the mail (one or more). See **[Email Addresses](Overview.htm#emailaddr)**.  
_ccaddress_ _$_ |  **_(Input)_** Address(es) to whom to send a copy of the mail (0 or more). See **[Email Addresses](Overview.htm#emailaddr)**.  
_bccaddress_ _$_ |  **_(Input)_** Address(es) to whom to send a copy of the mail but whose address is not to be exposed to other recipients (zero or more). See **[Email Addresses](Overview.htm#emailaddr)**.  
_subject$_ |  **_(Input)_** Subject line for the message.  
_message$_ |  **_(Input)_** Body of the message to be sent. See **Message Body**.

#### **Note:**  
You can also embed an image into the body of an email. See **[Embed an Image](Overview.htm#image)**.  
  
_(Support to embed an image was added in PxPlus 2020.)_  
  
_attachments$_ |  **_(Input)_** List of files to attach to the email (_null_ for no file attachments). See **[Attachments](Overview.htm#attachments)**.  
_option$_ |  **_(Input)_** This may be set to "H"igh, "L"ow, or "N"ormal and is used to set the email X-Priority level. Also used to indicate Read Receipt requested (for Priority: H, L or N; for Read Receipt: D and/or R). See **[Mail Priority/Options](Overview.htm#options)**.  
_smtpserver_ _$_ |  **_(Input)_**  _smtpserver_ _$_ contains the name of the SMTP server. It should be in the form of SERVER;SOCKET. See **[Sending or Storing Messages](Overview.htm#sendingmsg)**. **_Example:_**  
  
smtp.pvxplus.com;25  
  
If no socket number is specified, then a default SMTP socket number of 25 is used.  
  
If no Server Name is specified (_smtpserver_ _$_ is NULL) or contains the word "<<OUTBOX>>", then the email will be generated and left in the *web/outbox directory.  
  
If the SMTP server requires authorization, this field can contain the UserID and Password.  
  
For a connection secured via SSL/TLS, you must add "**-secure** " following the Port Number. To use an SMTP server that is protected by STARTTLS encryption (usually ones that run on Port 587), the **"-secure** " must be left out of the SMTP server string. See **SMTP Server**.  
_servertimeout_ |  **_(Input)_** If non-zero, this parameter specifies the timeouts for sending directly to the SMTP server. If 0 (zero), the timeout value will be set to 60 seconds. (Values greater than zero only have an effect on PxPlus version 4.15 or higher.)  
_linewrapsat_ |  **_(Input)_** The value in this parameter controls the automated line wrapping of text in the message body.  
  
If this parameter is set to -1, then no line wrapping will be done.  
  
If set to 0, a default of 76 characters/line will be used.  
  
Wrapping is only performed on the message body and does not affect attachments.  
_bodyencoding_ _$_ |  **_(Input)_** Mime type for the _message$_. Text/plain will be assumed, if not given. By specifying a value in _bodyencoding_ _$_ such as "text/html", the _message$_ would be assumed to be HTML.  
_eraseit_ |  **_(Input)_** The value specified in this parameter indicates whether the program is to delete or save the generated .EML file that is output by this program. It is used ** _only_** if the message has been successfully sent.  
  
Possible values are: |  0 |  Leave the message file alone. **_(Default)_**  
---|---  
1 |  Delete the Sent message file.  
2 |  Save the Sent message to a Sent folder.  
_errormesg_ _$_ |  **_(Output)_** If an error is encountered during the compile of an email or in the course of sending an email, the program will load this variable with a textual description of the problem and then exit with an error. See **[Errors and Results](Overview.htm#errors)**.  
_sentdirectory_ _$_ |  **_(Input)_** Indicates the directory name to use to save Sent Items. This is valid when _eraseit_ =2 only.  
_savedfilename_ _$_ |  **_(Input)_** Returns the name on disk of the file where the email file was stored after completion. If saving to the outbox, this returns the location and file name within the *web/outbox.  
  
If _eraseit_ is not set or is set to 0, then this returns the location and file name where the generated email was left.  
  
If _eraseit_ is set to 1, then the file is not saved, and this will return a null value.  
  
If _eraseit_ is set to 2, then this will indicate the location of the saved file.  
  
This defaults to the *web/outbox/sent or _sentdirectory_ _$_ , if given.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_accesstoken_ _$_ |  OAuth2 access token. If non empty, OAuth2 authentication will be used with the SMTP server. (Defaults to empty string; i.e. no OAuth2). _(accesstoken$ was added in PxPlus 2025.)_  
  
##  Debug Tracing

To assist with debugging, an email utility **_trace_** can be enabled by setting the global variable **%trace_email** to 1 and opening the program **[TraceWindow](../../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Windows%20Debugging%20Environment.htm#trace)**. This will output the utility's actions and any errors to the trace window; however, it will not trace the entire program.

_(Tracing was added in PxPlus 2018.)_

##  Email Addresses

Individual email addresses may be specified in simple or complex forms, such as:

> support@pvxplus.com  
>  "PVX Plus Support" < support@pvxplus.com >

This makes use of the *web/address utility to validate, verify and correctly format or reformat email addresses.

Where multiple email addresses are supported _(toaddress$, ccaddress$, bccaddress$)_ , you may string the email addresses together, separated by any of the following: $8A$ (SEP), $0A$, $0D0A$ _or_ "**;** " (_semi-colon_).

#### **Note:**  
This utility accepts up to 100 email addresses for each of the above items; however, most SMTP servers and most mail delivery spam filters will reject mail that is addressed to more than 100 users.

##  Message Body

The _message$_ variable may contain up to a maximum of 32,000 characters. However, you may embed coding to represent the insertion of files into the message body. By using a body built of files or a combination of text and files, the maximum body size itself is unlimited.

You can also embed an image into the body of an email. See **[Embed an Image](Overview.htm#image)**.

Embedding files within the message body is accomplished by inserting strings of the following format within the _message$_ :

> ""<<#FILE:filename>>"" **_or_** "<<#FILE:filename?option>>"

The file name should contain both the path and the file name of the file. If the file has a file extension, then the mime database will be checked for an entry matching the file's extension, and the mime type will be retrieved. If no mime type is found, then "application/octet-stream" is assumed.

Files will automatically be encoded in one of three ways when being inserted into the final .EML file:

  1. If the mime type is "text/plain", no encoding will be done; however, the line wrap will be performed, unless _linewrapsat_ is set to -1.
  2. All of the other mime types beginning with "text/", such as "text/html", will be encoded in Quoted-Printable format.
  3. All mime types that are not "text/" will be encoded in Base64.



The second format with the **?** option suffix allows you to override the actual encoding used or performed on the file.

Valid options are:

**?Q** |  Force file to be encoded in Quoted-Printable format.  
---|---  
**?B** |  Force file to be encoded in Base64.  
**?E** |  Do not encode. File is assumed to already exist in Quoted-Printable format.  
**?6** |  Do not encode. File is assumed to already exist in Base64 format.  
**?P** |  Declares the file as "text/plain". Encoding will depend on usage.  
  
If the file is an attachment, then it will be encoded in Quoted-Printable format.  
  
If the file is part of the message body, then no encoding will occur, and no line wrap will be done unless the entire message body turns out to be text/plain. In this case, line wrapping will occur based on _linewrapsat_.  
**?I** |  Include file as is. Do not encode the file. Do not put mime headers before the file's content. The utility will simply wrap mime boundaries around the inserted file. By using this feature, you can manually encode mime-based files of any format or layout such as multi-part/relative and include that into this email file.  
  
The mime type of the data within the _message$_ variable is assumed to be plain text unless overridden by the _bodyencoding_ _$_ variable, which may contain a mime type for the message body.  
  
Using this technique, it is very simple to create a message from an HTML page:

> _message_ _$_ ="<html><head><title>..</html>"   
> _bodyencoding_ _$_ ="text/html"   
> **_  
>  or simply   
> _**  
> _message$_ ="<<#FILE:/somefile.html>>"

Since this message body is built from a file, the mime type will be worked out automatically, and therefore, _bodyencoding_ _$_ need not be set. However, you can also combine bodies encoded one way with files encoded another:

> _message_ _$_ ="<html><head><title></title>..</head><<#FILE:/somewhere.txt>>   
>  </body></html>"   
> _bodyencoding_ _$_ ="text/html

Whenever there is a file inside the message body, the file will always start on a new line; it will not continue an existing line. If the message body is built of text and files, and both the text and all of the files turn out to be of mime type "text/plain", then the message will be built as a single body and not as multiple pieces. Other than this rule, the message body and the entire email will be built as a "multi-part/mixed" mime with boundaries between each component.

##  Embed an Image

A few methods are available to embed an image into the body of an email. Different email clients provide varying support for the different types of embedded images.

The most compatible way to embed an image that works in all email clients tested is to host the image on a server and point to it via the HTML tag <img src='_url_ '/>.

**_Example:_**

> _message_ _$_ ="<html><head></head><body><p>Check out the new logo</p><p>&nbsp;<img src='https://www.yourcompany.com/newlogo.png' /></p><p>Regards.</p></body></html>"

There are other less compatible ways to embed an image.

One way is to include the image as an attachment and use the HTML tag <img src='cid:filename'/> to reference the attached image. The filename **_must_** match the filename used in _attachments$._

**_Example:_**

> _message_ _$_ ="<html><head></head><body><p>Check out the new logo</p><p>&nbsp;<img src='cid:newlogo.png' /></p><p>Regards.</p></body></html>"  
> _attachments$_ ="newlogo.png"

Another way is to convert the image into Base64 and use the HTML tag <img src='data:image/png;base64,_imageData'_ />.

**_Example:_**

> OPEN (HFN,ISZ=-1)"newlogo.png"  
>  READ RECORD (LFO,SIZ=NUM(FIN(LFO,"FileLength")))imgdata$  
>  CLOSE (LFO)  
> _base64img$_ =CVS(imgdata$,"ASCII:BASE64",0)  
> _message$_ ="<html><head></head><body><p>Check out the new logo</p><p>&nbsp;<img src='data:image/png;base64,"+base64img$+"' /></p><p>Regards.</p></body></html>"

_(Support to embed an image was added in PxPlus 2020.)_

##  Attachments

The _attachments$_ may contain a separated list of file names - the files to be attached to the email message. The separator may be $8A$ (SEP), $0A$, $0D0A$ _or_ "**;** " _semi-colon_.

No special formatting is used or needed; however, the ? options are available just as in the message body and have the same effects in the message body.

**_Example:_**

> _attachments_ _$_ ="C: \file1.htm;C:\image.bmp;C:\somefile.mine?B;C:\someotherfile.ok?Q"

If the file has a ? option suffix, then the encoding of the file will be forced; otherwise, the file's extension will be used to find the mime type in the mime type database. Encoding will be Quoted-Printable for any mime types starting with "text/"; all others are encoded as Base64.

#### **Note:**  
Even though you may force the file encoding, the mime type and mime type database are still very important to have for each file extension you use. If the mime type cannot be found, then application/octet-stream will be used. Incorrect or missing mime types may cause unknown results or mail that cannot be displayed in the receiver's mail client.

## Mime Type Database

The mime type database is a file named _"*web/webserv.mim"_. This is a keyed file, which uses the file extension as the key. At present, the only available method for modifying, adding or deleting mime types is through the use of the **PxPlus Web Server Configuration** screen.

#### **Note:**   
It is not necessary to purchase the PxPlus Web Server to access its configuration system.

Alternatively, you may modify the mime type file directly. The file should be opened with IOL=*, and all file name extensions must be written to the file in lowercase.

##  Mail Priority/Options

The following table describes the actual internal email priority settings that will be incorporated into the email header based on the value you supply in the _option$_ value:

**_Value_** |  **_X-Priority_** |  **_X-MSMail-Priority_** |  **_Importance_**  
---|---|---|---  
L |  5 |  Low |  Low  
N |  3 |  Normal |  Normal  
H |  1 |  High |  High  
D |  Return a Read Receipt, also known as a Disposition Header.  
R |  Return a Delivery Receipt, also known as a Return Receipt.  
  
Not all email tools will respond to priority settings, or they may not respond to the specific email header tags of "X -Priority:" or "X -MSMail-Priority:" or "Importance:".

## Character Set

For all text-based messages or files, the character set will be reported as "us-ascii" unless otherwise overridden by the global variable **%EMAIL_CharSet$**.

##  Sending or Storing Messages

Email may be stored in an outbox (*web/outbox) by specifying NULL or "< >" for the _smtpserver_ _$_ argument. At no time will this program read messages from the outbox and attempt to deliver them. If an  _smtpserver_ _$_ is specified, then the message will attempt to post itself immediately after it has been generated.

##  Errors and Results

If an email cannot be completely generated, then it will not be sent to any recipients. The reason will be placed in _errormesg_ _$_.

If, during the course of generating an email, one of the addresses in any of the address fields is found to be invalid, then the email will not be sent to any recipients. A list of bad email addresses will be returned in _errormesg_ _$_.

If, during the course of posting the email, one of the recipients is found to be invalid, then the email will be posted to all valid recipients.

##  SMTP Server

If the SMTP server to which you are connecting requires authorization, you can include the UserID and Password in the _smtpserver_ _$_ value following the Server Name and Port Number:

> _server;__port;userid;password_

For a connection secured via SSL/TLS, you must add "**-secure** " following the Port Number in the SMTP server string.

**_Example:_**

> smtp.gmail.com;465**-secure** ;userid;password

To use an SMTP server that is protected by STARTTLS encryption (usually ones that run on Port 587), the **"-secure** " must be left out of the SMTP server string. This is because STARTTLS encryption requires making an unsecure connection and negotiating a secure connection.

**_Example:_**

> mail.abccorp.com;25;userid;password

##  Examples

**_Example 1_** \- To send email with the OAuth2 client credentials flow:

> call "*WEB/BASE64;ENCODE_STR",clientId$+":"+clientSecret$,usrpsw$  
> extrahdr$="Authorization: Basic "+usrpsw$  
> reqData$="grant_type=client_credentials"  
>  call "*plus/web/request","https://login.microsoftonline.com/common/oauth2/v2.0/token",reqData$,resp$,resphdr$,"","",extrahdr$  
>  dim load jsonAuth${all}=resp$  
> accessToken$=jsonAuth$["access_token"]  
>  call "*web/email","example@mycompany.com","","someone@example.com","","","Test Please Ignore","Hi this is a test from PxPlus."+$0D0A$+"Hello World","","N","smtp-mail.mycompany.com"+";"+"587"+";"+"example@mycompany.com",0,-1,"",1,errormsg$,"",savedfilename$,accessToken$

_(Example 1 was added in PxPlus 2025.)_

**_Example 2_** \- To send email with the OAuth2 authorization code flow:

> oAuth2=new("*obj/oauth2")  
>  oAuth2'Authorization_URL$=https://login.microsoftonline.com/common/oauth2/v2.0/authorize  
>  oAuth2'Token_URL$=https://login.microsoftonline.com/common/oauth2/v2.0/token  
>  oAuth2'client_id$=clientID$  
>  oAuth2'client_secret$=clientSecret$  
>  oAuth2'Enable_Certification("Consent granted to Example App to send e-mail via your Microsoft account")  
>  WAIT 1  
>  url$=oAuth2'Get_Authorization_URL$("https://outlook.office.com/SMTP.Send,offline_access")  
> system_help url$  
>  input "Press any key to continue after logging into account and allowing PxPlus access:",*;print ""  
>  oAuth2'Get_Access_token()  
> refreshToken$=oAuth2'Refresh_token$  
> accessToken$=oAuth2'Access_token$  
>  drop object oAuth2  
>  call "*web/email","example@outlook.com","","someone@example.com","","","Test Please Ignore","Hi this is a test from PxPlus."+$0D0A$+"Hello World","","N","smtp-mail.outlook.com"+";"+"587"+";"+"example@outlook.com",0,-1,"",1,errormsg$,"",savedfilename$,accessToken$

_(Example 2 was added in PxPlus 2025.)_

**_Example 3_** \- To send email with the OAuth2 authorization code flow if you already have a refresh token:

> oAuth2=new("*obj/oauth2")  
>  oAuth2'Authorization_URL$=https://login.microsoftonline.com/common/oauth2/v2.0/authorize  
>  oAuth2'Token_URL$=https://login.microsoftonline.com/common/oauth2/v2.0/token  
>  oAuth2'client_id$=clientID$  
>  oAuth2'client_secret$=clientSecret$  
>  oAuth2'Refresh_token$=refreshToken$  
>  oAuth2'Get_Access_token()  
> refreshToken$=oAuth2'Refresh_token$  
> accessToken$=oAuth2'Access_token$  
>  drop object oAuth2  
>  call "*web/email","example@outlook.com","","someone@example.com","","","Test Please Ignore","Hi this is a test from PxPlus."+$0D0A$+"Hello World","","N","smtp-mail.outlook.com"+";"+"587"+";"+"example@outlook.com",0,-1,"",1,errormsg$,"",savedfilename$,accessToken$

_(Example 3 was added in PxPlus 2025.)_

## See Also

**[*WEB/TESTEMAIL Utility](../Testemail.md)  
[*WEB/SMTP Utility](../SMTP%20Utility/Overview.md)  
[*WEB/POP3 Email Retrieval Utility](../Pop3%20Email%20Retrieval.md)**
