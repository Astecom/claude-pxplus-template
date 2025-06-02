# How To Tutorials

**How to Create a .NET Calendar Control (NOMADS)**|   
---|---  
  
Starting with PxPlus 2025, a **[.NET Interface](../Dot%20Net%20Interface.md)** was added to PxPlus that allows for the creation of .NET objects in your application.

#### **Important Note:**  
.NET requires that **Windows Desktop Runtime 8** be installed.

For this example, you will be creating a .NET MonthCalendar control in NOMADS. You will be adding various properties (i.e. color and text) and creating an event when a date is selected using the new interface.

**_Properties and Event of the .NET MonthCalendar_**

The .NET MonthCalendar is associated with various properties that allow you to customize its appearance and behavior. For this tutorial, you will be shown just a few of the many possibilities that are available when using properties.

This table lists the properties and the event for the .NET MonthCalendar you will be creating.

**Object/Property** |  **Description**  
---|---  
BackColor |  Background color of the calendar.  
ForeColor |  Color of the calendar dates text.  
TitleBackColor |  Background color of the title area of the calendar.  
TitleForeColor |  Color of the title and today's date on the calendar.  
MaxSelectionCount |  Allows a maximum number of days to be selected at the same time.  
**Event** |  **Description**  
DateSelected****|  Sets an event to show a message box when the user selects a date or date range from the calendar.****  
  
## How to Define the Main Object for the .NET MonthCalendar

These steps show you how to create a new panel and add a .NET MonthCalendar control.

1. |  In **Library Object Selection** , launch the NOMADS Panel Designer by clicking the _Panel_ toolbar button or selecting _Objects_ > _Panel Object_ in the menu bar. Enter the name of the new panel. For this example, enter the panel name: **Net_Calendar** Click _OK_.  
---|---  
2. |  Select the External Controls button on the toolbar. Draw an External Control on the panel so that it is an approximate size suitable for the .NET Calendar control.  
3. |  The **External Control Properties** window opens.  
4. |  In the _Object Name_ field, enter the control name or object handle. For this example, enter the object name: **Net_Calendar** For the calendar's **Position** and **Size** coordinates, enter the values below: _Column_ = 3.00  
 _Line_ = 1.60  
 _Width_ = 34.00  
 _Height_ = 11.60  
5. |  For the _Ext. Control_ field, click the Query button. From the list that displays, select the type of External Control you want to create. For this example, select: **.NET Controls**  
6. |  Additional fields display for specifying a .NET DLL Name, Object Name and any optional Arguments. For the _DLL Name_ , you can either choose a specific path location for the **.dll** file by clicking the Browse button or enter the .NET DLL name. For this example, enter: **System.Windows.Forms**

#### **Note:**  
The _DLL Name_ does not require the **.dll** extension.  
  
7. |  In the _Object Name_ field, enter the name of the .NET object.

#### **Note:**  
.NET object names are **_case sensitive_**.

For this example, you will be creating a .NET MonthCalendar object. For the object name, enter: **System.Windows.Forms.MonthCalendar**  
8. |  You can optionally pass in arguments when creating .NET objects. These arguments can be strings, numbers, or .NET object handles. See **[PvxHandle$](../directives/def_object.htm#Mark12)**. In the _Arguments (Optional)_ field, enter any optional arguments used by the .NET control. For this example, leave this field blank.  
9. |  Click _OK_ to exit the **External Control Properties** window and return to the NOMADS Panel Designer.  
10. |  Save and Test the panel by clicking the _Save_ and _Test_ buttons on the toolbar. A calendar displays on the panel.  
  
## How to Set Up the Default Program for the .NET MonthCalendar

These steps show you how to set up a default program for the .NET MonthCalendar in the header **Panel Definition** window. From the Panel Designer, click the _Header Panel_ option on the toolbar or select _Panel_ > _Header_ from the menu bar.

To define the appearance of the control, you will need to create a default program with some logic. This logic will be additional objects or variables that are needed for the properties you will be using in the NOMADS panel.

In the header **Panel Definition** window, on the **Display** tab, enter a _Default Program_.

For this example, enter the name of the default program: **NOM_DOTNET_Calendar**

## How to Set the Color and Appearance for the .NET MonthCalendar

These steps show you how to set the color for the .NET MonthCalendar control.

1. |  In the header **Panel Definition** window, click the **Logic** tab. In the **Pre-Display** section, you will define a method to be performed prior to the panel being displayed.  
---|---  
2. |  Select _Perform_ from the drop box. Then, create a method called **";Pre_Display_Logic"**. This method will include the logic where other necessary .NET objects and variables will be defined.  
3. |  Click the Program Logic button to the right of the drop box. The default PxPlus program editor will launch and will have created the method. In the header **Panel Definition** window, click _OK_ to accept the changes and exit the panel definition. **_Keep the program editor open as you will be adding to the program later._**  
4. |  To customize the appearance, you will create three additional objects and insert the three lines shown below. The **Application** object has methods to start and stop applications and threads, and to process Windows messages. It allows access to the **VisualStyleState** object below. Insert this line and save the program: def object app,"[.NET]System.Windows.Forms,System.Windows.Forms.Application" The **VisualStyleState** object specifies how visual styles are applied to the current application. The property needed for the calendar style will also be needed in the program. For this example, you will only apply visual styles to the calendar (nonclient area); otherwise, this property will affect all windows controls. Insert these two lines and save the program: def object vis,"[.NET]System.Windows.Forms,System.Windows.Forms.VisualStyles.VisualStyleState"  
app'VisualStyleState=1  
5. |  You will now create a new object for **Color**. Insert this line and save the program:

> def object color,"[.NET]System.Drawing,System.Drawing.Color"

This shows the new lines you have inserted:  
6. |  Save the program in the editor if you haven't already done this.  
7. |  In the NOMADS Panel Designer, double click on the .NET MonthCalendar control on the panel to invoke the **External Control Properties** window. In the **External Control Properties** window, click the **Properties** tab. In the first grid, look for **BackColor** in the _Item_ column. For this example, you will be setting the color _DarkSalmon_. Select the _Exp_ check box and enter the _Value/Expression_ : color'DarkSalmon'Pvxhandle$  
8. |  In the **External Control Properties** window, click _OK_.  
9. |  Save and Test the panel. The calendar will look similar to the one below:  
  
## How to Set the Color for the Calendar Dates Text

When setting colors, you also have the option to use RGB colors.

For this example, these steps show you how to set the color for the calendar dates text using the RGB code for the color _Ivory_ , which is RGB: 255 255 240.

1. |  In the **External Control Properties** window, click the **Properties** tab. In the first grid, look for **ForeColor** in the _Item_ column. Select the _Exp_ check box and enter the _Value/Expression_ : **color'FromArgb(255,255,240)'Pvxhandle$**  
---|---  
2. |  In the **External Control Properties** window, click _OK_.  
3. |  Save and Test the panel. The calendar will look similar to the one below:  
  
## How to Change the Background Color of the Calendar Header

These steps show you how to change the background color of the calendar header.

1. |  In the **External Control Properties** window, click the **Properties** tab. In the first grid, look for **TitleBackColor** in the _Item_ column. For this example, you will be setting the color _MediumOrchid_. Select the _Exp_ check box and enter the _Value/Expression_ : color'MediumOrchid'Pvxhandle$  
---|---  
2. |  In the **External Control Properties** window, click _OK_.  
3. |  Save and Test the panel. The calendar will look similar to the one below:  
  
## How to Add Date and Selection Properties

These steps show you how to set the maximum number of days that can be selected.

1. |  In the **External Control Properties** window, click the **Properties** tab. In the first grid, look for **MaxSelectionCount** in the _Item_ column. Enter the _Value/Expression_ : **20** (Entering a value of 20 will allow the user to select 20 days as the date range.)  
---|---  
2. |  In the **External Control Properties** window, click _OK_.  
3. |  Save and Test the panel. The calendar will look similar to the one below where a maximum of 20 days can be selected.  
  
## How to Set an Event

These steps show you how to set an event to show a message box when the user selects a date or date range from the calendar, and then display the date or dates selected in the multi-line fields.

For this example, the **DateSelected** event will be triggered when the user selects a date or date range.

1. |  In the NOMADS Panel Designer, invoke the **External Control Properties** window. Click the **Properties** tab. In the second grid, look for **DateSelected** in the _Event_ column. In the _Function_ column, select _Perform_ from the drop box. In the _Logic_ cell, enter: **";Date_Selected"**  
---|---  
2. |  Return to the program editor and load the default program, **NOM_DOTNET_Calendar** , which you created earlier. Insert this method and save the program: Date_Selected:  
fd$=net_calendar.ctl'selectionstart'toString$("dd MMM yyyy")  
td$=net_calendar.ctl'selectionend'toString$("dd MMM yyyy")  
if fd$<>td$ then {! fd$>td$ more than 1 date was selected  
msgbox "From Date: "+fd$+sep+"To Date: "+td$,"Date Range Selection"  
return  
}  
msgbox "Date Selected: "+fd$,"Date Selection"  
return  
!  
3. |  In the **External Control Properties** window, click _OK_.  
4. |  Save and Test the panel. Selecting a date range will result in the message box displaying the date range selected.  
  
## How to Display the Dates in "From Date" and "To Date" Multi-Line Fields

These steps show you how to display the selected dates in "From Date" and "To Date" multi-line fields.

For this example, you will need to create these two fields and add them below the .NET MonthCalendar control.

1. |  Expand the height of the Net_Calendar panel so that you have enough space to add the two multi-line fields (as shown below).  
---|---  
2. |  Create two multi-line fields with the following details: For the name of the first multi-line, enter: **fd** (stands for _From Date_). For the _Initial Value_ , enter: **From Date** Click _OK_ to save. For the name of the second multi-line, enter: **td** (stands for _To Date_). For the _Initial Value_ , enter: **To Date** Click _OK_ to save.  
  
**_How to Set Up the Attributes for the Panel Header_**

1. |  In the NOMADS Panel Designer, open the header **Panel Definition** window.  
---|---  
2. |  Click the **Attributes** tab. Select the _Auto Refresh_ check box. By setting this option, changes to the **fd$** or **td$** values will automatically be displayed on the panel without setting REFRESH_FLG=1.  
3. |  Click _OK_ to save these changes and exit the **Panel Definition** window.  
  
**_How to Show/Hide the Multi-line with a Dependency_**

For this example, you will be defining a dependency so that when the user selects a range of dates, those dates will show in the multi-line controls, but when the user selects only one date, then only one multi-line will show.

1. |  In the NOMADS Panel Designer, select _Utilities_ > _Dependency Definition_ from the menu bar.  
---|---  
2. |  The **Dependency Definition** window opens. In the _Condition_ cell, enter: **td$=fd$** The _Invert_ check box is automatically selected. Leave this selected to ensure the opposite logic when the condition is false.  
3. |  Click the ellipsis button (_three dots_) in the _Actions for Controls_ cell. The **Actions for Controls** window opens, showing the two control names. In the _Function_ column, leave the **fd** control set to _Ignore_. For the **td** control, select _Hide_ from the drop down list.  
4. |  Click _OK_ to accept these selections and exit the **Actions for Controls** window.  
5. |  You are returned to the **Dependency Definition** window. Click _OK_ again.  
6. |  Save and Test the panel. This first example shows selecting a **_date range_** results in the message box displaying the From/To dates selected. The _From Date_ and _To Date_ fields are populated with these dates. This next example shows that selecting a **_single date_** results in the message box displaying the date selected, and the _To Date_ field is hidden, since only one date was selected. **__**  
  
## How to Clean Up Objects

These steps show you how to clean up any objects that were defined.

1. |  From the NOMADS Panel Designer, invoke the header **Panel Definition** window for the _Net_Calendar_ panel by clicking the _Header Panel_ option on the toolbar or selecting _Panel_ > _Header_ from the menu bar.  
---|---  
2. |  Click the **Logic** tab. You will be using the **On Exit** section to perform the cleanup of any objects defined.  
3. |  Select _Perform_ from the drop box. The method that you will be creating is called: **";On_Exit_Logic"** This will perform the method where all the objects will be dropped.  
4. |  If the program is not already loaded in the editor, click the Program Logic button to the right of the drop box to load the default program: **NOM_DOTNET_Calendar** Insert this method and save the program: On_Exit_Logic:  
drop object color,err=*next  
drop object app,err=*next  
drop object vis,err=*next  
drop object dateselected,err=*next  
drop object net_calendar,err=*next  
!  
end   
!  
  
## PxPlus Program .NET Calendar (NOM_DOTNET_Calendar)

After completing this tutorial example, you should have a working program similar to the one below:

! dotnet_calendar - .NET calendar nomads   
!   
Post_Display_Logic:  
def object APP,"[.NET]System.Windows.Forms,System.Windows.Forms.Application"   
def object VIS,"[.NET]System.Windows.Forms,System.Windows.Forms.VisualStyles.VisualStyleState"  
APP'VISUALSTYLESTATE=1 ! Visual styles are applied only to the nonclient area.   
def object COLOR,"[.NET]System.Drawing,System.Drawing.Color"   
return   
!  
Date_Selected:  
fd$=net_calendar.ctl'selectionstart'toString$("dd MMM yyyy")  
td$=net_calendar.ctl'selectionend'toString$("dd MMM yyyy")  
if fd$<>td$ then {! fd$>td$ more than 1 date was selected   
msgbox "From Date: "+fd$+sep+"To Date: "+td$,"Date Range Selection"   
return   
}  
msgbox "Date Selected: "+fd$,"Date Selection"   
return   
!   
On_Exit_Logic:  
drop object COLOR,err=*next  
drop object APP,err=*next  
drop object VIS,err=*next  
drop object DATESELECTED,err=*next  
drop object NET_CALENDAR,err=*next  
!   
end   
!

## See Also

**[.NET Interface](../Dot%20Net%20Interface.md)  
[How To Tutorials (for .NET Interface)](Dot%20NET%20Tutorials%20Intro.md)  
[DEF OBJECT Define Windows Object](../directives/def_object.md)  
[ON EVENT Event Processing](../directives/on_event.md)**
