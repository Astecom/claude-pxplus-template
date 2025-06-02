# Folder Controls 

**Preserve Controls** |  **__**  
---|---  
  
Typically, at run time, all the controls on each sub-panel are continuously being drawn and reloaded whenever there is movement between the different folder tabs. For applications that use controls containing large amounts of data, this process can really slow down performance.

To prevent this from happening, select the _Preserve Controls_ option for the Folder control. The improvement is significant; e.g. a large list box that would normally takes several seconds to reload each time it displays will appear almost immediately after the initial load.

By defining the _Background Loading_ option (for **[Grid](../Grid%20Control/Grid%20Properties.md)** and **[List Box](../List%20Box%20Controls/List%20Box%20Type.md)** controls), the initial display time can be further reduced. This can improve overall system performance by greatly reducing the number of reads on files, as the data does not have to be re-read from disk each time a control is drawn.

#### **Note:**  
Existing application logic may need to be changed in order to use this feature.

## Activating Preserve Folders Control Option

To set up preserve folder controls, you need to do the following:

|  1. |  Set the _Preserve Controls_ option for the Folder control by selecting the _Preserve Controls_ check box (on **[Tabs](Folder%20Properties.md)** panel) on the **Tabs/Folder Properties** dialogue.  
---|---|---  
|  2. |  Select the _Execute Pre-Disp One Time_ and _Execute Post-Disp One Time_ options in the **[Tabs Definition](Folder%20Properties.htm#tabsdef)** grid of the **Tabs/Folder Properties** dialogue. By default, Pre-Display and Post-Display logic re-executes whenever there is movement between different folder tabs. These check boxes set this logic to be executed ** _only once_** when the sub-panel is accessed for the first time. If you need the logic to execute every time, then you should leave these options Off.  
  
## When a Tab is Selected

The first time a tab is activated, Pre-Display logic will execute, the controls are drawn, controls are resized (if applicable), object persistence is applied (if applicable), and the Post-Display logic will execute.

## Force Re-execution of Pre-Display or Post-Display Logic at Run Time

An application may require that its  _Pre-Display_ or _Post-Display_ logic execute during a specific time. For example, in a _Customer Inquiry_ module, you may need the controls on the sub-panels to be reloaded after a new customer number is selected.

If the _Execute Pre-Disp One Time_ or _Execute Post-Disp One Time_ flags are turned On, then the logic will only execute after the initial drawing of the controls.

To handle this situation, two methods are available to be invoked by the application:

**** |  **ForcePreDisp** (_Id_) |  Force Pre-Display logic to re-execute.  
---|---|---  
**** |  **ForcePostDisp** (_Id_) |  Force Post-Display logic to re-execute.  
  
**_Where:_**

_Id_ is the tab sequential ID _(_ set _Id_ to zero for all tabs).

**_Example:_**

In your application logic, after reading a new customer, you would issue Fldr'ForcePostDisp(0). This will cause the post-display logic to re-execute when moving between tabs.

#### **Note:**  
These methods do not need to be used by the application if the _Execute Pre-Disp One Time_ and _Execute Post-Disp One Time_ flags in the Folder definition are turned Off.
