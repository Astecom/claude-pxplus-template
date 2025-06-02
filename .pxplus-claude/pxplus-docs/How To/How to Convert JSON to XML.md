# JSON Object How To Tutorials

**How to Convert JSON to XML Using the XML Object**|   
---|---  
  
Starting with PxPlus 2025, JSON data can be easily converted to XML by using both the **[JSON](../utilities/obj_json.md)** (*obj/json) and **[XML](../utilities/obj_xml.md)** (*obj/xml) objects.

The object programs, **_json.pvc_** and **_xml.pvc_** are found in the **_*lib/obj_** directory.

_(The JSON object *OBJ/JSON was added in PxPlus 2025.)_

These steps show you how to convert JSON data to XML by using the XML object.

|  1. |  Create both the JSON and XML objects. **_Example:_** json_obj=new("*obj/json") xml_obj=new("*obj/xml")  
---|---|---  
|  2. |  Create JSON data using a string. **_Example:_** string$="{Address: ""Ontario"",StreetNum: 456}"  
|  3. |  Load the data into the JSON object. **_Example:_** json_obj'load_string(string$)

#### **Note:**   
Reusing **load_string** without closing the object will clear the previous data.  
  
|  4. |  Using the **Print( )** method, you can print the JSON data  **_Example:_** json_obj'print()  
|  5. |  Using the **Load_json****( )** method, load the XML data. **_Example:_** xml_obj'load_json(json_obj)  
|  6. |  To view the data you just created, print the XML string by using the **Get_Xml$( )** method, which returns the XML string. **_Example:_** print xml_obj'get_xml$()  
|  7. |  Drop the **json_obj** and **xml_obj** objects. **_Example:_** drop object json_obj drop object xml_obj  
  
## See Also

**[*OBJ/JSON - JSON Object](../utilities/obj_json.md)  
[*OBJ/XML - XML Object](../utilities/obj_xml.md)  
[Associative Arrays (Hash Tables)](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Associative%20Arrays%20\(Hash%20Tables\).htm)**  
**[DIM Define Arrays and Strings](../directives/dim.md)**  
**[DIM( ) Generate String/Get Array Size](../functions/dim.md)**  
**['JV' JSON Version](../parameters/jv.md)**
