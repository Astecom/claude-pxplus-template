# Directives 

**ON...GOSUB/GOTO/EVENT** |   
---|---  
  
The **ON** directive has four formats: two that provide condition execution based on the value of a numeric expression, one that is used to define how to process EVENTS from OCX controls, and a fourth to define structured Error handling.

##  Formats

Use these links to access additional information for a **_specific_** format:

**Format** |  **Description**  
---|---  
[**ON** _numexpr_**GOSUB** _stmtref,..._](on_gosub.md) |  Jump to a subroutine value based on the value of a numeric expression.  
[**ON** _numexpr_**GOTO** _stmtref,..._](on_goto.md) |  Transfer control to a statement value based on the value of a numeric expression.  
[**ON EVENT...**](on_event.md) |  Control the processing of events as received from external controls. COM, .NET and *Browser controls are supported. See **[DEF OBJECT](def_object.md)** directive. _(.NET support was added in PxPlus 2025.)_  
[**ON PROCESS EVENT...**](on_event.md) |  Define the logic to be executed when a [**PROCESS EVENT**](processevents.md) directive is executed. _(The PROCESS EVENT directive was added in PxPlus v11.00.)_  
[**... ON ERR _directive(s)_...**](on_err.md) |  Define Error logic for GOSUB, WHILE, FOR, REPEAT and SELECT directives.
