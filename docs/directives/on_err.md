# Directives 

**ON ERR...** |  **_Structured Error Handling_**  
---|---  
  
##  Format

**... ON ERR [ { ]**_directives_**[**}**]**

**_Where_** _:_

_directives_ |  Directives to execute in case an error occurs during the execution of the directives preceding the **ON ERR**. The curly brackets are only needed if you want additional directives following the **ON ERR** to be executed.  
---|---  
  
##  Description

The directives **GOSUB** , **WHILE** , **FOR** , **REPEAT** and **SELECT** support an enhanced **ON ERR** option that allows you to specify what logic is to be executed should an error occur within their respective logic block.

**_Example:_**

> gosub LOAD_CLIENT on err print "Unable to load client"

Including an **ON ERR** clause following the label/statement number in a **GOSUB** tells the system that should an un-trapped error occur when processing the **GOSUB** logic, the system is to execute the remainder of the line following **ON ERR**.

By default, the complete line following the **ON ERR** will be processed; however, you may also include curly brackets to define the logic to be executed.

**_Example:_**

> while 1 on err { break};  
>  read (1)R$;  
>  print R$;  
>  wend

> In this case, if an error occurs during the **WHILE** loop (in this example, an End of File), the system will transfer control to the **BREAK** directive.

In the above example, the system actually transfers control to the **ON ERR** clause but does not actually exit the **WHILE** loop. Should the **ON ERR** logic not exit the loop or cause the loop to terminate, the loop will continue to execute.

**_Example:_**

> N=4  
>  while N>-3 on err print "Cannot process ",N  
>  \--N  
>  X=10/N  
>  print "10 / ",N,"=",X  
>  wend

> This code will generate a divide error when N equals 0 (_zero_), at which point the **ON ERR** logic will be executed.

The **ON ERR** clause is automatically cascaded to lower levels; thus, an un-trapped error at a lower level will cause the system to exit the lower levels and return control to the upper level to handle the error.

**_Example:_**

If the prior example is modified:

> N=4  
>  while N>-3 on err print "Cannot process ",N  
>  \--N  
>  gosub CHECK_N  
>  wend

CHECK_N:

> X=10/N  
>  print "10 / ",N,"=",X  
>  return

The actual divide error will occur in the lower level **GOSUB** ; however, the existence of the **ON ERR** clause will result in the system automatically exiting the **GOSUB** and returning control to the outer **WHILE** loop.

For all but the **GOSUB** , the **ON ERR** logic will be executed while functionally still within the loop structure. The system just executes the **ON ERR** logic and continues processing the loop unless the **ON ERR** logic itself caused the loop to terminate (such as by issuing a **BREAK**).

In the case of the **GOSUB** , the subroutine exits first and then the **ON ERR** logic is executed.

#### **Note:**  
Special processing is allotted to **ON ERR ESCAPE**. If the first directive in the **ON ERR** clause is **ESCAPE** , the system will simply issue an internal **ESCAPE** when an un-trapped error occurs.

_(The structured Error Handling functionality was added in PxPlus v8.00.)_
