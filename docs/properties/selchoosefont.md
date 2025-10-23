# Control Object Properties

**SelChooseFont** |  **_RTF Word Processor Font Selector_**  
---|---  
  
## Description

RTF word processor Font selector

This property controls access to the **Font** selection dialogue box within the RTF word processor multi-line style control.

When this control is set to 1, the user can press Ctrl-Shift-Insert to initiate a Font selector within the control. Setting the control to 0 disables Ctrl-Shift-Insert. If desired, the property can be set to 2, which will cause the **Font** selection dialogue box to be initiated under program control.

_(The SelChooseFont property was added in PxPlus v7.10.)_

## Default

The default setting is 1 (Ctrl-Shift-Insert enabled).

## Used By

**MULTI_LINE _(RTF word processing style)_**
