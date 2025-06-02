# Designing a Report

**Setting the Report Destination** |  **__**  
---|---  
  
The default destination for a report is the printer. To set an alternate default destination, select the _Output Destination_ option on the Report Designer _File_ menu.

A list of alternate destinations is displayed:

_Clipboard_ |  Sends tab-delimited output to the Windows Clipboard. Cell formatting (font, color, alignment, borders) is stripped. Output is considered as one page (with one page header and footer).  
---|---  
_Custom Output_ |  Sends output to a user-created output object. See **[Custom Output Object Interface](../../Report%20Writer%20User%20Interfaces/Custom%20Output%20Object%20Interface/Overview.md)**.  
_HTML document_ |  Output is an HTML file in tabular format. A style for each cell with data is created to make it easy for an HTML programmer to further customize the output. The generated HTML code is compliant with W3C standards for HTML 4.01 Transitional.  
_PDF document_ |  Sends the output to a PDF file.  
_Printer_ |  Sends the output to the printer. Optionally, if the _Use Internal PDF Driver_ option is set in the _System_ menu (or the PxPlus INI file has an **AutoEnablePDF=1** entry in the **[Config]** section), you can specify a file name with the _.pdf_ extension to output directly into a PDF file.  
_Tab delimited file_ |  Output to a tab-delimited file, one field per cell, no tabs allowed in the data. Cell formatting (font, color, alignment, borders) is stripped.  
_Viewer_ |  Output to the PxPlus Viewer to preview the report. From the Viewer, the report can be sent to a printer or to a PDF file.  
  
If a **[Destination Path Expression](../Report%20Designer/Overview.htm#dest_path)** has been specified for the report, the appropriate file extension will be added to the output file name at run time if the extension has been omitted (_.pdf_ for PDF documents, _.htm_ for HTML files, and _.txt_ for tab-delimited files). If an extension is included in the expression that does not match the output destination specified for the report, the output destination will be changed to match the extension when the report is run. This behavior occurs when the report is run through the Report Designer or when using a **[RunReport](../../Generating%20a%20Report/Introduction.htm#runreport)** method or called program.

_(Support for Destination Path Expressions was added in PxPlus 2022.)_

The Output Destination can be overridden at run time. For additional ways to override the Output Destination at run time, see **[Generating a Report](../../Generating%20a%20Report/Introduction.md)**.

To output a report to the specified output destination from within the Report Designer, select _Generate Report_ from the Report Designer _File_ menu.
