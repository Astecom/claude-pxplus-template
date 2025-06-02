#   
  
**Online Update**|   
---|---  
  
The **Online Update** feature provides a convenient and secure method for updating and applying all program, library and file changes to the PxPlus Development Suite.

> _(The Online Update feature was added in PxPlus 2014.)_

To access the Online Update feature, use one of the following methods:

**Location** |  **Method**  
---|---  
From the PxPlus IDE Main Launcher |  See **[Accessing from IDE Main Launcher](Online%20Update.htm#IDE)**.  
From the Windows desktop |  From the Windows **Start** menu, locate _PVX Plus Technologies_ and select _Online Update_.  
From the PxPlus Command line |  See **[Accessing from PxPlus Command Line](Online%20Update.htm#Commandline)**.  
  
The easy-to-use **Update Manager** displays a list of the updates to be applied, along with a status message that informs you of the current update status. You can also view a detailed description of each update prior to applying the changes, as well as view an activity log for a selected update. In addition, you can reverse any updates that have been applied.

#### **Important Note:**  
**The Online Update should only be run after all users have exited the system; otherwise, errors can occur when the Online Update attempts to apply changes to one or more files already in use.**

The **Update Manager** consists of the following:

_[Status message area]_ |  Displays a message about the current update status and the number of updates pending. The message text and background color displayed depends on the current status: \- _No updates have been applied._ (red background) \- _All updates have not yet been applied._ (yellow background) \- _All updates have been applied._ (green background) _(The Status message area was added in PxPlus 2017.)_  
---|---  
_ID_ |  Number used to identify the update.  
_Title_ |  Text that briefly describes the update.  
_Date_ |  Date on which the update was released.  
_Status_ |  Displays the current state of _each_ update. For all statuses, except Pending, the user who performed activity on the update and the date on which the activity took place are also displayed. Possible statuses are: |  _Pending_ |  New update to be applied.  
---|---  
_Applied_ |  Update successfully applied. No further action required.  
_Failed_ |  Update not successful for the reason indicated. Action must be taken to resolve the issue before the update can be applied.  
_Removed_ |  Update was reversed.  
_Details_ |  Button used to view a detailed description of the changes associated with a particular update. Select a line from the update list using the mouse and/or the keyboard arrow keys. Click the _Details_ button to display a window with a description of the change(s) to be applied. An alternate method is to right click on the line and select _Show Details_ from the popup menu.  
_Show Log_ |  Button used to view the historical activity of an update (with _Applied, Failed_ or _Removed_ status). Select the line for which you want to view the activity. Click the _Show Log_ button to display a window showing the activity information for the selected update.

#### **Note:**  
The _Show Log_ button is not available when selecting a line with a _Pending_ status.  
  
_Apply All_ |  Button used to apply _all_ listed updates. When selected, an _Applying Updates_ window displays to indicate that the update process is running. Upon completion of this process, the following occurs: **_If all updates were successfully applied:  
_**  
The **Update Manager** displays a green dot next to each ID number, and the Status column changes to _Applied_. The Status message area changes to a green background and indicates that all updates have been applied. **_If an error was encountered during the update process:_**  
  
A message displays with the ID number of the update that encountered the error and a brief description of the issue. The **Update Manager** displays a yellow triangle with an exclamation point (!) next to this ID number, and the Status column changes to _Failed_. Any changes already applied _for that particular update_ up to the point when the error occurred will be reverted. After resolving the error condition, you can attempt to apply the update either by clicking the _Apply All_ button to apply all remaining updates or by selecting _Apply up to this point_ from the right click popup menu. See **[Applying a Range of Updates](Online%20Update.htm#applyrange)**.  
  
**_Example:_**  
  
If the Help window is open at the same time that changes to the Help file are being applied, then that particular update will fail.  
_Close_ |  Closes the **Update Manager**. If any updates have been applied and/or reverted, you will first be prompted to complete the update process by exiting and restarting all PxPlus sessions.  
  
##  Applying a Range of Updates

To apply a **_range_** of updates _in sequence_ up to and including a particular update, right click on the line that will be the stopping point for the update process and select _Apply up to this point_ from the popup menu. The update process will apply all updates prior to _and_ including the selected update, but not beyond. Updates not applied are displayed in **bold text** with a gray dot next to the ID number with the next update ID to be applied highlighted. The Status message area changes to a yellow background and indicates the number of updates pending.

**_Example:_**

Three updates are listed - #0001, #0002, #0003 - but you want to apply only updates #0001 and #0002. To do this, right click on update #0002 and select _Apply up to this point_ from the popup menu. The result is that the updates for #0001 and #0002 are applied but not for #0003. Because update #0003 is the next one to be applied, that line would be highlighted, and the Status message area indicates that 1 update is pending.

## Reverting a Range of Applied Updates

To revert back to a point before a particular update was applied, right click on the line that will be the first update (in a sequential range of updates) to be reversed out and select _Revert to before this point_ from the popup menu. A _Removing Updates_ dialogue displays while this process is running. When this process is completed, all updates applied **_before_** the selected update are retained. The selected update and all updates **_after_** __ that are reverted.

**_Example:_**

Three updates have already been applied - #0001, #0002, #0003 - but you want to keep the changes only for update #0001 and reverse out the changes for updates #0002 and #0003. To do this, right click on update #0002 and select _Revert to before this point_ from the popup menu. The result is that update #0001 is retained, and updates #0002 and #0003 are reverted. The Status message area changes to a yellow background and indicates that 2 updates are pending.

#### **Note:**  
All updates for a release, as well as reverted corrections, are applied in sequential order to avoid any potential problems that could arise if an update is skipped.

##  Accessing from IDE Main Launcher

The Online Update feature can be accessed from the **[IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** by selecting _Update_ from the top menu bar to launch the **Update Manager**.

When an online update is ready to be applied, the **Update** menu bar item changes to ***Update*** (with asterisks) as a visual cue. Once the online update is successfully applied and no other updates are pending, the menu bar item changes back to **Update** (without asterisks).

_(Displaying *Update* when an online update is available was added in PxPlus 2023.)_

##  Accessing from PxPlus Command Line

A text mode version of the Online Update feature is also available for entering commands that list, apply and revert updates.

From the Command window, you can enter the following commands after the **- >** prompt:

**Command** |  **Description**  
---|---  
UPDATES LIST #### |  This command lists the title, description and status of the Update ID specified (####). If no Update ID is supplied, the title and status details of all updates are listed.  
UPDATES APPLY #### |  This command applies all updates, up to and including the specified Update ID (####). If no Update ID is supplied, all pending updates will be applied.  
UPDATES REMOVE #### |  This command removes any updates that have been applied back to and including the specified Update ID (###). If no Update ID is supplied, all applied updates will be removed.  
UPDATES |  This command either launches the graphical update utility on a graphical device or displays Help information on a text mode device.
