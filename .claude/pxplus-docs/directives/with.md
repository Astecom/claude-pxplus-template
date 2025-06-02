# Directives 

**WITH..END WITH** |  **_Object Reference Construct_**  
---|---  
  
##  Format

**WITH** _object_**..END WITH**

**_Where:_**

**END WITH** |  Directive to end **WITH** construct  
---|---  
_object_ |  Object handle  
  
##  Description

The **WITH** directive is used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to simplify the coding of multiple statements that refer to the same _object_. A logical "**.** " variable is used in place of the object name prior to the [**Apostrophe Operator**](../appendix/apostrophe_operator.md) in all property/method references.

**_Example:_**

> with Button_1.ctl  
>  .'col=1,.'line=49,.'text$="Push Me"  
>  end with

When a **WITH** directive is encountered, the current value of the logical "**.** " variable is preserved on a stack, which is restored upon execution of an **END WITH**. Each **WITH** should be terminated by an **END WITH**. The "**.** " variable is only allowed to be referenced as an object handle; therefore, any other "**.** " references (without the [**Apostrophe Operator**](../appendix/apostrophe_operator.md)) are invalid.

**_Example:_**

> . = 3 |  (_Invalid_)  
> ---|---  
> print . |  (_Invalid_)  
> .'value$="ABC" |  (_Valid_)  
  
The value of the "**.** " variable is **_global_** ; i.e. if it is set in mainline code, it will be maintained over a **CALL** or **PERFORM** to a subprogram or object method; however, if it changes, the change **_will not_** be passed back to the mainline. Subroutines (**GOSUB**) can change the value and alter the **WITH** stack.

The **WITH** stack is maintained separately from the **GOSUB** /**FOR** /**WHILE** stack. Each program level (**CALL** /**PERFORM**) has its own **WITH** stack, which is freed upon exit of the program level. The maximum number of **WITH** values that can be stacked is 20 per program level. Attempting to issue an **END WITH** without a corresponding **WITH** will generate an Error #27: Unexpected WEND, RETURN, or NEXT. Transferring into the middle of a **WITH** structure is allowed; however, it is the developer's responsibility to assure that the **WITH** stack is properly maintained.

The current value of "**.** " is available in **TCB(93)**.

_(The WITH..END WITH directive was added in PxPlus v7.00.)_

##  See Also

**[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**
