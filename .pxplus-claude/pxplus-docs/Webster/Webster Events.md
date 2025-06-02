# Webster+

**Special Webster+ Events**|   
---|---  
  
The special internal events supported by Webster+ are listed below.

**Event** |  **Description**  
---|---  
***** **addto:**_xxx_****|  The ***addto** event can be applied to an **[[input]](Short%20Codes.htm#input)** short code to indicate that, when the input is changed by the user, the value of the input will be added as a new item to the drag and drop list identified by _xxx_. See **[Drag and Drop Lists](Webster%20Drag%20Drop%20Lists.md)**. _(The *add event was added in PxPlus 2022.)_  
***close** |  Closes the current page and either closes the tab/popup window if it was opened by Webster+ or else returns to the ***default** page.  
***** **drill:**_page,set$,point_ _$_****|  The ***drill** event can be applied to a **[[chart]](Short%20Codes.htm#chart)** short code for the purposes of providing a drill down on the set/point selected/clicked by the user. The three comma-separated parameters are: |  _page_ |  This field should contain the name of the page that will be invoked.  
---|---  
_set$_ |  This is the name of a variable that will be initialized with the name/number of the set selected.  
_point$_ |  This optional parameter contains the name of the variable to receive the name/number of the point selected.  
  
**_Example:_**

*drill:customer,client$,month$

This would invoke the page "customer", passing it the set name in the variable Client$ and the point name in the variable Month$.

_(The *drill event was added in PxPlus 2023.)_  
  
***eval:_javascript_** |  Locally executes the JavaScript specified on the browser. No event will be sent to the server.  
***link:_xxx_** |  Links to a new page or URL.  
***** **map** ,_xxx,xxx,xxx,xxx_ |  Can be added to a button to cause the system to display a popup window presenting a Google Map based on the address provided in the parameters _xxx_. You can provide up to five values to specify the street address, city, province/state and country. These can either be variables from the page or literals. **_Example:_** event=*map,"25 Centurian Blvd","Markham","Ontario" event=*map,street$,city$,state$,country$ _(The *map event was added in PxPlus 2022.)_  
***pop** |  Closes a popup window.  
***redraw** |  Forces a redraw of the screen using the current field contents.  
***reload** |  Forces a reload of the page after discarding the current data.  
***return:_xxx_** |  Can be used in a popup window to return the value of the field named by _xxx_. This value will be returned to the input field on the parent page that initiated the popup window and its change event (if any) will be triggered. This is generally used by the Query system. Optionally, you can specify two additional comma-separated values following the field name. They are: The field on the parent page to receive the value. The event to trigger in the parent page after the current page is closed.  
  
The following internal events are for **_grid use only_** :

**Event** |  **Description**  
---|---  
***RowDel** |  Clicking on this column will cause the grid row to be deleted. There is a two-second delay before the row is deleted during which time the user may click on the row to cancel the deletion. Once the deletion is complete, the row may not be restored.  
***RowDrag** |  Clicking down on the column allows the row to be dragged to a new position and released. If the row is dragged above or below the grid, the grid will be scrolled. If the row is released above the grid, the row will become the first row in the grid. If released below the grid, it will become the last row in the grid.  
  
You can also send an event to a program other than the one specified on the **[[form]](Short%20Codes.htm#form)** short code. Simply prefix the event with the name of the program you want to run, followed by an **@** (_at sign_).

**_Example:_**

In this example, the following event declaration would cause the event "Changed" in the program "MyProg" to be invoked:

> Event=MyProg@Changed
