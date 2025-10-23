# System Functions

**DTE( )** |  **_Convert Date_**  
---|---  
  
##  Formats

1\. _Convert Numeric Date:_ |  **DTE(**_jul_date_[,_time_][:_fmt_ _$_][,**ERR=**_stmtref_]**)**  
---|---  
2\. _Convert Date String:_ |  **DTE(**_date$_[:_fmt_ _$_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_date$_ |  Date string in the same format as the **DAY_FORMAT** (MM/DD/YY).  
---|---  
_fmt_ _$_ |  Format of the date to be returned. If omitted, the default format is %Mz/%Dz/%Yz (date formatted as MM/DD/YY).  
_jul_date_ |  Julian date to convert. Numeric expression. If the value is 0 (zero), the current date is used. **DTE**(-1) returns a null ("") string if **'BY'=** 0.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_time_ |  Time value containing hours and fractions of hours since midnight. Optional. Numeric expression. If omitted, the current time is used.  
  
##  Returns

Formatted date (converted from Julian).

##  Description

The **DTE( )** function converts a date (and time) from Julian form to a formatted string. _fmt_ _$_ defines the format to be returned, in which each component of the date is represented by **%** (_percent sign_), followed by a one or two letter code. The first letter indicates a source for the data (day, month, year, etc.). The second character (if specified) indicates how to format the returned value.

This table shows the results of the various format options:

**% Char1** |  **Source Format** |  **Default** |  **Char2 = l** |  **Char2 = s** |  **Char2 = z**  
---|---|---|---|---|---  
%h |  Hour (12) |  0**-** 12 |  0**-** 12 |  0**-** 12 |  00**-** 12  
%m |  Minute |  0**-** 59 |  0**-** 59 |  0**-** 59 |  00**-** 59  
%p |  am or pm |  am,pm |  am,pm |  am,pm |  am,pm  
%s |  Seconds within minute |  0**-** 59 |  0**-** 59 |  0**-** 59 |  00**-** 59  
%k |  Milliseconds |  0**-** 999 |  0**-** 999 |  0**-** 999 |  000**-** 999  
%A |  Year |  00**-** 99, A0**-** Z9 |  _same_ |  _same_ |  _same_  
%D |  Day of month |  1**-** 31 |  Monday**-** Sunday |  Mon**-** Sun |  01**-** 31  
%H |  Hour (24) |  0**-** 24 |  0**-** 24 |  0**-** 24 |  00**-** 24  
%J |  Day in year |  1**-** 365 |  1**-** 365 |  1**-** 365 |  01**-** 99  
%M |  Month in year |  1**-** 12 |  January**-** December |  Jan**-** Dec |  01**-** 12  
%P |  AM or PM |  AM,PM |  AM,PM |  AM,PM |  AM,PM  
%S |  Day in seconds |  0**-** 86399 |  0**-** 86399 |  0**-** 86399 |  00**-** 99  
%W |  Day of week |  1**-** 7 |  Monday**-** Sunday |  Mon**-** Sun |  01**-** 07  
%Y |  Year |  1970**-** 9999 |  1970**-** 9999 |  1970**-** 9999 |  00**-** 99  
  
In general, when the second character is **l** (_lowercase L_), the result is long text format; an **s** indicates short text format. PxPlus maintains the exact contents of the text internally. The contents can be changed using a **DEF DTE( )** directive.

If the second letter is **z** , the function supplies the value converted to a two-digit value. The function also returns a 1-byte binary value if the second letter is **p** (for compatibility with other languages).

The format can also contain YYYY, YY, MM, and DD (e.g. "YYYY/MM/DD") for current _Long Year_ , _Year_ , _Month_ and _Day_ values:

**Char1** |  **Source Format** |  **Default**  
---|---|---  
DD |  Day of month |  01**-** 31  
MM |  Month in year |  01**-** 12  
YY |  Year |  00**-** 99  
YYYY |  Year |  1970**-** 9999  
  
If you include any other characters in the date format (e.g. punctuation: slashes, spaces, etc.), the function copies them as literals to the output. To include a percent sign as a literal in the output, use **%%** in the format.

PxPlus includes the **DTE**("%A") format to deal with legacy application Y2K conversions. The current year is returned using 00-99 for 1900 through 1999, A0-A9 for 2000 through 2009, B0-B9 for 2010 through 2019, etc. The function also supports fractional values in the **DTE( )** function using the **DTE**(fraction,*:"form") format.

##  See Also

[**DAY_FORMAT Specify DAY Format**](../directives/day_format.md)  
[**DAY Return Current System Date**](../variables/day.md)  
[**JUL( ) Return Julian Date**](jul.md)  
[**DEF CVS/DTE/LCS/UCS Define System Tables**](../directives/def_cvs~dte~lcs~ucs.md)  
[**'BY'= Base Year**](../parameters/by.md)  
**[FIN( ) Return File Information](fin.md)**

##  Example

**_Example 1:_**

> print dte(0:"%Dl %Ml %D/%Y %hz:%mz %p")  
>   
>  Monday July 24/1995 10:27 pm

**_Example 2:_**

> 0010 print 'CS',dte(0:"%Dl %Ml %D/%Y"),@(70),dte(0:"%hz:%mz %p")  
>  0020 input "Enter Date (MM/DD/YY):",X$:"00/00/00"  
>  0030 let M=num(X$(1,2))  
>  0040 let D=num(X$(3,2))  
>  0050 let Y=num(X$(5,2))  
>  0060 let N=jul(Y,M,D,err=0100)  
>  0070 print "That is a ",dte(N:"%Dl") ! Day value from N in text, long form.  
> 0080 stop  
>  0100 print "Invalid date"; goto 0010

> ->run  
>  Saturday March 27/1999 03:32 pm  
>  Enter Date (MM/DD/YY):03/31/99  
> That is a Wednesday

**_Example 3:_**

The **DTE( )** function will support a valid **DAY** formatted string value:

> day_format "MM/DD/AA"  
>  print dte("01/01/A0":"%Y %Ml %D")  
>   
>  2000 January 1  
>   
>  print dte("01/01/A0":"%Dz/%Mz/%Y")  
>   
>  01/01/2000

**_Example 4:_**

The following example gets the **UTC** time from fin(0,"UTC_MTIME") in seconds. Using **%H** returns the hour based on a 24-hour clock:

> precision 8  
>  print dte(num(fin(0,"UTC_MTIME"))/86400,*:"%Y%Mz%Dz**%Hz** %mz%sz")  
>   
>  20161102**13** 4130

This same example uses **%h** to return the hour based on a 12-hour clock:

> print dte(num(fin(0,"UTC_MTIME"))/86400,*:"%Y%Mz%Dz**%hz** %mz%sz")  
>   
>  20161102**01** 4130
