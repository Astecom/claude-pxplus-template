# Object-Oriented Interface  
  
**rptcell** |  **__**  
---|---  
  
The **rptcell** object is a data member of the **[rptline](../rptline/Overview.md)** object, delegated to store and manipulate a cell definition. One object is created for each data- or format-bearing cell in a report line. The **pvxreport** , **rptgroup** or **rptlineGetCell( )** methods can be used to retrieve the object handle for an **rptcell** object, which allows access to all the object's methods and properties.

## rptcell Properties

The following table lists the properties of the **rptcell** object:

**Property** |  **Description**  
---|---  
**Align$** |  Alignment code:   
  
**L** \- Left  
**C** \- Centre  
**R** \- Right  
  
If blank, default alignment is left.  
**AlternateCell** |  Object handle for the alternate ***rpt/rptcell** object that contains the definition and conditions associated with an alternate cell definition.  
**BackgroundColour$** |  The background colour of the cell can be defined in terms of an **RGB:**_n_**,**_n_**,**_n_ setting (e.g. RGB:255,0,128), or using pre-defined colour names, or Black, Light Red, Light Green, Light Yellow, Light Blue, Light Magenta, Light Cyan, White, Dark Gray, Dark Red, Dark Green, Dark Yellow, Dark Blue, Dark Magenta, Dark Cyan, Light Gray.  
  
If blank, background colour is default (White).  
**BottomBorder** |  Single-digit code indicating the border at the bottom edge of the cell:   
  
**0** \- None  
**1** \- Thin  
**2** \- Medium  
**3** \- Thick  
  
If blank, default is no bottom border.  
**Column** |  Column in which the cell is located. The first column is column 1.  
**Font$** |  Comma-separated string containing font information _fontname_**,**_size_**[,**_attributes_**][,**_angle_**]** where attributes are **B** (bold) or **I** (italic) and angle may be 0, 90 or 270; e.g. Verdana,-15,B.  
**Format$** |  Format mask for displaying the value. May be a fixed value or expressions. Expressions are prefixed by an _equals sign_ ; e.g. =%FMT1$.  
**Hyperlink$** |  Contains the hyperlink. May be a literal value or expression. Read only. Use **[SetHyperlink( )](Overview.htm#sethyperlink)** method to set.  
**HyperlinkExpr$** |  **X** | **F** \- Indicates whether **Hyperlink$** contains a literal (**F**) or expression (**X**). Read only. Use **[SetHyperlink( )](Overview.htm#sethyperlink)** method to set.  
**HyperlinkOption$** |  Display option:   
  
**0** \- Use current browser window (Default)  
**1** \- Use new browser window  
  
Read only. Use **[SetHyperlink( )](Overview.htm#sethyperlink)** method to set.  
**Image$** |  Contains the path or URL to the image. May be a literal value or expression. Read only. Use **[SetImage( )](Overview.htm#setimage)** method to set.  
**ImageExpr$** |  **X** | **F** \- Indicates whether **Image$** contains a literal (**F**) or expression (**X**). Read only. Use **[SetImage( )](Overview.htm#setimage)** method to set.  
**ImageOption$** |  Display option:   
  
**1** \- Original size, align top left.   
**2** \- Original size, centre in region.  
**3** \- Resize to fit region.  
**4** \- Resize with same aspect ratio, align top left.  
**5** \- Resize with same aspect ratio, centre in region.  
  
Read only. Use **[SetImage( )](Overview.htm#setimage)** method to set.  
**JoinColumns** |  Number of columns joined in this cell. Default is 0 if the cell is not joined.  
**JoinRows** |  Number of rows joined in this cell. Default is 0 if the cell is not joined.  
**LeftBorder** |  Single-digit code indicating the border at the left edge of the cell:   
  
**0** \- None   
**1** \- Thin   
**2** \- Medium   
**3** \- Thick  
  
If blank, default is no left border.  
**RightBorder** |  Single-digit code indicating the border at the right edge of the cell:   
  
**0** \- None   
**1** \- Thin   
**2** \- Medium   
**3** \- Thick  
  
If blank, default is no right border.  
**TextColour$** |  Text colour of the cell. Can be defined in terms of **RGB:**_n_**,**_n_**,**_n_ setting (e.g. RGB:255,0,128), or using pre-defined colour names, or Black, Light Red, Light Green, Light Yellow, Light Blue, Light Magenta, Light Cyan, White, Dark Gray, Dark Red, Dark Green, Dark Yellow, Dark Blue, Dark Magenta, Dark Cyan, Light Gray.  
  
If blank, text colour is set to Default.  
**TopBorder** |  Single-digit code indicating the border at the top edge of the cell:   
  
**0** \- None   
**1** \- Thin   
**2** \- Medium   
**3** \- Thick  
  
If blank, default is no top border.  
**Value$** |  Fixed text value or data variable or expression whose value will be displayed in the cell.  
**WordWrap** |  Indicator to wrap text in a cell:  
  
**1** \- On  
**0** \- Off  
  
Default is **0** (Off).  
  
## rptcell Methods

The following table lists the methods of the **rptcell** object:

**Method** |  **Description**  
---|---  
**AddAlternateCell( )** |  Add an **AlternateCell rptcell** object to the main **rptcell** object. Return **AlternateCell**.  
**RemoveAlternateCell( )** |  Drop the **AlternateCell rptcell** object from the main **rptcell** object and set **AlternateCell** to 0.  
**SetHyperlink(**_Hyperlink$,Xflg$,DispOpt$_**)** |  Puts an HTML hyperlink in the cell. (The associated text to be displayed on the report must be specified by setting the cell's **[Format$](Overview.htm#format)** and **[Value$](Overview.htm#value)** properties independently.) _Hyperlink$_ \- Hyperlink address (may be fixed literal or expression).  
  
_Xflg_ _$_ \- X, F or blank (Default). "X" indicates that _Hyperlink$_ is an expression.  
  
_DispOpt_ _$ -_ Display option:  
  
**0 -** Use current browser window (Default)  
**1 -** Use new browser window  
**SetImage(**_ImagePath_ _$,Xflg$,DispOpt$_**)** |  Puts an image in the cell. (Alternate text may be specified by setting the cell's **Format$** and **Value$** properties independently.)  
  
_ImagePath_ _$_ \- Path to the image (may be fixed or expression).  
  
_Xflg_ _$_ \- X, F or blank (Default). "X" indicates that _ImagePath_ _$_ is an expression.  
  
_DispOpt_ _$_ \- Display option:  
  
**1** \- Original size, align top left.   
**2** \- Original size, centre in region.  
**3** \- Resize to fit region.  
**4** \- Resize with same aspect ratio, align top left.  
**5** \- Resize with same aspect ratio, centre in region.  
  
The following methods are only available to **rptcell** objects specified as **AlternateCell** objects:

**Method** |  **Description**  
---|---  
**AddFilter(**_Setidx_**)** |  Creates a new **rptfilter** object within the **rptfilterset** object specified by _Setidx_ using the next available sequence number. One object is created for each filter set.  
  
The sequence number can be used as the index number to identify the object when using the **RemoveFilter( )** and **GetFilter( )** methods.  
  
**FilterCount** for the **rptfilterset** object is incremented. Returns the object handle if successful, **0** if not.  
**AddFilterSet( )** |  Creates a new **rptfilterset** object. If one already exists, returns address to current.  
  
**FilterSetCount** is set to **1**. Returns the object handle if successful, **0** if not.  
**ClearFilters( )** |  Removes the **rptfilterset** object, resets **FilterSetCount** to **0**.  
**FilterCount([**_Setidx_**])** |  Returns the number of **rptfilter** objects in the **rptfilterset** object specified by _Setidx_ _._ If _Setidx_ is omitted, returns the number of **rptfilter** objects in the first filter set.  
**FilterSetCount( )** |  Returns the number of **rptfilterset** objects in the set (**1** or **0**).  
**GetFilterSet( )** |  Returns the handle for the **rptfilterset** object. This allows access to all **rptfilterset** properties and methods. Returns **0** if not successful.  
**GetCondition$(**_Setidx_**,**_Filteridx_**)** |  Returns a string containing the PxPlus expression associated with a filter.  
  
_Setidx_ \- Index indicating which **rptfilterset** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.  
**GetFilter(**_Setidx**,** Filteridx_**)** |  Returns the handle for an **rptfilter** object.  
  
_Setidx_ \- Index indicating which **rptfilterset** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.  
**RemoveFilter(**_Setidx_**,**_Filteridx_**)** |  Removes an **rptfilter** object.   
  
 _Setidx_ \- Index indicating which **rptfilterset** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.  
**RemoveFilterSet( )** |  Removes the **rptfilterset** object. If the **rptfilterset** object is removed, **FilterSetCount** is set to **0**. Returns the object handle if successful, **0** if not.
