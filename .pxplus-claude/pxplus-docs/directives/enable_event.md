# Directives 

**ENABLE EVENT** |  **_Internal Event Enable_**  
---|---  
  
##  Formats

1. |  _Timer Event_ : |  **ENABLE EVENT ON TIME**  
---|---|---  
2. |  _Data Available on Channel Event:_ |  **ENABLE EVENT ON DATA**(_chan_)  
3. |  _On Close of Channel Event:_ |  **ENABLE EVENT ON CLOSE** (_chan_)  
4. |  _On Open Event:_ |  **ENABLE EVENT ON OPEN**  
5. |  _On Class Load Event:_ |  **ENABLE EVENT ON LOAD CLASS**  
  
**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
  
##  Description

**_(Windows Only)_**

Use the **ENABLE EVENT** directive to enable the handling of various system events within a PxPlus session. The generation and trapping of events requires that the internal "*system.pvc" COM object be defined first.

##  See Also

[**DISABLE EVENT Internal Event Disable**](disable_event.md)  
**[WAIT FOR EVENT Temporarily Halt Execution](wait_for_event.md)**

##  Example

def object PvxComID,"*system" ! Activate support for System Events  
enable event on tim=2 ! Activate timer event at two second intervals  
on event "TimeOut" from PvxComIDpreinput 99 ! Establish how to handle the event  
c=0  
while 1  
input *  
if ctl=99 \  
then c++;  
print "Timeout ",c;  
if c>3 \  
then break  
wend  
disable event on tim ! Deactivate timer event  
drop object PvxComID  
end
