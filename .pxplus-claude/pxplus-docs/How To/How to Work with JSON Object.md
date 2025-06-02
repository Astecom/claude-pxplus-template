# JSON Object How To Tutorials  
  
**How to Work with the PxPlus JSON Object**|   
---|---  
  
Starting with PxPlus 2025, a new **[JSON Object](../utilities/obj_json.md)** (*obj/json) has been added. It introduces a richer set of features and methods, greatly simplifying the creation and manipulation of JSON data while significantly improving current JSON functionality and performance. The object program **_json.pvc_** is found in the **_*lib/obj_** directory.

In conjunction with changes made to the **[XML Object](../utilities/obj_xml.md)** (*obj/xml), XML data can also be easily converted to JSON (and vice versa) using the objects.

See **[How to Convert XML to JSON](How%20to%20Convert%20XML%20to%20JSON.md)** and **[How to Convert JSON to XML Using the XML Object](How%20to%20Convert%20JSON%20to%20XML.md)**.

#### **Note:**  
The JSON object is also compatible with Booleans, null values, and null lists. Keys are case sensitive.

For the example below, you will be working with order details information. You will:

  * Create order details information.
  * Create customer details and include the order.
  * Update location information in various ways.
  * Save the JSON data.



These steps will show you some of the functions that involve working with order information using the JSON object. At any time, you can use the Print method **json_obj'print( )** to see the order details in the file up to that point.

## How to Create an Object

Instantiate an object called **_order_**.

json_obj = NEW("*obj/json")

**_Example:_**

order=new("*obj/json")

## How to Add Order Details Information

Using the **Append( )** method, add the _key_name_ (with its numeric/string _value_) to the object. If the key already exists, an Error #11 (Record not found or Duplicate key on write) will occur.

json_obj'append("_key_name_ ", "_value_ ")

**_Example:_**

order'append("ID",12345)  
order'append("Name","Apple")  
order'append("Amount",10)  
order'append("Unit Price",1.85)

## How to Create Customer Details

These steps show you how to create the customer details:

|  1. |  Instantiate another object called **_order_info_**. **_Example:_** order_info=new("*obj/json")  
---|---|---  
|  2. |  Input for the _key_ and _value_ for the Customer Name. **_Example:_** order_info'append("Customer Name","John Doe")  
|  3. |  Input for the _key_ and _value_ for the Date of expected delivery. **_Example:_** order_info'append("Date","01/01/2025") Using the **Append_to(** **)** method, append a _key1:string_ to a _key_name_. If the key already exists, an Error #11 (Record not found or Duplicate key on write) will occur. **_Example:_** append_to(key$,key2$,value$)  
|  4. |  Input for the _key_ and _value_ for the Country. **_Example 1:_**   
  
order_info'append_to("Location","Country","Canada")  
  
**_Example 2:_**  
  
order_info'append_to("Location.Country","Canada")  
|  5. |  Input for the _key_ and _value_ for the Province. **_Example 1:_**  
  
order_info'append_to("Location","Province","Ontario")  
  
**_Example 2:_**  
  
order_info'append_to("Location.Province","Ontario")

#### **Note:**  
Dot Notation is used in **_Example 2_** for Step 4 and Step 5 above.  
  
|  6. |  Using the **Append_json_to****( )** method, you can append any other JSON object to a _key_name_. If the key already exists, an Error #11 (Record not found or Duplicate key on write) will occur. Input for the **_order_** object into the **_order_info_** object. **_Example:_** order_info'append_json_to("Order",order)  
  
## How to Drop an Object

Now that the **_order_** object has been added, drop the **_order_** object.

**_Example:_**

drop object order

## How to Perform Calculations

Using the **Get_num(** **)** method, calculate the total order amount.

**_Example:_**

total=order_info'get_num("Order.Amount")*order_info'get_num("Order.Unit Price")

## How to Save the Totals from a Calculation

Using the **Set( )** method, set a _key_name_ with its _value_.

**_Example:_**

order_info'set("Total",total)

## How to Save a JSON File

Using the **Save_json_file(** **)** method, save the file using a full path.

json_obj'save_json_file("<_fullpath_tofile.json_ >")

**_Example:_**

order_info'save_json_file("orders.json")

## How to View the JSON Data for the Order

Using the **Print( )** method, you can print the data.

**_Example:_**

order_info'print()

## How to Modify the Data

Remove all Location data from **_order_info_**.

**_Example:_**

order_info'remove("Location")

Only remove Location:Address data from **_order_info_**.

**_Example:_**

order_info'remove("Location.Address")

## How to Load JSON Files

Using the **Load_json_file(** **)** method, load the file using a full path.

json_obj'load_json_file("<_fullpath_tofile.json_ >")

**_Example:_**

order_info'load_json_file("orders.json")

## How to Load JSON Data

**_How to Load the Data from an Array_**

These steps show you how to load the data from an array.

|  1. |  Create an associative array.

#### **Note:**  
When assigning a numeric as a string (such as _StreetNum_ in the example below), associative arrays know that it is a numeric; therefore, when printed, it prints numeric.

**_Example:_** Dim my_array$  
my_array$["FirstName"]="Jane"  
my_array$["LastName"]="Smith"  
my_array$["StreetNum"]="456"  
my_array$["Address"]="Ontario Street"  
---|---|---  
|  2. |  Create an object called **_json_obj_**. **_Example:_** json_obj=new("*obj/json")  
|  3. |  Using the **Load_array****( )** method, load the data from the array. **_Example:_** json_obj'load_array(my_array${all}) Using the **Print( )** method, you can print the JSON data. **_Example:_** json_obj'print()  
  
**_How to Load the Data from a String_**

These steps show you how to load the data from a string.

|  1. |  Set up a string. **_Example:_** string$="{Address: ""Ontario"",StreetNum: 456}"  
---|---|---  
|  2. |  Load the data from a string. **_Example:_** json_obj'load_string(string$)  
|  3. |  Using the **Print( )** method, you can print the JSON data. **_Example:_** json_obj'print()

#### **Note:**   
Reusing **load_string** without closing the object will clear the previous data.  
  
## How to Work with a List

These steps show you how to work with a list.

|  1. |  Create an object called **_json_list_**. **_Example:_** json_list=new("*obj/json")  
---|---|---  
|  2. |  Using the **Append( )** method, add the _key_name_ with its numeric/string _value_ to the object. If the key already exists, an Error #11 (Record not found or Duplicate key on write) will occur. json_obj'append("key_name","value") **_Example 1:_**  
  
json_list'append("1",1)  
  
**_Example 2_** :  
  
json_list'append("2",2)  
|  3. |  Using the **Append_to****( )** method, append a third index to the array. json_list'append_to("3.Location","1","value") **_Example:_** json_list'append_to("3.Loc_2","1","Value_3") **_OR_** json_list'append_to("3.Key","2","value_2") **_Example:_** json_list'append_to("3.Location","2","abc")  
|  4. |  Using the **Print( )** method, you can see the data. **_Example:_** json_list'print()  
|  5. |  Drop the json_obj objects. **_Example:_** drop object json_list  
  
## See Also

**[*OBJ/JSON - JSON Object](../utilities/obj_json.md)  
[*OBJ/XML - XML Object](../utilities/obj_xml.md)  
[Associative Arrays (Hash Tables)](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Associative%20Arrays%20\(Hash%20Tables\).htm)**  
**[DIM Define Arrays and Strings](../directives/dim.md)**  
**[DIM( ) Generate String/Get Array Size](../functions/dim.md)**  
**['JV' JSON Version](../parameters/jv.md)**
