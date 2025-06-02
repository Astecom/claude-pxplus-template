# Directives 

**ROUND** |  **_Control Rounding_**  
---|---  
  
##  Format

**ROUND**{**ON** | **OFF**}

##  Description

Use the **ROUND** directive to control the automatic rounding of values during calculations. If you use the **ROUND ON** directive, PxPlus will round all values to the **PRECISION** currently in effect before assigning them to numeric variables. The **ROUND OFF** directive terminates the rounding process. With **ROUND OFF** , PxPlus maintains all values at full 18-digit precision.

You can determine if the **ROUND** is **ON** or **OFF** by creating an expression whose value will indicate if rounding is active. The following example uses the default settings in PxPlus:

**_Example:_**

> round on  
>  a=1.005;  
>  if a=1.005 \  
>  then print "Round is OFF" \  
>  else print "Round is ON"  
>  round off  
>  a=1.005;  
>  if a=1.005 \  
>  then print "Round is OFF" \  
>  else print "Round is ON"

The **ROUND** directive has no effect if **FLOATINGPOINT** mode is active.

**_Rounding Control_**

The unpredictable rounding of numeric values can cause problems during execution. It is very important to know how rounding works in PxPlus.

If rounding is set to the default, a divide operation in PxPlus will maintain the precision of the starting value; e.g. 1014.475/100 becomes 10.14475, which is rounded to 10.145. The automatic rounding of intermediate results can be turned Off by setting the **['NR'](../parameters/nr.md)** system parameter. Various other types of rounding can be controlled using the [**'RN'=**](../parameters/rn.md) system parameter.

##  See Also

[**PRECISION Change Current Precision**](precision.md)  
[**FLOATINGPOINT Switch to Scientific Notation**](floatingpoint.md)

##  Example

With **ROUND OFF** :

> precision 2  
>  round off  
>  A=3*(2/3)  
>  print A  
>   
>  ->run  
> 2

With **ROUND ON** :

> precision 2  
>  round on  
>  A=3*(2/3)  
>  print A  
>   
>  ->run  
> 2.01
