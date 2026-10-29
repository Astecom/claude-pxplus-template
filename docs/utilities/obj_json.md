# Objects

***OBJ/JSON** |  **_JSON Object_**  
---|---  
  
## Invocation

_json_obj_ =**NEW( "*obj/json")**

## Description

The **" *obj/json"** object allows working with JSON data more easily than an associative array and comes with functions for advanced operations.

This object behaves similarly to an associative array and can still be used with dot key separators (key1**.** key2) but also comes with functions to make working with the data easier. Some of these functions include append, set, get and remove, as well as loading from associative arrays or strings, loading an XML object, saving and loading files, and working with subarrays within the object.

Numeric keys denote a list. List values can be accessed using their index. Including a **#** (_pound sign_) as the first character of a numeric key suppresses the creation of a list, and the numeric key displays without the pound sign. If you would like to use a pound sign as the first character, use **##**. For an example, see **[Examples - Using Lists](obj_json.htm#Mark10)**.

Null, Boolean and Null Lists are automatically converted from strings.

The **" *obj/json"** object is automatically sorted when using '**JV** '=2. See **['JV'](../parameters/jv.md)** system parameter.

The **[Load_xml](obj_json.htm#loadxml)** method does not convert **xml** attribute tags.

#### **Note:**  
Keys are case sensitive.

**_Examples:_**

> json_obj'append("key_name", "value")

> list'append("1", 123)

> list'print("1.1") ! >123

> json_obj'remove("key1.key2")

> print json_obj'size()

Use these links to access additional examples provided below:

> **[Example - Creating and Working with the JSON](obj_json.htm#ex_createjson)**  
> **[Example - Loading Data](obj_json.htm#ex_loaddata)**  
> **[Example - Using Lists](obj_json.htm#ex_usinglists)**

_(The JSON object *OBJ/JSON was added in PxPlus 2025.)_

## Methods

The following **_methods_** are supported:

**Method** |  **Description**  
---|---  
**Append(**_key$, value_**)  
Append(**_key$, value$_**)** |  Appends a key with a numeric or string value to the JSON object if the given key does not exist.  
**Append_json(**_jsonObj_**)** |  Appends all the elements from the given JSON object.  
**Append_json_to(**_key$, jsonObj_**)** |  Appends the elements of the given JSON object to a key if the key does not exist.  
**Append_to(**_key$, key2$, value_**)  
Append_to(**_key$, key2$, value$_**)** |  Appends _key2_ with a numeric or string value to the given key of the JSON object if _key.key2_ does not exist.  
**Clear( )** |  Removes all values from the JSON object.  
**Exists(**_key$_ **)** |  Returns 1 if key exists, 0 if key does not exist. _(The Exists method was added in PxPlus 2025 Update 1.)_  
**Find(**_regex$_**)** |  Returns a JSON list of keys that match the given _regex$_ (where _regex$_ is a string of a regular expression). Returns an empty list if no keys are found.  
**Find(**_regex$, key$_**)** |  Returns a JSON list of keys that match the given _regex$_ within the given sub-key (where _regex$_ is a string of a regular expression). Returns an empty list if no keys are found.  
**Find_any(**_regex$_ **)** |  Returns 1 if any matching keys are found (where _regex$_ is a string of a regular expression). Returns 0 if none are found.  
**Find_any(**_regex$, key$_ **)** |  Returns 1 if any matching keys in the given sub-key are found (where _regex$_ is a string of a regular expression). Returns 0 if none are found.  
**Find_any_val(**_regex$, val_ **)  
Find_any_val(**_regex$, val$_**)** |  Returns 1 if any matching keys that equal the given value are found (where _regex$_ is a string of a regular expression). Returns 0 if none are found. _(The Find_any_val method was added in PxPlus 2025 Update 1.)_  
**Find_any_val(**_regex$, val, key$_ **)  
Find_any_val(**_regex$, val$, key$_**)** |  Returns 1 if any matching keys in the given sub-key are found that equal the given value (where _regex$_ is a string of a regular expression). Returns 0 if none are found. _(The Find_any_val method was added in PxPlus 2025 Update 1.)_  
**Find_val(**_regex$, val_ **)  
Find_val(**_regex$, val$_**)** |  Returns a JSON list of keys matching the given _regex_ (where _regex$_ is a string of a regular expression) that equal the given value. Returns Error #11 if no keys are found. _(The Find_val method was added in PxPlus 2025 Update 1.)_  
**Find_val(**_regex$, val, key$_ **)  
Find_val(**_regex$, val$, key$_**)** |  Returns a JSON list of keys matching the given _regex_ (where _regex$_ is a string of a regular expression) that equal the given value within the given sub-key. _(The Find_val method was added in PxPlus 2025 Update 1.)_  
**Force_set(**_key$, value_ **)  
Force_set(**_key$, value$_**)** |  Set value without key validation.  
**Force_set(**_key$, value, ignore_remove_**)  
Force_set(**_key$, value$, ignore_remove_**)** |  Set value without key validation. _ignore_remove_ =1 will ignore removing old values.  
**Get_json(**_key$_**)** |  Returns a JSON object of the given key. Returns Error #11 if the object size is 0.  
**Get_json(**_key$, full_key_flag_**)** |  Returns a JSON object of the given key. Keys will use the full key name when _full_key_flag_ =1. Returns Error #11 if the object size is 0.  
**Get_json(**_key$, full_key_flag, no_validation_**)** |  Returns a JSON object of the given key. Keys will use the full key name when _full_key_flag_ =1. _no_validation_ =1 will ignore key validation. Returns Error #11 if the object size is 0. _(The no_validation flag was added in PxPlus 2025 Update 1.)_  
**Get_key$(**_index_**)** |  Returns the key at an index in the object.  
**Get_keys( )** |  Returns a JSON object of all keys in the object. _(The Get_keys method was added in PxPlus 2025 Update 1.)_  
**Get_num(**_key$_**)** |  Returns a numeric from the key.  
**Get_num(**_key$, no_validation_**)** |  Returns a numeric from the key. _no_validation_ =1 will ignore key validation.  
**Get_str$(**_key$_**)** |  Returns a string from the key.  
**Get_str$(**_key$, no_validation_**)** |  Returns a string from the key. _no_validation_ =1 will ignore key validation.  
**Is_list_index(**_key$_**)** |  Returns 1 if the given key is an index of a list; otherwise, returns 0.  
**Is_num(**_key$_**)** |  Returns 1 if the given value is numeric; otherwise, returns 0.  
**Is_str(**_key$_**)** |  Returns 1 if the given value is a string; otherwise, returns 0.  
**Print( )** |  Prints the JSON string.  
**Print(**_key$_**)** |  Prints the JSON string at the given key.  
**Print_keys( )** |  Prints all keys within the object. _(The Print_keys method was added in PxPlus 2025 Update 1.)_  
**Print(**_sort_flag_**)** |  Prints the sorted JSON string when _sort_flag_ =1.  
**Print(**_key$, sort_flag_**)** |  Prints the sorted JSON string at the given key when _sort_flag_ =1.  
**Remove(**_key$_**)** |  Removes the key from the JSON object.  
**Remove(**_key$, no_validation_**)** |  Removes the key from the JSON object. _no_validation_ =1 will ignore key validation. Returns Error #11 if the object size is 0. _(The no_validation flag was added in PxPlus 2025 Update 1.)_  
**Set(**_key$, value_**)  
Set(**_key$, value$_**)** |  Sets the key with a numeric or string value.  
**Set_json(**_key$, jsonObj_**)** |  Sets the key to the elements in the given JSON object. Returns Error #11 if the given object size is 0.

#### **Warning!**  
Self-referencing will result in an Error #91: Class/Object in use.  
  
**Set_json(**_key$, jsonObj, no_validation_**)** |  Sets the key to _key:json_. _no_validation_ =1 will ignore key validation. Returns Error #11 if the given object size is 0.

#### **Warning!**  
Self-referencing will result in an Error #91: Class/Object in use.

_(The no_validation flag was added in PxPlus 2025 Update 1.)_  
**Size( )** |  Returns the total number of elements in the JSON object.  
**String$( )** |  Returns a string of the JSON data.  
**String$(**_key$_**)** |  Returns a string of the JSON data at the given key.  
**String$(**_sort_flag_**)** |  Returns a string of the sorted JSON object when _sort_flag_ =1.  
**String$(**_key$,_  _sort_flag_**)** |  Returns a string of the sorted JSON object from the given key when _sort_flag_ =1.  
  
**_Loading and Saving Methods_**

**Method** |  **Description**  
---|---  
**Load_array(**_array${all}_**)** |  Load JSON from an associative array.  
**Load_array(**_array${all}, num_flag_**)** |  Load JSON from an associative array as only strings if _num_flag_ =0.  
**Load_json_file(**_path$_**)******|  Loads the JSON object from the data in the given JSON file. Must start with "**{** " or "**[** ".  
**Load_string(**_jsonString$_**)** |  Load JSON from a string.  
**Load_xml(**_xml_object_**)** |  Loads the data of an XML object into the JSON object. Converts strings to numeric if possible. Does not support duplicate XML tags.  
**Load_xml(**_xml_object, num_flag_**)** |  Loads the data of an XML object into the JSON object as only strings if _num_flag_ =0. Does not support duplicate XML tags.  
**Load_xml(**_xml_object, num_flag, dupe_flag_**)******|  Loads the XML object data into the JSON object as only strings if _num_flag_ =0. If _dupe_flag_ =1, then duplicates will also be handled by condensing duplicates into a single list. Returns Error #11 if the object size is 0.

#### **Note:**  
Loading data with very large amounts of duplicates may become very slow.

_(Support to handle duplicates was added in PxPlus 2025 Update 1.)_  
**Save_json_file(**_path$_**)** |  Saves the JSON object data to a file.  
  
##  Example - Creating and Working with the JSON Object

**_Create an order:_**

      order=new("*obj/json")  
      order'append("ID",12345)  
      order'append("Name","Apple")  
      order'append("Amount",10)  
      order'append("Unit Price",1.85)

**_Create order information:_**

      order_info=new("*obj/json")  
      order_info'append("Customer Name","John Doe")  
      order_info'append("Date","01/01/2025")  
      order_info'append_to("Location","Country","Canada")  
      order_info'append_to("Location","Province","Ontario")  
      order_info'append("Location.City","Toronto")  
      order_info'append("Location.Address","123 Ontario Street")  
      order_info'append_json_to("Order",order)  
      drop object order

**_Set order total and print the object:_**

      total=order_info'get_num("Order.Amount")*order_info'get_num("Order.Unit Price")  
      order_info'set("Total",total)  
      order_info'print()

**_Get a JSON object of the location and update the information:_**

      location_info=order_info'get_json("Location")  
      location_info'set("Address","321 Ontario Street")  
      location_info'print()

**_Update the location in order_info:_**

      order_info'set_json ("Location",location_info)  
      drop object location_info  
      order_info'print()

**_Save JSON object to file:_**

      order_info'save_json_file("path\to\file.json")

**_Remove location data from order:_**

      order_info'remove("Location")  
      order_info'print()

**_Load JSON object from file:_**

      order_info'load_json_file("path\to\file.json")  
      order_info'print()  
      drop object order_info

##  Example - Loading Data

**_Create an associative array:_**

      dim my_array$  
      my_array$["FirstName"]="Jane"  
      my_array$["LastName"]="Smith"  
      my_array$["StreetNum"]="456"  
      my_array$["Address"]="Ontario Street"

**_Load data from an array:_**

      my_obj=new("*obj/json")  
      my_obj'load_array(my_array${all})  
      my_obj'print()

**_Load data from a string:_**

      string$="{ var1: [ ], var2: ""someString"", var3: 1.3 }"  
      my_obj'load_string(string$)  
      my_obj'print()

**_Create an XML object:_**

      xml=new("*obj/xml")  
      xml'set_xml("<emp><name>John Smith</name><addr>456 Ontario Street</addr><age>40</age></emp>")  
      print xml'get_xml$()

**_Load XML into JSON:_**

      my_obj'load_xml(xml)  
      my_obj'print()

**_Load the XML object without numeric conversion:_**

      my_obj'load_xml(xml, 0)  
      my_obj'print()

##  Example - Using Lists

**_Invoke a new object:_**

      json_list=new("*obj/json")

**_Append some values to a list:_**

      json_list'append("1", 1)  
      json_list'append("2", 2)

**_Create a new list under another key:_**

      json_list'append_to("3.Key", "1", "Value")  
      json_list'append_to("3.Key", "2", "Value_2")

**_Create a second list under a different key:_**

      json_list'append_to("3.Key_2", "1", "Value_3")

**_Create a non-list numeric key_**** _:_**_(This example was added in PxPlus 2025 Update 1.)_

      json_list'append("3.#1", "Not a list")  
      json_list'append("3.##2", "Pound in name")  
      json_list'print()  
      drop object json_list

## See Also

**[*OBJ/XML - XML Object](obj_xml.md)**  
**[Associative Arrays (Hash Tables)](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Associative%20Arrays%20\(Hash%20Tables\).htm)**  
**[DIM Define Arrays and Strings](../directives/dim.md)**  
**[DIM( ) Generate String/Get Array Size](../functions/dim.md)**  
**['JV' JSON Version](../parameters/jv.md)**

 

 

 
