# Objects

***OBJ/PARSEURL** |  **_Parse URL Object_**  
---|---  
  
## Usage

The ***obj/parseUrl** object consists of various properties and methods that parse the components of a provided URL. See **[Properties and Methods](obj_parseurl.htm#properties)**.

_(The Parse URL object *OBJ/PARSEURL was added in PxPlus 2026.)_

**_Instantiating the Parse URL Object_**

To instantiate the Parse URL object using the handle **parse_obj** (where **parse_obj** can be any numeric variable), enter the following command:

> parse_obj=NEW("*obj/parseUrl")

To access any of the available properties and methods, the object handle (**parse_obj**) is used, followed by an **'** (_apostrophe_) and the property or method (with the desired parameters).

**_Examples:_**

> parse_obj'url$=https://example.com/test/1234?email=xyz4@test.com&testing=123  
>   
>  print parse_obj'site$  
>   
>  print parse_obj'arg$("email")

#### **Note:**  
The link must be in the correct format and must include **https://** , followed by the URL and any required parameters; otherwise, the results may be incorrect.  
  
**_Example:_**  
  
     https://example.com/test/1234?email=xyz@test.com

##  Properties and Methods

The following **_properties_** are supported:

**Property** |  **Description**  
---|---  
**url$** |  Full URL  
**arg_cnt** |  Number of arguments present  
**site$** |  Website  
**path$** |  Path  
**query_str$** |  Portion of URL following the **?** (_question mark_) character  
**protocol$** |  HTTP or HTTPS  
  
The following **_method_** is supported:

**Method** |  **Description**  
---|---  
**Arg$(**_x_**)  
  
Arg$(**_x$_**)** |  Returns argument values based on either an index value (_x_) or an argument name (_x$_).  
  
## Examples

**_Example 1_** \- This example is using the following URL:

      **https://example.com/test/1234?email=xyz@test.com**.

     ->a=new("*obj/ParseUrl")  
     ->a'url$=https://example.com/test/1234?email=xyz@test.com

     \-->print a'site$  
           example.com

     ->print a'path$  
          test/1234

     ->print a'protocol$  
          https

     ->print a'arg_cnt  
          1

     ->print a'arg$(1) ! Get by index  
          email=xyz@test.com

     ->print a'arg$("email") ! Get by name  
          xyz@test.com

**_Example 2_** \- This example is using the following URL:

      **https://example.com/test/1234?email=xyz4@test.com &testing=123**

     ->a=new("*obj/ParseUrl")  
     ->a'url$="https://example.com/test/1234?email=xyz4@test.com&testing=123"

     ->print a'arg_cnt  
          2

     ->print a'arg$(1) ! Get by index  
          email=xyz4@test.com

     ->print a'arg$("email") ! Get by name  
          xyz4@test.com

     ->print a'arg$(2) ! Second arg  
          testing=123

     ->print a'arg$("testing")  
          123

     ->print a'query_str$  
          email=xyz4@test.com&testing=123

 

 

 
