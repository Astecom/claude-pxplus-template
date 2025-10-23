# System Functions

**JUL( )** |  **_Return Julian Date_**  
---|---  
  
##  Formats

1. |  _Julian from Numeric_ : |  **JUL(**_year,month,day_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Julian from Formatted Date:_ |  **JUL(**_string$_[,_format$_] [,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_year_ |  Numeric expression of the year. Use 0 (zero) for the current year. If your value is less than 100, the current century is added to the value.  
---|---  
_month_ |  Numeric expression of the month. Use 0 (zero) for the current month.  
_day_ |  Numeric expression of the day. Use 0 (zero) for the current day.  
_string$_ |  String expression containing the date to convert. Format must match the current DAY_FORMAT.  
_format$_ |  Option format of the date string where YYYY or YY identifies the Year position, MM the month, and DD the day. If not provided, the system standard DAY_FORMAT setting is used.  
_stmtref_ |  Program line number or statement label to which to transfer control if an error occurs.  
  
##  Returns

Julian date (converted from year, month, day).

##  Description

The **JUL( )** function is used to convert a date from year, month, day to a Julian date. The Julian date is an integer: the number of days since the system base date. By default, this is January 1, 1970. Use the **['BY'](../parameters/by.md)** system parameter to change the base date.

#### **Note:**  
Historically, the true Julian calendar starts sometime around 4713 BC; however, because of errors in early calendars, dates prior to 1200 are not reliable. If you want the **JUL( )** function to return dates based roughly on the Julian calendar, set the **['BY'](../parameters/by.md)** system parameter to 0 (zero).

You can also specify the desired date format to use to convert the date string.

**_Example:_**

> jul("311217","DDMMYY")  
> jul("20173112","YYYYDDMM")  
> jul("12/31/17","MM/DD/YY")

_(Support to allow the desired date format to be specified was added to PxPlus 2018.)_

##  See Also

[**DAY_FORMAT Specify DAY Format**](../directives/day_format.md)  
[**DAY Return Current System Date**](../variables/day.md)  
[**DTE( ) Convert Date**](dte.md)  
[**'BY'= Base Year**](../parameters/by.md)  
[**'JO'= Julian Date Offset**](../parameters/jo.md)

_(The 'JO' parameter was added in PxPlus v10.00.)_

##  Example

The following example converts a given date to Julian format and calculates the difference from the current Julian date:

> 0010 input "Enter Date (MM/DD/YY):",X$:"00/00/00"  
>  0020 let M=num(X$(1,2))  
>  0030 let D=num(X$(3,2))  
>  0040 let Y=num(X$(5,2))  
>  0050 let N=jul(Y,M,D,err=0100)  
>  0060 print "That is ",N-jul(0,0,0)," days from now"  
>  0070 stop  
>  0100 print "Invalid date"; goto 0010  
>   
>  ->run  
>  Enter Date (MM/DD/YY):03/31/99  
>  That is 23 days from now

In the following example, the **JUL( )** function accepts a valid **DAY** string and returns the corresponding Julian date:

> X$="01/01/A0"  
> day_format "MM/DD/AA"  
>  print jul(X$)  
>  10957  
>  print dte(10957:"%Y %Ml %D")  
>  2000 January 1

**JUL( )** can be used to determine if a given date is either Saturday or Sunday. Since the **JUL( )** function returns a day number, **JUL (...) | 7** would provide a week day number in the range 0 - 6. Depending on what is configured as the base year (standard is January 1st 1970, compatibility mode is 4714 BC), the day number changes. The **[JO](../parameters/jo.md)** system parameter can also be used to adjust the Julian date for compatibility purposes with other languages.

**_Example:_**

If the base year is set to the PxPlus standard of 1970 ('BY'=1970):

> Sun=3, Mon=4, Tue=5, Wed=6, Thu=0, Fri=1, Sat=2

The weekend can be tested as follows:

> if ((jul(y,m,d)+3)|7)>=5 then <WEEKEND>

However, if 'BY'=0:

> Sun=6, Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5

The weekend can be tested as follows:

> if ((jul(y,m,d))|7)>=5 then <WEEKEND>

#### **Note:**  
A simple technique to check for the weekend, regardless of the setting of the base year, is to subtract the **JUL** value from the **JUL** of a known date.  
  
**_Example:_**  
  
January 1st, 2000 was a Saturday; thus, mod(jul(m,d,y) - jul(2000,1,1),7) will yield 0 or 1 for Saturday and Sunday respectively.
