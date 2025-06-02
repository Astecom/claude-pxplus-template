# Directives 

**DEF ....** |   
---|---  
  
The **DEF** directive has a variety of formats that allow for the definition of objects, functions, and other system values.

##  Formats

Use the links below to access additional information for a **_specific_** format:

**Format** |  **Description**  
---|---  
[**DEF ARG(**_nn_**) =**_string$_](def_arg.md) |  Use the **DEF ARG** to change the value associated with an ARG for the duration of the session.  
[**DEF CLASS** _class_ _$..._](def_class.md) |  Use the **DEF CLASS** directive in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to declare the start of an object definition. It defines the name of the object, and it can be used to override object creation and deletion logic.  
[**DEF [ CTL | ERR | LFO | LFA ] =**_numval_](def_ctl~err~lfo~lfa.htm) |  Use these **DEF** directives to set the values for various system **_numeric_** variables. _(The DEF CTL/ERR/LFO/LFA directives were added in PxPlus v7.00.)_  
[**DEF [ LPG | HWD | NID ] =**_strval_](def_ctl~err~lfo~lfa.htm) |  Use these **DEF** directives to set the values for various system **_string_** variables. _(The DEF LPG/HWD directives were added in PxPlus v8.11, build 9182.)  
(The DEF NID directive was added in PxPlus v8.30, build 9190.)_  
[**DEF [ CVS | DTE | LCS | UCS ]**(_new_table_ _$)_](def_cvs~dte~lcs~ucs.htm) |  Use these **DEF** directives to define new system tables for _Accent Conversion, Date, Lowercase_ and _Uppercase_.  
**[DEF ENV (_name$_) = _value$_](def_env.md)** |  Use the **DEF ENV** directive to add, change or delete environment variables from the current process and any subsequent spawned process. _(The DEF ENV directive was added in PxPlus 2024.)_  
[**DEF FN** _var_ _$_(_arglist_) ..](def_fn.md). |  Use the **DEF FN** directive to define single- or multi-line functions.  
[**DEF GID =**_groupID_ _  
_**DEF UID =**_userID_](def_gid~uid.md) |  Use the **DEF GID=** and **DEF UID =** directives to override the effective UNIX/Linux user or group ID of a session, if OS security allows it.  
[**DEF MSG** _(msg_text$)_](def_msg.md) |  Use the **DEF MSG** directive allows you to change system messages on the fly.  
**[DEF NAR =_value_](def_nar.md)** |  Use the **DEF NAR** directive to reduce the number of arguments that a program sees. _(The DEF NAR directive was added in PxPlus 2017.)_  
[**DEF OBJECT**...](def_object.md) |  Use the **DEF OBJECT** directive is used to create a new instance of a specified COM object.
