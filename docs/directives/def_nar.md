# Directives

**DEF NAR** |  **_Define Number of ARGs_**  
---|---  
  
## Format

**DEF NAR** =_value_

**_Where:_**

_value_ |  Number of arguments. Must be between 0 (no arguments) and the **_higher_** of the original number of arguments on the Command line **_or_** the number defined using the **DEF ARG** directive. An out-of-range value results in an Error #41: Invalid integer encountered.  
---|---  
  
## Description

The **DEF NAR** directive is used to reduce the number of arguments that a program sees. This changes the value returned by the **NAR** system variable.

_(The DEF NAR directive was added in PxPlus 2017.)_

## See Also

**[DEF ARG Define Temporary ARG Value](def_arg.md)**  
**[NAR Number of Arguments, Start PxPlus](../variables/nar.md)**  
**[ARG( ) Get/Process Arguments](../functions/arg.md)**
