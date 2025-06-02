# Running on the Web

**SSL/TLS Security Certificates**|   
---|---  
  
**SSL/TLS** (**S** ecure **S** ocket **L** ayer/**T** ransport **L** ayer **S** ecurity) is an industry-standard protocol for managing the security of message transmissions over the Internet. It is used by millions of Web applications around the world for the protection of online customer transactions. Using SS/TLSL protocol in a website instills confidence that the user can expect a secure link and that the source belongs to a valid, legitimate organization.

SSL/TLS encodes the data, rendering it unreadable to anyone who may try to intercept the transmission. When an SSL/TLS session is started, the server sends its public key to the client, which the client uses to send a randomly generated private key back to the server in order to establish a secret key "exchange" for that session.

For information on how SSL/TLS can be used with PxPlus applications, see **[PxPlus SSL/TLS Support](ssl_tls_certificates.htm#support)**.

## Certificates and Encryption Keys

To be able to generate an SSL/TLS link, a server requires an SSL/TLS certificate. While it is possible to generate your own certificate using tools available on the Internet, you should only use these internally or for testing your site. With self-generated certificates, users will likely receive warning messages on their browsers stating that the certificate has not been authenticated and may not be from a "trusted authority".

Of course, "certificate not trusted" errors in your commercial applications would be undesirable and could drive away customers. If you want to avoid warnings like these, you should obtain your SSL/TLS certificates from a trusted third-party Internet Certification Authority. Most major operating systems and browsers maintain lists of trusted Certification Authorities and establish secure links using their certificates transparently. The padlock symbol is often used to signify when an encrypted link is established using a trusted SSL/TLS certificate.

Several trusted Internet Certification Authorities are available for acquiring certificates. Obtaining a trusted certificate will require payment, domain verification, and possibly business/organization verification. The trusted certificate will last a year or longer. It is possible to get a trusted certificate for **_free_** using the **[Let's Encrypt](https://letsencrypt.org/)** service with the only limitations being that the certificates last 90 days and they do not provide business/organization verification. _Let's Encrypt_ supports **_automated_** certificate renewal through client software; therefore, the 90-day expiry is not an issue.

For information on using _Let's Encrypt_ certificates with PxPlus, see **[Let's Encrypt SSL/TLS Certificates](letsencrypt.md)**.

_(Support for Let's Encrypt was added in PxPlus 2019.)_

Usually, the encryption key obtained from a Certificate Authority controls the level of encryption, such as 40-bit, 56-bit, 128-bit or 1024-bit encryption.

Internet communication, client-to-server or server-to-client must be either encrypted or unencrypted **_at both ends_**. Requests cannot be mixed as it is impossible for an unencrypted browser to communicate with an encrypted server and vice-versa. By convention, browser requests that are addressed **http://** will make requests from an unencrypted Web server. Use **https://** to make requests to an SSL/TLS encrypted Web server.

#### **Note:**  
PxPlus, in conjunction with SSL/TLS services provided by the PVX Plus Technologies website, provides a utility, **[*TOOLS/SSLCERT](utilities/SSL%20Cert%20Generator.md)**, that can be used to create a **_Self-Signed Certificate_**.  
  
_(The SSL Certificate Generator program was added in PxPlus 2017.)_

##  PxPlus SSL/TLS Support

Support for TCP/IP-level SSL/TLS encryption is available as part of the base PxPlus license.

#### **Note:  
** PxPlus uses OpenSSL libraries to provide SSL/TLS functionality. An X509 certificate created for use with OpenSSL or Apache is needed. (Apache also uses OpenSSL libraries.) An X509 certificate usually comes in the form of a PEM file, which contains both the certificate and private key, or two PEM files, one containing the certificate and the other containing the private key.  
  
You may get a certificate in a different format such as the Microsoft PFX file format. To use this with PxPlus, conversion to a PEM file is necessary. This can be accomplished with the PxPlus utility, **[*TOOLS/PFXCERTCONVERT](utilities/pfxcertconvert.md)**.  
  
_(Support for separate PEM files and PFX conversion was added in PxPlus 2019.)_

PxPlus uses OpenSSL to provide SSL/TLS functionality. On Windows/Mac, PxPlus ships with OpenSSL. On Linux/AIX, PxPlus uses the OS provided OpenSSL. PxPlus 2020 allows you to specify which OpenSSL PxPlus should use by setting the environment variables **[PXP_CRYPTO_LIB](PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark14)** and **[PXP_SSL_LIB](PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark15)**. It is also possible to query which version of OpenSSL PxPlus is using by issuing a **TCB(** "OpenSSL_Version"**)**.

_(The environment variables PXP_CRYPTO_LIB and PXP_SSL_LIB were added in PxPlus 2020.)_

SSL/TLS is available for all TCP/IP connections. See **[[TCP] Transmission Control Protocol](command_tags/tcp.htm)**.

Control of SSL/TLS for existing TCP/IP connections is possible using the **SETDEV SET** directive or the **PRINT 'OPTION'** mnemonic with SSL/TLS specific options. See **[SETDEV SET](directives/setdev_set.md)** directive, **['OPTION'](mnemonics/option.md)** mnemonic and **[TCP Options](mnemonics/option.htm#tcp_options)**. For an example of switching an unsecure TCP connection to a secure one, see **[Changing from Non-Secure to Secure](command_tags/tcp.htm#connections)**.

SSL/TLS is supported by the WindX thin-client, Simple Client-Server. See **[PxPlus Simple Client-Server Interface](simplecs/clienthost.md)**.

SSL/TLS is supported by the **_legacy_** WindX thin-clients, Application Server and NTHost/NTSlave. See **[Application Server](windx/Application%20Server/Introduction.md)** and **[NTHost/NTSlave](windx/nthost.md)**.

The EZWeb Server supports SSL/TLS encryption for transactions between your Web server and the user's browser. See **[PxPlus EZWeb Server](EZWebServer/EZweb%20Introduction.md)**.

The **_legacy_** PxPlus Web Server interface supports SSL/TLS encryption for transactions between your Web server and the user's browser. See **[PxPlus Web Server Reference](Web%20Server%20Reference/Introduction.md)**.

The email utilities **[*WEB/EMAIL](Web%20Utilities/Email%20Utility/Overview.md)**, **[*WEB/TESTEMAIL](Web%20Utilities/Testemail.md)** and **[*WEB/SMTP](Web%20Utilities/SMTP%20Utility/Overview.md)** all support SSL/TLS and STARTTLS encryption.

Both the PxServer and the PxIO Library support SSL/TLS encryption. See **[Configuring PxServer](PxServer/Configuring%20PxServer/Overview.md)** and **[PxIOCreateService](PxIO%20Library/Library%20Functions/Service%20Functions/PxIOCreateService.md)**.

## Global PxPlus SSL/TLS Settings

Global settings for handling SSL/TLS can be set by using either of the following two methods:

Specific **[Environment Variables](PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.md)**:

> **PVX_CERTIFICATES** =**IGNORE** **|** **VALIDATE** **|** **TRUSTREQD**  
> **PVX_CERTSTORE** =_pathname_  
> **PXP_CRYPTO_LIB** =_pathname_  
> **PXP_SSL_LIB** =_pathname_

PxPlus **[INI Settings](PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.md)**:

> **Certificates** =**IGNORE** **|** **VALIDATE** **|** **TRUSTREQD**  
> **CertStore** =_pathname_  
> **AllowedCiphers** =_list_  
> **IPV4Only** =0 **|** 1  
> **NoTLSv1.1** =0 **|** 1

## FIN( ) Function for SSL/TLS

If SSL/TLS encryption is being used with your PxPlus application, the **[FIN( )](functions/fin.md)** function will obtain SSL/TLS details regarding a particular connection; e.g. FIN(10,"SSL_CIPHER").

The following **_keywords_** pertain specifically to SSL:

|  **X509_ISSUER** |  Who issued the certificate  
---|---|---  
|  **X509_SUBJECT** |  Who the certificate was issued to  
|  **X509_NOT_BEFORE** |  Earliest date the certificate is valid for  
|  **X509_NOT_AFTER** |  Latest date the certificate is valid for  
|  **X509_KEYTYPE** |  Type of key in the certificate (DSA/RAS and number of bits)  
|  **SSL_CIPHER** |  SSL connection cipher used information as per the OPENSSL SSL_cipher_description specs  
  
All X509 keywords return information about the remote certificate; i.e. from either the server certificate (if a client requests it) or the client certificate (if the server requests it). Any of the X509 requests can be prefixed with MY_ to return the local station's certificate information.

**_Example:_**

> MY_X509_KEYTYPE, MY_X509_SUBJECT

These requests can only be made once a connection is established. When made on a server, the X509/SSL information pertains to the last/current socket connected.
