# Webster+ How To Tutorials

**How to Create a Top Menu Bar with Sub-Menus**|   
---|---  
  
This tutorial shows you how to create a top menu bar with sub-menus in Webster+.

The following example shows a top menu bar with two sub-menus, **Ledger** and **GL Accounts**.

> For this tutorial, the **Ledger** sub-menu will be defined. It has three options - **Post to Ledger** , **View Ledger Postings** , and **View Transactions by Date**. This menu will be added to the **Products** page.

> #### **Note:**  
Before defining the menu, ensure that the reports and Web pages associated with the menu options have been defined.

## Defining the Menu Bar Items

These steps show you how to define the menu bar items using **[Menu Maintenance](../Webster/Menu%20Maintenance.md)**.

1. |  On the left side, click **Setup**. Then, in the top menu, click **Menus** to access the **Menu Maintenance** page.       
---|---  
2. |  In the _Menu_ field, enter **Ledger** as the menu name.       
3. |  Define the menu options by entering the details in the grid. For a description of each column, see **[Menu Maintenance](../Webster/Menu%20Maintenance.md)**. In the first row, enter the following details: |  **Column Name** |  **Entry**  
---|---  
_Text_ |  Ledger  
_Symbol_ |  Anchor  
_Security Group_ |  Any  
_Window_ |  New  
_Action_ |  Submenu  
_Associated Name_ |  gl_actions  
  
The _Action_ entry (Submenu) identifies **Ledger** as a sub-menu item, and the _Associated Name_ entry (gl_actions) specifies the name of the related sub-menu.

For this example, the _gl_actions_ sub-menu will be defined later. See **[Defining the Sub-Menu Options](How%20to%20Create%20a%20Top%20Menu%20Bar.htm#submenu_opts)**.  
  
4. |  After completing the entries, the window looks like this:       
5. |  Click **Save** at the bottom.       
6. |  A message appears near the top confirming that the "Ledger" menu has been saved.       
  
**_Defining the Sub-Menu Options_**

Define the options for the _gl_actions_ sub-menu (see [**Step 3**](How%20to%20Create%20a%20Top%20Menu%20Bar.htm#step3)).

7. |  In **[Menu Maintenance](../Webster/Menu%20Maintenance.md)**, enter _gl_actions_ in the **Menu** field.  
---|---  
8. |  The _gl_actions_ sub-menu has three options. Enter the following details (one option per row): |  **Column Name** |  **Entry**  
---|---  
_Text_ |  Post to Ledger  
_Symbol_ |  Book  
_Security Group_ |  Any  
_Window_ |  Same  
_Action_ |  Webpage  
_Associated Name_ |  glviewpost  
  
>  

**Column Name** |  **Entry**  
---|---  
_Text_ |  View Ledger Postings  
_Symbol_ |  Bitcoin  
_Security Group_ |  Any  
_Window_ |  Same  
_Action_ |  Report  
_Associated Name_ |  glpostings  
  
>  

**Column Name** |  **Entry**  
---|---  
_Text_ |  View Transactions by Date  
_Symbol_ |  Calendar  
_Security Group_ |  Any  
_Window_ |  Same  
_Action_ |  Report  
_Associated Name_ |  glaccounts  
  
   
  
9. |  After completing the entries, the window looks like this:       
10. |  An **_optional_** separator line can be added between sub-menu options by entering three or more dashes in a blank row and then dragging the row to the desired location. For this example, a separator line will be added below the **Post to Ledger** option. In the blank row, enter the following details for the **Text** and **Window** columns: |  **Column Name** |  **Entry**  
---|---  
_Text_ |  \---  
_Symbol_ |     
_Security Group_ |     
_Window_ |  Same  
_Action_ |     
_Associated Name_ |     
11. |  After completing these entries, the window looks like this:       
12. |  In the first column of this row, click the **Drag** (triple bar) icon, and while holding down the mouse, drag the selected row up so it sits directly below the Post to Ledger row. Release the mouse.       
13. |  After moving the row, the window looks like this:       
14. |  Click **Save**.  
15. |  A message appears near the top confirming that the "gl_actions" menu has been saved.       
  
**_Adding the Short Code to the HTML Page_**

Add the **[[menubar menu=_xxx_]](../Webster/Short%20Codes.htm#menubar)** short code to the HTML page:

16. |  Add the following line of code to the **Product** HTML page anywhere below the **< body>** tag (before the page title in this example): [menubar menu=**ledger** class=font_125]  
---|---  
17. |  Preview the results. On the left side, click **Products** and then select **Ledger**.  
18. |  The **Ledger** menu shows the three options:  
  
 

 

 
