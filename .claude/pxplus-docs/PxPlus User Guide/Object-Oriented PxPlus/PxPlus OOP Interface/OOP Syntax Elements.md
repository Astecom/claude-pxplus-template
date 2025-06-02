# Object-Oriented PxPlus

**OOP Syntax Elements**|   
---|---  
  
Below is a list of some of the directives and functions used in the implementation of PxPlus object-oriented mechanisms.

**[DEF CLASS](DEF%20CLASS%20Directive.md)** |  Defines the object class.  
---|---  
**[DROP CLASS](DROP%20CLASS%20Directive.md)** |  Deletes class definition and all related information.  
**[DROP OBJECT](DROP%20OBJECT%20Directive.md)** |  Deletes an object.  
**[FUNCTION](FUNCTION%20Directive.md)** |  Declares functions or methods for the object.  
**[LIKE](LIKE%20Directive.md)** |  Specifies other objects that this object inherits from.  
**[LOAD CLASS](LOAD%20CLASS%20Directive.md)** |  Preloads a class definition into memory from a **.pvc** file.  
**[LOCAL](LOCAL%20Directive.md)** |  Declares internal data/properties for the object.  
**[NEW( )](NEW\(%20\)%20Function.htm)** |  Creates an object instance.  
**[OPEN OBJECT](OPEN%20OBJECT%20Directive.md)** |  Opens a file for exclusive use in an object.  
**[PRECISION](PRECISION%20Directive.md)** |  Sets default program precision for use within the object.  
**[PROGRAM](PROGRAM%20Directive.md)** |  Defines the default program that contains the object logic.  
**[PROPERTY](PROPERTY%20Directive.md)** |  Declares data/properties for the object.  
**[REF( )](REF\(%20\)%20Function.htm)** |  Controls reference counts.  
**[RENAME CLASS](RENAME%20CLASS%20Directive.md)** |  Change name of an existing class.  
**[STATIC](STATIC%20Directive.md)** |  Dynamically declares **LOCAL** variables.  
  
System-supplied variables available while executing code on behalf of an object:

**_Class$** |  Contains the name of the class for current object.  
---|---  
**_Obj** |  Identifies internal object identifier of current object.  
**_Refcnt** |  Contains the reference count for this class of object.  
**'_Type$** |  Internal property for PxPlus OOP objects that provides a list of the various combinations of parameter types for the objects methods/functions. Each reference to a function declaration with different calling parameters will be listed using '_Type$ with _numeric_ parameters identified with an 'N' and _strings_ with an 'S'. Arrays will contain '{ALL}' and functions declared with the '(*)' syntax will also be reported accordingly. **_Example:_** 0010 DEF CLASS "TypeTest"   
0020 FUNCTION Find(Numeric)FindFunc  
0030 FUNCTION Find(String$)FindFunc  
0040 FUNCTION Find(Numeric,String$)FindFunc  
0050 FUNCTION Find(NumArray{ALL})FindFunc  
0060 FUNCTION Find(StrArray${ALL})FindFunc  
0070 FUNCTION Find(*)FindFunc  
0080 END DEF  
0090 !  
0100 FindFunc:  
0110 RETURN 0  
x=new("TypeTest")  
?x'*  
Find(),  
?x'_Type$  
Find(*),Find(N),Find(N{ALL}),Find(N,S),Find(S),Find(S{ALL}),  
  
## See Also

**[Putting It All Together](../Putting%20It%20All%20Together/Overview.md)**
