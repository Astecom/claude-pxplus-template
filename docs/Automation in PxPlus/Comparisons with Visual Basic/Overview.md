# Automation in PxPlus - Appendix  
  
**Comparisons with Visual Basic** |  **__**  
---|---  
  
Due to its popularity and widespread use, many third-party vendors tailor their code examples for Visual Basic. While translating these examples to PxPlus is relatively straightforward, some nuances in the Visual Basic language can cause problems.

Below is a list of some of the more common translation errors and how they should be handled.

## Default Member Access

What is a default member? A default member is a property or method of an object that is invoked when a client does not specify a property or method name.

**_Example:_**

Consider the following Visual Basic example:

> Dim rs As ADODB.Recordset   
> rs("CompanyName") = "SomeCompany"   
> rs!CompanyName = "SomeCompany"

The code above is actually a shortcut for:

> Dim rs As ADODB.Recordset   
> rs.Fields("CompanyName").Value = "SomeCompany"   
> rs.Fields!CompanyName.Value = "SomeCompany"

The problem with this coding style is that the code is no longer self-documenting. A programmer must have knowledge of the ADODB.Recordset object to determine what the code is actually doing.

Determining when a shortcut has been used is a little more difficult. If the code returns an object and the assignment is performed using a string, number, or object (without a **Set** statement), then a shortcut is most likely in use. To access the default member in PxPlus, an **_** (_underscore_) must be used. See the corresponding PxPlus code:

> 10 DEF OBJECT RS, "ADODB.Recordset"   
>  20 RS'_("CompanyName")'Value$ = "SomeCompany"   
>  30 RS'_("CompanyName")'_$ = "SomeCompany"

#### **Note:**  
While this coding style is supported in PxPlus, its general use is discouraged.

## For Each Statement

The **For Each** statement is used in Visual Basic when an object exposes a collection interface (using IEnumVariant).

**_Example:_**

Excel.Application exposes a collection called WorkBooks:

> Dim ExcelApp As Object  
>  Set ExcelApp = CreateObject("Excel.Application")  
>  For Each WorkBook in ExcelApp.WorkBooks  
>  '...   
>  Next

Unfortunately, PxPlus is unable to use the enumerator interface and must use the Count and Item( ) property to gain access to the items in the collection:

> 10 DEF OBJECT ExcelApp, "Excel.Application"  
>  20 FOR I=1 TO ExcelApp'WorkBooks'Count  
>  30 WORKBOOK = ExcelApp'WorkBooks(I)  
>  40 !   
>  50 NEXT

#### **Note:**  
All collections will expose an Item( ) and Count property at the very minimum. The difficult part about converting the **For Each** code is in determining if the collection is 1-based or (zero) 0-based. The MSDN indicates that older collections in Visual Basic tend to be 0-based, while newer collections are 1-based. If the documentation does not indicate which index base is used, then a trial and error technique must be applied.

## Named Arguments

Some objects allow method arguments to be passed in using name positioning rather than index positioning. For example, the Open method of the Microsoft Excel Workbooks object (for opening a workbook) takes 13 arguments. All arguments are optional in the Open method and could be written in Visual Basic as:

> Workbooks.Open "book2.xls", , , , , , , , , , , , True

Given that Microsoft Excel will accept named arguments, the preceding code could also have been written as:

> Workbooks.Open FileName:="book2.xls", AddToMru:=True

The use of a named argument is very easy to spot when converting Visual Basic code, given the **:=** syntax. The difficult part is converting the above sample to PxPlus, which must pass arguments by index. This is where documentation or a good type of library viewer is necessary.

Once the index location of FileName and AddTOMru are found, coding the statement in PxPlus is simple:

> Workbooks'Open("book2.xls", *, *, *, *, *, *, *, *, *, *, *, True)

This is very close (syntactically) to the original Visual Basic example, except for the use of _asterisks_ as optional arguments.

## Calling Conventions

The information below explains how to determine when you should, or should not, expect a result from a method call.

If a Visual Basic statement passes parameters but does not contain open and close parentheses, then the statement is performing a call to a procedure, and no result is returned.

**_Example:_**

Using the previous Excel example:

> Workbooks.Open "book2.xls", , , , , , , , , , , , True   
>  \-   
>  10 Z = Workbooks'Open("book2.xls", *, *, *, *, *, *, *, *, *, *, *, True)

In this example, no data is returned from the Visual Basic call; but in PxPlus, a zero would be returned to Z. The zero in PxPlus for this situation represents a null return value.

Using another example:

> Dim I as Integer   
>  I = RecordSet.Fields(0)   
>  \-   
>  10 I = RecordSet'Fields(0)'Value

The data returned for the field value might be zero; however, it does have meaning in this context (it is the data value for the Fields). Finally, if the statement you are converting starts with a Set, then your code should be written to expect an object return value.

> Dim Fld as Object   
>  Set Fld = RecordSet.Fields(0)   
>  \-   
>  10 Fld = RecordSet'Fields(0)   
>  20 DEF OBJECT Fld
