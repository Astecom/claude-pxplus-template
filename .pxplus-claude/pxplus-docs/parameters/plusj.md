# System Parameters

**'+J'** |  **_Set Object Cache Size_**  
---|---  
  
##  Description

The **'+J'** parameter is used to define the number of object class definitions that are to be cached by PxPlus. This parameter can be set to a value between 0 and 200.

**_Class Caching_**

Whenever an object is created, its class definition, if not explicitly defined, will be dynamically loaded from a .PVC program file. When the last instance of a dynamically loaded object is dropped, the system will normally free its class definition requiring it to be reloaded on the next creation of the object.

The Object Cache mechanism maintains class definitions in memory in case they might be needed later within the application.

_(The '+J' system parameter was added in PxPlus v8.01, build 9181.)_

##  Default

**_10_**

## Example

If the system used an object to define detail records such as invoice lines, often when processing multiple groups of details (invoices), multiple objects will be created then freed when advancing to the next group. This can cause the system to constantly load and create the object definitions.

Setting the **'+J'** parameter defines the number of dynamically loaded class definitions that the system will keep in memory even after all references to the class are freed.
