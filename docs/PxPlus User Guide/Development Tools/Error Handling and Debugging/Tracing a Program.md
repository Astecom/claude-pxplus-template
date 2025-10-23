# Error Handling and Debugging

**Tracing a Program** |  **__**  
---|---  
  
PxPlus provides the ability for a programmer to trace the execution of a program via the **[SETTRACE](../../../directives/settrace.md)** directive. Each statement will be listed as it is executed. This trace output can either be displayed or written to a file.

The trace output will contain a listing of the statement that is being executed. If a statement repeats itself, then only one occurrence of the output will be displayed. If a compound statement executes a **[GOSUB](../../../directives/gosub.md)**, **[FOR](../../../directives/for.md)**, or **[WHILE](../../../directives/while.md)** directive as other than the final directive, it will appear twice in the trace, once when the directive is executed and once when control returns to the statement.

**_Example:_**

> LOAD "PRIME"   
>  LIST   
>  0010 INPUT "Enter test prime:",prime   
>  0020 FOR I = 2 TO INT(SQR(PRIME))   
>  0030 IF INT(PRIME/I)*I = PRIME THEN EXITTO 0100   
>  0040 NEXT I   
>  0050 PRINT "Yup, its a prime"; STOP   
>  0100 PRINT "Nope, it ain't prime"; STOP   
>  SETTRACE   
>  RUN   
>  0010 INPUT "Enter test prime:",prime   
>  Enter test prime:11   
>  0020 FOR I = 2 TO INT(SQR(PRIME))   
>  0030 IF INT(PRIME/I)*I = PRIME THEN EXITTO 0100   
>  0040 NEXT I   
>  0030 IF INT(PRIME/I)*I = PRIME THEN EXITTO 0100   
>  0040 NEXT I   
>  0050 PRINT "Yup, its a prime"; STOP   
>  Yup, its a prime

The tracing of a program remains active until either an **[ENDTRACE](../../../directives/endtrace.md)** is executed or the program terminates. When trace output is sent to a file by specifying **SETTRACE** _(__chan_ _),_ make sure that the file chosen does not conflict with any files in use by the program. Make sure the program does not accidentally close the file by executing a **[BEGIN](../../../directives/begin.md)** directive. See **[TraceWindow](Windows%20Debugging%20Environment.htm#trace)**.
