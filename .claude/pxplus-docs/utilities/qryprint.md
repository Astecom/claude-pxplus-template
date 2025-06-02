# Utility Routines

***TOOLS/QRYPRINT** |  **_Print Report Based on Query Definition_**  
---|---  
  
## Invocation

**CALL "*tools/qryprint"** , _queryName_ _$, queryLib$, pdffile$_[_, queryopts$, show_flg$_ , _subheader_ _$_]

**_Where:_**

_queryName_ _$_ |  Required |  Input |  Name of the query to use to generate the report.  
---|---|---|---  
_queryLib_ _$_ |  Required |  Input |  Library where the query is defined.  
_pdffile_ _$_ |  Required |  Input |  Name of the PDF file to write the report to. (If the _.pdf_ extension is omitted, it will be added automatically.)  
_queryopts_ _$_ |  Optional |  Input |  Flag to determine additional content to add to the report. Possible values are: |  **""** Null __|  **_(Default)_** No additional content.  
---|---  
C |  Display numeric calculation options (i.e. Total, Average, Minimum, Maximum) in the report sub-header.  
H |  Show hidden columns in the query definition. (By default, hidden columns are excluded from the report.)  
  
#### **Note:**  
Any combination of C, H, CH and HC is acceptable.  
  
_show_flg_ _$_ |  Optional |  Input |  Flags to determine interactive behavior at run time. Possible values are: |  **""** Null |  **_(Default)_** The report is generated silently.  
---|---  
D |  The generated PDF file is automatically displayed when the report is completed.  
E |  Error message for errors that occur during report generation are displayed in message boxes.  
P |  A progress bar is displayed while the report is generated.  
***** |  All of the above.  
  
#### **Note:**  
Any combination of D, E and P is acceptable.  
  
_subheader_ _$_ |  Optional |  Input |  Text to display as a sub-header on the first page of the report. Two columns are supported, separated by a colon (e.g. "Client ID:12345").  
If a single column is desired, prefix the text with a colon (e.g. ":This is a sub-header line").  
Multiple lines are supported, separated by a SEP character (e.g. ":This is a line"+SEP+"Client:12345").  
  
## Description

This utility is a CALLed program that creates a formatted PDF report based on a query definition. The report has a header consisting of the query title, the date and the page number, which is displayed on each page.

An optional sub-header consisting of formatted sub-header lines and optional numeric options (i.e. Total, Average, Minimum, Maximum) can be displayed on the first page of the report.

The body of the report consists of the contents of the query, excluding columns that are defined as hidden in the query definition; however, there is an option to include hidden columns in the report.

Finally, the User ID associated with the session is displayed in the report footer.

#### **Note:**  
This program will EXIT ERR if an error is encountered.

_(The QryPrint utility was added in PxPlus 2024.)_
