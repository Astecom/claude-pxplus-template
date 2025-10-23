# System Parameters

**'AC'** |  **_Auto-Convert Values to STR( ) or NUM( )_**  
---|---  
  
## Description

When the **'AC'** parameter is enabled, if the system detects a numeric value when it is expecting a string value (or vice-versa), it will automatically convert this value to a **STR( )** or **NUM( )** function.

#### **Note:**  
As this functionality is done automatically by the ***compiler** rather than at run-time, programs created with this option **_enabled_** will be fully compatible with prior releases.

_(The**'** AC' system parameter was added in PxPlus 2017.)_

## Default

**_Off_**

## See Also

**[STR( ) Convert Numeric to String](../functions/str.md)**  
**[NUM( ) Convert String to Value](../functions/num.md)**  
**[Command Line Compiler/Lister](../PxPlus%20Installation%20and%20Configuration/Launching%20PxPlus/Overview.htm#compiler)**

## Example

10 msgbox "Client owes "+cst_owes+" and is past due by "+cst_late+" days"  
list 10  
0010 msgbox "Client owes "+str(cst_owes)+" and is past due by "+str(cst_late)+" days"
