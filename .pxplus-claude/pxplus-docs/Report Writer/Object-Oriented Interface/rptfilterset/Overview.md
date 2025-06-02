# Object-Oriented Interface

**rptfilterset** |  **__**  
---|---  
  
The **rptfilterset** object is a data member of the **[pvxreport](../pvxreport/Overview.md)**, **[rptline](../rptline/Overview.md)** and **[rptcell](../rptcell/Overview.md)** objects, delegated to store and manipulate a filter set definition. One object is created for each filter set. The **[pvxreport](../pvxreport/Overview.md)** **GetFilterSet(** **)** method can be used to retrieve the object handle for an **rptfilterset** object, which allows access to all the object's methods and properties. This object contains a group of **[rptfilter](../rptfilter/Overview.md)** objects that make up the individual filters belonging to the set.

## rptfilterset Properties

The following table lists the properties of the **rptfilterset** object:

**Property** |  **Description**  
---|---  
**Dynamic** |  Boolean value (0/1) indicating whether the filter set contains a **[Dynamic Filter](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#dynamic)**. _(The Dynamic property was added in PxPlus 2022.)_  
**FilterCount** |  Number of **[rptfilter](../rptfilter/Overview.md)** objects in the filter set.  
**Option$** |  Contains an "**A** " (Accept) or "**R** " (Reject).   
  
In the case of a data filter, this indicates whether to accept or reject a data record if all conditions in the filter set are true. In the case of detail lines and cell formats, this indicates whether or not to use a particular line or cell format if the conditions are true.  
  
## rptfilterset Methods

The following table lists the methods of the **rptfilterset** object:

**Method** |  **Description**  
---|---  
**AddFilter( )** |  Creates a new **[rptfilter](../rptfilter/Overview.md)** object using the next available sequence number. One object is created for each filter definition. The sequence number can be used as the index number to identify the object when using the **RemoveFilter( )** and **GetFilter( )** methods.  
  
**FilterCount** is incremented. Returns the object handle if successful, **0** if not.  
**ClearFilters( )** |  Removes all **[rptfilter](../rptfilter/Overview.md)** objects in the set and resets **FilterCount** to 0.  
**FilterCount( )** |  Returns the number of **[rptfilter](../rptfilter/Overview.md)** objects in the set.  
**GetCondition$(**_idx_**)** |  Returns a string containing the PxPlus expression associated with a filter.  
  
_idx_ _-_ Sequence number of the filter.  
  
Returns null if the sequence number is invalid.  
**GetFilter(**_idx_**)** |  Returns the handle for an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_idx_ \- Sequence number of the **rptfilter** object.  
  
This allows access to all **rptfilter** properties and methods. Returns **0** if not successful.  
**RemoveFilter(**_idx_**)** |  Removes an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_idx_ _-_ Sequence number of the object to be removed.  
  
If an **rptfilter** object is removed, the sequence number of the **rptfilter** objects with higher sequence numbers is adjusted down. **FilterCount** is decremented. Returns the object handle if successful, **0** if not.  
  
## Example

In this example, the sample program creates the filter set and adds the filters to the filter set:

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
