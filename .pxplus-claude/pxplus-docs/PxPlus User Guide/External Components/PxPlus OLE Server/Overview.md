# External Components

**PxPlus OLE Server** |  **__**  
---|---  
  
The PxPlus OLE Server (PxPlus.Script) delivers the _reverse functionality_ to that of **[PxPlus COM Support](../PxPlus%20COM%20Support/Overview.md)** \- it allows external applications to directly invoke and interact with PxPlus and PxPlus objects.

The purpose of this interface is to expose the PxPlus environment to virtually any _outside_ COM-compliant application. With the OLE Server running, it is possible to create a PxPlus object and then invoke it from other languages, such as VB, VBScript, Delphi, and C++. You can also use DCOM to invoke the PxPlus object remotely.

For general descriptions of Microsoft OLE and COM, see **[Concepts and Terminology](../Introduction.htm#terminology)**.

#### **Important Note****:**  
**_Prior to PxPlus 2021:_** 32-bit PxPlus supported only the Providex.Script name.  
  
**_As of PxPlus 2021:_** For compatibility purposes, 32-bit PxPlus still ships with _pvxcom.exe_ and _pvxscript.dll_ and supports the Providex.Script name. This is in addition to having _pxpcom.exe_ and _pxpscript.dll_ and supporting the PxPlus.Script name.  
  
It is not possible to register and use both the 32-bit and 64-bit _pxpcom.exe_ and _pxpscript.dll_ at the same time. Only one can be registered at a time.

## Registration of the OLE Server

Access to PxPlus.Script requires running _pxpcom.exe_ , which is included with the installation of PxPlus for Windows. Use of the interface may require a separately purchased activation key apart from your initial PxPlus for Windows activation. Further to this, _pxpcom.exe_ may need to be registered manually on your Windows OS (if registration did not occur with your installation of PxPlus).

#### **Note:**  
You will be required to run a Command prompt or Windows PowerShell as an administrator to allow the registry updates to take effect.

To add _pxpcom.exe_ to the Windows registry, enter the following from the Command line:

> _path_ \pxpcom.exe /regserver

**_Where:_**

> _path_ is the directory of the PxPlus version you are running.

This can be **_unregistered_** by entering the following from the Command line:

> _path_ \pxpcom.exe /unregserver

One way to verify that the executable _pxpcom.exe_ is registered correctly is by running the following VB script:

> Set pxp = CreateObject("PxPlus.Script")  
> pxp.Init ""   
> pxp.execute("v=tcb(29)")  
>  nm=pxp.Evaluate("v")  
> MsgBox "Version =" & nm  
>  set pxp=nothing

## Using PxPlus.Script

The interface is invoked in an external language via PxPlus.Script:

|  **VB** |  Set pxp = CreateObject("PxPlus.Script")  
---|---|---  
|  **Delphi** |  pxp:=CreateOleObject("PxPlus.Script")  
|  **Java** |  var oPxp = new ActiveXObject("PxPlus.Script"); // Java  
  
Six **_methods_** are available for use with PxPlus.Script:

**Init**(_path_) |  Called before accessing any other method in the script engine in order to set the working directory for the server and perform binding to the PxPlus **_dll_** layer. The _path_ should be set to the desired working directory or blank to indicate the current directory. (In most cases, the current directory will be the system directory.)  
---|---  
**Execute**(_stmt_) |  Invoked to execute any PxPlus Command statement.  
**Evaluate**(_expr_) |  Evaluates and returns the expression provided and returns its value as a variant. (It can be used as either a numeric or a string.)  
**Run**(_prog_) |  Runs the specified program. This method does not return until the program ends.  
**Reset( )** |  Closes all local files and clears variables (executes a**BEGIN**).  
**NewObject(**_name, params ..._**)** |  Creates a new object of the specified name and returns an object reference. See **[Additional Properties](Overview.htm#Mark1)**.  
  
Three **_properties_** are also associated with the interface:

|  **Instance** |  Returns a unique string to identify the server during its lifetime.  
---|---|---  
|  **State** |  Returns the state of the server: 0 _(zero)_ = Uninitialized; 1 = Initialized.  
|  **Parameter** |  Read/write property used to access the specified PxPlus parameter.  
  
**_Additional Properties_**

To create an object within the OLE Server, the method **NewObject** is used. It returns an object identifier to the PxPlus object that was created. Along with the PxPlus defined properties and methods, the OLE server adds the following properties:

|  **Instance** |  Returns a unique identifier of the PxPlus.Script object that was used to create the automation object. This is important because the automation object cannot be passed to another PxPlus.Script server.  
---|---|---  
|  **ScriptObject** |  Returns the parent PxPlus.Script object.  
|  **CmdHandle** |  Returns the PxPlus handle to which the automation object is tied.  
  
**_Naming Conventions_**

Be aware that COM is generally data-type insensitive; i.e. it does not support the**$** or **%** suffix. This can cause a problem when dealing with PxPlus via the OLE Server since, in PxPlus, you can have **Cust_no$** and **Cust_no** (as two unique data variables).

To avoid this issue, the OLE Server mandates that all property references indicate the property type in the first character of the property name:

**s** |  For string variables  
---|---  
**n** |  For numeric variables  
**i** |  For integer variables  
**o** |  For object variables **_(Required)_**  
  
**_Example:_**

> Cat$ becomes sCat  
>  Dog becomes nDog  
>  Pig% becomes iPig

These prefixes are **_only_** for use by programs using the OLE Server, **_not_** by the PxPlus application itself. This means that the property **Cust_no$** in PxPlus would be **sCust_no** when referenced by the OLE Server, and the property **Cust_no** in PxPlus would be **nCust_no** , etc.

#### **Important Note:**  
**_Do not_** use these prefixes in the property definition. Use of the**o** prefix allows the specification of properties and/or methods within PxPlus objects to be declared themselves as objects.

## PxPlus as Windows Script

Through the use of the OLE server, PxPlus itself can become a script language for any Windows system. PxPlus files saved with a **_.pvs_** suffix may be passed to the PxPlus script engine to be executed as a script in Windows applications.

**_Using PxpScript_**

The PxPlus-based script files are exposed through _pxpscript.dll_ , a specially built interface that utilizes IActiveScript and IActiveScriptParse for access to MS scripting (hosts such as IIS, WScript, MS Script Control, etc.). Code execution is passed to _pxpcom.exe_ , which sends commands to _pvxwin32.dll_. The whole process looks like the following:

> Windows Application --> PxpScript --> OLE Server --> PxPlus

The _pxpscript.dll_ must be installed in the same directory as _pxpcom.exe_ and _pvxwin32.dll_. As with _pxpcom.exe_ , the _pxpscript.dll_ may need to be registered manually on your Windows OS (if registration did not occur with your installation of PxPlus). Adding PxpScript to the registry ensures the creation of:

  * Default COM registry entries for the ActiveX library.
  * WScript.exe and CScript.exe associations in the registry. This allows you to create text-based scripts that can be saved with a **_.pvs_** extension and then be invoked automatically in WScript/CScript (the scripting engine uses the associations to determine which ActiveScript engine will be invoked).



**_Usage Notes_**

Script definitions vary slightly from regular PxPlus language syntax in that the text is basically passed to PxPlus as a series of execute commands. However, there is an exception: any code that starts with a statement label and ends with **END** will be considered a program and built as if it were typed in. After the **END** directive, you can then issue a **GOTO** _label;**RUN**_ to begin execution of the code. (The short cut is**#**_xxxxx_ where _xxxxx_ is the _label.)_

Script-based programs do not recognize line numbers in the same manner as PxPlus. When an error occurs in a script, the line number reported will reflect the (sequential) line number from the original script input file/document.

Host applications can usually expose what are referred to as "_global named items_ ". These items are COM objects that the host exposes to the script interface to allow the script to interact with the hosting application.

**_Example:_**

> WScript exposes wscript, wsh; IE exposes window; IIS exposes response, request, etc.

#### **Note:**  
It is the developer's responsibility to understand the syntax related to the environment for which he/she will be developing scripts. Named items are based on the context of the host; therefore, the same code may not be valid in all environments.

**_Sample Script_**

The following is a **_.pvs_** file that may be executed from Internet Explorer:

> 10 !preinput -1300;preinput 0;input *  
>  15 ! Uncomment line 10 to get the trace window  
>  20 objArgs = %WScript'Arguments  
>  30 MSGBOX str(%WScript'*)  
>  40 MSGBOX str(objArgs'Count)  
>  50 i=objArgs'Count-1  
>  60 WHILE (i >= 0)  
>  70 MSGBOX Str(i); MSGBOX objArgs'_$(i)  
>  75 i--  
>  80 WEND  
>  90 MSGBOX %WSH'*  
>  100 END  
>  #10 ! GOTO line 10 and RUN  
>  MSGBOX "Done"

This logic executes as follows:

> Add lines 10 to 100 to the engine.  
>  Execute a GOTO 10.  
>  Execute a RUN. The code will stop running at line 100 (and the script interface gets control back).  
>  Execute MSGBOX directly.
