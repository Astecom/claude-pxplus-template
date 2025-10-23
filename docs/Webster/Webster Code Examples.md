# Webster+ HTML Merge/Bind Object

**Short Codes Examples**|   
---|---  
  
In Webster+, **[Short Codes](Short%20Codes.md)** can be used to control layout, insert titles or sub-titles, define sections on your HTML pages, define input controls and forms, and provide options for conditional generation based on embedded PxPlus logic and variables.

This page shows examples of some commonly used short codes, which are listed below. Use these links to access the examples for a particular short code.

|  **[[button]](Webster%20Code%20Examples.htm#button)** |  **[[link]](Webster%20Code%20Examples.htm#link)**  
---|---|---  
|  **[[chart]](Webster%20Code%20Examples.htm#chart)** |  **[[list] for Drop Boxes](Webster%20Code%20Examples.htm#list_db)**  
|  **[[checkbox]](Webster%20Code%20Examples.htm#checkbox)** |  **[[list] for List Boxes](Webster%20Code%20Examples.htm#list_lb)**  
|  **[[folder]](Webster%20Code%20Examples.htm#folder)** |  **[[radio]](Webster%20Code%20Examples.htm#radio)**  
|  **[[image]/[picture]](Webster%20Code%20Examples.htm#image)** |  **[[show]](Webster%20Code%20Examples.htm#show)**  
|  **[[input]](Webster%20Code%20Examples.htm#input)** |  **[[tree]](Webster%20Code%20Examples.htm#tree)**  
  
## [button]

This table shows **[[button ]](Short%20Codes.htm#button)** short code examples.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Text Button |  [button id=BUTTON_1$ size=auto event=BUTTON_PRESSED text=word] |   
Bitmap Button |  [button id=BUTTON_2$ size=7/2 event=BUTTON_2_PRESSED][symbol !Bomb_blast] [/button] |   
Button and Text |  [[button id=BUTTON_3$ size=13/1.75 event=info]More Info [symbol !16X16/Buttons/Information][/button] |   
Drop List Button |  [menu id=menu_DROP_LIST$ hide]  
[item event=menu_DROP_LIST1]cat  
[item event=menu_DROP_LIST2]dog  
[item event=menu_DROP_LIST3]pig  
[item event=menu_DROP_LIST4]horse  
[/menu]  
[button id=DROP_LIST$ size=18/2 dropmenu=menu_DROP_LIST$]Pick an Animal[/button] |   
  
## [chart]

This table shows a **[[chart]](Short%20Codes.htm#chart)** short code example.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Chart  
(using a Query) |  [chart CHART_2$ query="scrnlib.EN;Prodsales" chart="Product Sales by Client" size=50/17.75 event=CHART_2_CHANGED] |  ****  
  
## [checkbox]

This table shows **[[checkbox]](Short%20Codes.htm#checkbox)** short code examples.

#### **Note:**  
In Webster+, a bitmap cannot be added to a Check Box.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Simple Check Box |  [checkbox CHECK_BOX_1$ size=auto event=CHECK_BOX_1_PRESSED]Simple[/checkbox] |   
Check Box  
(with Button on Right) |  [checkbox CHECK_BOX_1$ size=auto event=CHECK_BOX_1_PRESSED]Simple[/checkbox] |   
Tri-State Check Box |  [checkbox CHECK_BOX_3$ size=15 event=CHECK_BOX_3_CHANGED other=2]Tri-State[/checkbox] |  **  
** **_OR_  
**** _  
_** **_OR_   
**  
With Bitmaps  
(need to use a **[[button]](Short%20Codes.htm#button)**) |  [button id=CHECK_BOX_4$ size=17/2 event=CHECK_BOX_4_PRESSED][symbol !X] Bitmaps[/button] |   
Numeric Check Box |  [checkbox CHECK_BOX_5 size=auto event=CHECK_BOX_5_PRESSED]Numeric[/checkbox] |   
Tri-State Check Box  
(with Translations) |  [checkbox CHECK_BOX_6$ size=17 event=CHECK_BOX_6_CHANGED off=N on=Y other=M]Yes/Maybe/No[/checkbox] |    
**_OR_**  
** _  
_** **_OR_**  
  
  
## [folder]

This table shows **[[folder]](Short%20Codes.htm#folder)** short code examples.

**Description** |  **Example** |  **Result in Webster+ (Tab 1)** |  **Result in Webster+ (Tab 2)**  
---|---|---|---  
Folder  
(with Default Class) |  [folder Folder$]  
[tab]Year-to-Date[/tab]  
  
[tab]Previous Year[/tab]  
  
[/folder] |  |   
Web-Style Folder  |  [folder Folder$ class=web]  
[tab]Year-to-Date[/tab]  
  
[tab]Previous Year[/tab]  
  
[/folder] |  |   
Sidebar Folder  |  [template *webster/pages/sidebar.html]  
[folder Folder$ class=web]  
[tab]Year-to-Date[/tab]  
  
[tab]Previous Year[/tab]  
  
[/folder] |  |   
  
## [image]/[picture]

This table shows **[[image]](Short%20Codes.htm#image)**/**[[picture]](Short%20Codes.htm#picture)** short code examples.

#### **Note:**  
In Webster+, images are always scaled to fit the size specified.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Bitmap |  [picture file="!32X32/Animals/Ladybird" size=7/4] |   
.jpg |  [image file="C:\Users\name\Pictures\Mountains.jpg" size=35/20 nocopy event=picture_clicked align="center center"] |  ****  
url |  [image url=https://home.pvxplus.com/files/7068/24360250_ImageSmallWidth.avif size=30/15] |   
  
## [input]

This table shows **[[input]](Short%20Codes.htm#input)** short code examples.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Simple Input |  [input MULTI_LINE_3$ size=20] |   
With Query |  [input MULTI_LINE_1$ size=24 default="Initial Value" query="scrnlib.EN;CLIENT_QRY"] |   
Numeric with Format (Must have no height specified to be numeric or specify a format) |  [input MULTI_LINE_2 size=24 format=-##,##0.00 default="123.45" ] |  ****  
Centered, Text Color and Uppercase options |  [input MULTI_LINE_1$ size=24 default="Initial Value" uppercase align=center class=text_red query="scrnlib.EN;CLIENT_QRY"] |   
Password Input |  [input PASS_INPUT$ size=24 default="Current Password" len=20 tip="Enter New Password" type=password] |   
  
## [link]

This table shows a **[[link]](Short%20Codes.htm#link)** short code example.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Hyperlink Button |  [link event=HYPERLINK_PRESSED]Hyperlink Button[/link] |   
  
## [list] for Drop Boxes

This table shows **[[list]](Short%20Codes.htm#list)** short code examples for Drop Boxes.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
With Default Value |  [list DROP_BOX_1$ size=12 default=cat]  
[data rowsep=|]cat|dog|pig|horse|[/data]  
[/list] |  ****  
With Translation Table |  [list DROP_BOX_3$ size=12 tip="Select Payment Type"]  
[data rowsep=| valsep=`]Check`C|Cash`$|MasterCard`M|Visa`V|[/data]  
[/list] |  ****  
Using Data Class  |  [list DROP_BOX_4$ default=ONT program=*webster/class;ClassList,"DEPTDB"][/list] |  ****  
Using Query and Colors |  [list DROP_BOX_5$ size=16 query=scrnlib.en:DEPTCODE_QRY class=text_red,fill_yellow][/list] |  ****  
  
## [list] for List Boxes

This table shows **[[list]](Short%20Codes.htm#list)** short code examples for List Boxes.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Standard List Box |  [list LIST_BOX_1$ size=25/7][data rowsep=^]cat^dog^pig^horse^[/data][/list] |   
With Translation Table |  [list LIST_BOX_1$ size=19/8.25 event=LIST_BOX_1_CHANGED][data rowsep=| valsep=`]Check`C|Cash`$|MasterCard`M|Visa`V|[/data][/list] |  ****  
Using Data Class  |  [list LIST_BOX_1$ size=25/8.25 program=*webster/class;ClassList,"DEPTLB"][/list] |  ****  
Report View  
(using Query and Colors) |  [list REPORT_VIEW$ query="scrnlib.EN;SALESREP_Q" size=55/8.4 class=text_green][/list] |  ****  
  
## [radio]

This table shows **[[radio]](Short%20Codes.htm#radio)** short code examples.

#### **Note:**  
In Webster+, a bitmap cannot be added to a Radio Button.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Vertical Alignment |  [radio RADIO_BUTTON_2$ size=14/1.25]Vanilla[/radio]<br>  
[radio RADIO_BUTTON_2$ size=14/1.25]Chocolate[/radio]<br>  
[radio RADIO_BUTTON_2$ size=14/1.25]Strawberry[/radio]<br> |   
Horizontal Alignment  
(with Colors and Translation values) |  [radio RADIO_BUTTON_1$ size=10/1.5 value=G class=text_#00ff00]Green[/radio]&nbsp;&nbsp;&nbsp;  
[radio RADIO_BUTTON_1$ size=10/1.5 value=R class=text_#ff0000]Red[/radio]&nbsp;&nbsp;&nbsp;  
[radio RADIO_BUTTON_1$ size=10/1.5 value=B class=text_#0000ff]Blue[/radio] |  ****  
Button to the Right of Text |  [radio RADIO_BUTTON_2$ size=14/1.25 onright]Vanilla[/radio]<br>  
[radio RADIO_BUTTON_2$ size=14/1.25 onright]Chocolate[/radio]<br>  
[radio RADIO_BUTTON_2$ size=14/1.25 onright]Strawberry[/radio]<br> |   
  
## [show]

This table shows **[[show]](Short%20Codes.htm#show)** short code examples.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Simple Text |  [show "This is the Text" size=auto] |  ****  
Text with a specified Font, Center Alignment |  [show "This is the Text" size=21/2 align=center class=font_Lucida+Calligraphy] |   
Double-Sized Text with a specified Font |  [show "This is the Text" size=27/2 class=font_Times+New+Roman,font_200] |   
Red Text on a Yellow Background |  [show "Red Text on Yellow" size=auto class=text_red,fill_#FFFF00] |   
  
## [tree]

This table shows **[[tree]](Short%20Codes.htm#tree)** short code examples.

**Description** |  **Example** |  **Result in Webster+**  
---|---|---  
Tree View  
(using Query) |  [tree TREE_VIEW query="*demo/2024/scrnlib.EN;SALESREP_Q" size=35/8.4][/tree] |  ****  
  
## See Also

**[Short Codes](Short%20Codes.md)**  
**[Short Code Options](Short%20Code%20Options.md)**
