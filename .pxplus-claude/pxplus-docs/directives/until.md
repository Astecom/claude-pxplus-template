# Directives

**UNTIL** |  **_End REPEAT Loop_**  
---|---  
  
##  Format

**UNTIL** _expression_  
  
**_Where:_**

_expression_ |  Condition to end **REPEAT** looping when true.  
---|---  
  
#### **Note:**  
For complete syntax, see **[REPEAT..UNTIL Repetitive Execution](repeat.md)**.

##  Description

Use the **UNTIL** directive to define the end of a **REPEAT** loop in a program.

##  See Also

**[REPEAT..UNTIL Repetitive Execution](repeat.md)**

##  Example

print 'CS',"Standard TAX calculation..."  
input "How much was your INCOME? $",CASH  
repeat  
input "How much TAX did you pay? $",TAXES  
CASH=CASH-TAXES  
print "You have $",CASH," left"  
until CASH<=0  
print "Okay you have paid enough."  
  
->begin  
->run  
Standard TAX calculation...  
How much was your INCOME? $1.98  
How much TAX did you pay? $1.65  
You have $ 0.33 left  
How much TAX did you pay? $.33  
You have $ 0 left  
Okay you have paid enough.
