# System Parameters

**'*E'** |  **_Force E+ Convert String with Scientific Notation_**  
---|---  
  
## Description

If enabled, this parameter forces PxPlus to mandate that, when converting a string that may contain a numeric value in scientific notation (e.g. 1.2E+10), there **_must_** be a **+** (_plus_) sign following the E.

Setting this parameter can resolve issues that could occur using the **[NUM](../functions/num.md)** function against a string that may happen to look like a scientific notation (e.g. 1E10).

#### **Important Note:**  
Setting this parameter will potentially cause problems when parsing JSON data as, by definition, JSON scientific notation does **_not_** require the sign.  
  
If your application is processing JSON data, this parameter should be **_Off_**.

_(The '*E' system parameter was added in PxPlus 2023.)_

## Default

**_Off_** \- PxPlus will accept numbers in scientific notation with or without a sign. If the sign is not present, PxPlus will assume a positive exponent.

## Example

->x$="1E10"  
->y$="1E+10"  
->print num(x$)  
10000000000  
->print num(y$)  
10000000000

->set_param '*e'  
->print num(x$)  
Error #26: Variable type invalid  
->print num(y$)  
10000000000
