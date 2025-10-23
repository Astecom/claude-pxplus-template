# Step 6: File Maintenance Field Layout  
  
**Email and URL Input Validation**|   
---|---  
  
**_(Applicable when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_**

To validate the input entered for a data dictionary field as either an email address or URL on a generated Webster+ HTML page, the data dictionary field **_must_** have a data class with a _Class Name_ "Email" or "URL" (case insensitive) assigned to it.

To do this:

1. |  Create a new data class definition in **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Overview.htm#Mark1)** maintenance. For the _Class Name_ , enter "Email" or "URL" (case insensitive).  
---|---  
2. |  Then, assign the data class to the data dictionary field in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.htm#grid)** (on the **Elements** tab).  
  
_(Email and URL input validation for generated Webster+ HTML pages was added in PxPlus 2021 Update 1.)_
