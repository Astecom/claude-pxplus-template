# PxPlus Wiki

**Restricted Wiki Codes**|   
---|---  
  
The PxPlus Wiki engine provides additional functionality that allows pages to directly access and execute system logic. All of these codes consist of **< pxpwiki>** HTML tags inside the Wiki text.

Only users with _Admin_ privileges can add or edit pages with these codes. This helps to assure the security of the system.

Below is a list of **pxpwiki** codes:

**pxpwiki Code** |  **Description**  
---|---  
**< pxpwiki=**_xxxxxx_**>** |  This tag will be replaced with the results of PxPlus evaluating the string identified by the expression supplied, _xxxxxx_. The expression can be any value or PxPlus string expression. If an error occurs during the evaluation of the expression, the Wiki engine will insert ***ERR***. If desired, you can use the **[XEQ](../functions/xeq.md)** function to call an external application program to compute/return the value.

#### **Note:**  
The string returned by the expression is itself considered Wiki code and not HTML; therefore, it will be processed by the Wiki engine prior insertion in the page.  
  
**< pxpwiki:=**_xxxxxx_**>** |  This is similar to the **< pxpwiki=**_xxxxxx_**>** tag; however, the result of the expression evaluation is considered raw HTML code and will not be passed to the Wiki engine.  
**<****pxpwiki:user:**_xxxxxx_**>** |  This tag causes the page to **_only_** be displayed if the user is a member of the class specified by _xxxxxx_.  
**< pxpwiki:error>** |  This tag inserts code to display an alert should the internal variable **err_msg$** be set to non-null; otherwise, it is ignored.  
**_Page Layout Codes_** |  **_How the Code is used by the Main Layout Page_**  
**< pxpwiki:page>** |  Internal page name of the page being presented.  
**< pxpwiki:text>** |  Inserts the resultant HTML contents for the page being presented.  
**< pxpwiki:title>** |  Inserts the title of the page being presented.  
**< pxpwiki:wiki>** |  Inserts the original Wiki text of the page being presented (_not generally used_).  
**_Page Editor Codes_** |  **_How the Code is used by the Wiki Page Editor_**  
**< pxpwiki:edithtml>** |  Inserts the resultant HTML contents for the page being edited.  
**< pxpwiki:editpage>** |  Inserts the internal page name for the page being edited.  
**< pxpwiki:edittitle>** |  Inserts the title of the Wiki page being edited.  
**< pxpwiki:editwiki>** |  Inserts the contents of the current page being edited.  
**< pxpwiki:message>** |  Inserts the error message (if any) on the editor page.  
  
All other **pxpwiki:_xxxxxx_** codes will be replaced by the contents of the page whose internal name matches the tags.

**_Example:_**

> A tag of **< pxpwiki::style.css>** would insert the contents of the page **pxpwiki::style.css**.

#### **Note:**  
For consistency, the _xxxxxx_ generally starts with a **:** (_colon_), resulting in page names with two _colons_ (e.g. **pxpwiki** **::**_xxxxxx_), although this is not a strict requirement.
