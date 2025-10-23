# Directives 

**FOR..NEXT** |  **_Loop While Incrementing_**  
---|---  
  
## Formats

1\. _Conventional Syntax:___ |  **FOR [LOCAL]**_numvar_ =_first_**TO** _last_[**STEP** _step_]  
....  
**NEXT** [_numvar_]  
---|---  
2\. _Simplified Syntax:_ |  **FOR** _numvar_ _  
...  
_**NEXT** [_numvar_]  
3\. _Array Indexing:_ |  **FOR [LOCAL]**_variable_**INDEX** _vararray_ __**{ALL}**_  
...  
_**NEXT** [_variable_]  
4\. _Substring Parsing:_ |  **FOR [LOCAL]**_strvar_ __**FROM** _string  
...  
_**NEXT** [_strvar_]  
  
**_Where:_**

_numvar_ |  Numeric control variable to be incremented/decremented with each pass through the loop.  
---|---  
_first_ |  Initial value of the variable _var_. Numeric expression.  
_last_ |  Ending value of the variable _var_ __(value that ends the loop when achieved). Numeric expression.  
_step_ |  Optional value by which the variable will be incremented/decremented with each pass through the loop (default is 1).  
_variable_ |  Can be numeric or string.  
_vararray_ |  Array whose primary subscript will be used to define the starting/ending value for _numvar_ _._  
_strvar_ |  String control variable to receive each substring with each pass through the loop.  
_string_ |  String value (variable or expression) containing a string to parse based a delimiter whose value is defined as the last character of the _string_.  
**NEXT** |  Directive to end the loop. Optional _var_ __ must match current **FOR** _var._  
**TO** |  Keyword required for **Format 1** , not case sensitive.  
**STEP** |  Optional keyword, not case-sensitive. Sets specific increment/decrement value (default is 1).  
**LOCAL** |  Optional keyword for **Formats 1** , **3** and **4** , which, if included, causes the preserve/restore of the value in the numeric/string variable and restores it when the loop terminates: FOR LOCAL n=1 TO 20 FOR LOCAL n INDEX a{ALL} FOR LOCAL N$ FROM x$  
  
##  Description

The **FOR** directive is used to define the start of a repetitive loop of instructions in a program. The end of the loop is defined by a subsequent **NEXT** directive following in the program code. (If you specify a variable with a **NEXT** directive, it must match the variable in the **FOR** directive.)

The **NEXT** directive can appear anywhere in the program _except_ where it would be executed inside another **FOR** /**NEXT** loop, a **GOSUB** /**RETURN** routine, a **WHILE** /**WEND** loop, or a **REPEAT** /**UNTIL** loop. The control variable can be omitted from the **NEXT** directive because the increment/decrement of the **FOR** _var_ is assumed automatically. However, the **NEXT** _var_ is useful for readability purposes, especially if it appears within a _nested_ loop structure.

Use the **[EXITTO](exitto.md)** directive to halt a **FOR** /**NEXT** loop without performing all iterations. When the system executes an **EXITTO** directive, it removes the top entry from the **FOR** /**NEXT** stack and ends that **FOR** /**NEXT** loop.

#### **Note:**  
The test to determine if the loop will be terminated occurs when the **NEXT** directive is encountered; therefore, if the initial value of the loop control variable exceeds the ending value, the loop will execute once.

##  Format 1

**_For Loop,_****_Conventional Syntax_**

**FOR [LOCAL]**_numvar_ =_first_**TO** _last_[**STEP** _step_]**  
...  
NEXT** [_numvar_]

When using conventional syntax, the keyword **TO** is required in order to define _first_ and _last_ values in the loop.

The **STEP** value, if you use one, is evaluated and saved as the increment (or decrement if negative). If you do not include an increment/decrement, the default is 1. An increment of 0 is invalid and results in Error #44: Invalid step value.

The current program statement position is saved and execution continues. When a **NEXT** directive is encountered with the same variable as in the **FOR** directive (or no variable name), it increments/decrements the value. If the new value does not exceed the end value (or fall below it, if decremented), control transfers back to the **FOR** directive to continue the loop; otherwise, the **FOR** /**NEXT** loop ends.

**_Examples:_**

> 0010 for I = 1 to 10  
>  0020 print I,  
>  0030 next I

> Yields: 1 2 3 4 5 6 7 8 9 10

The following example strips trailing spaces from the A$:

> 0030 A$=......  
>  0040 gosub 1000  
>  ......  
>  1000 if A$="" then I=0; return  
>  1010 for I=len(A$) to 1 step -1  
>  1020 if A$(I,1)<>" " then exitto 1040  
>  1030 next  
>  1040 return

This example uses nested **FOR** /**NEXT** loops to generate the string **B$** from **A$** reversed:

> 0010 input "Enter character string:",A$  
>  0020 if A$="" then stop  
>  0030 B$=A$  
>  0040 for I=1 to len(A$)  
>  0050 for J=len(A$) to 1 step -1  
>  0060 B$(I,1)=A$(J,1)  
>  0070 next J; next I  
>  0080 print "The answer is: ", B$  
>  0090 goto 0010

##  Format 2

**_For Loop, Simplified Syntax_**

**FOR** _numvar_ _  
_**...  
NEXT** [_numvar_] 

This format executes the logic immediately following the **FOR** by the number of times specified in the numeric value _numvar_ ; therefore, **FOR** 1 will execute the loop once, and **FOR** 5 will execute the loop 5 times. A value of 0 causes the loop to be skipped. An error is generated if the numeric value is not an integer or it is less than 0.

If _numvar_ is a simple numeric variable, the system will first set _numvar_ __ to 1, then increment up to its initial value. When _numvar_ = 5, the loop will execute 5 times with _numvar_ starting at 1 and incrementing by 1 through each iteration to 5. At the completion of the loop, _numvar_ will equal its initial value. Regardless of whether a simple numeric variable is used, **TCB(19)** will contain the current iteration count during the loop.

**_Example 1:_**

> N=len(X$)  
>  for N  
>  if X$(N,1)="X" \  
>  then X$(N,1)="Y"  
>  next

**_Example 2:_**

> TOT=0  
>  for dim(read max(Balance))  
>  TOT+=Balance[tcb(19)]  
>  next

Should a loop using a defined variable be prematurely exited (via **BREAK** , **POP** or **EXITTO**), the variable will remain at its last value:

> N=10  
>  for N  
>  if X$[N]="" \  
>  then break  
>    
>  next

When the **IF** condition is satisfied and the **FOR** loop is exited via the **BREAK** , the value in N will be the index into the array.

##  Format 3

**_For Loop, Array Indexing_**

**FOR [LOCAL]**_variable_ __**INDEX** _vararray_ __**{ALL}**_  
_**...  
NEXT** [_variable_] 

This format executes the logic immediately following the **FOR** by the number of times determined by the primary index of the array specified by _vararray_.

During each iteration of the **FOR** loop, the _variable_ will be set to either the array index for each element if _variable_ is numeric or the associated key for each array element if _variable_ is a string. If you specify a string variable and no associated keys exist, the loop will not be executed.

_(FOR array indexing was added in PxPlus v8.01, build 9181.)_

##  Format 4

**_For Loop, Substring Parsing_**

**FOR [LOCAL]**_strvar_**FROM** _string  
_**...  
NEXT** [_strvar_]

This format executes the logic immediately following the **FOR** based on the number of substrings found within the value of _string._ The substrings are defined using the last character of _string_ as a substring delimiter. As each substring is extracted from _string,_ it will be placed into _strvar_ _._ If _string_ is a null string, the **FOR** loop is skipped.

Should the loop be prematurely exited (via **BREAK** , **POP** or **EXITTO**), the variable will remain at its last value; however, if the loop terminates due to all substrings being processed, the variable will be set to null.

**_Example 1:_**

> input "Enter your country: ",C$  
>  for X$ from "Canada,USA,France,UK,Germany,Australia,"  
>  if C$=X$ \  
>  then break  
>  next  
>  if not(nul(X$)) \  
>  then print "Country "+C$+" was found in the string." \  
>  else print "Unknown country"

**_Example 2 - To print all the fields in a record:_**

> read record (file)R$  
>  for FLD$ from R$  
>  print FLD$  
>  next FLD$

**_Example 3 - To process all rows in a Grid:_**

> grid find Grid_ctl,0,0,GridData$  
>  for GridRow$ from GridData$  
>    
>  next

_(FOR array substring parsing was added in PxPlus v8.01, build 9181.)_

##  See Also

[**BREAK Immediate Exit of Loop**](break.md)  
[**CONTINUE Initiates Next Iteration of Loop**](continue.md)  
[**EXITTO End Loop, Transfer Control**](exitto.md)  
[**Structured Error Handling Using ON ERR**](on_err.md)
