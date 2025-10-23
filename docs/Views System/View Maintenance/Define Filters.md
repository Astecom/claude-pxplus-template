# View Maintenance 

**Define Filters** |  **__**  
---|---  
  
The **Define Filters** window is used to choose from a set of preset conditions and/or insert your own PxPlus expressions to define record selection criteria that is specific to each view element. By default, filter criteria is case insensitive. A _Case Sensitive_ check box option is provided to make the test case sensitive; however, there is no guarantee that this will be supported in external databases. Records that fail any filter will be skipped.

To invoke this window, click the _Filters_ toolbar button on the **[Define a View](Define%20a%20View.md)** window.

> ## Preset Condition

Select from the logic provided and include values that best define the filter required. An **AND** operator is assumed between each element/condition used in the definition.

The _Condition_ drop-down list displays the following preset conditions:

> _None  
>  Equal to <Value1>  
>  Not equal to <Value1>  
>  Less than <Value1>  
>  Greater than <Value1>  
>  Less than or equal to <Value1>  
>  Greater than or equal to <Value1>  
>  Between <Value1> and <Value2> inclusive  
>  Between <Value1> and <Value2> exclusive  
>  Any of <Value1>, <Value2>, <Value3>,   
>  None of <Value1>, <Value2>, <Value3>,   
>  Contains <Value1>  
>  Starts with <Value1>_

At run time, when the method to retrieve the first record is invoked, the filters are analyzed to determine if a minimum and maximum value can be applied to the record key. This sets a start and end value to optimize the data retrieval process.

## Free-Form Filter

A PxPlus expression can also be used to define selection criteria for filtering a data set for the view. A _Free-Form Filter Expression_ must evaluate to a zero/non-zero result, whereby a zero value would result in a record being excluded and a non-zero result would cause a record to be included in the data set.

Only one free-form filter is allowed per view (maximum 500 characters). The filter condition can be a composite condition using multiple instances of **AND** and **OR** logical connectors.

Free-form filters apply to the entire view (as opposed to individual data sources that comprise the view). This means that the filter expression may consist of references to any of the data elements included in the view, regardless of their data source, as well as to any calculated items selected for the view. See **[Define Calculated Items](Define%20Calculated%20Items.md)**. This also means that the filter cannot be used to optimize the reading of data by setting a range of records to be read.

#### **Note:**  
External filters may also be imposed at run time. See the **[View Object Restrict( )](../Accessing%20View%20Data/Overview.md)** method.

_(The ability to create calculated items for a view was added in PxPlus 2021.)_
