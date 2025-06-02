# Directives 

**PREINPUT** |  **_Place Data in Input Queue_**  
---|---  
  
##  Formats

1\. _Preinput_ _Value & CTL_ _:_ |  **PREINPUT** _string$_[,_ctl_val_]  
---|---  
2\. _Preinput_ _CTL Only_ _:_ |  **PREINPUT** _ctl_val_  
3\. _Jump the Queue_ _:_ |  **PREINPUT NEXT**  
  
**_Where_** _:_

_ctl_val_ |  Value to be placed in CTL when the input is processed. Numeric expression. If omitted, the channel number defaults to 0.  
---|---  
_string$_ |  String expression. Placed in the input queue for the user's terminal.  
  
##  Description

Use the **PREINPUT** directive to have your program prime the input buffer for the user's terminal with a value. You can issue more than one **PREINPUT** directive with the messages queued. You can also use this directive to have subprograms respond to **INPUT** statements in the **CALL** ing or subsequent programs.

##  Format 1

**_Preinput_ _Value, CTL_**

**PREINPUT** _string$_[,_ctl_ __val_]

This preinputs the _string$_ expression and sets the optional CTL value to be returned. In this format, the first **PREINPUT** data will be processed first (FIFO).

##  Format 2

**_Preinput_ _CTL Only_**

**PREINPUT** _ctl_val_

You can add the **PREINPUT** CTL value alone to the queue.

##  Format 3

**_Jump the Queue_**

**PREINPUT NEXT**

When you use this format, the **PREINPUT** entry goes to the front of the queue (LIFO).

##  See Also

[**INPUT Get Input from Terminal**](input.md)  
[**CTL Control Code: Key to End Input**](../variables/ctl.md)
