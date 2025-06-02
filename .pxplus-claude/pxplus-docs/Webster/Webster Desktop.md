# Webster+  
  
***WEBSTER/DESKTOP** |  **_Display Webster+ Page_**  
---|---  
  
## Usage

Webster+ provides the ability to create true Web-based applications utilizing many of the tools and accessories found in the NOMADS development environment. This makes it easier and faster to develop Web applications, and the Webster+ Desktop application (***webster/desktop**) provides a means to seamlessly integrate the new Web-based programs into an existing Windows desktop package.

Using ***webster/desktop** , the system can run a Webster+-based Web page in a Windows container that allows it to look like a Windows application. This allows you to work on developing a Web-based solution, phasing the new application into your existing Windows solution over time without it looking out of place.

_(The *webster/desktop utility was added in PxPlus 2022 Update 1.)_

## Calling Sequence

1. |  _Display Page:_ |  **CALL** "***webster/desktop** ", **ERR=**_stmtref_ _, page$, values$, host$, template$_  
---|---|---  
2. |  _Run/Display Program:_ |  **CALL** "***webster/desktop;Run** ",**ERR=**_stmtref_ _, program$, values$, host$, template$_  
  
**_Where:_**

|  _page$_ |  Name of the page to be displayed.  
---|---|---  
|  _program$_ |  Name of the program to be run/displayed.  
|  _values$_ |  A semi-colon delimited list of variables and associated values to be passed to the page/program on the generated URL. Variable name and value are separated by an equals sign.  
|  _host$_ |  Name of the host. This should be in the form of **http:**_//server.domain_ or **https:**_//server.domain_. If omitted, the default name of **http://127.0.0.1:8088** is used (this can be changed by running ***webster/desktop;Setup**).  
|  _template$_ |  Name of the template to use. The default is ***desktop** (this can be changed by running ***webster/desktop;Setup**).  
  
## Description

Once called, this utility will create a window into which the specified Webster+ page will be displayed using the built-in PxPlus **[Chromium Browser Object](../utilities/browser.md)**. The window will, on initial display, be centered on the screen and occupy approximately three-quarters of the width and height of the display. The user can move/resize the page as desired with the new position and dimensions being preserved on the file **webdesk.inf** and used on any subsequent invocation of the same page/program by the same user/workstation.

The ***webster/desktop** program can be added to the PxPlus IDE or used in a Windows short cut.

When defined as a task in the PxPlus IDE, the _Panel/Program_ parameter should be ***webster/desktop** (or ***webster/desktop;Run**) with the following parameters:

|  _Parameter 1:_ |  Page/program  
---|---|---  
|  _Parameter 2:_ |  Values (if any)  
|  _Parameter 3:_ |  Host name with the **http/https** suffix included  
|  _Parameter 4:_ |  Template file to use  
  
When defining a Windows short cut, the values following **-arg** would coincide with the above parameter list.

## Setting *webster/desktop Defaults

The Webster+ Desktop utility uses the file **webdesk.inf** to maintain both the system defaults for host and template, along with the size/position for pages the user has previously used.

To define the default host address and template to use, either of the following methods can be used:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _Webster+ Desktop Configuration_.  
From the PxPlus Command window |  Enter: **RUN "*webster/desktop;Setup"** on a Windows system.  
  
The **Webster+ Desktop Configuration** window is displayed:

> This window consists of the following:

_Host:name_ |  Enter the name of the host. This should be in the form of **http:**_//server.domain_ or **https:**_//server.domain_. If omitted, the default name of **http://127.0.0.1:8088** is used.  
---|---  
_Template_ |  Enter the name of the template to use. The default is ***desktop.html**.  
_Save_ |  Saves the settings entered so that the next time the **Webster+ Desktop Configuration** window is invoked, it will default to the saved settings.  
_Cancel_ |  Closes the **Webster+ Desktop Configuration** window and does not save any changes.  
  
## Running Non-Webster+ URLs (*webdesk)

As part of the ***webster/desktop** utility, you can call ***webdesk** to display any URL inside the Windows container. The URL can be passed as the first and only parameter being a string value containing the URL to display.

**_Example:_**

> call "*webdesk","http://www.pvxplus.com"

Like ***webster/desktop** , the first invocation will be in a centered window, approximately three-quarters of the width and height of the screen. The user may resize/position this window as desired, and the system will use this new size/position when the window is next displayed.
