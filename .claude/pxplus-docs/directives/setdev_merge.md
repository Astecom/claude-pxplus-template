# Directives 

**SETDEV MERGE** |  **_Transfer TCP Connections_**  
---|---  
  
## Format

**SETDEV (**_chan1_**) MERGE WITH (**_chan2_**)**

**_Where:_**

_chan1_ |  Channel number of the TCP file that will receive the connections.  
---|---  
_chan2_ |  Channel number of a TCP file whose connection will be transferred to _chan1_.  
  
##  Description

The **SETDEV ( ) MERGE** directive allows the current connection(s) from an open TCP channel/file to be transferred to another. It is typically used to simplify the logic required to READ from multiple connections by consolidating the connections onto a single channel from which you can issue a READ.

Both channel numbers must refer to TCP file handles. The channel from which the connections will be transferred will be closed upon completion of this command.

The **SETDEV ( ) MERGE** directive is also used to only allow merging of clients to the server.

#### **Note:**  
It is allowable to mix secure (SSL) connections and insecure connections.

_(The SETDEV MERGE directive was added in PxPlus v10.20.)  
(Support for client merges was added in PxPlus 2018.)_
