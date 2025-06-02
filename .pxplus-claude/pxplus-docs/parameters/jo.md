# System Parameters

**'JO'** |  **_Julian Date Offset_**  
---|---  
  
##  Description

Due to different calendars and how different systems handle pre-Gregorian calendars, it is sometimes necessary to adjust the Julian date by a few days to have the JUL functions match up with other computer systems.

The **'JO'** parameter allows the programmer to adjust the base day by between -32000 and +32000 days.

By default, this will be set to 0  _(zero)_ indicating that January 1st of the year specified in the **'BY'** parameter is day 0. Setting **'JO'** to 1 will adjust January 1st to be day 1, etc. The **'JO'** parameter can be set to any value between -32000 and +32000.

## Default

**0** (zero) -- No date offset

## See Also

**['BY' Base Year](by.md)**
