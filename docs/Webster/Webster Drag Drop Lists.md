# Webster+

**Drag and Drop Lists**|   
---|---  
  
Webster+ provides a drag and drop list that consists of a series of items that can be manually moved (dragged) between different drag and drop lists or within the list itself. Some examples of where this type of list could be used are:

> Drag an item from an active list to a list of items to delete or print (e.g. invoices)  
>  Drag a security class from a list of possible classes to a list of classes that a user or function belongs to  
>  Change the order of items in a list

The short code **[[droplist]](Short%20Codes.htm#droplist)** (or **[draglist]**) is used to create a drag and drop list. The list can contain items defined by using the short code **[[dropitem]](Short%20Codes.htm#dropitem)** (or **[dragitem]**) or loaded by a query or program. If the data comes from a program, the program may be something similar to the following where several writes would fill in the memory file:

> enter DRAGLIST  
>  open (hfn,iol=DRAGLIST)"*memory*"  
>  write  
>  exit  
>  !  
>  DRAGLIST: \  
>  iolist Value$,Text$,Symbol$,Event$,Class$

_(The Webster+ drag and drop list was added in PxPlus 2022.)_

By default, items in a drag and drop list can be dragged onto any drag and drop list on the page, including the list that it came from. Optionally, the list can specifically define which lists the items can be dropped into by using the **[dropon=_xxx_](Short%20Code%20Options.htm#dropon)** option **_where_** _xxx_ consists of a comma-separated list of drag and drop list names.

**_Example:_**

The following example demonstrates much of the functionality of drag and drop lists:

[ttl]Draggable items[/ttl][form] [section third]  
[row "Add to left list"][input addto1$ event=*addto:drag1 len=30][/row]  
[droplist drag1 size=100%/12 class=candelete]  
[dropitem "item 1"]  
[dropitem "Item 2 is here" symbol=home text="Hello World"]  
[dropitem "This is a long YELLOW item might wrap on small screen" class="fill_yellow"]  
[/droplist]  
The above has class **candelete**  
[/section] [section third]  
[row "Add to center list"][input addto2$ event=*addto:drag2 len=30][/row]  
[droplist drag2 size=100%/12 class=fullline,square]  
[dropitem "Kilroy"][dropitem "Was" symbol=cog]  
[dropitem "Here" symbol=arrow-down][/droplist]  
The above has class **fullline,square**  
[/section] [section third]  
[row "Add to right list"][input addto3$ event=*addto:drag3 len=30][/row]  
[droplist drag3 dropon=drag1,drag2 size=100%/12 itemclass=fill_cyan]  
[/droplist]  
The above can only drop on left or center list and items are cyan by default  
[/section] [/form]  
---  
  
The above example generates a page with three inputs and associated drag and drop lists below them:

This allows you to:

Drag and drop items from List 1 and List 2 to any other list (or itself).  
Drag and drop items from List 3 to List 1 and List 2 only (not itself).  
Delete items from List 1 by clicking the "x".  
Apply special Webster+ classes for full line and square corners to List 2.  
Add to any list through the input above the respective list.

Each drag and drop list will be associated with a memory file that will contain the list contents. The handle to the memory file will be found in the variable specified in the **[[droplist]](Short%20Codes.htm#droplist)** (or **[draglist]**) short code; e.g. the variables "drag1", "drag2" and "drag3" in the above example.

The memory file itself will have an associated IOList consisting of the following variables:

**Variable** |  **Contents**  
---|---  
**Value$** |  Value used by the program.  
**Text$** |  Text to display (item will display **Value$** if **Text$** is null).  
**Symbol$** |  **_(Optional)_** Name of the symbol to precede text in display.  
**Event$** |  Event to generate if item selected.  
**Class$** |  Class used when displaying item.  
  
## See Also

**[Webster+ Defined Classes](Webster%20Defined%20Classes.htm#dragdrop)**
