# TinyMCE HTML Editor

**Using the TinyMCE HTML Editor**|   
---|---  
  
To add an HTML Editor to your application panel, follow these steps to create an **[External Control](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)** using the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**:

1. |  Select _External Control_ from the **Controls** tool bar. Click and drag the mouse to outline the location of the TinyMCE Editor control on the panel.  
---|---  
2. |  When the mouse is released, the **External Control Properties** window displays. Enter an _Object Name_ for the control (e.g. ED).  
3. |  Click the _Ext. Control_ query button and select _PVX Plus Controls_ from the pop-up menu.  
4. |  From the list of _PVX Plus Controls_ that displays, select _Tinymce_ _Editor Control_.  
5. |  In the **External Control Properties** window, click the **Properties** tab to set the properties. See the **[Editor Properties](Using%20the%20TinyMCE%20HTML%20Editor.htm#properties)** and **[Editor Methods](Using%20the%20TinyMCE%20HTML%20Editor.htm#methods)** that are specific to the TinyMCE HTML Editor.  
  
Six pre-defined layouts are included: **[Modern](Using%20the%20TinyMCE%20HTML%20Editor.htm#modern)**, **[Narrow](Using%20the%20TinyMCE%20HTML%20Editor.htm#narrow)**, **[Simple](Using%20the%20TinyMCE%20HTML%20Editor.htm#simple)** ** _(default)_** , **[Advanced](Using%20the%20TinyMCE%20HTML%20Editor.htm#advanced)**, **[Extended](Using%20the%20TinyMCE%20HTML%20Editor.htm#extended)** and **[Fullpage](Using%20the%20TinyMCE%20HTML%20Editor.htm#fullpage)**. You can also create your own **[Custom Layout](Creating%20a%20Toolbar%20Layout.md)**.  
  
_(The Modern and Narrow layouts are available as of PxPlus 2019.)_  
|   
  
These properties, as well as other read-only properties utilized by NOMADS/iNomads, are used when creating the control and cannot be changed dynamically. The only dynamic property is the _value$_ property, which can be used to load and retrieve the contents of the Editor.

**_Example:_**

In this example, a _Load_ button and a _Save_ button will be added to the panel. The _Load_ button invokes the GET_FILE_BOX dialog to specify an HTML file to load into the Editor. The OnChange logic looks like this:

> get_file_box read p$,lwd,""  
>  if p$<>"" then open(hfn,isz=-1)p$;  
>  read record (lfo,siz=1000000) r$;  
> ed.ctl'value$=r$;  
>  close(lfo)

When a file name is selected, it is opened and the contents are read into a string variable, which is then assigned to the _value$_ property of the control. This loads the contents of the file into the Editor.

The _Save_ button retrieves the contents of the Editor control via the Editor's _value$_ property and writes them to a local file, then displays them in the default browser. The OnChange logic looks like this:

> x$=ed.ctl'value$  
>  serial "[lcl]htmltest.htm",err=*proceed  
>  open purge(hfn)"[lcl]htmltest.htm"  
>  print(lfo)x$  
>  close(lfo)  
> system_help "htmltest.htm"

##  Editor Properties

The following properties (on the **Properties** tab in the **External Control Properties** window) are specific to the TinyMCE HTML Editor:

**Property** |  **Description**  
---|---  
**allowScripts******|  Use this property to allow editing of HTML with JavaScript. If set to 1 (**_On_**), JavaScript elements and properties are **_not_** stripped, thus allowing HTML with scripts to be edited. When set to 0 (**_Off_**), JavaScript elements and properties are stripped from edited HTML (**_default_** is 0). _(The allowScripts property was added in PxPlus 2021 Update 2.)_  
**toolbarAlign$** |  Alignment of the edit controls within the tool bar area. Options are _Left**(default)**_ , _Center, Right_.

#### **Note:**  
As of PxPlus 2019, this property is ignored. (TinyMCE HTML Editor no longer supports this functionality.)  
  
**toolbarLayout$** |  Selection of edit controls. The following pre-defined editing layouts are included: **[Modern](Using%20the%20TinyMCE%20HTML%20Editor.htm#modern)**, **[Narrow](Using%20the%20TinyMCE%20HTML%20Editor.htm#narrow)**, **[Simple](Using%20the%20TinyMCE%20HTML%20Editor.htm#simple)** ** _(default)_** , **[Advanced](Using%20the%20TinyMCE%20HTML%20Editor.htm#advanced)**, **[Extended](Using%20the%20TinyMCE%20HTML%20Editor.htm#extended)** and **[Fullpage](Using%20the%20TinyMCE%20HTML%20Editor.htm#fullpage)**. You can also create your own **[Custom Layout](Creating%20a%20Toolbar%20Layout.md)**. To change the layout, enter the desired layout in the _Value/Expression_ column (e.g. _Modern_). _(The Modern and Narrow layouts are available as of PxPlus 2019.)_  
**toolbarLocation$** |  Location of the tool bar containing the edit controls. Options are _Top**(default)** , Bottom, External_. The _External_ option displays the tool bar above the control when the control has focus and is available in iNomads only.

#### **Note:**  
As of PxPlus 2019, this property is ignored. (TinyMCE HTML Editor no longer supports this functionality.)  
  
**value$** |  Use this property to load and retrieve the contents of the Editor control. The control may be loaded with HTML code or plain text.

#### **Note:**  
The retrieved contents contain line feeds.  
  
**webster******|  Use this property to enable the Webster+ menu items and tool bar button (**_default_** is 0). See **[Webster+](../../Webster/Webster.md)**. Setting this property to 1 allows the **[Modern Layout](Using%20the%20TinyMCE%20HTML%20Editor.htm#modern)** to be used, which already includes the Webster+ items. Alternatively, you can create/modify a layout with the keywords _webster_ and _websterpreview_ in the menu and tool bar sections of the layout. _(The webster property was added in PxPlus 2021.)_  
  
##  Editor Methods

The following method is supported:

**Method** |  **Description**  
---|---  
**Focus( )** |  Sets focus to the TinyMCE Editor control. _(The Focus( ) method was added in PxPlus 2021.)_  
  
##  Modern Layout

The **_Modern_** layout uses menus and tool bar buttons. All Editor features can be found in the menu. The most common of those features are available as tool bar buttons.

This layout also uses the _Fullpage_ option. With this option, the output from the Editor includes the **< html>** and **< body>** elements to produce a full page whereas the default excludes these portions. This option also adds a _Metadata and document properties_ item on the **Document** menu, which is used to edit the different settings for the document, such as title, metadata, etc.

> The menu, tool bar and right click menu options that are available with this layout are listed below.

**_Menu Options_**

The menu consists of the following options (in the order of appearance):

**Document**  
Print  
Metadata and document properties  
Word count

**Edit**  
Undo  
Redo  
Cut  
Copy  
Paste  
Paste as text  
Select all  
Find and replace

**Insert**  
Link  
Remove link  
Image  
Media  
Special character  
Date/time  
hh:mm:ss  
yyyy-mm-dd  
hh:mm:ss AM/PM  
mm/dd/yyyy  
Emoticons  
Horizontal line  
Nonbreaking space  
Page break  
Anchor  
Webster Shortcodes (Available if the **[webster](Using%20the%20TinyMCE%20HTML%20Editor.htm#webster)** property is set to 1 - see **[Webster+ Short Codes](../../Webster/Short%20Codes.md)**)

**View**  
Visual aids  
Show invisible characters  
Show blocks  
Preview  
Webster Preview (Available if the **[webster](Using%20the%20TinyMCE%20HTML%20Editor.htm#webster)** property is set to 1)

**Format**  
Bold  
Italic  
Underline  
Strikethrough  
Superscript  
Subscript  
Bullet list  
Numbered list  
Decrease indent  
Increase indent  
Formats  
Headings  
Heading 1  
Heading 2  
Heading 3  
Heading 4  
Heading 5  
Heading 6  
Inline  
Bold  
Italic  
Underline  
Strikethrough  
Superscript  
Subscript  
Code  
Blocks  
Paragraph  
Blockquote  
Div  
Pre  
Align  
Left  
Center  
Right  
Justify  
Clear formatting

**Table**  
Table  
Displays a 2D grid for selecting the number of rows and columns desired for the new table  
Table properties  
Delete table  
Cell  
Cell properties  
Merge cells  
Split cell  
Row  
Insert row before  
Insert row after  
Delete row  
Row properties  
Cut row  
Copy row  
Paste row before  
Paste row after  
Column  
Insert column before  
Insert column after  
Delete column  
Cut column  
Copy column  
Paste column before  
Paste column after

**Help**  
Help

**_Tool Bar Options_**

The tool bar consists of the following (in the order of appearance):

**_Line 1:_** Undo  
Redo  
Paragraph  
Headings  
Heading 1  
Heading 2  
Heading 3  
Heading 4  
Heading 5  
Heading 6  
Inline  
Bold  
Italic  
Underline  
Strikethrough  
Superscript  
Subscript  
Code  
Blocks  
Paragraph  
Blockquote  
Div  
Pre  
Align  
Left  
Center  
Right  
Justify  
Font types  
Font sizes  
Bold  
Italic  
Underline  
Text color  
Background color  
Align left  
Align center  
Align right |  **_Line 2:_** Bullet list  
Numbered list  
Decrease indent  
Increase indent  
Source code  
TinyMCE Help |  **_Line 3:_** Webster Shortcodes (Available if the **[webster](Using%20the%20TinyMCE%20HTML%20Editor.htm#webster)** property is set to 1 - see **[Webster+ Short Codes](../../Webster/Short%20Codes.md)**)  
Webster Preview (Available if the **[webster](Using%20the%20TinyMCE%20HTML%20Editor.htm#webster)** property is set to 1)  
---|---|---  
  
**_Right Click Menu Options_**

The right click menu is context sensitive and provides options that are specific to the selected object. For example, right clicking on a table displays table-related options, or right clicking on an image displays image-related options.

_(The Modern layout is available with PxPlus 2019.)_

##  Narrow Layout

The **_Narrow_** layout uses menus and tool bar buttons. A simplified set of Editor features can be found in the menu, and the most common of those features are available as tool bar buttons.

> The menu, tool bar and right click menu options that are available with this layout are listed below.

**_Menu Options_**

The menu consists of the following (in the order of appearance):

**File**  
New document  
Print  
Word count

**Edit**  
Undo  
Redo  
Cut  
Copy  
Paste  
Paste as text  
Select all  
Find and replace

**Insert**  
Link  
Remove link  
Image  
Media  
Special character  
Date/time  
hh:mm:ss  
yyyy-mm-dd  
hh:mm:ss AM/PM  
mm/dd/yyyy  
Emoticons  
Horizontal line  
Nonbreaking space  
Page break  
Anchor

**View**  
Visual aids  
Show invisible characters  
Show blocks  
Preview

**Format**  
Bold  
Italic  
Underline  
Strikethrough  
Superscript  
Subscript  
Bullet list  
Numbered list  
Decrease indent  
Increase indent  
Formats  
Headings  
Heading 1  
Heading 2  
Heading 3  
Heading 4  
Heading 5  
Heading 6  
Inline  
Bold  
Italic  
Underline  
Strikethrough  
Superscript  
Subscript  
Code  
Blocks  
Paragraph  
Blockquote  
Div  
Pre  
Align  
Left  
Center  
Right  
Justify  
Clear formatting

**Table**  
Table  
Displays a 2D grid for selecting the number of rows and columns desired for the new table  
Table properties  
Delete table  
Cell  
Cell properties  
Merge cells  
Split cell  
Row  
Insert row before  
Insert row after  
Delete row  
Row properties  
Cut row  
Copy row  
Paste row before  
Paste row after  
Column  
Insert column before  
Insert column after  
Delete column  
Cut column  
Copy column  
Paste column before  
Paste column after

**_Tool Bar Options_**

The tool bar consists of the following (in the order of appearance):

New document  
Bold  
Italic  
Underline  
Align left  
Align center  
Align right  
Font types  
Font sizes  
Source code

**_Right Click Menu Options_**

The right click menu is context sensitive and provides options that are specific to the selected object. For example, right clicking on a table displays table-related options, or right clicking on an image displays image-related options.

_(The Narrow layout is available with PxPlus 2019.)_

##  Simple Layout

The **_Simple_** layout consists of font-related and alignment options in a simple tool bar.

> The tool bar and right click menu options that are available with this layout are listed below.

**_Tool Bar Options_**

The tool bar consists of the following (in the order of appearance):

Bold  
Italic  
Underline  
Strikethrough  
Align left  
Align center  
Align right  
Font types  
Font sizes  
Source code

**_Right Click Menu Options_**

The **_Simple_** layout does not define a custom right click menu but rather a right click menu for the embedded browser.

##  Advanced Layout

The **_Advanced_** layout provides additional formatting features, such as Undo, Links, Images, Colors, etc.

> The tool bar and right click menu options that are available with this layout are listed below.

**_Tool Bar Options_**

The tool bar consists of the following (in the order of appearance):

**_Line 1:_** New document  
Preview  
Find and replace  
Clear formatting  
Undo  
Redo  
Insert/edit link  
Remove link  
Anchor  
Insert/edit image  
Source code |  **_Line 2:_** Font types  
Font sizes  
Bold  
Italic  
Underline  
Strikethrough  
Text color  
Background color |  **_Line 3:_** Align left  
Align center  
Align right  
Justify  
Bullet list  
Numbered list  
Decrease indent  
Increase indent  
Blockquote  
Horizontal line  
Page break  
Special character  
Subscript  
Superscript  
---|---|---  
  
**_Right Click Menu Options_**

The right click menu is context sensitive and provides options that are specific to the selected object. For example, right clicking on a link displays link-related options, or right clicking on an image displays image-related options.

##  Extended Layout

The **_Extended_** layout provides options for inserting date/time and adding a table.

> The tool bar and right click menu options that are available with this layout are listed below.

**_Tool Bar Options_**

The tool bar consists of the following (in the order of appearance):

**_Line 1:_** New document  
Print  
Preview  
Find and replace  
Undo  
Redo  
Insert/edit link  
Remove link  
Anchor  
Insert/edit image  
Insert/edit media  
Align left  
Align center  
Align right  
Justify  
Source code |  **_Line 2:_** Paragraph  
Paragraph  
Heading 1  
Heading 2  
Heading 3  
Heading 4  
Heading 5  
Heading 6  
Preformatted  
Font types  
Font sizes  
Bold  
Italic  
Underline  
Strikethrough  
Text color  
Background color |  **_Line 3:_** Clear formatting  
Horizontal line  
Page break  
Special character  
Subscript  
Superscript  
Insert date/time  
Bullet list  
Numbered list  
Decrease indent  
Increase indent  
Blockquote  
Table  
---|---|---  
  
**_Right Click Menu Options_**

The right click menu is context sensitive and provides options that are specific to the selected object. For example, right clicking on a link displays link-related options, or right clicking on an image displays image-related options.

## Fullpage Layout

The **_Fullpage_** layout is the same as the [**Extended**](Using%20the%20TinyMCE%20HTML%20Editor.htm#extended) layout and uses the _Fullpage_ option. With this option, the output from the Editor includes the **< html>** and **< body>** elements to produce a full page whereas the default excludes these portions. This option also adds a _Metadata and document properties_ tool bar button, which is used to edit the different settings for the document, such as title, metadata, etc.

> ## Spell Checking

All of the layouts support automatic spell checking where incorrect words are red underlined. To see a list of suggested words and possibly replace the incorrect word with the correct one, hold down the Ctrl key and right click on the incorrect word.

## See Also

**[Creating a Tool Bar Layout](Creating%20a%20Toolbar%20Layout.md)**  
**[Webster+](../../Webster/Webster.md)**

TinyMCE is a registered trademark of Tiny Technologies Inc.
