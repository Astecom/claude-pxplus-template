# Webster+ HTML Merge/Bind Object

**Short Codes**|   
---|---  
  
Below is a list of the short codes supported by Webster+. For examples of some commonly used short codes, see **[Short Codes Examples](Webster%20Code%20Examples.md)**.

Some short codes have contents associated with them. When a short code requires contents, the contents will be represented by the _ellipsis_ (****) between the starting short code and its terminator**[/**_code_**]** , where _code_ is the short code being terminated.

If desired, developers can create their own **[User-Defined Short Codes](Short%20Codes.htm#usercodes)**.

#### **Note:**  
Any short code or option whose first character is an **!** (_exclamation_ _point_) will be treated as a comment and ignored.  
  
If a short code cannot be properly resolved, it will display as white text against a red background. You can view additional information about the issue by hovering the mouse pointer over the short code.

**Short Code** |  **Description** |  **Options**  
---|---|---  
[**addcalc**  _var_] |  Can be used to add a calculation to a previously defined variable field in the **_page_**. The calculation will be done locally on the browser to set/change the value of the specified variable based on a formula and other fields. To specify fields in a grid, you must prefix the field name with the name of the grid, a **:** (_colon_), then the name of the field. When referencing fields from a grid, if the targeted _var_ is **_not_** also in the same grid, the grid columns will be totaled during the computation. If **_both_** the _var_ ** _and_** referenced field are on the same grid, then the value for the same row will be used. To specify the value for columns in a list box, you must prefix the field name with the name of the list box, a **:** (_colon_), then the column number. This will provide you the sum total of the column specified.

#### **Note:**  
Unlike the grid, you cannot reference a list box column within the list box itself.

Unlike the **calc** **=** option where all variables used in the computation must have been previously defined, using **addcalc** allows calculations to be added to controls later in the form. The **calc=** option is **_required_**. _(Support to provide the sum of a column from a list box was added in PxPlus 2024.)_ |  **[calc=_xxx_](Short%20Code%20Options.htm#calc)**  
[**addevent**  _field_ ] |  Can be used to add additional events to previously defined input fields. This can be useful to add events to fields from generic "included" sections on the page where you cannot easily edit/change the field definition. |  **[event=_xxx_](Short%20Code%20Options.htm#event)**  
[**bind** _expression$_] |  Can be used to insert dynamic "bindable" page data from a string expression into the form. The value derived from evaluating the _expression_ can contain any desired HTML with/without Webster+ short codes to be inserted into the page.

#### **Note:**  
Care should be taken when writing an expression to avoid HTML special characters. To escape HTML special characters, use the **[CVS( )](../functions/cvsextend.md)** function with HTML as the output data format.

|   
[**button** ][/**button**] |  Inserts a button. Generally, an **event** =_xxx_ option is specified to indicate what event is to occur when the button is pressed. Specifying a **link** _=__xxx_ will result in the targeted URL being presented. If the **text** =_xxx_ is provided but neither **_event_** nor **_link_** is specified, pressing the button will generate an event based on the text value in lowercase, replacing all spaces with underscores in the event name. For example, a button with no event or link specified but has **text** ="Save File" will generate a "save_file" event. If the **text** = is not provided, nor the event or link, nothing will occur when pressing the button. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[disabled](Short%20Code%20Options.htm#disabled)**  
**[dropmenu=_xxx_](Short%20Code%20Options.htm#dropmenu)  
[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)  
[type=_xxx_](Short%20Code%20Options.htm#type)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**chart**  _var_ ] |  Inserts the chart identified by the name indicated in the **chart** =_xxx_ option from the specified _query_. The **event** =_xxx_ , if present, will be generated when the user touches/clicks on a portion of the chart to select it. The variable identified by _var_ __ will receive the set number, point number, set name and point name, each separated by a tab ($09$) character, corresponding to the portion of the chart selected. Chart size is **_required_**. |  **[chart=_xxx_](Short%20Code%20Options.htm#chart)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[query=_xxx_](Short%20Code%20Options.htm#query)  
[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
[**checkbox**  _var_ ][/**checkbox**] |  Inserts a check box. The value of _var_ specifies the related variable to receive and set the check box value. You can specify an On and Off value for the check box if desired. Default values, if not specified, are Off=**0** or On=**1**. For a Tri-state box, include an "**other** =_xxx_ " value. Include an **onright** option to have the check box to the right of the text. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[disabled](Short%20Code%20Options.htm#disabled)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[locked](Short%20Code%20Options.htm#locked)**  
**[off=_xxx_](Short%20Code%20Options.htm#off)**  
**[on=_xxx_](Short%20Code%20Options.htm#on)**  
**[onright](Short%20Code%20Options.htm#onright)**  
**[other=_xxx_](Short%20Code%20Options.htm#other)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[usefile=_xxx_](Short%20Code%20Options.htm#usefile)**  
**[validate](Short%20Code%20Options.htm#validate)**  
**[value=_xxx_](Short%20Code%20Options.htm#value)**  
[**col** ][/**col**] |  Used between the **[[list]](Short%20Codes.htm#list)** and **[/list]** short codes to define the columns to display. If a **source=**_xxx_ option is present, then the value of that field from the source file/list is displayed. If no **source** =_xxx_ clause is present, you can follow the **[col]** short code with the HTML (and short codes) to be evaluated and output in the column for each record. |  **[format=_xxx_](Short%20Code%20Options.htm#format)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[nosort](Short%20Code%20Options.htm#nosort)**  
**[sort=_xxx_](Short%20Code%20Options.htm#sort)**  
**[source=_xxx_](Short%20Code%20Options.htm#source)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[ttl=_xxx_](Short%20Code%20Options.htm#ttl)**  
**[width=_xxx_](Short%20Code%20Options.htm#width)**  
[**css**]...[/**css**] |  Inserts the contents of the short code into the CSS included with the page. |   
[**cssfile** ] |  Inserts a CSS file link into the HTML header. |  **[file=_xxx_](Short%20Code%20Options.htm#file)**  
[**data** ][/**data**] |  Used to provide inline definition for values in a list where the list data is generally static. If a **text** =_xxx_ option is specified, its value will be used to define the value for the list. See **[Data Specifications](Short%20Codes.htm#data_spec)**. |  **[colsep=_xxx_](Short%20Code%20Options.htm#colsep)**  
**[rowsep=_xxx_](Short%20Code%20Options.htm#rowsep)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[valsep=_xxx_](Short%20Code%20Options.htm#valsep)**  
**[****depends** _condition_ **opt...]******|  Allows the inclusion of logic on the Web page that will control the display and operation of the various controls based on a condition. **_Example:_** If you wanted a delete button (name del_button) not visible unless the clientid$ field is set, your code could include: [depends clientid$="" hide=del_button invert] This logic will then be built into the generated Web page such that it executes locally without server involvement. The "invert" option tells the system that the inverse option is to occur when the condition is false (e.g. the del_button will be shown when clientid$ not null). Valid options are: **hide=**  _controlNames_ **show=**  _controlNames_ **disable=**  _controlNames_ **enable=**  _controlNames_ **_Where:_** _controlNames_ is a comma-separated list of control names that will be effected. Only one occurrence of each of the options (hide, show, disable, enable) is allowed. The _controlNames_ can also start with an ***** (_asterisk_) followed by a class name to indicate all controls which belong to the specified class are to be effected (e.g. **hide=*sales ==** could be used to hide all controls that have the class "sales").

#### **Note:**  
Care should be taken when writing a condition to avoid HTML special characters. To escape HTML special characters, use the **[CVS( )](../functions/cvsextend.md)** function with HTML as the output data format.

_(The [depends] short code was added in PxPlus 2023 Update 1.)_ |  ****  
[**div** ][/**div**] |  Provides a simple means to wrap HTML within a **< div>** tag, which then may be stylized by **class** , **size** or **tip**. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**dragitem**  _value_ ..][/**dragitem**] **_or_** [**dropitem**  _value_ ..][/**dropitem**] |  Defines the items to appear in a drag and drop list. You can use **[dragitem]** or **[dropitem]** interchangeably. See **[Drag and Drop Lists](Webster%20Drag%20Drop%20Lists.md)**. _(The [dragitem] and [dropitem] short codes were added in PxPlus 2022.)_ |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[symbol=_xxx_](Short%20Code%20Options.htm#symbol)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)  
[value=_xxx_](Short%20Code%20Options.htm#value)**  
[**draglist**  _var_ ..][/**draglist**] **_or_** [**droplist**  _var_ ..][/**droplist**] |  Inserts a box that contains a series of items that can be dragged and dropped to another drag and drop list or rearranged within the box itself. The parameter _var_ must be a numeric variable that specifies the related variable to receive the memory file that contains the list of items in the box. The contents of the box can be defined by the drag and drop list box source options **query** _=xxx_ or **program** _=xxx_ or by inline data consisting of **[dropitem]** short codes. If the data comes from a program, the program may be something similar to the following where several writes would fill in the memory file:

> enter DRAGLIST  
>  open (hfn,iol=DRAGLIST)"*memory*"  
>  write  
>  exit  
>  !  
>  DRAGLIST: \  
>  iolist Value$,Text$,Symbol$,Event$,Class$

If the data comes from either a query or a program, the records returned **_must_** contain the following five fields **_in order_** : Value used by the program  
Text to display (uses Value if null)  
**_(Optional)_** Symbol to precede text in display  
Event to generate if item selected  
Class used when displaying item A drag and drop list will generate its event whenever an item is dropped on it. You can use **[draglist]** or **[droplist]** interchangeably. See **[Drag and Drop Lists](Webster%20Drag%20Drop%20Lists.md)**. _(The [draglist] and [droplist] short codes were added in PxPlus 2022.)_ |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
[**dropon** =xxx](Short%20Code%20Options.htm#dropon)  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[itemclass=_xxx_](Short%20Code%20Options.htm#itemclass)**  
**[menu _=xxx_](Short%20Code%20Options.htm#menu)**  
**[program=_xxx_](Short%20Code%20Options.htm#program)**  
**[query=_xxx_](Short%20Code%20Options.htm#query)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**else**]****|  Separates the sections of a Web page to be processed based on a prior **[[if]](Short%20Codes.htm#if)** short code. |   
[**execute**  _code_] |  Executes the _code_ provided. |   
[**folder**  _var_][/**folder**] |  Used to define the portion of the page that is to be placed in a folder. Within the folder, the actual page contents **_must_** be started with a **[[tab]](Short%20Codes.htm#tab)** short code, which is used to define the tab title. Multiple formats of tabs are provided. See **[Folders/Tabs](Webster%20Folders%20Tabs.md)**. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
[**form** ][/**form**] |  Start of a form consisting of input controls. When the form data is submitted, it will be passed to the specified program. The _program_ specified can be a string variable or a quoted value. |  **[post=_xxx_](Short%20Code%20Options.htm#post)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
[**grid**  _var_ ..][/**grid**] |  Inserts a grid. The value of _var_ must be a numeric variable that will contain the handle to a memory file used to load/access the values in the grid. Each record in the memory file will represent one row in the grid, with fields in the record providing the cell contents. If a **program** =_xxx_ is provided, it will be called and passed the variable specified and an optional string, which can be set to define the grid. The program is responsible to create and load the memory file with the initial contents of the grid and optionally define the columns. Between the **[grid]** and **[/grid]** short codes must be one or more **[[col]](Short%20Codes.htm#col)** short codes defining the columns in the grid. See **[Using Grids in Webster+](Using%20Grids%20in%20Webster.md)**. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[file=_xxx_](Short%20Code%20Options.htm#file)**  
**[gridlines=_xxx_](Short%20Code%20Options.htm#gridlines)  
[hdrclass _=xxx_](Short%20Code%20Options.htm#hdrclass)  
[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[nosizing](Short%20Code%20Options.htm#nosizing)  
[nosort](Short%20Code%20Options.htm#nosort)  
[program=_xxx_](Short%20Code%20Options.htm#program)**  
**[query=_xxx_](Short%20Code%20Options.htm#query)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
[**hide**  _var_ _..._] |  Inserts the contents of the specified value in a hidden form field. If a **_value_** option is specified, the variable will also be set to the value specified. |  **[event=_xxx_](Short%20Code%20Options.htm#event)  
[secure](Short%20Code%20Options.htm#secure)  
[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[value=_xxx_](Short%20Code%20Options.htm#value)**  
[**html**  _asis_][**/html**] |  Inserts the data between the **[html]** and its ending **[/html]** short code directly into the page. If you include the optional keyword _asis_ , then the text data between the short codes will be encoded as HTML. **_Example:_** If you wanted to include some bold text, you could code in the HTML input page: [html asis]This is bold[/html] **_OR_** [html]<b>This is bold</b>[/html] |   
[**html**  _value_] |  Inserts the contents of the specified _value_ as raw HTML into the page. If a **class** _,_**tip** or **size** option is specified, the data will be presented within a **< span>** tag. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[format=_xxx_](Short%20Code%20Options.htm#format)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**if**  _expression_][/**if**] |  Can be used to conditionalize the inclusion of parts of the Web page. The _expression_ is evaluated, and if it returns a non-zero result, processing of the page continues. If the result is zero, processing skips ahead to the **[/if]** short code. An **[[else]](Short%20Codes.htm#else)** short code can be used to provide both true (non-zero) and false (zero) sections of code to be processed. The **[if]** short code and associated **[else]** and **[/if]** can be nested as desired.

#### **Note:**  
Care should be taken when writing a condition to avoid HTML special characters. To escape HTML special characters, use the **[CVS( )](../functions/cvsextend.md)** function with HTML as the output data format.

|   
[**image** ] Can also use [**picture** ] if desired. |  Inserts the picture found at either the **url** =_xxx_ specified or the **file** =_xxx_ specified into the page. The **size** =_xxx_ and either the **url** =_xxx_ or **file** =_xxx_ options are **_required_**. If desired, you can include a **link** or **event** option to process clicking on the picture. When using the **file** =_xxx_ option and the file is not found, the system will use the file found at **_noimage.png** (as per your application location and prefix rules) or if that does not exist ***webster/noimage.png**. When the picture is drawn, it will be scaled to fit within the designated region. When using the **nocopy** option, you can also use the **align** =_xxx_ option to control where to position the image. By default, the image will be centered within the region specified scaled up or down to fit. If you have an **event** =_xxxxx_ option on an **[image/picture]** short code, the event will occur when the image is clicked, and the system will place the name of the variable associated with the image (if any), followed by an **@** (_at sign_), the X/Y relative position within the image that the user clicked, a **/** (_slash_), and the dimensions of the image as displayed on the screen into the _changed$ variable. _(Support to return the image/picture click location and image size was added in PxPlus 2023.)_ |  **[align=_xxx_](Short%20Code%20Options.htm#align)**  
**[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[file=_xxx_](Short%20Code%20Options.htm#file)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[nocopy](Short%20Code%20Options.htm#nocopy)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[url=_xxx_](Short%20Code%20Options.htm#url)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**include**  _filename_] |  Inserts the <body> contents of the specified file. The _filename_ can be either a literal (as in "myfile.htm") or a string variable. When using the **[[template]](Short%20Codes.htm#template)** short code, the _filename_ of ***** indicates where to insert the original page contents. If _filename_ is null (""), then nothing is included and the short code is ignored. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
[**input**  _var_ ] |  Inserts an input field. The value of _var_ specifies the related variable to receive and set the current value of the input. If a **size** = option is provided and has a height specified, the system will generate a **< textarea>** to allow for multiple lines of input; otherwise, a single line input field is created. The **format** = option _,_ **query** = option _,_ and using a numeric variable (_var_) are valid only for single line inputs. The change _event_ only occurs after input is complete and the user exits the field. When a **query** = option is specified, a lookup button is placed at the end of the input. Pressing this will launch the specified query in a popup frame, and if a value is returned, the input field will be updated and an event (if present) will be triggered. If a **file** =_xxx_ option is provided, the system will provide a suggested input list with either the primary key from the specified file or the field identified by the **source** = clause. For information on supported input types, such as "date", see the **type=**_xxx_ option. |  **[align=_xxx_](Short%20Code%20Options.htm#align)**  
**[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[dataclass=_xxx_](Short%20Code%20Options.htm#dataclass)  
[datalist=_xxx_](Short%20Code%20Options.htm#datalist)**  
**[default=_xxx_](Short%20Code%20Options.htm#default)**  
**[disabled](Short%20Code%20Options.htm#disabled)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[file=_xxx_](Short%20Code%20Options.htm#file)**  
**[format=_xxx_](Short%20Code%20Options.htm#format)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[len=_nnn_](Short%20Code%20Options.htm#len)**  
**[locked](Short%20Code%20Options.htm#locked)**  
**[query=_xxx_](Short%20Code%20Options.htm#query)**  
**[required](Short%20Code%20Options.htm#required)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[source=_xxx_](Short%20Code%20Options.htm#source)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[type=_xxx_](Short%20Code%20Options.htm#type)**  
**[uppercase](Short%20Code%20Options.htm#uppercase)**  
**[usefile=_xxx_](Short%20Code%20Options.htm#usefile)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**item** ][/**item**] |  Defines an item inside a **[[menu]](Short%20Codes.htm#menu)** or **[[menubar]](Short%20Codes.htm#menubar)** and defines the various menu items the user can select from. If a **target** =_xxx_ is not specified, the default target from the parent **[menu]** or **[menubar]** is used if present; otherwise, the default target will "same" and will cause the current page to be replaced. |  **[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**jsfile** ] |  Inserts a JavaScript file link into the HTML header. |  **[file=_xxx_](Short%20Code%20Options.htm#file)**  
[**link** ][/**link**] |  Inserts a hyperlink to the URL specified immediately following the link keyword (e.g. [link http://www.yahoo.com]). The data following the **[link]** short code or provided in a **text** =_xxx_ option is what will appear in the HTML. A **text=""** will result in the link itself appearing in the HTML. If desired, you can specify an **event** =_xxx_ instead of a link to have the system generate what looks like a hyperlink but fires an event instead. A **[link]** can have a "_page:xxxx_ " or "_program:xxxx_ " as the link specification instead of the normal URLs that start with "http:", "https:", "ftp:" or "mailto:". The keyword '_page_ ' is followed by a **:**  _(colon)_ and the name of the specified page to be loaded. The keyword _'program'_ is followed by a **:**  _(colon)_ and the name of the specified program to be loaded. Additional URL parameters can follow the page/program name separated by an **&**  _(ampersand)_ ; e.g. &_fieldname_ $=. Unlike other elements, the default is **target=_new_** so links by default will appear on a new tab/window. |  **[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**list**  _var_ ..][/**list**] |  Inserts a list box. The value of _var_ specifies the related string variable to receive and set the current selection in the list. The contents of the list box can be defined by the list box source (**query=** , **file=** , or inline data), and column definitions. See **[Data Specifications](Short%20Codes.htm#data_spec)**. Three types of lists can be generated. If there are multiple columns of data or any column has a title, a report style list is created. If only one column of data is present and there are no titles, a drop box will be created if no height is specified on the **size** =_xxx_ option; otherwise, a simple list box will be generated. A list box will generate an event when the current entry in the list is selected by double clicking or, in the case of a Report style list box, the user presses Enter while the list has focus. If you specify a **link** =_xxx_ , the system will open the link instead of processing an event. The **link** option may specify a URL with **%1** in the URL being replaced by the current list selection. Including the **target=popup** option will cause the link to appear in a popup frame. The **pagerows** =_nnn_ option can be used on a **[list]** short code, which includes a header and columns, to paginate output for a list. See **[Using List Boxes in Webster+](Using%20List%20Boxes%20in%20Webster.md)**. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[disabled](Short%20Code%20Options.htm#disabled)**  
**[default=_xxx_](Short%20Code%20Options.htm#default)**  
**[drop](Short%20Code%20Options.htm#drop)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[file=_xxx_](Short%20Code%20Options.htm#file)**  
**[gridlines=_xxx_](Short%20Code%20Options.htm#gridlines)  
** [**hdrclass** _=xxx_](Short%20Code%20Options.htm#hdrclass)  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[nosizing](Short%20Code%20Options.htm#nosizing)  
[nosort](Short%20Code%20Options.htm#nosort)  
[pagerows=_nnn_](Short%20Code%20Options.htm#pagerows)  
[program=_xxx_](Short%20Code%20Options.htm#program)**  
**[query=_xxx_](Short%20Code%20Options.htm#query)**  
**[queryif=_xxx_](Short%20Code%20Options.htm#queryif)  
[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[validate](Short%20Code%20Options.htm#validate)**  
**[value=_xxx_](Short%20Code%20Options.htm#value)**  
**[variable](Short%20Code%20Options.htm#variable)**  
[**map**  _location_] |  Used to insert a Google map directly into the page. The mapped _location_ can be either the name of a variable that the underlying application will set to an address or a fixed string, such as "25 Centurian Blvd, Markham, Ont". If a variable is specified, its value and any changes to its value made by the application will be reflected in the map. The **key** =_xxxxxx_ option is required and is used to pass your Google API access key. The location should consist of street address, city, state/province/region, and country (all comma separated). The map will be centered on this position. By default, the zoom level will be set to 12, which provides resolution of a few blocks. In addition, the map will be responsive and allow the user to zoom, pan, set to full screen, along with most other Google map capabilities. If you include the option **static** , the map will be a fixed image. _(The [map] short code was added in PxPlus 2022.)_ |  **[id _=xxx_](Short%20Code%20Options.htm#id)  
[key=_xxxxxxxxx_](Short%20Code%20Options.htm#key)  
[size=_xx/xx_](Short%20Code%20Options.htm#size)  
[static](Short%20Code%20Options.htm#static)  
[zoom=_xx_](Short%20Code%20Options.htm#zoom)**  
[**menu** ]...[/**menu**] |  Used to define a menu, which can either be always visible on the screen or displayed in response to a right click. When used as a right click menu, the **[menu]** short code **_must_** have both an **id** =_xxx_ and a **hide** option specified. The object for which you want the menu to be associated with **_must_** have a **menu** =_xxx_ option specifying the **id** of the menu. To define the menu, you need to supply a series of **[[item]](Short%20Codes.htm#item)** or subordinate **[menu]** short codes. Alternatively, you can define a menu external of your HTML page in the system menu tables and include a **menu** =_xxx_ option that defines the key to the menu. The **text** =_xxx_ or plain text following the short code is only used when defining a sub-menu. The **target** =_xxx_ option, if specified, defines the default target for all subordinate items in the menu.

#### **Note:**  
A special **AddLine** CSS class is provided to insert a line under the menu element if desired.

|  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[hide](Short%20Code%20Options.htm#hide)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[menu=_xxx_](Short%20Code%20Options.htm#menu)**  
**[noborder](Short%20Code%20Options.htm#noborder)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**menubar** ]...[/**menubar**] |  Used to define a menu bar. It functions the same as **[menu]** described above but appears as a bar across the page with the items/sub-menu selections lined up horizontally and sub-menus appearing vertically below the bar. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**meta** ] |  Inserts whatever is supplied () as a **< meta>** tag in the head of the resultant page. A typical use would be to set a page refresh interval using a**meta** short code, as in: [meta http-equiv='refresh' content='5'] **_Where:_** The '5' indicates the number of second between refreshes. |   
[**msg** ] |  Inserts the contents of the message library entry specified into the HTML. The ****should consist of the parameters to pass to the**[MSG( )](../functions/msg.md)** function. This effectively means [msg "Missing",x$] is the same as [bind (MSG("Missing",x$))]. |   
[**picture** ]  
  
Can also use [**image** ] if desired. |  Inserts the picture found at either the **url** =_xxx_ specified or the **file** =_xxx_ specified into the page. The **size** =_xxx_ and either the **url** =_xxx_ or **file** =_xxx_ options are **_required_**. If desired, you can include a **link** or **event** option to process clicking on the picture. When using the **file** =_xxx_ option and the file is not found, the system will use the file found at **_noimage.png** (as per your application location and prefix rules) or if that does not exist ***webster/noimage.png**. When the picture is drawn, it will be scaled to fit within the designated region. When using the **nocopy** option, you can also use the **align** =_xxx_ option to control where to position the image. By default, the image will be centered within the region specified scaled up or down to fit. If you have an **event** =_xxxxx_ option on an **[image/picture]** short code, the event will occur when the image is clicked, and the system will place the name of the variable associated with the image (if any), followed by an **@** (_at sign_), the X/Y relative position within the image that the user clicked, a **/** (_slash_), and the dimensions of the image as displayed on the screen into the _changed$ variable. _(Support to return the image/picture click location and image size was added in PxPlus 2023.)_ |  **[align=_xxx_](Short%20Code%20Options.htm#align)**  
**[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[file=_xxx_](Short%20Code%20Options.htm#file)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[nocopy](Short%20Code%20Options.htm#nocopy)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[url=_xxx_](Short%20Code%20Options.htm#url)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**radio**  _var_ ][/**radio**] |  Inserts a radio button. The value of _var_ specifies the related variable to receive and set the radio button value. Multiple radio buttons are tied together by using the same _name_. The value returned by the radio button is set by _value_. If no _value_ is specified, the value returned will be the numeric index of the button based on preceding radio buttons of the same _name_. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[disabled](Short%20Code%20Options.htm#disabled)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[locked](Short%20Code%20Options.htm#locked)**  
**[required](Short%20Code%20Options.htm#required)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[usefile=_xxx_](Short%20Code%20Options.htm#usefile)**  
**[value=_xxx_](Short%20Code%20Options.htm#value)**  
**[validate](Short%20Code%20Options.htm#validate)**  
[**rem** ] |  Can be used to insert a remark into your HTML page. Its contents are ignored. |   
[**report**  _reportname_ **param** :_name_ =_value_] |  The **[report]** short code will take the report provided in _reportname_ and insert it as HTML into the page. The _reportname_ can consist of the simple name of the report (in which case the reports sub-directory will be searched) or a full pathname to the report. The report definition file suffix **_.pvr_** is optional. To pass parameters to the report, include them as options in the short code in the form **param** :_name_ =_value_ where _name_ is the name of the parameter and _value_ is the value desired. The system takes any option starting with **param:** and assumes it is defining a report parameter and value to assign to the parameter. **_Example:_** The following **[report]** short code runs the report "clientlist", setting the parameter "fromclient$" to 100000 and the parameter "toclient$" to 200000. [report clientlist size=auto class=border,fill_AliceBlue param:fromclient$=100000 param:toclient$=200000] _(The [report] short code was added in PxPlus 2024.)_ |  **[class=_xxx_](Short%20Code%20Options.htm#class)  
[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)  
[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**row**  _xxxxx_ ][/**row**] |  Used to define a prompt/value pair as used by the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. The value of _xxxxx_ is the prompt and whatever is in the will be used to define the input entry. This will create a row of the prompt and input that is responsive to changes in the screen size. If a **class** is specified, it is applied to the prompt portion only. If desired, you can include additional short codes in the prompt; however, you must make sure that you escape the square brackets using a backslash, as in: **[row "\\[symbol user\\]UserName"]**. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
[**script**][**/script**] |  Inserts the text between the **[script]** and its ending **[/script]** short code directly into the page inside a **< script>** HTML tag. |   
[**section**  _xxx_][**/section**] |  Can be used to create blocks of text/controls that will occupy a specified portion of the page width. The value of _xxx_ can be **whole** , **half** , **third** , **quarter** or **flex** , indicating how wide the section can be. The class, if specified, will apply to everything inside the section. Multiple sections can be placed across the page until the available space is occupied at which point further sections will start below. For example, you can have 2 half sections, 3 third sections, 4 quarter sections or 1 half and 2 quarter sections. A **flex** section will occupy the width of the largest element inside the section; thus, the number of flex elements that can appear across the page will vary based on contents. The **maxwidth** =_nnn_ and **minwidth** =_nnn_ options can be used to specify the maximum and minimum size of a section. |  **[class=_xxx_](Short%20Code%20Options.htm#class)  
[maxwidth=_nnn_](Short%20Code%20Options.htm#maxminwidth)  
[minwidth=_nnn_](Short%20Code%20Options.htm#maxminwidth)**  
[**security** ][/**security**] |  Requires any of the specified security class(es) in order to include the data up to the ending code. If no classes are specified, then the system assumes that the only requirement was to have the user sign on with a valid user ID and Password. If no ending short code is present and the security requirements fail, the complete HTML will be replaced with a security failure error message. |  **[required=_xxx_](Short%20Code%20Options.htm#required)**  
[**show**  _value_] |  Inserts the contents of the specified _value_. If a **class** _,_**tip** or **size** option is specified, the data will be presented within a **< span>** tag. The **value=** option can be used to define the initial value of the field. |  **[calc=_xxx_](Short%20Code%20Options.htm#calc)**  
**[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[format=_xxx_](Short%20Code%20Options.htm#format)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[validate](Short%20Code%20Options.htm#validate)**  
**[value=_xxx_](Short%20Code%20Options.htm#value)**  
[**subttl**][**/subttl**] |  Can be used to define a sub-title for a portion of the page. The contents of the short code will be displayed using the HTML class of '**fm_subttl** ', which by default is bold font in a grey rectangle. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**symbol**  _icon_] |  Inserts 'FontAwesome 4' character/icon at this position. For a list of symbols, visit [https://fontawesome.com/v4/icons/](https://fontawesome.com/v4/icons).

#### **Note:**  
When specifying the symbol name, do **_not_** include the leading "fa-".

|  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[opt=_xxx_](Short%20Code%20Options.htm#opt)**  
[**tab** ][/**tab**] |  Used to identify the contents of the various tabs inside a folder. The data between the start of the **[tab]** short code and its ending **[/tab]** short code defines the tab contents (i.e. the text on the tab). Page contents following the **[tab][/tab]** sequence up to the next **[tab]** or **[[/folder]](Short%20Codes.htm#folder)** short code will be placed on that tab. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
[**template**  _filename_] |  Indicates that the contents of the page are to be inserted into the HTML found in the _filename_ specified. Templates can be cascaded; that is, a file loaded as a template can itself specify a template. To avoid infinite recursion, there is a 10-level deep limit on templates. If the primary file being bound does not specify a template, the system will check **[%Webster'Template$](Webster%20Object%20Properties.htm#template)**, which can be set to define a default template to use. |   
[**tree**  _var_ ..][/**tree**] |  Inserts a list box. The value of _var_ specifies the related variable to receive the channel number containing the tree contents. Whenever the form containing the tree view is submitted, the string variable of the same name (i.e. tree1 and tree1$) will contain the currently selected item in the tree with each level in the tree being separated by a separator character for the file (typically SEP). Three special classes can be specified for the tree view using the **class=** option (see **[Tree View Classes](Webster%20Defined%20Classes.htm#treeview)**): |  **cbx** |  Entries contain check boxes. Upper-level entries check boxes will show the cumulative state of lower levels.  
---|---  
**lines** |  Lines will be drawn between related items on each level.  
**button** |  Instead of a triangular marker indicating each grouping, a button with a **+**_(plus)_ or ****_(minus)_ will be shown.  
  
The tree view contents are defined and supplied by the source (**query=** , **file=** , **program=** , or inline data). The records in the file (or query output) will be used to populate the tree with the first field being the topmost level, the second field the next level, and so on. Should the tree view have check boxes, the last field in the file contains the check box state to be displayed or returned.

If the **event=** is specified, it will be triggered whenever an item is double clicked or, if check boxes are present (**cbx** class), whenever a check box is changed. By default, the **target=** for the event will be same page.

#### **Note:**  
When setting focus to a tree view using the **['Focus( )](Webster%20Object%20Methods.htm#focus)** method, you **_must_** use the associated string variable name, not the numeric variable name defined in the short code.  
  
**_Example:_**  
  
For [tree MyTree], you would use %Webster'Focus("MyTree$").

_(The [tree] short code was added in PxPlus 2023.)_

**[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[file=_xxx_](Short%20Code%20Options.htm#file)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[program=_xxx_](Short%20Code%20Options.htm#program)**  
**[query=_xxx_](Short%20Code%20Options.htm#query)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[ttl]****[/ttl]** |  Can be used to define a page title for the page. If no HTML **< title>** tag exists on the page, the first **[ttl]** contents will be used. The contents of the short code will be displayed using the HTML class of '**fm_ttl** ', which by default is bold, larger (120%) font in a grey rectangle. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[link=_xxx_](Short%20Code%20Options.htm#link)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[text=_xxx_](Short%20Code%20Options.htm#text)**  
**[tip=_xxx_](Short%20Code%20Options.htm#tip)**  
**[upload** _var$_**][/upload]** |  Creates a file upload button/drop region on the form. The variable (_var_ _$_) provided defines the name of a variable that is to receive the pathname of the file(s) that have been uploaded. Each file name will be terminated by a line feed ($0a$), and the variable will initially be set to null "". Generally, this short code will have an **event=** associated with it that will be generated once a file has been uploaded. The contents between the **[upload]** and **[/upload]** will be displayed on screen to designate the upload button/drop area. |  **[class=_xxx_](Short%20Code%20Options.htm#class)**  
**[event=_xxx_](Short%20Code%20Options.htm#event)**  
**[id=_xxx_](Short%20Code%20Options.htm#id)**  
**[size=_xx/xx_](Short%20Code%20Options.htm#size)**  
**[target=_xxx_](Short%20Code%20Options.htm#target)**  
**[ttl=_xxx_](Short%20Code%20Options.htm#ttl)**  
[**usefile** ]__|  Can be used to define the default _usefile_. |   
  
##  Data Specifications

For controls such as lists where the system needs a data set, it should be provided using a **[[data][/data]](Short%20Codes.htm#data)** short code set.

The **[data]** short code supports three options:

**colsep** =_colsep_ |  **_Where:_**  
  
_colsep_ indicates the character sequence between the columns for multi-column lists.  
---|---  
**sep** =_rowsep_ |  **_Where:_**  
  
_rowsep_ indicates the character sequence between the various rows in the data. If no _rowsep_ is provided, then each line following the **[data]** short code up to the **[/data]** tag will be considered a unique row.  
**src** =_query_ |  **_Where:_**  
  
_query_ contains the query name and library to use to load the list from.  
  
The **[/data]** tag is optional as data will terminate on the **[/list]**.

For multi-column lists, a series of **[[col]](Short%20Codes.htm#col)** short codes should be provided which define the columns. The **[col]** options are:

|  **size** =_size_ |  The width portion of the _size_ is used to define column width.  
---|---|---  
|  **class** =_class_ |  To define the class to use on the column data.  
  
**_Example:_**

> [list Cars$][data rowsep=/]Ford/Gm/Audi/Volvo/[/data][/list]

##  User-Defined Short Codes

If desired, developers can create their own short codes by starting a short code with an ***** (_asterisk_). The text following the ***** (_asterisk_) up to the first space must contain the name of a program, and optional entry point, that will be performed. The logic will be passed in the rest of the short code in the variable **_code$**. The logic should append the desired HTML to the variable **_OUT$**.

For the purposes of the user-defined short codes, the following methods for the current object (in **_obj**) can be invoked (they will share current variables with caller):

**Method** |  **Description**  
---|---  
**'Get_Form_var( )** |  Extract form variable from input and load options from **_code$** into **_opt$[ ]** array.  
**'Get_Options( )** |  Load options from **_code$** into **_opt$[ ]** array.  
**'Code_Error( )** |  Report error using text loaded in the variable **_err$**.  
  
**_Example:_**

> A short code of [*prog1 Betty$ class=Boop tip="Cartoons are her life"] would **[PERFORM](../directives/perform.md)** the program "prog1", passing in the rest of the short code "Betty$ class" in the variable **_code$**.

> The program could either manually parse the rest of the short code or invoke **_obj'Get_Form_var( )** to define the variable BETTY$ on the form and load **_opt$["class"]** and **_opt["tip"]** from the short code. The program could then append whatever HTML it desired to **_OUT$**.

## See Also

**[Short Code Options](Short%20Code%20Options.md)  
[Short Codes Examples](Webster%20Code%20Examples.md)**
