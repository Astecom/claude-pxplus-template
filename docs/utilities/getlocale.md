# Utility Routines

***GETLOCALE** |  **_Locale Settings_**  
---|---  
  
## Description

The ***getlocale** subroutine is used to quickly access the operating system's locale settings and return a particular parameter if it is available. A _locale_ is a set of parameters that defines the user's language and country, as well as any special variant preferences that the user wants to see in the interface. A locale identifier typically consists of at least a language identifier and a region identifier.

For a list of locale parameters in Windows and in Linux, see **[Locale Parameters in Windows](getlocale.htm#windows)** and **[Locale Parameters in Linux](getlocale.htm#linux)**.

**_Example:_**

> **CALL "*getlocale"** ,"ABBREVMONTHNAMES",_ans_ _$_

This will return the abbreviated month names in the language set in the operating system:

**Language** |  **Abbreviated Month Names**  
---|---  
English (Canadian) |  Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec  
German (Germany) |  Jan,Feb,Mrz,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez  
Spanish (Columbia) |  ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic  
  
##  Locale Parameters in Windows

This table displays a list of available locale parameters in **_Windows_** :

**Parameter** |  **Description**  
---|---  
ABBREVDAYNAMES |  Abbreviated day names  
ABBREVMONTHNAMES |  Abbreviated month names  
AMPM |  Period designators (e.g. "AM,PM")  
COUNTRYNAME |  Localized name of country (e.g. "Germany" in UI language)  
CURRENCY |  Local monetary symbol (e.g. "$")  
DAYNAMES |  Long day names  
DECIMAL |  Decimal separator (e.g. "." for 1,234.00)  
DIGITS |  Number of fractional digits (e.g. 2 for 1.00)  
ENGCOUNTRYNAME |  English name of country (e.g. "Germany")  
ENGLISHLANGUAGENAME |  English name of language (e.g. "German")  
INTLSYMBOL |  International monetary symbol (e.g. "USD")  
ISO3166CTRYNAME |  ISO abbreviated country name (e.g. "US")  
ISO639LANGNAME |  ISO abbreviated language name (e.g. "en")  
LOCALIZEDDISPLAYNAME |  Localized name of locale (e.g. "German (Germany)" in UI language)  
LOCALIZEDLANGUAGENAME |  Language Display Name for a language (e.g. "German" in UI language)  
LONGDATE |  Long date format string (e.g. "dddd, MMMM dd, yyyy")  
LZERO |  Leading zeros for decimal (e.g. 0 for .97, 1 for 0.97)  
MEASURE |  0 = Metric, 1 = US Imperial  
MONDECIMALSEP |  Monetary decimal separator (e.g. "." for $1,234.00)  
MONTHNAMES |  Long month names  
MONTHOUSANDSEP |  Monetary thousand separator (e.g. "," for $1,234.00)  
NATIVECOUNTRYNAME |  Native name of country (e.g. "Deutschland")  
NATIVELANGUAGENAME |  Native name of language (e.g. "Deutsch")  
SHORTDATE |  Short date format string (e.g. "MM/dd/yyyy")  
THOUSAND |  Thousand separator (e.g. "," for 1,234.00)  
TIMEFORMAT |  Time format string (e.g. "HH:mm:ss")  
  
##  Locale Parameters in Linux

This table displays a list of available locale parameters in **_Linux_** :

**Parameter** |  **Description**  
---|---  
ABBREVDAYNAMES |  Abbreviated day names  
ABBREVMONTHNAMES |  Abbreviated month names  
AMPM |  Period designators (e.g. "AM,PM")  
CURRENCY |  Local monetary symbol (e.g. "$")  
DAYNAMES |  Long day names  
DECIMAL |  Decimal separator (e.g. "." for 1,234.00)  
DIGITS |  Number of fractional digits (e.g. 2 for 1.00)  
ENGCOUNTRYNAME |  English name of country (e.g. "Germany")  
ENGLISHLANGUAGENAME |  English name of language (e.g. "German")  
INTLSYMBOL |  Intl monetary symbol (e.g. "USD")  
ISO3166CTRYNAME |  ISO abbreviated country name (e.g. "US")  
ISO639LANGNAME |  ISO abbreviated language name (e.g. "en")  
LONGDATE |  Long date format string (e.g. "dddd, MMMM dd, yyyy")  
MEASURE |  1 = Metric, 2 = US Imperial  
MONDECIMALSEP |  Monetary decimal separator (e.g. "." for $1,234.00)  
MONTHNAMES |  Long month names  
MONTHOUSANDSEP |  Monetary thousand separator (e.g. "," for $1,234.00)  
NATIVECOUNTRYNAME |  Native name of country (e.g. "Deutschland")  
NATIVELANGUAGENAME |  Native name of language (e.g. "Deutsch")  
SHORTDATE |  Short date format string (e.g. "MM/dd/yyyy")  
THOUSAND |  Thousand separator (e.g. "," for 1,234.00)  
TIMEFORMAT |  Time format string (e.g. "HH:mm:ss")
