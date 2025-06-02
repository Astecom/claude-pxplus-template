# OOP Syntax Elements

**OPEN OBJECT Directive** |  **__**  
---|---  
  
**OPEN OBJECT** (_chan_ [ _,__fileopt_ ]) **[ TABLE ]**  _string$_

Use the**OBJECT** keyword in an **OPEN** statement to open a file for exclusive use within an object. This ensures that only logic executing inside the object that executed the**OPEN** can change the status of the specified file. This denies any**READ** ,**WRITE** ,**REMOVE** ,**CLOSE** or other directive that the application attempts to make from outside the object.

External attempts to alter the state of the specified file returns Error #13: File access mode invalid.

The file will be closed automatically when the object is deleted or if there is an explicit **CLOSE** _(__chan_ _)_ from within the object.

## See Also

**[OPEN Directive](../../../directives/open.md)**
