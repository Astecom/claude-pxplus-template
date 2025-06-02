# Utility Routines

***OBJ/XML** |  **_XML Object_**  
---|---  
  
## Invocation

_oHandle_ =**NEW ("*obj/xml" [** , _xml_data_ _$_ **] )**

**_Where:_**

_xml_data_ _$_ |  Optional parameter for the object creation that may contain the XML to be parsed and loaded into the object. _(added in PxPlus 2019)_  
---|---  
  
## Description

The **"*obj/xml.pvc"** object provides a simple means to load, edit and generate XML. It parses the XML into individual node sub-objects where each node can have sub-nodes, attributes and tags.

Internally, the object maintains the XML in a tree structure of "node" objects where each node can have a **'Tag$** element (type/name of the node) and a **'Value$** element, which contains the value for that specific node. Each node can also contain subordinate nodes and/or subordinate attributes.

**_Example:_**

Consider the following XML example:

<staff>  
<employee>  
<firstname>John</firstname>  
<lastname>Watson</lastname>  
</employee>  
<employee>  
<firstname>Sherlock</firstname>  
<lastname>Holmes</lastname>  
</employee>  
</staff>

When represented using the *obj/xml, this would consist of a node with a **'Tag$** of "staff" containing two subordinate nodes, each with a **'Tag$** of "employee". The first of the subordinate nodes would itself contain two subordinate nodes: the first with a **'Tag$** of "firstname" and a **'Value$** of "John", and the second with a **'Tag$** of "lastname" and a **'Value$** of "Watson". The second node of the top-level "staff" node would also contain two subordinates for "Sherlock", "Holmes".

Subordinate nodes can be added to any node using the **'Add_Node( )** method and deleted using the **'Del_Node( )** method.

Nodes may also contain "attribute" nodes, which are used to maintain the attributes of any node. For example, an XML node for <account type="debit"> would have a single attribute node with the **'Tag$** of "type" and a value of "debit".

Attribute nodes may be added to a node using the **'Add_Attr( )** method and deleted using the **'Del_Attr( )** method.

If desired, a node may be loaded using the **'Set_Xml( )** method, which takes XML as a string and builds a node tree from it. The **'Get_Xml$( )** method can also be used on any node to obtain the string representation of the XML within and below that node. See **[Example - Setting/Getting the XML](obj_xml.htm#ex_setget)**.

The following methods have been added to make it possible to convert JSON to XML (and vice versa): **[Load_json( )](obj_xml.htm#load_json)**, **[Load_xml_file( )](obj_xml.htm#load_xmlfile)** and **[Save_xml_file( )](obj_xml.htm#save_xmlfile)**.

For examples using these methods, see **[Example - Loading JSON into XML](obj_xml.htm#ex_loadjson)** and **[Example - Loading and Saving an XML File](obj_xml.htm#ex_loadsave)**.

_(The XML object *OBJ/XML was added in PxPlus v11.50.)  
(The Load_json( ), Load_xml_file( ) and Save_xml_file( ) methods were added in PxPlus 2025.)_

## Methods and Properties

The following **_methods_** are supported:

**Method** |  **Description**  
---|---  
**Add_Attr** _(n)_ |  Add a new attribute and return its object ID. '_n_ ' defines where to insert the new node (0=Append).  
**Add_Attr** _(tag$)_ |  Add a new attribute with _tag$_ specified and return its handle.  
**Add_Attr** _(tag$, n)_ |  Add a new attribute with _tag$_ specified after node '_n_ ' and return its handle.  
**Add_Node** _(n)_ |  Add a new sub-node and return its object ID. '_n_ ' defines where to insert the new node (0=Append).  
**Add_Node** _(n, object)_ |  Insert the supplied sub node object into the node table after node '_n_ '. The inserted object will have its reference count incremented, as there will now be an additional reference to it.  
**Add_Node** _(tag$)_ |  Add a new sub-node with the _tag$_ specified and return its handle.  
**Add_Node** _(tag$, n)_ |  Add a new sub-node with the _tag$_ specified after node '_n_ ' and return the handle of the new node.  
**Add_Node** _(tag$, value$)_ |  Add a new sub-node with the _tag$_ and _value$_ specified and return its handle.  
**Add_Node** _(tag$, value$, n)_ |  Add a new sub-node with the _tag$_ and _value$_ specified after node '_n_ ' and return the handle of the new node.  
**Attr** _(n)_ |  Return the attribute object '_n_ '.  
**Del_Attr** _(n)_ |  Drop the attribute specified.  
**Del_Node** _(n)_ |  Drop the node specified.  
**Find_Index** _(node)_ |  Returns the child index of the specified object (Error #11 if not found).  
**Find_Node** _(tag$)_ |  Find first sub-node whose _tag$_ matches that specified. Returns 0 if none found.  
  
_tag$_ may contain multiple levels separated by slashes, such as table/row/column, which would find the first tag "table", then the first node "row" in that table, then the first node "column" in that node.  
**Find_Node** _(tag$, n)_ |  Find first sub-node whose _tag$_ matches that specified after node '_n_ '. Returns 0 if none found.  
**Get_Xml$( )** |  Return the XML string from the object and subordinate nodes.  
**Load_json(**_jsonObj_**)** |  Sets the XML object using a JSON object. See **[Example - Loading JSON into XML](obj_xml.htm#ex_loadjson)**. _(The Load_json method was added in PxPlus 2025.)_  
**Load_xml_file(**_path$_**)** |  Loads the XML object from the data in the given XML file. See **[Example - Loading and Saving an XML File](obj_xml.htm#ex_loadsave)**. _(The Load_xml_file method was added in PxPlus 2025.)_  
**Next_Sibling( )** |  Returns the node's next sibling (0 if no next sibling).  
**Node** _(n)_ |  Returns the sub node object '_n_ '.  
**Prior_Sibling( )** |  Returns the node's prior sibling (0 if no prior sibling).  
**Save_xml_file(**_path$_**)** |  Saves the XML data from the object to a file. Returns 0 if an error occurs. See **[Example - Loading and Saving an XML File](obj_xml.htm#ex_loadsave)**. _(The Save_xml_file method was added in PxPlus 2025.)_  
**Set_Xml** _(xml$)_ |  Load and create nodes given XML string in _xml$_. This creates a dummy top-level node in which all top-level XML structures are placed. This allows the input XML to contain multiple top-level structures.  
**Set_Xml_1** _(xml$)_ |  Loads a single node from the XML string and will report an error 42 if it encounters multiples. This avoids the top-level node that may contain multiple nodes.  
**Value$**_(tag$)_ |  Find the specified tag and returns its value. Same functionality as **'Find_Node** _(__tag$)_**'Value$**. _(The Value$(tag$) method was added in PxPlus 2019.)_  
  
_(The methods Add_Node, Add_Attr, Find_Node and Find_Attr with a tag$ argument were added in PxPlus 2014.)  
(The methods Find_Index(node), Next_Sibling( ),Prior_Sibling( ) and the property parent were added in PxPlus 2016.)_

The following **_properties_** are supported:

**Property** |  **Description**  
---|---  
**attrs** |  Number of attributes.  
**nodes** |  Number of sub-nodes (only direct subordinate nodes).  
**parent** |  Returns the node's parent (0 if none).  
**tag$** |  Node tag (i.e. the <..> keyword).  
**value$** |  Text value of the node.  
  
##  Example - Setting/Getting the XML

The following code is an example of setting/getting the XML:

> x=new("*obj/xml")  
> x'set_xml("<emp><name>mike king</name><addr>123 main</addr></emp>")  
>  print x'get_xml$()  
> x'set_xml("<emp><name format='First Last'>mike king</name><addr><street>123 main</street><city>Markham</city></addr></emp>")  
>  print x'get_xml$()  
>  drop object x

You should be able to read the XML file into one long string, invoke **set_xml( )** , change/edit the nodes, and then call **get_xml$( )** to retrieve the revised XML back.

## Example - Parsing the XML

Suppose you have received and need to parse the following XML and have it loaded into the string **xml$** :

#### **Note:**  
When exchanging XML between systems, most XML has a header of **<?xml...?>**, which becomes Node(1) of the object. The true XML to be parsed actually starts at Node(2).

> <?xml version="1.0" encoding="UTF-8"?>  
>  <response>  
>  <control>  
>  <status>success</status>  
>  <senderid>JohnDoe</senderid>  
>  <controlid>create_project_simple</controlid>  
>  <uniqueid>false</uniqueid>  
>  <dtdversion>2.1</dtdversion>  
>  </control>  
>  <operation>  
>  <authentication>  
>  <status>success</status>  
>  more

To load the XML into the XML object, you would use the **'Set_Xml(**_string$_ **)** method:

> -:a=new("*obj/xml") ! Create the object  
>  -:a'set_xml(XML$) ! Pass the XML string

Once loaded, you can parse through all the nodes looking for what you want:

> -:?a'node(1)'tag$  
>  ?xml  
>  -:?a'node(2)'tag$  
>  response  
>  -:?a'node(2)'node(1)'tag$  
>  control  
>  -:?a'node(2)'node(1)'node(1)'tag$  
>  status  
>  -:?a'node(2)'node(1)'node(1)'value$  
>  success  
>  -:?a'node(2)'node(1)'node(2)'tag$  
> senderid  
>  -:?a'node(2)'node(1)'node(2)'value$  
> JohnDoe

You can assign variables to hold the node pointers to make the coding a bit simpler:

> -:oResponse=a'node(2)  
>  -:oCtrl=oResponse'node(1)  
>  -:print oCtrl'node(1)'tag$  
>  status

## Example - Generating XML

Suppose you wanted to generate the following XML:

> <request>  
>  <login>  
>  <userid>JohnDoe</userid>  
>  <password>drowssap</password>  
>  <database>Sample Corp</database>  
>  </login>  
>  <command>  
>  <create_prod>  
>  <prodcode>000123</prodcode>  
>  <desc>Blue widget</desc>  
>  <price currency='CDN'>1.23</price>  
>  <qty>10</qty>  
>  <uom>ea</uom>  
>  </create_prod>  
>  </command>  
>  </request>

The logic to create this might look like this:

> oXml=new("*obj/xml") ! XML Object  
>  oReq=oXml'Add_Node("request")  
>  !  
>  oLogin=oReq'Add_Node("login")  
>  !  
>  oLogin'Add_Node("userid")'value$="JohnDoe"  
>  oLogin'Add_Node("password")'value$="drowssap"  
>  oLogin'Add_Node("database")'value$="Sample_Corp"  
>  !  
>  oCmnd=oReq'Add_Node("command")  
>  !  
>  oCreate=oCmnd'Add_Node("create_prod")  
>  !  
>  oCreate'Add_Node("prodcode")'value$="000123"  
>  oCreate'Add_Node("desc")'value$="Blue Widget"  
>  !  
>  oPrice=oCreate'Add_Node("price")  
>  !  
>  oPrice'value$="1.23"  
>  ! -- Add currency  
>  oPrice'Add_Attr("currency")'value$="CDN"  
>  !  
>  oCreate'Add_Node("qty")'value$="10"  
>  oCreate'Add_Node("uom")'value$="ea"  
>  !  
>  x$=oXml'Get_Xml$()  
>  print x$  
>  !  
>  drop object oXml

##  Example - Loading and Saving an XML File

> xml_obj=new("*obj/xml")  
> xml_obj'set_xml("<emp><name>John Doe</name><addr>123 Main</addr></emp>")  
>  xml_obj'save_xml_file("C:\Users\user\Documents\example_file_new.xml")  
>  drop object xml_obj  
>  !  
> xml_obj=new("*obj/xml")  
>  xml_obj'load_xml_file("C:\Users\user\Documents\example_file.xml")  
>  print xml_obj'get_xml$()  
>  drop object xml_obj

_(This example was added in PxPlus 2025.)_

##  Example - Loading JSON into XML

> xml_obj=new("*obj/xml")  
> xml_obj'load_json(jsonObj)  
>  print xml_obj'get_xml$()  
>  drop object xml_obj

_(This example was added in PxPlus 2025.)_

## See Also

**[XML( ) - XML Parsing/Generation Facility](../functions/xml.md)  
[*OBJ/JSON JSON Object](obj_json.md)**
