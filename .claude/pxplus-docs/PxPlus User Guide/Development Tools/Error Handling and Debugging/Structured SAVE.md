# Error Handling and Debugging

**Structured SAVE** |  **__**  
---|---  
  
By setting the **['SS'](../../../parameters/ss.md)** system parameter, you can verify the logical integrity of decision and loop structures automatically each time you **[SAVE](../../../directives/save.md)** a modified program. This feature checks programs in logical forward sequence to see if a _start-of-structure_ block finishes in order with the correct matching _end-of-structure_ directive. This also validates that there are no **[CASE](../../../directives/case.md)** or **[DEFAULT Directives](../../../directives/default.md)** outside of a **[SWITCH](../../../directives/switch.md)** / **[END SWITCH](../../../directives/end_switch.md)** structure.

The following sets of directives are checked for structural integrity:

|  **[FOR..NEXT](../../../directives/for.md)**  
---|---  
|  **[WHILE..WEND](../../../directives/while.md)**  
|  **[REPEAT..UNTIL](../../../directives/repeat.md)**  
|  **[IF..THEN..ELSE](../../../directives/if.md)**  
|  **[SWITCH..CASE](../../../directives/switch.md)**  
|  **[SELECT..FROM..NEXT RECORD](../../../directives/select.md)**  
  
If a logical error occurs (e.g. **FOR** with no corresponding **NEXT)** , the process will result in a Warning #125: Improper Structure Detected that indicates the line where the fault was detected.

**_Example:_**

> 0010 BEGIN   
>  0020 FOR I = 1 to 40   
> 0030 .....   
> 0040 WEND

The resulting report would indicate the start of the structure block at line 20 and mark the detection point at line 40, since it should have encountered a **[NEXT](../../../directives/next.md)** as opposed to a **[WEND](../../../directives/wend.md)**.

#### **Note:**  
There will be no attempt to decipher the logic to determine if a **[GOTO](../../../directives/goto.md)** might make the logic work.

## See Also

**[Programming Constructs](../../Programming%20Constructs/Introduction.md)**
