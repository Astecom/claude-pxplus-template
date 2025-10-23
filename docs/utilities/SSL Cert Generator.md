# Utility Routines

***TOOLS/SSLCERT** |  **_SSL Certificate Generator_**  
---|---  
  
## Description

All SSL servers/hosts are required to have what is known as an **_SSL Certificate_**. It controls the encryption algorithm used by the connection and can optionally be used to validate the host to which the application is connected.

Most commercial websites using SSL utilize a certificate that is created and "certified" by a trusted provider -- that is, a reputable company that has validated the credentials of the host to which you are connecting. The use of a trusted certificate helps assure the clients that the host to which they are connecting is the correct site and that the data they send to that site is properly encrypted. The list of "trusted" providers is generally pre-installed on most systems/browsers so that they can easily identify if a host is trusted or not.

For smaller in-house systems that run on closed networks, there is often little need to go to the expense of purchasing a certificate from a trusted supplier. However, in-house networks may still want to use SSL to encrypt the data transferring between the clients and the host servers. To accomplish this, you can use what is referred to as a **_Self-Signed Certificate_** , which ensures encryption but would not automatically be considered "trusted". These can be used for most applications that do not demand trusted connections but would require end-user action to connect when used with Web browsers.

PxPlus, in conjunction with SSL services provided by PVX Plus Technologies' website, provides a utility that can be used to create a **_Self-Signed Certificate_**. The certificates are suitable for use with WindX and other Thin Client services on most internal systems.

For additional information on using SSL/TLS certificates, see **[SSL/TLS Security Certificates](../ssl_tls_certificates.md)**.

_(The SSL Certificate Generator program was added in PxPlus 2017.)_

## Requesting a Certificate

The program **"*tools/sslcert"** can be run to request a certificate. It requires access to the Internet to obtain the final certificate from PVX Plus Technologies; therefore, it can only be run on workstations that have an Internet connection.

This program provides both a **[Graphical Interface](SSL%20Cert%20Generator.htm#graphical)** and a **[Text Mode](SSL%20Cert%20Generator.htm#textmode)**, depending on the type of device from which you are running it.

All certificates contain a number of fields used to identify the certificate holder. For Trusted Certificates, these fields are mandatory, and their values must be correct; however, for Self-Signed Certificates, the values are somewhat arbitrary and optional. The ***tools/sslcert** program does ask for these fields and provides some default values based on the IP address you are using to connect to the Internet.

The fields within the certificate that will be requested are as follows:

**Column Name** |  **Description**  
---|---  
_Country_ |  Two-character country code where the certificate is to be used. This is generally the last field of country-specific domains as used by the Internet.  
_Region, State or Province_ |  This field should contain the region, state or province where the certificate is to be used.  
_City_ |  This field should contain the city or locale where the certificate is to be used.  
_Company Name_ |  Name of the company planning to use the certificate.  
_Host Address_ |  Name or IP address of the host computer that will be using this certificate.  
  
In addition, the system will ask for the pathname of the file to receive the certificate.

Once this information has been entered, the system will contact the PVX Plus servers to generate and return a Self-Signed Certificate.

##  Graphical Interface

The graphical interface can be accessed from the **[PxPlus IDE Main Launcher (Windows)](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** by expanding the _Installation and Setup_ category and selecting _Create Self-Signed SSL Certificate_.

This interface is also displayed when running the ***tools/sslcert** program from a **_graphical_** device.

Using either of these two methods displays the following screen:

> This screen will be pre-populated with your current Country (2-character code), Region, City, Host Address (default is _localhost_) and Target PEM (default file name is _sslcert.pem_). Enter/adjust the fields as desired and then click the _Process_ button to request the certificate. Upon completion, the target file will contain the desired certificate.

##  Text-Mode Interface

When the ***tools/sslcert** program is run from a **_non-graphical_** device, a series of prompts will display, requesting the certificate information needed.

If you make a mistake, you can press **F3** to return to the previous prompt or press **F4** to quit prematurely.

> ## Error Messages

The following potential error messages may be seen from this program:

**Message** |  **Description**  
---|---  
_Unable to connect to Internet to get Certificate_ |  System could not connect to the Internet.  
_Request failed -- Certificate not created_ |  The server was either inaccessible (i.e. may be off-line) or did not return a valid response.  
  
## Certificate Specifications

The Self-Signed Certificate that is returned has the following specifications:

  * Adheres to the industry standard X.509 certificate definition
  * Expires in 10 years from the date of creation
  * Based on a 2048-bit RSA encryption
  * Uses SHA-256 (SHA-2) for hashing


