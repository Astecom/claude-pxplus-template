# Control Object Properties

**NotifyExpand** |  **_Detect Expand/Collapse Requests_**  
---|---  
  
## Description

Detect expand/collapse requests

This property is used to control the generation of tree view expand/collapse signals. When this property is 0 ** _(Default)_** , no signal is sent to the application when the user expands or collapses any entry in the tree view. Setting this property to a non-zero causes a tree view to generate an event with EOM code of "+" (indicating the level was expanded) or "-" (indicating collapse).

#### **Note:**  
When an expand/collapse signal is captured by the application through a READ request, the value in the **['Item](item.md)** property will be set to the item Expanded/Collapsed (may be different that current item).

##  Suggested Use

Use of this property can allow the developer to speed up the loading of large tree views. By only loading one level at a time in a tree view and detecting when the user attempts to expand a level, you can reduce the amount of processing required to view a large number of items.

**_Example:_**

Suppose that your tree view contains invoice information with the first level being the division, the second being the client, and the final being the invoice number. Your load items would look like: ABC Corp/Client 1/Inv#001234.

Loading all the invoices into the tree view could take a while, so instead, load **_only_** load the first item (client/invoice) for each division and set the 'NotifyExpand property to non-zero. When the user requests to expand the division, the application will receive an expansion signal (EOM = '+' or EOM='-' for collapse). Upon receipt of this signal, the application can add to the tree view one invoice record for each client in division except the first one, which will have already loaded during initial. When it receives an expansion signal for a client, it can load all its invoices (again except for the first).

The application should keep a memory file with a list of which levels have already been filled in so that a subsequent expand signal for the same item can be ignored. This method of tree view loading means that the tree view will only load the items that the user is specifically interested in viewing, which will reduce the system load and make the application more responsive.

## Default

0

## Used By 

**TREE_VIEW**
