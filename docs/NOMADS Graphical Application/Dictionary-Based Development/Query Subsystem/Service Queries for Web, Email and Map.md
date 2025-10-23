# Query Subsystem

**Service Queries for Web, Email, Map and Open File**|   
---|---  
  
Generally, the query interface is used to display and select data, whether it is using a **[Query Definition](Query%20Definition.md)**, a Calendar interface to display and select a date, a Calculator interface, and so on.

It is also possible to use the NOMADS Query interface to launch **_service programs_**. These are programs that perform functions related to the control to which they are attached, other than displaying and returning data.

You can set up service programs in the NOMADS Panel Designer **Query** tab by selecting _Query Program_ as the **Query Type** and entering the program to run. See **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)**.

> You can set up the following service queries:

|  **[Web Query](Service%20Queries%20for%20Web,%20Email%20and%20Map.htm#web)** |  Launches a specified website  
---|---|---  
|  **[Email Query](Service%20Queries%20for%20Web,%20Email%20and%20Map.htm#email)** |  Generates a new email window addressed to a particular person or company  
|  **[Map Query](Service%20Queries%20for%20Web,%20Email%20and%20Map.htm#map)** |  Displays a Google map for a given location  
|  **[Open File Query](Service%20Queries%20for%20Web,%20Email%20and%20Map.htm#open_file)** |  Displays a standardized file selection dialog (similar to **[GET_FILE_BOX](../../../PxPlus%20User%20Guide/Graphical%20User%20Interfaces/Interface%20Windows/Getfilebox.md)**) to allow users to select or enter a file name to open  
  
_(The Open File Query was added in PxPlus 2020.)_

##  Web Query

The Web query provides a convenient way to launch a website for a specified Web address that is entered in a Multi-Line control. After entering a valid Web address, selecting the query button invokes the website that corresponds to that address.

**_Example:  
  
_** The following is an example of a Web address entered in a Multi-Line control for which the Web query has been defined.

> **_Defining a Web Query_**

To define this query for a Multi-Line control, select the **Query** tab in the Multi-Line definition in the NOMADS Panel Designer (see **[Multi-Line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#query)**). Set the **Query Type** to _Query Program_ , and enter ***win/url** as the program. You can also select new **Query Button Options** such as _Bitmap Image_ , _Width_ , etc. to determine the appearance of the query button that will be displayed. See **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)**.

**_Using a Web Query_**

To use the Web query, the user enters a valid Web address into the Multi-Line, then clicks the query button or presses **Shift - F2** to launch the website using the default browser. If the Web address is not valid or cannot be found, the browser will display an appropriate message.

#### **Note:**  
Internet access is required.

##  Email Query

The Email service query launches a new email window with the specified email address, automatically populating the **To:** distribution line.

**_Example:_**

The following is an example of an email address entered into a Multi-Line control for which the Email query has been defined.

> **_Defining an Email Query_**

To define this query for a Multi-Line control, select the **Query** tab in the Multi-Line definition in the NOMADS Panel Designer (see **[Multi-Line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#query)**). Set the **Query Type** to _Query Program_ , and enter ***win/email** as the program. You can also select new **Query Button Options** such as _Bitmap Image_ , _Width_ , etc. to determine the appearance of the query button that will be displayed. See **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)**.

**_Using an Email Query_**

To use the email service query, the user enters an email address into the Multi-Line, then clicks the query button or presses **Shift - F2**. A new email window for the address entered is launched, assuming that a default email client has been defined and configured on the current computer.

#### **Note:**  
Internet access is required.

##  Map Query

The Map query, when defined for Multi-Line controls containing appropriate address information, invokes a Google map displaying the location of the address entered, if found. The address information can be presented either as a single Multi-Line control with all the required address components or as a grouping of Multi-Line controls that collectively contain all the necessary components of the address (i.e. street, city, province or state).

Defining the Map query differs slightly from the Web and Email queries in that consideration must be given to how the address information will be presented, i.e. in a group of Multi-Line controls or in a single Multi-Line. This is important for ensuring that all necessary steps for defining the query have been taken so that the query will function as expected.

**_Example:_**

The following is an example of a single Multi-Line control containing all the address information in one place.

> To view a video presentation on how to add a Google map query, go to **[How to Add a Google Map](https://www.youtube.com/watch?v=a4aYytpMwWM&feature=youtu.be)**.

**_Defining a Map Query_**

To define a map query for a Multi-Line control, select the **Query** tab in the Multi-Line definition in the NOMADS Panel Designer (see **[Multi-Line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#query)**). Set the **Query Type** to _Query Program_ , and enter ***win/map** as the program. You can also select new **Query Button Options** such as _Bitmap Image_ , _Width_ , etc. to determine the appearance of the query button that will be displayed. See **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)**.

**_Example:_**

The following is an example of a grouping of Multi-Line controls that collectively comprise the necessary address information, with the Map query defined for the first Multi-Line (i.e. Address 1).

> If the address segments are comprised of a group of Multi-Lines, then the query button is typically associated with the first Multi-Line in that group; in this case, Address 1. However, the street information in Address 1 is, on its own, insufficient for the Google mapping application to accurately pinpoint the location. Additional information, such as City, Province or State, is required as well. To ensure that all the necessary components of the address are passed to the Google mapping application, the User Tag property for the Multi-Line (i.e. Address 1) must be defined to identify all the information it will need.

The User Tag property is defined in the Multi-Line definition on the **Attributes** tab under the section titled _Other_. Select _Fixed_ as its type, and enter a string comprising values that must be passed to the Google mapping application to pinpoint an accurate location.

**_Example:_**

Using the above example showing the group of address Multi-Line controls, _Address 1_ (street information), _City_ and _Province_ are required; therefore, the names of these Multi-Line controls are entered, as shown below. (This example assumes that the Suppress.VAL attribute for the panel header is set to **_On_**.) The value for _Address 2_ (suite number) is not included in this example because it does not contain information that can be used to map the location. The _Postal Code_ is optional.

> If a User Tag is not defined, then only the information in the single Multi-Line control to which the query is associated will be passed to the mapping application.

**_Using a Map Query_**

To use the map query, the user enters the pertinent address information and clicks the query button or presses **Shift - F2**. If the address is complete, a map interface displays, similar to the one below, indicating the mapped location and address. If the address information passed to the mapping application is incomplete or invalid, unexpected results can occur when mapping the location.

> Standard Google Map functionality, as well as screen resizing, is available.

#### **Note:**  
Internet access is required.

##  Open File Query

The Open File query can be defined for a Multi-Line control or a Grid cell. When invoked, the Open File query displays a standardized file selection dialog (similar to **[GET_FILE_BOX](../../../PxPlus%20User%20Guide/Graphical%20User%20Interfaces/Interface%20Windows/Getfilebox.md)**) to allow users to select or enter a file name to open. The specified pathname is then loaded into the associated control.

See **[Defining an Open File Query](Service%20Queries%20for%20Web,%20Email%20and%20Map.htm#open_file_def)** for steps on defining this query for a Multi-Line or Grid cell. **_No additional coding_** is required to display the file selection dialog. It will display automatically when the query button is selected at run time.

_(The Open File Query was added in PxPlus 2020.)_

Two examples of where the Open File query is currently used in PxPlus are the **[Generate an Android or iOS App](../../../utilities/appwizard.htm#generate_app)** utility (_Icon_ field) and the **[Create Self-Signed SSL Certificate](../../../utilities/SSL%20Cert%20Generator.htm#graphical)** utility (_Target PEM file path_ field):

|   
---|---  
  
**_Defining an Open File Query_** **__**

An Open File query can be defined for a Multi-Line control (using the **[Query](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#query)** tab in **Multi-Line Properties**) or a Grid cell (using the **[Presets](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.htm#presets)** tab in **Grid Properties**). Refer to the steps below for defining an Open File query for a **Multi-Line** or for a **[Grid Cell](Service%20Queries%20for%20Web,%20Email%20and%20Map.htm#grid_cell)**. These steps include adding a query button for invoking the file selection dialog.

**_For Multi-Line:_**

|  1. |  Open the **Properties** window. Select the **Query** tab.  
---|---|---  
|  2. |  Under **Query Type** , select _Panel_.  
|  3. |  Under **Panel Information** , define the following: |  _Library_ |  Type ***win/query.***  
---|---  
_Panel_ |  Select **OPENFILE** from the drop box  
|  4. |  Under **Query Button Options** , define the appearance for the query button: |  _Bitmap Image_ |  Specify the embedded or external bitmap to display on the button (_Fixed_ or string _Expression_). Click the Query button to invoke the **Bitmaps** dialog.  
---|---  
_Width_ |  Enter the width of the query button in columns or use the spinner control.  
_Attributes_ |  Select the attributes to define the appearance of the query button. For example, to embed the query button in the control, select _Embedded_ , _Transparent_ and _Flat - No Border_.)  
  
#### **Note:**  
The associated Multi-Line **_must be one line high_** to display the query button at run time.  
  
|  5. |  The **[User-Defined Tag](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#other)** field (on the **Attributes** tab) can be _optionally_ used to customize settings, such as return the full pathname, display a different title, set the default file extension and/or set the file extensions list. Use the following format to set one or a combination of these settings (separated with a _semi-colon_): fullpath;title=_My Title_ ;ext=_png_ ;filters=_Images_ |_*.png_ \;_*.bmp_ \;_*.jpg_ \;_*.jpeg_ ,_Text_ |_*.txt_ \;_*.log_ ,_All Files_ |_*.*_ ,

#### **Note:**  
When entering the _filters=_ setting, you **_must_** escape the semi-colon that separates multiple extensions per label because the semi-colon is already used to separate different fields in the User Tag. In addition, a comma **_must_** be used to separate the different filter labels.  
  
**_For Grid Cell_**** _:_**

|  1. |  Open the **Properties** window. Select the **[Presets](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.htm#presets)** tab.  
---|---|---  
|  2. |  In the **Presets** grid, select _Query_ from the _Property_ drop box. Specify the applicable _Column/Row_.  
|  3. |  For _Value/Expression_ , click the Query button to invoke the **Query Display** panel.  
|  4. |  Under **Query Type** , select _Panel_.  
|  5. |  Under **Panel Information** , define the following: |  _Library_ |  Type ***win/query.***  
---|---  
_Panel_ |  Select **OPENFILE** from the drop box  
|  6. |  Under **Query Button Options** , specify the _Bitmap Image_ for the query button.  
|  7. |  The **[User-Defined Tag](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.htm#other_props)** field (on the **Attributes** tab) can be _optionally_ used to customize settings, such as return the full pathname, display a different title, set the default file extension and/or set the file extensions list. Use the following format to set one or a combination of these settings (separated with a _semi-colon_): fullpath;title=_My Title_ ;ext=_png_ ;filters=_Images_ |_*.png_ \;_*.bmp_ \;_*.jpg_ \;_*.jpeg_ ,_Text_ |_*.txt_ \;_*.log_ ,_All Files_ |_*.*_ ,

#### **Note:**  
When entering the _filters=_ setting, you **_must_** escape the semi-colon that separates multiple extensions per label because the semi-colon is already used to separate different fields in the User Tag. In addition, a comma **_must_** be used to separate the different filter labels.
