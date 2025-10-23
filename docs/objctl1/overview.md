# Control Object Properties  
  
**Object Controls** |  **__**  
---|---  
  
PxPlus supports the ability to customize controls through the use of objects. Two types of capabilities are available: _Object Defined Controls_ (**ODC**) and _Object Enhanced Controls_ (**OEC**). In general, whenever an Object Control is referenced, the system will utilize the properties and/or methods within the associated object to handle the request. To the application logic, the control appears no different from any other control except that it may have additional properties and methods or different functionality.

Replacing or enhancing controls with your own objects allows the application developer to avoid making many changes to support other environments and control types. In many cases, existing applications should simply run using these new Object Controls:

**[Object Defined Controls](sect1.1/c.md)** |  Object Defined Controls (ODC) are controls that are defined completely by application objects. The object is responsible for all aspects of the control such as its properties, drawing, input, etc. Once an ODC is defined, the system will pass all property requests to the object to process. The system internally maps the standard CTL values to an object.  
---|---  
**[Object Enhanced Controls](sect1.1/b.md)** |  Object Enhanced Controls (OEC) are controls whose functionality is extended through the use of an application object.  
  
ODC controls have the additional advantage that they fully replace control and as such can be tailored to interface to whatever type of output device you may want to work with (HTML, SWF, Text mode terminals, etc.). This allows the application designer to separate much of the business rules from the presentation layer. 

## ODC Server

To simplify the deployment of ODCs, PxPlus contains built-in logic that allows you to create a control creation service object called an **[ODC Server](sect1.1/d.md)**. If an ODC Server object is defined to the system, whenever the system encounters a directive to create a standard control such as LIST_BOX or BUTTON, the creation request will be passed first to the ODC Server object, which can create an ODC in lieu of the standard control. This allows for the automatic replacement of standard of controls with ODCs with minimum application changes thereby allowing easier migration to different operating environments. 

In addition to control creation, the system has the facility to allow the ODC Server to emulate many of the graphical interface directives, functions, and variables. For example, if a method MSGBOX exists within the ODC Server object, the system will invoke it to process all MSGBOX directives.
