# Webster+ Setup and Configuration

**Menu Maintenance**|   
---|---  
  
Webster+ has an integrated Menu system that can be used to help users navigate your Web site. This is ideal for menus that you will be using in several places. A menu definition can be maintained in one place and then referenced by name wherever needed. Webster+ also supports a _TopMenu_ option that allows you to specify a menu that will appear across the top of any page. This may be further customized based on the template chosen.

To run the **Menu Maintenance** utility, select **Menus** from the top menu of the Webster+ system setup. The following window is displayed:

> **_To define or edit a menu:_**

Enter the _Menu_ name or click the lookup button to recall existing menus. The navigation buttons are used to scroll through the defined menus.

For each menu item, you can provide the following:

_Text_ |  Text to display for the menu item.  
---|---  
_Symbol_ |  **_(Optional)_** Symbol to precede the menu text. For a list of symbols, visit <https://fontawesome.com/v4/icons/>.

#### **Note:**  
When specifying the symbol name, do **_not_** include the leading "fa-".  
  
_Security Group_ |  Security group required to have the menu item included in the menu. A drop box with all the known groups in the system will be provided, along with two auto-generated options: |  _Any_ |  Indicates as long as the user is signed on and belongs to a group.  
---|---  
_Not On_ |  Indicates only show when not signed on.  
_Window_ |  The targeted window/tab in which to display the results of the menu selection. Select one of the following values: |  _New_ |  Menu output will display in a new tab.  
---|---  
_Same_ |  Menu output replaces current window contents (default, if not set).  
  
The following items work in conjunction with each other:

_Action_ __|  Action to perform when the menu item is selected. Select one of the following actions to perform with the value in the _Associated Name_ column: |  _Event_ |  Selecting the menu item will send the event specified to the program associated to the current page. See **[Special Webster+ Events](Webster%20Events.md)**.  
---|---  
_URL_ |  Selecting the menu item will open the URL specified.  
_Submenu_ |  Name of the subordinate menu to display.  
_Program_ |  Selecting the menu will run the program specified.  
_Report_ |  Name of a report to launch.  
_Webpage_ |  Selecting the menu will open the page specified. **_(Optional)_** Insert a **;**  _(semi-colon)_ followed by the name of the _TopMenu_ to include this with the page (i.e. WebPageName;TopMenuName). Leave blank to display the home/default page.  
_Embed_ |  Similar to the _Webpage_ menu but the Web page is presented inside a Webster+ template.  
_iNomads_ |  Selecting the menu item will launch the iNomads transaction. See **[Using iNomads with Webster+](Using%20iNomads%20with%20Webster.md)**.  
  
_(The Embed and iNomads actions were added in PxPlus 2023.)_  
  
_Associated Name_ |  Name of the Event, URL, Submenu, Program, Report, or WebPage associated with the _Action_.  
  
**_Additional functionality:_**

_Drag_ |  The triple bar symbol can be used to drag the line up/down in the grid.  
---|---  
_Del_ |  The trash can symbol can be clicked to delete a row. The delete logic fades the line out over the course of a couple of seconds during which time clicking again on the row will cancel the deletion.  
_Reload_ |  Click this icon in the page to restore the values in the grid to the previously saved contents.  
_Save_ |  Click this button to record the information for the menu.  
_Delete_ |  Click this button to delete the menu.  
_Save As_ |  Saves a copy of the currently selected menu with a different name while keeping the original menu intact. In the input field, enter the new menu name and then click the _Save As_ button.  
  
## See Also

**[[Menu] Short Code](Short%20Codes.htm#menu)**  
**[[Menubar] Short Code](Short%20Codes.htm#menubar)**
