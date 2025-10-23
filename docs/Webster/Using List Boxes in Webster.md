# Webster+

**Using List Boxes in Webster+**|   
---|---  
  
One of the key features of Webster+ is its ability to handle list boxes. List boxes consist of multiple rows of consistent fields shown in a list. For example, a list box can be used to show the sales information for a specific product, such as invoice number, customer number\name, cost, price, quantity sold, etc.

The short code **[[list]](Short%20Codes.htm#list)** is used to create a list box. Three types of lists can be generated: a Report style list, a drop box and a simple list box. If there are multiple columns of data or any column has a title, a Report style list will be created. If only one column of data is present and there are no titles, a drop box will be created if no height is specified on the **size** =_xxx_ option; otherwise, a simple list box will be generated.

The contents of the list box can be defined by the list box source (**query=** , **file=** , or inline data) and column definitions. See **[Data Specifications](Short%20Codes.htm#data_spec)**.

To update the list box, you can use the **[%Webster'Update(_listboxname_ _$_)](Webster%20Object%20Methods.htm#update_listbox)** method.

**_Adding Paginated Output_**

While you could have the system load the full contents of the list box, the amount of data and the time to load the data could be excessive. By adding pagination to the list box, you can tell the system to only show the data one page at a time, which reduces the amount of data being downloaded.

To add pagination, use the short code option **[pagerows=_nnn_](Short%20Code%20Options.htm#pagerows)** on a **[list]** short code to specify the number of rows to display in the list, one page at a time. A Page number selector below the list box shows the current page number and the total number of pages and allows the user to select the desired page. Changing the page number updates the display with the selected page.

#### **Note:**  
Only list boxes with titles and columns (list views) can have their output paged.

_(Paginated output for list boxes was added in PxPlus 2023.)_

**_Example:_**

This "Invoice" list box was defined with the **pagerows=**_20_ short code option added. The list box shows 20 of the most recent invoices on Page 1. When the page number is changed using the Page number selector, the list box shows the next page of invoices, and so on:

> You could simply load all the invoices and allow the user to scroll through the invoices. However, a large company might have thousands of invoices, which would noticeably slow down the time it would take to load the page and add additional overhead to the main server.
