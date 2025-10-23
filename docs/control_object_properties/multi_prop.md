# Compound Properties

**Multi-Property Access** |   
---|---  
  
The following properties allow an application to set/get values for more than one property for a control in a single command:

|  **['_PropList$](properties_list.htm#Mark181)** |  Comma separated list of property names to read/write  
---|---|---  
|  **['_PropValues$](properties_list.htm#Mark183)** |  String that contains values for each of the properties in**'_PropList$**  
|  **['_PropSep$](properties_list.htm#Mark182)** |  Character used as a field separator between values  
  
The ability to handle multiple reads is useful for accessing properties across a WindX connection, particularly when dealing with an object that has a large number of properties such as a grid. This can boost performance and reduce the amount of network traffic.

To retrieve the value of multiple properties, first set **'_PropList$** , then read **'_PropValues$**.

**_Example:_**

> G1'_PropList$="CurrentColumn,CurrentRow,Value$"  
>  x$=G1'_PropValues$

In this example, x$ receives a string containing the values of CurrentColumn, CurrentRow, and Value$, with each field separated by either the standard SEP field separator or with the **'_PropSep$** character.

Data can then be extracted using **READ DATA** :

> read data from G1'_PropValues$ to iol=MYIOL  
>  MYIOL: \  
>  iolist Col,Row,Value$

To set values, first set **'_PropList$**(if not already set), then set **'_PropValues$** :

> G1'_PropValues$="1"+sep+"2"+sep+"Data"  
> _  
> **or**  
>   
> _ G1'_PropValues$=rec(iol=MYIOL)

The advantage is that only one packet needs to be sent to WindX to either **SET** or **RETRIEVE** the values of multiple properties. **_Do not_** constantly read fields **'_PropList$** and **'_PropSep$** from the control to parse the data returned by **'_PropValues$**. This would defeat the purpose.

**_Example:_**

> read data from G1'_PropValues$,sep=G1'_PropSep$ to iol=cpl("IOLIST "+G1'_PropList$)

This example actually results in three exchanges with WindX: one to get **'_PropSep$** , the second for **'_PropList$** , and the third for **'_PropValues$**. The separator character and list should be maintained within the application code and should not be retrieved from the control.
