#   
  
**Report Writer** |  **__**  
---|---  
  
The **Report Writer** is used for designing and generating reports. Both the application designer and the end user can create and manipulate the contents of a report. The Report Writer includes the following:

  * Data drag and drop
  * Column and row sizing
  * Computational values
  * Cell formatting (fonts, colors, borders, alignment)
  * Image support
  * Sorting rules
  * Control break groupings
  * Data filters
  * Run-time parameter settings



Input sources can be any native PxPlus file with an embedded data dictionary, a **[PxPlus View](../Views%20System/Introduction.md)**, or any other data source whose data can be accessed using a **[Custom Data Source Object](../Views%20System/Custom%20Data%20Source%20Objects/Overview.md)**. Output can be channelled to a printer or PDF file, the PxPlus Viewer, the Windows Clipboard, an HTML file, a tab-delimited text file, or a user-defined output object. In addition, the system designer can use the **[pvxreport](Object-Oriented%20Interface/pvxreport/Overview.md)** object interface to control virtually every aspect of generating a report, from changing report attributes on the fly to altering data values before they are displayed.

Single reports can be generated, or multiple individual reports can be generated based on data groupings. For example, if you want to produce invoices using the Report Writer, you may want each invoice in a separate PDF file. If you are printing customer statements, you may want each statement in an individual file for emailing. See **[Generating Multiple Reports](Designing%20a%20Report/Creating%20the%20Report%20Layout/Grouping%20the%20Data.htm#Mark2)**.

_(The ability to generate multiple reports by groups was added in PxPlus 2022.)_

## Report Designer

The **[Report Designer](Designing%20a%20Report/Report%20Designer/Overview.md)** is the primary user interface for designing the layout of the report. The data is defined in terms of data source selection, sorting rules, and selection criteria for filtering the data. Report layouts are saved as PxPlus report definition files, which are used to generate the reports.

The **[Report Wizard](Report%20Wizard/Introduction.md)** provides a simple way to create a new report definition by guiding you through a series of eight interactive steps. When you exit the wizard, the definition is loaded into the Report Designer where you can customize it and make final adjustments before saving it.

## Generating a Report

A report can be generated from within the Designer interface itself, or via a special PxPlus program that can be invoked as a lead program, or called from another program. The **[RunReport( )](Object-Oriented%20Interface/pvxreport/Overview.htm#runrpt)** method of the **pvxreport** object interface can also be used to generate a report.

See **[Generating a Report](Generating%20a%20Report/Introduction.md)**.

## Multilingual Capability

All text messages used in the Designer interface and run-time displays are derived from the ***msglib.xx** message library so there is full multilingual capability.

## System Requirements

All the Report Writer features described in this documentation require version 8.20 or higher. The Report Designer also uses the **[NOMADS](../NOMADS%20Graphical%20Application/Introduction.md)** graphical user interface and is not suitable for character-based systems. Contact your PxPlus reseller or visit the PxPlus website at **[www.pvxplus.com](http://www.pvxplus.com/)** for product information.

## See Also

**[Designing a Report](Designing%20a%20Report/Introduction.md)**
