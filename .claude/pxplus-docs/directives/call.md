# Directives 

**CALL** |  **_Transfer to Subprogram_**  
---|---  
  
##  Format

**CALL**  _subprog_ _$_**[** ;_entry_ _$_**][** ,**ERR=**_stmtref_**][** ,_arglist_...**][WITH**  _variable_ =_expression_ , ...**]**

**_Where_** _:_

_subprog_ _$_ |  Name of the subprogram to call. Maximum string size 8kb.  
---|---  
_;entry$_ |  Name of starting statement label to use as entry point in the subprogram. Optional. Maximum string size 8kb. If included, use a leading **;** (_semi-colon_) and add it to the _subprog_ _$_ string expression.  
  
**_Example:_**  
  
call "get_pizza;order",top_1,top_2 ...  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_arglist_ _..._ |  Comma-separated list of variables, literals or expressions.  
_variable_ |  Can either be a numeric or string variable that will be initialized with the value from the _expression_ prior execution of the called program.  
  
#### **Note:**  
The **WITH** clause cannot be used with **[WDX]** or **[LCL]** calls.

_(The WITH clause was added in PxPlus 2021.)_

##  Description

Use the **CALL** directive to transfer control to a subprogram. The current program state is saved and the specified subprogram is loaded and executed. If you use arguments, they are received in the called subprogram for its use via the **ENTER** directive.

The called program should terminate with an **EXIT** , which may be replaced by an **END** or **STOP**. 

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. CALL "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

**_Arguments for_ CALL _and_ ENTER**

Normally, the total number of arguments in the **CALL** and **ENTER** statements must match. Each argument in the **CALL** statement must correspond in relative position and in type (numeric or string) to a variable in the **ENTER** statement. If you use a shorter list of arguments in a **CALL** statement than in the **ENTER** statement, make sure to maintain relative position and type up to the point where you shorten the list (and include error handling options). Otherwise, the following error will occur: Error #36: ENTER parameters don't match those of the CALL.

#### **Warning!**  
If you pass an argument to the subprogram using a simple variable (e.g. A$,Z), then any changes to the variable in the subprogram will have an effect in the calling program.  
  
Subscripted variables/expressions (including substrings) or any values enclosed in parentheses only have their values passed one way: to the subprogram. Changes made to these will **_not_** affect the calling program.

You can protect a simple variable in a **CALL** or **ENTER** statement by placing it inside parentheses. This turns the variable into an expression, which has the effect of making it _read only_ :

> call "PROG",(A$)

IOLists can also be used as arguments for **CALL** statements:

> call "PROG",iol=8000

Pass a complete array to a subprogram by specifying the array name followed by **{ALL}**. In this case, all values are passed to the subprogram and any changes made are returned to the calling program. See **[Called Procedures](../PxPlus%20User%20Guide/Programming%20Constructs/Called%20Procedures/Overview.md)**.

String templates cannot be passed if they are defined prior to the **ENTER** statement in the called program.

To pass an array as a _read-only copy_ , surround the array specification with parentheses on either the **CALL** or **ENTER** directive:

> call "someprog",(X${all}) ! Passes copy of the array

> enter (X${all}) ! Loads copy of array regardless of CALL

_(Support for passing an array as a read-only copy was added in PxPlus 2019.)_

**CALL _Using Entry-Point Labels_**

This directive also has an optional feature you will find useful for applications like subprogram "libraries" (with multiple stand**-** alone routines, each accessed by a statement label). To use this form of access, append a **;** (_semi-colon_) plus the label name of the starting statement to the subprogram name:

> call "PROG;STARTING_LABEL",err=1000,X$,A,CT$

After the called subprogram is loaded, the system internally issues a GOTO STARTING_LABEL (e.g.) directive and starts execution there. Use this to create a single subprogram with multiple entry points and **ENTER** directives.

In addition, PxPlus allows the specification of a line number instead of a label. To specify a line number, the entry point must consist of a **#** (_pound sign_) followed by the line number:

> call "ProgABC;#1000" (would start execution at statement 1000 in ProgABC)

_(Specification of a line number was added in PxPlus v7.10, build 9170.)_

**CALL _and_ ENTER _from ASCII Programs_**

When you run programs from ASCII text files, the **CALL** and **ENTER** with no arguments will always fail because the system thinks that the variables have already been assigned. To work around this, use the **PERFORM** directive or save the called program in a program file.

##  See Also

[**ENTER Specify Arguments**](enter.md)  
[**PERFORM Call Subprogram, Pass Variables**](perform.md)   
[**END Halt Execution of Program**](end.md)   
[**EXIT Terminate Subprogram and Return**](exit.md)   
[**STOP Halt Program Execution**](stop.md)

##  Example

0020 call "ABCDEF",err=0050,A,4*F,Z$,X$(4,5),(Q)

In ABCDEF:

0030 enter Z,X,A$,B$,V$

Z will receive the value of A A will reflect changes in Z.  
X will receive the value of 4*F.  
A$ will receive the value of Z$ Z$ will reflect changes in A$.  
B$ will receive the string from X$(4,5), which will not change.  
V$ will receive Q$ but Q$ cannot be changed.
