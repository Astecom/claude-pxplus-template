# Directives 

**SWITCH** |  **_Branch Control_**  
---|---  
  
##  Format

**SWITCH** _expression  
_**...**  _  
_ **CASE** _range_1**...**   
_ **[ CASE** _range_n_**... ]**_  
_ **[ BREAK ]  
** **[ DEFAULT** _**...**_**]**_  
_**END SWITCH**

**_Where:_**

**CASE** _range_1  
_**CASE** _range_n_ |  List of string or numeric values for comparison with expression, used to define a branch point.  
---|---  
**BREAK** |  Optional directive defining immediate exit from the CASE structure.  
**DEFAULT** |  Optional directive defining a default branch point should no matching CASE be found.  
**END SWITCH** |  Required directive to end branching sequence.  
_expression_ |  String or numeric expression to control branching.  
  
##  Description

The **SWITCH** directive defines an expression that will direct control to one of multiple branch points. The results of the **SWITCH** expression is compared with values in each **CASE** statement to determine a branch.

If a match is found, execution continues with statement(s) after the matching **CASE** (until the next **BREAK** or **END SWITCH**). If there are no matches in any of the **CASE** statements, control falls through to the **DEFAULT** clause (if present), and the statements that follow are executed automatically.

#### **Note:**  
Since branch controls are maintained on the stack, you must not break within another stacked context. When PxPlus encounters **EXITTO** or **RETURN** within the scope of a **SWITCH** , it removes the current **FOR** / **GOSUB** / **WHILE** / **REPEAT** entry from the stack but does not exit the **SWITCH**.

##  See Also

[**END SWITCH End Branching of a Program**](end_switch.md)  
[**BREAK Immediate Exit of Loop**](break.md)  
[**CASE Define Branch Points**](case.md)  
[**DEFAULT Branch If No Matching Case**](default.md)

##  Example

PROCESS_TAXCODE:  
LiquorTax=0,SalesTax=0,ServiceTax=0  
switch ucs(TaxCode$)  
case "X","Z" ! Two codes are tax exempt  
break ! Stop processing for case "X" here  
case "L" ! Liquor pays all liquor, sales and service tax  
LiquorTax=cost*LiquorTaxRate  
! No break here, logic falls through  
case "S" ! Pays sales and service tax  
SalesTax=cost*SalesTaxRate  
! No break here, logic falls through  
case "V" ! Service tax  
ServiceTax=cost*ServiceTaxRate  
break ! End processing for this case and any that fell through  
default ! Enter here if case not found  
msgbox "Unknown tax code","Error"  
end switch  
TotalTax=LiquorTax+SalesTax+ServiceTax  
return
