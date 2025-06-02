# Running Your Application  
  
**iNomads Classes**|   
---|---  
  
You can apply a pre-defined iNomads class to a panel header or a panel control in the control's properties window within **[NOMADS](../NOMADS%20Graphical%20Application/Introduction.md)**.

A pre-defined iNomads class can also be added to **[Themes](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Themes.md)** and **[Visual Classes](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)**.

_(The ability to apply an iNomads class to panel headers and controls was added in PxPlus 2016.)  
(The ability to add an iNomads class in both Themes and Visual Class Maintenance was added in PxPlus 2020.)_

A list of pre-defined iNomads classes is shown below, consisting of the name of the iNomads class, the control types to which that class can be applied, and the effect of that class on the control in iNomads.

#### **Important Note:**  
The name of the iNomads class **_must_** be entered in the case shown below.  
  
The iNomads classes that start with **link_** are reserved for special Web-style buttons, and their names should not be modified. Only the **link_** classes defined below can be used (e.g. link_button is not a valid iNomads class).

**iNomads Class** |  **Control Type** |  **Description**  
---|---|---  
**iNomadsHidden** |  Panel Header  
  
Button control  
Check Box and Tri-State control  
Drop Box control  
Folder control  
Frame control  
Grid control  
List Box control  
Multi-Line control  
Radio Button control  
Text control |  The control will not be displayed in iNomads. _(The iNomadsHidden class was added in PxPlus 2016.)_  
**iquery** |  Panel Header (query) |  Added automatically by the system to indicate that the panel is a query lookup pane. _(The iquery class was added in PxPlus 2023.)_  
**link_http  
  
 _or  
  
_ link_https** |  Button control |  Can be used on a "Web style" button to indicate the button is to present as a true Web hyperlink URL to be handled totally in the browser. **_Example:_** A Web style button with this iNomads Class and the text "http://www.yahoo.com" will open a new tab or browser session to Yahoo. Any NOMADS logic for On Focus or On Press will be ignored, and the button will be considered Signal Only (no focus). _(The link_http (link_https) class was added in PxPlus 2019.)_  
**link_mailto** |  Button control |  Can be used on a "Web style" button to indicate the button is to present as a true Web hyperlink URL that can be used to initiate an email to the email address specified in the button text. **_Example:_** A Web style button with this iNomads Class and the text "support@example.com" will become a standard page hyperlink to initiate an email to the email address provided using whatever email client the browser is configured to use. Any NOMADS logic for On Focus or On Press will be ignored, and the button will be considered Signal Only (no focus). _(The link_mailto class was added in PxPlus 2019.)_  
**link_tel** |  Button control |  Can be used on a "Web style" button to indicate the button is to present as a true Web hyperlink URL that can be used with smartphones to dial the telephone number specified in the button text. **_Example:_** A Web style button with this iNomads Class and the text "1-647-727-8770" will become a standard page hyperlink to place a call to 16477278770. Any NOMADS logic for On Focus or On Press will be ignored, and the button will be considered Signal Only (no focus). _(The link_tel class was added in PxPlus 2019.)_  
**link_tiphttp  
  
 _or_  
  
link_tiphttps** |  Button control |  Can be used on a "Web style" button to indicate the button is to present as a true Web hyperlink URL to be handled totally in the browser. **_Example:_** A Web style button with this iNomads Class and a tip of "http://www.yahoo.com" will open a new tab or browser session to Yahoo. Any NOMADS logic for On Focus or On Press will be ignored, and the button will be considered Signal Only (no focus). _(The link_tiphttp (link_tiphttps) class was added in PxPlus 2019.)_  
**link_tipmailto** |  Button control |  Can be used on a "Web style" button to indicate the button is to present as a true Web hyperlink URL that can be used to initiate an email to the email address specified in the button tip. **_Example:_** A Web style button with this iNomads Class and a tip of "support@example.com" will become a standard page hyperlink to initiate an email to the email address provided using whatever email client the browser is configured to use. Any NOMADS logic for On Focus or On Press will be ignored, and the button will be considered Signal Only (no focus). _(The link_tipmailto class was added in PxPlus 2019.)_  
**link_tiptel** |  Button control |  Can be used on a "Web style" button to indicate the button is to present as a true Web hyperlink URL that can be used with smartphones to dial the telephone number specified in the button tip. **_Example:_** A Web style button with this iNomads Class and a tip of "1-647-727-8770" will become a standard page hyperlink to place a call to 16477278770. Any NOMADS logic for On Focus or On Press will be ignored, and the button will be considered Signal Only (no focus). _(The link_tiptel class was added in PxPlus 2019.)_  
**PagedView** |  Grid control  
List Box control |  The grid or list box displays with a _paged_ view using page numbers across the bottom instead of scroll bars. _(The PagedView class was added in PxPlus 2016.)_  
**ScrollView** |  Grid control  
List Box control |  The grid or list box displays with a _scroll_ view using scroll bars.

#### **Note:**  
If _ScrollView_ is entered in the _iNomads Class_ field for a grid or list box control in NOMADS, and the Template check box option _Use Paged output for list views_ is also selected on the **[Lists](Template%20Configuration.htm#lists)** tab of the iNomads **Template Configuration** window, the _ScrollView_ class will take precedence.

_(The ScrollView class was added in PxPlus 2016.)_
