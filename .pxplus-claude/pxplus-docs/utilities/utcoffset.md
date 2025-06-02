# Utility Routines

***TOOLS/UTCOFFSET** |  **_Get UTC Offset for a Given Date_**  
---|---  
  
## Invocation

**CALL "*tools/utcoffset"** ,_date_ _$,outpututcoffset_

**_Where:_**

_date$_ |  The date to calculate the UTC offset for. The date format is: "YYYY-MM-DD[ HH:MM][ AM|PM]" **_Examples:_** "2023-11-30"  
"2023-11-30 21:00"  
"2023-11-30 08:00 AM" If no time is specified, the time is assumed to be the beginning of the day. If no AM/PM is specified, the time is a 24-hour format. Other date formats **_may_** be supported, but this depends on the operating system and the version of PxPlus used.  
---|---  
_outpututcoffset_ |  Output number where the UTC offset is returned in seconds.  
  
## Description

Get the UTC offset for the local time zone for a given date.

_(The utcoffset utility was added in PxPlus 2023.)_

## Example

call "*tools/utcoffset","2024-11-30",newOffset  
print "UTC offset is "+str(newOffset/60/60)+" hours."
