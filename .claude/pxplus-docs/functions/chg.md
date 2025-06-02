# System Functions

**CHG( )** |  **_Notify If Variable Has Changed_**  
---|---  
  
##  Formats

1\. _Notify and Change Status_ : |  **CHG(**_varlist_**[** ,**ERR=**_stmtref_**])**  
---|---  
2\. _Non-Destructive Read_: |  **CHG(READ** _varlist_**[** ,**ERR=**_stmtref_**])**  
3\. _Non-Destructive Read_: |  **CHG(**_prglvl_**[** ,**ERR=**_stmtref_**])**  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_varlist_ |  Comma**-** separated list of variable names to be tested as a string.  
_prglvl_ |  Program execution level whose program's "changed" state is going to be returned. Negative values indicate value relative current program level.  
  
##  Returns

String, listing variables that have changed (Formats 1 and 2).  
Numeric, 0 or 1, indication that program has changes (Format 3).

##  Description

Use the **CHG( )** function to determine whether or not the value of a variable has changed. Given a comma**-** separated list of variable names, the **CHG( )** function will return a comma**-** separated list of those variables that have changed. Use **+=** (add to), **-=** (subtract from), and other operators with the **CHG( )** function.

#### **Note:**  
You should not use the **CHG( )** function with NOMADS applications (except for variables not referenced by the panel) because when you set the **REFRESH_FLG** , NOMADS itself uses the **CHG( )** function to determine which variables are to be refreshed.

##  Format 1

**_Notify and Change Status_**

**CHG(**_varlist_[,**ERR=**_stmtref_])

The "changed" status of a variable is changed when the data in the variable changes or when the **CHG( )** function is applied. This format of the **CHG( )** function will reset the "changed" status of the variables listed:

> print chg("A,B,D$,E$")  
>  A=1.234  
>  E$="MIKEY"  
>  print chg("A,B,D$,E$") ! Prints A,E$  
>  print chg("A,B,D$,E$") ! Prints nothing

##  Format 2

**_Non-Destructive Read_**

**CHG**(**READ** _varlist_[,**ERR=**_stmtref_])

This format of the **CHG( )** function allows you to do a non**-** destructive read of the value returned by the **CHG( )** function. The "changed" status will not be reset when the function is applied:

> print chg("A,B,D$,E$")  
>  A=1.234  
>  E$="MIKEY"  
>  print chg(read "A,B,D$,E$") ! Prints A,E$  
>  print chg("A,B,D$,E$") ! Prints A,E$

## Format 3

**_Get Program Changed State_**

**CHG**(_prglvl_[,**ERR=**_stmtref_])

This format of the **CHG( )** function allows you to determine if the program running at the level specified has been changed. The function will return 0 if the program has not been changed or 1 if it has.
