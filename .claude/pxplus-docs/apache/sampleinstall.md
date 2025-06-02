# Apache Configuration

**Sample Demo Windows Installation** |   
---|---  
  
## Sample Windows Install

The following steps demonstrate a sample installation of the PxPlus Apache interface on Windows.

#### **Note:**  
This example is using Apache version 2.2 3. **_The download and file pathname may vary between releases_**.

**Step** |  **Description**  
---|---  
1. |  Download the current Apache 2.2.3 and install it. **<https://archive.apache.org/dist/httpd/binaries/win32/apache_2.2.3-win32-x86-no_ssl.msi>**  
2. |  Download the latest PxPlus version and install it.  
3. |  Add DEMO key for PxPlus. This is used for the purposes of this example; however, in production, you would enter your proper activation key and register the product.  
4. |  Create a program directory **_prog_** in: C:\Program Files\Apache Software Foundation\Apache2.2\htdocs  
5. |  Start PxPlus to Command mode and enter the following test program: 0010 PRINT (%PRINT_FN) "Hello World from PxPlus on Apache" Save it to: C:\Program Files\Apache Software Foundation\Apache2.2\htdocs\prog\demo.pxp  
6. |  Copy the file **_windows.pxp.cgi_** from the **_*plus/apache_** directory to:  
  
C:\Program Files\Apache Software Foundation\Apache2.2\cgi-bin\**pxp.cgi**

#### **Note:**  
File was renamed.  
  
7. |  Open the **_pxp.cgi_ **file (from above) using Notepad to verify the pathname to the _pxplus.exe_ is correct:  
  
#! "C:\Program Files\PVX Plus Technologies\PVX Plus\pxplus.exe" -bkg *plus/apache/pxp_cgi -arg debug  
  
If needed, change the pathname and save file.  
8. |  Edit the Apache configuration file using Notepad and search for first "AddHandler", which (in this version) was on a line as follows: # AddHandler allows you to map certain file extensions to "handlers": Scroll down to the following lines:  
  
#AddOutputFilter INCLUDES .shtml  
</IfModule> Insert the following lines (in **red**), as per the **[Apache Configuration](config.md)** document: #AddOutputFilter INCLUDES .shtml  
</IfModule>  
**#  
# PxPlus program CGI handler  
#  
AddHandler pxplus-srvr .pxp .pvp   
Action pxplus-srvr "/cgi-bin/pxp.cgi"** Resave the configuration file.  
9. |  Restart the Apache server using the _Start - > Programs -> Apache -> Control Apache Server -> Restart_ option.  
  
This can also be done from the _Control Panel_.  
10. |  Launch Explorer and enter: http://localhost/prog/demo.pxp
