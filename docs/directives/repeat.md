# Directives 

**REPEAT..UNTIL** |  **_Repetitive Execution_**  
---|---  
  
##  Format

**REPEAT..UNTIL** _expression_

_expression_ |  Condition ends **REPEAT** looping when true. Numeric expression.  
---|---  
**UNTIL** |  Directive to end loop.  
  
##  Description

Use the **REPEAT** directive to create conditional looping in a program. PxPlus executes all statements between the **REPEAT** directive and the next **UNTIL** directive.

If the _expression_ in the **UNTIL** directive is **_false_** (zero), PxPlus loops back to the directive following the **REPEAT** directive and resumes execution.

If the _expression_ is **_true_** (not zero), the loop is terminated and execution continues from the statement following the **UNTIL** directive.

Use the **EXITTO** directive to halt a **REPEAT**..**UNTIL** loop prematurely.

##  See Also

[**BREAK Immediate Exit of Loop**](break.md)  
[**CONTINUE Initiates Next Iteration of Loop**](continue.md)  
[**EXITTO End Loop, Transfer Control**](exitto.md)  
[**Structured Error Handling Using ON ERR**](on_err.md)

##  Example

print 'CS',"Standard TAX calculation..."  
input "How much was your INCOME? $",CASH  
repeat  
input "How much TAX did you pay? $",TAXES  
CASH=CASH-TAXES  
print "You have $",CASH," left"  
until CASH<=0  
print "Okay you have paid enough."  
  
->run  
Standard TAX calculation...  
How much was your INCOME? $1.98  
How much TAX did you pay? $1.65  
You have $ 0.33 left  
How much TAX did you pay? $.33  
You have $ 0 left  
Okay you have paid enough.
