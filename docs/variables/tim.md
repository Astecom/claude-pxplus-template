# System Variables

**TIM** |  **_Time in Hours Past Midnight_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Decimal numeric, **PRECISION** 6, system time

##  Description

The **TIM** variable returns the current system time in hours past midnight. The **TME** and **TIM** variables are identical.

##  See Also

**[SETTIME Set Local Time](../directives/settime.md)**  
**[PRECISION Change Current Precision](../directives/precision.md)  
[TME Time in Hours Past Midnight](tme.md)**

##  Example

print tim  
settime 1.10  
print "Current time ",tim  
  
->run  
19.341613  
Current time 1.100502
