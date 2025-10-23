# Flow Control

**Flow Overrides** |  **__**  
---|---  
  
Sometimes, it is necessary to exit a running loop (sub-routine, procedure) as soon as a specific task is completed, regardless of the value of the control variable or test expression.

The following directives allow for immediate termination of a loop or sub-routine:

## BREAK

The**BREAK** directive terminates an active loop and transfers control to the statement immediately after where the loop normally ends; i.e. **NEXT** or **WEND**.

**_Example:_**

> 0010 DIM X$[100](1,"*"); LET X$[50]=""   
>  0020 FOR I=1 TO 100   
>  0030 IF X$[I]="" THEN BREAK   
>  0040 NEXT   
>  0050 ESCAPE

If the conditional**BREAK** is executed, the program skips to line 0050.

For syntax details, see **[BREAK](../../../directives/break.md)** directive.

## EXITTO

The**EXITTO** directive terminates the currently active loop or sub-routine and transfers control to the statement reference indicated.

**_Example:_**

> 0010 DIM X$[100](1,"*"); LET X$[50]=""   
>  0020 FOR I=1 TO 100   
>  0030 IF X$[I]="" THEN EXITTO 50   
>  0040 NEXT   
>  0050 ESCAPE

For syntax details, see **[EXITTO](../../../directives/exitto.md)** directive.

## POP

Use this directive to clear (pop) the top entry from the**FOR..NEXT** _,_**WHILE..WEND** ,**REPEAT..UNTIL** _,_**GOSUB** stack. **POP** is equivalent to**EXITTO** except that it does not transfer control (to a statement reference) but continues with the next statement in direct execution sequence.

For syntax details, see **[POP](../../../directives/pop.md)** directive.

## CONTINUE

The**CONTINUE** directive is similar to the**BREAK** directive in that it causes the current iteration of a loop to be terminated, but unlike**BREAK** , it resumes the loop's execution with the next natural cycle.

**_Example:_**

> 0010 DIM X$[100](1,"*"); LET X$[50]="",K$="*"   
>  0020 FOR I=1 TO 100   
>  0030 IF X$[I]=K$ THEN CONTINUE   
>  0040 PRINT I   
>  0050 NEXT   
>  0060 ESCAPE

For syntax details, see **[CONTINUE](../../../directives/continue.md)** directive.
