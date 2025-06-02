# File Maintenance Generator

**Embedded Panel or HTML Short Codes** |  **_Step 6: Field Layout_**  
---|---  
  
The **Embed a Panel/Short Codes** window is used to specify the panel and/or HTML short code(s) to embed **_except_** when the current cell is a Key field. See **[Webster+ HTML Merge/Bind Object](../../../Webster/Webster%20Bind%20Object.md)**.

_(The ability to add/edit an Embedded Panel or HTML Short Codes was added in PxPlus 2021.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Embedded Panel or HTML Short Codes_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit Embed Panel/Short Codes_ option.

> This window consists of the following:

**NOMADS Embedded Panel** |  **_(Applicable for NOMADS Panels Only)_** |  _Library_ |  Library path of the panel to embed. Click the drop-down arrow for a list (up to nine) of previous selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an ** _=_**_(equals sign)_ ; e.g.  _=libname$_ or  _="mylib.en"_.  
---|---  
_Panel_ |  Select the name of the panel whose contents you want to embed. Click the drop-down arrow for a list of panels in the selected library.  
  
#### **Note:**  
It is **_not recommended_** to embed a generated file maintenance panel into another file maintenance panel to be generated, as this may cause issues when the NOMADS panel or HTML page is displayed.  
  
**Webster+ HTML Short Code(s)** |  **_(Applicable for HTML Pages Only)_** Enter the HTML **[Short Code(s)](../../../Webster/Short%20Codes.md)** for the specific element(s) or simple function(s) you want to embed inside the HTML page. **_Example:_** Short codes were used to define the grid below for the generated Webster+ HTML page: [row "Special product prices:"]  
[grid dtl_gridnosort size=auto/20 program=pricelist;makegrid gridlines]  
[col ttl="Product Code" width=20][input productcode$ query=scrnlib.en;product.q event=chkline][/col]  
[col source=listprice$ locked ttl="List Price" width=15 class=align_center]  
[col source=UOM$ width=14 ttl="UOM" query=scrnlib.en;uom.q event=chkline]  
[col source=minQty format="#####0", ttl="Min Qty" width=12 bwz]  
[col source=price format="###,##0.00" ttl="Special Price" width=12]  
[col source=itemDiscount format="#0.00" ttl="Disc. %" width=9]  
[col width=5 align=center ttl="Del"][symbol trash event=*Rowdel]  
[/grid]<br>  
[button size=Auto/2 event=pricelist@add10 text="+10 rows"]  
[/row]  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the embedded panel or short code (if applicable) spans according to its size. Fields placed in the rows below the embedded panel or short code and below the adjoining cell (in a two-column layout) are pushed down to accommodate the embedded panel or short code. The field in the adjoining cell remains in place beside the embedded panel or short code. Deselecting this option allows fields to be placed beside the embedded panel or short code (in a two-column layout). However, fields below the embedded panel or short code (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.
