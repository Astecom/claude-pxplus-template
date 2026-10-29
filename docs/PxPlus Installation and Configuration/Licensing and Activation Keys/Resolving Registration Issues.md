# Activation and Registration

**Registration Issues**|   
---|---  
  
A PxPlus license registration can become invalid for various reasons, such as file tampering or corruption, moving or copying the system Activation Keys control file **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)**, or expiration of the key itself.

Starting with PxPlus 2017, the system can help to recover and update your registration keys using the built-in **[Online Registration](Online%20Registration.md)** process for any of the following:

  * ACTIVATE.PVX file has been copied or moved
  * Key has expired
  * Version upgrade



#### **Important Note:**  
If the ACTIVATE.PVX file is corrupted, you will be required to obtain a new registration before PxPlus will run.

A list of possible registration issues and resolutions is provided below. Use these links to jump to a particular issue:

          **[Copied ACTIVATE.PVX File](Resolving%20Registration%20Issues.htm#Mark1)**

          **[Expired ACTIVATE.PVX File](Resolving%20Registration%20Issues.htm#Mark2)**

          **[Upgrading Software from a Prior Version](Resolving%20Registration%20Issues.htm#Mark3)**

          **[PxpKeys Directory is Missing](Resolving%20Registration%20Issues.htm#Mark4)**

          **[System Cannot Connect to PVX Plus Server](Resolving%20Registration%20Issues.htm#Mark5)**

          **[Missing OpenSSL Libraries on Linux](Resolving%20Registration%20Issues.htm#Mark6)**

          **[WindX and Host Version Difference](Resolving%20Registration%20Issues.htm#Mark7)**

          **[PxPlus Directories Do Not Have Full Permissions](Resolving%20Registration%20Issues.htm#Mark8)**

**_Submitting a Helpdesk Ticket_**

If you experience an issue that requires additional assistance, submit a Helpdesk ticket to PVX Plus Support at **[https://helpdesk.pvxplus.com](https://helpdesk.pvxplus.com/)**. Select the **_Open a New Ticket_** button or top menu bar option.

Enter your support request and include the following:

  * A valid email address
  * Your full name
  * System ID
  * Machine Class Number
  * Product Serial Number **_(Do not include license Activation Keys)_**
  * Software versions and types of equipment
  * Description of the issue and symptoms (only one issue description per ticket)



#### **Important Note:**  
To help resolve your issue as quickly as possible, all requested information must be provided. Missing details will result in delays.  
  
An administrative fee may apply for licenses not enrolled in the **[Continuous Care Program (CCP)](Overview.htm#ccp)** and for unsupported versions.

##  Copied ACTIVATE.PVX File

If the system detects a valid ACTIVATE.PVX file that has been copied, it will issue the following message:

**_  
_**  
**_Message shown above is the Windows display.  
On text-mode systems, message contents are   
the same but appear in a text message box._**  
---  
  
If you have moved the software and wish to re-register the software on the new machine, select **_Yes_**. The system will then attempt to connect to the PVX Plus Technologies server.

If the registration matches the one currently associated with the license, a new key will be issued.

If the registration does not match the machine currently registered, the registration process will fail, and you will receive the following message:

> To register your product on the new system, you will need to request a license move. For steps, see **[Moving PxPlus License to New System](Moving%20PxPlus%20License.md)**.

##  Expired ACTIVATE.PVX File

If the system detects a valid ACTIVATE.PVX file that has expired within the last two weeks, it will issue the following message:

> Select **_Yes_** to have the system contact the PVX Plus Technologies server to see if the expiry period has been extended.

If the registration matches the machine currently associated with the license and the expiry date has been extended, a new key will be issued, and your registration will be updated.

If the registration has not been extended, you will receive the following message:

> To renew the license or purchase a new license, contact PVX Plus Sales at **[sales@pvxplus.com](mailto:sales@pvxplus.com)**.

##  Upgrading Software from a Prior Version

If the system detects a valid ACTIVATE.PVX file but the version is **_more than_**  **_three_** versions back from the **_.exe_** you are trying to use, it will issue the following message:

> Select **_Yes_** to have the system contact the PVX Plus Technologies server to see if the license is entitled to a newer version.

If the registration matches the machine currently associated with the license and the version number on the server is different, a new key will be issued, and your registration will be updated. You will then receive the following message:

> #### **Note:**  
If this is not the version you require to run the copy of PxPlus you have installed, a subsequent message will display, advising you of the discrepancy.

If the version number has not changed, you will receive a message similar to the following:

> To upgrade the license or purchase a new license, contact PVX Plus Sales at **[sales@pvxplus.com](mailto:sales@pvxplus.com)**.

##  PxpKeys Directory is Missing

Depending on the version of PxPlus installed, the PxpKeys directory resides in the PVX Plus Technologies directory by default and contains the system Activation Keys control file ACTIVATE.PVX.

#### **Note:**  
As of PxPlus 2014, the default location of the system Activation Keys has been changed to facilitate multiple versions and upgrades. See [**ACTIVATE.PVX**](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md).

If PxPlus was not installed in the default PVX Plus Technologies directory, the PxpKeys directory may not have been created. As a result, the activation program cannot run, since it cannot locate the ACTIVATE.PVX file. See [**Activation Messages**](../Troubleshooting/Activation%20Messages.md).

If this occurs, submit a Helpdesk ticket to PVX Plus Support at [**https://helpdesk.pvxplus.com**](https://helpdesk.pvxplus.com/). For details on what to include, see [**Submitting a Helpdesk Ticket**](Resolving%20Registration%20Issues.htm#Mark9).

##  System Cannot Connect to PVX Plus Server

If your system cannot connect to the PVX Plus Technologies server, submit a Helpdesk ticket to PVX Plus Support at **[https://helpdesk.pvxplus.com](https://helpdesk.pvxplus.com/)**. For details on what to include, see **[Submitting a Helpdesk Ticket](Resolving%20Registration%20Issues.htm#Mark9)**.

##  Missing OpenSSL Libraries on Linux

On Linux, if you are having problems connecting to a secure server using TCP, this may be due to the system's inability to find the OpenSSL system libraries. This may also cause issues when running the online registration process, getting updates, or performing any form of network/internet request using a secure connection.

See **[Linux Issues](../Troubleshooting/Linux%20Issues.md)**.

The easiest way to test whether the libraries can be found is to attempt opening a secure connection to the target system or to any internet server. To do this, issue the following command from the PxPlus Command line:

          **OPEN (1) "[tcp]www.pvxplus.com;443;secure"**

If the libraries are not found, the following error will occur:

          Error #13: File access mode invalid  
          Last IO to [tcp]<a href="http://www.pvxplus.com;443;secure,">www.pvxplus.com;443;secure,</a> channel 1  
          Unable to locate SSL library (ssleay or libssl) (err/ret=9/9)

This indicates that the OpenSSL libraries cannot be found. However, on most Linux systems, they do exist, but the operating system may not have created the proper linkage to the version of OpenSSL you are running. The library files often are suffixed with the specific version of OpenSSL being used, and for PxPlus to use them, it needs a link to the correct library.

Since PVX Plus ships a "generic" version of PxPlus for multiple versions of Linux, generic names are used (without the version number) in the SSL interface. Most Linux systems include these by default, but some do not; therefore, you must define which OpenSSL library version to use.

#### **Note:**  
Because OpenSSL changes regularly, many Linux distros already have these generic links defined, so they can change when a new version comes out without having to recompile all applications.

If the generic link does not exist, you can fix this by first finding the installed SSL libraries (**_libssl.so_** and **_libcrypto.so_**) on your Linux server. Generally, they will be in **_one_** of the following locations:

          32-bit systems: /lib -or- /usr/lib  
          64-bit systems: /lib64 -or- /usr/lib64

To find which libraries are installed, you can use the operating system **'ls'** command:

          **ls -l /usr/lib/libssl***

This will display something similar to the following:

          -rwxr-xr-x 1 root root 470376 Aug 8 21:38 /usr/lib/libssl.so.1.0.2k   _(This indicates you have version 1.0.2k of the OpenSSL libraries installed.)_

For PxPlus to find this library, you need to create a symbolic link within the system library files to the **_.so_** file:

          ln -s /lib/libssl.so.1.0.2k /lib/libssl.so  
          ln -s /lib/libcrypto.so.1.0.2k /lib/libcrypto.so

To give you an idea of what this will look like, the following is the **'ls'** of a Centos 7 library directory:

          [root@v1153828 ~]# ls -la /usr/lib64/libssl*  
          -rwxr-xr-x 1 root root 370584 Aug 12 11:55 /usr/lib64/libssl3.so  
          lrwxrwxrwx 1 root root     16 Sep 18 00:49 /usr/lib64/libssl.so -> libssl.so.1.0.2k  
          lrwxrwxrwx 1 root root     16 Sep 18 00:47 /usr/lib64/libssl.so.10 -> libssl.so.1.0.2k  
          -rwxr-xr-x 1 root root 470376 Aug 8 21:38 /usr/lib64/libssl.so.1.0.2k

You can see it is set to use OpenSSL version 1.0.2k.

##  WindX and Host Version Difference

Ensure that the WindX client version and the host PxPlus version are the same.

For example, if the host is running PxPlus 2025, the WindX client should also be running PxPlus 2025 and not a previous version.

##  PxPlus Directories Do Not Have Full Permissions

Modify the properties of the PVX Plus Technologies directory (Windows) or the PxPlus directory (UNIX/Linux) and all its sub-folders to give full permissions. See **[Permission Issues](../Troubleshooting/Permission%20Issues.md)**.

 

 

 
