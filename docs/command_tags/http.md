# Special File Command Tags

**[HTTP/HTTPS]** |  **_Remote Call to Apache Server_**  
---|---  
  
##  Format

_Call Remote Subprogram:_ |  **CALL "[HTTP:**_server_**]**  _subprog_ __[;_entry_]**"**[,**ERR=**_stmtref_][,_arglist_]  
---|---  
  
**_Where_** _:_

**[HTTP:**_server_**]** |  The HTTP clause (or HTTPS) initiates the remote **CALL** to the _subprog_ ram/_entry_ point and Web _server_ specified. If HTTPS is specified, a secure connection is used.  
---|---  
_arglist_ |  Optional comma-separated list of arguments to pass to the subprogram.  
_server_ |  Network name or address of the server running Apache with the associate PxPlus HTTP Call extensions configured.  
_subprog_ |  Name of the subprogram that is to be called on the server. The true program name on the server must end with _.pxc_ , which will be automatically appended, if omitted in the CALL.  
_;entry_ |  **_(Optional)_** Entry point label. If you include a label, it must start with "EP_" and be separated from the program name with a semi-colon.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

When the **[HTTP: ...]** or **[HTTPS: ...]** tag is used as a prefix to a program name in a PxPlus **CALL** directive, the system will physically process the call on the Web site specified in _server_.

PxPlus will internally pass the _arglist_ __ and program name to the server specified using "SOAP" based XML data packets, which, in turn, will load and run the program.

When the subprogram completes, the server will return any updated variables found within the _arglist_ to the caller or, should an error occur, the error condition will be returned to the calling program.

To support this interface, the server must be running an Apache HTTP server with the PxPlus HTTP CALL extensions configured. See [**Apache Interface Configuration**](../apache/config.htm#httpcall).

Unlike the RPC interface, this capability supports multiple instances of the program on the server. Each CALL will invoke a new instance that will be terminated after the subprogram exits.

_(This interface was added in PxPlus v7.10.)_

##  Test Site

A test site for the CALL [HTTP] interface has been established at the Web site "**call.pvxplus.com** ".

This site contains a dummy data file and a sample callable subprogram "**getcust.pxc** ". The contents of this program are as follows:

> 0010 ! Sample HTTP call routine - getcust.pxc  
>  0020 enter CUSTNO$,RECORD$  
>  0030 open (1)"arcust"  
>  0040 read record (1,key=CUSTNO$)RECORD$  
>  0050 close (1)  
>  0060 end  
>  0070 !   
> 0080 ! Get range of records  
> 0090 !  
>  0100 EP_RANGE:  
>  0110 enter FIRST$,LAST$,RECORDS$  
>  0120 let RECORDS$=""  
>  0130 select record R$ from "arcust" begin FIRST$ end LAST$  
>  0140 let RECORDS$+=R$+$00$  
>  0150 next record  
>  0160 end  
>  0170 !  
> 0180 ! Get the IOLIST for the file  
> 0190 !  
>  0200 EP_IOLIST:  
>  0210 enter IOLIST$  
>  0220 open (1,iol=*)"arcust"  
>  0230 let IOLIST$=iol(1)  
>  0240 close (1)  
>  0250 end

This program can be called remotely by issuing the following:

> K$="000555" ! or "000385", "000461" and others  
>  call "[HTTP:call.pvxplus.com]getcust",K$,R$  
>  print R$  
>   
>  000555  
>  Mike was here  
>  8450 Buga-Buga Drive  
>  Unionville  
>  WL  
>  11.43

This will read the record whose key is "000555" and return its contents in R$ - effectively running the above program starting at line 0010. Note that the system will append the **_.pxc_** suffix to the file name automatically.

There is also an EP_RANGE entry point that will return a range of records with $00$ as a record separator. You can use this entry point to get a list of all the records in the file:

> call "[HTTP:call.pvxplus.com]getcust;EP_RANGE","","999999",Recs$

To retrieve the internal IOLIST for the data file, call the entry point EP_IOLIST:

> call "[HTTP:call.pvxplus.com]getcust;EP_IOLIST",IO_LIST$  
>  print lst(IO_LIST$)  
> iolist CUST_NO$,NAME$,ADDR1$,CITY$,SALESPERSON$,AMT_OWING

## Test Configuration

The Apache HTTP server configuration file used for this Web site is as follows:

> cat /etc/httpd/conf.dcall.conf  
> #  
>  # PxPlus HTTP interface CGI definition  
>  #  
> AddHandler pxplus-call .pxc  
>  Action pxplus-call /cgi-bin/pxcall.cgi  
>   
>  <VirtualHost 208.68.90.163:80>  
> ServerName call.pvxplus.com  
> DocumentRoot "/var/www/pvxplus/httpcall"  
>  </VirtualHost>

#### **Note:**  
Our Web site uses an Apache Virtual Host for this connection as the IP address is shared by many of our host services.
