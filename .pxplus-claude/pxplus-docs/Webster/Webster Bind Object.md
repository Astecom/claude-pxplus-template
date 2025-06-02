# Webster+

**Webster+ HTML Merge/Bind Object**|   
---|---  
  
Much of Webster+'s capabilities stem from its dynamic creation of Web pages (referred to as **_binding_**). Webster+ is designed to take the HTML page (.html file), scan it and replace short codes in the document with dynamically created HTML.

While you can put any of your own HTML in the HTML file, short codes are designed to simplify the process. For example, you could use an HTML editor to directly include input in an HTML page; however, if you wanted to include a query, specify a format or other characteristics, the HTML you would need to provide would be significant. Using short codes, you could simply include something like:

> **[input ClientID$ format="000000" ttl="Enter client" query=scrnlib;ClientQry]**

The above short code would generate all the HTML required to apply the format, tip and associated query button.

Short codes consist of a series of square bracket enclosed ( **[]** ) keywords with options that, when run through the bind utility (***obj/webbind**), control the generation of an HTML page. Short codes can be used to control layout, insert titles or sub-titles, define sections on your HTML pages, define input controls and forms, and provide options for conditional generation based on embedded PxPlus logic and variables. See **[Short Codes](Short%20Codes.md)**.

The format of the short code is:

> **[ shortcode option option option ]**

**_Where:_**

The **shortcode** itself will describe the type of information to be included in the HTML replacing the **shortcode** or execute some external process, such as including other HTML files, CSS code, etc. Where the **shortcode** requires or encapsulates sections of additional code, it will be terminated with a closing short code consisting of a slash followed by the short code enclosed in square brackets. For example, a button or check box would have the text/image contents to appear in the button, or for the check box, enclosed by a starting and ending short code.

**_Examples:_**

> [checkbox onhold$ on=Y off=N]On Hold[/checkbox]

> [input ClientName$ len=30]

> [template /pages/template1.html]

#### **Note:**  
To include an actual open or close square bracket in the page, precede the bracket with a _backslash_ , as in **\\[** and **\\]**.

The merge/bind object **"*obj/webbind"** does the actual binding of the HTML pages with your application data, along with all other processing of the short codes. It is part of Webster+ and accessible through **%Webster'Bind**. See **[Bind Object Methods](Bind%20Object%20Methods.md)**.

Webster+ will automatically "bind" your data values in memory when your process completes with whatever HTML page file is identified in the global variable **%BIND_FILE$**. The name of the file will be automatically preserved in the resultant bound HTML page and restored into the **%BIND_FILE$** variable when the next input from the form is received.

## Webster+ Short Codes and the Data Dictionary

One of the enhanced features of the bind process is its ability to use the PxPlus Data Dictionary information to construct input fields. You do this by telling Webster+ that the field relates to a field from a file definition; therefore, you can specify the file to be referenced and have Webster+ take all the field characteristics from the file data dictionary, as in:

> [input ClientID$ usefile=_filename$_]

This allows for dynamic pages generated based on the file specified and NOMADS data class settings. You can also use the [usefile  _filename$_] to specify a default file to use if no filename is provided on the **usefile=** option.
