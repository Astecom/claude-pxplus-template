# PxPlus System Programs and Files

***PRMDEF.xx** |  **_Parameter Definitions_**  
---|---  
  
The ***PRMDEF** file is used by the system utility program *UCP to maintain the descriptions and the valid ranges for the system parameters. This keyed file has one record for each system parameter keyed on the parameter code.

The record layout is:

**Field #** |  **Description**  
---|---  
1 |  Short description of the parameter (16 character maximum).  
2 |  Minimum value.  
3 |  Maximum value. If the maximum value equals the minimum value, the parameter simply toggles OFF and ON.  
4 |  Default value.  
5 |  Reset indicator. A value of "Y" in this field indicates that changing this parameter may affect other parameters. Therefore, *UCP must refresh the screen whenever a change occurs.  
6 |  Help text.
