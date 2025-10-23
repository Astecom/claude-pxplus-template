# System Functions

**TRY( )** |  **_Try Expressions_**  
---|---  
  
##  Format

**TRY(**_expression1_ , _expression2_ ,...[,**ERR=**_stmtref_]**)**

**_Where:_**

_expression1, expression2,..._ |  Comma-separated list of values and/or expressions to be evaluated.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

The value of the first expression that does **_not_** generate an error.

##  Description

The **TRY( )** function evaluates and returns the value of the first expression (or value) that does not generate an error. There is no limit to the number of values or expressions that can be passed to the **TRY( )** function. All expressions/values must return the same type (numeric or string).

_(The TRY function was added in PxPlus v11.50.)_

##  Example

AvgPrice = TRY(TotalRevenue/QtySold, ProductPrice) |  \- Returns standard price if nothing sold  
---|---  
FirstKey$ = TRY (KEF(fileno), "000000") |  \- Returns dummy first key if file empty  
Middle$ = TRY (X$(12,4), "0000") |  \- Returns "0000" if substring fails  
Color$ = TRY(Grid'BackColor$, "White") |  \- In case Grid is either not an Object/Control handle or has no property BackColor$
