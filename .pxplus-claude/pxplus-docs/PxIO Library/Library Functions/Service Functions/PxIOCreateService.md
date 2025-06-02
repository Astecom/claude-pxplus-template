# Service Functions 

**PxIOCreateService** |  **__**  
---|---  
  
## Description

Creates and initializes a PxIOService object used for interfacing with the library

## Format

**int** **PxIOCreateService(PxIOService *service, const char *hostname, int port, BOOL sslFlag, const char *caFile, const char *userID, const char *companyCode);**

**_Where:_**

**service** |  A pointer to storage in which to save the handle for the newly created PxIOService. This handle is used to identify and validate the caller in other library functions that require it.  
---|---  
**hostname** |  If connecting to PxServer, this parameter specifies the IP address or host name. Otherwise, it should be set to NULL.  
**port** |  Specifies the port number if connecting to PxServer. Otherwise, set to zero.  
**sslFlag** |  If connecting to PxServer, and this parameter is TRUE, a SSL connection will be established. If this parameter is FALSE, a non-encrypted connection is made. If not connecting to PxServer, this parameter is ignored.  
**caFile** |  A null-terminated string indicating the path and file name of the certificate authority file. This parameter should be set to NULL if SSL or server trust verification is not required. If creating a local service, this parameter is ignored and should be set to NULL.  
**userId** |  An optional null-terminated string containing user identification information for connecting to PxServer. If not connecting to PxServer or security verification is not required, pass in NULL.  
**companyCode** |  A null-terminated string. If connecting to PxServer, the caller may supply a company code for security verification. If not, pass in NULL. If not connecting to PxServer, this parameter is ignored and should be set to NULL.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note** :  
PxIOService handles are thread specific. Passing a PxIOService handle that was created with another thread to a function will always result in the called function's failure.   
  
If a host name/IP address and port are specified, a connection will be made to PxServer, and library calls using the created service, or file handles based on the service, will be executed remotely on PxServer.   
  
If accessing remote files, it will make a TCP/IP connection to the server, and it will send the userID and companyCode to the server for security purposes.   
  
If accessing local files, then the ipAddress, userID, and companyCode parameters must be NULL.
