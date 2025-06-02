# How To Tutorials

**How to Create a .NET Calendar Control (Program)**|   
---|---  
  
Starting with PxPlus 2025, a **[.NET Interface](../Dot%20Net%20Interface.md)** was added to PxPlus that allows for the creation of .NET objects in your application.

#### **Important Note:**  
.NET requires that **Windows Desktop Runtime 8** be installed.

For this example, you will be creating a .NET MonthCalendar control **_in a program_**. You will be adding various properties (i.e. color and text) and creating an event when a date is selected using the new interface.

**_Properties and Event of the .NET MonthCalendar_**

The .NET MonthCalendar is associated with various properties that allow you to customize its appearance and behavior. For this tutorial, you will be shown just a few of the many possibilities that are available when using properties.

This table lists the properties and the event for the .NET MonthCalendar you will be creating.

**Object/Property** |  **Description**  
---|---  
BackColor |  Background color of the calendar.  
ForeColor |  Color of the calendar dates.  
TitleBackColor |  Gets or sets a value indicating the background color of the title area of the calendar.  
TitleForeColor |  Adds the text color of the title and today's date or a selected date on the calendar.  
MaxSelectionCount |  Allows the number of days to be selected at the same time.  
**Event** |  **Description**  
DateSelected****|  Event triggered by a selected date or range of dates.****  
  
## How to Define the Main Object for the .NET MonthCalendar

On the Command line, define a **_MonthCalendar_** object.

**_Syntax:_**

def object net_calendar,@(30,10,33,12),"[.NET]System.Windows.Forms,System.Windows.Forms.MonthCalendar"

## How to Customize the Appearance of the .NET MonthCalendar

These steps show you how to customize the appearance of the .NET MonthCalendar.

1. |  You will create three additional objects and set the background color. The **Application** object has methods to start and stop applications and threads, and to process Windows messages. It allows access to the **VisualStyleState** object below. **_Syntax:_** def object app,"[.NET]System.Windows.Forms,System.Windows.Forms.Application" The **VisualStyleState** object specifies how visual styles are applied to the current application. The property needed for the calendar style will also be needed in the program. For this example, you will only apply visual styles to the calendar (nonclient area); otherwise, this property will affect all windows controls. **_Syntax:_** def object vis,"[.NET]System.Windows.Forms,System.Windows.Forms.VisualStyles.VisualStyleState"  
app'VisualStyleState=1  
  
  
---|---  
2. |  Define a **Color** object to change the appearance of the calendar. **_Syntax:_** def object color,"[.NET]System.Drawing,System.Drawing.Color"  
3. |  Set **BackColor$** for the background color of the calendar. For this example, the background color will be _Moccasin_. The **[PvxHandle$](../directives/def_object.htm#Mark12)** property is used for assigning or passing in a .NET object to a .NET object constructor, property or method. **_Syntax:_** net_calendar'BackColor$=color'Moccasin'pvxhandle$  
  
## How to Set the Color for the Calendar Dates Text

When setting colors, you also have the option to use RGB colors.

For this example, you will be using the RGB code for the color _Crimson_ , which is RGB: 220 20 60.

**_Syntax:_**

net_calendar'ForeColor$=color'FromArgb(220,20,60)'pvxhandle$

## How to Change the Background Color of the Calendar Header

This step shows you how to set the **TitleBackColor** for the background color of the calendar title area.

For this example, you will be using the color _Purple_.

**_Syntax:_**

net_calendar'TitleBackColor$=color'Purple'pvxhandle$

## How to Change the Text Color for the Calendar Title and Today's Date

This step shows you how to set the **TitleForeColor** for the text in the calendar title and today's date.

For this example, you will be using the color _White_.

**_Syntax:_**

net_calendar'TitleForeColor$=color'White'pvxhandle$

## How to Add Date and Selection Properties

These steps show you how to set the maximum number of days that can be selected.

1. |  To force the maximum number of days that can be selected, set **MaxSelectionCount** =17. (Setting a value of 17 will allow the user to select 17 days as the date range.) **_Syntax:_** net_calendar'MaxSelectionCount=17  
---|---  
2. |  Before going any further, enter **START** on the Command line to drop all objects.  
  
## How to Create a Program to Run

To create the calendar programmatically, you will need to create a program to run.

For this example, you will be creating and naming the program: **dotnet_calendar**

1. |  Copy and paste the following lines of code into a program to be executed. ! dotnet_calendar - .NET calendar programmatically   
!    
! Create and initialize the Calendar  
def object net_calendar,@(30,10,33,12),"[.NET]System.Windows.Forms,System.Windows.Forms.MonthCalendar"  
def object app,"[.NET]System.Windows.Forms,System.Windows.Forms.Application"  
def object vis,"[.NET]System.Windows.Forms,System.Windows.Forms.VisualStyles.VisualStyleState"  
app'visualstylestate=1 ! Visual styles are applied only to the nonclient area.  
def object color,"[.NET]System.Drawing,System.Drawing.Color"   
!    
! Define the object forColor   
net_calendar'backcolor$=color'moccasin'pvxhandle$ ! background color of the calendar.   
net_calendar'forecolor$=color'crimson'pvxhandle$ ! text color used to display the days of the month.   
net_calendar'titlebackcolor$=color'purple'pvxhandle$ ! background color of the title area (month and year).   
net_calendar'titleforecolor$=color'white'pvxhandle$ ! text color of the title area.  
net_calendar'maxselectioncount=17 ! max num days that can be selected in a single range !   
!   
! Wait for user to click the button  
while 1  
obtain (0,siz=1)'ME',*,'MN'  
if ctl=-1999 \  
then break  
wend   
!   
end  
---|---  
2. |  Save the program as: **"dotnet_calendar"**  
3. |  Run the program.  
4. |  The calendar will display on the screen. A maximum of 17 days may be selected. The program will wait for input, at the **WHILE/WEND** loop, until the dialog is exited via the **X** (Close button) in the top right corner.  
  
## How to Set an Event

Events are functions of the calendar that will be performed when something happens in the .NET control.

For this example, the **DateSelected** event of the .NET MonthCalendar control will be used.

**_How to Define an Event to Show a Message Box_**

These steps show you how to define an event to show a message box when the user selects a date or date range from the calendar.

1. |  Load the **dotnet_calendar** program and insert these lines prior to the **WHILE/WEND** loop: **_Syntax:_** DateSelected=new("CalSelection")  
on event from Net_Calendar process DateSelected  
---|---  
2. |  Save and close the program.  
3. |  To select and show a single date or date range, create an object program for the main program to invoke with the lines of code shown below. This program must be called **CalSelection.pvc** and be saved in the same directory as the main program. Insert these lines and save the program: def class "CalSelection"   
!   
function dateselected(sender,evtargs)DATESELECTED for event "DateSelected"  
end def   
!   
DATESELECTED:  
enter sender,evtargs  
fd$= evtargs'start'toString$("dd MMM yyyy")  
td$= evtargs'end'toString$("dd MMM yyyy")  
if fd$<>td$ \  
then \  
{ ! fd$>td$ more than 1 date was selected  
msgbox "From Date: "+fd$+sep+"To Date: "+td$,"Date Range Selection"  
return   
}  
msgbox "Date Selected: "+fd$,"Date Selection"   
!   
return  
4. |  Save and close the program.  
5. |  Reload and run the **dotnet_calendar** program.  
6. |  Selecting a **_date range_** results in a message box displaying the date range selected.  
7. |  Selecting a **_single date_** results in a message box displaying the date selected.  
  
## How to Clean Up Objects

These steps show you how to clean up any objects that were defined.

1. |  Insert these lines before the **END** command: drop object color,err=*next  
drop object app,err=*next  
drop object vis,err=*next  
drop object dateselected,err=*next  
drop object net_calendar,err=*next  
---|---  
2. |  Save the program in the editor.  
  
## PxPlus Program .NET Calendar (dotnet_calendar)

At the end of this tutorial example, you should have a working program similar to the one below:

! dotnet_calendar - .NET calendar programmatically   
!    
! Create and initialize the Calendar  
def object net_calendar,@(60,20,33,12),"[.NET]System.Windows.Forms,System.Windows.Forms.MonthCalendar"  
def object app,"[.NET]System.Windows.Forms,System.Windows.Forms.Application"  
def object vis,"[.NET]System.Windows.Forms,System.Windows.Forms.VisualStyles.VisualStyleState"  
app'visualstylestate=1 ! Visual styles are applied only to the nonclient area.  
def object color,"[.NET]System.Drawing,System.Drawing.Color"   
!    
! Define the object for Color   
net_calendar'backcolor$=color'moccasin'pvxhandle$ ! background color of the calendar.   
net_calendar'forecolor$=color'crimson'pvxhandle$ ! text color used to display the days of the month.   
net_calendar'titlebackcolor$=color'purple'pvxhandle$ ! background color of the title area (month and year).   
net_calendar'titleforecolor$=color'white'pvxhandle$ ! text color of the title area.  
net_calendar'maxselectioncount=17 ! max num days that can be selected in a single range !   
!   
dateselected=new("CalSelection")  
on event from net_calendarprocess dateselected  
!   
while 1  
obtain (0,siz=1)'ME',*,'MN'  
if ctl=-1999 \  
then break  
wend   
!   
drop object color,err=*next  
drop object app,err=*next  
drop object vis,err=*next  
drop object dateselected,err=*next  
drop object net_calendar,err=*next  
!   
end   
! 

## PxPlus DateSelected Object Program (CalSelection.pvc)

def class "CalSelection"   
!   
function dateselected(sender,evtargs)DATESELECTED for event "DateSelected"  
end def   
!   
DATESELECTED:  
enter sender,evtargs  
fd$= evtargs'start'toString$("dd MMM yyyy")  
td$= evtargs'end'toString$("dd MMM yyyy")  
if fd$<>td$ \  
then \  
{ ! fd$>td$ more than 1 date was selected  
msgbox "From Date: "+fd$+sep+"To Date: "+td$,"Date Range Selection"  
return   
}  
msgbox "Date Selected: "+fd$,"Date Selection"   
!   
return

## See Also

**[.NET Interface](../Dot%20Net%20Interface.md)  
[How To Tutorials (for .NET Interface)](Dot%20NET%20Tutorials%20Intro.md)  
[DEF OBJECT Define Windows Object](../directives/def_object.md)  
[ON EVENT Event Processing](../directives/on_event.md)**
