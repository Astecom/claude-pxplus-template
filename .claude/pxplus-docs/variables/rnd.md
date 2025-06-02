# System Variables

**RND** |  **_Random Number Generator_**  
---|---  
  
**_Numeric System Variable_**** __**

##  Contents

Decimal numeric, **PRECISION** 8, random number

##  Description

The **RND** variable contains a different random number each time you use it to return a value. The value will be in the range from 0 to 1 with a **PRECISION** of 8.

##  See Also

**[RND( ) Return Random Number](../functions/rnd.md)  
[PRECISION Change Current Precision](../directives/precision.md)**

##  Example

for I=1 to 3  
print rnd,  
next  
print " DONE";  
end  
  
->run  
0.76559375 0.5199119 0.9505763 DONE
