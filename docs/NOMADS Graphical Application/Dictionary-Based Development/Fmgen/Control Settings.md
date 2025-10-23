# File Maintenance Generator

**Step 4: File Maintenance Control Settings**|   
---|---  
  
Define the options for field and screen layout, fonted text and full horizontal lines. Fonted text and horizontal lines can be added to the panel layout in **[Step 6: Fields](Field%20Layout.md)**.

When only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , options that are not applicable are not displayed, as shown in the second screen shot:

|    
**_When only "HTML Page" is selected_**  
---|---  
  
This panel consists of the following:

**Select****field and screen layout options** |  _Define the options for field and screen layout._  
---|---  
_Prompt Alignment_ |  Sets the alignment of text controls displayed as field names on the generated panel. Click the drop-down for a list of selections: |  _Left_ |  **_(Default)_** Field names are left-aligned.  
---|---  
_Right_ |  Field names are right aligned. This option does not apply to HTML pages.  
_No Prompts_ |  No field names are displayed.  
_Append Colon on Prompt_ |  **_(Available if Prompt Alignment is Left or Right)_** Adds a **:**  _(colon)_ to the end of text controls displayed as field names (e.g. City**:**). (**_Default_** is On.)  
_Tab Sequence_ |  **_(Applicable for NOMADS Panels Only)_** Sets the tabbing order: |  _Horizontal_ |  Tabbing moves across, one row at a time.  
---|---  
_Vertical_ |  Tabbing moves down column 1, then continues at the top of column 2 and moves down, etc.  
_Required Fields_ |  **_(Available if Prompt Alignment is Left or Right)_** Determines whether required fields are marked with a preceding * _(asterisk)_ and includes the option to display a brief explanation for the asterisk in the bottom left of the generated panel.

#### **Note:**  
If there are no required fields or the _Prompt Alignment_ option is set to _No Prompts_ or the **[Inquiry Only](Object%20Definition.htm#inquiry)** check box is selected, this drop box will be set to _Do not indicate required fields_ and disabled.

Click the drop-down arrow for a list of selections: |  _Indicate with preceding *_ |  **_(Default)_** Required fields are marked with a preceding *****  _(asterisk)_.  
---|---  
_Indicate with preceding * and include explanation text_ |  Required fields are marked with a preceding *****  _(asterisk)_. The explanation text, **_* indicates required field_** , is displayed in the bottom left of the generated panel.  
_Do not indicate required fields_ |  Required fields are not marked.  
_Vertical Spacing_ |  **_(Applicable for NOMADS Panels Only)_** Determines the amount of vertical spacing between input controls on the generated panel. Values between 0.50 and 3.0 lines are allowed. (**_Default_** is 0.50.)  
_SHOW. Visual Class_ |  **_(Applicable for NOMADS Panels Only and if Extended Class Validation was defined)_** Specify a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** (_Fixed_ value or string _Expression_) for applying default settings to Extended Validation **SHOW**._xxxxxx_ Multi-Lines created from data elements in the selected table. See **[Extended Class Validation and Display](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)**.

#### **Note:**  
If a _SHOW. Visual Class_ is specified, the _Locked_ , _Borderless_ and _Transparent_ properties for the **SHOW**._xxxxxx_ Multi-Lines will be turned **_Off_** unless specifically defined in the Visual Class.  
  
If no _SHOW.__Visual Class_ is specified, the _Locked_ , _Borderless_ and _Transparent_ properties will remain **_On_**.

_(The SHOW. Visual Class option was added in PxPlus 2020.)_  
**Select fonted text options** |  _Define the options for fonted text (other than field prompts) on the NOMADS panel. These options do not apply to HTML pages._ _Fonted_ _text can be added to the panel layout in_**[Step 6: Fields](Field%20Layout.md)** _by entering text directly into a row in the Layout Grid._  
_Font_ |  **_(Applicable for NOMADS Panels Only)_** Font type to apply to the Fonted Text entered in the _Layout Grid_. Click the drop-down arrow for a list of selections.  
_Size_ |  **_(Applicable for NOMADS Panels Only)_** Click the drop-down for a list of sizes that relate to the current font (_Quarter, Half, Regular**(Default)** , Double)_ or enter a specific size.  
_Alignment_ |  **_(Applicable for NOMADS Panels Only)_** Click the drop-down for a list of selections: _Left Justify**(Default)** , Center, Right Justify_.  
_Visual Class_ |  **_(Applicable for NOMADS Panels Only)_** Assign a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** to the fonted text control.

#### **Note:**  
Visual class names that begin with an "***** " _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.  
  
**Select full horizontal line option** |  _Define the option for**full** horizontal lines on the NOMADS panel. This option does not apply to HTML pages._ _Full horizontal lines can be added to the panel layout in**Step 6: Fields** by right clicking in the Layout Grid. From the popup menu, select _ **[Add Horizontal Line](Enhanced%20Layout.htm#add_hline)** _(if using Enhanced Layout) or select_**[Add Full Horizontal Line](Two_column.htm#add_full)** _(if using Two-Column Layout)._  
_Vertical Spacing_ |  **_(Applicable for NOMADS Panels Only)_** Vertical spacing to apply before and after each **_full_** horizontal line that is added in **[Step 6: Fields](Field%20Layout.md)**. This option does not apply to half horizontal lines. Values between 0.25 and 3.0 lines are allowed. (**_Default_** is 0.50.)  
  
## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**
