# Webster+ HTML Merge/Bind Object

**Short Code Options**|   
---|---  
  
Many of the options are common between short codes, such as size and class, whereas some options are used for specific short codes only.

For examples of some commonly used short codes, see **[Short Codes Examples](Webster%20Code%20Examples.md)**.

Below is a list of all the options supported by Webster+.

**Option** |  **Description**  
---|---  
**align** =_xxx_ |  Allows specification of the alignment. When used with a **[[col]](Short%20Codes.htm#col)** short code to define a column in a list, valid options are "left", "right", and "center". When used with a **[[picture]](Short%20Codes.htm#picture)**, it can include one or two words: the first indicating the horizontal alignment ("left", "center" or "right") and the second being the vertical alignment ("top", "center" or "bottom"). If only one word is provided, the second is assumed to be "center".  
**begin** =_xxx_ |  Defines the starting key to be used when loading a file into a list box. If omitted, the data will start from the first record of the file.  
**calc=**_xxx_ |  Defines a simple calculation that can be done **_locally_** on the browser to set/change the value of the input based on a formula and other fields. To specify fields in a grid, you must prefix the field name with the name of the grid, a **:** (_colon_), then the name of the field. When referencing fields from a grid, if the input with the **calc=** specified is **_not_** also in the same grid, the referenced grid columns will be totaled during the computation. If **_both_** the input **_and_** referenced field are on the same grid, then the value for the same row will be used. To have the system provide the sum of a column from a list box, you must prefix the field name with the name of the list box, a **:** (_colon_), then the column number.

#### **Note:**  
The calculation specified must be in JavaScript. Care should be taken when writing a calculation to avoid HTML special characters. To escape HTML special characters, use the **[CVS( )](../functions/cvsextend.md)** function with HTML as the output data format.

_(Support to provide the sum of a column from a list box was added in PxPlus 2024.)_  
**chart** =_xxx_ |  Defines the name of the chart in the Query to be displayed.  
**class** =_xxx_ |  Defines the HTML class (CSS) to be applied to the item. The classes can be predefined either in a CSS file or in a dynamically created class. See **[Webster+ Defined Classes](Webster%20Defined%20Classes.md)**.  
**colsep** =_x_ |  Defines the character that separates the columns of data when accepting data from the source HTML. If omitted, the default is a TAB character. To use non-printable characters, define using (CHR(nn)) and in (CHR(1)) to use $01$ as separator character.  
**dataclass** =_xxx_ |  This option can be used on the **[[input]](Short%20Codes.htm#input)** short code and causes the system to look up the input characteristics based on the data class specified (i.e. Prompt, Length, Format, Tip, etc.). _(The dataclass option was added in PxPlus 2022.)_  
**datalist=**_xxx_ |  This option can be used on an **[[input]](Short%20Codes.htm#input)** short code to provide a delimited list of possible inputs. The user may choose from the list or enter any other variable.

#### **Note:**  
The UI of most browsers filter the list based in the current value of the input; thus, if the input consists of "A", then only those items starting with "A" will be shown. To show the full list, the input must be empty.  
  
**default=**_xxx_ |  This option can be used with an **[[input]](Short%20Codes.htm#input)** or **[[list]](Short%20Codes.htm#list)** short code to define the default/initial value for the field.

#### **Note:**  
This value is **_only_** set if the variable is empty (**""** for string variable or **0** for numeric).  
  
**disabled** |  Indicates that the control should be disabled.  
**drop** |  When used on a **[[list]](Short%20Codes.htm#list)** short code, a drop down list is generated, regardless of the data/column definitions.  
**dropmenu** =_xxx_ |  This option can be used on a **[[button]](Short%20Codes.htm#button)** short code to cause the inclusion of a drop arrow on the right edge of the button that will launch the menu specified by '_xxx'_. **_Example:_** [menu id=MenuID hide][item event=aaa]Option 1[item event=bbb]Option 2[item event=ccc]Option 3[/menu] [button event=do_button_stiff dropmenu=MenuID]Button Text[/button] Each option can have an event (or link) tied to it. The MenuID used in the button must match the ID= for a menu defined on the page. The menu can be used by multiple buttons. _(The dropmenu option was added in PxPlus 2022.)_  
**dropon** =_xxx_ |  This option can be specified on a drag and drop list and defines a comma-separated list of drag and drop lists into which its items can be dropped. If no **dropon** option is specified, then items on the drag and drop list can be dropped on any drag and drop list. See **[Drag and Drop Lists](Webster%20Drag%20Drop%20Lists.md)**. _(The dropon option was added in PxPlus 2022.)_  
**end** =_xxx_ |  Defines the highest key to be used when loading a file into a list box. If omitted, the file will be processed up to the end-of-file.  
**event** =_xxx_ |  Indicates that when the control gets changed or triggered, what event is to be sent to the program specified in the **[[form]](Short%20Codes.htm#form)** short code. The value '_xxx_ ' will be found in the variable __event$_ when the program is run. Event names starting with an ***** (_asterisk_) are reserved for system use. See **[Special Webster+ Events](Webster%20Events.md)**. If no value (=_xxx_) is supplied, the name of the control, if applicable, is used.

#### **Note:**  
The **event** option is not compatible with the **[link](Short%20Code%20Options.htm#link)** option.  
  
**field** =_fieldname_ |  Used to specify the name of the field from the table definition being used when referencing file/class field definitions.  
**file** =_path_ |  Defines the pathname of a file to be used to load a list box or the pathname to an image/picture to display. If used with an **[[input]](Short%20Codes.htm#input)** short code, it indicates the name of a file to be used to populate a list of suggested values to present to the user. A **[source=_xxx_](Short%20Code%20Options.htm#source)** can provide the name of the field to present; otherwise, the primary key of the specified file will be used.  
**filter** =_expression_ |  Defines a numeric expression to be applied to the data being loaded into a list. The expression will be evaluated on each entry in the list, and if the expression returns 0, the entry will be skipped.  
**focus** |  If present, indicates that this control is to receive focus when the form is presented. The control must not be locked or disabled.  
**format** =_xxx_ |  Provides the PxPlus format to use when displaying/accepting data in the field.  
**gridlines** =_xxx_ |  Use in a **[[list]](Short%20Codes.htm#list)** short code to indicate you want grid lines between the rows/columns of the grid. The value of '_xxx_ ' can be "horizontal" or "vertical". If no value is provided (i.e. just the option keyword of **gridlines**), then both are supplied.

#### **Note:**  
The system only looks at the first character of the option; thus, **gridlines** =_h_ is sufficient.  
  
**hdrclass** _=xxx_ |  Define the class for the header row in a **[[list]](Short%20Codes.htm#list)** or **[[grid]](Short%20Codes.htm#grid)**. _(The hdrclass option was added in PxPlus 2022 Update 1.)_  
**hide** |  Indicates that the item is to be hidden when the page is first displayed. Generally, this is only used if you have some custom CSS or JavaScript associated with the page or when you are defining a right-click/context menu.  
**id** =_xxx_ |  Allows for the specification of a specific HTML form ID for the control. This is useful when managing controls using CSS and is needed to identify a right-click/context menu.  
**index** =_xxx_ |  Defines the index to use when loading a file into a **[[list]](Short%20Codes.htm#list)**. If not specified, the primary index will be used.  
**itemclass** =_xxx_ |  Defines the HTML class (CSS) to be applied to each of the items in a drag and drop list. See **[Drag and Drop Lists](Webster%20Drag%20Drop%20Lists.md)**. The classes can be predefined either in a CSS file or in a dynamically created class. See **[Webster+ Defined Classes](Webster%20Defined%20Classes.md)**. _(The itemclass option was added in PxPlus 2022.)_  
**key** =_xxxxxxxx_ |  Allows specification of the Google Map API key alignment. For information about the key and its usage, see **[Google Maps Interface](../Extended%20NOMADS%20Objects/Google%20Maps%20Interface/Google%20Maps%20Interface%20Overview.md)**. _(The key option was added in PxPlus 2022.)_  
**len** =_nnn_ |  Specifies the maximum length of the input. If not specified, there will be no present maximum length allowed.  
**link** =_xxx_ |  Defines a URL to be opened, program to run, or page to display when the item is selected. The value of '_xxx_ ' can be one of the following: |  |  A URL, such as http://www.yahoo.com.  
---|---  
|  The keyword '_program_ ' followed by a **:** (_colon_) and the name of a program to run. If you want to pass values to this program, append a list of values in the form **& variable=value&variable=value**.  
|  The keyword '_page_ ' followed by a **:** (_colon_) and the name of the file containing the HTML for the page you want bound and rendered. As with _'program'_ above, you can pass variables to the page.  
  
When a link is used in conjunction with a **[[list]](Short%20Codes.htm#list)** column or input field, you can include $1 in the URL, which the system will replace with the column/field value.

#### **Note:**  
The **link** option is not compatible with the **[event](Short%20Code%20Options.htm#event)** option.  
  
**linkto** =_xxx_ |  This option can be used on a **[[show]](Short%20Codes.htm#show)** short code to indicate that the text is to be a hyperlink to the page specified by '_xxx_ ', passing it the name of the **field** =_xxx_ option and its value. Alternatively, '_xxx_ ' can contain a URL to a page to display or the keyword prefix of '_event:_ ' followed by an event name to be generated.  
**locked** |  Indicates that the **[[input]](Short%20Codes.htm#input)** control is locked and is set to read only. For check boxes and radio buttons, the control is rendered but cannot be altered by the user.  
**max** =_nnn_ |  Defines the maximum value that can be entered for a number **[[input]](Short%20Codes.htm#input)** control.  
**maxwidth** =_nnn_  
**minwidth** =_nnn_ |  These options can be used to specify the maximum and minimum size of a **[[section]](Short%20Codes.htm#section)** and are typically used with the **flex** section. _(The maxwidth and minwidth options were added in PxPlus 2023.)_  
**media** =_xxx_ |  Allows for the specification of the media type when including a CSS file using the **[[cssfile]](Short%20Codes.htm#cssfile)** short code.  
**menu** =_xxx_ |  For **[[input]](Short%20Codes.htm#input)** short codes, the **menu** =_xxx_ option defines the menu you want displayed when the user does a right click (context menu selection) on a control. The '_xxx_ ' value should be the ID of the menu you want displayed and must be included in the HTML. For **[[menu]](Short%20Codes.htm#menu)** short codes, the value of '_xxx_ ' defines the key to the system menu definition table, which will contain the menu definition.  
**min** =_nnn_ |  Defines the minimum value that can be entered for a number **[[input]](Short%20Codes.htm#input)** control.  
**noborder** |  Can be specified on a menu to indicate that no border is to be drawn around the border.  
**nocopy** |  Can be specified on a **[[picture]](Short%20Codes.htm#picture)** short code to create an image that cannot directly be copied using a right mouse click.  
**nosizing** |  Indicates that the report style list will not allow for column resizing. By default, all report style lists support column resizing.  
**nosort** |  Indicates that the report style list will not allow for column sorting. By default, all report style lists support column sorting when clicking the column header.  
**off** =_xxx_ |  Defines the value to be returned by a **[[checkbox]](Short%20Codes.htm#checkbox)** when the check box is Off.  
**on** =_xxx_ |  Defines the value to be returned by a **[[checkbox]](Short%20Codes.htm#checkbox)** when the check box is On.  
**onload** =_xxx_ |  This option can be specified on the **[[form]](Short%20Codes.htm#form)** short code to have the binding logic.  
**onright** |  Indicates that the check box or radio button is to the right of the text as opposed to the default where the text immediately follows the control.

#### **Note:**  
When specified, the check box/radio button will be floated to the right of the region; therefore, you should include a **[size=_xxx_](Short%20Code%20Options.htm#size)** to define the width.  
  
**opt** =_xxx_ |  This option is for use with the **[[symbol]](Short%20Codes.htm#symbol)** short code to provide additional options regarding the presentation of the symbol. Additional options include: |  _2x, 3x, 4x, 5x_ |  To increase size of the symbol.  
---|---  
_flip-horizontal  
flip-vertical_ |  To flip the symbol.  
_pulse_ |  To cause the symbol to rotate in pulses.  
_rotate-90  
rotate-180  
rotate-270_ |  To rotate the symbol.  
_spin_ |  To cause the symbol to spin.  
  
For information on some of these options, visit <https://www.w3schools.com/icons/fontawesome_icons_intro.asp>.  
  
**other** =_xxx_ |  Indicates that the **[[checkbox]](Short%20Codes.htm#checkbox)** has three states and provides the value to be returned when the check box is in the third state.  
**pagerows** =_nnn_ |  This option can be used on a **[[list]](Short%20Codes.htm#list)** short code, which includes a header and columns. It causes the output to be paged in the list as opposed to all data being presented. When specified, the value of _nnn_ defines the number of rows to display. A Page number selector will be included below the list. It shows the current page number being displayed and allows the user to select the desired page. See **[Adding Paginated Output](Using%20List%20Boxes%20in%20Webster.htm#pagination)**. _(The pagerows option was added in PxPlus 2023.)_  
**post** =_xxx_ |  Can be specified on the **[[form]](Short%20Codes.htm#form)** short code to have the system **_post_** the form data to a different server. Generally, the target would be the same server as that which returned the HTML page.  
**prefix** =_xxx_ |  Defines the prefix to be applied to the data when loaded into a **[[list]](Short%20Codes.htm#list)** from either a query or file. This is useful when the data being read may have the same name as fields on the page. When applied, make sure you include the prefix on any **_filter_** specification.  
**program** =_xxx_ |  When used on a **[[form]](Short%20Codes.htm#form)** short code, it defines the name of the program that will run when the form is submitted. When used on a **[[list]](Short%20Codes.htm#list)**, **[[tree]](Short%20Codes.htm#tree)** or **[[grid]](Short%20Codes.htm#grid)** short code, it indicates the name of a program to be CALLed to return a file containing the data to be displayed. When the program is called, it will be passed a variable to receive the *MEMORY* file channel number to be associated with the list or grid. In addition, it will be passed a string in the second parameter that the program can set to the column definitions. If this parameter is set, the column definitions defined will be added to any column definitions defined in the page. Finally, if any additional parameters are needed by the program to build the memory file, they may be included (comma separated) following the program name and will be passed in after the column definitions. When used on a **[[droplist]](Short%20Codes.htm#droplist)** short code, it indicates the name of a program to be CALLed to return a file containing the data to be displayed followed by any additional parameters you require to be passed to the program.  
**query** =_xxx_ |  Specifies the name of a NOMADS query that will be used. For information on defining a NOMADS query, see **[Defining a Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.md)**. When a Standard Query or Query List is launched, the _Print_ and _Download_ buttons on the Webster+ query page can be used to print the query data to a PDF or download it to a .CSV file. These buttons are not applicable to Drop queries. Column tips for numeric columns will display based on the **[Column Options](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Column%20Options.htm#tipval)** in the query definition. _(The query Print and Download buttons and column tip display were added in PxPlus 2024.)_ When used on a **[[list]](Short%20Codes.htm#list)** or **[[tree]](Short%20Codes.htm#tree)** short code, it defines the query that will load the list. If used on an **[[input]](Short%20Codes.htm#input)** short code, it defines the lookup query to be associated with the input. The format of the value is "library;query" (e.g. "scrnlib.en;custQry").

#### **Note:**  
Queries that display a Calculator, a Google map or an Open File selection dialog are also available in Webster+:  
  
query=*win/query.en;calc (displays a Calculator keypad)  
query=*win/query.en;map (displays a Google map)  
query=*win/query.en;openfile (displays an Open File selection dialog)  
  
**queryif** =_xxx_ |  This option can be added to a **[[list]](Short%20Codes.htm#list)** short code that has a query. The '_xxx_ ' must be a numeric/logical expression that will be evaluated and, if zero (false), will result in the suppression of the query. When suppressed, the column titles will appear; however, no data will be shown.  
**required** _=xxx_ |  Indicates that this field **_must_** be present. The system will not allow a panel to be posted to your underlying application if a required field has no data. When used on the **[[security]](Short%20Codes.htm#security)** short code, defines a comma-separated list of classes required.  
**rowsep** =_x_ |  Defines the character that separates the rows of data when accepting data from the source HTML. If omitted, the default is a Line Feed character. To use non-printable characters, define using (CHR(nn)) and in (CHR(1)) to use $01$ as separator character.  
**secure** |  This option can be used on a **[[hide]](Short%20Codes.htm#hide)** short code to tell the system to encrypt the value so it cannot be changed or seen in the resultant HTML. The value, as returned to the application, will be automatically encrypted/decrypted when exchanged.  
**size** =_xx**/** xx_ |  Used to define the size of the field. The format is _width/height_. Simple numeric values are taken as '**ch** ' units for width and '**em** ' units for height. If only the width is specified, the system will determine the height in order to fit the control.  
**skip** |  This option indicates that the control is to be skipped when tabbing through the form.  
**sort** =_xxx_ |  Can be used on a **[[col]](Short%20Codes.htm#col)** definition to indicate what field contains the value that the column should be sorted on. For example, if the data comes from a **[program=_xxx_](Short%20Code%20Options.htm#program)** , the value displayed may not be sortable; therefore, a secondary field value must be used to sort on (e.g. dates that may be displayed as "Today", "Yesterday", "Last Week").  
**source** =_xxx_ |  Can be specified on the **[[col]](Short%20Codes.htm#col)** short code to indicate which field from the input source (query or file) will be displayed. If used with an **[[input]](Short%20Codes.htm#input)** short code, it must be in conjunction with a **[file=_xxx_](Short%20Code%20Options.htm#file)** option to indicate the name of the field from the input file that contains the suggested values to present to the user.  
**static** |  Can be used on the **[[map]](Short%20Codes.htm#map)** to indicate that the map is to display as a fixed image as opposed to a dynamic Google map. _(The static option was added in PxPlus 2022.)_  
**step** =_nn_ |  Specifies the **step** valid for a numeric **[[input]](Short%20Codes.htm#input)** field.  
**symbol** =_xxx_ |  Can be used in the definition of a drag and drop item to declare the symbol to appear in front of the item's text. See **[Drag and Drop Lists](Webster%20Drag%20Drop%20Lists.md)**. _(The symbol option was added in PxPlus 2022.)_  
**target** _=xxx_ |  Used to indicate where the results of an _event=xxx_ or _link=xxx_ (or a **[[link]](Short%20Codes.htm#link)** short code) will be displayed. The value '_xxx_ ' can be one of the following: |  "_same_ " |  To have the output replace the current page.  
---|---  
"_new_ " |  To create a new tab/window.  
"_popup:ww_ _/hh_ " |  To create a popup-overlaid window whose width and height can be supplied using "_ww_ _/hh_ ". If no size is provided, the window will occupy 75% of the screen. If only one value is supplied, it will be used for width and height. Unlike **size** =_xx/xx_ , simple numeric values are considered the percentage of the screen (viewport) to occupy.  
  
By default, the target is "_new_ " to create a new page when processing a link and "_same_ " if processing an event.  
  
**text** =_xxx_ |  This option allows for simplified definition of the text for a **[[button]](Short%20Codes.htm#button)**, **[[checkbox]](Short%20Codes.htm#checkbox)** or **[[radio]](Short%20Codes.htm#radio)** to be included in the short code. When provided, the system uses the data provided in '_xxx_ ' as the contents of the control text as opposed to using the contents between the short definition and its terminator.  
**tip** =_xxx_ |  Floating tip to display when the mouse hovers over the control/text.  
**ttl** =_xxx_ |  Defines the column title for the column in a report style list.  
**type** =_xxx_ |  Defines the type of input for a **[[input]](Short%20Codes.htm#input)** short code. Supported types are "text", "number", "password", "email" and "date". Can also be used on a **[[button]](Short%20Codes.htm#button)** short code with possible values of "button" **_(default)_** , "submit" which indicates that when the user presses return, this button is to fire, or "reset" which resets/clears all the form data. For "date" types, the actual **type** = option defines how the date is to be passed to the underlying program and is consistent with the Date classes in NOMADS. A default **type** =_date_ provides a YYYYMMDD format. The actual format of the date as displayed by the browser, as well as the date selection routine, is a function of the browser and is based on either an OS or browser setting.  
**uppercase** |  Can be specified on a string **[[input]](Short%20Codes.htm#input)** field to force conversion of data to uppercase.  
**url** =_xxx_ |  Defines the URL name on a **[[link]](Short%20Codes.htm#link)** short code or the URL to the image for a **[[picture]](Short%20Codes.htm#picture)**.  
**usefile** =_xxx_ |  This option can be used in an input, check box or radio button to indicate that the control should take it characteristics (format, tip, etc.) from the field of the same name in the file specified. If there is no =_xxx_ present, the system will take the file name specified in the last **[[usefile ]](Short%20Codes.htm#usefile)** short code. Often used in conjunction with the **[field=_xxx_](Short%20Code%20Options.htm#field)** option.  
**validate** |  Can be specified on any control with an **[event=_xxx_](Short%20Code%20Options.htm#event)** or **[link=_xxx_](Short%20Code%20Options.htm#link)** option to force the system to pre-validate all the fields on the form before processing the event/link. The system will set focus to the first invalid field, if any, and display a message to assist the end user.  
**valsep** =_x_ |  Defines the character that separates the rows of data from the value to be returned to the application when accepting data from the source HTML. If omitted, the default is $1C$. To use non-printable characters, define using (CHR(nn)) and in (CHR(1)) to use $01$ as separator character. Typical usage would be **valsep** **="="**.  
**value** =_xxx_ |  When used on a [**[hide]**](Short%20Codes.htm#hide) short code, defines a value to be assigned to a hidden variable. When used on a radio button **[[radio]](Short%20Codes.htm#radio)**, indicates the value to be returned when the specific radio button is selected. When provided on a **[[tab]](Short%20Codes.htm#tab)** short code, defines the value used to define the currently selected folder tab. If omitted, the values are simple ordinal numbers starting at 1. When used on a **[[list]](Short%20Codes.htm#list)**, defines the source field that contains the return value for the list. If omitted, the primary key of the file or standard query return value is used. When used on a **[[data]](Short%20Codes.htm#data)** short code, values are used to define the actual data to be placed in the list box.  
**variable** |  This option can be supplied with a **[[list]](Short%20Codes.htm#list)** short code to indicate that the user may select a value from the list or enter data directly. This will only apply to drop-down style lists.  
**width** =_xxx_ |  Defines the column width on a **[[col]](Short%20Codes.htm#col)** short code.  
**zoom** =_xx_ |  Defines the zoom factor for a **[[map]](Short%20Codes.htm#map)** short code. If not specified, a value of 12 is used. _(The zoom option was added in PxPlus 2022.)_  
  
All options are separated by a space. If a value for a short code option contains a space, it should be enclosed in _quotation marks_ (**"**).

Options and their values can also be evaluated at run time as expressions surrounded by _parenthesis_.

**_Example:_**

If you wanted to have a tip evaluated and pulled from a message library using the PxPlus **[MSG( )](../functions/msg.md)** function, you could code the option as:

> tip=(MSG("MsgKey",parameter$))

If the first character after the **=** (_equals sign_) on an option is an _open parenthesis_ "**(** ", it will scan ahead to the associated _close parenthesis_ and evaluate the result as a string. If the expression yields a numeric value, its string equivalent will be used.

You can also include complete options as expressions by starting an option with an _open parenthesis_ "**(** ".

## See Also

**[Short Codes](Short%20Codes.md)  
[Short Codes Examples](Webster%20Code%20Examples.md)**
