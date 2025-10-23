# System Parameters

**'TT'** |  **_Timed Trace_**  
---|---  
  
##  Description

Sets trace output prefixed by the current time (in seconds). Parameter codes allow control over where a line wraps based on the record size of the output file, output of the full program path name, and output of the line number only (no code).

Valid settings for the **'TT'** parameter are:

**0** |  No output  
---|---  
**1** |  Trace line prefixed with time value followed by a space  
**2** |  Trace line prefixed with full program path; delimiter becomes pipe "|"  
**4** |  Only the statement number is output (program line is suppressed)  
**8** |  Trace line prefixed with stack depth (parameter **['B0'](b0.md)** adjusted)  
  
These values are additive; e.g. to set 2 and 4, use SET_PARAM 'TT'=2+4.

##  Default

**'TT'=0** (No output)
