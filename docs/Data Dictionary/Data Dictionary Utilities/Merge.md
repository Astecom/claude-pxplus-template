# Data Dictionary Utilities   
  
**Merge** |  **__**  
---|---  
  
The **Data Dictionary Merge** utility allows table definitions to be merged from one set of dictionary files _(providex.ddf/.dde)_ to another.

Processing a merge involves defining a merge option to deal with cases where the table being merged already exists in the destination dictionary files. You can select an option to replace the contents of the table definition in the destination file, merge the contents of the source and destination files (with the source definition taking precedence), or skip the table.

Invoke the **Data Dictionary Merge** utility by selecting _Utilities > Merge_ from the **Data Dictionary Maintenance** menu bar.

> This utility consists of the following:

_Dictionary Source File_ |  Path to the dictionary source file.  
---|---  
_Dictionary Destination File_ |  Path to the dictionary destination file.  
**Tables** |  Lists the dictionary tables displayed by file groupings in a tree view format. Clicking on a particular table will cycle through the options for dealing with duplicate tables. Clicking on a file group will cascade the setting for the group to its associated tables. Clicking on the source path at the top of the tree will select for the entire tree.  
_Table Details_ |  Displays the element descriptions and indexes for a selected table.  
_Help_ |  Button used to invoke the **Legend** popup that describes the Table option symbols.  
_Preview_ |  Button used to display a report view list box showing the pending result of merging a table highlighted in the tree view, using the specified _Merge_ option.  
_Merge_ |  Button used to initiate the merge logic. During a merge, the status bar at the bottom of the window will be updated with the name of the table being processed. Merge processing will be accomplished using the **Merge( )** method of the object.  
_Close_ |  Exits the **Data Dictionary Merge** utility.  
  
## Automated Call

The Merge utility can also be called from a PxPlus program.

|  **CALL** "***dict/merge;MERGE** _TABLES"_,SrcDDF$,SrcTable$,DestDDF$,MergeOpt$_  
---|---  
|  **_or_**  
|  **CALL** "***dict/merge;MERGE** "_,SrcChan,SrcTable$,DestChan,MergeOpt$_  
  
**_Where:_**

|  _SrcDDF$_ |  Path to the dictionary source file _(providex.ddf)_.  
---|---|---  
|  _SrcChan_ |  Open channel to the dictionary source file _(providex.ddf)_.  
|  _SrcTable$_ |  Name of the table to be merged from the source dictionary. If omitted, then all tables are merged.  
|  _DestDDF$_ |  Path to the dictionary destination file.  
|  _DestChan_ |  Open channel to the dictionary destination file.  
|  _MergeOpt$_ |  Option for dealing with tables in both source/destination files:  
|  |  |  "1" |  Replace contents of the destination table with those of the source.  
---|---  
"2" |  Merge contents of both tables, precedence given to the source.  
"3" |  Skip the table.
