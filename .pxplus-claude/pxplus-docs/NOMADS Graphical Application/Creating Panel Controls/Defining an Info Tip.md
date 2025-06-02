# Creating Panel Controls  
  
**Defining an Info Tip**|   
---|---  
  
The **Define Info Tip** dialog is used to customize the floating tip associated with a control by adding features such as a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips.

Two types of tips can be defined:

_Standard_ |  Allows you to enter a standard tip using default formatting (i.e. font style and size) for the tip text. Provides the option to insert a hyperlink, which is useful for directing users to an additional source of information such as a page in an online manual or a relevant website.  
---|---  
_HTML_ |  Provides a simplified HTML Editor with pre-defined toolbars for customizing the tip text. _(Support for HTML tips was added in PxPlus 2017.)_  
  
_(The Define Info Tip dialog was added in PxPlus 2016.)_

The **Define Info Tip** dialog is accessed when using the **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)** to create or edit the design properties for the following panel controls: **[Button](Button%20Control/Overview.md)**, **[Radio Button](Radio%20Button%20Control/Overview.md)**, **[Check Box](Check%20Box%20and%20Tri-State%20Control/Overview.md)**, **[List Box](List%20Box%20Controls/List%20Box%20Type.md)**, **[Drop Box](Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[Multi-Line](Multi-Line%20Control/Multi-Line%20Properties.md)**, **[Grid](Grid%20Control/Grid%20Properties.md)** and **[Chart](Chart%20Control/Chart.md)**. In the properties window for the control, select the **User Aid** tab and click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialog. When clicking _OK_ to save the tip, the **Floating Tip** drop box on the **User Aid** tab is set to _Expression_.

Below are examples of a **_Standard_** tip and an **_HTML_** tip defined with an optional hyperlink in the **Define Info Tip** dialog for a Button control. When the mouse pointer is positioned over the Button control (in the _Test Panel_ below), the floating tip with the hyperlink is displayed.

|    
**_"Standard" Tip Definition_** |    
**_"HTML" Tip Definition_**  
 _(Added in PxPlus 2017)_  
---|---|---  
  
  
**_Floating Tip with Hyperlink_**  
  
The **Define Info Tip** dialog consists of the following options:

**Info Tip** |  These options are **_required_** when defining a tip: |  _Title_ |  Enter the heading to display in the first line of the tip.  
---|---  
_Tip Type_ |  Available selections: |  _Standard_ |  **_(Default)_** Select this style to create a standard tip with text using the default formatting (i.e. font style and size). Provides the option to insert a hyperlink.  
---|---  
_HTML_ |  Select this style to create a tip using a simplified HTML Editor to customize the tip text. Once _HTML_ is selected, the _Tip Type_ cannot be switched back to _Standard_. You will need to click _OK_ or _Cancel_ to exit the dialog and then define a new tip as _Standard_.  
_Tip Text_ |  Enter the contents for the tip, which will display when the mouse pointer is positioned on the control. The tip text displays directly below the tip title and includes helpful information about the control.  
  
For **_Standard_** tips, type the text to be displayed, pressing Enter to start a new line. Maximum size is 2K.  
  
For **_HTML_** tips, use the HTML Editor provided to format any entered text, insert a link, insert an image, select text and/or background colors, etc.  
  
_(Support for selecting Tip Type was added in PxPlus 2017.)  
(Support for HTML tips was added in PxPlus 2017.)_  
  
**Hyperlink** |  **_(Standard Tip)_** These options are used to define a hyperlink that will be inserted within the tip _(Optional)_ : |  _URL_ |  Internet address that you want the user to access within the tip. For the hyperlink to function in iNomads, the URL must be preceded with _http://_.  
---|---  
_Text_ |  Text that will display as the hyperlink.  
  
Entering **_a URL only_** without hyperlink text will display the full URL as a hyperlink below the tip text.  
  
Entering **_a URL and hyperlink text_** will display the hyperlink text as the link to the URL below the tip text.  
  
Entering **< a>** anywhere within the _Tip Text_ field will position the hyperlink in that location rather than below the tip text.  
  
**Hover here to test tip** |  **_(Standard Tip)_** This hyperlink button is available only after a _Title_ and _Tip Text_ have been entered. It is used to check the appearance and functionality of the tip as the user will see it.  
  
To test the tip, hover the mouse pointer over this button without clicking on it. The tip displays for a few seconds, allowing enough time to move the mouse off the control and click the hyperlink within the tip, if one has been defined.  
**Press/Hover here to update/test tip** |  **_(HTML Tip)_** This hyperlink button is used to check the appearance and functionality of the tip as the user will see it. To test the tip before saving it, click this button to first update the tip with any changes. Then, test the tip by hovering the mouse pointer over this button. _(The Press/Hover hyperlink button for HTML tips was added in PxPlus 2017.)_  
_Ok_ |  Saves the current tip and closes this dialog. The **Floating Tip** drop box on the **User Aid** tab changes to _Expression_ , and the adjacent multi-line input is populated with some of the tip's details.  
_Delete_ |  Displays a message that asks you to confirm the deletion of the current tip. Deleting the tip closes this dialog, changes the **Floating Tip** drop box on the **User Aid** tab to _Fixed_ and clears the tip's details from the adjacent multi-line input. _(The Delete button was added in PxPlus 2017.)_  
_Cancel_ |  Cancels any changes to the current tip and closes this dialog.  
  
#### **Note:**  
Setting the **['TC'](../../parameters/tc.md)** parameter to -2 allows you to customize the appearance of the tooltip. See **[*TOOLTIP](../../utilities/tooltip.md)**.
