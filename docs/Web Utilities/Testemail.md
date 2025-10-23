# Web Utilities

***WEB/TESTEMAIL** |  **_Test Email Utility_**  
---|---  
  
## Description

The ***web/testemail** utility makes it easier and more convenient to work with the ***[WEB/EMAIL](Email%20Utility/Overview.md)** utility. Using only a few options, it allows you to send a "test" email and will output the ***web/email** command needed to send an email. It will also display helpful error messages to assist you in quickly resolving any issues.

_(The *web/testemail utility was added in PxPlus 2016.)  
__(OAuth2 support for the_ _*web/testemail_ _utility was added in PxPlus 2025.)_

##  Calling Sequence

**CALL "*web/testemail** ;_test_ __name_ ",_from$_ ,_smtp_server$_ ,_username$_ ,_password_or_accesstoken$_ ,_to$_

**_Where:_**

_test_name_ |  **_(Input)_**__ One of the following options can be used: |  **TEST** |  Uses the default SMTP Port 25. It will connect unencrypted or encrypted via STARTTLS, depending on the SMTP server.  
---|---  
**SSL_TEST** |  Enables SSL and uses the default SSL/SMTP Port 465. It will connect encrypted via SSL.  
**STARTTLS_TEST** |  Uses the default STARTTLS/SMTP Port 587. It will connect encrypted via STARTTLS.  
**OAUTH_SSL_TEST** |  Uses OAuth2 authentication, enables SSL and uses the default SSL/SMTP Port 465. It will connect encrypted via SSL.  
**OAUTH_STARTTLS_TEST** |  Uses OAuth2 authentication and uses the default STARTTLS/SMTP Port 587. It will connect encrypted via STARTTLS.  
  
_(OAUTH_SSL_TEST and OAUTH_STARTTLS_TEST were added in PxPlus 2025.)_  
  
_from$_ |  **_(Input)_** Address to be used in the mail header to indicate who is sending the mail. (Only one address is allowed.)  
_smtp_server_ _$_ |  **_(Input)_** SMTP Server Name or IP address to be used to send the email. It is also possible to override the default Port defined by _test_name_ and set it here by appending a semi-colon and the Port Number to use.  
_username$_ |  **_(Input)_** Your user name for the SMTP server, usually your email address.  
_password_or_accesstoken_ _$_ |  **_(Input)_** Your password for the SMTP server if you are not using one of the OAuth test types. If you are using an OAuth test type, this is the OAuth2 access token. _(Support for passing in a valid OAuth2 access token was added in PxPlus 2025.)_  
_to$_ |  **_(Input)_** Address(es) to whom to send the mail (one or more).  
  
## Example

The following **CALL** will send this sample email to _test@yourserver.com_ from _test@myserver.ca_ :

> Subject: "Test Please Ignore"

> Message: "Hi this is a test from PxPlus

> Hello World"

> **call** "*web/testemail;TEST","test@myserver.ca","smtp.myserver.ca","test@myserver.ca","mypassword",test@yourserver.com

## See Also

**[*WEB/EMAIL Utility](Email%20Utility/Overview.md)  
[*WEB/SMTP Utility](SMTP%20Utility/Overview.md)  
[*WEB/POP3 Email Retrieval Utility](Pop3%20Email%20Retrieval.md)**
