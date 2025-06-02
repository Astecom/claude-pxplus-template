# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Display Data in Webster+**|   
---|---  
  
When designing a Web application with **[Webster+](../Webster/Webster.md)**, data can be auto-loaded into several controls via the **[query=xxx](../Webster/Short%20Code%20Options.htm#query)** option assigned to various input **[Short Codes](../Webster/Short%20Codes.md)**, such as **[input](../Webster/Short%20Codes.htm#input)**, **[list](../Webster/Short%20Codes.htm#list)**, **[grid](../Webster/Short%20Codes.htm#grid)**, **[tree](../Webster/Short%20Codes.htm#tree)** and **[draglist or droplist](../Webster/Short%20Codes.htm#droplist)**.

A chart can also be loaded via an **[AutoChart Definition](../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)** with the **[chart=xxx](../Webster/Short%20Code%20Options.htm#chart)** and **[query=xxx](../Webster/Short%20Code%20Options.htm#query)** options.

**_Example:_**

> <!DOCTYPE html>  
>  <html>  
>  <head>  
>  <meta name="author" content="Someone" />  
>  </head>  
>  <body>  
>  [ttl]Sales Reps Overview[/ttl]<br>  
>  <p>[form program=*fm_webmaint] [show infobox_msg$ class="infobox show_till_change"]</p>  
>  [rem ScreenLibrary=v2024.en]  
>  [hide %fm_usefile$ value="Salesreps" secure]<br>  
>  [execute perform "salesov;FM_Init",err=*proceed]  
>  <p>[section whole]  
>  [html asis]<p style="text-align: center;"><span style="font-size: 18pt;"><strong>Sales Reps Overview</strong></span>[/html]<br>  
>  [execute %webster'class'id$="ZSalesrep"]  
>  [row "Sales Rep Code:"][**input REP$** class="" size=8 len=(%webster'class'length) event=get_name *redraw format=(%webster'class'format$) tip=(%webster'class'tip$) default=(%webster'class'default$) **query=(%webster'class'webquery$)** uppercase][/row]<br>  
>  [row " Name:"][input SALES_REP_NAME$ class="" size=30 len= locked][/row]<br>  
>  <hr>  
>  [subttl]Smart List Box Example[/subttl]  
> **[list LIST_BOX_1$ query="v2024.en;SALESREPINV"** size=80/8 class=""][/list]<br/>  
>  <hr>  
>  [subttl]Smart Chart Example[/subttl]  
> **[chart CHART_1$ query="v2024.en;Salesrepinv" chart="Sales by Client"** size=80/20 class=""]<br>  
>  <hr>  
>  [subttl]Button Example[/subttl]  
>  [button id=BUTTON_1 size=10/2 event=*close class=""][symbol backward] Exit[/button]<br>  
>  [/section]</p>  
>  <p>[section whole][/section]</p>  
>  [hide _fm_lock$ value=""]<br>  
>  [hide _fm_interface$ value="salesov"]<br>  
>  [hide _fm_file$ value="salesreps" secure]<br>  
>  [/form]  
>  </body>  
>  </html>

> Resulting in:

> 
