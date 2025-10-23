# Object-Oriented Interface  
  
**rptlink**|   
---|---  
  
The **rptlink** object is a data member of the **[pvxreport](pvxreport/Overview.md)** object interface that is delegated to store and manipulate the definition of a related data source. The **[pvxreport](pvxreport/Overview.md)** **GetLink( )** method can be used to retrieve the object handle for an **rptlink** object, which allows access to all the object's methods and properties.

## rptlink Properties

The following table lists the properties of the **rptlink** object:

#### **Note:**  
All **rptlink** properties are _Read Only_.

**Property** |  **Description**  
---|---  
**CascadingPrefix$** |  A string consisting of a period-separated list of record prefixes assigned to the chain of related data sources from the main data source to the specified child data source.  
**ChildID$** |  Data dictionary file _(providex.ddf)_ record key for the child data source.  
**DataSource$** |  Name of the related data source. May be the logical file name or physical file name.  
**Description$** |  Description of the data source link relationship.  
**isAvailable** |  Boolean value. Set to **1** when the **rptlink** object has been successfully populated and a channel has been opened to the related data source using the **SetLink( )** method; otherwise **0**.  
**KeyExpression$** |  PxPlus expression comprised of values from the parent data source needed to populate the key to read the child data source.  
**LinkError$** |  Loaded with an error message when the **SetLink( )** method fails.  
**LinkID$** |  File link reference ID. Record key to the File Link Definition file _(schema_ddl.pxkey)_.  
**LinkString$** |  A string comprised of a concatenated list of **LinkID$** values that represent the chain of links from the main data source to the specified child data source.  
**ParentID$** |  Data dictionary file _(providex.ddf)_ record key for the parent data source.  
**Prefix$** |  Record prefix assigned to the related data source.  
**SortKey$** |  Sort key number to access the related data source.  
**Source** |  Object handle for the related data source IO object.  
**Sourceiolist$** |  Contains the related data source IOList in compiled format. Variable names are prefixed by the _CascadingPrefix_ _$_ value.  
**SourceKeyiolist$** |  **_(External Keys Only)_** Contains the related data source key IOList in compiled format. Variable names are prefixed by the _CascadingPrefix_ _$_ value.  
**StaticSourceiolist$** |  Contains the related data source IOList in compiled format that can be used to declare a STATIC IOL. (i.e. variables have no formatting). Variable names are prefixed by the _CascadingPrefix_ $ value.  
**StaticSourceKeyiolist$** |  **_(External Keys Only)_** Contains the related data source key IOList in compiled format that can be used to declare a STATIC IOL (i.e. variables have no formatting). Variable names are prefixed by the _CascadingPrefix_ _$_ value.  
**VariableKeyList$** |  List of comma-separated variables that make up the key IOList for the related data source. Variable names are prefixed by the _CascadingPrefix_ _$_ value.  
**VariableList$** |  List of comma-separated variables that make up the IOList for the related data source. Variable names are prefixed by the _CascadingPrefix_ $ value.  
  
## rptlink Methods

The following table lists the methods of the **rptlink** object:

**Method** |  **Description**  
---|---  
**SetLink(**_LinkString_ _$_**)** |  Populates the **rptlink** object and opens a channel to the related data source. _LinkString_ _$_ \- A string comprised of a concatenated list of _LinkID_ _$_ values that represent the chain of links from the main data source to the related data source specified. Returns **1** if successful, **0** if not. If not successful, an error message will be loaded into the **LinkError$** property.
