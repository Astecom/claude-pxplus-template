# How To Tutorials

**How to Use the Enhanced Layout in File Maintenance Generator**|   
---|---  
  
Starting with PxPlus 2024, a new layout option - **_Enhanced Layout_** \- has been added to the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. Going forward, it will be the default layout used for creating new file maintenance panels.

The _Enhanced_ layout allows all of the section sizes - _Full, Half, Third, Quarter_ \- to be used to create **_both_** Webster+ HTML pages **_and_** NOMADS panels. In addition, this layout simplifies the use of sections by displaying the different section sizes in the panel _Layout Grid_.

_Third_ and _Quarter_ sections have been part of the File Maintenance Generator since it was expanded to also generate Webster+ HTML pages in PxPlus 2021. However, these sections were only available for Webster+ HTML pages, and the _Layout Grid_ could only display Half or Full sections for use with generated NOMADS panels.

The layout that was used prior to PxPlus 2024 is also available and is now known as the **_Two-Column_** layout. To regenerate NOMADS panels and Webster+ HTML pages that were generated prior to PxPlus 2024, the _Two-Column_ layout will be used.

#### **Important Note:**  
The _Enhanced_ layout is **_not_** backwards compatible with previous versions.

> ## Enhanced Layout vs. Two-Column Layout

The Webster+ section sizes functionality is identical for both the _Two-Column_ layout and the _Enhanced_ layout. _Full_ , _Half_ , _Third_ and _Quarter_ sections result in panels/pages where the section sizes are true full, halves, thirds and quarters of the page. These sections sizes are responsive, changing size and configuration as the Web page is made wider or narrower.

The major difference between the _Two-Column_ layout and the _Enhanced_ layout is the manner in which column widths (and therefore, the panel width) are determined for NOMADS:

> **_Two-Column Layout:_**  
>  Each side is made only as wide as needed for the widest element on that side; therefore, the Right Side may be much wider than the Left Side (or vice-versa) on the resulting NOMADS panel.

> **_Enhanced Layout:_**  
>  Each Half, Third or Quarter cell in the _Layout Grid_ has the same width. If you are defining a panel using Half sections _(default)_ , both halves of the generated NOMADS panel will have the same width, which will be determined by the size of the largest element in any half. The width of the overall panel will be determined by which of the following is the widest: the widest Full section, twice the widest Half section, three times the widest Third section or four times the widest Quarter section.

This table summarizes the differences between the _Two-Column_ layout and the _Enhanced_ layout:

**Consideration** |  **Layout Choice** |  **Explanation**  
---|---|---  
Panel layout flexibility |  Enhanced |  The _Enhanced_ layout provides options for defining a row with _Full_ , _Half_ , _Third_ or _Quarter_ sections, which allows for more flexibility for both NOMADS panels and Webster+ HTML pages.  
Easy to visualize sections |  Enhanced |  While the _Two-Column_ layout can be used to create _Quarter_ and _Third_ sections for Webster+ HTML pages (by right clicking on the _Layout Grid_ column header and by inserting Section Breaks), these section sizes have no impact on the NOMADS panel being generated. The _Enhanced_ layout makes it easier to use and visualize these sections for both NOMADS panels and Webster+ HTML pages.  
More than two columns (in NOMADS) |  Enhanced |  To generate a NOMADS panel with more than two columns, the _Enhanced_ layout must be used.  
Narrow column widths (with two-column maximum in NOMADS) |  Two-Column |  Because the Left and Right sides of the _Two-Column_ layout can have differing widths, the resulting NOMADS panel may be narrower if narrow elements are all placed on one side of the layout.  
Minimum panel width (with two-column maximum in NOMADS) |  Two-Column |  When using the _Enhanced_ layout, care must be taken to avoid a wide panel with excess white space. In the _Layout Grid_ , placing a wide element in a cell defined as a _Quarter_ section will result in a NOMADS panel that is four times wider than the wide element (including the prompt for data file fields). Very wide elements should be placed in cells defined with larger section sizes, such as _Full_ or _Half_ sections.  
  
## How to Use the Enhanced Layout to Generate a File Maintenance Panel and Webster+ HTML Page

To generate a file maintenance panel, the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** requires a data file defined with a **[Data Dictionary](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** entry. The following screenshot shows the Data Dictionary definition for the _Salesreps_ data file. This file will be used to create a NOMADS panel and Webster+ HTML page in the step-by-step instructions below. The **[Data Classes](../Data%20Dictionary/Data%20Classes/Overview.md)** that are used in the Data Dictionary definition are supported by the File Maintenance Generator.

  
**Salesreps Data File Definition** |   
---|---  
|  1. |  Invoke the File Maintenance Generator. This can be done by using one of the following methods: **_Method 1:_** From the IDE Main Launcher, expand the _Graphical Application Builder (NOMADS)_ category. Select _Open Application Library_. This displays the **Development Library** window. Select or enter the _File name_ of an existing NOMADS library file and then click the _Open_ button. This launches the **Library Object Selection** window. Click the _File Maint_ tool bar button. You are prompted to enter the _Name_ for the new panel. Enter _salesreps_ and then click _OK_. **_OR_**  
  
** _Method 2:_**

#### **Note:**  
To use **_Method 2_** , a **[Default Library](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#defaultlib)** must be defined for the current project.

From the IDE Main Launcher, expand the _Graphical Application Builder (NOMADS)_ category. Select _Open Project Application Library._ This launches the **Library Object Selection** window. Click the _File Maint_ tool bar button. You are prompted to enter the _Name_ for the new panel. Enter _salesreps_ and then click _OK_. **_OR  
  
Method 3:_** From the IDE Main Launcher, expand the _Graphical Application Builder (NOMADS)_ category. Select _File Maintenance Generator_. This displays the **New/Existing File Maintenance** window. Enter _salesreps_ as the _Name_ of the new panel and then click _OK_.  
|  2. |  The Welcome panel of the File Maintenance Generator is displayed. It shows the panel name _salesreps_. Click the _Next_ button.  
|  3. |  The **[Step 1: File Maintenance Object Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Object%20Definition.md)** panel is displayed. The _Layout_ drop box defaults to _Enhanced_. Leave this setting as is.  
|  4. |  Select the type of form(s) to create. The _NOMADS Panel_ check box is selected by default. Leave this setting as is. Select the _HTML Page_ check box to also create a Webster+ HTML page.  
|  5. |  Select or enter the data table from the Data Dictionary. The _Table Name_ and _Panel Title_ inputs are required before proceeding to the next step. For _Table Name_ , enter _salesreps_ or click the Lookup button (magnifying glass) and select _Salesreps_. The _Panel Title_ defaults to _Sales Representatives Maintenance_ (but can be changed). Leave this setting as is.  
|  6. |  To define the field layout for the panel, proceed to **[Step 6: File Maintenance Field Layout](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Field%20Layout.md)** by clicking the _Next_ button five times or by clicking the number **6** button at the top.  
|  7. |  The _Layout Grid_ for the Main Panel is displayed and defaults to Half sections. The cell at the top is prepopulated with the _SalesRepCode_ field, which is the Key segment for the _Salesreps_ file. When using the _Enhanced_ layout, the title of the _Layout Grid_ is **Sections** , and all the cells are initially the same Light Blue color. When using the _Two-Column_ layout, the _Layout Grid_ title and cell colors will be slightly different.  
|  8. |  The _Field Name_ list box on the left lists all the fields in the _Salesreps_ file. Field names that begin with *****  _(asterisk)_ are fields flagged as _Required_ in the Data Dictionary. Select *Name in the list box. The Info line below the _Layout Grid_ shows information about this field from the Data Dictionary, including the Description, Type and Size. Drag and drop this field into the _Layout Grid_ in the first column of row 2 (below _SalesRepCode_). The Info line displays information when a cell in the _Layout Grid_ is selected.  
|  9. |  The Name field has a Size of 40 characters. To avoid a wide panel, this row should be changed from Half section to Full section. Right click on the _Name_ cell and select _Full Section_ from the popup menu. The cells on row 2 and all rows below it have changed to Full sections because none of the rows were populated.  
|  10. |  Select Email in the _Field Name_ list box. Drag and drop this field into the row 3 (below _Name_). This field has a Size of 50 characters and therefore should also be in a Full section.  
|  11. |  Change row 4 from Full section to Half section. Right click on this row and select _Half Section_ from the popup menu. The cells on row 4 and all rows below it have changed from Full sections to Half sections.  
|  12. |  Select *PhoneNumber in the _Field Name_ list box. Drag and drop this field into the first column of row 4.  
|  13. |  Select PhoneExtension. Drag and drop this field into the second column of row 4.  
|  14. |  Select MobileNumber. Drag and drop this field into the first column of row 5.  
|  15. |  Select HomeNumber. Drag and drop this field into the second column of row 5.  
|  16. |  Select *Department. Drag and drop this field into the first column of row 6. In the _Salesreps_ data file definition, the Department field is defined with a Drop Box type Data Class named Department. This will result in the input for the Department field being a Drop Box rather than a Multi-Line. |    
**Department Field Definition** |    
**Department Data Class Definition**  
---|---  
|  17. |  Add a Folder control to the Main Panel. Select the _Folder_ check box above the _Layout Grid_. If desired, a Folder location can be specified by right clicking on any row on the Main Panel (**_except_** on a row containing a Key field) and selecting the _Folder Location_ option from the popup menu. If no _Folder Location_ is specified, the Folder control will be added to the bottom of the Main Panel automatically. See **[Adding a Folder](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Folder.md)**. For this panel, the Folder control will be located at the bottom of the Main Panel; therefore, no Folder location will be specified.  
|  18. |  Define the first Folder tab. Click the _Maintain Folder Tabs_ button (folder icon beside _Current Tab_ drop box). The **File Maintenance Panel Tabs** dialog is displayed.  
|  19. |  Enter a name for the new tab. For _New Tab_ , enter **Accounting**.  
|  20. |  Click _OK_ to exit the **File Maintenance Panel Tabs** dialog.  
|  21. |  Above the _Layout Grid_ , the _Current Tab_ field displays the new tab name, **Accounting**. The _Layout Grid_ for the new tab is empty and defaults to Half sections.  
|  22. |  Right click on the first column of row 1. Select _Quarter Section_ from the popup menu. All cells change to Quarter sections because none of the rows on this tab were populated.  
|  23. |  Add the following fields to the **Accounting** tab: Select ytdOrders in the _Field Name_ list box. Drag and drop this field into the first column of row 1.  
Select ytdSales. Drag and drop this field into the second column of row 1.  
Select prvOrders. Drag and drop this field into the third column of row 1.  
Select prvSales. Drag and drop this field into the fourth column of row 1. |    
**Layout Grid for Accounting Tab**  
---  
  
In the Data Dictionary, all four fields are defined as _Numeric_ with the Data Class named SalesAmt. The Data Class defines the format used to display these amounts. These fields are also defined as _Read-Only_ fields. As a result, they should remain disabled when the file maintenance panel is processed.  
  
|  24. |  Add a second Folder tab by using a different method. Click inside the _Current Tab_ drop box. The current value, **Accounting** , is highlighted. Enter **Commissions** as the name of the second tab.  
|  25. |  Above the _Layout Grid_ , the _Current Tab_ field displays the new tab name, **Commissions**. The _Layout Grid_ for the new tab is empty and defaults to Half sections.  
|  26. |  Right click on the first column of row 1. On the popup menu, notice that the _Third Section_ option is disabled. The reason is that a Half Section cannot be made directly into a Third Section. The Half Section must be changed to a Full Section first. Select the _Full Section_ option from the popup menu. All cells are now changed to Full Sections.  
|  27. |  Right click to display the popup menu again and select _Third Section_. All cells are now changed to Third Sections.  
|  28. |  Add the following fields to the **Commissions** tab:  
  
Select ytdCommission from the _Field Name_ list box. Drag and drop this field into the first column of row 1.  
Select prvCommission. Drag and drop this field into the second column of row 1.  
Select Commissio Rate. Drag and drop this field into the third column of row 1.  
Select GLCommission. Drag and drop this field into the first column of row 2.  
|  29. |  The SHOW.GlCommission field in the _Field Name_ list box is not an actual element defined in the Data Dictionary. It is shown in the list box with all of the other elements because the GLCommission field has a Data Class of glAcct, which has **[Extended Validation](../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** defined to show the GL Account Description from the _Accounts_ data file. Select SHOW.GlCommission from the _Field Name_ list box. Drag and drop this field into the second column of row 2. |    
**Layout Grid for Commissions Tab**  
---  
  
As with the _Two-Column_ layout, a variable, such as **SHOW**.GlCommission, can be dropped into the same cell as the Data Dictionary element it refers to. See **[Adding Extended Validation Descriptive Fields (SHOW.xxxxxx)](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Add%20Remove%20Fields.htm#add_show)**.

When using the _Enhanced_ layout with smaller cell sizes, this is usually not recommended since the width of the panel calculation will be affected by the very wide combined cell. Placing the **SHOW._xxxxxx_** variable in the cell beside the related element will result in the controls being generated right beside each other (rather than in the next column).  
  
|  30. |  The remaining field, ImagePath, will not be moved into the _Layout Grid_. It is not a required field and does not need to be included.  
|  31. |  The layout for the salesreps panel is now completed. |    
**Main Panel Layout**  
---  
|  32. |  Click the _Next_ button to proceed to **[Step 7: File Maintenance Generator Completion](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Completion.md)** screen. Review your selections for previous steps and make any necessary changes.  
|  33. |  Select the _Launch the Screen Designer to edit 'Sales Representatives Maintenance' after completion_ check box.  
|  34. |  Click the _Finish_ button.  
|  35. |  The NOMADS Designer is launched with the Main Panel displayed. Test the panel.  
|  36. |  When tested, the generated **NOMADS** panel and Folder tabs look like this:

#### **Note:**  
In this example, the width of the panel is determined by the width of the Prior Year Sales prompt and input Quarter section.

|    
**Main Panel showing Accounting tab (NOMADS)  
  
**  
---  
  
**Main Panel showing Commissions tab (NOMADS)**  
|  37. |  The generated HTML page rendered in **Webster+** looks like this: |    
**Main Panel showing Accounting tab (Webster+)  
  
**  
---  
  
**Main Panel showing Commissions tab (Webster+)**  
| | |   
  
## See Also

**[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**  
**[Enhanced Layout](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Enhanced%20Layout.md)**  
**[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)**  
**[Data Classes](../Data%20Dictionary/Data%20Classes/Overview.md)  
[Extended Class Validation and Display](../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)  
[Webster+](../Webster/Webster.md)**
