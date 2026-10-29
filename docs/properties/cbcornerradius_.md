# Control Object Properties

**CbCornerRadius$** |  **_Check Box Corner Radius_**  
---|---  
  
## Description

This property is used to set the corner radius for check boxes that look like check boxes (no bitmap defined), not for check boxes that look like normal buttons. Works only in **4D** mode.

Possible values are:

  |  _(Null)_ |  Property is not set.  
---|---|---  
  |  _Round_ |  Sets the default radius of 3 for round corners.  
  |  _Square_ |  Sets the default radius of 0 for square corners.  
  |  _(Value)_ |  Enter a value from 0 to 255 inclusive.  
  
To set the corner radius for check boxes created as buttons (when a bitmap is added), use the **[CornerRadius$](cornerradius_.md)** property.

**_Example:_**

CbCornerRadius$ set to **Round** :

> CHECK_BOX 100,@(12,12,20,10)="Accept Terms"  
>  y=100  
>  y'CBCornerRadius$="round"  
>   
> 

CbCornerRadius$ set to **Square** :

> CHECK_BOX 100,@(12,12,20,10)="Accept Terms"  
>  y=100  
>  y'CBCornerRadius$="square"  
>   
> 

CbCornerRadius$ set to a value of **7** :

> CHECK_BOX 100,@(12,12,20,10)="Accept Terms"  
>  y=100  
>  y'CBCornerRadius$="7"  
>   
> 

#### **Note:**  
Corner rounding is limited based on the control type and/or the control size.

_(The CbCornerRadius$ property was added in PxPlus 2026.)_

## See Also

**[CornerRadius$](cornerradius_.md)**

## Used By

**CHECK_BOX  TRISTATE_BOX**

** **

 

 
