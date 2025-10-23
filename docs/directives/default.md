# Directives  
  
**DEFAULT** |  **_Branch If No Matching Case_**  
---|---  
  
##  Format

**DEFAULT** ;  _logic$_  
  
**_Where:_**

_logic$_ |  Procedure to handle default (undefined) cases in a case structure. It does not have to be on the same line as the **DEFAULT** directive, but it can be if you include the semi-colon.  
---|---  
  
##  Description

Use the **DEFAULT** directive to create branch points to handle situations where there is no corresponding **CASE**. If a matching case is not found and the **DEFAULT** is found, execution continues at this point.

##  See Also

**[SWITCH Branch Control](switch.md)**  
**[BREAK Immediate Exit of Loop](break.md)**  
**[CASE Define Branch Points](case.md)**

##  Example

PROCESS_TAXCODE:  
LET LiquorTax=0,SalesTax=0,ServiceTax=0  
SWITCH UCS(TaxCode$)  
CASE "X","Z" ! two codes are tax exempt  
BREAK ! stop processing for case "X" here  
CASE "L" ! liquor pays all liquor,sales and service tax  
LET LiquorTax=cost*LiquorTaxRate  
! no break here, logic falls through  
CASE "S" ! pays sales and service tax  
LET SalesTax=cost*SalesTaxRate  
! no break here, logic falls through  
CASE "V" ! service tax  
LET ServiceTax=cost*ServiceTaxRate  
BREAK ! end processing for this case and any that fell through  
DEFAULT ! enter here if case not found  
MSGBOX "Unknown tax code","Error"  
END SWITCH  
LET TotalTax=LiquorTax+SalesTax+ServiceTax  
RETURN
