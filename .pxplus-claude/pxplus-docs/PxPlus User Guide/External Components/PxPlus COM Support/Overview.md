# External Components  
  
**PxPlus COM Support** |  **__**  
---|---  
  
The **COM** interface in PxPlus allows developers to integrate external components produced by third-party vendors into their PxPlus applications in MS Windows. It provides convenient syntax for obtaining information about, as well as access to, the internal properties and methods of a _Component Object Model_ (COM) object. This functionality is carried out via the COM **_automation_** standard, which is an implementation of the IDispatch interface in Windows. (This was commonly known as **OLE**  _automation_ in earlier Windows versions.)

When an application or library supports automation, the objects exposed by the application can be accessed through the PxPlus COM interface and manipulated to invoke their methods and get or set their properties. For example, a spreadsheet application might expose a worksheet, chart, cell, or range of cells, each as a different type of object, and a word processor might expose objects, such as applications, documents, paragraphs, bookmarks or sentences.

In addition to the COM interface, PxPlus also supports the .NET interface.

#### **Note:**  
An **[Excel Object](Excel%20Object.md)** and a **[Word Object](Word%20Object.md)** were created to simplify the use of the Excel.Application and Word.Application extended objects.  
  
_(The PxPlus Excel and Word objects were added in PxPlus 2017.)_

**_.NET Interface_**

The **[.NET Interface](../../../Dot%20Net%20Interface.md)** enables seamless integration between PxPlus and the .NET ecosystem. This interface allows developers to leverage the power of .NET's robust libraries in PxPlus when using .NET applications.

The .NET interface allows .NET objects to be added to applications like any PxPlus object.

_(The .NET interface was added in PxPlus 2025.)_

## COM Concepts

The following terms/definitions apply to automation and the PxPlus COM interface:

**Control** |  An object that exposes a user interface; e.g., a dialogue with OK and Cancel buttons can be implemented as a control. These are now typically based on **ActiveX** vs. the older **OLE** control technology (**OCX**).  
---|---  
**Object** |  Any item that can be programmed, manipulated or controlled. Interfacing with an object is done through property setting and getting, and calling of methods.  
**Property** |  A property is a characteristic of an object (an adjective); e.g. properties of Textbox might include: Name _,_ Visible _,_ Forecolor, etc.  
**Method** |  A function that performs an action on an object (a verb). For example, an Application object might expose a Close method.  
**Instantiation** |  To create an instance of (instantiate, define, name) an object.  
**Binding** |  The process of connecting property and method calls to an object.  
**Late Binding** |  Obtaining a reference to an object without any prior information about the object. Property and method names are resolved at run time. This is the binding style used by PxPlus.  
  
To program against an object, a reference to that object must first be obtained. This process is commonly referred to as **_binding_**. Unlike other languages, PxPlus simplifies this process by providing one statement that can be used to create new objects, reference running objects, and connect to remote objects.

Communication between an application and a COM object is performed either by reading or writing the object's properties or by invoking methods within the object. The PxPlus apostrophe operator (also known as _tick_) is used to access properties within a COM object and invoke its methods. See **[Accessing an Object's Properties and Methods](Accessing%20an%20Objects%20Properties%20and%20Methods.md)**.

The PxPlus commands used in the handling of COM objects are as follows:

**DEF OBJECT** |  Directive used to create a new instance of a COM object. See **[Referencing a COM Object](Referencing%20a%20COM%20Object.md)**.  
---|---  
**DELETE OBJECT** |  Directive used to disconnect from a COM object. See **[Releasing an Object Reference](Releasing%20an%20Object%20Reference.md)**.  
**DROP OBJECT** |  Alternative to **[DELETE OBJECT](../../../directives/delete_object.md)** directive. The two directives may be used interchangeably in PxPlus applications.  
**ON EVENT** |  Directive used to process COM control events in a PxPlus application. See **[Event-Driven COM](../Event-Driven%20COM/Overview.md)**.  
**FUNCTION** |  Directive supports the **FOR EVENT** keywords for setting a method to be processed for a particular incoming event. See **[Event-Driven COM](../Event-Driven%20COM/Overview.md)**.
