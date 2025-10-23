# System Parameters

**'+N'** |  **_Allow NULL Perform Value_**  
---|---  
  
##  Description

The **'+N'** parameter controls whether the **PERFORM** directive will generate an error when an empty/null string is passed to a **PERFORM** directive.

By default, this parameter is **_On_** , which indicates that a NULL string is accepted.

When **_Off_** , a NULL string would be considered an error. _(Pre-Version 7.10 PxPlus functionality)_

When the **PERFORM** directive encounters a NULL string (and **'+N'** is **_On_**), the directive does not generate an error and simply proceeds to the next directive. In other words, the **PERFORM** does nothing.

_(The '+N' system parameter was added in PxPlus v7.10, build 9170.)_

##  Default

**_On_**

## See Also

**[PERFORM Call Subprogram, Share Variables](../directives/perform.md)**
