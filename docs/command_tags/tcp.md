# Special Command Tags

**[TCP]** |  **_Transmission Control Protocol_**  
---|---  
  
##  Format

**OPEN** (_chan_[,_fileopt_])**"[TCP]**[_server_]_;socket_ [;_tcp_opts_]**"**  
  
**_Where:_**

**[TCP]** |  File tag that tells PxPlus the channel is being opened for a TCP/IP connection.  
---|---  
_chan_ |  Channel or logical file number to open.  
_fileopt_ |  File options. Supported options include: |  **BSZ=**_num_ |  Block size (Only affects UNIX/Linux Reads, Windows always uses 30720 byte Read buffer) **_Defaults:_** 4096 (without secure) 20480 (with secure)  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**TIM=**_num_ |  Time-out value  
_server_ |  _(Optional)_ Server address. If specified (to denote a client connection on the channel), use either an IPv4 address like 67.213.69.170, an IPv6 address like 2001:4860:b002::68, or a DNS (Domain Name SYSTEM) server such as www.pvxplus.com. Omit it to indicate a host connection. Maximum number of characters is 256. _(The maximum number of characters increased to 256 in PxPlus 2018.0002.)_  
_socket_ |  TCP/IP socket number. For a host connection, this is the socket number where the host listens and the client connects. For a client connection, this is the socket number where the host listens. The valid range for [TCP] sockets is 1 to 65535. (For an invalid socket number, less than 0 or greater than 65535, the OS dynamically assigns an unused valid number.) See [**System Limits**](../appendix/system_limits.md).  
_tcp_opts_ |  Options to override default TCP characteristics. When including a list, use the **;**  _(semi-colon)_ as a separator. Supported options are: |  **BINDTO****=**_xxxxx_ |  This attribute forces the TCP/IP server connection to only use the network adapter that has the specified IPv4 or IPv6 address _xxxxx_. It can be used on systems that have multiple adapters (network cards) in order to restrict the connection to a specific network. It can also be used on Linux systems to guarantee IPv6 support. See **IPv6 Address**.  
---|---  
**CERTIFICATES=IGNORE | VALIDATE | TRUSTREQD** |  **_(Applicable to Client Connections Only)_** This option is used on a client connection and indicates the type of certificate validation to be performed on the server certificate when connecting: |  **IGNORE** |  Performs no validation of the certificate(s) presented by the server. ** _(Default)_**  
---|---  
**VALIDATE** |  Indicates that you want the certificate validated (expiry dates, etc.) but is not required to have been issued by a trusted supplier (i.e. it could be self-signed).  
**TRUSTREQD** |  Validates that the certificate came from a trusted vendor and that the certificate host name must match.  
  
Any validation error for certificates will cause OPEN to fail and **MSG (-1)** will contain the reason for the verification failure.

#### **Important Note:**  
Validation is only fully supported when using OpenSSL version 1.0.1 or later.  
  
Validation results when using _older_ versions of OpenSSL are **_not_** guaranteed and will vary with the release.  
  
PxPlus 2017 for Windows ships with OpenSSL version 1.0.2g libraries  
PxPlus 2016 for Windows ships with OpenSSL version 1.0.1g libraries  
PxPlus on Linux, AIX and MAC use the OpenSSL installed on the OS

_(This functionality was added in PxPlus 2017.)_  
  
**CIPHERS=**_xxxxx_  _*_ (See **Note** below) |  Allows the programmer to define which SSL ciphers will be allowed for SSL connections. **_Default:_** All ciphers supported by underlying OS will be accepted.  
  
**_Example:_**  
  
To achieve PCI Compliance, use CIPHERS=HIGH:MEDIUM:!ADH (_valid at time of writing)._ _(This functionality was added in PxPlus v11.00.)_  
**IPV4ONLY *** (See **Note** below) |  Forces connection to IPV4 clients only. The IP address is always returned as a standard IPv4 address (i.e. 192.0.2.128) instead of an IPv4-mapped IPv6 address (i.e. ::ffff:192.0.2.128). _(This functionality was added in PxPlus 2014.)_  
**KEEPALIVE** |  Use this attribute to force the OS to send _keepalive_ packets between the client and the host, thereby helping assure that the TCP/IP connection is live.  
**NODELAY** |  Disables algorithm that delays transmission. ** _Default:_** Delay up to 200 ms., attempt to combine data into larger packets.  
**NOSSLV2** * (See **Note** below) |  Disables support for SSLv2 connections when using a secure connection. **_Default:_** SSLv2, SSLv3 and TLS1.0 are supported. _(This functionality was added in PxPlus v11.00.)_  
**NOSSLV3** * (See **Note** below) |  Disables support for SSLv3 connections when using a secure connection. **_Default:_** SSLv2, SSLv3 and TLS1.0 are supported. _(This functionality was added in PxPlus v11.00.)_  
**NOTLS****V1** * (See **Note** below) |  Disables support for TLSv1 connections when using a secure connection. **_Default:_** SSLv2, SSLv3 and TLS1.0 are supported. _(This functionality was added in PxPlus v11.00.)_  
**NOTLSV1.1** |  Disables support of TLSv1.1 connections. _(This functionality was added in PxPlus 2017.)_  
**NOTLSV1.2** |  Disables support of TLSv1.2 connections. _(This functionality was added in PxPlus 2017.)_  
**NOTLSV1.3** |  Disables support of TLSv1.3 connections. _(This functionality was added in PxPlus 2020.)_  
**ONESHOT** |  For host. Only accept a single connection then halt listening to the port. This option allows a server to monitor a port for a connection and immediately free the port once a connection is established._**Default:** _Multiple clients _(not single)._ _(This functionality was added in PxPlus v6.30.)_  
**PRIVKEY=**_xxx_ |  This option is used to indicate the PEM file, which contains the certificate private key. This is needed only if you have defined the security argument and have separate PEM files for the certificate and private key. _(This functionality was added in PxPlus 2019.)_  
**REUSE** |  This option can be specified for a server connection and allows the server to listen for incoming connections even if there is another task currently using the port specified. This allows multiple processes to monitor the same incoming port and/or allows a server to start listening on a port even if a preceding task has not fully severed its connection.  
**SECURE****=**_xxx_ |  Indicates that the connection is to use SSL/TLS to ensure encrypted secure connections. If =_xxx_ is supplied, it should contain the pathname to the file containing your security certificate. See **[Secure Connections](tcp.htm#connections)**.  
**SINGLE** |  For host. One client per time per connection. Secondary connections will be disconnected. **_Default:_** Multiple clients (_not_ _single_).  
**STREAM** |  Sets streaming data mode. ** _Default:_** Block mode.  
**TLS** |  Forces a secure connection to only use TLS1.0 as opposed to the default mode of supporting SSL v2, v3 and TLS1 (negotiated with the other end). _(This functionality was added in PxPlus v11.00.)_  
**TLS1.1** |  Forces a secure connection to only use TLS1.1 (if the OS supported it) as opposed to the default mode of supporting SSL v2, v3 and TLS1 (negotiated with the other end). _(This functionality was added in PxPlus v11.00.)_  
**TLS1.2** |  Forces a secure connection to use TLS1.2. _(This functionality was added in PxPlus 2017.)_  
**TLS1.3** |  Forces a secure connection to use TLS1.3. _(This functionality was added in PxPlus 2020.)_  
  
#### **Note:**   
These SSL-related options can be added to the system INI file in the [CONFIG] section to apply to all SSL connections. The INI options would be:  
  
AllowedCiphers = ...  
IPV4ONLY  
NoSSLv2=1 _(to disable)_  
NoSSLv3=1 _(to disable)_  
NoTLSv1=1 _(to disable)_

##  Description

The **[TCP]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to open the channel for a TCP/IP connection.

The TCP interface in PxPlus acts like a "smart" two-way communications pipe. A PxPlus TCP connection can be either a **_server_** or **_client_** style connection. A single program can have many TCP sockets opened concurrently with each independent of the others; however, there are operating system limitations. See [**System Limits**](../appendix/system_limits.md).

**_TCP Server Connection_**

Omit the _server_ value from the **TCP OPEN** syntax to notify PxPlus that the channel is to be opened as a host/server.

**_Example:_**

> open (1,bsz=8192)"[TCP];10000"

This opens a TCP channel as a host/server connection with a block size of 8192 bytes. A host/server can communicate with more than one client at a time. (You can override this by using SINGLE as one of your _tcp_opts_.)

**_TCP Client Connection_**

Include the optional _server_ to notify PxPlus that the channel is to be opened as client connection linked to the socket where the host is listening; i.e. this opens a channel to create a link to the host's socket number. A client can only communicate with the specific host to which it is connected.

**_Example:_**

> open (1,bsz=16384)"[TCP]172.16.1.1;10000"

This opens a client link to a TCP channel, port 10000 on the server. The client PC uses any available socket number for its side of the communications. Note that the local machine dynamically assigns an available socket for your program to use.

The [**KEF( )**](../functions/kef.md) function can be used to identify local sockets:

> MY_KEY$=kef(CHAN)

The data in MY_KEY$ is in IP format, "10.12.1.12;80;GORDD".

**_Example:_**

> open (1)"[TCP]www.microsoft.com;80;nodelay"

This opens a connection to Microsoft's Web site, which is listening to socket number 80 _(default)_. This also turns **_Off_** the 200ms delay packet optimization algorithm.

##  Secure Connections

To use a secure TCP/IP connection, you can specify the option **[SECURE](tcp.htm#secure)** (or SECURE=_certificate_) on the open options. If a secure connection is requested, all data sent between the end-points will be encrypted. If you are opening a server side connection, you will need to include a certificate (PEM format) that will be used to identify your server and define it security settings.

#### **Note:  
** PxPlus uses OpenSSL libraries to provide SSL/TLS functionality. An X509 certificate created for use with OpenSSL or Apache is needed. (Apache also uses OpenSSL libraries.) An X509 certificate usually comes in the form of a PEM file, which contains both the certificate and private key, or two PEM files, one containing the certificate and the other containing the private key.  
  
You may get a certificate in a different format such as the Microsoft PFX file format. To use this with PxPlus, conversion to a PEM file is necessary. This can be accomplished with the PxPlus utility, **[*TOOLS/PFXCERTCONVERT](../utilities/pfxcertconvert.md)**.  
  
_(Support for separate PEM files and PFX conversion was added in PxPlus 2019.)_

Both sides must agree on whether a secure/encrypted connection is to be established; that is, both the server and the client style connections must use the SECURE option. However, only a server connection mandates a certificate file.

**_Changing from Non-Secure to Secure_**

To switch a connection from non-secure to secure, you can use the [**SETDEV (_chan_) SET "SECURE" TO "_certificate_ "**](../directives/setdev_set.md)**** or issue the **PRINT**(_chan_) 'OPTION'("SECURE", "_certificate_ "). This will change the connection from open/clear text to encrypted. The _certificate_ is required for a connection on a server but optional for a client connection. (This functionality was added in PxPlus v11.00.)

Once a connection has been established as secure, it cannot be reverted to clear text/open.

##  IPv6 Address

Both IPv4 and IPv6 address are supported.

**_On Windows_**

When creating a TCP server connection, it will bind to all IPv4 and IPv6 addresses by default. This means that clients can connect to it using an IPv4 or an IPv6 address.

**_On Linux_**

When creating a TCP server connection, it will bind to all IPv4 addresses by default. This means that clients can only connect using IPv4 address. If you require a server connectable via an IPv6 address on Linux, you can use the **[BINDTO](tcp.htm#Mark10)** parameter and specify an IPv6 interface. You can also change the default behavior of Linux to default to binding to IPv4 and IPv6. This is done by adding the following line to the _/etc/gai.conf_ file:

> label::ffff:7f00:0001/128 8

Additional details can be found at the following link: **<https://hepix-ipv6.web.cern.ch/content/slc6-actually-glibc-29-change-aipassive-bind-pfunspec-getaddrinfo-preference>**.

#### **Note:  
** On Linux, when using the **[KEF( )](../functions/kef.md)** function for a server connection, it is possible to get a crash caused by a problem in _glibc_ that is triggered by a _/etc/hosts_ file with multiple entries for the same name. If you experience this situation, modify your host's file, taking extra care that you **_do not_** assign conflicting IP addresses to the hostname. Newer versions of _glibc_ have fixed this issue.

##  See Also

[**OPEN Open a File for Processing**](../directives/open.md)  
**[SSL/TLS Security Certificates](../ssl_tls_certificates.md)**

__
