# PxPlus Dashboard

**Examples - Web Service Widgets**|   
---|---  
  
Below are examples of Dashboard widgets created for each **[Web Service](PxPlus%20Web%20Services.md)** type: **_Query_** , **_Chart_** , **_Report_** and **_Maintenance_**.

##  Query Service

The Query Service displays a list containing data from one or more linked files.

> #### **Note:**  
You can sort the data in ascending/descending order by clicking on the column headings. An up/down pointing arrow adjacent to the column heading indicates the sort order.

_(Column sorting and table capability for Query Web Service were added in PxPlus 2016.)_

## Chart Service

The Chart Service displays a defined chart.

> ## Report Service

The Report Service displays the contents of a defined _Report Writer_ report.

> ## Maintenance Service

The Maintenance Service generates an HTML form for user input with fields from a specified data table.

> The generated form also includes the following:

_First_ , _Prior_ , _Next_ , _Last_ buttons |  Used for browsing through inputted records, if they exist.  
---|---  
_Find_ button |  Uses the value entered in the Key field to locate a particular record.  
_Submit_ button |  Updates the record and then clears the input fields.  
_Apply_ button |  Creates the record but does not clear the input fields.  
_Delete_ button |  Removes the record.  
_Reset_ button |  Cancels any changes to the current record and then clears the input fields.  
  
The fields are initially loaded with any default values defined in the data dictionary. If information is missing for a required field, a message displays when the _Submit_ or _Apply_ button is selected.
