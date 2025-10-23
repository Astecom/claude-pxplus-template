# System Variables  
  
**DAY** |  **_Return Current System Date_**  
---|---  
  
**_String System Variable_**

##  Contents

String, current system date, formatted

##  Description

The **DAY** variable contains the current system date (e.g. 11/15/00) in a format based on the date style set in the **DAY_FORMAT** directive (MM/DD/YY by default).

Changes in **DAY_FORMAT** are reflected in the value returned in the **DAY** variable.

##  See Also

**[DAY_FORMAT Specify DAY Format](../directives/day_format.md)**

##  Example

print day," ",  
day_format "DD/MM/YYYY";  
print day  
  
->run  
11/15/00 15/11/2000
