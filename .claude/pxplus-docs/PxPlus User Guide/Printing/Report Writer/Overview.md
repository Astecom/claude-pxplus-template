# Printing

**Report Writer** |  **__**  
---|---  
  
The **[Report Writer](../../../Report%20Writer/Introduction.md)** is used for designing and generating formatted reports from PxPlus data. It allows developers and end users to construct professional reports with the ease and functionality of a spreadsheet application.

Built-in features include:

  * Data drag and drop
  * Column and row sizing
  * Computational values
  * Cell formatting (fonts, colors, borders, alignment)
  * Image support
  * Sorting rules
  * Data filters
  * Run-time parameter settings



Input sources can be any native PxPlus file with an embedded Data Dictionary, a PxPlus View, or any other source whose data can be accessed using a custom data source object. Output may be channeled to a variety of physical and logical **PRINT** Destinations or to a user-defined output object.

Reports are generated based on report definitions, which are produced and modified using the **Report Designer**. Users may prefer to start their new report definitions using the interactive **Report Wizard**. A **[pvxreport](../../../Report%20Writer/Object-Oriented%20Interface/pvxreport/Overview.md)** object interface provides developers with programmatic access to report definitions for changing data and formatting on the fly.

## Report Designer

The **[Report Designer](../../../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)** is used for designing the format and layout of a report. The data is defined in terms of data source selection, sorting rules, and selection criteria for filtering the data. Report layouts are saved as PxPlus report definition files, which can then be used to generate the report.

## Report Wizard

The **[Report Wizard](../../../Report%20Writer/Report%20Wizard/Introduction.md)** provides a quick and simple way to create a report that does not require any special formatting. The wizard guides you through a series of eight steps that result in the creation of a new report definition.
