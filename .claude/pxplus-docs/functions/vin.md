# System Functions

**VIN( ) / VIS( )** |  **_Obtain Value of Variable_**  
---|---  
  
##  Formats

1. |  _Get Numeric Value_ _:_ |  **VIN(**_string$_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Get Numeric from Composite_ _:_ |  **VIN(**_composite$_**,**_var_1$_[**[,**_subscr_**]**]**=**_expr_[**, ...**_n_]**)**  
3. |  _Get String Value_ _:_ |  **VIS(**_string$_[,**ERR=**_stmtref_]**)**  
4. |  _Get String from Composite_ _:_ |  **VIS(**_composite$_**,**_var_1$_[**[,**_subscr_**]**]**=**_expr_[**, ...**_n_]**)**  
5. |  _VIS( ) as Record Prefix_ _:_ |  **REC=VIS(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where_** _:_

_composite$_ |  String variable that has been defined as a composite string.  
---|---  
_string_ |  String expression containing the name of a variable to be used.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
[,_subscr_] |  Optional subscript(s) of a variable in the composite string. String expression. You can include from one to three optional numeric expressions in square brackets, comma-separated, as subscripts for the variable.  
_var_1$_ to  
 _var_2$_ |  String expression containing the name of a variable in the composite string.  
  
#### **Note:**  
You can use the optional **ERR=**_stmtref_ with each of the syntax formats described. The inner set of brackets enclosing **[** ,_subscr_**]** are part of the syntax.

##  Returns

Contents (value) of variable(s), numeric or string.

##  Description

The **VIN( )** function returns the **_numeric_** value (contents) of a variable where the name of the numeric variable is stored in a string variable.

The **VIS( )** function returns the **_string_** value (contents) of a string variable whose name is stored in a string variable.

##  Format 1

**_Get Numeric Value_**  
  
**VIN(**_string$_[,**ERR=**_stmtref_]**)**

The **VIN( )** function returns the numeric contents of a numeric variable whose variable name is stored in _string$_.

##  Format 2

**_Get Numeric from Composite_**  
  
**VIN(**_composite$_**,**_var_1$_[**[,**_subscr_**]**]**=**_expr_[**, ...**_n_]**)**

The **VIN( )** function returns the value contained in each numeric variable you name (where the variable is part of a composite string). You can choose to specify up to three subscripts for the variable.

##  Format 3

**_Get String Value_**  
  
**VIS(**_string$_[,**ERR=**_stmtref_]**)**

The **VIS( )** function returns the contents of a string variable whose variable name is stored in _string$_.

##  Format 4

**_Get String Value from Composite_**  
  
**VIS(**_composite$_**,**_var_1$_[**[,**_subscr_**]**]**=**_expr_[**, ...**_n_]**)**

The **VIS( )** function returns the value contained in each string variable you name (where the variable is part of a composite string). You can choose to specify up to three subscripts for the variable.

##  Format 5

**VIS( )_as Record Prefix_**  
  
**REC=VIS(**_string$_[,**ERR=**_stmtref_]**)**

Use this format to assign a **REC=** prefix value dynamically during **READ** , **WRITE** , **OPEN** and other directives. When **REC=VIS( )** is used, PxPlus evaluates the string value in **VIS( )** and uses it as the name of the record prefix.

##  Example

0010 print 'CS'  
0020 print "Name$,StreetNum,Street$,City$"  
0030 Name$="Mike",StreetNum=8920,Street$="Woodbine Ave.",City$="Markham"  
0040 input "Select field type (N=Numeric,S=String)",T$  
0050 if T$="" then stop  
0060 if ucs(T$)<>"S" and ucs(T$)<>"N" then goto 0030  
0070 input "What field?",F$  
0080 if F$="" then stop  
0090 if ucs(T$)="S" then print F$,"=",vis(F$) else print F$,"=",vin(F$)  
0100 goto 0030
