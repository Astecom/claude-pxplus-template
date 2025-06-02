# Directives 

**BREAK** |  **_Immediate Exit of Loop_**  
---|---  
  
##  Format

**BREAK**

##  Description

Use the **BREAK** directive to perform an immediate exit from a loop or case structure. Execution resumes following the directive that would normally have ended the loop or case structure. (e.g. **NEXT** or **WEND**).

The *BREAK label emulates a **BREAK** directive for use as a statement reference.

#### **Note:**  
You can use **BREAK** commands in **SELECT** structures. Prior to v4.20, **BREAK** directives (and corresponding ***BREAK** labels) were not supported for use with **SELECT** /**NEXT RECORD** directives.

##  See Also

[**CASE Define Branch Points**](case.md)  
[**SWITCH Branch Control**](switch.md)  
[**EXITTO End Loop, Transfer Control**](exitto.md)

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
