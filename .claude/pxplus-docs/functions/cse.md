# System Functions  
  
**CSE( )** |  **_Case Compare_**  
---|---  
  
##  Format

**CSE(**_expression_[_$_]_,compare1_[_$_]_,compare2_[_$_]__[,**ERR=**_stmtref_]**)**

**_Where:_**

_compare1_[_$_]  
_compare2_[_$_] ... |  Comma-separated list of numeric or string expressions for comparison with _expression_[_$_].  
---|---  
_expression_[_$_] |  Numeric or string expression to be used for comparison.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer representing the sequence number of a match, or 0 (zero) if no match.

##  Description

The **CSE( )** function is used to compare an expression with a series of values. If the expression has a match, the resulting number will point to the location of the matched value in the series; i.e. if the expression matches the 5th value in the compare series, then **CSE( )** returns 5. If no match is found, **CSE( )** returns 0.

##  See Also

[**TBL( ) Convert String Via Table**](tbl.md)  
[**SWITCH Branch Control**](../directives/switch.md)  
[**CASE Define Branch Points**](../directives/case.md)

##  Example

In this example, if the value of CTL is 1000, then the **CSE( )** function returns 3. If the value of CTL is 1030, then 5 is returned, etc.

> 1000 input X$  
>  1010 on cse(ctl,1,2,1000,1020,1030) goto NOFKY,FK1,FK2,QRY_CST,DEL_CST,ADD_CST

The example below shows strings in the comparison:

> 1010 on cse(TEST$,"ANTIDISESTABLISHMENTARIANISM","DOG","CAT","PIG") goto 1000,2000,3000,4000
