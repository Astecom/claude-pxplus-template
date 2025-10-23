# Object-Oriented Interface  
  
**rptfilter** |  **__**  
---|---  
  
The **rptfilter** object is a data member of the **[pvxreport](../pvxreport/Overview.md)** object interface, delegated to store and manipulate a data filter definition. One object is created for each filter. The **[pvxreport](../pvxreport/Overview.md)** **GetFilter(** **)** method can be used to retrieve the object handle for an **rptfilter** object, which allows access to all the object's methods and properties.

## rptfilter Properties

The following table lists the properties of the **rptfilter** object:

**Property** |  **Description**  
---|---  
**CompareValue$** |  Value to be used for comparison in the condition test. A value can consist of a table element, parameter, calculated field, literal or formula. Examples of formulas are "LITERAL"+STRINGVAL$ or Balance*Tax. Some conditions use more than one comparison value. Indicate which **CompareValue$** is being accessed by setting the **[ValNo](Overview.htm#valno)** property to the index number of the desired **CompareValue$** property. Default is the first **CompareValue$** until the **ValNo** index is otherwise set.  
**ConditionCode** |  Code number (-1, 1-12) indicating the type of condition:  
  
**-1** \- Free form filter expression  
**0** \- None   
**1** \- Equal to   
**2** \- Not equal to   
**3** \- Less than   
**4** \- Greater than   
**5** \- Less than or equal to   
**6** \- Greater than or equal to   
**7** \- Between .. and .. inclusive   
**8** \- Between .. and .. exclusive   
**9** \- Any of .., .., .., etc.   
**10** \- None of .., .., etc.   
**11** \- Contains   
**12** \- Starts with _(Code number -1 was added in PxPlus 2022.)_  
**Filter** |  **_(Read Only)_** Contains a free-form PxPlus expression that can be evaluated to a 0/1 Boolean value. **_Example:_** InvoiceDate$>=StartDate$ AND InvoiceDate$<=EndDate$ _(The Filter property was added in PxPlus 2022.)_  
**IsCaseSensitive** |  Boolean value (0/1) indicating whether the condition test should be case sensitive or not.  
**MemFiles$** |  Contains a string of memory file channel numbers used to access the memory files set up to process the **[IsAnyOf( )](../pvxreport/Overview.htm#isanyof)** method of the ***rpt/pvxreport** class. Each channel number is five characters long (e.g. 00054), and its position within the **MemFiles$** string is based on the sequence number associated with the **IsAnyOf( )** method. _(The MemFiles$ property was added in PxPlus 2023.)_  
**ValNo** |  Index (1-8) to indicate which **[CompareValue$](Overview.htm#compval)** property is being accessed. Valid indices are based on the type of condition. Default is **1** until otherwise set.  
**Variable$** |  Name of the table element, parameter or calculated field to be used in the condition test. This must start with an alpha character, optionally followed by alphanumeric, **.** (_period_) or **_** (_underscore_) characters. Names of elements containing string values must be terminated by a **$** character. Set to null if invalid. If the name of a string element is assigned, the **IsCaseSensitive** property is set to **1**.  
  
## rptfilter Methods

The following table lists the methods of the **rptfilter** object:

**Method** |  **Description**  
---|---  
**GetCompareValue$(**_idx_**)** |  Returns the value of the **[CompareValue$](Overview.htm#compval)** property whose index is given. _idx_ _-_ Index of **CompareValue$** property. Assigned to **ValNo** property. Returns null if the index value is invalid.  
**GetCondition$( )** |  Returns the condition in the form of a PxPlus expression. **_Example:_** If the following properties are set  Variable=CompanyId$  
ConditionCode=1  
IsCaseSensitive=0  
ValNo=1   
CompareValue$=CompanyNumber$ then the return value would be: CompanyId$=CompanyNumber$ Returns null if the information in the **[rptfilter](Overview.md)** object is invalid.  
**SetAnyOfValues(**_Seq,Values$,Type$,Case_ _$_**)** |  Create the memory file for an **[IsAnyOf( )](../pvxreport/Overview.htm#isanyof)** method reference based of the _Values$_ , _Type$_ and _Case$_. The channel number for the memory file is added to the **[MemFiles$](Overview.htm#memfiles)** property string based on the sequence value. |  _Seq_ |  Sequence number to set up an **IsAnyOf( )** method. The first reference to an **IsAnyOf( )** method should have a sequence of 1, the second instance 2, etc.  
---|---  
_Values$_ |  String of **|**  _(pipe)_ separated values to be tested in the **IsAnyOf****( )** method.  
_Type$_ |  Type of value (**N** =Numeric or **S** =String) to be tested in the **IsAnyOf( )** method.  
_Case$_ |  Case flag for testing: **0** (Case insensitive) or **1** (Case sensitive).  
  
_(The SetAnyOfValues( ) method was added in PxPlus 2023.)_  
  
**SetCompareValue(**_idx,Val_ _$_**)** |  Assigns a value to the **[CompareValue$](Overview.htm#compval)** property whose index is given. |  _idx_ |  Index of **CompareValue$** property. Assigned to **[ValNo](Overview.htm#valno)** property.  
---|---  
_Val$_ |  Value to be assigned to specified **CompareValue$** property.  
  
Returns **1** if successful or **0** if the index value is invalid.  
  
**SetFilter( )** **SetFilter(**_Expression$_**)** |  Set the **[Filter](Overview.htm#filter)** property to a free-form filter consisting of a valid PxPlus expression that can be evaluated to a Boolean value (0/1). Sets **[ConditionCode](Overview.htm#condcode)** to -1. **_Example:_** InvoiceDate$>=StartDate$ AND InvoiceDate$<=EndDate$ If no expression is specified, the **Filter** is set to null and **ConditionCode** is set to **0**.  
  
## Example

This sample program creates the filter set and adds the filters to the filter set:

> ! invoicelist - Print a range of invoices  
>  !  
>  ! This program prints a list of invoices, with an optional invoice range.  
>  ! It is a called program that accepts a report definition as the first argument  
>  ! and optional start and end invoice values as the second and third arguments.  
>  !  
>  ! After loading the report, the program adds filters if the start and end  
>  ! values are supplied.  
>  !  
>  ! Lastly, it generates the report to the Viewer.  
>  !  
>  enter ReportName$,StartAt$,EndAt$,err=*next  
>  !  
>  rpt=new("*rpt/pvxreport")  
>  if Rpt'open(ReportName$)=0 \  
>  then goto WrapUp  
>  !  
>  ! Create the filter set  
>  if StartAt$+EndAt$<>"" \  
>  then Rpt'ClearFilters();  
>  fs=Rpt'AddFilterSet()  
>  ! Now add the filters to the filter set  
>  if StartAt$<>"" \  
>  then fltr=fs'AddFilter();  
>  fltr'Variable$="InvoiceNumber$";  
>  fltr'ConditionCode=6;  
>  fltr'IsCaseSensitive=0;  
>  fltr'SetCompareValue(1,quo+StartAt$+quo)  
>  if EndAt$<>"" \  
>  then fltr=fs'AddFilter();  
>  fltr'Variable$="InvoiceNumber$";  
>  fltr'ConditionCode=5;  
>  fltr'IsCaseSensitive=0;  
>  fltr'SetCompareValue(1,quo+EndAt$+$FF$+quo)  
>  !  
>  ! Now generate the report  
> Generate_Report:  
>  open (hfn,err=WrapUp,opt="Normal;"+Rpt'GetPageSetup$())"*viewer*";  
>  prt=lfo  
>  Rpt'OutputPrint(prt)  
>  Rpt'RunReport()  
>  close (prt)  
> WrapUp: \  
>  drop object Rpt  
>  end
