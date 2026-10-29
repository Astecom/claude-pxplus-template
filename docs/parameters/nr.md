# System Parameters

**'NR'** |  **_No Intermediate Rounding on Division_**  
---|---  
  
##  Description

Prevents intermediate rounding on division.

#### **Note:**  
This only affects division, not other operations such as multiplication.

##  Default

**_Off_** \- Intermediate rounding is performed.

## See Also

**['RN'= Rounding Control](rn.md)**

## Example

With **'NR'_Off_** :

> set_param 'RN'=4,-'NR'  
>  print 5/3  
>  a=5/3  
>  print a  
>   
>  1.67  
>  1.67

With **'NR'_On_** :

> set_param 'RN'=4,'NR'  
>  print 5/3  
>  a=5/3  
>  print a  
>   
>  1.66666666666667  
>  1.67

 

 

 
