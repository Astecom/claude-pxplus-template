# 

**.NET Interface**|   
---|---  
  
The .NET interface enables seamless integration between PxPlus and the .NET ecosystem. This interface allows developers to leverage the power of .NET's robust libraries in PxPlus when using .NET applications.

The .NET interface supports running on WindX client machines. See **Important Note** below.

_(The .NET interface was added in PxPlus 2025.)_

A number of ways are available to define and interact with a .NET object. A .NET object can be created in a **_PxPlus program_** or in a **_NOMADS panel_**.

**_PxPlus Program_**

The **[DEF OBJECT](directives/def_object.md)** directive is used to create a new instance of a .NET control. The .NET control can be a graphical (visible) control or a data (invisible) control. Once you define a .NET object, you can use it like any PxPlus object through properties, methods and events.

The **[ON EVENT](directives/on_event.md)** directive is used to activate support for individual .NET control events for use in PxPlus applications. All .NET events have two arguments, _sender_ and _evtArgs_ , where _sender_ is the .NET object that triggered the event while _evtArgs_ is a .NET object that contains additional event arguments, if needed. Event arguments are supported only when handling events via a class.

**_NOMADS Panel_**

The **[External Control Properties](NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)** dialogue is used to create a .NET object in a NOMADS panel where .NET properties and events can be added.

#### **Important Note:**  
All formats are **_Windows only_** , and you must have installed **Windows Desktop Runtime 8**.  
  
If using 64-bit PxPlus, you must have the x64 Runtime installed. If using 32-bit PxPlus, you must have the x86 Runtime installed.  
  
The .NET interface can be used when running under WindX, in which case, **Windows Desktop Runtime 8** must be installed on client machines.

## See Also

**[How To Tutorials (for .NET Interface)](How%20To/Dot%20NET%20Tutorials%20Intro.md)**
