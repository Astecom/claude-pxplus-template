# Security Features  
  
**Restricting Access to Command Mode** |  **__**  
---|---  
  
Using two directives, **[SETESC](../../../directives/setesc.md)** and **[ERROR_HANDLER](../../../directives/error_handler.md)**, you can totally eliminate the possibility of the user accessing PxPlus command mode from your application.

Use of the **ERROR_HANDLER** directive to handle abnormal error conditions is described in **[Development Tools](../../Development%20Tools/Error%20Handling%20and%20Debugging/Error%20Processing.htm#errorhandler)**.

The **SETESC** directive allows the user to disable the **ESC** ape (or **Break**) key recognition within PxPlus. When **SETESC OFF** is executed, all user escape requests are ignored.

This mode of operation continues for the duration of the session or until **SETESC ON** is executed. An **ESC** ape/**Break** will be recognized in those programs that specifically have a **SETESC**  _nnnn_ directive, regardless of the **ON** /**OFF** status. This allows programs that have escape handling logic to continue to function properly.

To prevent the **ESC** ape/**Break** key from allowing the user to interrupt the execution of an application, you should include the following line in your START_UP initialization program:

> 0000 SETESC OFF

During the testing and development stages of an application, it may be desirable not to execute this directive or to make the execution of these directives optional based on the User ID (**UID** or **WHO**).
