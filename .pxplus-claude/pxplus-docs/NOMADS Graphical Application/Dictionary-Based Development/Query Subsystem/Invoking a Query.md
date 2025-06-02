# Query Subsystem   
  
**Invoking a Query** |  **__**  
---|---  
  
To invoke a query panel from your application, a number of methods are available:

  * It can be associated with various types of **[Panel Controls](../../Creating%20Panel%20Controls/Introduction.md)**.
  * It can be included in **[Panel Events](Invoking%20a%20Query.htm#eventdrivenqueries)** logic.
  * It can be launched programmatically via the **[PROCESS](Invoking%20a%20Query.htm#process)** directive.



Each of these methods, as well as how to invoke Query+ vs. the Classic Query, is explained below.

##  Assigning a Query

Using the **[Panel Designer](../../Panel%20Designer/Introduction.md)**, you can associate a query with **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)**, **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)**, **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)** or **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Overview.md)** controls via the **Query** tab of a control definition.

#### **Note:**  
If you are using the _Property Sheets_ version of the NOMADS Panel Designer, then the _Associated Object_ property for Multi-Line controls **_must_** be set to _Query_ so that the _Query_ property is active.

At run time, a query button is drawn next to Multi-Line controls that are **_one line high_** and have an associated query. **_The height of the Multi-Line must be set to 1; otherwise, NOMADS will not draw the button._** Clicking this button invokes the associated query. A query can also be invoked (for all controls) by pressing**Shift - F2**. Besides the pre-defined queries that were described previously in this section, you can use the assigned query interface to launch query-related programs, non-query logic, spinner controls, calendars, etc.

Queries are assigned in the Panel Designer by selecting the **Query** tab of the control's definition.

> ##  Query Type

The Query assignment interface allows you to assign one of five different **_Query Types_** :

_Panel_ |  Select _Panel_ to assign a pre-defined query to the control. This refers to a query that has been defined using the query definition steps. See **[Defining a Query](Defining%20a%20Query.md)**. When invoked, NOMADS passes the current value of the associated control to the query, and the selected query value is returned to that control. You can also use this interface to display a panel that is not a query definition. If you do this, then the value in the Multi-Line will be passed to and back from the panel in ARG_1$. Other information is also available to the panel in ARG_2$ through ARG_6$, which includes the name of the control invoking the query, the CTL value of the control, the control's tag value, the current panel name, and the channel of the current panel library. For information on making your **[Drop Query](Overview.htm#dropquery)** more closely emulate a Drop Box, see the **[PermaLock/Query Input](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#permalock)** attribute (on the **Attributes** tab of the **Multi-Line Properties** dialog).  
---|---  
_Query Program_ |  Select _Query Program_ to run a program when the query is invoked. The value of the control is available to the program in the QRY_VAL$ variable. When the program has finished running, then the value in QRY_VAL$ is loaded back into the control. You can also use this type of query to invoke a service program, such as launching a website, an email interface, a map or a standardized file selection dialog. See **[Service Queries for Web, Email, Map and Open File](Service%20Queries%20for%20Web,%20Email%20and%20Map.md)**.  
_Non-Query Logic_ |  Select _Non-Query Logic_ to execute specified logic when the query is invoked. Select the logic type (_Link, Perform, Execute_ , etc.), and supply the _program;label_ reference. The **[QRY_VAL$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#qryval)** variable interface is not available in this instance.  
_Spinner Controls_ |  **_(Multi-Lines Only)_** Select _Spinner Controls_ to attach a spinner control to a Multi-Line. A spinner control is a one-line vertical scrollbar drawn next to the control that can be used to increment/decrement numeric values in the Multi-Line.  
_Calendar_ |  **_(Multi-Lines Only)_** Select _Calendar_ to attach a calendar query to a Multi-Line to return a date. Calendar attributes must be previously defined using the NOMADS **[Calendar](../../System%20Maintenance%20Tools/System%20Options/Calendar.md)** utility.

#### **Note:**  
An alternate way to create a calendar query is to select _Panel_ as the **Query Type** , and then set the _Library_ to ***win/calendar.*** and the _Panel_ to **CALENDAR**.  
  
Depending on the **_Query Type_** selected, different information is entered:

**Query Type:_Panel_**  
---  
_Panel Information_ |  Query information can be entered as _Fixed_ values or as an _Expression_. If _Fixed_ , select a query definition by clicking the _Select Query_ button or enter the **[Library](Invoking%20a%20Query.htm#library)** and **[Panel](Invoking%20a%20Query.htm#panelqry)** information. If the information is an _Expression_ , select _Expression_ from the drop-down list and enter an expression that will be evaluated to give the query definition name and library in the following format: "QueryName,Library". (The library path is optional if the query uses the current library.)  
_Select Query_ |  Button that invokes the **Select a Query Definition** window for selecting query definitions only. This window presents a tree-view structure that lists queries that exist at the current display level and lower, arranged by directory, screen library and query. Select a query by clicking on it. When selected, the _Library_ and _Panel_ input fields are automatically populated. To select other panel types, enter the **[Library](Invoking%20a%20Query.htm#library)** and select a **[Panel](Invoking%20a%20Query.htm#panelqry)**. _(The Select Query button and Select a Query Definition window were added in PxPlus 2020.)_  
_Library_ |  Enter the path to the library containing the query definition. The drop-down arrow invokes a list of recently used libraries. The Browse button allows you to browse the directory to find the library. Be sure to use the simplest form of the path for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  Name of the query or panel definition to invoke. The drop-down list contains all panels in the library. If the query has not yet been defined, enter a new name and click the **[Define](Invoking%20a%20Query.htm#define)** button to create it.

#### **Note:**  
When entering a new name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_Define_ |  Button that launches **[Query Definition](Query%20Definition.md)** window (for Standard Query) or **[Query List Definition](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark4)** (for Query List) using the _Panel_ name to either create a new or edit an existing query definition. If creating a new query definition, a prompt displays for selecting a **[Query Type](Defining%20a%20Query.htm#type)**.  
_Auto Complete_ |  **_(Multi-Lines Only)_** Besides the query reference, you can also assign the Auto Complete feature to a Multi-Line. Auto Complete attributes must be previously defined using the NOMADS **[Auto Complete](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** utility.  
**Query Type:_Query Program_**  
_Query Program_ |  Enter the absolute, relative or simple path location of a user-supplied program, e.g. _program;label_ _,_ or simply _;label_ if the default program is being used. May be defined as a _Fixed_ value or _Expression_.  
_Auto Complete_ |  **_(Multi-Lines Only)_** Besides the query reference, you can also assign the Auto Complete feature to a Multi-Line. Auto Complete attributes must be previously defined using the NOMADS **[Auto Complete](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** utility.  
**Query Type:_Non-Query Logic_**  
_Non-Query Logic_ |  Select the type of logic (_Link, Perform, Call, Execute,_ etc.) and the program logic reference _"program;label"_.  
  
**_Example:_**  
  
PERFORM  
"programs/browse;Browse_Directory"  
_Auto Complete_ |  **_(Multi-Lines Only)_** Besides the query reference, you can also assign the Auto Complete feature to a Multi-Line. Auto Complete attributes must be previously defined using the NOMADS **[Auto Complete](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** utility.  
**Query Type:_Spinner Controls (Multi-Lines Only)_**  
_Increment_ |  Sets the increment value for scrollbar movement.  
_Start_ |  Minimum value of the spinner control.   
_End_ |  Maximum value of the spinner control.  
**Query Type:_Calendar (Multi-Lines Only)_**  
_Calendar_ |  Select the calendar definition from the drop-down list. See **[Calendar](../../System%20Maintenance%20Tools/System%20Options/Calendar.md)** utility.  
  
#### **Note:**  
A query can be associated with an entire grid as described or with individual cells within the grid. For information on grid queries, see **[Queries](../../Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#queries)**.

##  Query Button Options

Query definitions that are associated with Multi-Lines and have a **[Query Type](Invoking%20a%20Query.htm#querytype)** that is _Panel_ , _Query Program_ or _Non-Query Logic_ also have **Query Button Options**. In general, the default appearance of query buttons is governed by the %NOMADS property settings **Qry_Attr$** , **Qry_Btn$** , **Qry_Tip$** , and **Qry_Wide**. See **[Query Variables](Designing%20and%20Using%20the%20Query%20Subsystem.htm#queryvariables)**.

The default values can be overridden by setting **Query Button Options** for the individual Multi-Line:

**Query Button Options**  
---  
_Suppress Query Button_ |  Suppresses the query button on the associated **_one-line high_** Multi-Line.  
_Bitmap Image_ |  Specify the embedded or external bitmap to display on the button (_Fixed_ or string _Expression_). Click the Query button to invoke the **Bitmaps** dialog. _(The ability to enter an expression for a Bitmap Image was added in PxPlus 2019.)_  
_Width_ |  Width of the query button in columns. Enter a value or use the spinner control.  
_Floating Tip_ |  Associate a floating tip message (_Fixed_ , string _Expression_ or _Message Library Reference_).  
_Attributes_ |  |  _Bitmap Button_ |  Button is a bitmap button.  
---|---  
_Transparent_ |  Button is "see-through" to the window contents behind the button area.  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pushed.  
_Flat No Border_ |  Button has no border and shows no raised outline when the mouse hovers or the button is pushed.  
_Embedded_ |  Button is displayed within the Multi-Line, rather than shortening the Multi-Line and displaying the query button to its right.  
  
If the _Transparency_ attribute is **_not_** selected, the appearance of the query button will be affected by the active NOMADS theme (see **[Themes](../../System%20Maintenance%20Tools/System%20Options/Themes.md)**), or if a Visual Class is defined for the associated Multi-Line, Visual Class settings for the button will override the theme (see **[Visual Classes](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)**).

#### **Note:**  
Query buttons are drawn **_only_** if the associated Multi-Line is **_one line high_**.  
  
If the Multi-Line is **_greater_** than one line high, NOMADS will not draw the query button and will display a message when you save the Multi-Line. (If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, this message will only display in the **Assign Query** window (_Query_ property) when a query is assigned and the _OK_ button is selected.)  
  
See **[Height](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#size)** in **Multi-Line Properties**.  
  
_(The message for Multi-Line height was added in PxPlus 2020.)_

##  Event-Driven Queries

A query can be launched automatically when an event for a control such as OnChange occurs when processing a NOMADS panel. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. This is accomplished by defining _Link_ logic for the control to trigger the query.

**_Example:_**

You can add a separate lookup button to a panel that triggers a query when pressed, then load the return value into the specified control. To process the query, assign logic to the button's OnChange logic:

> Link="LOOKUP_NAME","MYLIB.EN",NAME$

When the button is pressed, the query called LOOKUP_NAME in the MYLIB.EN library will be processed using the value in the NAME control. Be sure to select the _Auto Refresh_ attribute in the Panel Header so that the value in the NAME$ Multi-Line is refreshed.

##  Using the PROCESS Directive

The **[PROCESS](../../../directives/process.md)** directive can be used to invoke a NOMADS query panel directly from a program.

**_Format:_**

> PROCESS "_panel_name_ ","[ _lib_ __name_ ]",_value$_

NOMADS returns to the program when the query panel is exited. You can pass one optional argument, a starting value to, and a return value from the query.

## Query Examples

Some query examples are provided below.

**_Example 1:_** |  For queries that are **_not attached_** to a NOMADS control:

> 0110 PROCESS "MY_QUERY","",X$

When MY_QUERY runs, the value of X$ is used to set the starting position in the file. When MY_QUERY is exited, NOMADS passes the return value to the calling program in X$.  
---|---  
**_Example 2:_** |  For **_event-driven_** queries: An alternative to using the _Link_ method to launch an event-driven query (see **[Event-Driven Queries](Invoking%20a%20Query.htm#eventdrivenqueries)** above) is to _Execute_ a PROCESS command in the OnChange logic:

> Execute= PROCESS "LOOKUP_NAME","MYLIB.EN",NAME$;REFRESH_FLG=1

#### **Note:**  
REFRESH_FLG=1 is **_not_** necessary **_if_** the _Auto Refresh_ attribute is turned **_On_** in the Panel Header.  
  
**_Example 3:_** |  For **_attached_** queries: Normally, attached queries do not require any code. If a query panel is assigned to a control, NOMADS provides a query button (or looks for a **Shift F2**) to invoke the query and will process it automatically. However, you may want to process additional logic in conjunction with the query. In this case, assign a query program to the control. The program can do the additional logic, as well as invoke the query. The following is an example of a query program that invokes different queries depending on a condition:

> PROCESS_PRODUCT_QUERY:   
>  IF ProductCode="F"   
>  THEN PROCESS "PRODF_QRY","MYLIB.EN",QRY_VAL$  
>  ELSE PROCESS "PRODX_QRY","MYLIB.EN",QRY_VAL$   
>  EXIT

For queries associated with a control, NOMADS uses the reserved variable QRY_VAL$ to pass the value of the control to the query and back.  
**_Example 4:_** |  For **_attached_** queries: If you want to include more complex programming to manipulate the query value before and after invoking the query, you must load **[QRY_VAL$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#qryval)** with the value you want to be loaded in the associated control:

> Process_Query:  
>  WorkVal$=QRY_VAL$ ! Get the current value of the control  
>  ! Manipulate WorkVal$ value however you want  
>  PROCESS "MY_QUERY","MYLIB.EN",WorkVal$ ! Start & return value  
>  ! Manipulate WorkVal$ return value however you want  
>  QRY_VAL$=WorkVal $ ! value is loaded back into the control  
>  EXIT

If you process your own custom query panel rather than a NOMADS query panel, you can invoke it in the same way, being sure to use QRY_VAL$ to retrieve and reload the query control. Keep in mind that when you process your panel, the starting/return argument is passed to the panel as ARG_1$, and your panel logic must load ARG_1$ with the return value before exiting the query panel and returning to your program.  
**_Example 5:_** |  Using a _**single query** _to load _**multiple controls**_ into a NOMADS File Maintenance panel: When you define a query, you can specify a formula for your return value that can return a string containing the values for multiple controls. To load multiple controls using a single query, you can assign a query program to the first control that will invoke the query and parse the return value to load the controls. The following is an example of a query program that will load three key segments into a NOMADS File Maintenance panel:

> Process_SalesData_Query:  
>  ! Build the starting value for the query  
>  KeyVal$=PAD(SDT_Smn_ID$,3,$00$)+SDT_Year$+SDT_Month$  
>  ! Invoke the query using the starting value  
>  PROCESS "SDTQRY","",KeyVal$  
>  ! Parse the value returned in KeyVal$ into the control variables  
>  ! Note that the control with the query must be loaded using QRY_VAL$  
>  ! _kcnt, _numkeys and _enable_flg are NOMADS File Maintenance variables  
>  IF KeyVal$<>""  
>  THEN QRY_VAL$=STP(KeyVal$(1,3),1,$00$);  
>  SDT_YEAR$=KeyVal$(4,4);  
>  SDT_MONTH$=KeyVal$(8,2);  
>  _kcnt=_numkeys,_enable_flg=1,refresh_flg=1  
>  RETURN

If you wish to invoke the query using a **_separate button_** rather than assigning the query program to the Multi-Line, the code for the button _On Change_ logic is slightly different:

> Process_SalesData_Query:  
>  ! Build the starting value for the query  
>  KeyVal$=PAD(SDT_SMN_ID$,3,$00$)+SDT_YEAR$+SDT_MONTH$  
>  ! Invoke the query using the starting value  
>  PROCESS "SDTQRY","",KeyVal$  
>  ! Parse the value returned in KeyVal$ into the control variables  
>  ! _kcnt, _numkeys and _enable_flg are NOMADS File Maintenance variables  
>  IF KeyVal$<>"" \  
>  THEN SDT_SMN_ID$=STP(KeyVal$(1,3),1,$00$);  
>  SDT_YEAR$=KeyVal$(4,4);  
>  SDT_MONTH$=KeyVal$(8,2);  
>  _kcnt=_numkeys,_enable_flg=_numkeys,_EOM$=$0D$;  
>  PERFORM "*win/flmaint;find_rec";  
>  refresh_flg=1  
>  RETURN  
  
## Switching Modes: Query+ vs. Classic Query

Query+ mode is the default mode. You can use the **[QueryProgram$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querypgm)** property of the %NOMADS object to set the mode:

|  **_To Use Classic Query:_** |  Set %NOMADS'QueryProgram$="*winqry"  
---|---|---  
|  **_To Use Query+:_** |  Set %NOMADS'QueryProgram$="*winqry2"  
  
It is also possible to force an individual query to be displayed in **_Classic_** mode by selecting the _Use Classic Query_ option on the **Query Header Definition[Options](Query%20Header.htm#options)** tab. See **[Use Classic Query](Query%20Header.htm#useclassic)**.
