# Directives

**ENDTRACE** |  **_End Trace Output_**  
---|---  
  
##  Formats

1. |  _End Trace_ : |  **ENDTRACE**  
---|---|---  
2. |  _End Tracing of Windows Host Program:_ |  **ENDTRACE SERVER**  
  
**_Where_**

**SERVER** |  **_For Internal Use Only_**  
---|---  
  
##  Description

Use the **ENDTRACE** directive to stop the tracing of program statements (activated by a previous **SETTRACE** directive).

##  See Also

**[SETTRACE Enable Program Tracing](settrace.md)**

##  Example

0010 settrace  
0020 defctl -1011=3 ! Return CTL 3 on up arrow  
0030 input "Enter name:",N$  
0040 on ctl goto 0050,0030,0030,0060,0060  
0050 input "Enter Addr:",A$  
0060 endtrace ; print "DONE"; end  
  
->run  
0010 settrace  
0020 defctl -1011=3 ! Return CTL 3 on up arrow  
0030 input "Enter name:",N$ Enter name: ! User hit up arrow  
0040 on ctl goto 0050,0030,0030,0060,0060  
0060 endtrace ; print "DONE"; end DONE
