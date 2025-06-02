# Directives 

**IF...THEN...ELSE** |  **_Test Condition_**  
---|---  
  
##  Formats

1. |  _Set Conditions:_ |  **IF** _expression_**THEN**... [**ELSE**...] [**END_IF**]  
---|---|---  
2. |  _Set Conditions, Multiple Line Format:_ |  **IF** _expression_**THEN** {  
...  
} [**ELSE** {...}]   
  
**_Where:_**

... |  Statements to be processed.  
---|---  
{...} |  Curly brackets**** indicating statements within can span multiple lines.  
_expression_ |  An expression whose value determines if the condition is True or False: In ** _numeric_** expressions, a zero value will indicate FALSE; otherwise, any non-zero value will indicate TRUE. In ** _string_** expressions, a null (empty or blank) value will indicate FALSE; otherwise, any non-null value will indicate TRUE.  
  
_(The ability to use a string expression was added in PxPlus v10.)_

##  Description

Use the **IF** directive to control the execution of various PxPlus statements based on the result of a Boolean TRUE/FALSE value.

If the expression returns a TRUE value (non-zero for numeric, non-null for string), then PxPlus continues execution with the directives following the **THEN** clause up to the end of the statement or until an **ELSE** clause is encountered.

If the expression returns a FALSE value, execution of the statement continues with the directives following the **ELSE** clause (if you use it) or with the next statement.

You would normally include a logical operator such as an **=** (_equals sign_), **<** (_less than symbol_), etc. in the numeric expression, but you can use any numeric expression. All statements within an **IF..THEN..ELSE** structure exist on the same line. These statements can only span multiple lines if they are enclosed within curly brackets. A matched set of open/closed brackets must be provided for each set of directives. Missed brackets can cause unexpected results.

Internally, when the system detects a **{** following the **THEN** clause, it will continue execution up to the next **}** (if true) or skip forward to it (if false). The same holds true for the processing of the **ELSE** clause.

You can imbed multiple levels of multiple line **IF** directives using curly brackets; however, it is important not to lose consistency.

## Using END_IF

An optional **END_IF** (or **FI**) clause can be used to terminate the current **IF** structure and/or to execute a common closing statement. This is particularly useful for separating **ELSE** clauses in a nested **IF..THEN..ELSE** structure.

Once the statements that follow an **END_IF** clause are executed, control will fall through to the next line or (if nested) to the preceding level of **IF..THEN..ELSE.**

##  See Also

[**END_IF End IF Directive**](end_if.md)

##  Example

**_Simple_****IF _Statement:_**

> input "Enter a number: ",a  
>  input "Enter another: ",b  
>  if a>b \  
>  then print "First one is larger";  
>  stop  
>  if b>a \  
>  then print "Second one is larger";  
>  stop  
>  print "Both numbers are the same"  
>  stop  
>   
>  ->run  
>  Enter a number: 123.45  
>  Enter another: 123.56  
>  Second one is larger

**_Compound_****IF _Statement:_**

> for i=1 to 30  
>  print i," is divisible by ",  
>  if mod(i,2)=0 \  
>  then if mod(i,3)=0 \  
>  then print "both" \  
>  else print "2" \  
>  else if mod(i,3)=0 \  
>  then print "3" \  
>  else print "neither"  
>  next i  
>  stop  
>   
>  ->run  
>  1 is divisible by neither  
>  2 is divisible by 2  
>  3 is divisible by 3  
>  4 is divisible by 2  
>  ...  
>  28 is divisible by 2  
>  29 is divisible by neither  
>  30 is divisible by both

**_Multiple Line_ IF _Statement:_**

> 00010 if A = B then {  
>  00020 let C = D  
>  00030 print "A equals B"  
> 00040 } else {  
>  00050 let X = Y  
>  00060 print "A was not identical to B"  
>  00070 }
