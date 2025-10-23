# Object-Oriented Interface  
  
**rptcalcfield** |  **__**  
---|---  
  
The **rptcalcfield** object is a data member of the **[pvxreport](../pvxreport/Overview.md)** object interface that is delegated to store and manipulate a calculated field definition. It can be used to retrieve the object handle for an **rptcalcfield** object, which allows access to all the object's methods and properties.

## rptcalcfield Properties

The following table lists the properties of the **rptcalcfield** object:

**Property** |  **Description**  
---|---  
**DataSource$** |  Reference for the data source that is associated with this calculated field. Format is  _Source, SourceType._  
  
**_Examples:_**  
  
LogicalFileName,L   
Path,P  
ViewName,V   
SourceClass;SourceName,O  
  
This property is only used in report libraries. Read only. Set using **[SetDataSource( )](Overview.htm#setdatasource)** method.  
**Description$** |  **_(Optional)_** Short description for the field.  
**Expression$** |  Expression to be evaluated and loaded into the variable specified in **Name$**. Read only property. Loaded using the **[SetExpression( )](Overview.htm#setexpression)** method.  
**Length** |  Maximum length of the field. Numeric fields may contain a scaling factor (e.g. 10.2 where 10 is the total length and 2 is the number of digits following the decimal point).  
**Library$** |  Name of the library file containing the definition for this calculated field. Can be a simple file name or complete path. Read only. Set using **[SetLibrary( )](Overview.htm#setlibrary)** method.  
**Name$** |  Variable name for the calculated field.  
**Type$** |  Data type: **N** (numeric) or **S** (string). Set when expression is loaded using **[SetExpression( )](Overview.htm#setexpression)** or **[SetTranslationValue( )](Overview.htm#settranslationvalue)** methods.  
  
## rptcalcfield Methods

The following table lists the methods of the **rptcalcfield** object:

**Method** |  **Description**  
---|---  
**AddTranslationValue([**_idx_**])** |  Create a new **rptfilterctl** object to hold the condition to be associated with the translation value. One object is created for each translation value. Also allocates storage for the translation value and an expression indicator.  
  
_idx_ \- If omitted or set to zero, the **rptfilterctl** object is created using the next available sequence number. If set, the object is inserted at the sequence number indicated by _idx_.  
  
The sequence number can be used as the index number to identify the object when using other methods relating to translation fields, such as **GetTranslationCondition( )** , **GetTranslationValue$( )** , etc.  
  
**[TranslationValueCount](Overview.htm#translationvaluecount)** is incremented. Returns the object handle if successful, **0** if not.  
**ClearTranslationValues( )** |  Removes all translation values, expression indicators, and **rptfilterctl** objects associated with the translation values.  
**GetTranslationCondition(**_idx_**)** |  Returns the object ID for the specified **rptfilterctl** object.  
  
_idx_ \- Sequence number of the object.  
  
Returns 0 if the sequence number is invalid.  
**GetTranslationValue$(**_idx_**)** |  Returns the specified translation value. May be a fixed value or an expression. Refer to the **IsTranslationValueExpression( )** method below to determine the content type.  
  
_idx_ \- Sequence number of the translation value. Returns null if the sequence number is invalid.  
**IsTranslationValueExpression(**_idx_**)** |  Returns a Boolean value (0 or 1) indicating whether the specified translation value contains an expression (1) or a fixed value (0).  
  
_idx_ \- Sequence number of the translation value.  
**MoveTranslationValue(**_Fromidx_**,**_Toidx_**)** |  Changes the sequence of a translation value (i.e. value, expression indicator and **rptfilterctl** object sequence). The sequence of other translation values is appropriately adjusted.  
  
_Fromidx_ \- Sequence number of translation value to be moved.  
  
_Toidx_ \- Sequence number to move translation value to.  
**RemoveTranslationValue(**_idx_**)** |  Removes the **rptfilterctl** object and clears the translation value and expression indicator for the specified translation value.  
  
_idx_ \- Sequence number of the translation value to be removed. Translation values with higher sequence numbers are adjusted down.  
  
**[TranslationValueCount](Overview.htm#translationvaluecount)** is decremented.  
**SetDatasource(**_Source$,Type_ _$_**)  
  
SetDatasource( )** |  Format and set the value in the **[DataSource$](Overview.htm#datasource)** property.  
  
_Source$_ \- Name of the data source. This can be a logical table name, a file path, a view or a class name;source name. (Custom source objects consist of both the class name and source name separated by a semi-colon.)   
  
_Type$_ \- Single letter code denoting type of data source:  
  
**L** \- Logical table  
**P** \- File path  
**V** \- View   
**O** \- Custom source class  
  
Returns **1** if successful, **0** if not. If not arguments, resets the **[DataSource$](Overview.htm#datasource)** property to null.  
**SetExpression(**_Expr$_**)** |  Set the expression to be evaluated and loaded into the variable specified in the **Name$** property.  
  
Returns **1** if successful and **0** if the expression is invalid.  
**SetLibrary(**_LibraryFile_ _$_**)** |  Sets the name of the library file containing the definition for this calculated field specified in _LibraryFile_ _$_. Can be a simple file name or complete path. Returns **1** if successful, **0** if not.  
**SetTranslationValue(**_idx_**,**_Value_ _$_**[,**_isExpression_ _$_**[,**_Type$_**]]** |  Sets the translation value at the specified sequence number.   
  
 _idx_ \- Sequence number of the translation value to be set.  
_  
Value$_ \- Translation value. May be fixed or an expression.  
  
_isExpression_ _$_ \- "X" denotes that _value$_ contains an expression. "F" or null ("") denotes that _value$_ contains a literal or fixed value. **_(Optional)_** Default is a fixed value.  
  
_Type$_ \- "S" (string) or "N" (numeric). If the **Type$** property of the **rptcalcfield** class has already been set, then this value is ignored. If it has not been set, then this value is used to set it.  
**TranslationValueCount( )** |  Returns the number of translation values associated with a translation field.
