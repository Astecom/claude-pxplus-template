# SSL/TLS Security Certificates

**Frequently Asked Questions**|   
---|---  
  
This page provides answers to some commonly asked questions about SSL/TLS Security Certificates.

**[How can I fix an "Unable to locate SSL library" message on Linux?](ssl_tls_faq.htm#Mark1)**

**[Why does PxPlus need/use external SSL libraries?](ssl_tls_faq.htm#Mark2)**

**[How can I fix missing OpenSSL libraries on Linux?](ssl_tls_faq.htm#Mark3)**

##  How can I fix an "Unable to locate SSL library" message on Linux?

On occasion, PxPlus is unable to locate the OpenSSL libraries on Linux systems. This is generally caused by the fact that the OpenSSL libraries have not been properly installed or updated.

When this happens, if you attempt to open an SSL/TLS connection to another computer, you will get the following message:

> Error #13: File access mode invalid  
>  Last IO to [tcp]......;secure, channel nn  
>  Unable to locate SSL library (ssleay or libssl) (err/ret=2/2)

This message indicates that the libraries used by SSL (**libssl.so** and **libcrypto.so**) are not in the correct location and thus cannot be loaded into PxPlus.

You can determine the location in which the libraries should be found by using the Linux **ldd** command against the PxPlus you installed.

Below is the output for both the 32-bit and 64-bit PxPlus installs from a Centos system:

**_32 Bit ldd Output:_**

> root@vm-centos-7 pxplus32]# **ldd  pxplus**  
>  linux-gate.so.1 => (0xf7769000)  
>  libdl.so.2 => /lib/libdl.so.2 (0xf774a000)  
>  libm.so.6 => /lib/libm.so.6 (0xf7708000)  
>  libnsl.so.1 => /lib/libnsl.so.1 (0xf76ee000)  
>  libc.so.6 => /lib/libc.so.6 (0xf7531000)  
>  /lib/ld-linux.so.2 (0xf776a000)

**_64 bit ldd Output:_**

> root@vm-centos-7 pxplus64]# **ldd  pxplus**  
>  linux-vdso.so.1 => (0x00007ffefb18c000)  
>  libdl.so.2 => /lib64/libdl.so.2 (0x00007f1ae4c05000)  
>  libm.so.6 => /lib64/libm.so.6 (0x00007f1ae4903000)  
>  libnsl.so.1 => /lib64/libnsl.so.1 (0x00007f1ae46e9000)  
>  libc.so.6 => /lib64/libc.so.6 (0x00007f1ae4327000)  
>  /lib64/ld-linux-x86-64.so.2 (0x00007f1ae4e23000)

Generally, on Linux, the 32-bit system libraries are in **/lib** whereas on a 64-bit install, the libraries can be found in **/lib64**. These libraries normally will have links for **libssl.so** and **libcrypto.so** that point to the current version of the libraries. The links should have been set up during the initial OpenSSL install and may be changed during software updates; however, sometimes these links get broken or are not set up properly.

On our Linux systems here, the **.so** files point to the current version of **libssl** (1.0.1e in this case):

> [root@vm-centos-7 pxplus64]# **ls -l /lib/libssl.so**  
>  lrwxrwxrwx. 1 root root 16 May 31 2016 /lib/libssl.so -> libssl.so.1.0.1e

> [root@vm-centos-7 pxplus64]# **ls -l /lib64/libssl.so**  
>  lrwxrwxrwx. 1 root root 16 May 31 2016 /lib64/libssl.so -> libssl.so.1.0.1e

To resolve the problem with PxPlus not being able to find the SSL libraries, you need to locate the proper OpenSSL libraries on your system and create the required symbolic links for **libssl.so** and **libcrypto.so** using the Linux **ln** command. **_(Make sure you make the link symbolic and not a hard link.)_**

#### **Note:**  
There is usually a **libcrypt.so** (missing 'o') in the library directories. This is **_not_** part of the OpenSSL libraries and should **_not_** be touched.

## Why does PxPlus need/use external SSL libraries?

When running PxPlus on Linux/AIX or similar systems, the system will load the SSL libraries when the first reference made to any component within the libraries is required. The fact that the SSL libraries are not directly linked into the EXE allows these libraries to be independently updated. The same is true for Windows; however, there we actually ship current SSL libraries with the product as opposed to relying on the OS supplying them.

Not all applications will need the SSL libraries, but the following PxPlus functions do require them to be present:

  * Any access to SSL/TLS communications (TCP, HTTPS, etc. connections)
  * Use of the HSH functions other than the basic hashing algorithm (hash type 0)



Over time, the SSL libraries on your system may need to be updated to address problems and deficiencies that may be discovered and corrected by the makers of OpenSSL. On Linux and most Unix based systems, these updates can be obtained using the OS supplied software update utilities. For PxPlus for Windows, these can be extracted from newer versions of PxPlus and applied as needed.

Because security is so important, we kept these libraries external from PxPlus so that they may be updated as needed without having to replace/update the whole PxPlus installation.

##  How can I fix missing OpenSSL libraries on Linux?

On Linux, if you are finding that you are having trouble connecting to a secure server using TCP, it may be because the system is not able to find the OpenSSL system libraries. This can manifest itself in having problems running the online registration process, getting updates or any form of network/internet requests using a secure connection.

The easiest way to test if the libraries can be found is to try and open a secure connection to the target system or to any Internet server. To do this, simply issue the following command from the PxPlus Command line:

> OPEN (1) "[tcp]www.pvxplus.com;443;secure"

If the libraries are not found, you will get the following error:

> Error #13: File access mode invalid  
>  Last IO to [tcp]www.pvxplus.com;443;secure, channel 1  
>  Unable to locate SSL library (ssleay or libssl) (err/ret=9/9)

This indicates that the OpenSSL libraries cannot be found; however, on most Linux systems, they do exist but the OS may not have created the proper linkage to the version of OpenSSL you are running. The library files often are suffixed with the specific version of OpenSSL being used, and for PxPlus to use them, it needs a link to the correct library.

Since we ship a "generic" version of PxPlus for multiple versions of Linux, we use generic names (without the version number) in the SSL interface. Most Linux systems include these by default, but some don't so you have to define which OpenSSL library version to use.

#### **Note:**  
Because OpenSSL changes regularly, many Linux distributions already have these generic links defined so they can change when a new version comes out without having to recompile all applications.

If the generic link does not exist, you can fix this by first finding the installed SSL libraries (**libssl.so** and **libcrypto.so**) on your Linux server. Generally, they will be in one of the following locations:

  * 32-bit systems: /lib **_or_** /usr/lib
  * 64-bit systems: /lib64 **_or_** /usr/lib64



To find which libraries are installed, you can use the OS **'ls'** command, as in:

> ls -l /usr/lib/libssl*

This will display something like:

> -rwxr-xr-x 1 root root 470376 Aug 8 21:38 /usr/lib/libssl.so.1.0.2k

This indicates that you have version 1.0.2k of the OpenSSL libraries installed.

For PxPlus to find this library, you need to create a symbolic link within the system library files to the **.so** file. This can be done as follows:

> ln -s /lib/libssl.so.1.0.2k /lib/libssl.so  
>  ln -s /lib/libcrypto.so.1.0.2k /lib/libcrypto.so

To give you an idea of what this will look like, here is the **'ls'** of a Centos 7 library directory:

> [root@v1153828 ~]# **ls -la /usr/lib64/libssl***  
>  -rwxr-xr-x 1 root root 370584 Aug 12 11:55 /usr/lib64/libssl3.so  
> lrwxrwxrwx 1 root root     16 Sep 18 00:49 /usr/lib64/libssl.so -> libssl.so.1.0.2k  
> lrwxrwxrwx 1 root root     16 Sep 18 00:47 /usr/lib64/libssl.so.10 -> libssl.so.1.0.2k  
>  -rwxr-xr-x 1 root root 470376 Aug  8 21:38 /usr/lib64/libssl.so.1.0.2k

You can see that it is set to use OpenSSL version 1.0.2k.

 

 

 
