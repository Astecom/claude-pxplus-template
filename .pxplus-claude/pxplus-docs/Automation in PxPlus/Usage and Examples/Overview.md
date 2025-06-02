# Automation in PxPlus

**Usage and Examples** |  **__**  
---|---  
  
## Sub-Objects

In PxPlus, a sub-object can be defined as any object that is the return value of another object's property or method call. How is this important? Since a sub-object is _owned_ by the base object, it will be _destroyed_ when the base object is destroyed.

**_Example:_**

> 0010 ! Crystal COM example   
>  0020 DEF OBJECT APP,"CrystalRuntime.Application"   
>  0040 RPT=APP'OPENREPORT("d:\crw8\chart.rpt")   
>  0050 DB=RPT'DATABASE   
>  0060 TBLS=DB'TABLES   
>  0070 TABLE1=TBLS'ITEM(1)   
>  0080 TABLE2=TBLS'ITEM(2)   
>  0090 DELETE OBJECT APP

In the example above, RPT is a sub-object of APP, DB is a sub-object of RPT, TBLS is a sub-object of DB, and TABLE1 and TABLE2 are sub-objects of TBLS.

This ownership is best described as a tree list where:

> After line 80 executes, all sub-objects owned by APP will be destroyed. This is done to ensure that the reference counting of APP is brought down to 1 before it is destroyed. This is not a feature of COM, but a feature implemented by the DLL. In a VB application, if APP was freed, the actual COM object would exist in memory until all the other sub-objects were freed (because each sub-object increments the reference count of the parent). While this feature is ideal for most situations, it can cause problems if you delete a parent object and then try to perform actions on one of its sub-objects.

## Passing Optional Parameters

Many objects have methods where the parameters are defined as optional. This is an indication to the developer that the parameter can be excluded. But, how is this accomplished in PxPlus? 

Below is an example of an ADO Recordset Open method in VB as translated to PxPlus:

**_Example:_**

|  **VB** |  RS.OPEN "GL1_ACCOUNTS", CONN, , , 2  
---|---|---  
|  **PxPlus** |  ?RS'OPEN("GL1_Accounts", *CONN, *, *, 2)  
  
In PxPlus, the optional parameters are passed using "*". The one exception is that PxPlus will not allow "*" to be passed as the last parameter. If these parameters are not required for the method call, then they must be omitted.

**_Example:_**

> 0010 X=RS'OPEN("GL1_Accounts", *CONN, *, *, *) ! Syntax Error   
> 0020 ! The following line is the same as the line above   
>  0030 X=RS'OPEN("GL1_Accounts", *CONN)

The three optional parameters are omitted in line 30. Although syntactically different, line 30 is functionally the same as line 10.

## Reserved Word Conflicts - Aliasing

Occasionally, there are cases where an object's property or method is identical to a PxPlus reserved word. When this happens, PxPlus generates a syntax error on any attempt to use the object's property or method name.

**_Example:_**

If you queried a calendar control for a property called DAY 

> > ?X'DAY

an Error 20 is generated because DAY is a reserved word. The workaround for this is called ** _aliasing_**. Aliasing allows a developer to call a property or method by creating user-defined names.

The following could be done to correct the previous example:

> 0010 Z=X'PVXALIAS("DAY", "FOO")   
>  0020 ! FOO is now a reference to DAY   
> 0030 ?X'FOO

Aliasing may be used on any COM method or property. It is also useful for assigning more _meaningful_ names to object methods and properties.

## Method Invocation

Due to syntax restrictions, PxPlus does not allow object assignment to properties. The following example (given for illustration purposes) generates an Error #23: Missing/Invalid variable :

> 10 DEF OBJECT X, "*VARIANT"   
>  20 DEF OBJECT Y, "*VARIANT"   
>  30 X'VAL=*Y ! Error 23 occurs

To handle this situation, method calls are enhanced to accept "invoke hints". An invoke hint indicates to the DLL how a call should actually be invoked: as a _function_ , _property get_ , _property set ,_ or _property set reference_.

The following is a list of valid method invocation hints:

|  **.GET** |  _Get property_  
---|---|---  
|  **.PUT** |  _Set property_  
|  **.PUTREF** |  _Set property reference_  
  
These hints are added to the end of a method/property name so that the call reads as _object'method_**{.**_hint**}(** parameters_**)**. If you attempt to get or set array properties without using an "invoke hint", the DLL will attempt to resolve the calling type; however, it can only do this by trial and error (up to four separate attempts).

For speed reasons, as well as for clarity, the developer should always specify a hint when calling a property using the syntax of a method call.

In the previous example, line 30 should be changed to:

> 30 NULL=X'VAL.PUT(*Y) ! Assign object Y to X'VAL

**_Example:_**

The following is an example of a grid object that exposes a CELL property that is accessed using a row and column indicator:

|  10 DATA=GRID'CELL.GET(ROW, COL) |  ! Get the cell value  
---|---|---  
|  20 DATA= DATA+10 |  ! Add 10 to the value  
|  30 NULL=GRID'CELL.PUT(ROW, COL, DATA) |  ! Set the cell value  
  
##  Examples

**_Example 1 -_** Embedding IE5 or IE6. You must have Internet Explorer installed for this to work.

> 0010 DEF OBJECT handle, @(2,2,70,16)="Shell.Explorer"   
>  0020 errcode=handle'Navigate2("www.pvxplus.com")   
>  0030 input *   
>  0040 DELETE OBJECT handle

**_Example 2 -_** Dynamically creating an object from the OCX toolbox.

> 0010 PRINT 'CS'   
>  0020 WAIT 0   
>  0030 DEF OBJECT OCX,@(40,1,30,10),"*",ERR=0100   
>  0040 PROG$=OCX'PVXNAME$   
>  0050 ESCAPE   
>  0060 END   
>  0100 PRINT MSG(-1)

**_Example 3 -_** Creating a Microsoft Form Frame and adding a button to it. This requires the MS Forms 2.0 Object Library to be installed on the system.

> 0010 DEF OBJECT FRM, @(40, 2, 30, 12), "Forms.Frame.1"   
>  0020 FRM'PVXMODE=0   
>  0030 CTRLS=FRM'Controls   
>  0040 BTN1=CTRLS'ADD("Forms.CommandButton.1")   
>  0050 BTN1'Top=20   
>  0060 BTN1'Left=20   
>  0070 BTN1'Caption$="Hello World!"   
>  0080 input *   
>  0090 DELETE OBJECT FRM

**_Example 4 -_** Creating a Microsoft Word Document from a file reference. This requires MS Word to be installed on the system.

> 0010 GET_FILE_BOX READ X$,LWD,"Word Document","Word Document|*.doc,"   
>  0020 IF X$="" THEN END   
>  0030 DEF OBJECT WD,@(0,0,80,20),"[file]"+X$   
>  0040 INPUT *   
>  0050 DELETE OBJECT WD   
>  0060 END

**_Example 5 -_** Using ADO to display the tables in a Microsoft Access Database.

> 0010 GET_FILE_BOX READ X$, LWD,"Access Database"," Access Database |*.mdb,"   
>  0020 IF X$="" THEN END   
>  0030 DEF OBJECT CONN,"ADODB.Connection"   
>  0040 CONNSTR$="Provider=Microsoft.Jet.OLEDB.4.0;Data Source="+X$   
>  0050 X=CONN'OPEN(CONNSTR$)   
>  0060 DEF OBJECT VARDATA,"*vararray"   
>  0070 Z=VARDATA'CREATE(4) ! Create single dim array with 4 elements   
> 0080 ! By default, all elements are set to empty   
>  0090 Z=VARDATA'SETDATA(3,"Table") ! Set 4th element to string "Table"   
> 0100 ! Get the schema recordset  
>  0110 R=CONN'OPENSCHEMA(20,*VARDATA)   
>  0120 N$=""; FOR I=0 TO R'FIELDS'COUNT-1; N$=N$+R'FIELDS(I)'NAME$+" | "; NEXT I; PRINT N$   
>  0130 ! Get the first 20 table names, this will return an array   
>  0140 RA=R'GETROWS(20)   
>  0150 FOR I=0 TO RA'UBOUND(2)   
>  0160 TXT$=""   
>  0170 FOR II=0 TO RA'UBOUND(1)   
>  0180 TXT$=TXT$+RA'GETDATA$(II,I)+" | "   
>  0190 NEXT II   
>  0200 PRINT TXT$   
>  0210 NEXT I

**_Example 6 -_** Test of Microsoft Script Control (***VARARRAY** support). This demonstrates passing a ***VARARRAY** in a ***VARIANT** , as well as getting an object returned back "by reference".

> 0040 DEF OBJECT MSC,"MSScriptControl.ScriptControl"   
>  0050 MSC'LANGUAGE$="" ! Need to clear it in order to get it set.   
> Documented issue in MSDN   
>  0060 MSC'LANGUAGE$="VBScript"   
>  0070 MSC'ALLOWUI=-1   
>  0080 NL$=CHR(13)+CHR(10)   
>  0090 PGMTEXT$="Sub GiveMeObject( byref obj)"+NL$   
>  0100 PGMTEXT$=PGMTEXT$+"set obj(1)=CreateObject("+QUO+"Excel.Application"+QUO+")"+NL$   
>  0105 PGMTEXT$=PGMTEXT$+"msgbox obj(1)"+NL$   
>  0110 PGMTEXT$=PGMTEXT$+"End Sub"+NL$   
>  0120 Z=MSC'ADDCODE(PGMTEXT$)   
>  0130 DEF OBJECT X,"*variant"   
>  0131 DEF OBJECT A,"*vararray"; Z=A'CREATE(2)   
>  0132 Z=X'VAL.PUT(*A)   
>  0140 Z=MSC'RUN("GiveMeObject",*X)   
>  0150 A=X'VAL ! Get the array back   
>  0155 PRINT A'TYPE$(1) ! Will print "O"   
>  0160 DELETE OBJECT X,ERR=*NEXT   
>  0170 DELETE OBJECT MSC

**_Example 7 -_** Using ***VARIANT** objects and assigning objects to properties.

> 0010 DEF OBJECT X,"*VARIANT"   
>  0020 DEF OBJECT Y,"*VARIANT"   
>  0030 X'VAL$="Hello World"   
>  0040 Y'VAL=100   
>  0050 Z=Y'VAL.PUT(*X)   
>  0060 PRINT Y'VAL$ ! Will print "Hello World"

#### **Note:**  
For an example that demonstrates how to build a COM wrapper, see **[COM Wrapper Example](COM%20Wrapper%20Example.md)**.
