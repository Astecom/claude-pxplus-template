# Web Utilities

***WEB/MAIL** |  **_Send Simple Text Mail to a Local SMTP Server_**  
---|---  
  
## Description

The ***web/mail** utility is used for sending email from a PxPlus application to a local SMTP mail server.

## Format

**CALL "*web/mail"** , _smtp_server_ _$, from$, to$, subject$, messagetext$, return$_

**_Where:_**

_smtp_server_ _$_ |  IP address or DNS of the SMTP server. Note that TCP port **";25"** is forced.  
---|---  
_from$_ |  Email address of the person or application sending the mail.  
_to$_ |  A list of recipient email addresses separated by the SEP character ($8a$).  
_subject$_ |  Subject line of the email.  
_messagetext_ _$_ |  Text of the message.

#### **Note:**  
MessageText$ lines must end with $0d0a$ and must not exceed 100 characters per line, including the $0d0a$ terminator.  
  
_return$_ |  If an error occurs in sending the message, the response from the SMTP server will be in Return$.
