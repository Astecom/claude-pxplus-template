# Flow Control

**Decision Structures** |  **__**  
---|---  
  
A decision structure is intended for conditional execution. It is designed to change program flow by selecting a new path from among one or more possible branch points. PxPlus includes the following directives for building decision structures:

|  **IF..THEN..ELSE** |  Tests a Boolean expression, then determines what action to take, depending on the **_true_** or **_false_** result.  
---|---|---  
|  **SWITCH..CASE** |  Compares an expression/value against a series of specified values to determine what action to take.  
|  **ON..GOSUB/ ON..GOTO** |  Counts through a sequence of possible statement destinations based on a supplied value to determine what action to take.  
  
## IF..THEN..ELSE

Use an**IF ..THEN** statement to execute a series of statements based on the result of a Boolean expression that evaluates to **_true_** (_non-zero_). An optional**ELSE** clause can be used to specify statements that are to be executed when the Boolean expression evaluates to **_false_**.

> **IF** _expression_**THEN** _..._ [**ELSE** _... ]_ [ **END_IF** ]

All statements within an**IF..THEN..ELSE** structure exist on the same line and must be separated by semi-colons. However, statements can span multiple lines if they are enclosed within **_curly brackets_**.

> **IF** _expression_**THEN** { _..._} [**ELSE** { _..._} ] [ **END_IF** ]

An optional**END_IF** (_or_**FI**) clause may be used as an**IF** terminator and/or to execute a common closing statement that is outside the**IF** condition. This is particularly useful for separating**ELSE** clauses within a nested**IF..THEN..ELSE** structure. Once the statements that follow an**END_IF** clause are executed, control falls through to the next line or (if nested) to the previous layer of**IF..THEN..ELSE.**

**_Example:_**

|  00010 IF SW=0 \   
THEN LIGHT$="OFF" \   
ELSE LIGHT$="ON" \   
END_IF;   
PRINT "LIGHT IS ", LIGHT$   
SW=0   
RUN   
LIGHT IS OFF |  00010 IF SW=0 THEN {   
00020 LET LIGHT$="OFF"   
00030 } ELSE {   
00040 LET LIGHT$="ON"   
00050 }   
00060 PRINT "LIGHT IS ", LIGHT$   
SW=1   
RUN   
LIGHT IS ON  
---|---|---  
  
These example**IF..THEN..ELSE** statements perform similar operations. The one on the right uses **_curly brackets_** to separate statements on different lines.

For syntax details, see **[IF..THEN..ELSE](../../../directives/if.md)** directive.

As an alternative to a compound **IF..THEN..ELSE** statement, use **SWITCH..CASE.**

## SWITCH..CASE

The **[SWITCH..CASE](../../../directives/switch.md)** directive executes different statements, depending on where it finds a match among a series of values. Unlike the **IF..THEN..ELSE** structure, which chooses between two possible branch points, this structure chooses from multiple branch points:

> **SWITCH** _expression_**CASE** _range_1_[ _..._**CASE** _range_n_ ] [ **BREAK** ] [ **DEFAULT** ] ... **END SWITCH**

Execution continues with the statements that follow any matching **CASE** _range_ (until the next **BREAK** or**END SWITCH)**. If there are no matches in any of the**CASE** statements, control falls through to the **DEFAULT** clause (if present), and the statements that follow are executed automatically.

**_Example:_**

> SWITCH UCS(x$)   
>  CASE "CAT"   
>  PRINT "Selected cat"   
>  BREAK   
>  CASE "DOG","FOX","PIG"   
>  PRINT "Selected ",x$   
>  BREAK   
>  CASE >"ZEBRA"   
>  PRINT "Selected something Greater than a Zebra"   
>  BREAK   
>  DEFAULT   
>  PRINT "Default code kicks in"   
>  ! This executes when all of the above fails   
>  END SWITCH

This can be coded similarly using the following**IF..THEN..ELSE** statement:

> IF x$="CAT" \   
>  THEN PRINT "Selected cat" \   
>  ELSE IF x$="DOG" OR x$="FOX" OR x$="PIG" \   
>  THEN PRINT "Selected ",x$ \   
>  ELSE IF x$>"ZEBRA" \   
>  THEN PRINT "Selected something Greater than a Zebra" \   
>  ELSE PRINT "Default code kicks in"   
>  ! This executes when all of the above fails

For syntax details, see **[SWITCH..CASE](../../../directives/switch.md)** directive.

## ON..GOSUB / ON..GOTO

These statements provide a variation of the**GOTO** and**GOSUB** directives that allow transfer of control to a choice of multiple destinations.

> **ON** _num_**GOSUB** _stmtref,stmtref,..._  
> **ON** _num_**GOTO** _stmtref,stmtref,..._

In this decision structure, the branch point is determined by counting _num_ places through the sequence of _stmtref_ s. The sequence is 0  _(zero)_ based. If _num_ is greater than the number of _stmtref_ s supplied, the last _stmtref_ is assumed. If _num_ is 0 or less, the first _stmtref_ is assumed.

**_Example:_**

> 1000 ON X GOSUB 2100,2200,2200,2300

If X = 0, control transfers to line 2100. If X = 1, control transfers to line 2200 and so on.

For syntax details, see **[ON ... GOSUB / GOTO](../../../directives/on.md)** directive.
