# Compound Properties

**Pseudo Multi-Properties** |   
---|---  
  
In many instances, an application will need to read or update a number of properties at the same time. For example, an application might want to set the 'Item number and 'ItemText$ properties for a List Box.

_(Pseudo Multi-Properties were added in PxPlus v7.10.)_

A Pseudo multi-property is basically a property whose name is made up of multiple "String" properties with each property name terminated by a _period_ :

> CtrlObj'prop1.prop2.prop3.$

This Pseudo property would reference the properties 'prop1$, 'prop2$, and 'prop3$ within CtrlObj. If this Pseudo property was read, the values of all the properties would be concatenated together and returned as a single string with a field separator of $00$. When this Pseudo property is updated, the values sent to the property will be broken into multiple values and updated to the associated properties. The last character of the string sent to the Pseudo property will be used as the delimiter.

**_Example:_**

To change an item in a List Box (assuming _itemno_ is the item index and _valu_ _$_ has the new value):

> Lbx'item.itemtext.$=str(item)+sep+valu$+sep

To change a Grid cell at column 3, row 4:

> Grd'colno.row.value.$="3,4,Cell Value,"

Since the last character is a _comma_ , the delimiter is assumed to be a  _comma_.

#### **Note:**  
To simplify Grid column access, the property **'Colno** is used rather than 'Column, which, if used, would expect a column name, not a column number.

To read the current item and index from a List Box would be:

> read data from Lbx'item.itemtext.$,sep=$00$ to itemno,valu$

(If desired, the PxPlus dynamic field separator parameter could be enabled to have the system auto-detect the field separator -- [**'+S'**](../parameters/pluss.md) system parameter).

#### **Note:**  
All system-provided property names do not have dots/periods in them. If accessing a Pseudo multi-property against a user-defined object, the property names reference must **_not_** have a dot/period in it.

## Why Use Pseudo Properties?

A major advantage of using Pseudo multi-properties is that when running your application in a Client-Server configuration with WindX, the number of packets exchanged between the server and the workstation will be reduced.

**_Example:_**

In a Grid, to read the tip, value, text, and format information about a specific cell, you would have to issue:

> grd'Colno=col  
> grd'Row=row  
>  Tip$=grd'CellTip$  
> Valu$=grd'Value$  
>  Text$=grd'Text$  
>  Format$=grd'CellFormat$

This would require six packet exchanges between the server and the WindX workstation (four if running Turbo mode). Switching this logic to use Pseudo properties would be:

> grd'Colno.Row.$=str(col)+","+str(row)+","  
>  read data from grd'CellTip.Value.Text.CellFormat.$ to Tip$,Valu$,Text$,Format$

This would result in only two packets (one if running Turbo mode) between the server and WindX (a 75% reduction, or 80% in Turbo mode, of packets and thus execution time).
