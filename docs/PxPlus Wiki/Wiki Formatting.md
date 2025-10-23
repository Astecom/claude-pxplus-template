# PxPlus Wiki

**Wiki Formatting**|   
---|---  
  
##  Basic PxPlus Wiki Formatting

The Wiki content is comprised of simple text that includes a number of special control sequences used to stylize certain aspects of the output. By default, simple text will be inserted into the resultant page. Lines that occur together will be appended. Lines that are separated by one or more blank lines will show as separate paragraphs.

The following table shows the output for the lines:

**Input Wiki** |  **Resultant Output** |  **Description**  
---|---|---  
|  |  Multiple lines back-to-back are merged with a space between the last character of the line and the first character of the next line.  
|  |  The occurrence of a blank line between text will result in starting a new paragraph the first character of the next line.  
  
The two most common text sequences for italicizing and bolding text are:

**Input Wiki** |  **Resultant Output** |  **Description**  
---|---|---  
''text in italics'' |  _text in italics_ |  Two **'** (_apostrophes_) surrounding text indicates that the text is to be _italicized_.  
'''text in bold''' |  **text in bold** |  Three **'** (_apostrophes_) surrounding text indicates that the text is to be in **bold**.  
  
**_Embedding HTML_**

Along with Wiki coding, you can also embed direct HTML tags, such as **< br>**, **< hr>**, and other codes for defined '**div** 's and '**span** 's.

Below is a list of HTML tags in alphabetical order:

**HTML Tag** |  **Description** |  **Example** |  **Result**  
---|---|---|---  
**< blockquote>** |  Block outlined quote |  <blockquote>Alas, poor Yorick! I knew him</blockquote> |  Alas, poor Yorick! I knew him  
**< br>** |  Insert a line break |  Line 1<br>Line 2 |  Line 1  
Line 2  
**< code>** |  Fixed font text |  <code>Every character is same size.</code> |  Every character is same size.  
**< del>** |  Deleted text |  <del>The world is flat.</del> |   
**< pre>** |  Pre-formatted fixed text (typically for code examples) |  <pre>  
FOR I = 1 TO 10  
PRINT I,  
NEXT  
</pre> |   
**< u>** |  Block outlined quote |  This is <u>important</u> |  This is _important_  
  
Many other HTML tags are allowed in the Wiki text. Some of them are:

> **b** , **dl** , **div** , **dt** , **em** , **h1** , **h2** , **h3** , **h4** , **hr** , **i** , **li** , **ol** , **span** , **strike** , **sub** , **sup** , **ul**

**_Drawing a Horizontal Line_**

In addition to the **< hr>** code, any line consisting only of four or more dashes will be converted to a horizontal line to provide separation of text.

## Headers

Headers in your text can be defined by surrounding the header text with between one and four **=** (_equal signs_) and a _space_. The line must both start **_and_** end with the _equal signs_.

The following table shows the output for the different header types:

**Input Wiki** |  **Header Type** |  **Output**  
---|---|---  
= One Equal Sign = |  Overrides the page header |   
== Two Equal Signs == |  Major heading |   
=== Three Equal Signs === |  Sub heading |   
==== Four Equal Signs ==== |  Sub-sub heading |   
  
## Links to New Pages

One of the strengths of the Wiki is the ability to link pages together. When you create a link to a new page, the system inserts a hyperlink in the HTML to display that page.

If the page has been defined, a dummy page will be displayed for the user. If the user is allowed to edit pages, he/she can then select the **Edit** link at the top of the display to enter/edit the page contents.

**Input Wiki** |  **Resultant Output** |  **Description**  
---|---|---  
[[Page name]] |  |  Including the name/title of a page in double _square brackets_ will create an internal link to the page within the Wiki. If the page does **_not_** exist, the link will be in Red; otherwise, it will be in the normal HTML link color, which is generally Blue.  
[[Main|Other Name]] |  |  If you want a link to a page but want to display some text other than the page title, you can include a **|** (_vertical bar_) between the actual page name and the text you want displayed.  
  
## Links to External Pages

If you want to link to an external page, you can either insert the URL (if it starts with _http:_ or _https:_) or insert the link within a single _square bracket_.

## Lists

You can insert a list of items by starting each line in the list with a **:** (_colon_) for simple indentation, a **#** (_pound sign_) for a numbered list or an ***** (_asterisk_) for a bulleted list. Multiple levels of a list may be entered by including the same prefix characters on subsequent lines. A blank line terminates the list.

The following table shows the output when lines start with _colon_ , _pound sign_ or _asterisk_ :

**Input Wiki** |  **Resultant Output** |  **Description**  
---|---|---  
This is my list  
  
: Item one  
: Item two |  |  The **:** (_colon_) indicates a list of simple indented items.  
This is my list # Item one  
# Item two |  |  The **#** (_pound sign_) indicates a numbered list of indented items. The item number will reset when a blank line is encountered.  
This is my list  
  
* Item one  
* Item two |  |  The ***** (_asterisk_) indicates a bulleted list of indented items.  
This is my list  
  
* Item one  
*# Subitem 1  
*# Subitem 2  
* Item two |  |  Multiple levels of a table can be generated; however, you must make sure that the lines are prefixed with the correct level type indicator; i.e. _colon_ , _asterisk_ or _pound sign_.  
  
## Tables

You can include tables in your Wiki output by using the following codes at the start of the line:

**Code** |  **Description**  
---|---  
**{|** |  This code is used to define the start of a table. It can be followed by additional HTML attributes, such as **class=** or **style=** , to control how the table will be formatted.  
**|-**_or_**  
** **|+** |  This code is used to separate rows in the table.  
**|** |  This code is used to define a cell in the table. The data following the _vertical bar_ will be inserted into the cell and can include Wiki codes. You can also define multiple cells on the same line, separating each by two _vertical bars_. If desired, you can include additional HTML attributes in front of the text, separated by a single _vertical bar_ (e.g. **|** class=clrRed **|** This will be in Red).  
**!** |  This code is used to define **_header_** cells in the table. The data following the _exclamation point_ will be inserted into a header cell. Based on the standard PxPlus Wiki CSS, header cells will be presented bold and centered. A light gray background will be included if the **border** class is applied. You can also define multiple cells on the same line, separating each by two _exclamation points_.  
**|}** |  This code is used to define the end of a table.  
  
**_Examples:_**

Below are four sample tables:

**Wiki Definition** |  **Resultant Table Output**  
---|---  
**_Example 1:_**

> {|  
>  ! Name  
>  ! Description  
>  |-  
>  | John Glen  
>  | Astronaut  
>  |-  
>  | John Cleese  
>  | Comedian  
>  |-  
>  | John Doe  
>  | Nameless person  
>  |}

|   
**_Example 2:_**

> {| class="border"  
>  ! Name  
>  ! Description  
>  |-  
>  | John Glen  
>  | Astronaut  
>  |-  
>  | John Cleese  
>  | class=clrRed>Comedian  
>  |-  
>  | John Doe  
>  | Nameless person  
>  |}</nowiki>

|   
**_Example 3:_**

> {| class="note border"  
>  |-  
>  ! Note Title  
>  |-  
>  |This is the text that you want to appear in a blue note box.  
>  |}

|   
**_Example 4:_**

> {| class="warn border"  
>  |-  
>  ! Warning Title  
>  |-  
>  |This is the text that you want to appear in a warning note box.  
>  |}

|   
  
## pxpwiki Defined Classes

Below is a list in alphabetical order of some of the built-in classes provided with the standard PxPlus Wiki style sheet for use with tables, lists and embedded HTML tags:

**Class Name** |  **Description**  
---|---  
**border** |  Puts a border around the contents and reduces the padding within the cells. Also adds a light gray background color to header cells when used in a table.  
**center** |  Horizontally centers the contents.  
**centercells** |  Centers the text in the individual cells (_used in a table_).  
**clrBlue** |  Colors the text Blue.  
**clrGreen** |  Colors the text Green.  
**clrRed** |  Colors the text Red.  
**note** |  Generates a note-style table that has a blue background (_used in a table_).  
**warn** |  Generates a warning table that has a red background (_used in a table_).  
  
## See Also

The PxPlus Wiki provides a comprehensive subset of the capabilities found in MediaWiki. As such, most of the features in the following MediaWiki Web pages are supported:

> **[List Formatting](https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Lists)**

> **[Insert Images](https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Images)**

> **[Tables](https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Tables)**
