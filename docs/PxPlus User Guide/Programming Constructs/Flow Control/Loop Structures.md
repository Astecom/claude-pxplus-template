# Flow Control

**Loop Structures** |  **__**  
---|---  
  
Loop structures are intended for repetitive execution. They comprise a set of statements that are specified once but can execute multiple times based on defined counters or condition statements.

PxPlus includes the following directives for building controlled loops:

|  **FOR..NEXT** |  Uses a counter to control the number of repetitions made.  
---|---|---  
|  **WHILE..WEND** |  Tests a condition at the _beginning_ the loop before starting.  
|  **REPEAT..UNTIL** |  Tests a condition at the _end_ of the loop before repeating.  
  
A similar structure is used to open, query and read records from a data file. For information on this type of loop, see **[SELECT..FROM..NEXT RECORD](../../File%20Handling/Processing%20Data%20Files/File%20Processing%20Directives.htm#select)**.

PxPlus also includes some directives that allow early termination of a currently active loop. See **[Flow Overrides](Flow%20Overrides.md)**.

##  Infinite Loops

Sometimes, a loop is constructed so that it executes endlessly. The term **_infinite loop_** most often applies to a situation where this result is _not intended_ and is likely due to a logic or system error. Carefully review your code to ensure that your loops are designed to halt normally.

For information on dealing with unexpected results during program operation, see **[Error Handling and Debugging](../../Development%20Tools/Error%20Handling%20and%20Debugging/Overview.md)**.

## FOR..NEXT

The **[FOR](../../../directives/for.md)** directive is used to define the start of a _counter-controlled loop_.

The two types of **FOR..NEXT** loops, a **_Conventional Format_** and a **_Simplified Iteration Format_** , are explained below.

**_Conventional Format_**

This**FOR..NEXT** syntax specifies a _control_ variable (_var_), an _initial_ value (_first_), an _ending_ value (_last_), as well as an optional**STEP** value that can be used to set the increment/decrement to a specific value (default is 1):

> **FOR** _var_ = _first_**TO** _last_ [ **STEP** _val_ ] **..NEXT** [ _var_ ]

The **[NEXT](../../../directives/next.md)** directive marks the end of the loop. The _control_ variable used with the**NEXT** directive must match the variable in the corresponding **[FOR](../../../directives/for.md)** directive. The**NEXT** _control_ variable is optional but should be used to maintain readability (especially for _nested_ loops).

All statements following the**FOR** directive are executed in sequence until a**NEXT** directive is encountered. At this point, the _control_ variable is incremented or decremented automatically. If the contents of the _control_ variable exceeds the _ending_ value (or falls below it, if decremented), control is transferred out of the**FOR..NEXT** loop, and execution resumes at the statement following the**NEXT** directive. Otherwise, control stays in the loop and is transferred back to the statement following the**FOR** directive.

**_Example:_**

> 0010 FOR I=1 TO 10   
>  0020 PRINT I,   
>  0030 NEXT I   
>  RUN   
>  1 2 3 4 5 6 7 8 9 10

#### **Note:**  
The _conventional_**FOR..NEXT** format does not test the condition until the**NEXT** statement is executed; therefore, the loop is always executed at least once, even if the control variable is initialized to a value exceeding the ending value.

**_Simplified Iteration Format_**

The following**FOR..NEXT** syntax is used to specify the number of iterations in the loop:

> **FOR** _var .._**NEXT [_var_ ]**

The simplified format executes the logic immediately following the**FOR** by the number of times specified in the numeric value _var_ ; therefore, FOR 1 will execute the loop once, and FOR 5 will execute the loop 5 times. A value of zero causes the loop to be skipped. An error is generated if the numeric value is not an integer or it is less than zero.

If _var_ is a simple numeric variable, the system will first set _var_ to 1, then increment up to its initial value. When _var_ is 5, the loop will execute 5 times, with _var_ starting at 1 and incrementing by 1 through each iteration to 5. At the completion of the loop,_var_ will equal its initial value.

**_Example:_**

> 0010 LET X$="THIS IS A TEST"   
>  0020 LET N=LEN(X$)   
>  0030 FOR N   
>  0040 IF X$(N,1)=" " THEN LET X$(N,1)="_"   
>  0050 NEXT   
>  0060 PRINT X$   
>  RUN   
>  THIS_IS_A_TEST

If the loop is exited prematurely (via**BREAK** ,**POP** or**EXITTO**), the counter variable _var_ will retain the value of the current iteration. Regardless of whether a simple numeric variable is used,**TCB(19)** will contain the current iteration count during the loop.

For syntax details, see **[FOR..NEXT](../../../directives/for.md)** directive.

## WHILE..WEND

Use the **[WHILE](../../../directives/while.md)** directive to specify a condition (numeric expression) at the beginning of a _condition-controlled loop_ :

> **WHILE** _expression**..**_**WEND**

PxPlus executes all statements between**WHILE** and**WEND** repeatedly until the _expression_ returns a **_false_** (0 _zero_ ) result.

**_Example:_**

> 0010 INPUT "CAN WE TALK? <Y/N> ",R$   
>  0020 WHILE UCS(R$)<>"N"   
>  0030 INPUT "NAME PLEASE: ",N$   
>  0040 INPUT "WHAT IS YOUR AGE "+N$+"? ",A$   
>  0050 INPUT "CONTINUE? <Y/N> ",R$   
>  0060 WEND

When PxPlus encounters a**WHILE** directive, it evaluates the _expression._ If the result is not 0 (_zero_), PxPlus continues execution until a corresponding**WEND** directive is encountered, at which point the _expression_ is re-evaluated. PxPlus continues to loop back to the directive following the**WHILE** directive until a 0 value is reached. At this point, PxPlus advances to the next**WEND** directive, where it terminates the loop. Then control transfers to the statement following the**WEND**.

For syntax details, see **[WHILE..WEND](../../../directives/while.md)** directive.

## REPEAT..UNTIL

The **[REPEAT](../../../directives/repeat.md)** directive is used to begin a _condition-controlled loop._ In this structure, the **UNTIL** directive specifies the condition at the end of the loop:

> **REPEAT ..UNTIL** _expression_

PxPlus executes all statements between**REPEAT** and**UNTIL** repeatedly until the _expression_ returns a **_true_** (_non-zero_) result.

**_Example:_**

> 0010 LET X=1   
>  0020 LET C=1   
>  0030 REPEAT   
>  0040 LET X=X*2   
>  0050 LET C=C+1   
>  0060 UNTIL X>100000   
>  0070 PRINT C,X   
>  RUN   
>  18 131072

After the**REPEAT** directive, PxPlus executes all statements until the**UNTIL** directive; it then tests the condition specified. If the result is **_false_** (0  _zero_), PxPlus loops back to the directive following the**REPEAT** directive and resumes execution. If the result is **_true_** _(non-zero)_ , the loop is terminated and execution continues from the statement following the**UNTIL** directive.

For syntax details, see**[REPEAT..UNTIL](../../../directives/repeat.md)** directive.
