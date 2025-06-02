# Introduction to Using PxPlus

**Object-Oriented PxPlus** |  **__**  
---|---  
  
Object-Oriented Programming (OOP) is a development approach where applications are composed entirely of reusable components that can act on each other. Unlike in traditional structured programming where functionality and information is kept apart, object orientation merges both into a single indivisible entity called an **_Object_**. This concept provides greater flexibility and easier maintenance across large systems and can make understanding and analyzing complex procedures much easier, especially in a collaborative development environment.

PxPlus is equipped with all the language apparatus for designing, developing and implementing true object-oriented programs. Several PxPlus-supplied classes are shipped with the PxPlus installation for use in your applications. The **[PxPlus OLE Server](../External%20Components/PxPlus%20OLE%20Server/Overview.md)** can be used to invoke PxPlus objects from external products.

## Why Use Object-Oriented Programming?

There are a number of excellent reasons for going _object oriented_. Objects make large development projects simpler by breaking them down into smaller manageable chunks. They may be reused in other applications, which saves development time. They can hide and protect critical data. They enforce modularity, which improves code maintainability and promotes a true collaborative development environment.

**_Consistency in Design and Code_**

In object orientation, each object is treated like a "black box". Developers do not need to know about what goes on inside an object to be able to use it. All they need is access to the object via its object ID, which provides access to what the object does but keeps the details hidden from outside. Once created, the object behaviour is **_never modified_**. This is what maintains **_consistency_** throughout a project. Developers should be confident that the object will always work as originally designed.

For example, if there is a Delete method for all objects that relate to data information throughout the application design (Client, Vendor, Product, etc.), the programmer only ever has to remember to use Delete to remove these items. The object itself determines if all conditions are met to allow for the removal.

In addition, a common property (e.g. InActive) can be provided for consistent testing of the different conditions of a Client vs. a Vendor vs. a Product. This allows programmers to write generic object-related routines, such as:

> Function PurgeHistory(ObjId )  
> ObjId'Start()  
>  while ObjId'GetNext()  
>  if ObjId'Inactive then ObjId'Delete()  
>  wend  
>  return 1

This code would work with virtually all objects to purge inactive information from the system provided the object has Start, GetNext, and Delete functions and an InActive property.

**_Data Protection_**

Certain data elements can be created that will be visible only while running within the object. These are considered local or static elements they are particularly useful for maintaining critical information (internal reference pointers, etc.) that is controlled solely by the object and is not directly accessible to outside code.

An example of this would be a field in a file that contains a linked list pointer. To avoid the issue of programs accidentally corrupting the pointer, you could make this data internal to the object only and declare it as local or static.

You may want some data elements (properties) to be accessible from outside the object yet be able to control all access to them. Access to properties can be controlled within the object. The object definition and logic decides which properties the user can read and update. For example, a field that displays _Salary_ could be restricted to only those users who rightfully have access to the data.

This capability can also be used to make sure that data content is correct. For example, a _Date_ field could have update logic applied to it so that only valid dates are placed into a file.

**_Control and Separation of Code_**

Another underlying advantage that objects give us is the ability to reuse common application code. Object orientation provides this advantage in two ways:

First, common object-related functionality can be developed methods that take advantage of the fact that an object is self-contained and need not concern themselves with the object's particulars. For example, the PurgeHistory method can be used on any object, provided the object has Start, GetNext, InActive, and Delete properties/methods. This allows the code to be used in multiple places within the application, reduces duplication, and minimizes the chance of introducing errors.

Second, _inheritance_ can be applied objects that utilize code and concepts from other objects. This further reduces code duplication, reduces errors and makes for a smaller and tighter application.

Objects themselves can be used as function libraries, which enable code to be written once and used in numerous places within the system.

**_Access From Outside the Application_**

If you design objects that are fundamentally self-contained, they can also be used by outside applications (via the **[PxPlus OLE Server](../External%20Components/PxPlus%20OLE%20Server/Overview.md)**). It is possible to create a PxPlus object, then invoke it from other languages, such as VB, VBScript, Delphi, and C++. The **PxPlus OLE Server** allows virtually any object to be invoked by, and directly interact with, outside application development environments. You can use **DCOM** to invoke PxPlus objects remotely.

##  Concepts and Terminology

To understand OOP is to understand its vocabulary. A quick reference of all the standard object-oriented programming concepts and terminology is provided below.

**Term** |  **Description**  
---|---  
_Objects_ |  OOP systems are modeled after real world things or _objects_. In object-oriented programming, objects are entities that consist of data and the functionality that operates on that data. **_Analogy:_**  
  
A car is represented in a computer system as a _Car_ object _._  
_Classes_ |  A _class_ defines an object. Each object belongs to only one class. Similar objects are grouped by class. Because an object represents an _instance_ of a class, the action of creating the object is often called ** _instantiating_**. **_Analogy:_**  
  
A _BlueFord_ has properties and methods defined in the Car class of objects. The _BlueFord_ object is an instance of _Car_ created at run time. **_Distinguishing Between an Object and a Class_** It is essential to understand the difference between an object and a class. An **_object_** is a unique instance of a particular type, whereas the **_class_** is that type. **_Example:_** |  **Object** |  **Class**  
---|---  
**Bob's Bank Account** |  **Bank Account**  
**MIT** |  **School**  
**Out of control car** |  **Car**  
**Bank of Nova Scotia** |  **Bank**  
  
**_Question:_**  
  
Can any of the above objects be a class?

**_Tip:_**  
  
Try adding an "S" to the objects. Content is important.  
  
_Object Identifiers_ |  There can be many instances of a class running in the system; therefore, PxPlus uses a numeric value to identify each object. An **_object identifier_** allows us to send a message to a particular object. Applications cannot directly access any of the data but must go through the object identifier. **_Analogy:_**  
  
_BlueFord_ is represented by a numeric variable that points to an instance of a _Car_ object.  
_Properties_ |  Properties are the data held inside an object. The same properties will appear in every object of a particular class, but the value of each property may be different. **_Analogy:_**  
  
The object identified as _BlueFord_ has a property called _Fuel_Level_. Every instance of _Car_ will have a _Fuel_Level_ property, but the value of _Fuel_Level_ may be unique to each instance.  
_Methods_ |  Methods are procedures held within an object. They define what actions each object is able to perform. **_Analogy:_**  
  
The _Car_ class has methods, such as _getFuelLevel_ or _fillTank_ that affect the state of the _Fuel_Level_ property. It also has a method called _Start_ that contains all of the logic responsible for starting the engine.

#### **Note:**  
A class should only have properties/methods related to the intended objects; e.g. a _Car_ class would not have a _Rudder_ property or _DropAnchor_ method.  
  
_Encapsulation_ |  The properties of an object are not addressable from outside of the object. Only the object's methods should be able to change its properties. The enforcement of this rule is known as **_encapsulation_**. Encapsulation means a message can only access an object's properties via the object's methods; the object's methods will validate all incoming messages.

#### **Warning!_  
Do not break this rule._**  
  
_Inheritance_ |  This term describes how one class inherits elements from another class. **_Analogy:_**  
  
Both the _Car_ class and the _MotorCycle_ class share common elements (e.g. _GasTank_), which reside in a more general class called _Vehicle_. The specific structure and behavior defined in a _Car_ and _MotorCycle_ are based on the elements of a _Vehicle_. _Car_ and _MotorCycle_ are called ** _derived classes_** (also known as _sub-classes_ or _children_). The _Vehicle_ class is referred to as a **_base class_** (a.k.a. super class or parent). Each derived class has properties and associations of its parent. Both _Car_ and _MotorCycle_ are a "kind-of" _Vehicle_. The "kind-of" relationship is important. It means that, with inheritance, restraint is placed on the **_type_** of which the object is an instance. **_Substitutability Principle_** A derived class must be usable through the methods declared in the base class. At any time, the derived class can be substituted for the base class. For example, if a block of code expects to receive a reference to a _Vehicle_ and instead it receives a reference to a _Car_ because _Car_ is based on the elements of a _Vehicle_ , the logic will still execute as expected.

#### **Note:_  
_** Delegation is an alternative to inheritance. Misuse of inheritance can reduce reusability and complicate maintenance.  
  
_Aggregation_ |  An **_aggregate_** object is an object comprising several other objects to which it delegates responsibilities. An aggregate forwards messages to properties that are objects known as **_delegates_**. Client objects sending messages to the aggregate are unaware that multiple objects are working behind-the-scenes. An aggregate delegates responsibilities like inheritance but without the "kind-of" restraints of inheritance.  
_Collections_ |  A **_collection_** is an object that groups multiple objects into a single unit. Collections are used to store, retrieve and transmit objects from one method to another. They do not manipulate the objects but simply store and retrieve their object identifiers. Collections typically hold objects that form an expected group. **_Analogy:_**  
  
A _DealerShip_ object has a collection of _Car_ objects, whereas a _ParkingLot_ has a collection of _Vehicle_ objects. PxPlus collection objects are *OBJ/COLLECTION and *OBJ/HASHCOLLECTION.  
_Polymorphism_ |  **_Polymorphism_** is based on a Greek word meaning "many forms". In object-oriented modeling, it refers to the ability of objects to respond to a particular message in a manner appropriate to the object's class. Polymorphism is common among classes that are derived from a common base class. **_Analogy:_**  
  
All objects that are derived from the _Vehicle_ class have a method called _Start_. If a _ParkingLot_ object were to cycle through its collection of _Vehicle_ objects to call each _Start_ method, the _Car_ objects will execute logic specific to cars, and _Motorcycle_ objects will execute logic specific to motorcycles, and so on. Although the same message was sent to all _Vehicle_ objects, each object responds with a different _Start_ method.
