# Accessing Library Objects from IDE

**Accessing Query Definition from IDE**|   
---|---  
  
The _Query Definition_ task on the **[IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** is used for creating or editing a Standard Query or a Query List definition.

To select this task, expand the _Graphical Application Builder (NOMADS)_ category on the _Menu_ list. This task opens the **New/Existing Query** window, which is used to specify a library, the name of a new or existing query, and the query type (if creating a new query).

_(The Query Definition task was added in PxPlus 2023 Update 1.)_

> This window consists of the following:

_Library_ |  Defaults to the **[Default Library](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#defaultlib)** defined for the current project. If a default library was not defined, this will be blank. Enter the name of the library file or click the Query button.  
---|---  
_Name_ |  Enter the name of the query or click the drop-down arrow to select from a list of the existing queries in the library. If the query name does not exist, you will be able to create the new query when you click _Ok_.

#### **Note:**  
When entering a new query object name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_Type_ |  Type of query, either _Standard Query_ or _Query List_. See **[Query Type](../Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.htm#type)**. For an existing query, the type is shown and is disabled. For a new query, this field is enabled when a _Name_ is entered and defaults to _Standard Query_ but can be changed.  
_Ok_ |  For an existing query, launches **[Query Definition](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** (if _Type_ is _Standard Query_) or launches **[Query List Definition](../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark4)** (if _Type_ is _Query List_). For a new query, launches **[Query Header Definition](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.md)** (if _Type_ is _Standard Query_) or launches **[Query Definition - File information](../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark1)** (if _Type_ is _Query List_).  
_Cancel_ |  Closes the **New/Existing Query** window with no further action taken.  
  
## See Also

**[Query Subsystem](../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**
