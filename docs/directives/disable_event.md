# Directives 

**DISABLE EVENT** |  **_Internal Event Disable_**  
---|---  
  
##  Formats

1. |  _Timer Event_ : |  **DISABLE EVENT ON TIME**  
---|---|---  
2. |  _Data Available on Channel Event:_ |  **DISABLE EVENT ON DATA**(_chan_)  
3. |  _On Close of Channel Event:_ |  **DISABLE EVENT ON CLOSE** (_chan_)  
4. |  _On Open Event:_ |  **DISABLE EVENT ON OPEN**  
5. |  _On Class Load Event:_ |  **DISABLE EVENT ON LOAD CLASS**  
**_Where:_**  
---  
_chan_ |  Channel or logical file number  
  
##  Description

Use the **DISABLE EVENT** directive to disable the handling of various system events within a PxPlus session. The generation and trapping of events requires that the internal "*system.pvc" COM object be defined first.

_(The Disable Event directive was added in PxPlus v7.00.)_

##  See Also

[**ENABLE EVENT Internal Event Enable**](enable_event.md)

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
