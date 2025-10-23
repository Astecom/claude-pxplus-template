# Directives   
  
**POP** |  **_Premature Exit from Stack_**  
---|---  
  
##  Format

**POP** [*]

**_Where:_**

* |  Optional. Clears the complete **GOSUB/FOR** stack.  
---|---  
  
_(The * option was added in PxPlus 2018.)_

##  Description

The **POP** directive pops, or clears, the top entry on the stack. Using **POP *** clears the complete **GOSUB/FOR** stack (similar to the **RESET** directive except that **RESET** also changes the **CTL** and **ERR** values).

The **POP** directive performs the same operation as an **EXITTO**  _stmtref_ directive for terminating a **FOR** /**NEXT** or **GOSUB** operation except that it does not transfer control (to a statement reference) but continues with the next statement in the execution sequence. See **[Example](pop.htm#Mark5)**.

#### **Note:**  
Use the **'POP'** mnemonic (**_not_** the **POP** directive) if you want to pop a child window superimposed on a parent window.

##  See Also

[**EXITTO End Loop, Transfer Control**](exitto.md)  
[**'POP' or 'WR' Restore Previous Window**](../mnemonics/pop.md)  
**[RESET Reset Program State](reset.md)**

##  Example

PxPlus will generate an Error #28: No corresponding FOR for NEXT if it encounters a **[NEXT](next.md)** directive after you **POP** a **FOR** loop. In this example, the **POP** directive is used to terminate a **FOR** loop, leaving the**GOSUB** 's **RETURN** entry on the stack. (No Error #28 is generated.)

> gosub SCAN_FOR_IT  
>   
> SCAN_FOR_IT:  
>  for I=1 to 1000  
>  if X$[I]="MOOCOW" \  
>  then pop ;  
>  return  
>  next  
>  print "NOT FOUND";  
>  return

Below is a typical **POP *** example:

> def class "a"  
>  function test()Do_Test  
>  end def  
> Do_Test:  
>  for i=1 to 3  
>  for j=1 to 3  
>  print "I=",i," J=",j  
>  if j=2 \  
>  then pop *;  
>  return 123  
>  next  
>  next  
>  return 456
