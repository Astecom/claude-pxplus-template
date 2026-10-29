# Webster+ HTML Merge/Bind Object

**Using Functions and Operators**|   
---|---  
  
The **[[addcalc]](Short%20Codes.htm#addcalc)** and **[[depends]](Short%20Codes.htm#depends)** short codes, as well as the **[calc=_xxx_](Short%20Code%20Options.htm#calc)** short code option, are evaluated by the browser, which means the code **_must_** be in JavaScript.

To make it easier to use, some PxPlus system functions (see **[Webster+ Calculations](Webster%20Calculations.md)**) and PxPlus comparison operators (**=** , **< >**, **= <**, **= >**, **and** , **or**) are supported in JavaScript. For these short codes and short code option, PxPlus includes logic that automatically converts them to JavaScript.

**_Example:_**

> [depends "cvs(lcs(Country$)<>"canada" and lcs(Country$)<>"u.s.","ASCII:HTML")" disable=TAX invert]

In this example, to allow spaces, the code is surrounded in quotes. The code is also converted to HTML, so HTML special characters, including quotes, are handled.

The **[[if]](Short%20Codes.htm#if)** short code is different in that it is evaluated by the server and allows PxPlus code.

 

 

 
