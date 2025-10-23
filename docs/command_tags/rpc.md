# Special File Command Tags

**[RPC]** |  **_Remote Process Control_**  
---|---  
  
##  Formats

1\. _Call Remote Subprogram_ _:_ |  **CALL** **"[RPC:_server_]**_subprog_[;_entry_]**"**[,**ERR=**_stmtref_][,_arglist_]  
---|---  
2\. _Open Remote File_ _:_ |  **OPEN** (_chan_[,_fileopt_])**"[RPC:_server_]**_filename_**"**  
  
**_Where_** _:_

**[RPC:_server_]** |  RPC clause that initiates the remote **CALL**._server_ is the logical server name.  
---|---  
_chan_ |  Channel or logical file number to open.  
_;entry_ |  _(Optional)_ Entry point label. If you include a label, precede it with a **;**  _(semi-colon)_ and append it to your subprogram name.  
_filename_ |  Name of the file to open prefixed by **[RPC:_server_]**. Use a string literal as in: OPEN (14)"[RPC:server]my_file".  
_fileopt_ |  File options. Supported options include: |  **BSZ=**_num_ |  Block size  
---|---  
**ERR=**_stmtref_ __ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**ISZ=**_num_ |  Open file in binary mode  
**NBF=**_num_ |  Dedicated number of buffers  
**OPT=**_char$_ |  File open options  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
_arglist_ |  _(Optional)_ One or more arguments (comma-separated if you include a list _arg,arg_...) to pass to the subprogram.  
_server_ |  Name to be associated with a program server. Established using the [**PROCESS SERVER**](../directives/process_server.md) directive.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **[RPC]** tag is used as a prefix to denote that PxPlus is to CALL a subprogram or open a file that resides on a remote server. Before a remote process control can be initiated, the server must be identified and the _server_ name established via the [**PROCESS SERVER**](../directives/process_server.md) directive.

#### **Note:**  
This feature requires **_PxPlus RPC_** activation.

##  Format 1

**_Call Remote Subprogram_**

**CALL "[RPC:_server_]**_subprog_[;_entry_]**"**[**,ERR=**_stmtref_][**,**_arglist_]**,**_varlist_

The RPC CALL format tells PxPlus that your subprogram is to run (and that your data resides) on a different processor on the network; i.e. on a remote server. Use the same syntax as you would for a standard **[CALL](../directives/call.md)** directive, except that a **[RPC:_server_] **clause designates a remote server to handle the CALL. Since no data is transferred during RPC CALL processing, this helps maximize both network performance and data security.

**_Transparent RPC Process_**

At run time, PxPlus does not transfer data files or programs across the network for your RPC CALL. Instead, PxPlus puts your called remote subprogram name and parameters into a TCP/IP data packet and sends the packet to your remote server. The remote server loads and runs your subprogram, passing it your parameters. When your subprogram exits, the remote server puts your parameters (as altered by your subprogram) into a TCP/IP response packet and sends this back to the calling program.

#### **Note:**  
Since PxPlus RPC processing is true distributed processing handled as a transparent background process, any displays during subprogram processing will appear on the remote server. **_Do not_** attempt to display subprogram activity on the calling machine.

##  Format 2

**_Open Remote File_**

**OPEN (**_chan_[,_fileopt_]**)"[RPC:_server_]**_filename_**"**

PxPlus supports the **[OPEN](../directives/open.md)** directive for remote files. Prefix your filename with the **[RPC:_server_]** clause to indicate that the server is to handle file requests.

##  See Also

[**PROCESS SERVER Establish Remote Server**](../directives/process_server.md)  
[**OPEN Open a File for Processing**](../directives/open.md)
