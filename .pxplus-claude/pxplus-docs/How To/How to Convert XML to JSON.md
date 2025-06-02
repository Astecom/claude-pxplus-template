# JSON Object How To Tutorials

**How to Convert XML to JSON**|   
---|---  
  
Starting with PxPlus 2025, XML data can be easily converted to JSON by using the **[XML Object](../utilities/obj_xml.md)** (*obj/xml). The object programs, **_json.pvc_** and **_xml.pvc_** are found in the **_*lib/obj_** directory.

These steps show you how to set up XML data and then convert the XML data to JSON.

## Set Up XML Data

These steps show you how to set up XML data.

|  1. |  Create both the JSON and XML objects. **_Example:_** json_obj=new("*obj/json") xml_obj=new("*obj/xml")  
---|---|---  
|  2. |  Using the **Set_Xml****( )** method, load and create nodes in a given XML string. **_Example:_** xml_obj'set_xml("<emp><name>John Smith</name><addr>456 Ontario Street</addr><age>40</age></emp>")  
|  3. |  To view the data you just created, you can print the XML string by using the **Get_Xml$( )** method, which returns the XML string. **_Example:_** print xml_obj'get_xml$()  
  
## Convert XML Data to JSON Format (without numeric conversion)

#### **Note:**  
By default, when converting data, JSON auto converts strings to numeric.

These steps show you how to convert XML data to JSON format.

|  1. |  Load the XML data you created above. **_Example:_** json_obj'load_xml(xml_obj)  
---|---|---  
|  2. |  Using the **Print( )** method, you can print the JSON data  **_Example:_** json_obj'print()  
|  3. |  If you want to load the XML object **_without numeric conversion_** , then the examples for Step 1 and Step 2 would look like this: **_Example:_** json_obj'load_xml(xml,0) Using the **Print( )** method, you can print the JSON data. **_Example:_** json_obj'print()  
|  4. |  Drop the **json_obj** and **xml_obj** objects. **_Example:_** drop object json_obj drop object xml_obj  
  
## See Also

**[*OBJ/XML - XML Object](../utilities/obj_xml.md)  
[*OBJ/JSON - JSON Object](../utilities/obj_json.md)  
[Associative Arrays (Hash Tables)](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Associative%20Arrays%20\(Hash%20Tables\).htm)**  
**[DIM Define Arrays and Strings](../directives/dim.md)**  
**[DIM( ) Generate String/Get Array Size](../functions/dim.md)**  
**['JV' JSON Version](../parameters/jv.md)**
