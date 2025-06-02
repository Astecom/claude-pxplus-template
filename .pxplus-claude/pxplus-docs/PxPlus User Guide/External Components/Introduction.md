# Introduction to Using PxPlus

**External Components** |  **__**  
---|---  
  
**[Called Procedures](../Programming%20Constructs/Called%20Procedures/Overview.md)** allow code to be reused within PxPlus applications to help increase efficiency and maintainability, as well as reduce program size. The same principles apply to the functionality that allows _external_ (third-party) software modules to be accessed and incorporated into your PxPlus applications from anywhere in the local operating environment or over a network.

This Help section explains the use of external objects/custom controls in PxPlus applications.

## Function Library Model

Calling procedures from external files is almost exactly the same as calling line label entry points from within PxPlus.

**_Example:_**

> 0010 ! CUSTMAINT   
>  0020 READ_CUST:   
>  0030 READ (%CUST_FILE,KEY=CST_ID$...   
>  ...   
>  0090 EXIT   
>  0100 !   
>  0110 UPDATE_CUST:   
>  0120 WRITE (%CUST_FILE,KEY=CST_ID$...   
>  ...   
>  0190 EXIT   
>  0200 !   
>  0210 REMOVE_CUST:   
>  0220 REMOVE (%CUST_FILE,KEY=CST_ID$...   
>  ...   
>  0290 EXIT

The above program contains several "functions" that can be reused at run time for the maintenance of a customer data file.

##  Concepts and Terminology

To understand the facilities in PxPlus for accessing external components, it is necessary to understand the general concepts and some of the history behind the technologies being explained.

#### **Note:**  
Some terms may have mixed meanings in the industry due to an enduring misnomer, remnants in the evolution of a technology or a direct marketing strategy. The definitions that follow apply to the use of external components in PxPlus.

**Term** |  **Description**  
---|---  
_ActiveX_ |  **ActiveX** refers to several object-oriented technologies in Microsoft that enable component sharing by many application programs within a computer or among computers in a networked environment. Historically, the definition of ActiveX emerged from the implementation of earlier OCX and OLE custom controls. The term now encompasses several subsets of Windows component technologies, and its meaning changes, depending on the application. When most people say "ActiveX", they are likely talking about **_ActiveX controls_** \- specific components that provide applet-like functionality for Web pages. Similar to **_Java_** applets, ActiveX controls can be accessed and executed via Web browsers and other applications over the Internet. However, ActiveX offers little cross-platform support, compared to Java, and is limited to software based on Microsoft's Component Object Model (**COM**).  
_Application Program Interface (API)_ |  An **API** (Application Program Interface) is a set of functions and protocols for building and implementing software applications. Most operating systems provide an API so that programs designed to run on them can access system services and stay consistent within the operating environment. Some common APIs include: |  _Windows API_ |  Microsoft's core set of interfaces for running software within the Windows operating system.  
---|---  
_Single UNIX Specification_ |  A standardized set of interfaces for running software within versions of UNIX and Linux.  
_Java API_ |  A set of standard interfaces and classes grouped into packages, such as java.awt for building graphical user interfaces, java.io for handling I/O requests, etc.  
  
These APIs also represent the specific calling conventions that define how OS services are to be invoked. There can be thousands of API calls in a full-blown operating system. While APIs are primarily intended to assist and accelerate program development, they provide a huge benefit to end users as well. By maintaining a set of common interface elements, APIs also make it easier for users to learn new programs that are designed to run on the same OS.

While an API is designed for interaction between the OS and applications, it can also establish standards for interaction between applications; e.g. Microsoft introduced various interface technologies to assist communication between applications running under Windows; i.e.**DDE** ,**OLE** ,**COM** and **.NET**.  
  
_Component Object Model (COM)_ |  **COM** (Component Object Model) is the framework for developing and supporting program component objects in Microsoft Windows. While COM originally evolved from Microsoft's OLE technology, which provided services primarily for compound documents, it now includes much more. COM provides the specification for developing reusable software components, as well as an underlying language-neutral implementation for these objects to communicate with each other. _Distributed COM_ (DCOM) extends COM technology across networked computers. See **[PxPlus COM Support](PxPlus%20COM%20Support/Overview.md)**.  
_Dynamic Data Exchange (DDE)_ |  **DDE** (Dynamic Data Exchange) is an early Windows technology used to exchange data, commands and status information automatically between different applications. While some DDE implementations are still in operation today, this technology has largely been superseded by the more robust**OLE** /**COM _Automation_** used in more current versions of Windows.  
_Dynamic Link Library (DLL)_ |  **DLL** (Dynamic Link Library) files contain executable code that can be shared by several different applications running under MS Windows. Basically, they serve as external code repositories. Unlike executable files, DLLs are not launched directly by the user but are called for by a running program or by other DLLs to provide services not built into the application. They can also save memory space because they do not get loaded into RAM until they are actually needed. Some DLLs are used only by a specific application, while others may be used by several. For example, a variety of programs would likely call the same Windows DLL for handling user interface tasks to create common toolbars, text boxes, scrollbars, etc. The DLL files installed to support specific device operations are also called ** _device drivers_**. The UNIX equivalent of a DLL is referred to as a **_shared library_** or **_shared object module._** See **[Calling DLLs from PxPlus](Calling%20DLLs%20from%20PxPlus/Overview.md)**.  
_Object Linking and Embedding (OLE)_ |  **OLE** (Object Linking and Embedding) is a Microsoft Windows technology that enables objects created in one application to be imported by reference into the documents of another; e.g. an Excel spreadsheet placed inside an MS Word document. These are referred to as **_compound documents_**. Making changes to an OLE-compatible object in the original editor automatically updates the imported version within the compound document. An extension of OLE, referred to as **_OLE Automation_** , provides an infrastructure for applications to access and manipulate shared automation objects. This technology is now a part of the Microsoft**COM** implementation.  
_OLE Control Extension (OCX)_ |  An **OCX** (OLE Control eXtension) control is a special-purpose program object that can be reused by several applications running on Microsoft's Windows systems. This technology began as VBX (Visual Basic eXtension) controls, which were VB-only in the early days of Microsoft Windows. "OLE controls" or "OLE custom controls" were then created to run on Windows 95/NT supporting 32-bit applications. OCX has now been replaced by **ActiveX**.
