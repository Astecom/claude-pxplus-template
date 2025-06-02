# System Functions

**MOD( )** |  **_Return Modulus_**  
---|---  
  
##  Format

**MOD(**_num_ ,_base_[,**ERR=**_stmtref_]**)**

**_Where:_**  
---  
_base_ |  Modulus base value. Numeric expression.  
_num_ |  Value for which to calculate the modulus. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric, modulus/remainder.

##  Description

The **MOD( )** function returns the modulus/remainder from a division of the first expression by the second.

#### **Note:**  
You can also use the **|**  _(pipe operator)_ to return a modulus value. The syntax is _num_**|**_base_ _._

##  Example

A=mod(10,3) ! yields A=1  
A=mod(10,5) ! yields A=0  
A=mod(9,3.5) ! yields A=2

The following conditions deal with leap year dates:

> if mod(Y,4)=0 \  
>  then N.MAX=366,M.TBL$(3,2)="29" \  
>  else N.MAX=365,M.TBL$(3,2)="28"

Use of the **|**  _(pipe operator)_ is the equivalent of the syntax above:

> if Y|4=0 \  
>  then N.MAX=366,M.TBL$(3,2)="29" \  
>  else N.MAX=365,M.TBL$(3,2)="28"
