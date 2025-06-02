# Error Handling and Debugging

**Stepping Operations** |  **__**  
---|---  
  
Another common debugging technique involves putting an **[ESCAPE](../../../directives/escape.md)** directive into a program and then "stepping" through the code in console mode during execution. This is an extremely useful method for tracing and following complex problems within program logic. It allows you to check the value of variables at different points and track program flow.

Use the following shortcut keys, followed by ENTER, to apply a stepping operation.

**Keys** |  **Stepping Operation**  
---|---  
**.** |  Executes next line of code and returns to command prompt.  
**._n_** |  Executes _n_ lines of code and returns to command prompt.  
**..** |  Steps through stack entries (e.g.**FOR..NEXT** ,**GOSUB..RETURN** or**CALL .. PERFORM .. EXIT)** until completion.  
**...** |  Completes execution of (and then exits) the current program level (**CALL** ..**PERFORM .. EXIT)** stack.  
**;** |  Steps through compound statements.  
**;_n_** |  Steps through _n_ directives in a compound statement (and then stops).  
  
The**F2** key (without ENTER) can be used to repeat the last type of stepping operation performed. (It emulates the **.**_period_ by default.) The Step menu option in the **[CommandWindow](Windows%20Debugging%20Environment.htm#command)** works in much the same way.
