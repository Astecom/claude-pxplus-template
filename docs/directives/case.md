# Directives 

**CASE** |  **_Define Branch Points_**  
---|---  
  
##  Format

**CASE** _range_[_$_]  
  
** _Where_** _:_

_range_[$] |  List of values defining branch points in a program. String or numeric expression.  
---|---  
  
##  Description

Use the **CASE** directive to list possible branch points in a program.

##  See Also

[**SWITCH Branch Control**](switch.md)  
[**BREAK Immediate Exit of Loop**](break.md)  
[**DEFAULT Branch If No Matching Case**](default.md)

##  Example

PROCESS_TAXCODE:  
LiquorTax=0,SalesTax=0,ServiceTax=0  
switch ucs(TaxCode$)  
case "X","Z" ! two codes are tax exempt  
break ! stop processing for case "X" here  
case "L" ! liquor pays all liquor,sales and service tax  
LiquorTax=cost*LiquorTaxRate  
! no break here, logic falls through  
case "S" ! pays sales and service tax  
SalesTax=cost*SalesTaxRate  
! no break here, logic falls through  
case "V" ! service tax  
ServiceTax=cost*ServiceTaxRate  
break ! end processing for this case and any that fell through  
default ! enter here if case not found  
msgbox "Unknown tax code","Error"  
end switch  
TotalTax=LiquorTax+SalesTax+ServiceTax  
return
