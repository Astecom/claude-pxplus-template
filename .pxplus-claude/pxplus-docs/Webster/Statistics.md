# Webster+  
  
**Statistics**|   
---|---  
  
The **Webster+ Statistics** page displays various statistics to do with the running Webster+ server. The statistics are preserved during server shutdowns so statistics will represent the lifetime of the Webster+ server.

When the Webster+ security system is enabled, a **Statistics** option displays on the left side. Clicking this option brings up the **Webster+ Statistics** page. Only users who are part of the Admin group (System Administrators) are allowed to access this page.

> _(The Statistics option was added in PxPlus 2023.)_

This window consists of the following:

_Number of failed logons_ |  Tracks the number of failed user logons. Useful for determining whether unauthorized access to the Webster+ server is being attempted if this value suddenly rises.  
---|---  
_Number of password changes_ |  Tracks the number of user password changes. Useful for determining whether suspicious activity may be happening if this value suddenly rises.  
_Number of new users_ |  Tracks the number of self-registered new users. Useful for determining whether suspicious activity may be happening if this value suddenly rises.  
_Number of page loads_ |  Tracks how many page loads the Webster+ server has serviced. Useful for tracking usage of your Webster+ Web pages.  
_Number of program loads_ |  Tracks how many program loads the Webster+ server has serviced. Useful for tracking usage of your Webster+ application.  
_Number of delays due to hitting maximum user limit_ |  Tracks how many times the Webster+ server delayed a response because the maximum number of concurrent users has been reached. Useful for tracking if your server use is overloading your license. If this number is not very small, adding more users to the license is a good idea to avoid 10 second delays for users.  
_Reset Statistics_ |  Button that is used to reset all the statistics to zero whenever it is selected.  
  
**_View Error Dump Files_**

If the _Save error dumps_ check box is checked (on the **[Misc.](General%20Configuration.htm#misc)** tab of the Webster+ Setup) **_and_** error dumps have been saved to the _data/dump_ directory (in the location where your Webster+ is installed), the **Statistics** page will also show the **View Error Dump Files** section:

The **View Error Dump Files** section consists of the following:

_(Dump Files List Box)_ |  Lists all the files in the _data\dump_ directory. Clicking on a file in this list displays the contents of the dump file in a new tab.  
---|---  
_Maintain error dumps_ |  Click this hyperlink button to bring up the **[Webster+ Inspector](Inspector.md)** with a list of the files in the _data\dump_ directory. This allows users who are part of the Admin group (System Administrators) to view and maintain the dump files, such as delete older dump files.  
  
If an email address has been entered in the _Error dump email notification_ option (on the **[Misc.](General%20Configuration.htm#misc)** tab of the Webster+ Setup), an email notification will be sent when an error dump occurs.
