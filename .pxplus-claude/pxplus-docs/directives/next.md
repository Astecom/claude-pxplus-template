# Directives 

**NEXT** |  **_End FOR Loop_**  
---|---  
  
##  Format

**NEXT** [_var_]

**_Where_** _:_

_var_ |  Optional control variable to be incremented or decremented. This variable **_must_** match the current **FOR** variable.  
---|---  
  
##  Description

When PxPlus encounters the **NEXT** directive, the current variable is incremented or decremented by the **STEP** value, and if the current value does not exceed the ending value, control is returned to the directive following the **FOR**.

The variable you use in the **NEXT** directive must match that of the currently active **FOR**. If no **FOR** is active or the variables do not match, PxPlus returns an Error #28: No corresponding FOR for NEXT.

The control variable can be omitted from the **NEXT** directive because the increment/decrement of the **FOR**  _var_ is assumed automatically; however, the **NEXT**  _var_ is useful for readability purposes, especially if it appears within a nested loop structure.

##  See Also

[**FOR ... NEXT Loop While Incrementing**](for.md)

##  Example

for I=1 to 10  
print I,  
next ! NEXT I, since I is current  
  
->run  
1 2 3 4 5 6 7 8 9 10
