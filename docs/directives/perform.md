# Directives

**PERFORM** |  **_Call Subprogram, Share Variables_**  
---|---  
  
##  Format

**PERFORM**  _subprog_ _$_**[** ;_entry_ _$_**][WITH**  _variable=expression_ , ...**]** **[** ,**DOM=**_nolabelref_**][** ,**ERR=**_stmtref_**]**

**_Where_** _:_

_subprog_ _$_ |  Name of the subprogram to execute. String expression. If desired, an optional entry label within the program may be specified (e.g. "PRG099;AddCust"). A null string may be passed to indicate that nothing is to be performed.  
---|---  
_;entry$_ |  Name of starting statement label to use as entry point in the subprogram. Optional. Maximum string size 8 KB. If included, use a leading **;** (_semi-colon_) and add it to the _subprog_ _$_ string expression.  
_variable_ |  Can either be a numeric or string variable that will be initialized with the value from the _expression_ prior execution of the performed program.  
_nolabelref_ |  Program line number or statement label to transfer control to in case the entry point supplied in the _subprog_ _$_ does not exist in the program.  
_stmtref_ |  Program line number or statement label to transfer control to in case of an error.  
  
_(The DOM option was added in PxPlus v7.10.)  
__(The WITH clause was added in PxPlus 2021.)_

##  Description

The **PERFORM** directive saves the current program state and then transfers control to a subprogram. All variables are made common between the initiating program and the subprogram. When the subprogram terminates, control returns to the initiating program at the directive following the **PERFORM** directive.

#### **Note:**  
All variables that are changed or created during execution of the _performed_ subprogram will be returned to the initiating program.

You can specify an optional entry point in the subprogram. To do this, append a **;** (_semi-colon_) and the starting label name (;_entry$_) to the subprogram name:

> perform "SUBPROG;STARTING_LABEL"

After the subprogram is loaded, PxPlus internally issues a **GOTO** directive using the label as a statement reference and starts execution there. Use this feature to create subprograms to act as "libraries" (i.e. multiple stand-alone routines, each starting at its own entry point).

In addition, PxPlus allows the specification of a line number instead of a label. To specify a line number, the entry point must consist of a **#**_(pound sign)_ followed by the line number:

> perform "SUBPROG;#1000" (This would start at statement 1000 in SUBPROG)

The execution of the subprogram is normally terminated with an EXIT; however, the **END** or **STOP** directives may be used in its place.

**_Subroutine Within a Subprogram_**

The **PERFORM** directive can also access subroutines externally via entry points in the called program. In this case, the RETURN statement that is used to terminate the subroutine in a subprogram will automatically return control to the initiating program. This feature allows the same chunk of code to be accessed internally (**GOSUB**), as well as externally (**PERFORM**).

## Null String

If desired, a null string may be passed to the **PERFORM**. This will cause nothing to be executed -- effectively, the **PERFORM** becomes a comment. This feature allows applications to include logical option "Exit Points" within their application where the exit point can be assigned to a variable that, if set, causes the application to run logic from an external program.

This capability can be disabled using the [**'+N'**](../parameters/plusn.md) system parameter.

##  See Also

[**CALL Transfer to Subprogram**](call.md)  
[**RUN Transfer and Execute a Program**](run.md)  
[**END Halt Execution of Program**](end.md)  
[**EXIT Terminate Subprogram and Return**](exit.md)  
[**STOP Halt Program Execution**](stop.md)  
[**GOSUB.. Execute Subroutine**](gosub.md)  
[**RETURN Return From a Subroutine**](return.md)

##  Example

**_This is the calling program:_**

|  0180 let Z=1,X=2,A$="Cat",B$="Pig*****Dog",V=9  
0190 print "Values before PERFORM:",@(26),Z,X,A$,B$,@(45),V  
0200 perform "ABCDEF;TEST",err=9000  
0210 print "Values after PERFORM: ",@(26),Z,X,A$,B$,@(45),V,ZZ$  
0220 stop  
  
->run  
---|---  
|  Values before PERFORM: |  1 2CatPig*****Dog 9  
|  TEST in subprogram ABCDEF  
|  In PERFORM |  1 2CatPig*****Dog 9  
|  Change: |  6 7Pig****Cat**** 4 I'm new, from ABCDEF  
  
**_This is the subprogram:_**

|  0040 TEST: print "TEST in subprogram ABCDEF"  
0060 print @(8),"In PERFORM",@(26),Z,X,A$,B$,@(45),V  
0070 let Z=6,X=7,A$="Pig",B$="****Cat****",V=4,ZZ$=" I'm new, from ABCDEF"  
0080 print @(8),"Change : ",@(26),Z,X,A$,B$,@(45),V,ZZ$  
0090 exit  
---|---
