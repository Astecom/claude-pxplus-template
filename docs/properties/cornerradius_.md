# Control Object Properties

**CornerRadius$** |  **_Corner Radius_**  
---|---  
  
## Description

This property is used to set the corner radius for a control. Works only in **4D** mode.

Possible values are:

_(Null)_ |  Property is not set.  
---|---  
_Round_ |  Sets the default radius of 3 for round corners.  
_Square_ |  Sets the default radius of 0 for square corners.  
_(Value)_ |  Enter a value within the range shown below (based on control type). |  **_Control Type_** |  **_Supported Range_**  
---|---  
Button |  0 to 255 inclusive  
Check Box (standard, no bitmap) |  See **[CbCornerRadius$](cbcornerradius_.md)**  
Check Box (with bitmap) |  0 to 255 inclusive  
Drop Box |  0 to 3 inclusive  
List Box (all types **_except_** Report View and Variable List Box) |  0 to 8 inclusive  
Multi-Line |  0 to 7 inclusive  
Radio Button (standard, no bitmap) |  Always Round  
Radio Button (with bitmap) |  0 to 255 inclusive  
Tri-State Check Box (with bitmap) |  0 to 255 inclusive  
Variable Drop Box |  0 to 3 inclusive  
  
#### **Note:**  
Corner rounding is limited based on the control type and/or the control size.  
  
**_Example:_**

Button CornerRadius$ set to **Round** :

> BUTTON 100,@(10,10,12,3)="{!Stop}"  
>  y=100  
>  y'CornerRadius$="round"  
>   
>  

Button CornerRadius$ set to **Square** :

> BUTTON 100,@(10,10,12,3)="{!Stop}"  
>  y=100  
>  y'CornerRadius$="square"  
>   
>  

Button CornerRadius$ set to a value of **10** :

> BUTTON 100,@(10,10,12,3)="{!Stop}"  
>  y=100  
>  y'CornerRadius$="10"  
>   
>  

_(The CornerRadius$ property was added in PxPlus 2026.)_

## See Also

**[CbCornerRadius$](cbcornerradius_.md)**

## Used By

**BUTTON  CHECK_BOX  DROP_BOX  LIST_BOX  LIST_VIEW  MULTI_LINE  RADIO_BUTTON  TREE_VIEW  TRISTATE_BOX  VARDROP_BOX**

** **

 

 
