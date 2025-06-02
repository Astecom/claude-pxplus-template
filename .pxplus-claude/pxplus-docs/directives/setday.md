# Directives 

**SETDAY** |  **_Change Local Date_**  
---|---  
  
##  Format

**SETDAY** [_date$_]

**_Where:_**

_date$_ |  Date to assign to the **DAY** variable for the current session. String expression.  
---|---  
  
##  Description

Use the **SETDAY** directive to set or change the current local processing date for the current user and session (returned in the **DAY** system variable). **SETDAY** assumes that the date is **_always_** three numeric fields separated by a single character such as a **-**  _(dash)_ , **/**  _(slash)_ , **,**  _(comma)_ , **.**  _(period)_ , etc. with the **_month_** first, then **_day_** and **_year_**. The year can be either 2 or 4 digits. If a 2-digit year is specified, the century will be the current century.

#### **Note:**  
The **DAY_FORMAT** directive has **_no effect_** on either the format of the string provided to **SETDAY** or the month/day/year order.

PxPlus will continue to update the altered date based on the current time and date. The altered date will stay in effect until the end of the session or until the execution of a **START** directive, and then PxPlus reverts to the operating system's current date. Note that this directive calculates an offset from the current operating system date/time. If the operating system date is altered after the execution of the **SETDAY** directive, a corresponding change will be reflected in the value of **DAY**.

Issuing a **SETDAY ""** will restore the local process date and time to the operating system value.

#### **Note:**  
This directive only affects the user executing the directive.

##  See Also

[**DAY Return Current System Date**](../variables/day.md)  
[**DTE( ) Convert Date**](../functions/dte.md)  
**[START Restart Session](start.md)**

##  Example

setday "11/15/00"  
print day  
setday "02/26/00"  
print "Today's date is ",day  
  
->run  
11/15/00  
Today's date is 02/26/00

The date 02/26/00 is only in effect for the current session. If the operating system's date and time are advanced by 2 days (to the 28th of November) during the current session, then the current session date 02/26/00 will be advanced to 02/29/00 for the current user.
