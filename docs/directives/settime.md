# Directives

**SETTIME** |  **_Set Local Time_**  
---|---  
  
##  Format

**SETTIME**[_time_]  
  
**_Where:_**

_time_ |  Current time of day for the user session. Numeric expression.  
---|---  
  
##  Description

Use the **SETTIME** directive to set or change the current processing time (returned in the **TIM** , **TME** and **TMS** variables). The value of _time_ must be between 0 and 24 (the desired time of day based on a 24-hour clock). Once set, the time will be continuously updated based on the operating system clock.

PxPlus will continuously update the date and time based on the set time until the end of the session or until the execution of a **START** directive. Then, PxPlus reverts to the operating system's time.

Note that this directive calculates an offset from the current operating system date/time. If that date/time is altered after the execution of the **SETTIME** directive, a corresponding change will be reflected in the values of **TIM** , **TME** and **TMS**.

#### **Note:**  
This directive only affects the user executing the directive.

##  See Also

**[TIM Time in Hours Past Midnight](../variables/tim.md)  
[TME Time in Hours Past Midnight](../variables/tme.md)  
[TMS Seconds Expired in Current Minute](../variables/tms.md)  
[DTE( ) Convert Date](../functions/dte.md)**

##  Example

print tim  
settime 1.10  
print "Current time",tim  
  
->run  
8.51  
Current time 1.10

If the operating system's time was advanced by an hour (i.e. from 8.51 to 9.51), that hour would also be added to the time for the current session, advancing the current session's time to 2.10 and setting **TIM** , **TME** and **TMS** to the new value.
