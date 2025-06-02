# System Variables

**GID** |  **_Operating System Process Identifier_**  
---|---  
  
**_String System Variable_**

##  Contents

String, two-character OS process identifier

##  Description

The **GID** variable can be used to obtain a two-character 16-bit binary operating system group or Process ID (PID).

##  See Also

**[SYS( ) Invoke Operating System Command](../functions/sys.md)**

##  Example

Obtain the 16**-** bit UNIX Process ID by using:

> pid=dec($00$+gid)  
>  ?pid  
>  30633

For larger values (e.g. 32**-** bit), see **[TCB(89)](../functions/tcb.htm#tcb89)**, which returns the numeric value of the current PID. Use this as a replacement for DEC($00$+GID) to retrieve the current PID value.
