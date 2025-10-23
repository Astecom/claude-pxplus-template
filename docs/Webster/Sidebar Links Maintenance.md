# Webster+ Setup and Configuration

**Sidebar Links Maintenance**|   
---|---  
  
When using the standard Webster+ template (*webster/template.html), the system displays a list of links on the left side of the page or the Sidebar. These links can be used to take the user to selected pages or sections within your application.

To run the **Links Maintenance** utility, select **Links** from the top menu of the Webster+ system setup. The following window is displayed:

> For each link that you want to appear in the Sidebar, you can provide the following:

_Text_ |  Text to display for the link. This should be no more than 12-15 characters (dependent on the font size). Use three dashes (i.e. minus signs) to denote a solid line separator (the rest of the link definition in that row will be ignored).  
---|---  
_Security Group_ |  Security group required to display the link. A drop box with all the known groups in the system will be provided, along with two auto-generated options: |  _Any_ |  Indicates as long as the user is signed on and belongs to a group.  
---|---  
_Not On_ |  Indicates only show when not signed on.  
_Window_ |  The targeted window/tab in which to display the link. Select one of the following values: |  _New_ |  Link output will display in a new tab (default, if not set).  
---|---  
_Same_ |  Link output replaces current window contents.  
_Reuse_ |  Link output will be placed in a tab whose logical internal name matches the link text. This will either create a new tab if a window of that name does not exist or replace the contents of that tab previously created with that name.  
  
The following items work in conjunction with each other:

_Action_ __|  Action to perform when the link is selected. Select one of the following actions to perform with the value in the _Associated Name_ column: |  _Program_ |  Selecting the link will run the program specified.  
---|---  
_Event_ |  Selecting the link will send the event specified to the program associated to the current page. See **[Special Webster+ Events](Webster%20Events.md)**.  
_URL_ |  Selecting the link will open the URL specified.  
_Webpage_ |  Selecting the link will open the WebPage specified. **_(Optional)_** Insert a **;**  _(semi-colon)_ followed by the name of the _TopMenu_ to include this with the page (i.e. WebPageName;TopMenuName). Leave blank to display the home/default page.  
_Embed_ |  Similar to the _Webpage_ link but the Web page is presented inside a Webster+ template.  
_iNomads_ |  Selecting the link will launch the iNomads transaction. See **[Using iNomads with Webster+](Using%20iNomads%20with%20Webster.md)**.  
  
_(The Embed and iNomads actions were added in PxPlus 2023.)_  
  
_Associated Name_ |  Name of the Program, Event, URL or WebPage associated with the _Action_.  
  
**_Additional functionality:_**

_Drag_ |  The triple bar symbol can be used to drag the line up/down in the grid.  
---|---  
_Del_ |  The trash can symbol can be clicked to delete a row. The delete logic fades the line out over the course of a couple of seconds during which time clicking again on the row will cancel the deletion.  
_Reload_ |  Click this icon in the page to restore the values in the grid to the previously saved contents.  
_Save_ |  Click this button to record the Sidebar entries.  
_Restore to Default_ |  Click this button to load the grid with the original system default links (shown above).
