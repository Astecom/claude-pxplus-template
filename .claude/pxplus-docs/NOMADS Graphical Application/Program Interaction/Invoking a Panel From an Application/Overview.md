# Program Interaction  
  
**Invoking a Panel from an Application** |  **__**  
---|---  
  
The **PROCESS** directive is the typical method for calling a NOMADS panel from a PxPlus program; however, the **Jumpto** option can also be used.

## PROCESS Directive

At run time, PxPlus converts the **PROCESS** statement internally into a **CALL** to ***winproc** , the NOMADS engine. Control returns to the program once the panel is exited. Optional arguments may be passed to/from the NOMADS panel.

**PROCESS** formats are listed below.

_To invoke a NOMADS panel:_

> **PROCESS** "  _panel_ " ,"[_lib_]",_arg_1_ $,_arg_2_ $, ... _arg_20_ $

_To invoke a NOMADS Query:_

> **PROCESS** "  _panel_ " ,"[_lib_]", _val_ $

_To invoke a File Maintenance:_

> **PROCESS** "_panel_ ","[_lib_]",_arg_ __1_ $

**_Where_**  _:_

_arg_1$_ ..._arg_20$_ |  List of valid arguments for a panel object. You can use up to twenty. These arguments are accessible in the invoked panel as values in the reserved NOMADS (alpha numeric) variables **ARG_1$** to **ARG_20$**. For _Query_ or _File Maintenance_ objects, you are limited to one argument, the value of which is accessible in the reserved variable **ARG_1$**. The others are reserved.  
---|---  
_lib_ |  NOMADS library containing the _panel_ name. If you use null (""), the currently active library is assumed.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_panel_ |  Name of the NOMADS _Panel_ , _Query_ or _File Maintenance_ object.  
_val_  _$_ |  Starting/return value for a _Query_ object.  
  
## Examples Using PROCESS Directive

The examples below illustrate different uses for the **[PROCESS](../../../directives/process.md)** directive.

**_Panel Example:_**

In the example statement below, a SALES panel is invoked from a PxPlus program and two arguments, SALES_ID$ and STR(SALES_AMT), are passed to receive values:

> PROCESS "SALES","LIBRARY.EN",SALES_ID$,STR(SALES_AMT)

In the NOMADS Panel Header Pre-Display logic, you would Execute the following assignments:

> SALES_ID$=ARG_1$;SALES_AMT=NUM(ARG_2$)

**_Query Example:_**

Queries can be invoked using code, or they can be associated with controls when the controls are being defined. They can be invoked when the user clicks a **?**  _( query_ _)_ button or presses **Shift - F2** while focus is on the control. To process a query using code:

> 0110 PROCESS "MY_QUERY","",X$

When MY_QUERY runs, the value of X$ is used to set the starting position in the file. When MY_QUERY is exited, NOMADS passes the return value to the calling program in X$.

For queries associated with controls, the current value of the control is passed to the query when a user clicks a **?**  _(query)_ button or presses **Shift - F2** to invoke the program processing the query and is used as the starting value. NOMADS uses the reserved variable QRY_VAL$ to pass the value of the control to the program and back.

See **[Invoking a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.md)**.

## Using the Jumpto Option

Unlike the **PROCESS** directive which has a limit of 20 optional arguments that may be passed to/from the NOMADS panel, the **Jumpto** option passes all variables to the new panel and its associated program(s).

**Jumpto** is one of the logic options available when defining events logic for a control. It can also be coded as follows:

> REPLACEMENT_SCRN$="panel name"   
>  REPLACEMENT_LIB$="library" (optional)   
>  PERFORM "*winproc;overlay_screen"   
>   
> **_\- or -_**  
>   
>  CMD_STR$="J"+"panel name"+","+"library"

## Application Control

One of the simplest means of launching an application is directly from the desktop. This can be done by creating shortcuts that run PxPlus along with the required panel. This is handled via the ***winstar** utility.

**_Example:_**

To run the panel MENU1 from the library MYLIB.EN, you would create a shortcut similar to the following:

> C:\PVX Plus Technologies\PxPlus\PXPLUS.EXE *winstar -arg MENU1 MYLIB.EN

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.

You can place your shortcut directly on the user's desktop or in a folder or folder structure to set up a menu system. This way, users can have custom menus and can copy the frequently used shortcuts directly to their task bars and/or desktops.

#### **Note:**  
When you run an application directly from a shortcut, it is recommended that you make the panels **Dialogue** and specify that the initial window be minimized.
