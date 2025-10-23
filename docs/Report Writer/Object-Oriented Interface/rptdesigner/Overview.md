# Object-Oriented Interface  
  
**rptdesigner** |  **__**  
---|---  
  
The **rptdesigner** object is a data member of the **[pvxreport](../pvxreport/Overview.md)** object interface, delegated to store and save Report Designer options.

## rptdesigner Properties

The following table lists the properties of the **rptdesigner** object:

**Property** |  **Description**  
---|---  
**AutoDisplayHTML** |  Boolean value (0/1). When **_On_** , the Report Designer will automatically display any reports generated in HTML format with the default browser. Default is **0**.  
**AutoDisplayPDF** |  Boolean value (0/1). When **_On_** , the Report Designer will automatically display any reports generated in PDF format with the default PDF reader. Default is **0**.  
**ColumnWidth** |  Default column width in inches or cm, depending on Metric setting. If set to **0** , the Designer default will be inch or 1 cm.  
**Font$** |  The default font to use for new reports. Default is Arial,-15.  
**Metric** |  Boolean value (0/1). When **_On_** , the ruler on the Designer display will use metric (centimeter) units. Default is inches.  
**NumericFormatMask$** |  The default numeric format mask to use for group functions. Default is "###,###,##0.00-".  
**RowHeight** |  Default row height in inches or cm, depending on Metric setting. If set to **0** , the Designer will use a calculated value based on the size of the default font set for the current report.  
**SuppressPostReportLogic** |  Set to 1 to suppress the execution of **[Post Report Logic](../../Designing%20a%20Report/Report%20Options/Overview.htm#post_rpt)** that has been defined for the report while testing via the _Preview_ or _Print_ buttons on the Report Designer tool bar. _(The SuppressPostReportLogic property was added in PxPlus 2022.)_  
**TestMode** |  Boolean value (0/1). When **_On_** , the Designer will generate a report in test mode. Test mode restricts the number of records processed when a report is generated. A processed record is one that is included in the report, i.e. it has not been rejected by the filtering process. Default is **0**.  
**TestRecords** |  The maximum number of records to be processed when a report is generated in test mode. If set to **0** (Default), the entire data source is processed.  
**SaveOption** |  Boolean value (0/1). When **_On_** , the above option values will be saved to the pvxreport.ini file. Default is **0**.  
  
## rptdesigner Methods

The following table lists the methods of the **rptdesigner** object:

**Method** |  **Description**  
---|---  
**AddLibrary(**_LibName_ _$_**[**_,Sep$_**])** |  Adds a library or a _Sep$_ -separated list of libraries specified in _LibName_ _$_. If _Sep$_ is not specified, then a comma is assumed. The maximum number of default libraries is 99. Returns **1** if successful; **0** if not.  
**ClearLibraries( )** |  Clears all default libraries. Returns **1**.  
**GetLibrary$(**_idx_**)** |  Returns the name of the library specified by the index _idx_.  
**GetLibraryList$([**_Sep$_**])** |  Returns a _Sep$_ -separated list of the default libraries. If _Sep$_ is not specified, a comma is used as the separator.  
**LibraryCount( )** |  Returns the number of default libraries.  
**LoadOptions( )** |  **_(Windows Only)_** Loads the option values from the client or local _pvxreport.ini_ file.  
**RemoveLibrary(**_LibName_ _$_**)** |  Removes the library specified in _LibName_ _$_ from the list of defaults. Indexes of subsequent libraries are adjusted.  
**SaveOptions( )** |  **_(Windows Only)_** Saves the option values in the client or local _pvxreport.ini_ file.
