# Google Maps Interface  
  
**Map Events, Methods and Properties**|   
---|---  
  
## Map Events

Below is a list of the events that are supported by the PxPlus Google Maps Extended Control.

**Event** |  **Description**  
---|---  
**click** |  This event is fired when the user clicks on the map. The location of the last click can be found in the **[clickLatitude](Map%20Events_%20Methods_Properties.htm#clicklat)** and **[clickLongitude](Map%20Events_%20Methods_Properties.htm#clicklong)** properties.  
**markerclick** |  This event is fired when the user clicks on a marker. The marker identifier can be found in the **[clickMarker](Map%20Events_%20Methods_Properties.htm#clickmarker)** property  
**rightclick** |  This event is fired when the user right clicks on the map. The location of the last right click can be found in the **[clickLatitude](Map%20Events_%20Methods_Properties.htm#clicklat)** and **[clickLongitude](Map%20Events_%20Methods_Properties.htm#clicklong)** properties.  
  
## Map Methods

Below is a list of the map-related methods supported by the PxPlus Google Maps Extended Control.

**Method** |  **Description**  
---|---  
**fitBounds(**_S,W,N,E_**)** |  Sets the map to fit the given boundaries. **_Where:  
  
_** **S** \- Southernmost latitude in degrees  
**W** \- Westernmost longitude in degrees  
**N** \- Northernmost latitude in degrees  
**E** \- Easternmost longitude in degrees  
**getBounds $( )** |  Returns a string containing the southernmost latitude, westernmost longitude, northernmost latitude and easternmost longitude in degrees, separated by commas.  
**getCenter $( )** |  Returns the latitude and longitude in degrees of the center point of the map.  
**getLatitude( )** |  Returns the latitude in degrees of the center point of the map.  
**getLongitude( )** |  Returns the longitude in degrees of the center point of the map.  
**getMapTypeid $( )** |  Returns the type of map. Types are _roadmap, satellite, hybrid_ and _terrain_.  
**getZoom( )** |  Returns the current zoom setting.  
**initialize(**_name$, properties$, methods$, events$, eventCount_**)** |  Initializes properties, methods and events used by NOMADS and iNomads.  
**panBy(**_cols, lines_**)** |  Changes the center of the map by the given number of columns and rows. Use positive values to pan to the right or down, and negative values to pan left or up.  
**panTo(**_latitude, longitude_**)** |  Changes the center of the map to the given latitude and longitude.  
**setCenter(**_latitude, longitude_**)** |  Changes the center of the map to the given latitude and longitude.  
**setMapTypeid(**_type$_**)** |  Sets the map type. Options are _roadmap, satellite, hybrid_ and _terrain_.  
**setOptions(**_options$_**)** |  Sets map attributes specified in _options$_ , a list of SEP-separated values pairs, consisting of attribute names and values in the format  _attribute=value_.  
  
Boolean values can be specified using **0** and **-1** , or **true** and **false**. Null string values can be specified by leaving the value blank.  
  
**_Example:  
  
_** "mapTypeID=terrain"+SEP+"draggable=false"+SEP+"zoom=4"+SEP+"backgroundColor="+SEP  
**setZoom(**_n_**)** |  Sets the zoom level of the map.  
  
## Map Properties

Below is a list of the map-related properties supported by the PxPlus Google Maps Extended Control. The properties are set when the map is created and are Read Only (except for the **[value$](Map%20Events_%20Methods_Properties.htm#value)** property). Their values can be changed subsequently by using the corresponding **Set** method.

For a list of properties relating to Directions Services, see [**Directions-Related Properties**](Directions-Related%20Properties%20and%20Methods.htm#properties).

**Property** |  **Description**  
---|---  
**APIkey** |  **_(Required as of July 2018)_** API key to access Google map resources. Without an API key, a darkened map with the text "For development purposes only" will display. For information on obtaining an API key, visit **<https://developers.google.com/maps/documentation/javascript/get-api-key>**. The API key for each site will be different; therefore, an expression would most likely be used to supply the value for the **APIkey$** property. However, you can leave the **APIkey$** property blank and simply load the **%GoogleAPIkey$** variable with the API key value prior to displaying any maps (such as in the START_UP program), and the PxPlus map object will retrieve the key value from there and set this property automatically without having to set it for each individual map.

#### **Note:**  
An API key is not required if a client ID is used. See **[Client](Map%20Events_%20Methods_Properties.htm#client)** property.

_(API Key support was added in PxPlus 2018 Update 1.)_  
**backgroundColor $** |  Color used for the background of the map. This color is visible when tiles have not yet been loaded and the user pans. Format is Hex #HHHHHH (e.g. #FF00FF) or a standard HTML color name (e.g. yellow).  
**clickLatitude** |  Latitude in degrees at the location where a Click or RightClick event occurs on a map.  
**clickLongitude** |  Longitude in degrees at the location where a Click or RightClick event occurs on a map.  
**clickMarker** |  Numeric identifier of the marker involved in a MarkerClick event.  
**client** |  Client ID for Google Maps API Premier customers. Visit the Google Web site for information about becoming a Premier customer.  
**col** |  Horizontal screen position of map in columns.  
**cols** |  Width of map in column units.  
**containerObject** |  **_(NOMADS Only)_** Object ID of browser object in which the map is displayed.  
**ctlName $** |  Control type. Value is _Extended_.  
**disableDefaultUI** |  Enables/disables all default user interface features, such as double click zoom, drag ability, scroll wheel, etc. UI features may be overridden individually. Boolean. (**_Default:_** false or enabled)  
**draggable** |  Enables/disables the ability to drag the map. Boolean. (**_Default:_** true or enabled)  
**geocodeLatitude** |  Longitude in degrees at the location of the last invoked. See **[Geocoder Method](Geocoder%20Method.md)**.  
**geocodeLongitude** |  Longitude in degrees at the location of the last invoked. See **[Geocoder Method](Geocoder%20Method.md)**.  
**geocodeStatus $** |  Status of the last invoked. See **[Geocoder Method](Geocoder%20Method.md)**.  
**HTTPS** |  Boolean flag indicating that a secure URL is to be used to access the Google Maps JavaScript API. This is only available to Google Maps API Premier customers whose client ID has been set in the **client** property and who have registered the HTTPS URL of their Web site with Google for use with their client ID.  
**infoWindowCount** |  Number of info windows currently displayed.  
**keyboardShortcuts** |  Enables/disables keyboard control of the map. Boolean. (**_Default:_** true or enabled)  
**latitude** |  Latitude in degrees of the map center. Range is clamped between -90 degrees and 90 degrees.  
**longitude** |  Longitude in degrees of the map center. Longitude is wrapped between -180 degrees and 180 degrees.  
**mapTypeControl** |  Enabled/disabled state of the map type control. Boolean. (**_Default:_** enabled)  
**mapTypeControlStyle $** |  Display option for the map type control. Options are _default, dropdown_menu_ and _horizontal_bar_.  
**mapTypeid $** |  **_(Required)_** Map type. Options are _hybrid, roadmap, satellite_ and _terrain_.  
**markerCount** |  Number of markers currently displayed.  
**name$** |  Control name.  
**navigationControl** |  Enabled/disabled state of the navigation control. Boolean. (**_Default:_** enabled)  
**navigationControlStyle $** |  Display option for the navigation control. Options are _default, android, small_ and _zoom_pan_. The default setting varies depending on map size and other factors.  
**noClear** |  If true, the contents of the map are not cleared.  
**pvxError $** |  Error value.  
**pvxEvents $** |  List of available events.  
**region$** |  **_(Optional)_** Unicode region sub-tag identifier. Can be used to override the standard location bias.  
**scaleControl** |  Enabled/disabled state of the scale control.  
**scaleControlStyle $** |  Display option for the scale control. Option is _default_.  
**scrollWheel** |  Enables/disables scroll wheel zooming on the map. Boolean. (**_Default:_** true or enabled)  
**sensor** |  **_(Required)_** Indicates whether the application is using a sensor (such as a GPS locator) to determine the location. Boolean. (**_Default:_** false)  
**value$** |  String of value pairs that contain all the data required to define the current map. Format is a list of assignment expressions separated by $00$. The **value$** property is a Read/Write property. When set, the map is redisplayed using the new value settings. **_Examples:_** "sensor=0"+$00$+  
"region$="""""+$00$+  
"latitude=43.77"+$00$+  
"longitude=-79.4525"+$00$+  
"mapTypeID$=""hybrid""+$00$+  
"zoom=14"+$00$+ **_Examples:_**  _(not showing the $00$ separators)_ sensor=0  
region$=""  
latitude=43.77  
longitude=-79.4525  
mapTypeID$="hybrid"  
zoom=14  
backgroundColor$=""  
disableDefaultUI=0  
disableDoubleClickZoom=0  
draggable=-1  
keyboardShortcuts=-1  
mapTypeControl=-1  
mapTypeControlStyle$="DEFAULT"  
navigationControl=-1  
navigationControlStyle$="DEFAULT"  
noClear=0  
scaleControl=-1  
scaleControlStyle$="DEFAULT"  
scrollwheel=-1  
marker1'latitude=43.77  
marker1'longitude=-79.46  
marker1'clickable=-1  
marker1'draggable=0  
marker1'flat=0  
marker1'icon$=""  
marker1'title$="title 1"  
marker1'visible=-1  
marker1'zIndex=1  
**zoom** |  **_(Required)_** Initial zoom level for the map.
