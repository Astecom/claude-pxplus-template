# Webster+ Setup and Configuration

**Security Maintenance**|   
---|---  
  
When running on the Web, pages contain various key elements that can be exploited by unauthorized users. Webster+ provides built-in security designed to control access to the system, which allows you to control the page, program or report that a specific group of users are authorized to run.

To run the **Security Maintenance** utility, select **Security** from the top menu of the Webster+ system setup. The following window is displayed:

> When this utility first comes up, it will display all the group restrictions currently applied to _WebPage_.

_Item Type_ |  Select the _Item Type_ from the drop-down list to change the view and define the required security to execute for _WebPages_ ,  _Programs_ or  _Reports_. A grid will display the **[Groups](Group%20Maintenance.md)** defined on the system.

#### **Note:**  
The _Admin_ group is ** _not_** included as it always has access to everything.  
  
---|---  
_Security_ |  Define security access for the item selected. |  _Item Name_ __|  Enter the name of the _WebPage_ , _Program_ or _Report_ to secure. Leaving the _Item Name_ blank will remove the line when you click the _Save_ button.  
---|---  
_Groups_ __|  Check or uncheck the check box under each group to set security for the item selected.  
_Del_ |  The trash can symbol can be clicked to delete a row. The delete logic fades the line out over the course of a couple of seconds during which time clicking again on the row will cancel the deletion.  
_Save_ |  Click this button to record security for the item type.  
_Reload_ |  Click this button to recall the grid from the previously saved settings.  
  
By default, the grid will initially display with 20 empty lines. If additional lines are needed, save your work and the system will update the grid with another 20 empty lines.

Items declared in this grid will have security requirements applied to them. That is, if a request is received from a browser or URL to run a specific page, program or report, the user making the request must belong to one of the groups specified (or a group that includes that group).

Items **_not_** declared in this grid will be subject to standard application logic; that is, their access is controlled by the menus presented to them. Generally, this is sufficient for in-house applications; however, it is suggested that any critical or confidential functions either be defined in **Security Maintenance** or have internal security logic applied inside the application.
