# System Parameters

**'+B'** |  **_Set Button Bounce Time Out_**  
---|---  
  
##  Description

The **'+B'** parameter is used to define the number of milliseconds that must occur between presses of the same button. Setting this parameter can help avoid the user accidentally pressing the same button multiple times.

This parameter can be set to a value between 0 and 5000 ms.

_(The '+B' system parameter was added in PxPlus v7.65, build 9180.4.)_

##  Default

**0** \- All button pushes will be processed.

## Example

Setting this parameter to 500 means that once a button is pushed, subsequent pushes of the same button will be ignored for 500 ms (1/2 second). Multiple accidental presses are common when using touch screens so setting this parameter may help.
