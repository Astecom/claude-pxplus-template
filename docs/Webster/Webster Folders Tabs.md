# Webster+ HTML Merge/Bind Object

**Folders/Tabs**|   
---|---  
  
Webster+ provides the ability to group sections of your pages together for presentation. The user can then select which group to see by selecting a tab or header associated with the grouping. Each of these groupings is called a **_tab_** with the collection of tabs referred to as a **_folder_**.

To create a grouping, simply surround the controls you wish to be in the folder and insert a **[[tab][/tab]](Short%20Codes.htm#tab)** short code before each group.

**_Example:_**

> [folder folder1$]  
>  [tab]Name and address[/tab]  
>  Client Name: [input clientname$ size=40]  
>  Address: [input address$ size=40/5]  
>  City:` [input city$ size=30] State: [input state$ size=2]

> [tab]Contact Info[/tab]  
>  Email Address: [input email$ size=50 type=email]  
>  Phone: [input phone$ size=15]  
>  Cell phone: [input cellphone$ size=15]  
>  Skype ID: [input skypeid$ size=30]  
>   
>  [/folder]

This would result in two tab groups, each with its own contents where you can click on the tab header to flip between each set of contents.

> Two additional styles of folders can be selected using the **[class=_xxx_](Short%20Code%20Options.htm#class)** option on the **[[folder]](Short%20Codes.htm#folder)** short code:

**class='web'** |  Displays a selection bar across the top and the contents below.  
---|---  
**class='bar'** |  Used to provide a sidebar selector. The user selects the contents using the selectors on the left edge.

#### **Note:**  
This class should be used with the '***webster/pages/sidebar.html** ' template to insert the sidebar region.
