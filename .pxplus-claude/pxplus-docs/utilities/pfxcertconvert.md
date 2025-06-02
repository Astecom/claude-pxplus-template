# Utility Routines

***TOOLS/PFXCERTCONVERT** |  **_Convert PFX Certificate_**  
---|---  
  
## Invocation

**CALL "*tools/pfxcertconvert"** [ _,_**ERR** =_stmtref_ ], _pfxpath_ _$, pfxpswd$, pempath$_

**_Where:_**

_pfxpath_ _$_ |  Path to the PFX certificate file to convert.  
---|---  
_pfxpswd_ _$_ |  Password for the PFX certificate.  
_pempath_ _$_ |  Desired path to the converted PEM certificate output.  
  
## Description

Convert PFX SSL/TLS security certificate into a PxPlus supported PEM SSL/TLS security certificate (Windows and UNIX/Linux).

_(The PFXCertConvert utility was added in PxPlus 2019.)_

## See Also

**[SSL/TLS Security Certificates](../ssl_tls_certificates.md)**
