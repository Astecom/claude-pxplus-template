# Control Object Properties

**FocusRect** |  **_Focus Rectangle_**  
---|---  
  
## Description

This property controls whether a dotted rectangle displays when the control has focus. _Default_ is On.

Possible values are:

  |  0 |  No focus rectangle is shown.  
---|---|---  
  |  1 |  Focus rectangle is shown.  
  
**_Example:_**

To turn Button focus **_Off_** :

          BUTTON 100,@(40,12,10,2)="{!Stop}Button 1"  
          y=100  
          y'FocusRect=0  
  
          

To turn Button focus back **_On_** :

          BUTTON 100,@(40,12,10,2)="{!Stop}Button 1"  
          y=100  
          y'FocusRect=1  
  
          

_(The FocusRect property was added in PxPlus 2026.)_

## Default

On

## See Also

The **OPTION** mnemonic provides **FocusRect** options based on control type; such as **[FocusRectBtn](../mnemonics/option.htm#focusbtn)** (for Buttons) and **[FocusRectCB](../mnemonics/option.htm#focuscb)** (for Check Boxes), among others.

## Used By

**BUTTON  CHECK_BOX  DROP_BOX  LIST_BOX  LIST_VIEW  RADIO_BUTTON  REPORT_VIEW  TREE_VIEW  TRISTATE_BOX**

 

 

 
