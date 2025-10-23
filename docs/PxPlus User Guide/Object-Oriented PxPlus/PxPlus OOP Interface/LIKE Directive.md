# OOP Syntax Elements

**LIKE Directive** |  **__**  
---|---  
  
**LIKE** _"otherclass", "otherclass", ..._

Multiple classes can be included in the definition of a single class. This can be accomplished using the **LIKE** directive within a **DEF CLASS .. END DEF** block to inherit the properties from one or more other classes.

For example, you might want to create a generic class that includes the contents of a number of different independent smaller classes (one for security, one to handle dates, etc.). Rather than merge the definitions, LIKE allows you to keep them separate. Not only does this simplify maintenance, but the independent classes may then be shared with other applications.

**_Example:_**

> DEF CLASS "MyAppl"   
>  LIKE ""DateUtil","Security"   
>  END DEF

When a handle to MyAppl is created, it can be used to access all the methods contained within DateUtil and Security.

When multiple occurrences of the same property/method are found within the inheritance, the first class declared in the**LIKE** directive takes precedence. This can be overridden by specifying the class using a**FROM** clause in the method arguments.

**_Example:_**

> x'AddItem(FROM "myClass",Item$)

## See Also

**[LIKE Directive](../../../directives/like.md)**
