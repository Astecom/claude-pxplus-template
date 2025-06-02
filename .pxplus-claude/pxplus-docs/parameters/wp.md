# System Parameters

**'WP'** |  **_Wait for Pipe on Close_**  
---|---  
  
##  Description

**_(UNIX/Linux Only)_**

Determines whether or not to wait until a child process completes. When the **'WP'** parameter is **_On_** and a pipe is closed, PxPlus will wait until the child process has terminated.

#### **Note:  
** If the **'WP'** parameter is **_On_** and the operation that the child was started for does not complete, then PxPlus will not return. A Ctrl-Break may terminate the child, depending on the child's processing of a **BREAK**.

When the **'WP'** parameter is **_Off_** and a pipe is closed, PxPlus will not wait for the child to complete. This can result in a child process that has not had its exit status checked (shown as "defunct"). PxPlus will automatically check and clear out these defunct processes whenever **a)** it opens another pipe, **b)** a **WAIT** directive is encountered, or **c)** the current PxPlus session is terminated.

##  Default

**_Off_**

## See Also

**[WAIT Temporarily Halt Execution](../directives/wait.md)**
