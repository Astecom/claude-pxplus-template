# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Supply Data to the PxPlus Report Writer**|   
---|---  
  
The PxPlus **[Report Writer](../Report%20Writer/Introduction.md)** is a powerful tool for designing and generating complex reports in customized formats to various output destinations, such as printers, PDF files, HTML documents and more.

A Query definition can be used as an _Input Source_ to supply data for the report:

> This makes data from several files specified in the query definition available to be used in the report. You can also make a more complex and customizable report than that created by the *TOOLS/QRYPRINT utility.

**_Example:_**

> This example creates a report that has Client data grouped by Sales Rep with totals for each Sales Rep and a final report summary.

You can then generate a report based on your report definition. The **[Report Designer](../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)** can generate reports directly. You can also CALL the ***rpt/runreport** program or create a ***rpt/pvxreport** object to have fine control over generating a report.

See **[Generating a Report](../Report%20Writer/Generating%20a%20Report/Introduction.md)**.

**_Example:_**

> CALL "*rpt/runreport;Run_Call","C:\rptdef\SalesRepClients.pvr"

> 
