# Directives 

**FLOATINGPOINT** |  **_Switch to Scientific Notation_**  
---|---  
  
##  Format

**FLOATINGPOINT**

##  Description

Use the **FLOATINGPOINT** directive to have PxPlus start using scientific notation with all numeric data. In scientific notation, a number is represented as a fraction times 10 to some power (e.g. _.nnnnn_ *10^_xx_ is displayed as _.nnnnnExx_).

In **FLOATINGPOINT** mode, no rounding is done on numeric calculations. If the numeric output is unformatted, PxPlus uses scientific notation (e.g. .314159E+01). Use the **PRECISION** directive to end **FLOATINGPOINT** mode.

#### **Note:**  
**FLOATINGPOINT** notation is reset to standard decimal notation during a **RESET** operation; however, prior to version 5, it was left _On._

##  See Also

[**BEGIN Reset Files and Variables**](begin.md)  
[**CLEAR Reset Variables**](clear.md)  
[**PRC Precision Currently in Effect**](../variables/prc.md)  
[**PRC( ) Round Number to Precision**](../functions/prc.md)  
[**PRECISION Change Current Precision**](precision.md)  
[**RESET Reset Program State**](reset.md)

##  Example

floating point  
A=5/3  
print A  
  
->run  
.166666666666667E+01

precision 2 ! Sets precision to two  
round on ! Sets rounding default mode  
A=5/3  
floating point  
print A  
  
->run  
.167E+01
