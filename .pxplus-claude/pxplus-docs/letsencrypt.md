# Running on the Web

**Let's Encrypt SSL/TLS Certificates**|   
---|---  
  
[**Let's Encrypt**](https://letsencrypt.org/) is a **_free_** and open certificate authority that is run by the **[Internet Security Research Group (ISRG)](https://www.abetterinternet.org/)** and provides certificates to secure websites (HTTPS) and communications (SSL/TLS). It provides free **_90-day certificates_** and allows **_automated certificate renewal_** through client software. By providing these key benefits, _Let's Encrypt_ simplifies the use of SSL/TLS by removing many of the barriers that previously prevented its use.

For information about _Let's Encrypt_ , visit **[About Let's Encrypt](https://letsencrypt.org/about/)**.

For information about using SSL/TLS certificates, see **[SSL/TLS Security Certificates](ssl_tls_certificates.md)**.

#### **Note:  
** This page provides basic instructions (for supported platforms **[UNIX/Linux/Mac](letsencrypt.htm#unixlinux)** and **[Windows](letsencrypt.htm#windows)**) on how to acquire a _Let's Encrypt_ certificate and how to automatically renew it so that the **[PxPlus EZWeb Server](EZWebServer/EZweb%20Introduction.md)** will use the renewed certificate without shutting down.  
  
These instructions include the use of the official _Let's Encrypt_ client, **[Certbot](https://certbot.eff.org/)**, which does **_not_** support Windows. If using Windows, any of the **[Third-Party Clients](https://letsencrypt.org/docs/client-options/#windows-iis)** that support Windows can be used.  
  
These instructions also use the **[Certify the Web](https://certifytheweb.com/)** client, as this was the easiest to set up.

_(Support for Let's Encrypt was added in PxPlus 2019.)_

##  UNIX/Linux/Mac

**_Installation_**

The steps for the installation process are as follows:

**Step** |  **Description**  
---|---  
1. |  Visit the **[Certbot](https://certbot.eff.org/)** website.  
2. |  From the "**I'm using"** drop down menu, select _None of the above_.  
3. |  From the "**on** " drop down menu, select your target operating system.  
4. |  Follow the installation instructions provided on the website. This will likely be done using the operating system's package management software such as _apt-get_ or _yum_ , adding the software source for Certbot and then installing. If this installation method is used, Certbot is run from the command line with the command _certbot_. If not available from the package manager, Cerbot is installed by downloading it directly. The first time it is run, it will install all the dependencies and set up the environment: wget https://dl.eff.org/certbot-auto  
chmod a+x certbot-auto  
./certbot-auto version If this installation method was used, Certbot is run from the command line with _/path/certbot-auto_ (**_where_** _path_ is the path where it was downloaded). Treat references to _certbot_ in the examples in the next steps as _/path/to/certbot-auto_.  
  
**_Run Client to Obtain New Certificate_**

For the documentation on using the Certbot client to request certificates, visit **[Certbot Documentation](https://certbot.eff.org/docs/)**. The instructions below explain how to use it with PxPlus EZWeb.

The first certificate you request must accept the _Let's Encrypt_ **Terms of Service** and optionally provide an e-mail address to which upcoming expiry notifications can be sent. This is done by including the following in the first command:

\--agree-tos ** _and_**  
\--email admin@example.com

To **_request a certificate_** , use one of the following two methods, **_\--webroot_** or **_\--standalone_** :

#### **Important Note:**  
Port 80 **_must_** be open through the firewall for inbound traffic in order to request or renew a certificate.

**\--webroot Method** |  If you have a Web server already running on port 80, use this method: certbot certonly --webroot --agree-tos --email _admin@example.com_ -w /pxplus/lib/_plus/inomads -d _example.com_ -d _www.example.com_ **_Where:_** |  _admin@example.com_ |  Your e-mail address to which upcoming expiry notifications can be sent  
---|---  
_/pxplus/lib/_plus/inomads_ |  The existing port 80 Web server's root directory  
_example.com**and**  
www.example.com_ |  The domains of the EZWeb server you want the certificate for  
**\--standalone Method** |  If you do not have a Web server running on port 80, use this method: certbot certonly --standalone --agree-tos --email _admin@example.com_ -d _example.com_ -d _www.example.com_ **_Where:_** |  _admin@example.com_ |  Your e-mail address to which upcoming expiry notifications can be sent  
---|---  
_example.com**and**  
www.example.com_ |  The domains of the EZWeb server you want the certificate for  
  
The new certificate files can be found at:

/etc/letsencrypt/live/_example.com_ /fullchain.pem

**_and_**

/etc/letsencrypt/live/_example.com_ /privkey.pem

**_Where:_**

|  _example.com_ |  The first domain you specified in your _certbot_ _certonly_ certificate request  
---|---|---  
  
**_Set Up Automatic Certificate Renewal_**

The steps for setting up automatic certificate renewal are as follows:

**Step** |  **Description**  
---|---  
1. |  Test that the Cerbot renew program can automatically renew your certificate: certbot renew --dry-run  
2. |  If Certbot was installed via a package manager, it will have set up a _cron_ _/systemd/inittab_ job to automatically renew within 30 days of expiry all certificates that Certbot generates. If Certbot was installed via the downloaded script, you will have to set up a _cron_ _/systemd/inittab_ job that runs twice a day to check for and renew any certificates that are within 30 days of expiry. The recommendation is that you run the job at a random minute within the hour to avoid everyone hitting the servers at the same time. The job should run the following command: certbot renew **_Example:_** This example of a **cron** job will run at noon and midnight every day: 0 0,12 * * * python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew  
  
**_Run EZWeb Server Using Certificate_**

Run the EZWeb Server, pointing it at the live version of the _Let's Encrypt_ certificate chain and private key for your domain:

> _/pxplus/pxplus_ "*ezweb/server" -arg 443 "/etc/letsencrypt/live/_example.com_ /fullchain.pemprivkey=/etc/letsencrypt/live/_example.com_ /privkey.pem"

**_Where:_**

|  _/pxplus/pxplus_ |  Path to the PxPlus executable  
---|---|---  
|  _example.com_ |  First domain you specified in your _certbot_ _certonly_ certificate request  
  
EZWeb will automatically reload the certificate after automatic renewal so there is no need to manually restart EZWeb to avoid expired certificates. See **[EZWeb Automatic Security Certificate Reload](EZWebServer/EZweb%20Introduction.htm#Mark4)**.

##  Windows

**_Installation_**

The steps for the installation process are as follows:

**Step** |  **Description**  
---|---  
1. |  Visit the **[Certify the Web](https://certifytheweb.com/)** website.  
2. |  Download the latest stable **[Certify the Web Release](https://certifytheweb.com/home/download)** from their website.  
3. |  Run the downloaded installer and follow the on-screen instructions.  
4. |  Register a new contact by providing an e-mail address to which upcoming expiry notifications can be sent and accepting the _Let's Encrypt_ subscriber's agreement.  
  
**_Request a New Certificate_**

For documentation on using the _Certify the Web_ client to request certificates, visit the **[Certify the Web Documentation](https://docs.certifytheweb.com/docs/intro.md)** website. The instructions below explain how to use it with PxPlus EZWeb.

**Step** |  **Description**  
---|---  
1. |  Click the _New Certificate_ button in the upper left corner of the Certify screen.  
2. |  Select _Certificate Domains_ from the menu on the right. In the _Add domains to certificate_ field, input the domains for which to get a certificate; e.g. _example.com_ , _www.example.com_. Select the _ADD DOMAINS_ button.  
3. |  Select _Authorization_ from the menu on the right. For the _Challenge Type_ , select _http-01_. For the _Website Root Directory_ field, select the path to the _*plus/inomads_ directory.

#### **Important Note:**  
Port 80 **_must_** be open through the firewall for inbound traffic in order to request or renew a certificate.  
  
4. |  Select _Deployment_ from the menu on the right. From the _Deployment Mode_ drop down menu, select _No Deployment_.  
5. |  The _Certify the Web_ client generates a new filename every time a certificate is renewed. To use with PxPlus EZWeb server, the filename **_must_** stay the same after it is renewed. To accomplish this, a Post-Request Script is **_required_**. Follow these steps: a) Select the _Show Advanced Options_ check box on the right, just above the menu. b) Select _Scripting_ from the menu on the right. c) For _Post-Request PS Script_ , use the ****button to select the path to the _*ezweb\certifytheweb.ps1_ script file.  
6. |  Select the _Test_ button to make sure that the certificate request will work and that there are no problems with the setup. If any problems are found, they must be addressed before proceeding to the next step.  
7. |  Select the _Request certificate_ button. The generated PFX certificate file can be found at: C:\ProgramData\Certify\certes\assets\pfx\_example.com_.pfx **_Where:_** _example.com_ is the first domain you input in the _Add domains to certificate_ field, followed by _.pfx_.  
  
**_Set Up Automatic Certificate Renewal_**

Automatic renewal is set up when the _Certify the Web_ client is installed. By default, every 30 days the client will renew any certificates it has generated that are within 30 days of expiry.

**_Run EZWeb Server Using Certificate_**

Run the EZWeb Server, pointing it at the PFX certificate generated by _Certify the Web_ :

> _"C:\PVX Plus Technologies\PVX Plus\pxplus.exe"_ *ezweb\server -arg 443 "C:\ProgramData\Certify\certes\assets\pfx\_example.com.pfx_ "

**_Where:_**

|  _"C:\PVX Plus Technologies\PVX Plus\pxplus.exe_ |  Your path to the PxPlus executable  
---|---|---  
|  _example.com.pfx_ |  First domain you input in the _Add domains to certificate_ field, followed by _.pfx_  
  
EZWeb will automatically reload the certificate after automatic renewal so there is no need to manually restart EZWeb to avoid expired certificates. See **[EZWeb Automatic Security Certificate Reload](EZWebServer/EZweb%20Introduction.htm#Mark4)**.
