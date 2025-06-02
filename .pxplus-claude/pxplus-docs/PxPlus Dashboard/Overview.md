# 

**PxPlus Dashboard**|   
---|---  
  
The **PxPlus Dashboard** allows application developers to provide end users with a way to view multiple sources of information at the same time. Multiple Web pages or sources can be displayed concurrently in an independent frame that can be resized or placed where desired on the screen. Virtually any website or Web-based display such as charts, graphs or tabular information, can be used within the Dashboard.

Settings for the Dashboard are unique to the user and held within the browser, allowing each user to customize his/her layout and contents.

When used in conjunction with **[PxPlus Web Services](../PxPlus%20Web%20Services.md)**, the PxPlus Dashboard provides users with a powerful and efficient way to access their information.

## Web Server Configuration

To use the Dashboard, a Web server must be operating and configured to run the Dashboard. The Dashboard can run on either the PxPlus EZWeb Server or the Apache Web Server.

The Dashboard is often used in conjunction with PxPlus Web Services. See **[PxPlus Web Services](../PxPlus%20Web%20Services.md)** for instructions on setting up a Web server to run PxPlus Web Services.

## PxPlus EZWeb Server

The **[PxPlus EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** runs the Dashboard by default without additional configuration.

## Apache Web Server

To configure the **[Apache Web Server](../apache/config.md)** to run the Dashboard, the following lines need to be added to the **httpd.conf** file:

#### **Note:  
** The path to PxPlus should be substituted with the actual path to PxPlus on the server.

> Alias /services/ "/pxplus/lib/_web/services/"  
>  <Directory "/pxplus/lib/_web/services/">  
>  Options Indexes FollowSymLinks  
>  AllowOverride None  
>  Order allow,deny  
>  Allow from all  
>  DirectoryIndex index.html  
>  </Directory>

## Running the Dashboard

To launch the Dashboard, the user navigates to the Dashboard URL, which defaults to the following:

> **http://your.website.com/services/dashboard**

If this user is navigating to the Dashboard for the first time (or the user has cleared his/her browser settings), the default layout will be presented. This default setting is defined by a control file on the server and can be easily adapted to meet the needs of any site.

When the Dashboard is displayed, the user can drag any of the widgets around the screen using the caption line at the top of each widget. Widgets can be resized by dragging the lower right corner of any widget.

The browser maintains changes to the size and position of the widgets automatically. When they are changed and the user returns to the Dashboard, the widgets are redrawn in the same location.

The two buttons in the top right corner of the Dashboard are for Dashboard settings, while the two buttons in the top right corner of each widget are for widget settings. Information about these buttons is provided in the sections below.

##  Dashboard Settings

The top right corner of the Dashboard displays two buttons, _General Dashboard Settings_ and _Add a New Widget_.

_General Dashboard Settings_ |  Click the _gear_ button to access the following options: |  _Auto Arrange_ |  This check box option controls the placement of widgets on the Dashboard. When selected, **_all_** the widgets are automatically arranged in order, starting from the top left and proceeding left-to-right and top-to-bottom. Dragging a widget changes their order, and the Dashboard determines where to display it. Uncheck this option if you want to directly control the placement of widgets on the Dashboard.  
---|---  
_Reset_ |  Click this button to remove customized Dashboard settings and revert to the original default layout and widgets.  
_Done_ |  Click this button to save any changes and return to the Dashboard.  
_Add a New Widget_ |  Click the _plus sign_ button to add a new widget to the Dashboard. If _Auto Arrange_ is selected, the new widget is added to the end of the Dashboard. If _Auto Arrange_ is not selected, the new widget is added to the top left corner of the Dashboard. To access settings for creating (and maintaining) a widget, click the Settings button _(gear)_ in the Empty Widget window. For an explanation of these settings, see **[Adding and Maintaining a Widget](Overview.htm#widget)** below.  
  
##  Adding and Maintaining a Widget

Each widget displays two buttons in the top right corner. The Reload button _(left/right circular pointing arrows)_ refreshes the contents of the widget. The Settings button _(gear)_ invokes another window with options for creating and maintaining the widget. These options are explained in the table below.

For examples of widgets created for the different Web Services, see **[Examples - Web Service Widgets](../Examples%20Web%20Service%20Widgets.md)**.

_Contents_ |  Click the drop-down for available selections: |  _Custom_ |  Allows you to define the widget's settings for _Title_ , _URL_ , _Title Color_ and _Background_.  
---|---  
_Dashboard Info_ |  A pre-defined sample layout that displays information about the PxPlus Dashboard. The _Title_ and _URL_ are populated with the pre-defined details that display this information.  
_PVX Plus Technologies_ |  A pre-defined sample layout that displays the PVX Plus Web page. The _Title_ and _URL_ are populated with the pre-defined details that display this information.  
_(Web Service title)_ |  The titles of any Web Service records added to the JSON file using **[Web Services Maintenance](../Web%20Services%20Maintenance.md)**are listed, if applicable. These records are located in the **["options"](Overview.htm#options)** section of the JSON file, which is used to populate the _Title_ and _URL_.

#### **Note:**  
If a new Web Service has been added to the JSON file but it is not listed, reload the browser page or restart your browser.  
  
_Title_ |  Enter the text for the widget title.  
_URL_ |  Specify the URL to use for the widget contents. This can be a valid Web address or a PxPlus Web Service. You can type the full syntax or use the methods described below. If you selected a Web Service title from the _Contents_ drop-down list, the URL will be defaulted. If you created a Web Service record using **[Web Services Maintenance](../Web%20Services%20Maintenance.md)**, you can enter the URL as: **id=**_serviceID_ **_Where:_** _serviceID_ is the unique ID assigned to the Web Service record. Additional parameter values can be entered **_(Optional)_** , each separated by a space. **_Example:_** **id=_tasks_ type=_pdf_** Using this example, the Web Service ID is **_tasks_** , and the **_pdf_** output type overrides the default output type defined for this record **_only_** if _Allow Override_ is selected. If _Allow Override_ is **_not_** selected, the **_pdf_** output type will **_not_** override the default output type. An HTML error will display when a widget for this Web Service is in the Dashboard or when this Web Service is run as a URL on a browser. The HTML error will indicate that this Web Service ID does not allow the override of the specified parameter(s).

#### **Note:**  
Only parameter values that are valid for the _Type_ of Web Service can be entered.  
  
**_Example:_**  
If the Web Service ID is a _Query,_ you cannot enter **type=png** , as this applies only to a _Chart_. See **[Web Services Maintenance](../Web%20Services%20Maintenance.md)**.  
  
_Timer_ |  Number of minutes between auto-refresh intervals.  
_Title Color_ |  Select a color for the widget title from the drop-down list.  
_Background_ |  Select a background color for the widget title from the drop-down list.  
_Delete_ |  _(Trash can)_ Deletes the current widget.  
_Refresh_ |  _(Left/right circular pointing arrows)_ Refreshes the settings for the current widget back to the last saved update and exits the Settings window.  
_Save_ |  Saves any changes and closes the Settings window.  
  
To exit the Settings window without saving any changes, click the red X button in the top right corner or click the Settings button _(gear)_ again.

## Resizing a Widget

To resize a widget, position the mouse pointer on the triangle gripper in the bottom right corner of the widget and then drag the mouse until the widget is the desired size.

## Moving a Widget

To move a widget, position the mouse pointer on the widget's title bar, and then click and hold down the left mouse button to select the widget (a dark border appears around the widget). Drag the widget to the desired location.

#### **Note:**  
The positioning for the widget is also influenced by the **[Auto Arrange](Overview.htm#autoarrange)** option. If selected, dragging the widget automatically changes the order of all the widgets on the Dashboard. To directly control the placement of the widget, uncheck this option.

## Website Restrictions

While most websites and Web data can be displayed in the Dashboard, some sites, such as Google, prevent their site from being displayed inside another Web page. In that case, the Dashboard will not be able to display these sites. You can verify why a website is not displayed by checking the browser error log. Generally, you will see a message that may look similar to this:

> _Refused to display '  _https://www.google.com/?gws_rd=ssl_ ' in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'._

The message conveys the meaning that Google has decided that _only_ pages from Google are allowed to display the requested page inside another Web page.

##  Dashboard Defaults (JSON)

The PxPlus Dashboard allows you to predefine the default layout and widgets. This is done by using a JSON file **(*web/services/dashboard/dashboard.json)** on the server. The JSON (JavaScript Object Notation) file contains information for the Dashboard such as the title, the default widgets to display (along with their title, URL, color, position and size), as well as any predefined options. These elements are explained in the table below.

To see the contents of the JSON file for your current Dashboard setup, hold down the CTRL + SHIFT keys and then click the Settings button _(gear)_ in the top right corner of the Dashboard.

To edit a JSON file, select _Configure Dashboard_ from the _Web Deployment_ menu on the **[PxPlus Web IDE](../PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#webheader)** or from the _Web Deployment_ category on the **[IDE Main Launcher (Windows)](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**. Select the file to edit from the list of JSON files stored in the ***web/services/dashboard** directory. _(The ability to select a JSON file in Configure Dashboard was added in PxPlus 2016 Update 0001.)_

**Element** |  **Value** |  **Description**  
---|---|---  
"title" |  "Text" |  Title for the Dashboard page  
"autoArrange" |  true | false |  Default setting for the Auto Arrange option  
"restrict" |  true | false |  If true, the user can **_only_** select URLs from the provided list. If false, the user can enter any URL he/she wants.  
"icon" |  "URL" |  URL for an icon to display in the top left corner of the display **_(Optional)_**  
"header1" |  "Text" |  Contents of an <h1> tag that will be inserted in the Dashboard HTML immediately following the icon **_(Optional)_**  
"header2" |  "Text" |  Contents of an <h2> tag that will be inserted in the Dashboard HTML immediately following "header1" **_(Optional)_**  
"header3" |  "Text" |  Contents of an <h3> tag that will be inserted in the Dashboard HTML immediately following "header2" **_(Optional)_**  
"subheader" |  "Text" |  Text that will be inserted in the Dashboard HTML immediately following "header3" **_(Optional)_**  
"css" |  "URL" |  CSS file to be applied to the page **_(Optional)_**  
"div" |  Array |  Array of widgets to be displayed (See **"div" Array Elements** below)  
"options" |  Array |  Array of URLs that the user can select (See **"options" Array Elements** below)  
**"div" Array Elements**  
"ttl" |  "Text" |  Caption line title  
"url" |  "URL" |  URL to put in the widget  
"timer" |  nnn |  Minutes between auto-refresh cycles (0 = None)  
"color" |  "color" |  Text color for the title  
"bgcolor" |  "color" |  Background color for the title  
"top" |  nnn |  Topmost pixel of the widget  
"left" |  nnn |  Leftmost pixel of the widget  
"hi |  nnn |  Height in pixels  
"wd" |  nnn |  Width in pixels  
**"options" Array Elements**  
"ttl" |  "Text" |  Caption line title  
"url" |  "URL" |  URL to put in the widget  
  
#### **Note:**  
The information in the **"options"** section is used to load the **[Contents](Overview.htm#contents)** drop box for adding and maintaining a Dashboard widget. See **[Adding and Maintaining a Widget](Overview.htm#widget)** above.
