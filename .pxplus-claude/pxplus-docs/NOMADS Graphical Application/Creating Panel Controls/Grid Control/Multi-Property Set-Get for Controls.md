# Grid Control 

**Multi-Property Set-Get for Controls** |  **__**  
---|---  
  
Reading more than one property at a time is not typically a problem. However, when accessing properties across a WindX connection, one packet is required for each property read. This can become a performance issue, especially when dealing with a graphical object that has a large number of properties (i.e. a grid).

To reduce the amount of network traffic, three special "common" properties have been added for retrieving and setting the values from multiple properties at the same:

|  **['_PropList$](../../../properties/_proplist_.md)** |  Comma-separated list of property names to read/write  
---|---|---  
|  **['_PropSep$](../../../properties/_propsep_.md)** |  Character used as a field separator between values  
|  **['_PropValues$](../../../properties/_propvalue_.md)** |  String containing values for each of the properties in **_PropList$**  
  
#### **Note:**  
These are considered to be "common to all" and do not appear in the list of properties when querying a particular object (via **'***  _tick asterisk_).

To retrieve the value of multiple properties, first set **'_PropList$** and then read **_PropValues$**.

> G1'_PropList$="CurrentColumn,CurrentRow,Value"  
>  x$ = G1'_PropValues$

In this example, x$ would receive a string containing the values of CurrentColumn, CurrentRow and Value with each field separated by either the standard **SEP** field separator or with the **'_PropSep$** character. Data can then be extracted using a **READ DATA** directive:

> READ DATA FROM G1'_PropValues$ TO IOL=MYIOL   
> MYIOL: IOLIST Col, Row, Value$

To set values, you simply set the value in **'_PropValues$**.

> G1'_PropValues$ = "1"+SEP+"2"+SEP+"Data" **_  
>   
> or_**  
>   
>  G1'_PropValues$ = REC(IOL=MYIOL)

The advantage here is that only one packet needs to be sent to WindX to either set or retrieve the values of multiple properties. It is important to remember that the fields **'_PropList$** and **'_PropSep$** should **_not_** be constantly read from the control in order to parse the data returned by **'_PropValues$** , as this will defeat the purpose.

For example, **_do not ..._**

> READ DATA FROM G1'_PropValues$,SEP=G1'_PropSep$ TO IOL=CPL("IOLIST "+G1'_PropList$)

This would actually result in three exchanges with WindX: one to get ' **_PropSep$** , one for **'_PropList$** , and then one for **'_PropValues$**. The separator character and list should be maintained within the application code and not retrieved from the control.
