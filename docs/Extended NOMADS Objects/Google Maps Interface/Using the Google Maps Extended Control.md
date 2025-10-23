# Google Maps Interface  
  
**Using the Google Maps Extended Control**|   
---|---  
  
## Example 1: Displaying a Map, Markers, Info Windows and Geocoding

To add a Google Map to your application panel, follow these steps to create an **[External Control](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)** using the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**:

1. |  Select the _External Control_ from the **Controls Toolbar** and outline the location of the map on the panel.  
---|---  
2. |  In the **External Control Properties** window, enter an _Object Name_ for the control (e.g. MAP).  
3. |  Click the _Ext. Control_ query button and select _PVX Plus Controls_ from the popup menu.  
4. |  From the list that displays, select _Google Maps Control_.  
5. |  In the **External Control Properties** window, click the **Properties** tab to set the properties.  
|   
|  Four properties are **_required_** when defining a map: |  __ |  _latitude_ |  Latitude in degrees of the center point of the map. Range is -90 to 90 degrees.  
---|---|---  
__ |  _longitude_ |  Longitude in degrees of the center point of the map. Range wraps from -180 to 180 degrees.  
__ |  _mapTypeId_ |  Type of map to be displayed. Options are _hybrid, roadmap, satellite_ and _terrain_.  
__ |  _zoom_ |  Numeric zoom factor for the map (zero-based).  
Other properties are optional; however, if an API Key has been obtained, it can be set either in the **[APIkey](Map%20Events_%20Methods_Properties.htm#apikey)** property or by setting the **%GoogleAPIkey$** variable.  
6. |  Save the definition. This information is sufficient to display the map on your panel, complete with map type and zoom controls, as well as full standard Google Map UI capability, including full mouse and keyboard control.  
Now add some controls and logic to see some of the functionality available in Google Maps, such as adding/removing markers and info windows, along with geocoding that translates human-readable addresses into latitude/longitude locations and vice versa.  
7. |  Add three multi-lines: _Address, Latitude_ and _Longitude_ , as well as fonted text prompts to accompany them. Set the _Numeric_ attribute for the _Latitude_ and _Longitude_ multi-lines.  
8. |  You will need more than standard precision to handle Latitude and Longitude values. Set _Precision_ to 6 on the **Display** tab of the **Header Panel Definition** window.  
9. |  Add a _Geocode_Address_ button, a _Geocode_Location_ button and a _Close_ button to exit the panel.  
  
Set the OnChange logic on the **Logic** tab for the _Close_ button to _End_.  
  
Set the OnChange logic on the **Logic** tab for the _Geocode_Address_ button to _Execute:_  
  
location$=map.ctl'geocode$(address$);  
latitude=map.ctl'geocodeLatitude;  
longitude=map.ctl'geocodeLongitude;  
map.ctl'addMarker(latitude,longitude,location$)  
|  When the button is pushed, the address is passed to the geocode method, which returns the latitude and longitude as a string with a comma separator. The geocoder also loads the **[geocodeLatitude](Map%20Events_%20Methods_Properties.htm#geocodelat)** and **[geocodeLongitude](Map%20Events_%20Methods_Properties.htm#geocodelong)** properties, which are used in this case to populate the _Latitude_ and _Longitude_ multi-lines. A marker is then created using the given latitude and longitude, and the location is used as the marker title, which is displayed as the marker tip.  
|  Set the OnChange logic on the **Logic** tab for the _Geocode_Location_ button to _Execute:_  
|  address$=map.ctl'geocode$(latitude,longitude,0);  
map.ctl'showInfoWindow(latitude,longitude,address$)  
|  When the button is pushed, the latitude, longitude and level are passed to the geocode method. The level indicates how specific or general the returned address is to be, with 0 being the most specific address. The address is then displayed in an info window placed at the given latitude and longitude.  
10. |  Finally, click the **Properties** tab in the **External Control Properties** window. Set the _markerclick_ _Event_ logic to _Execute:_  
  
markerid=map.ctl'clickmarker;  
map.ctl'removeMarker(markerid)  
|  When a marker is clicked, it is removed from the map.  
  
This example shows just a few of the properties, methods and events available to the Google Maps Extended Control.

For additional information, visit the Google Maps Web site: **<http://code.google.com/apis/maps/documentation/v3/>**.

## Example 2: Requesting Directions

1. |  Using the methodology described in the first example, create a new application panel in the NOMADS Panel Designer and add a Google Map extended control with the name DIRECTIONS.  
---|---  
2. |  In addition to the four properties _(latitude, longitude, mapTypeID_ and _zoom)_ required to display a map, two other properties must be set to request directions, _showDirectionsPane_ and _directionsPanePercent_ : |  _showDirectionsPane_ |  Used to enable the directions service and indicate the placement of the directions. Values are: |  0 |  Directions service not enabled. **_(Default)_**  
---|---  
1 |  Directions service enabled. Directions are displayed to the _left_ of the map.  
2 |  Directions service enabled. Directions are displayed to the _right_ of the map.  
_directionsPanePercent_ |  Percent (0 - 100) of the designated horizontal map area to be used to display directions. If set to 0, then a default value of 30 will be used.  
|  These properties must be set in the map definition and cannot be changed dynamically. In this example, the following settings are used: _latitude_ = 44, _longitude_ = -79, _zoom_ = 8, and the default setting for _mapTypeid_ _(__hybrid)_. The _showDirectionsPane_ property has been set to 1 to display directions to the left of the map, and _directionsPanePercent_ has been set to 33, setting the directions display to occupy 33% of the width allotted for the map.  
|  There are many directions-related properties.  
| 

> The following properties are used as parameters for _directions requests:  
>   
> _ directionsAvoidHighways  
>  directionsAvoidTolls  
>  directionsOptimizeWaypoints  
>  directionsProvideRouteAlternatives  
>  directionsRegion$  
>  directionsTravelMode$  
>  directionsUnitSystem$  
  
| 

> These properties are _display options:  
>   
> _ directionsDraggable  
>  directionsHideRouteList  
>  directionsPreserveViewport  
>  directionsRouteColor$  
>  directionsRouteColour$  
>  directionsRoutePixels  
>  directionsRouteOpacity  
>  directionsSuppressBicyclingLayer  
>  directionsSuppressInfoWindows  
>  directionsSuppressMarkers  
>  directionsSuppressPolylines  
  
|  When set, the above properties will affect any subsequent directions requests; they have no effect on currently displayed directions. These properties may be set in the map definition or any time prior to making a directions request.  
  
See **[Directions-Related Properties](Directions-Related%20Properties%20and%20Methods.htm#properties)**.  
Now add some controls and logic to generate directions.  
3. |  Add three multi-lines: _Origin, Stopover_ and _Destination_ , as well as fonted text prompts to accompany them. Two locations, an origin and destination, are required to request directions. These may be in the form of an address or as latitude/longitude pairs. Addresses are used in this example. Stopover locations, or waypoints, are optional. This example has one stopover; however, up to 8 are allowed (23 waypoints for Google Maps API Premier customers).  
4. |  Add a _Get_Directions_ button and a _Close_ button to exit the panel.  
  
Set the OnChange logic for the _Close_ button to _End_.  
  
Set the OnChange logic for the _Get_Directions_ button to _Execute:_ directions.ctl'clearDirections();  
directions.ctl'clearWaypoints();  
if stopover$<>"" \  
then directions.ctl'addWaypoint(1,stopover$) \  
end_if ;  
status$=directions.ctl'getDirections$(origin$,destination$) When the button is pushed, any directions currently on the map are cleared, as are any waypoints that have been defined. This is necessary due to the design of the sample panel, which allows multiple directions requests for different origins, destinations and waypoints.  
5. |  Then, the optional waypoint is added. Waypoints are additional locations through which the calculated route must pass. In this case, a single waypoint is added with 1 representing the sequence number. Multiple waypoints are possible, where, by default, the route follows the order of the waypoint sequence numbers. In addition, by default, waypoints are stopover points, which divide the route into legs.  
  
You can specify that waypoints are not stopovers _(addWaypoint(sequence, address, stopoverFlag)_ where _stopoverFlag_ _=0)_ , in which case they are marked on the route with a _dot_ and do not divide the route into legs. If all waypoints are stopovers, then the **[directionsOptimizeWaypoints](Directions-Related%20Properties%20and%20Methods.htm#optimize)** property can be turned **_On_** , in which case the sequence of the waypoints is ignored and an optimal route determined.  
6. |  Finally, the **[getDirections$()](Directions-Related%20Properties%20and%20Methods.htm#getdirections)** method is passed the _Origin_ and _Destination._ Based upon these values and previously set values, such as waypoints and the various directions-related properties, a route is drawn on the map and directions displayed in the _directions_ pane. As well, the method returns a status to indicate whether the method was successful ("OK") or not.  
|   
  
## See Also

**[Directions-Related Methods](Directions-Related%20Properties%20and%20Methods.htm#methods)**
