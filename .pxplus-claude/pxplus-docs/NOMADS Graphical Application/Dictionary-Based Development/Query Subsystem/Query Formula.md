# Query Subsystem

**Query Formula Definition**|   
---|---  
  
A _formula_ is a PxPlus expression (numeric or string) consisting of any combination of variables, constants and functions, whose resulting value is displayed in a query column. Formulas that have been assigned a name can be used within other formulas, noting that the order of evaluation of formulas corresponds to the order in which they are defined in the query definition.

To invoke the **Query Formula Definition** window, click the _Add Formula_ button on the **[Query Definition](Query%20Definition.md)** toolbar.

> This window consists of the following:

**Formula Name** |  **_(Optional)_** Enter a formula name to easily identify the formula throughout the Query Subsystem: For ** _new_** formulas, the formula name will be pre-loaded with **FML__QueryName_N_** (where _QueryName_ is the name of the query and **_N_** is a numeric identifier), which can be changed or deleted. For ** _existing_** formulas, the formula name will be blank until it is filled in. All formula names will be prefixed with **FML_** and must adhere to the rules for naming variables. The first character must be alphabetic (A-Z or a-z), the remaining characters can be alphabetic, numeric (0-9), **.** (_period_), or **_** (_underscore_). Naming a formula allows you to: Use the evaluated result of the formula in another formula.  
Use the formula as a parameter in a **[Display Option](Query%20Definition.htm#displayoption)**.  
Reference the formula by name in a **[Report Writer](../../../Report%20Writer/Designing%20a%20Report/Defining%20the%20Data/Input%20Source.htm#qry_def)** definition.  
Specify a column name for use with the **[*QUERY*](../../../file_handling/~query~.md)** interface.

#### **Note:**  
Formula names are **_not_** backwards compatible.

_(Formula Name was added in PxPlus 2020.)_  
---|---  
**Column Title** |  Column heading that users will see at the top of the formula column at run time; e.g. Customer Name. Can be a _Fixed_ value, string _Expression_ , or _Message Library Reference_.  
**Formula** |  PxPlus expression (numeric or string) consisting of any combination of variables, constants and functions. In formulas, you can refer to an external key as PRIME_KEY$. **_Example:_** CVS(CST_NAME$,256)  
SURNAME$+","+NAME$(1,1)+","+STR(XXX.FLD#2*100) See **[Query Variables](Designing%20and%20Using%20the%20Query%20Subsystem.htm#queryvariables)**.  
**Width** |  Column width in columns. This can be adjusted as necessary, depending on the selected font. Column widths can also be adjusted in **_Query+_**_Toolbar, Hybrid, Menu_ and _Drop Query_ views (see **[Query View](Query%20Header.htm#queryview)** option) by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and dragging the column header to the desired size. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
**Alignment** |  **_(Query+ and Drop Query)_** Alignment of the value within the column. Settings include _Default, Left, Center_ and _Right_ justification. The _Default_ setting for **_text_** values is _Left_ justification and _Right_ justification for **_numeric_** values.

#### **Note:**  
Alignment affects **_text displays only_** so that just the column title of columns displaying images, percent bars, etc. are affected.

_(The Alignment option was added in PxPlus 2018.)_  
**Format** |  Can be either _Mask_ or _Program_ : |  _Mask_ |  PxPlus format mask for the column's data output (fixed value or string expression); e.g. a phone number mask such as 000-000-0000.  
---|---  
_Program_ |  Name of the program called to format the display of the string data in this column; e.g. *win/date;display. On the **ENTER** statement of the sub-program, include one argument (value of the column is passed by your query.) Fixed text or an Expression can define the mask or name the program.  
  
#### **Note:**  
To use a _Program_ , the formula must have a **[Formula Name](Query%20Definition.htm#formula_name)**.  
  
**Display Option** |  Click the _Define_ button to launch the **Query Column Display** window where you can assign visual attributes, such as bold text, text color, highlight color, or an image, to the column. See **[Query Column Display](Query%20Definition.htm#querycolumndisplay)** below.  
**Sort Options** |  **_(String Only, Query+, Drop Query and Classic Query with Sort by Column Option)_** The following sort options can be assigned to a column: _Sort As Is_ , _Use Sort Algorithm_ , _Date Sort_ : |  _Sort Algorithm_ |  **_(Available when Use Sort Algorithm option is selected)_** Enter a PxPlus expression to be used as an alternate algorithm for sorting the column. **_Example:_** A column containing a date stored in a YYYYMMDD format can be displayed as MM/DD/YYYY using the formula DT$(5,4)+DT$(1,2)+DT$(3,2) and a format string such as "XX/XX/XXXX". However, to sort the column chronologically by year, month day, you can use the original value, DT$, as the sort algorithm.

#### **Note:**  
While this would be necessary for proper sorting in a **_Classic Query_** , **_Query+_** and **_Drop Query_** can use the _Date Sort_ to accomplish this as well.  
  
---|---  
_Sort Key Length_ |  **_(Available when Use Sort Algorithm option is selected)_** Number of characters to be used to sort the column when using a sort algorithm. Default value is the length of the field to a maximum of 128 characters.  
_Date Sort_ |  **_(Query+, Drop Query)_** **_(Available when Date Sort option is selected)_** Enter or select a string consisting of D, M and/or Y (day, month, year) to describe the order in which they occur in the data. **_Example:_** A date in the format MMDDYY would be MDY.  
**'Tip' Values** |  **_(Numeric Only, Query+, Drop Query and Classic Query with Sort by Column Option)_** **_(Optional)_** Tip values to be displayed when the mouse is placed over the column heading. Values include _Total, Average, Minimum_ and _Maximum_.  
**Hotlink Logic** |  **_(Query+ and Drop Query)_** Logic to execute when the column is double-clicked. Click the drop-down arrow for a list of event actions: _Ignore,__Link, Call_ and _Execute_. See **[Actions and Parameters](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**. The specified logic overrides selecting the query record. Columns with a hotlink are displayed in the color defined by the **'OPTION'("StdLvueHotlinkClr",color$)** setting and are underlined while hovering over the column. See **[OPTION](../../../mnemonics/option.htm#hotlinkclr)** mnemonic. |  _Webster Hotlink_ |  Specify a hotlink for the column to be used in a **[Webster+](../../../Webster/Webster.md)** environment. Links may specify URLs, pages or events, starting with _http://_ , _https://_ , _page:_ or _event:._ Additional URL parameters can follow the page/program name separated by an **&**  _(ampersand)_ ; e.g. &_fieldname$_ =. **_Example:_** _page_ :_pagename_ &_fieldname_ _$_ =$1 The Webster+ hotlink is translated into a Webster+ **[[link]](../../../Webster/Short%20Codes.htm#link)** short code: [link _page_ :_pagename_ &_fieldname_ _$_ =$1] This results in a hyperlink to the specified page name with _fieldname$_ as the variable to be passed to the page/program and $1 being substituted with the value in the column.  
---|---  
_Target_ |  **_(Optional)_** Specify a Webster+ target browser window where the results of a link or event will be displayed. Selections are null **_(Default)_** , _Same_ , _New_ or _Popup_. |  _Same_ |  To have the output replace the current page.  
---|---  
_New_ |  To create a new tab/window.  
_Popup_ |  To create a popup overlaid window. When selected, an input control with a % sign is displayed for entering the percentage of the screen the popup window will occupy.  
  
_(The Hotlink Logic option was added in PxPlus 2018.)  
(The Webster Hotlink option was added in PxPlus 2021 Update 1.)_  
  
_Initially Hide Column_ |  Selecting this check box initially hides the formula column at run time until the user selects it to be shown. When using **_Query+_**_Toolbar, Hybrid, Menu_ or _Drop Query_ views, columns can be set to be initially hidden or shown by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and selecting the _Show/Hide/Reorder Columns_ item from the **[Columns](Run-time%20Query.htm#columns)** run-time option to set the column visibility. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
_Security_ |  Launches the **[Object Security Definition](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.htm#objectsecurity)** window for setting up column level security for the query. See **[Query Security](Query%20Security.md)**. _(The Security button was added in PxPlus 2021.)_  
  
## See Also

**[Query Definition](Query%20Definition.md)**
