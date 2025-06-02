# Directives 

**PRECISION** |  **_Change Current Precision_**  
---|---  
  
##  Format

**PRECISION** _num_ __[ **FOR OBJECT** ]  
  
**_Where:_**

_num_ |  Precision to which to round. Numeric expression. Integer range 0 to 18 or use -1 to switch to scientific notation.  
---|---  
**FOR OBJECT** |  Object Oriented Programming (OOP) - Optional keywords for setting the default **PRECISION** for all subsequent method invocations within the current object instance, except for those that have CLASS definitions that specifically declare a PRECISION to use (preserving encapsulation).  
  
##  Description

Use the **PRECISION** directive to change the number of digits PxPlus maintains to the right of the decimal point. (Internally, PxPlus makes all calculations using 18 digits of accuracy; however, when numeric data is output, the value is rounded and returned using the number of digits set in the **PRECISION** directive.)

The precision setting is also used in conjunction with the **ROUND** directive. If rounding is enabled (default mode), values assigned to variables through the **[LET](let.md)** directive will be rounded to the **PRECISION** _num_ specified.

#### **Note:**  
Precision is automatically reset to the value found in the [**'PD'**](../parameters/pd.md) system parameter by the following directives: **[BEGIN](begin.md)**, **[CLEAR](clear.md)**, **[END](end.md)**, **[LOAD](load.md)**, **[RESET](reset.md)**, **[STOP](stop.md)**, **[RUN](run.md)**. It will be set to 2 by default by a **[START](start.md)** directive.

The **FLOATINGPOINT** directive overrides the **PRECISION** directive. PRECISION -1 can also be used to have PxPlus switch to **FLOATINGPOINT** (scientific notation). Use another numeric value in the **PRECISION** directive (e.g. PRECISION 2) to cancel scientific notation.

In Object Oriented Programming (OOP), **PRECISION** is used to force a predefined precision setting for objects. This sets the precision before each function and restores precision upon exit from a function.

## See Also

**[ROUND Control Rounding](round.md)**  
**[FLOATINGPOINT Switch to Scientific Notation](floatingpoint.md)**

##  Example

for A=0 to 6  
precision A  
print 1/3,  
next A  
print "DONE";  
stop  
  
->run  
0 0.3 0.33 0.333 0.3333 0.33333 0.333333 DONE  
  
precision 7  
print 1/3,@(15),"PRECISION: ",tcb(14)  
begin ! Resets precision to 2  
print 1/3,@(15),"PRECISION: ",prc  
end  
  
->run  
0.3333333 PRECISION: 7  
0.33 PRECISION: 2
