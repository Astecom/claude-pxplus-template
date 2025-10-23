# Web Utilities  
  
***WEB/POP3** |  **_POP3 Email Retrieval_**  
---|---  
  
## Description

This object provides a means to connect to a POP3 email server and retrieve email. It can be used against any POP3 email server using either an encrypted or unencrypted connection.

The supported **[Methods and Properties](Pop3%20Email%20Retrieval.htm#Mark1)** are listed below.

_(The *web/pop3 object was added in PxPlus 2014.)_

## Usage Details

Connect to the desired server using the **'Connect** , **'SSLConnect** , '**OAuthConnect** or '**OAuthSSLConnect** methods, providing the POP3 server name, User ID and password/access token. By default, the process will connect with the default POP3 port numbers (110 for non-SSL, 995 for SSL). If you want to use a different port, append the port number to the server name, separated by a **;** (_semi-colon_); e.g. 'pop.example.com;1234'.

When connecting to a POP3 server that supports/requires OAuth2 authentication instead of User Name/Password authentication, you can use the OAuth2 connect methods where you can pass in an OAuth2 access token.

To get a valid access token, you will need to have set up OAuth2 with the server provider. Using the credentials given to you and their authorization and/or token URLs, you can request an access token.

You can use ***plus/web/request** for the **grant_type=client_credential** OAuth2 flow, or you can use the ***obj/OAuth2** object for the **grant_type=authorization_code** flow to get access tokens.

See **[Access OAuth2 Restricted Web Service](../Access%20Oauth2%20Web%20Service.md)** for an example of getting the access token for a PxPlus Web service.

See the **[Examples](Pop3%20Email%20Retrieval.htm#Mark2)** below for additional OAuth2 authorization information when retrieving an email.

See **[Submitting a Web Request](../Web%20Services/Overview.htm#submitting)** for information on using the ***plus/web/request** utility.

_(OAuth2 support for the *web/pop3 object was added in PxPlus 2025.)_

During the connection sequence, the object will download a list of the emails and their identifiers from the server. The number of emails on the server can be found in the **'MailCount** property. You can also retrieve the server's internal mail identifier using the **'GetMailId$**(_mailidx_) method.

To get the contents of an email, use the **'Retrieve** method, passing either the mail index or the server mail identifier.

Once it is retrieved, you can access the email **'Subject$** , **'From$** , **'Header$** and **'Body$**.

To delete an email from the server, use the **'Delete** method. It will delete the current email retrieved.

**_Processed Emails_**

The object also provides a means to record "Processed" emails. You can supply a file that can be loaded with the identifiers of emails your logic has processed.

  * To mark the current email as "Processed", use the **'MarkProcessed( )** method.  
  

  * To select the next "unprocessed" email, call the **'Retrieve( )** method with no parameters (no mail index or identifier).  
  

  * To save the list of processed emails, use the **'SaveProcessed( )** method, providing it with the pathname of the file to use.  
  

  * To restore the list of processed emails, use the **'LoadProcessed( )** method. It should be called **_after_** connecting to the server.



#### **Note:**  
All methods, other than **GetMailId$** , return 1 if successful, 0 to indicate a failure or error.  
  
When an error occurs, you can check the **'LastError$** property to determine more information about the error.

##  Methods and Properties

The following **_methods_** are supported:

**Method** |  **Description**  
---|---  
**Connect**(_srvr_ _$_ ,_userid_ _$_ ,_password$_) |  Connect to mail server (non-encrypted).  
**SSLConnect**(_srvr_ _$_ ,_userid_ _$_ ,_password$_) |  Connect to mail server (encrypted).  
**OAuthConnect**(_srvr_ _$,userid$,accesstoken$_) |  Connect to mail server and authenticate via OAuth2 (non-encrypted). _(The OAuthConnect method was added in PxPlus 2025.)_  
**OAuthSSLConnect**(_srvr_ _$,userid$,accesstoken$_) |  Connect to mail server and authenticate via OAuth2 (encrypted). _(The OAuthSSLConnect method was added in PxPlus 2025.)_  
**Disconnect( )** |  Disconnect from server.  
**GetMailId $**(_mailidx_) |  Return identifier for specified index.  
**Retrieve**(_mailidx_) |  Get specific mail given index.  
**Retrieve**(_mailid_ _$_) |  Get specific mail given mail identifier.  
**IsProcessed( )** |  Returns 1 if current email has been marked as processed; else returns 0.  
**MarkProcessed( )** |  Mark current email as processed.  
**Retrieve( )** |  Get next unprocessed email.  
**Delete( )** |  Delete currently selected email.  
**LoadProcessed**(_filename$_) |  Load file containing list of processed emails.  
**SaveProcessed**(_filename$_) |  Save list of currently processed emails.  
  
The following **_properties_** are supported:

**Property** |  **Description**  
---|---  
**MailCount** |  **_(Read Only)_** Number of emails on server.  
**Header$** |  **_(Read Only)_** Returns the email header for the currently selected email.  
**Body$** |  **_(Read Only)_** Returns the body of the currently selected email.  
**From$** |  **_(Read Only)_** Returns the from address for the currently selected email.  
**Subject$** |  **_(Read Only)_** Returns the subject line for the currently selected email.  
**Mailid$** |  **_(Read Only)_** Returns the internal message ID for the current email.  
**Mailid** |  **_(Read Only)_** Returns the index number for the current email (reset on **Retrieve**).  
**LastError$** |  **_(Read Only)_** Last error code.  
**IsSecure** |  **_(Read Only)_** Returns 1 if using an encrypted connection, 0 if not.  
**IsConnected** |  **_(Read Only)_** Returns 1 if connected, 0 if not.  
  
##  Examples

**_Example 1_** \- To retrieve email with a password:

> oPop=new("*web/pop3" for program)  
>  sts=oPop'Connect("pop3.example.com","test@example.com","SnowFlakes")  
>  if sts<>1 \  
>  then print oPop'LastError$;  
>  end  
>  print oPop'MailCount  
>  !  
>  for i=1 to 20  
>  print oPop'GetMailId$(i,err=*break)  
>  next  
>  !  
>  for i=1 to 5  
>  oPop'Retrieve(i)  
>  print "Subject:",oPop'Subject$  
>  next i  
>  oPop'Disconnect()

**_Example 2_** \- To retrieve email with the OAuth2 authorization code flow:

> oAuth2=new("*obj/oauth2")  
>  oAuth2'Authorization_URL$=https://login.microsoftonline.com/common/oauth2/v2.0/authorize  
>  oAuth2'Token_URL$=https://login.microsoftonline.com/common/oauth2/v2.0/token  
>  oAuth2'client_id$=clientID$  
>  oAuth2'client_secret$=clientSecret$  
>  oAuth2'Enable_Certification("Consent granted to Example App to read e-mail via your Microsoft account")  
>  wait 1  
>  url$=oAuth2'Get_Authorization_URL$("https://outlook.office.com/POP.AccessAsUser.All,offline_access")  
> system_help url$  
>  input "Press any key to continue after logging into account and allowing PxPlus access:",*;print ""  
>  oAuth2'Get_Access_token()  
> refreshToken$=oAuth2'Refresh_token$  
> accessToken$=oAuth2'Access_token$  
>  drop object oAuth2  
> oPop=new("*web/pop3")  
>  sts=oPop'OAuthSSLConnect("outlook.office365.com","example@outlook.com",accessToken$)  
>  if sts<>1 \  
>  then print oPop'LastError$;  
>  end  
>  print oPop'MailCount  
> oPop'Disconnect()

_(Example 2 was added in PxPlus 2025.)_

## See Also

**[*WEB/EMAIL Utility](Email%20Utility/Overview.md)  
[*WEB/TESTEMAIL Utility](Testemail.md)  
[*WEB/SMTP Utility](SMTP%20Utility/Overview.md)**
