# Query Subsystem

**Query Profile Information Maintenance** |  **__**  
---|---  
  
The NOMADS Query has the ability to hide and show columns at run time, define dynamic filters, and select records to be displayed as _Favorites_. You can also choose to retain these settings from one session to another. All of these settings for each user and every query are stored in the _Query Persistence_ files _(query.inf)_ found in the same directories as the panel libraries containing the query definitions.

The _Query Persistence_ files have an auto-clean mechanism that will automatically remove entries that have not been accessed in the last 90 days. This time interval can be changed by setting the **[%NOMADS'Query_ProfileClean](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#queryprofileclean)** property to the desired number of days.

The **Query Profile Information Maintenance** utility provides a means to manually remove or copy entries in the _Query Persistence_ files. Entries can be copied to another user ID, and entries belonging to a defunct user ID can be deleted.

Invoke the **Query Profile Information Maintenance** utility from the main NOMADS _Utilities_ menu or from the NOMADS **Library** **Object Selection**  _Utilities_ menu. The difference will be that the starting point for locating the Query Persistence files will be your current directory when invoked from the main NOMADS _Utilities_ menu, or it will be the directory of the selected library when invoked from **Library Object Selection**.

You can also invoke the utility programmatically. See **[Invoking Query Profile Information Maintenance Programmatically](Introduction.htm#Mark1)** below.

When invoked, the **Query Profile Information Maintenance** window is displayed.

> This window consists of the following:

_Starting Directory_ |  This is the starting point for locating the Query Persistence files and their profile entries. (Enter the top directory of your application to see all entries pertaining to it.) All entries found in the starting and subordinate directories will be displayed in the profile list.  
---|---  
_(Profile Entry List)_ |  Entries include the library location (relative to the starting directory), the name of the query, the user to whom the entry pertains, the profile name (see **[Query Profiles](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.htm#qryprofiles)**), and the type of information stored.

#### **Note:  
** Each _Favorites_ entry in the profile entry list may represent several entries in the _Query Persistence_ file, which contains one record for each and every favorite record selected by a particular user for a given query.

_(The Profile name was added to the list in PxPlus 2019.)_  
_Select/Deselect all_ |  Click the check box to select all current entries in the profile list. Uncheck it to deselect all entries.  
Selecting miscellaneous profile entries |  To select/deselect individual profile entries, click the check box next to the entry in the list itself. You can also select ranges of entries by clicking the first entry, then pressing Shift-Click on the last.  
**Filter by:  
**  _Directory  
Library   
Query   
Info Type   
User_ |  A number of fields are available to filter the profile entries that are shown in the profile list.  
  
Selections include _Directory_ , which allows you to specify a subdirectory under the starting directory.  
  
You can also select a specific panel library, query definition, information type (i.e. Favorites, User formulas, Filters, Hidden column settings, Column Order, Column widths, Save Settings), and/or user ID to filter the profile list.  
**Function** |  Select the function to perform. |  _Copy to another user_ |  Copy the selected profile list entries to another user. You must specify the user either by entering the user ID or selecting one from the drop box. If duplicate entries for that user exist, such as for filters or hidden columns, then you can select the _Overwrite duplicates_ box if you wish to overwrite the existing entries in the user's current profile; otherwise, the existing entries will not be changed.  
---|---  
_Delete_ |  Delete the selected profile entries.  
  
##  Invoking Query Profile Information Maintenance Programmatically

Besides invoking the **Query Profile Information Maintenance** utility through the NOMADS interface, you may also invoke it programmatically using the following syntax:

> PROCESS "QRYPROFMNT","*plus/winutl/scrnlib.en"[,_UserID_ _$,LibPath$,Query$,RecordType$_]

**_Where:_**

_UserID_ _$_ |  User ID to filter on  
---|---  
_LibPath_ _$_ |  Path to panel library to use as filter  
_Query$_ |  Specific query to use as filter  
_RecordType_ _$_ |  Record type to filter on. Valid values are: |  'FAV' |  Favorites  
---|---  
'FLT' |  Filters  
'HID' |  Hidden column settings  
'SAV' |  Save settings
