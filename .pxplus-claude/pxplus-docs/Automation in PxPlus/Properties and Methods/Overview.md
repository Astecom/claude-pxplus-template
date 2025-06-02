# Automation in PxPlus

**Properties and Methods** |  **__**  
---|---  
  
Once a reference to an object has been obtained, the next step would be to manipulate or control the object. To obtain a listing of all the exposed properties and methods, the _tick asterisk_(**'***) internal property can be evaluated:

> **PRINT** _obj_ID_**'***

This statement returns a comma-separated list of all exposed properties and methods, with method names having trailing parentheses. This list is merely an overview of the object and does not include data type or parameter information.

#### **Note:**  
Some objects return a listing that only contains the PxPlus extended properties and methods (see **[Extended Properties and Methods](../PxPlus%20COM%20Interface%20Extensions/Overview.htm#extendedproperties)**). This occurs when the object does not expose run-time type information.

Proper object documentation is very important. Without proper documentation, it will be impossible to tell:

  * What parameters are to be passed to methods.
  * What return values can be expected from properties or methods.
  * What parameters are considered by reference versus those that are by value.
  * What method parameters are optional.
  * What properties are indexed, and what data types are used for the indexes.



PVX Plus Technologies Ltd. only provides support for the PxPlus object **_interface_**. Specific interface information for an object must be obtained from the respective vendor.

## Retrieving Property Values

To retrieve a property value, place the object variable and property name on the right-hand side of the equation:

_variable_**=**_object'property_**[$]**

Automation is case insensitive; therefore, a property name can be written in upper, lower, mixed, or proper case. If the property is to return a string data type, then a **$** symbol should be placed at the end of the property name. Properties may also be collections or arrays, which would require a slightly different syntax when assigning values:

_variable_**=**_object'property_**.get [$](**_index_**[$], )**

The **.get** that is appended to the property name indicates to PxPlus that this is a property and not a method call. For string type properties, the **$** symbol should be placed at the end of the **.get** and before the open parentheses. The _index_ parameter indicates the property element to retrieve. Unlike PxPlus arrays, the index for the property might not be a numeric data type (check the object documentation).

**_Example:_**

STYLE=DOCUMENT'Styles.get("Normal")

**_Where:_**

Styles is a property and "Normal" indicates the indexed value to retrieve.

#### **Note:**  
Some objects allow indexed property access without specifying **.get** notation.

## Assigning Property Values

To assign a property value, place the object variable and property name on the left-hand side of the equation:

_object'property_**[$]=**_variable_

Automation is case insensitive; therefore, a property name can be written in upper, lower, mixed, or proper case. If the property is to return a string data type, then a **$** symbol should be placed at the end of the property name. Properties may also be collections or arrays, which would require a slightly different syntax when assigning values:

_result_**=**_object'property**.**_**put**(_index_[**$**], ,_data_[**$**])

This syntax is identical to a method call, but with a few exceptions. The _result_ of the property assignment is always zero, and it can be disregarded. The **_._ put** indicates to PxPlus that this is a property and not a method call. And finally, the _data_ to be assigned to the property is passed in as the last parameter between the parentheses.

This syntax style is also required when assigning an object to a non-index/non-array property. The reason for this is due to a syntax conflict in PxPlus, where the following would be invalid:

_object'property_ =* _other_object_

The correct syntax for the above example would be:

_result_**=**_object'property_**.put (***_other_object_**)**

#### **Note:**  
When assigning or passing an object, it is required that an _asterisk_ ( ***** ) appear before the object reference. This allows PxPlus to differentiate between a variable holding a numeric value and one that holds an object reference.

There may also be cases where the property assignment is expecting to be set by reference. A common example occurs when an object property is changed to refer to a new object. For most properties that are object types, the **.put** syntax will work correctly. If an error does occur, then the following syntax should be tried:

_result_**=**_object'property_**.putref (***_otherobject_**)**

## Calling Methods

To call a method, place the object variable, method name, and parameter list on the right-hand side of the equation:

_result_**=**_object'method_**[$] (**_param1_**,**_param2_**[, ])**

Automation is case insensitive; therefore, a method name can be written in upper, lower, mixed, or proper case. If the method is to return a string data type, then a **$** symbol should be placed at the end of the method name. Some methods are written to accept **_optional_** parameters. When choosing not to pass an optional parameter, a ***** should be passed in the place of the parameter:

_result_**=**_object'method_**[$] (*,**_param2, param3_**)**

The preceding example passes two parameters in, skipping the first optional parameter. The one exception to this is that PxPlus will not allow the passing of ***** as the last parameter. When the last parameter is optional and should be skipped, simply close the parenthesis after the last actual argument.

**_Example:_**

The following example shows incorrect syntax for skipping the last two optional parameters of a method call:

_result_**=**_object'method_**[$] (**_param1_**, *, *)**

The correct coding would be:

_result_**=**_object'method_**[$] (**_param1_**)**

#### **Note:**  
Documentation or a type library viewer should be used when trying to determine if a method uses optional parameters.
