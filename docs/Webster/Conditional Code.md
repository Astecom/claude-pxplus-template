# Webster+ HTML Merge/Bind Object  
  
**Using Conditional Code**|   
---|---  
  
If there are sections of your Web page that you want to include conditionally, you can use the **[[if _expression_]](Short%20Codes.htm#if)** short code. If the expression returns a non=zero value, processing of the page continues; otherwise, processing skips forward to the next associated **[[else]](Short%20Codes.htm#else)** or **[[/if]](Short%20Codes.htm#if)** short code.

**_Example:_**

> [if user_security > 5]  
>  [input Salary format=###,##0.00]  
>  [else]  
>  [show str(Salary:"###,##0.00")]  
>  [/if]

#### **Note:**  
Nesting of **[if]** short codes is supported.
