# Query Subsystem

**Column Options**|   
---|---  
  
**_For a Data Dictionary/View Definition/Database Table_**

When you select an item from the **File Elements** list in the **[Query Definition](Query%20Definition.md)** window, it is placed in the **Columns** list with default values for its title, format width and query derived from the data dictionary, view or table definition.

To change the values for a selected element, launch the **Column Options** window by using one of the following methods:

Click the _Column Options_ button on the **Query Definition** toolbar.  
Double click on the element.  
Right click on the element and then select _Update column properties_ from the popup menu.

The **Column Options** window for the selected element is displayed:

> **_For a Manually-Defined File_**

When you select a manually defined file from the **File Elements** list in the **Query Definition** window and click the selection button, the **Column Options** window is presented for defining the data element in terms of field number, offset, size and data type. See **[Field Definition](Query%20Definition.htm#fielddefinition)** and **[Manual Field Definition](Query%20Header.htm#manualfielddef)**.

The **Column Options** window consists of the following:

**Field Definition** |  **_(Only Available for Manually-Defined Files)_** |  _Field No_ |  Ordinal position of the field to be displayed; i.e. range 1 to _n_. Use Fld#0 (zero) to refer to an external key to a manual file.  
---|---  
_Offset and Size_ |  Define sub-strings using the field **Offset** (integer, range 1 to _n_) and the **Size** of the sub-string (integer, number of characters/bytes). NOMADS displays manual fields in the _Columns_ list as Fld#_n_ (where _n_ is the Field No) or as Fld#_n_(_o_ ,_z_) for sub-strings (where _o_ is the **_o_** _ffset_ and _z_ is the _si**z** e_).  
_Type_ |  Toggle _String_ or _Numeric_ as your data type.  
**Title** |  Heading that users will see at the top of the column at run time (either a _Fixed_ value, string _Expression_ or _Message Library Reference_).  
**Width** |  Column width in columns. This can be adjusted as necessary, depending on the selected font. Column widths can also be adjusted in **_Query+_**_Toolbar, Hybrid, Menu_ and _Drop Query_ views (see **[Query View](Query%20Header.htm#queryview)** option) by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and dragging the column header to the desired size. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
**Alignment** |  **_(Query+ and Drop Query)_** Alignment of the value within the column. Settings include _Default, Left, Center_ and _Right_ justification. The _Default_ setting for **_text_** values is _Left_ justification and _Right_ justification for **_numeric_** values.

#### **Note:**  
Alignment affects **_text displays only_** so that just the column title of columns displaying images, percent bars, etc. are affected.

_(The Alignment option was added in PxPlus 2018.)_  
**Format** |  Can be either _Mask_ or _Program_ : |  _Mask_ |  PxPlus format mask for the column's data output (_Fixed_ value or string _Expression_); e.g. a phone number mask such as 000-000-0000.  
---|---  
_Program_ |  Name of the program called to format the display of the string data in this column; e.g. *win/date;display. On the **ENTER** statement of the sub-program, include one argument (value of the column is passed by your query). _Fixed_ text or an _Expression_ can define the mask or name the program.  
**Display Option** |  Click the _Define_ button to launch the **Query Column Display** window where you can assign visual attributes, such as bold text, text color, highlight color, or an image, to a column. See **[Query Column Display](Query%20Definition.htm#querycolumndisplay)** below.  
**Sort Options** |  **_(String Only, Query+, Drop Query and Classic Query with Sort by Column Option)_** The following sort options can be assigned to a column: _Sort As Is; Use Sort Algorithm; Date Sort_ : |  _Sort Algorithm_ |  **_(Available when Use Sort Algorithm option is selected)_** Enter a PxPlus expression to be used as an alternate algorithm for sorting the column. **_Example:_** A column containing a date stored in a MMDDYYYY format can be displayed as MM/DD/YYYY using a "XX/XX/XXXX" format mask. However, to sort the column chronologically by year, month, day, you can set up a sort algorithm such as DT$(5,4)+DT$(1,2)+DT$(3,2). | 

#### **Note:   
**While this would be necessary for proper sorting in a **_Classic Query_** , **_Query+_** and **_Drop Query_** can use the _Date Sort_ to accomplish this as well.  
  
---  
_Sort Key Length_ |  **_(Available when Use Sort Algorithm option is selected)_** Number of characters to be used to sort the column when using a sort algorithm. Default value is the length of the field to a maximum of 128.  
_Date Sort_ |  **_(Query+, Drop Query)_** ** _(Available when Date Sort option is selected)_** Enter or select a string consisting of D, M and/or Y (day, month year) to describe the order in which they occur in the data. **_Example:_** A date in the format MMDDYY would be MDY.  
**'Tip' Values** |  **_(Numeric Only, Query+, Drop Query and Classic Query with Sort by Column Option)_** **_(Optional)_** Tip values to be displayed when the mouse is placed over the column heading. Values include _Total_ , Average, _Minimum_ and _Maximum_. Column tips are also supported in Webster+ queries. See Webster+ **[query=xxx](../../../Webster/Short%20Code%20Options.htm#query)**. _(Webster+ support for column tips was added in PxPlus 2024.)_  
**Hotlink Logic** |  **_(Query+ and Drop Query)_** Logic to execute when the column is double clicked. Click the drop-down arrow for a list of event actions: _Ignore,__Link, Call_ and _Execute_. See **[Actions and Parameters](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**. The specified logic overrides selecting the query record. Columns with a hotlink are displayed in the color defined by the **'OPTION'("StdLvueHotlinkClr",color$)** setting and are underlined while hovering over the column. See **[OPTION](../../../mnemonics/option.htm#hotlinkclr)** mnemonic. |  _Webster Hotlink_ |  Specify a hotlink for the column to be used in a **[Webster+](../../../Webster/Webster.md)** environment. Links may specify URLs, pages or events, starting with _http://_ , _https://_ , _page:_ or _event:._ Additional URL parameters can follow the page/program name separated by an **&**  _(ampersand)_ ; e.g. &_fieldname$_ =. **_Example:_** _page_ :_pagename_ &_fieldname_ _$_ =$1 The Webster+ hotlink is translated into a Webster+ **[[link]](../../../Webster/Short%20Codes.htm#link)** short code: [link _page_ :_pagename_ &_fieldname_ _$_ =$1] This results in a hyperlink to the specified page name with _fieldname$_ as the variable to be passed to the page/program and $1 being substituted with the value in the column.  
---|---  
_Target_ |  **_(Optional)_** Specify a Webster+ target browser window where the results of a link or event will be displayed. Selections are null **_(Default)_** , _Same_ , _New_ or _Popup_. |  _Same_ |  To have the output replace the current page.  
---|---  
_New_ |  To create a new tab/window.  
_Popup_ |  To create a popup overlaid window. When selected, an input control with a **%** (_percent sign_) is displayed for entering the percentage of the screen the popup window will occupy.  
  
_(The Hotlink Logic option was added in PxPlus 2018.)  
(The Webster Hotlink option was added in PxPlus 2021 Update 1.)_  
  
**Query** |  **_(Classic Query Only)_** Optional sub-query assigned to the column. |  _Library_ |  Select a library name from the drop-down list, click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **=**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:  
** The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
---|---  
_Panel_ |  Identify the query object to be used as a sub-query by selecting it from the drop-down list of available query panel names.  
  
At run time, users can invoke the sub-query by highlighting the column title and clicking the enabled query button on the toolbar. The current contents of the query column are passed as the _Start At Value_ for the sub-query.

_(Support for entering an expression for a Library name was added in PxPlus 2019.)_  
  
_Initially Hide Column_ |  Select this option to initially hide the column at run time until the user selects it to be shown. When using **_Query+_**_Toolbar, Hybrid, Menu_ or _Drop Query_ views (see **[Query View](Query%20Header.htm#queryview)** option), columns can be set to be initially hidden or shown by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and selecting the _Show/Hide/Reorder Columns_ item from the **[Columns](Run-time%20Query.htm#columns)** run-time option to set the visibility. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
_Security_ |  Launches the **[Object Security Definition](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.htm#objectsecurity)** window for setting up column level security for the query. See **[Query Security](Query%20Security.md)**. _(The Security button was added in PxPlus 2021.)_  
  
## See Also

**[Query Definition](Query%20Definition.md)**
