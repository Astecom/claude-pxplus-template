# OOP Syntax Elements

**PRECISION Directive** |  **__**  
---|---  
  
**PRECISION** _num_**FOR OBJECT**

By default, an object will inherit the default system precision (normally 2, but based on the **'PD'** system parameter).

By indicating**PRECISION** _num_**FOR OBJECT** within a**DEF CLASS .. END DEF** block, you can set predefined precision for all subsequent method invocations within the current object instance. However, an object's precision may be overridden within method logic where it specifically declares a**PRECISION** to use (preserving encapsulation).

## See Also

**[PRECISION Directive](../../../directives/precision.md)  
['PD' System Parameter](../../../parameters/pd.md)**
