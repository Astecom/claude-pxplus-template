# Apache HTTP Server Setup

**Apache 2.4**|   
---|---  
  
**_For Apache 2.4_** , the preferred method when using Apache 2.4 is to use the Apache Load Module - Dynamic Shared Object (DSO) **mod_inomads.so** that is specifically designed for use with the Apache server. This module will intercept the iNomads requests and forward them directly to the NOMADS application.

By default, all launched iNomads processes will be launched within the constraints of the Apache server.

If you want to use a different user ID or authorization level, use the **[Launch Port](Object%20Properties%20and%20Methods.htm#launchport)** option in the iNomads configuration file. When using Apache with iNomads, the pathnames must also be defined. See **[Configuring PxPlus Pathnames](Setup%20and%20Installation.htm#pathnames)**.

For more information about Apache, see **[Apache HTTP Interface](../apache.md)**.

## Configuration Overview

The Apache 2.4 HTTP server is controlled by a variety of _".conf"_ files. If you are planning to use Apache as your Web engine, it is strongly recommended that you familiarize yourself with the documentation on Apache. The website **[http://httpd.apache.org](http://httpd.apache.org/)** has documentation and numerous resources that can assist you in setting up Apache.

In this document, the basic installation and setup of Apache are provided so it can run iNomads for both Windows and UNIX/Linux. These instructions are based on the version 2.4 of Apache and may vary on future releases. To find the most current version for Windows, select a mirror site at **<http://www.apache.org/dyn/closer.cgi/httpd/binaries/win32/>** and then select the version you require.

To learn more about Apache HTTP configuration, see **[Apache Configuration](../apache/config.md)**.

## Windows Installation

Download the current Apache HTTP server from the Web.

During the installation process, you will be asked to declare your website and domain name. These are used by the install process to pre-set some of the configuration files.

For the purposes of testing iNomads, the following values are suggested:

__ |  _Network Domain_ |  inomads.com  
---|---|---  
__ |  _Server Name_ |  local.inomads.com  
__ |  _Administrator's Email Address_ |  your.name@youremail.com  
  
Once installed, you need to tailor a few files to make the configuration work. You will then need to edit/replace the _httpd.conf_ file.

## Load Module Setup for Apache 2.4

The following lines can be appended to _httpd.conf_ and used to run the preferred interface:

#### **Important Note:**  
For the "ServerName" line below, both the real site domain name **_and_** server name should be used.

> #  
>  # PxPlus iNomads setup  
>  #  
> LoadModule inomads_module modules/mod_inomads.so  
>   
>  <Location /inomads>  
>  SetHandler inomads  
>  </Location>  
>   
>  #  
>  # **** IMPORTANT NOTICE: Use forward slashes for all directory names and adjust the pathname as reqd  
>  #  
>   
>  <VirtualHost *:80>  
>  ServerName inomads.domain.com  
>  DocumentRoot "C:/PVX Plus Technologies/PVX Plus/lib/_plus/inomads"  
>  DirectoryIndex inomads  
>    
>  # Default to ISO-8859-1  
>  AddDefaultCharset ISO-8859-1  
>    
>  # Redirect any attempt to view the .conf files to error 404  
>  RedirectMatch 404 conf$  
>    
>  </VirtualHost>  
>   
>  <Directory "C:/PVX Plus Technologies/PVX Plus/lib/_plus/inomads">  
>  Options FollowSymLinks  
>  AllowOverride None  
>  Require all granted  
>  </Directory>

#### **Note:  
** The paths used may need to be adjusted depending on your setup. The above text can be found in the _lib\\_plus\inomads\apache\httpd24.conf_ file.  
  
The assumption is that PxPlus is located on the same machine as your existing install and that the install directory has been properly set to full Read/Write for Apache and whatever UserID PxPlus CS is using (if you are using this).  
  
Generally, the following is suggested:  
  
chmod -R a+rwx /_your_pxplus_directory_

In addition, you will need to first copy the following file from _lib\\_plus\inomads\apache\module\windows_ and then rename it:

  * Copy **mod_inomads.so.24** to the _modules_ directory of Apache.
  * After copying, rename **mod_inomads.so.24** to **mod_inomads.so**.



## UNIX/Linux Installation

Most UNIX systems come with Apache pre-installed; however, you will need to edit its configuration to use iNomads. Generally, the Apache configuration files are found in the _/etc/apache_ or _/etc/httpd_ directories on your server. To edit these files, you will likely require _root_ access.

**_Load Module Setup_**

The first step you will need to do is to compile the "mod_inomads" component on your UNIX/Linux system to make sure it matches the current Apache and hardware you are using.

The source of this file is in the _inomads_ _/apache/module_ sub-directory, but it must be compiled on your target system to make sure its internal structures match the version of Apache you are running. This can be done by changing to the _module_ sub-directory and entering the following:

> **apxs** **-i -a -c mod_inomads.c**

The pre-compiled DLL that PxPlus provides for Apache is for Apache 2.4; however, PxPlus supplies the source, which can be compiled for any version of Apache _(*plus/inomads/apache/module/mod_inomads.c)_.

The source is generally only needed on a UNIX system where the CPU and/or #bits vary from install to install. For Windows, a pre-compiled version is supplied. This avoids the issue of users needing a separate 'C' compiler, which is not included with the OS (UNIX/Linux generally come with compilers).

#### **Note:  
** The _apxs_ module is included with the _Apache/http-devel Linux_ package. You may need to install this package on your Web server using yum or other Linux installer mechanism.

During initialization, Apache will process all _'.conf'_ files found in the _'conf.d'_. To simplify the configuration of the Load Module interface, copy the file found in _lib/_plus/inomads/apache/unix-inomads.conf_ to the _conf.d_ directory as _inomads.conf_.

#### **Important Note:**  
For the "ServerName" line below, both the real site domain name **_and_** server name should be used.

> #  
>  # PxPlus Apache HTTP interface Load Module definition  
>  #  
>  #  
>   
>  # **** IMPORTANT NOTICE: Use forward slashes for all directory names  
>  #  
>   
>  <Location /inomads>  
>  SetHandler inomads  
>  </Location>  
>   
>  <VirtualHost *:80>  
>  ServerName inomads.domain.com  
>  DocumentRoot "/pxplus/lib/_plus/inomads"  
>  DirectoryIndexinomads  
>    
>  # Default to ISO-8859-1  
>  AddDefaultCharset ISO-8859-1  
>    
>  # Redirect any attempt to view the .conf files to error 404  
>  RedirectMatch 404 conf$  
>  </VirtualHost>  
>   
>  # This directory definition allows the system to access the inomads files  
>   
>  <Directory "/pxplus/lib/_plus/inomads">  
>  Options FollowSymLinks  
>  AllowOverride None  
>  Require all granted  
>  </Directory>

You may need to edit the file to define the starting directory for iNomads, which should be the _*plus/inomads_ in your install.

## Enabling Changes within the Apache Server

Once all the configuration changes have been made, you will need to start/restart the Apache server to have the changes take effect. On many Linux systems, this can be done by entering the following command:

> **service httpd restart**

_The above describes a very generic Apache configuration. Depending on your configuration and if you are using Apache for other services, your setup may differ._

#### **Note:**  
You may have to enable read/write permissions on your _*plus_ directory and subordinates for either all users or at least whatever user ID Apache is using.
