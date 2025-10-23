# Object-Oriented PxPlus  
  
**Putting It All Together** |  **__**  
---|---  
  
The example below describes the creation and implementation of three objects in PxPlus **_(Company, Customer, Supplier)_** to illustrate OOP syntax (see **[PxPlus OOP Interface](../PxPlus%20OOP%20Interface/Overview.md)**).

##  Company Class

The contents of the _company.pvc_ class definition file is as follows:

> 0010 DEF CLASS "Company"   
>  0020 PROPERTY Name$,Address$,City$,PhoneNumber$,FaxNumber$   
>  0030 FUNCTION Add()Add   
>  0040 FUNCTION Delete()Delete   
>  0050 FUNCTION Fax()Fax   
>  0060 FUNCTION ShowSpecial()";ShowSpecial"   
>  0070 END DEF   
>  0100 ! ^100   
>  0110 On_Create:; GOSUB Where_are_we; RETURN 1   
>  0120 On_Delete:; GOSUB Where_are_we; RETURN 1   
>  0200 ! ^100   
>  0210 Add:; GOSUB Where_are_we; RETURN 1   
>  0220 Delete:; GOSUB Where_are_we; RETURN 1   
>  0230 Edit:; GOSUB Where_are_we; RETURN 1   
>  0240 Find:; GOSUB Where_are_we; RETURN 1   
>  0250 Fax:; GOSUB Where_are_we; RETURN 1   
>  0300 ! ^100   
>  0310 ShowSpecial:   
>  0320 X$="Special Variables that exist in every Object:"+SEP   
>  0330 X$+=$09$+"_OBJ = "+STR(_OBJ)+SEP+$09$   
>  0340 X$+="_CLASS$ = "+_CLASS$+SEP+$09$   
>  0350 X$+="_REFCNT = "+STR(_REFCNT)+SEP   
>  0360 MSGBOX X$,"In the Company "+FNLabelName$+" logic"   
>  0370 RETURN 1   
>  0400 ! ^100   
>  0410 Where_are_we:   
>  0420 MSGBOX "In the Company "+FNLabelName$+" logic","FYI"   
>  0430 RETURN   
> 8000 ! 8000   
>  8010 def fnLabelName$=mid(pgm(-3),pos(";"=pgm(-3)+";")+1)

The definition of this class starts with the **[DEF CLASS](../../../directives/def_class.md)** directive on statement 0010 and concludes with the **[END DEF](../../../directives/end_def.md)** directive on statement 0070. All of the fields (**Properties**) of the object are declared by the **[PROPERTY](../../../directives/property.md)** directive on statement 0020. The**Methods** available are defined using the **[FUNCTION](../../../directives/function.md)** directive on statements 0030 through 0060.

Creating a reference to or _instantiating_ the class in an application is accomplished using the **[NEW( )](../../../functions/new.md)** function; i.e. Comp=NEW("Company"). The numeric variable Comp contains a reference to the object known as an _Object Identifier_. All interaction with the object takes place using this object identifier.

Creating a new object automatically executes the logic that follows the statement label called On_Create in the program associated with the object. This label is optional and does not generate an error if it does not exist.

Determining what properties and methods are available for a given object is accomplished using the _apostrophe operator_ (**'**_tick_) followed by an*****_asterisk_. See **[Apostrophe Operator](../../../appendix/apostrophe_operator.md)**.

**_Example 1:_**

> print Comp'* ! Show all Properties & Methods   
>  ! Produces the following results:   
>  FaxNumber$,PhoneNumber$,City$,Address$,Name$,ShowSpecial(),Fax(), Delete(),Add(),

The properties are listed as simple string or numeric variable names while the available methods end with a pair of parentheses "( )".

Methods are called by specifying the object identifier and the apostrophe operator, followed by the method name. As methods are designed to return a status value, they must appear on the right side of a**LET** assignment or be used with a directive such as a**PRINT**.

**_Example 2:_**

> print Comp'ShowSpecial()   
>  ! Displays the following status value   
>  1

This produces a message box that lists all of the special variables that are available while executing code on behalf of an object; i.e. _Obj, _Class$ and _Refcnt.

After acknowledging the message box, a value of 1 (_one_) appears on the next line. This value represents the status returned by the method when it executes the RETURN 1 on statement 0370. A non-zero status value usually indicates that a method is successful, while a value of zero signifies that it is not (although this is at the discretion of the programmer).

Objects must be dropped or deleted when the application is finished with them. This is accomplished using**DROP OBJECT** or**REF( )** techniques:

> **DROP OBJECT** _obj_id_  
> **VARIABLE = REF(DROP** _obj_id_**)**

The following example removes the**Company** object just created:

> Drop Object Comp

Removing an object results in the On_Delete statement label being executed (if it exists). In the**Company** object example, a message box will appear that indicates "In the Company On_Delete logic".

##  Customer Class

The contents of the _customer.pvc_ class definition file is as follows:

> 0010 DEF CLASS "Customer"   
>  0020 LIKE "Company"   
>  0030 PROPERTY Limit,LastInvDate$   
>  0040 FUNCTION Invoice()";Invoice"   
>  0050 FUNCTION Edit()";Edit"   
>  0060 END DEF   
>  0100 ! ^100   
>  0110 On_Create:; GOSUB Where_are_we; RETURN 1   
>  0120 On_Delete:; GOSUB Where_are_we; RETURN 1   
>  0200 ! ^100   
>  0210 Invoice:; GOSUB Where_are_we; RETURN 1   
>  0220 Edit:; GOSUB Where_are_we; RETURN 1   
>  0300 ! ^100   
>  0310 Where_are_we:   
>  0320 MSGBOX "In the Customer "+FNLabelName$+" logic","FYI"   
>  0330 RETURN   
> 8000 ! 8000   
>  8010 def fnlabelname$=mid(pgm(-3),pos(";"=pgm(-3)+";")+1)

This class definition introduces the**Inheritance** aspect of object-oriented programming by its use of the **[LIKE](../../../directives/like.md)** directive on line 0020.**LIKE** is used to include all of the characteristics from a different object into the current object. Creating an object using this class definition and viewing all of its properties and methods best illustrates this.

**_Example 1:_**

> Cust=NEW("Customer")   
>  print Cust'*   
>  ! Produces the following results:   
>  LastInvDate$,Limit,Edit(),Invoice(),FaxNumber$,PhoneNumber$,City$,Address$,Name$,ShowSpecial(),Fax(),Delete(),Add(),

The **Customer** class explicitly defines the LastInvDate$ and Limit properties and the Invoice() and Edit () methods. The remaining properties (City$, Address$, etc.) and methods (ShowSpecial(), Fax(), etc.) are inherited from the**Company** class. This allows classes that are related by inheritance to share common properties and methods without having to duplicate any of the programming code normally required. Having the code in a single location helps to reduce the amount of time spent on maintenance and enhancements.

The Where_are_we sub-routine used in both the**Company** and**Customer** classes could be converted to a method, which would allow both to share the same code. To simplify the examples, this approach is not taken.

From an application standpoint, there is no difference between accessing a method defined in the base class or one that is inherited.

**_Example 2:_**

> Status = Cust'Fax()

Although the **Customer** class does not have a Fax() method, it is available since it is inherited from the **Company** class. Remember to delete the instance of **Customer** (Cust object) when finished:

> Drop Object Cust

##  Supplier Class

The contents of the _supplier.pvc_ class definition file is as follows:

> 0010 def class "Supplier"   
>  0020 like "Company"   
>  0030 property MinOrder,LeadTime   
>  0040 function Order()";Order"   
>  0050 function Edit()";Edit"   
>  0060 end def   
>  0100 ! ^100   
>  0110 On_Create:; gosub Where_are_we; return 1   
>  0120 On_Delete:; gosub Where_are_we; return 1   
>  0200 ! ^100   
>  0210 Order:; gosub Where_are_we; return 1   
>  0220 Edit:; gosub Where_are_we; return 1   
>  0300 ! ^100   
>  0310 Where_are_we:   
>  0320 msgbox "In the Supplier "+fnLabelName$+" logic","FYI"   
>  0330 return   
> 8000 ! 8000   
>  8010 def fnLabelName$=mid(pgm(-3),pos(";"=pgm(-3)+";")+1)

The basic concepts illustrated with the**Customer** class also apply to**Supplier**.

## Additional Classes - Examples

In the following sections, a few changes were made to the **Customer** class mentioned above. Each of these samples will introduce some additional features of PxPlus OOP syntax: **[Cust2](Overview.htm#cust2)**, **[Cust3](Overview.htm#cust3)**, **[Cust4](Overview.htm#cust4)**, **[Cust5](Overview.htm#cust5)** and **[Cust6](Overview.htm#cust6)**.

A simple data file called _cstfile_ is used in these classes. The following tables outline the required information to create this file.

**Field Definitions**

**Field Name** |  **Description** |  **Type** |  **Len** |  **Delimited?**  
---|---|---|---|---  
_Cust_No_ _$_ |  Customer ID |  String |  6 |  Yes  
_Name$_ |  Customer Name |  String |  30 |  Yes  
_Addr_ _$_ |  Address |  String |  30 |  Yes  
_City$_ |  City |  String |  30 |  Yes  
_Salesrep_ _$_ |  Sales Rep |  String |  3 |  Yes  
_Amt_Owing_ |  Amount Owing |  Numeric |  10.2 |  Yes  
  
**Key Definitions**

**Key #** |  **Description** |  **Fields**  
---|---|---  
0 |  Primary Key |  Cust_No$  
1 |  Sort by Name |  Cust_Name$ + Cust_No$  
2 |  Sort by Sales Rep |  Salesrep$ + Cust_No$  
  
For the final two sample objects, a NOMADS _File Maintenance_ panel for the Customer file (Cstupd) is assumed.

**Cust2 Class**

The contents of the cust2.pvc class definition file illustrate the ability to associate program logic with a property when an attempt is made to alter its contents.

> 00010 DEF CLASS "Cust2"   
>  00020 PROPERTY Cust_No$ SET Change_Cust  
>  00030 PROPERTY Name$,Addr$,City$,Salesrep$   
>  00040 PROPERTY Amt_Owing SET ERR   
>  00050 FUNCTION Find(X$)Get_Customer   
>  00060 FUNCTION Next()Read_Next   
>  00070 FUNCTION Update()Update_Customer   
>  00080 END DEF   
>  00100 ! !^100   
>  00110 On_Create:   
>  00120 IF %Customer_File=0 \   
>  THEN OPEN (GFN,IOL=*)"cstfile";   
>  %Customer_File=LFO   
>  00130 %Customer_Object++   
>  00140 RETURN   
>  00200 ! !^100   
>  00210 Get_Customer: \   
>  ENTER C$   
>  00220 READ (%Customer_File,KEY=C$) ! Loads all the variables   
>  00230 RETURN 1   
>  00300 ! !^100   
>  00310 Change_Cust: \   
>  ENTER C$   
>  00320 READ DATA FROM "" TO IOL=IOL(%Customer_File)   
>  00330 Cust_No$=C$   
>  00340 READ (%Customer_File,KEY=C$,DOM=*END)   
>  00350 RETURN   
>  00400 ! !^100   
>  00410 Read_Next:   
>  00420 READ (%Customer_File,END=*NEXT);   
>  RETURN 1   
>  00430 RETURN 0   
>  00500 ! !^100   
>  00510 Update_Customer:   
>  00520 WRITE (%Customer_File)   
>  00530 RETURN 1   
>  00600 ! !^100   
>  00610 On_Delete:   
>  00620 IF --%Customer_Object<>0 \   
>  THEN RETURN   
>  00630 CLOSE (%Customer_File);   
>  %Customer_File=0   
>  00640 RETURN 

A**PROPERTY** definition can include an optional keyword**SET** , followed by either a line label or the keyword**ERR**. In the case of a line label, the program logic starting at that label is executed when an attempt is made to alter the contents of the property. The keyword**ERR** is used to prevent the contents of a property from being changed, and an error is returned to the program attempting to do so. By default, an Error #88: Invalid/unknown property name is returned. However, this can be overridden as shown in a subsequent sample class.

These options are used on the following property declarations:

> 0020 property Cust_No$ set Change_Cust  
>  0040 property Amt_Owing set err

To illustrate use of this class, create a new instance of **Cust2:**

> Cust2=NEW("Cust2")

Auto-execute the Change_Cust method by setting the Cust_No$ variable. Use SETTRACE/ENDTRACE to show the code executing:

> SETTRACE   
>  Cust2'Cust_No$="000011"   
>  0310 Change_Cust: ENTER C$   
>  0320 READ DATA FROM "" TO IOL=IOL(%Customer_File)   
>  0330 LET Cust_No$=C$   
>  0340 READ (%Customer_File,KEY=C$,DOM=*END)   
>  0350 RETURN   
>  ENDTRACE

If you try to change the Amt_Owing property, this results in an Error #88 due to the**SET ERR** clause on the property definition:

> Cust2'Amt_Owing=100   
>  Error #88: Invalid/unknown property name

Drop the object when finished:

> DROP OBJECT Cust2

#### **Note:**  
One key issue regarding**Cust2** is the use of _global_ variables, which results in a violation of the principle of _Encapsulation_. PxPlus itself has no mechanism to enforce OOP "rules". **Cust3** below shows a way to avoid this problem.

**Cust3 Class**

This class illustrates a better approach for handling _Encapsulation_ \- by replacing the _global_ variables with _local_ variables. It also introduces the ability to associate program logic when reading the contents of a property. The contents of the _cust3.pvc_ class definition file appear as follows:

> 00010 DEF CLASS "Cust3"   
>  00020 LOCAL Customer_File,Customer_Object   
>  00030 PROPERTY Cust_No$ SET Change_Cust  
>  00040 PROPERTY Name$,Addr$,City$,Salesrep$   
>  00050 PROPERTY Amt_Owing GET ";CheckSecurity" SET ERR   
>  00060 FUNCTION Find(X$)Get_Customer   
>  00070 FUNCTION Next()Read_Next   
>  00080 FUNCTION Update()Update_Customer   
>  00090 END DEF   
>  00100 !   
> 00200 ! ^100   
>  00210 On_Create:   
>  00220 IF Customer_File=0 \   
>  THEN OPEN (GFN,IOL=*)"cstfile";   
> Customer_File=LFO   
>  00230 Customer_Object++   
>  00240 RETURN   
>  00300 ! ^100   
>  00310 Get_Customer: \   
>  ENTER C$   
>  00320 READ (Customer_File,KEY=C$) ! Loads all the variables   
>  00330 RETURN 1   
> 00500 ! ^100   
>  00510 Change_Cust: \   
>  ENTER C$   
>  00520 READ DATA FROM "" TO IOL=IOL(Customer_File)   
>  00530 Cust_No$=C$   
>  00540 READ (Customer_File,KEY=C$,DOM=*END)   
>  00550 RETURN   
>  00600 ! ^100   
>  00610 Read_Next:   
>  00620 READ (Customer_File,END=*NEXT);   
>  RETURN 1   
>  00630 RETURN 0   
>  00700 ! ^100   
>  00710 Update_Customer:   
>  00720 WRITE (Customer_File)   
>  00730 RETURN 1   
> 00800 ! ^100   
>  00810 CheckSecurity:   
>  00820 IF %Security_OK \   
>  THEN RETURN Amt_Owing \   
>  ELSE EXIT 52   
> 00900 ! ^100   
>  00910 On_Delete:   
>  00920 IF --Customer_Object<>0 \   
>  THEN RETURN   
>  00930 CLOSE (Customer_File);   
> Customer_File=0   
>  00940 RETURN

**Cust3** replaces the _global_ variables %Customer_File and %Customer_Object with properties that are _local_ to the object. This is accomplished with the use of the **[LOCAL](../../../directives/local.md)** directive:

> 0020 LOCAL Customer_File,Customer_Object

Properties declared**LOCAL** are available when executing logic on behalf of an object, yet they are invisible to the outside world.

While**Cust2** demonstrated the ability to intercept any attempt made to change a value,**Cust3** introduces the syntax required to intercept any attempts made to read a property. This is accomplished by adding the keyword**GET** to the**PROPERTY** definition:

> 0050 property Amt_Owing get ";CheckSecurity" set err

The CheckSecurity() method in**Cust3** is designed to return the value of the Amt_Owing property if a global variable, %Security_OK is set to a non-zero value. Otherwise, it returns an Error #52: Program is password protected.

To illustrate use of this class, create a new instance of**Cust3** :

> Cust3=NEW("Cust3")

Get the next customer on file with the Next() method:

> x=Cust3'Next()

Disable the security override flag:

> %Security_OK=0

An attempt made to query the Amt_Owing property will result in an Error #52 due to the EXIT 52 on statement 0820:

> PRINT Cust3'Amt_Owing   
>  Error #52: Program is password protected

Enable the security override flag:

> %Security_OK=1

Display the Amt_Owing property after enabling**SETTRACE** and**ENDTRACE** to show the code executing:

> SETTRACE   
>  PRINT Cust3'Amt_Owing   
>  0810 CheckSecurity:   
>  0820 IF %Security_OK THEN RETURN Amt_Owing ELSE EXIT 52   
>  0   
>  ENDTRACE

Drop the object when finished:

> DROP OBJECT Cust3

**Cust4 Class**

This class introduces the concept of _Method Overloading,_ which is the ability to reference a method with a varying number and/or type of parameters. This technique simplifies the external interface to the object by having a single method name. One example of this would be the ability to find a customer using either a string or numeric value. The contents of the cust4.pvc class definition file appear as follows:

> 00010 DEF CLASS "Cust4"   
>  00020 LOCAL Customer_File,Customer_Object   
>  00030 PROPERTY Cust_No$ SET Change_Cust  
>  00040 PROPERTY Name$,Addr$,City$,Salesrep$   
>  00050 PROPERTY Amt_Owing GET ";CheckSecurity" SET ERR   
>  00060 FUNCTION Find(X$)Get_Customer   
>  00070 FUNCTION Find(X)Get_Customer_Numeric   
>  00080 FUNCTION Next()Read_Next   
>  00090 FUNCTION Update()Update_Customer  
>  00100 END DEF   
>  00200 ! ^100   
>  00210 On_Create:   
>  00220 IF Customer_File=0 \   
>  THEN OPEN (GFN,IOL=*)"cstfile";   
> Customer_File=LFO   
>  00230 Customer_Object++   
>  00240 RETURN   
>  00300 ! ^100   
>  00310 Get_Customer: \   
>  ENTER C$   
>  00320 READ (Customer_File,KEY=C$) ! Loads all the variables   
>  00330 RETURN 1   
> 00400 ! ^100   
>  00410 Get_Customer_Numeric: \   
>  ENTER C   
>  00420 C$=STR(C:"000000",ERR=*NEXT)   
>  00430 C$=PAD(UCS(C$),6)   
>  00440 READ (Customer_File,KEY=C$) ! Loads all the variables   
>  00450 RETURN 1   
> 00500 ! ^100   
>  00510 Change_Cust: \   
>  ENTER C$   
>  00520 READ DATA FROM "" TO IOL=IOL(Customer_File)   
>  00530 Cust_No$=C$   
>  00540 READ (Customer_File,KEY=C$,DOM=*END)   
>  00550 RETURN   
>  00600 ! ^100   
>  00610 Read_Next:   
>  00620 READ (Customer_File,END=*NEXT);   
>  RETURN 1   
>  00630 RETURN 0   
>  00700 ! ^100   
>  00710 Update_Customer:   
>  00720 WRITE (Customer_File)   
>  00730 RETURN 1   
> 00800 ! ^100   
>  00810 CheckSecurity:   
>  00820 IF %Security_OK \   
>  THEN RETURN 1 \   
>  ELSE EXIT 52   
> 00900 ! ^100   
>  00910 On_Delete:   
>  00920 IF --Customer_Object<>0 \   
>  THEN RETURN   
>  00930 CLOSE (Customer_File);   
> Customer_File=0   
>  00940 RETURN

Notice that**FUNCTION** statements for the Find( ) method appear twice:

> 0060 FUNCTION Find(X$)Get_Customer   
>  0070 FUNCTION Find(X)Get_Customer_Numeric 

The significant difference between these two definitions is the type of parameter specified in the parentheses. The first accepts a _string_ value, while the second requires a _numeric_ entry.

Multiple definitions of the same method can be specified, provided each has a different parameter list. Knowing which method definition to use is determined by matching the parameters based on their type, either _string_ or _numeric_ , and the number of parameters specified.

To illustrate use of this class, create a new instance of**Cust4** :

> Cust4=NEW("Cust4")

Locate the first customer using a string argument:

> x=Cust4'Find("000011")   
>  PRINT Cust4'Cust_No$," - ",Cust4'Name$   
>  000011 - Flagship Importers

Locate the second customer using a numeric argument:

> x=Cust4'Find(27)   
>  PRINT Cust4'Cust_No$," - ",Cust4'Name$   
>  000027 - Yorktown Wood Products

Drop the object when finished:

> DROP OBJECT Cust4

**Panel Class**

This class will be used with the**Cust5** example. It assumes a NOMADS _File Maintenance_ panel called Cstupd has been created for the Customer file. The contents of the panel.pvc class definition file appear as follows:

> 00010 ! Panel Definition   
>  00020 DEF CLASS "Panel"   
>  00030 LOCAL Panel_Name$,Panel_Library$   
>  00040 FUNCTION Edit()Do_Panel   
>  00050 END DEF   
>  00060 Do_Panel:   
>  00070 IF NUL(Panel_Name$) \   
>  THEN Panel_Name$=_OBJ'_CLASS$   
>  00080 IF NUL(Panel_Library$) \   
>  THEN Panel_Library$="PxPlus.en"   
>  00090 Sv_prc=PRC;   
>  RESET ;   
>  PRECISION Sv_prc   
>  00100 Scrn_ID$=Panel_Name$,Scrn_Lib$=Panel_Library$   
>  00110 PERFORM "*winproc;Post_Enter"   
>  00120 RETURN 1 

**File Class**

This class will be used with the**Cust5** example. The contents of the file.pvc class definition file appear as follows:

> 00010 ! "File" class definition   
>  00020 DEF CLASS "File"   
>  00030 LOCAL FileNo   
>  00040 FUNCTION Open(FILENAME$)Open_File   
>  00050 FUNCTION Close()Close_File   
>  00060 FUNCTION Find(K$)Read_Via_Key   
>  00070 FUNCTION Find(K$,KeyNo)Read_Via_Alt_Key  
>  00080 FUNCTION Find(K$,KeyNo$)Read_Via_Alt_Key2   
>  00090 FUNCTION Find(I)Read_Via_Ind   
>  00100 FUNCTION Next()Read_Next   
>  00110 FUNCTION Next(KeyNo)Read_Next_Alt_Key  
>  00120 FUNCTION Next(KeyNo$)Read_Next_Alt_Key2   
>  00130 FUNCTION Update()Write_Record   
>  00140 FUNCTION Update(K)Write_Record_With_Key   
>  00150 FUNCTION Insert()Insert_Record   
>  00160 FUNCTION Insert(K$)Insert_Record_With_Key   
>  00170 FUNCTION Valid()=1 ! Always true unless overridden   
>  00180 END DEF   
> 00200 ! ^100 Open   
>  00210 Open_File:   
>  00220 ENTER F$   
>  00230 IF FileNo<>0 \   
>  THEN EXIT 13   
>  00240 X=HFN;   
>  OPEN (X,IOL=*)F$   
>  00250 FileNo=X;   
>  RETURN 1   
>  00300 ! ^100 Close   
>  00310 Close_File:   
>  00320 IF FileNo=0 \   
>  THEN EXIT 13   
>  00330 CLOSE (FileNo);   
> FileNo=0   
>  00340 RETURN 1   
> 00400 ! ^100 Read via Index   
>  00410 Read_Via_Ind:   
>  00420 ENTER I   
>  00430 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  00440 READ (FileNo,IND=I,DOM=*NEXT,END=*NEXT);   
>  RETURN 1   
>  00450 RETURN 0   
>  00500 ! ^100 Read via primary key   
>  00510 Read_Via_Key:   
>  00520 ENTER K$   
>  00530 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  00540 READ (FileNo,KEY=K$,KNO=0,DOM=*NEXT);   
>  RETURN 1   
>  00550 RETURN 0   
>  00600 ! ^100 Read via an alternate key   
>  00610 Read_Via_Alt_Key:   
>  00620 ENTER K$,KeyNo   
>  00630 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  00640 READ (FileNo,KEY=K$,KNO=KeyNo,DOM=*NEXT);   
>  RETURN 1   
>  00650 RETURN 0   
>  00700 ! ^100 Read via an alternate key   
>  00710 Read_Via_Alt_Key2:   
>  00720 ENTER K$,KeyNo$   
>  00730 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  00740 READ (FileNo,KEY=K$,KNO=KeyNo$,DOM=*NEXT);   
>  RETURN 1   
>  00750 RETURN 0   
>  00800 ! ^100 Read Next on primary key   
>  00810 Read_Next:   
>  00820 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  00830 READ (FileNo,KNO=0,END=*NEXT);   
>  RETURN 1   
>  00840 RETURN 0   
>  00900 ! ^100 Read Next via an alternate key   
>  00910 Read_Next_Alt_Key:   
>  00920 ENTER KeyNo   
>  00930 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  00940 READ (FileNo,KNO=KeyNo,END=*NEXT);   
>  RETURN 1   
>  00950 RETURN 0   
>  01000 ! ^100 Read Next via an alternate key   
>  01010 Read_Next_Alt_Key2:   
>  01020 ENTER KeyNo$   
>  01030 READ DATA FROM "" TO IOL=IOL(FileNo)   
>  01040 READ (FileNo,KNO=KeyNo$,END=*NEXT);   
>  RETURN 1   
>  01050 RETURN 0   
>  01100 ! ^100 - Update   
>  01110 Write_Record:   
>  01120 IF NOT(_OBJ'Valid()) \   
>  THEN EXIT 17   
>  01130 WRITE (FileNo);   
>  RETURN 1   
>  01140 !   
>  01150 Write_Record_With_Key:   
>  01160 ENTER K$   
>  01170 IF NOT(_OBJ'Valid()) \   
>  THEN EXIT 17   
>  01180 WRITE (FileNo,KEY=K$);   
>  RETURN 1   
>  01200 ! ^100 - Insert record   
>  01210 Insert_Record:   
>  01220 IF NOT(_OBJ'Valid()) \   
>  THEN EXIT 17   
>  01230 WRITE (FileNo,DOM=*NEXT);   
>  RETURN 1   
>  01240 RETURN 0   
>  01250 !   
>  01260 Insert_Record_With_Key:   
>  01270 ENTER K$   
>  01280 IF NOT(_OBJ'Valid()) \   
>  THEN EXIT 17   
>  01290 WRITE (FileNo,KEY=K$,DOM=*NEXT);   
>  RETURN 1   
>  01300 RETURN 0

**Cust5 Class**

This class illustrates the ability to inherit the characteristics of additional classes. The contents of the cust5.pvc class definition file appear as follows:

> 00010 DEF CLASS "Cust5"   
>  00020 LIKE "File","Panel"   
>  00030 PROPERTY Cust_No$ WRITE Change_Cust  
>  00040 PROPERTY Name$,Addr$,City$,Salesrep$,Amt_Owing   
>  00050 END DEF   
>  00060 !   
>  00070 On_Create:   
>  00080 Panel_Library$="cstfile.en",Panel_Name$="cstupd"   
>  00090 RETURN _Obj'Open("cstfile")   
>  00100 !   
>  00110 On_Delete:   
>  00120 RETURN _Obj'Close()   
>  00130 !   
>  00140 Change_Cust: \   
>  ENTER C$   
>  00150 IF NOT(_Obj'Find(C$)) \   
>  THEN Cust_No$=C$   
>  00160 RETURN 1

While the definition is relatively small, this class is more powerful than it looks due to the inclusion of**File** and**Panel** classes provided earlier. Referencing methods and properties from inherited classes is accomplished by prefixing the method name with **_Obj** , as illustrated in the following statements:

> 0090 RETURN _Obj'Open("cstfile")   
>  0120 RETURN _Obj'Close()   
>  0150 IF NOT(_Obj'Find(C$)) THEN Cust_No$=C$

In each case, prefixing the method name with**_Obj** (in place of the object identifier) indicates that the method exists somewhere in the current class. Knowing its exact location is not necessary. See **[Using Methods and Properties](../PxPlus%20OOP%20Interface/Overview.htm#Mark1)**. The example below uses the**Edit()** method from the**Panel** object to process a NOMADS panel.

To illustrate use of this class, create a new instance of**Cust5** :

> Cust5=NEW("Cust5")

Display the available properties and methods:

> PRINT Cust5'*   
>  Addr$,Amt_Owing,City$,Close(),Cust_No$,Edit(),Find(),Insert(),Name$,Next(),Open(),Salesrep$,Update(),Valid(),

Invoke a NOMADS panel:

> x=Cust5'Edit()

Drop the object when finished:

> Drop Object Cust5

**Cust6 Class**

This class demonstrates the _Polymorphism_ aspect of object orientation. It also introduces the concept of _Method Overriding,_ which is the ability for a child class to override methods (same name and argument list) with different functionality. The contents of the cust6.pvc class definition file appear as follows:

> 00010 DEF CLASS "Cust6"   
>  00020 LIKE "File","Panel"   
>  00030 PROPERTY Cust_No$ WRITE Change_Cust  
>  00040 PROPERTY Name$,Addr$,City$,Salesrep$,Amt_Owing   
>  00050 FUNCTION Find(X$)Do_MyFind   
>  00060 END DEF   
>  00070 !   
>  00080 On_Create:   
>  00090 Panel_Library$="cstfile.en",Panel_Name$="cstupd"   
>  00100 RETURN _Obj'Open("cstfile")   
>  00110 !   
>  00120 On_Delete:   
>  00130 RETURN _Obj'Close()   
>  00140 !   
>  00150 Change_Cust: \   
>  ENTER C$   
>  00160 IF NOT(_Obj'Find(C$)) \   
>  THEN Cust_No$=C$   
>  00170 RETURN 1   
>  00180 !   
>  00190 Do_MyFind:   
>  00200 ENTER K$   
>  00210 K$=STR(NUM(K$,ERR=*NEXT):"000000")   
>  00220 K$=PAD(K$,6)   
>  00230 RETURN _Obj'Find(FROM "File",K$)

The**Find( )** method declared in**Cust6** is designed to augment the functionality of the**Find( )** method from the**File** class. The**Find( )** method in this class intercepts the value, reformats it to match the key value for the data file, and then passes the resulting value to the**Find( )** method in the**File** class.

To illustrate use of this class, create a new instance of**Cust6** :

> Cust6=NEW("Cust6")

Pass what appears to be an invalid Customer ID to the Find( ) method:

> x=Cust6'Find("67")   
>  PRINT "Customer: ",Cust6'Cust_No$," - ",Cust6'Name$   
>  Customer: 000011 - Flagship Importers

Drop the object when finished:

> Drop Object Cust6
