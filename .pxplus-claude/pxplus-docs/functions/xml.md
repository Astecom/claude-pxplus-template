# System Functions  
  
**XML( )** |  **_XML Parsing/Generation Facility_**  
---|---  
  
##  Formats

1. |  _Append a Value_ : |  **XML(ADD** _strval_ _$_**TO** _curxml_ _$**,**_**KEY=**_tagname_ _$_**[ , OPT= **_propstr_ _$_**] [** ,**ERR=**_stmtref_**])**  
---|---|---  
2. |  _Get Next Value:_ |  **XML(NEXT FROM** _curxml_ _$**,**_**IND=**_offsetvar_** _,_ KEY=**_tagvar_ _$_**[ , OPT=**_propvar_ _$_**] [** ,**ERR=**_stmtref_**])**  
3. |  _Append a Property:_ |  **XML(PROPERTY ADD** _strval_ _$_**TO** _curprop_ _$**,**_**KEY=**_propname_ _$_**[** ,**ERR=**_stmtref_**])**  
4. |  _Get Next Property:_ |  **XML(PROPERTY NEXT FROM** _curprop_ _$**,**_**IND=**_offsetvar_** _,_ KEY=**_propvar_ _$_**[** ,**ERR=**_stmtref_**])**  
  
**_Where:_**

_curprop_ _$_ |  XML property string that is currently being processed. When used in an **ADD** , this is the string that will be appended to. In the **NEXT FROM** , this is the string that is being parsed.  
---|---  
_curxml_ _$_ |  XML statement that is currently being processed. When used in an **ADD** , this is the XML that will be appended to. In the **NEXT FROM** , this is the XML that is being parsed.  
_offsetvar_ |  Numeric variable that is used to track the offset into _curxml_ _$_ or _curprop_ _$_ during the parsing. It is the one (1) based offset into the string. A value of zero is considered as an offset of one. It will be updated after the execution of the function with the offset where processing is to continue.  
_propname_ _$_ |  String value or expression containing the property name to add. This value must not be null.  
_propstr_ _$_ |  String value or expression containing the properties associated with the tag being added.  
_propvar_ _$_ |  String variable that will receive the property name.  
_strval_ _$_ |  String value or expression containing the value to be added.  
_tagname_ _$_ |  String value or expression containing the name of the tag to add. If this value is a null string, no tag will be inserted.  
_tagvar_ _$_ |  String variable that will receive the tag name.  
_stmtref_ |  Program line number or statement label where the program will transfer to in case of an error.  
  
##  Returns

The **ADD** form of the function returns the new XML or Property string after the value has been appended. The **NEXT FROM** form returns the next value from the parsed value.

##  Description

The **XML( )** function is designed to assist application programs parse and construct XML documents. The **ADD** functions allow for the easy construction of XML data assuring the proper placement and matching of names/tags within the data.

The **NEXT FROM** provides the ability to parse an XML string, retrieving the data values for each corresponding tag in accordance with XML specifications. The **NEXT FROM** automatically matches each start and end tag or empty tags as well as provides detection of comments, DID and PI type XML records.

To construct a XML string, the **XML** **ADD** function is called with each of its corresponding data elements. Generally, an XML document will be made up of multiple elements in some form of hierarchy, which is accomplished by simply adding XML elements themselves to an existing XML string.

_(The XML function was added in PxPlus v7.10.)_

## Example

The following example shows how a simple multi-level XML can be created -- in this case, an XML document describing two organizations:

First, we need to construct a XML list of employees:

> **empl$=XML(add "John" to "",key="Employee")**  
> **?empl$**  
>  <Employee>John</Employee>

The **ADD** logic created the XML starting with a NULL string for the first employee. Now, we will add the other employees:

> **empl$=XML(add "Fran" to empl$,key="Employee")**  
> **?empl$**  
>  <Employee>John</Employee>  
>  <Employee>Fran</Employee>

Notice that we passed the pre-existing XML text, which contained "John" to the **ADD**. This resulted in XML with both entries:

> **empl$=XML(add "Sammy" to empl$,key="Employee",opt="role='Sales' ")**  
> **?empl$**  
>  <Employee>John</Employee>  
>  <Employee>Fran</Employee>  
>  <Employee role='Sales'>Sammy</Employee>

Now we have the list of company employees, so we can create a company XML. But for this, the company needs a property of its name:

> **comp_prop$=XML(property add "Widgets Plus" to "", key="name")**  
> **?comp_props$**  
>  name='Widgets Plus'

Now, we will create the company XML entry:

> **company$=XML(add empl$ to "",key="company",opt=comp_prop$)**  
>  ?**company$  
> ** <company name='Widgets Plus'>  
>  <Employee>John</Employee>  
>  <Employee>Fran</Employee>  
>  <Employee role='Sales'>Sammy</Employee>  
>  </company>

We have an XML description of a company. Let us extend this to create a data set of multiple companies and call it 'suppliers'. First, we need another company:

> **empl$=XML(add "Jane" to "",key="Employee",opt="role='Owner' " )**  
> **empl$=XML(add "Roberto" to empl$,key="Employee")**  
> **empl$=XML(add "Fredrico" to empl$,key="Employee",opt="role='Sales' ")  
>  comp2_prop$=XML(property add "More Gadgets" to "", key="name")**  
> **company$=XML(add empl$ to company$,key="company",opt=comp_prop$)**  
>  ?**company$  
> ** <company name='Widgets Plus'>  
>  <Employee>John</Employee>  
>  <Employee>Fran</Employee>  
>  <Employee role='Sales'>Sammy</Employee>  
>  </company>  
>  <company name='More Gadgets'>  
>  <Employee role='Owner'>Jane</Employee>  
>  <Employee>Roberto</Employee>  
>  <Employee role='Sale'>Fredrico</Employee>  
>  </company>
> 
> In the above example, we added the second company set to the first. We could instead have created a new XML data set for the second company and merged them together into companies$ as follows: **comp2$=XML(add empl$ to ""$,key="company",opt=comp_prop$)**  
> **companies$=XML(add company$ to "",key="")**  
> **companies$=XML(add comp2$ to companies$,key="")**  
> **companies$  
> ** <company name='Widgets Plus'>  
>  <Employee>John</Employee>  
>  <Employee>Fran</Employee>  
>  <Employee role='Sales'>Sammy</Employee>  
>  </company>  
>  <company name='More Gadgets'>  
>  <Employee role='Owner'>Jane</Employee>  
>  <Employee>Roberto</Employee>  
>  <Employee role='Sale'>Fredrico</Employee>  
>  </company>  
> ---  
  
Finally, we can create our supplier list:

> **suppliers$=XML(add company$ to "",key="suppliers")**  
> **suppliers$  
> ** <suppliers>  
>  <company name='Widgets Plus'>  
>  <Employee>John</Employee>  
>  <Employee>Fran</Employee>  
>  <Employee role='Sales'>Sammy</Employee>  
>  </company>  
>  <company name='More Gadgets'>  
>  <Employee role='Owner'>Jane</Employee>  
>  <Employee>Roberto</Employee>  
>  <Employee role='Sale'>Fredrico</Employee>  
>  </company>  
>  </suppliers>

Now, to parse the value in suppliers$, let us use a simple program:

> valu$=suppliers$  
>  gosub PARSER  
>  stop  
>  PARSER:  
>  local ofst  
>  local xml$  
>  xml$=valu$  
>  local pfx$=pfx$+" "  
>  while 1  
>  valu$=xml(next from ""+xml$,ind=ofst,key=name$,opt=prop$,err=*break)  
>  print pfx$,  
>  if mid(valu$,1,1)<>"<" \  
>  then print name$," value='",valu$,"' prop='",prop$,"'" \  
>  else print name$;  
>  gosub PARSER  
>  wend  
>  return

If we run this program, we get:

> Tag:suppliers  
> Tag:company name='Widgets Plus'  
> Tag:Employee  
>  John  
> Tag:Employee  
>  Fran  
> Tag:Employee role='Sales'  
>  Sammy  
> Tag:company name='Widgets Plus'  
> Tag:Employee role='Owner'  
>  Jane  
> Tag:Employee  
>  Roberto  
> Tag:Employee role='Sales'  
>  Fredrico

#### **Note:**  
Normally, proper XML will have a PI header indicating that the document is XML and what data format/spec is being used. If we wanted to actually send the value in suppliers to another application, we would normally have done something like:  
  
**xml$=XML(add "" to "",key="?xml",opt="version='1.0' ")**  
**xml$=XML(add company$ to xml$,key="suppliers")**
