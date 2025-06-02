# System Parameters

**'MC'** |  **_Maintain Case_**  
---|---  
  
##  Description

Maintains the case for variable, directives and line labels in program listings.

#### **Note:**  
The case setting is affected by the **'LC'** and **'LD'** system parameters.

##  Default

**_Off_** \- Variable names, directives and line labels are maintained in uppercase.

## See Also

[**'LC' List Variables in Lowercase**](lc.md)  
[**'LD' List Directives in Lowercase**](ld.md)

## Example

10 ThisIsFirst=10  
20 THISISFIRST=20  
  
list  
10 ThisIsFirst=10  
20 ThisIsFirst=20

Once **'MC'** is set, the first instance of a variable will establish the case setting for all subsequent uses. To change the case of a variable name, all references to the variable must be removed, and the program must be saved and reloaded.
