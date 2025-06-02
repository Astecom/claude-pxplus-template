# Special File Handling

***TBRED*** |  **_Direct Access to Thoroughbred_**** _Files_**  
---|---  
  
##  Format

**OPEN** (_chan_**[,**_option_**]**)"***TBRED*;FILE=**_hostfile_ "

**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_options_ |  **BSZ=**_num_ file option for specifying record size (number of bytes). The default record size is 1,024 bytes unless it is overridden via **BSZ=**.  
_hostfile_ |  The _hostfile_ text contains the name of the file as it would be seen from the server process.  
***TBDIO*** |  Logical file name (not case sensitive).  
  
##  Description

The TBDIO file IO server provides remote read/write access to Thoroughbred keyed and indexed files. Access to the files is provided through TCP/IP to a PxPlus server running the PLUSTIO.pls program on your host Unix/Linux system. The TBDIO takes the requests and pipes them through to a Thoroughbred application program that itself performs the IO, thereby assuring proper data formatting and file integrity.

From the application perspective, you have three options to access the TBDIO server, as described below.

_(The *TBRED* logical file was added in PxPlus v6.30.)_

## Method 1: Object Interface

The actual TBDIO interface is provided by the object "*plus/obj/tbdio", which can be called directly to access the files remotely.

Create the object "*plus/obj/tbdio" and use the methods to read, write and remove records:

> a=new("*plus/obj/tbdio","name_of_server")  
> chnl=a'Open("file")  
> a'ReadNext(chnl,bfr$)  
>    
> a'Close(chnl)

The object interface provides basic methods to open, close, read, write, and remove records. Additional methods are provided to obtain the next KEY, record IND, and FID of the files.

## Method 2: Using *TBRED*

You can use the "*TBRED* file declaration to open the file, as in "*tbred*;file=_xxxxx_ " **_where_** _xxxxx_ is the file on the Thoroughbred server:

> %TBDIO_Server$="name_of_server"  
>   
>  open (chnl)"*tbred*;file=xxxxx"

By setting the name of the TBDIO server in the global variable %TBDIO_Server$, you can then directly access any file from the server by opening the logical file name *TBRED*. The pathname (or OPT=) must be followed by a FILE= option that declares the name of the desired file on the server. If desired, you can also supply a SERVER= option in the pathname (or OPT=) with the name of the TBDIO server.

Once this file is opened, your application can issue normal READ, WRITE, REMOVE and CLOSE directives against the file, along with KEY, IND and FID functions.

## Method 3: Direct File Open

If you do not want to change your OPEN statements, you can create a link file accessible from the PxPlus session, which links to the TBDIO driver to open the remote file.

The system is provided with a standard link file **"_tbred_"** that can be found in the PxPlus _Lib_ directory. Copy this link file to a new file (use the name of the file you wish to open in Thoroughbred). When the system opens this file, it will connect to the TBDIO server, and it will attempt to open a Thoroughbred file of the same name.

**_Example:_**

> Copy <pxplus directory>/lib/_tbred_ MYCUST

When you open (1)"MYCUST", the system will logically issue an open (1)"*tbred*;FILE=MYCUST". This allows you to have a transparent access to the TBDIO serviced files from your application programs.

## Supported Functionality

The TBDIO interface supports the following directives and functions:

**Directives** |  **Functions**  
---|---  
**[CLOSE](../directives/close.md)** |  **[FIB( )](../functions/fib.md)**  
**[EXTRACT](../directives/extract.md)** |  **[IND( )](../functions/ind.md)**  
**[OPEN](../directives/open.md)** |  **[KEF( )](../functions/kef.md)**  
**[READ](../directives/read.md)** |  **[KEL( )](../functions/kel.md)**  
**[REMOVE](../directives/remove.md)** |  **[KEP( )](../functions/kep.md)**  
**[WRITE](../directives/write.md)** |  **[KEY( )](../functions/key.md)**  
  
## Technical Background

The TBDIO server consists of three components: the PxPlus TCPIP server program, the TBDIO IO service program and a default IPLINPUT that is used to access Thoroughbred. The server itself is designed to be run in the background on your UNIX server in the directory where you have the Thoroughbred installed and where you execute the command to launch it (./b).

The files provided in the _*plus/tbdio_ directory _( <pxplus dir>/lib/_plus/tbdio)_ are:

> **PLUSTIO.pls** \- PxPlus server program

> **PLUSTIO.tbd** \- Thoroughbred file access module

> **PLUSTIO.ipl** \- IPLINPUT for the process

To run the TBDIO server, you must first copy these from the PxPlus library into your Thoroughbred directory. Once the files have been copied, you can run the server.

#### **Note:**  
You will need to modify the IPLINPUT to access your data directories.

The server, when run, expects two arguments to be passed to it from the Command line:

> **arg 1** \- Port number (default is 20,000 if not specified)  
>   
> **arg 2** \- Shutdown password

Once initiated, the TBDIO server will launch the sub process and begin accepting requests.

While the server itself can be killed, the best way to terminate the server is to use the object interface **'Shutdown** method. When it is called, a request will be sent to the server to shut down. For security purposes, you have to pass the **'Shutdown** method the same password you specified in **arg2** for it to take effect; otherwise, the shutdown command is ignored.

A typical Command line to run the server would be:

> /pxplus/pxplus PLUSTIO.pls -arg 20000 TaTa4Now

It is suggested to include this in your system "inittab" tables.

#### **Note:**  
The system is limited to 100 files being opened concurrently.

##  MSORT Files

The *TBRED* interface supports MSORT files and the use of alternate keys. The SORT names are automatically converted into alternate key names. In addition, you can access the files using either the SORT name or by key number. In this case, the first SORT name becomes key number 0; the second becomes key number 1, etc.

FIN (nn, "KEY_NAMES") can be used to retrieve the list of SORT names.

Thoroughbred****is a registered trademark of Thoroughbred Software International Inc.
