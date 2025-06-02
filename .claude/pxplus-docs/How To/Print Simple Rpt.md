# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Print a Simple Report**|   
---|---  
  
The **[*TOOLS/QRYPRINT](../utilities/qryprint.md)** utility can be used to create a formatted PDF report based on a query definition. It can be invoked in your program using the **[CALL](../directives/call.md)** directive:

> CALL "*tools/qryprint", _queryName_ _$_ , _queryLib_ _$_ , _pdffile_ _$_ [, _queryopts_ _$_ , _show_flg_ _$_ , _subheader_ _$_]

The report has a header consisting of the query title, the date and the page number, which is displayed on each page. An optional sub-header consisting of formatted sub-header lines and optional numeric options (i.e. Total, Average, Minimum and Maximum) can be displayed on the first page of the report.

The body of the report consists of the contents of the query, excluding columns that are defined as hidden in the query definition; however, there is an option to include hidden columns in the report.

Finally, the User ID associated with the session is displayed in the report footer.

**_Example:_**

> CALL "*tools/qryprint","qClient","panels.en","customer.pdf","C","D"

> This code generates a formatted PDF file based on the qClient definition, including numeric calculation options, such as Total, Average, Minimum or Maximum, in the report sub-header. It will also display the PDF file when the report is completed.
