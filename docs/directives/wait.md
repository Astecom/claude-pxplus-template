# Directives 

**WAIT** |  **_Temporarily Halt Execution_**  
---|---  
  
##  Format

**WAIT** _seconds_  
  
** _Where_ _:_**

_seconds_ |  Value determines the number of seconds to wait. Numeric expression. Maximum 86400 seconds.

#### **Note:**  
**_Prior to PxPlus 2016_ ,** the maximum number was 9999 seconds.  
_  
**As of PxPlus 2016**_**,** the maximum number was increased to 86400 seconds (equivalent of 24 hours).  
- Wait has a minimum of 1 second, its not more precise than that  

---|---  
  
##  Description

Use the **WAIT** directive to have the system suspend execution for the number of seconds you indicate in the numeric expression. During the time the program is suspended, the **[SETESC](setesc.md)** directive is deferred. This directive will only be processed once the **WAIT** interval has elapsed.

#### **Note:**  
The accuracy of the timing varies from operating system to operating system. On UNIX/Linux systems, the **WAIT** is accurate to within one second by default. On UNIX/Linux where a finer resolution time is supported, you can set the [**'+M'**](../parameters/plusm.md) system parameter, which will cause the operating system support waiting in fractions of a second.

##  Example

0110 read (1,err=1000,key=K$)N$  
1000 rem Test for busy record  
1010 if err=0 then print @(0,22),"Busy. Will retry"; wait 5; retry

#### **Note:**  
**WAIT 0** is often used to flush the display cache.  
  
**_Example:_**  
  
print 'image'("Bar"),'fill'(1,4),'pen'(1,1,4),'image'(""), wait 0
