# Directives   
  
**START** |  **_Restart Session_**  
---|---  
  
##  Formats

1\. _Restart Session_ _:_ |  **START**[_max_mem_[,_prog_name_ _$_]][,**ERR=**_stmtref_]  
---|---  
2\. _Launch Separate Task_ _:_ |  **START** _prog_name_ $,_term_id_[,**ERR=**_stmtref_]  
  
**_Where:_**

_max_mem_ |  Number of 1024-byte units of memory you want to limit PxPlus to using.  
---|---  
_prog_name_ _$_ |  Character string defining the initial program to be loaded and run. String expression (maximum 256 characters).  
_term_id_ |  Terminal ID in **FID(0)** format for the new session. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **START** directive to re-initialize the current session or to launch a completely new session. **START** can be used to specify the maximum amount of memory to be allocated to the user and optionally the program to **LOAD** and **RUN**. If you omit the memory size, PxPlus uses the current memory limits.

##  Format 1

**_Restart Session_**

**START**[_max_mem_[,_prog_name_ _$_]][,**ERR=**_stmtref_]

This format completely re-initializes the current session by closing all files, clearing all user data (including Global variables), and clearing the current program. All memory currently allocated to the session is released to the system, and a new limit is defined.

**_Examples:_**

> start 10 ! Re-initializes with 10KB  
>  start 20,"INVGEN" ! Runs program INVGEN with 20KB  
> start ! Re-initializes with same memory size

To simplify conversion processes, you can set the **['QS'](../parameters/qs.md)** parameter to **_On_** so that a statement like START _nnn_ ,"this_prog" only clears local variables (the same as a **BEGIN**) and starts the specified program. The recommendation is to use BEGIN ;RUN "this_prog" to start a new program set. Use **START** to completely restart the session.

#### **Note:**  
In PxPlus, the memory size might be different from other Business Basics due to the nature of memory management for variables, arrays, program sizes, etc. You can set the **['IZ'](../parameters/iz.md)** system parameter to have PxPlus ignore any memory size restrictions.

##  Format 2

**_Launch Separate Task_**

**START** _prog_name_ $,_term_ __id_[,**ERR=**_stmtref_]]

You can launch a new session, separate from the task issuing the **START** command. The contents of _term_id_ (terminal identifier) will be assigned to the **FID(0)** value of the new session.

#### **Note:**  
When running using WindX and a client-server style connection (*ntslave, *plus/cs/client, or Application server), a START command will result in your session being disconnected.
