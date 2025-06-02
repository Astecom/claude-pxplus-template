# Directives 

**RUN** |  **_Transfer and Execute a Program_**  
---|---  
  
##  Format

**RUN** [_prog_ _$_[;_entry_ _$_]][,**ERR=**_stmtref_]  
  
**_Where:_**

_;entry$_ |  Name of starting statement label to use as entry point in the program. Optional. If included, append to the _prog_ _$_ string expression (e.g. run "MY_PROG;STARTING_LABEL").  
---|---  
_prog_ _$_ |  Name of the program to load and execute. Optional. String expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **RUN** directive to start or resume the execution of a program. You can include the name of a program to **LOAD** and then **RUN**.

If the current program is at an interrupted state (due to program error, **ESCAPE** directive, or interrupt), a **RUN** command will simply resume execution.

If not at an interrupted state, the **RUN** directive performs the following actions prior starting execution:

1. |  Clears **FOR** /**NEXT** , **GOSUB** /**RETURN** , and **WHILE** /**WEND** stack.  
---|---  
2. |  Resets **SETERR** and **SETESC** addresses and any saved **RETRY** address.  
3. |  If the system parameter **'RR'** is set and a program name is specified, the system will also perform a **RESET** prior starting execution.  
  
If you are loading a program or if the current program has not been interrupted, the system begins execution at the program statement with the lowest line number. If the current program was interrupted (e.g. by an error, or a **BREAK** or **ESCAPE** directive), execution resumes from the statement where the program left off.

You can embed the **RUN** directive in a program to provide an overlay facility. The **RUN** directive affects neither user data nor files. When you use it in a compound statement, the **RUN** directive must be the final directive.

You can assign an optional line label entry point for the **RUN** program. To do this, append a **;**  _(semi-colon)_ and the starting label name to the program name:

> run "PROG;STARTING_LABEL"

After the program is loaded, the system internally issues a **GOTO** directive and starts execution at the assigned entry point.

PxPlus allows the specification of a line number instead of a label. To specify a line number, the entry point must consist of a **#** (_pound sign_) followed by the line number:

> run "ProgABC;#1000" (This would start at statement 1000 in ProgABC)

_(Specification of a line number was added in PxPlus v7.10, build 9170.)_

##  See Also

[**CALL Transfer to Subprogram**](call.md)  
[**PERFORM Call Subprogram, Pass Variables**](perform.md)  
[**RESET Reset Program State**](reset.md)  
[**'RR' Reset on RUN**](../parameters/rr.md)

##  Example

->run "INVGEN"  
->run "PAY"+A$
