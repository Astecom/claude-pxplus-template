# System Variables

**RET** |  **_Operating System's Last Error Code_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, operating system error + 256

##  Description

The **RET** variable returns an integer reporting the operating system's error code associated with the last operating call. PxPlus generates this value by adding 256 to the error code value in the **ERR** system variable.

##  See Also

**[ERR Last System-Detected Error Value](err.md)**

##  Example

print "RET = ",ret  
RET = 258
