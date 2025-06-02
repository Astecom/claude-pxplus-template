# Google Maps Interface  
  
**Directions-Related Properties and Methods**|   
---|---  
  
##  Directions-Related Properties

Below is a list of the directions-related properties supported by the PxPlus Google Maps Extended Control.

All properties are Read Only (except for **[showDirectionsPane](Directions-Related%20Properties%20and%20Methods.htm#directionspane)** and **[directionsPanePercent](Directions-Related%20Properties%20and%20Methods.htm#panepercent)**) and can be set using their corresponding set methods. See **[Directions-Related Methods](Directions-Related%20Properties%20and%20Methods.htm#methods)**.

When the properties are set, they will affect the next directions request; they will have no effect on the current direction results.

**Property** |  **Description**  
---|---  
**directionsAvoidHighways** |  When set to non-zero, major highways are avoided where possible when the route is calculated. Boolean value. (**_Default:_** Off or 0)  
**directionsAvoidTolls** |  When set to non-zero, toll roads are avoided where possible when the route is calculated. Boolean value. (**_Default:_** Off or 0)  
**directionsDestination$** |  Contains the address of the destination used in the last directions request. Set to null if the last request used latitude/longitude values to specify the location of the destination.  
**directionsDestinationLatitude** |  Contains the latitude of the destination used in the last directions request. Set to 0 if the last request used an address to set the location of the destination.  
**directionsDestinationLongitude** |  Contains the longitude of the destination used in the last directions request. Set to 0 if the last request used an address to set the location of the destination.  
**directionsDraggable** |  When set to non-zero, the user will be able to dynamically modify directions by clicking and dragging the paths on the map. Boolean value. (**_Default:_** Off or 0)  
**directionsHideRouteList** |  When set to non-zero, the route list in the directions pane that is displayed when alternate routes are calculated is suppressed, i.e. when the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property is turned **_On_**. Boolean value. (**_Default:_** Off or 0)  
**directionsOptimizeWaypoints** |  When this property is set to non-zero and all waypoints are classified as stopovers, the waypoint sequence is overridden and the optimum route through the waypoints is determined. Boolean value. (**_Default:_** Off or 0)  
**directionsOrigin$** |  Contains the address of the origin used in the last directions request. Set to null if the last request used latitude/longitude values to specify the location of the origin.  
**directionsOriginLatitude** |  Contains the latitude of the origin used in the last directions request. Set to 0 if the last request used an address to set the location of the origin.  
**directionsOriginLongitude** |  Contains the longitude of the origin used in the last directions request. Set to 0 if the last request used an address to set the location of the origin.  
**directionsPanePercent** |  Percent (0 - 100) of the designated horizontal map area to be used to display directions. If set to 0, then a default value of 30 will be used.

#### **Note:**  
This property must be set in the map definition and cannot be changed subsequently.  
  
**directionsPreserveViewport** |  When set to non-zero, the current map viewport is maintained when directions are displayed rather the viewport being adjusted to center and display the entire route. Boolean value. (**_Default:_** Off or 0)  
**directionsProvideRouteAlternatives** |  When set to non-zero, alternate routes may be calculated. Setting this property may slow down response time, and multiple routes are not guaranteed.  
**directionsRegion$** |  Region code. Used for biasing results to a particular region.  
**directionsRouteColor$  
  
directionsRouteColour$** |  Color of the route displayed on the map. Can be a standard PxPlus color (e.g. Light red, Dark blue, etc.) or an RGB value (e.g. RGB:192 0 255).  
**directionsRouteOpacity** |  Opacity of route displayed on the map, between 0.0 and 1.0.  
**directionsRoutePixels** |  Width of the route displayed on the map in pixels. Range is 0 to 10.  
**directionsSuppressBicyclingLayer** |  When set to non-zero, the rendering of the Bicycling layer is suppressed when bicycling directions are requested. Boolean value. (**_Default:_** Off or 0)  
**directionsSuppressInfoWindows** |  When set to non-zero, the rendering of Info windows is suppressed. Boolean value. (**_Default:_** Off or 0)  
**directionsSuppressMarkers** |  When set to non-zero, the display of markers on the route is suppressed. Boolean value. (**_Default:_** Off or 0)  
**directionsSuppressPolylines** |  When set to non-zero, the line that marks the route is not displayed. Boolean value. (**_Default:_** Off or 0)  
**directionsTravelMode$** |  Type of transportation mode. Options _are driving, walking_ and _bicycling_. If not specified, **_default_** is _driving_.  
**directionsUnitSystem$** |  Unit system to be used in the directions result. Options are _default (_ or _null), metric_ and _imperial_. By default, the unit system of the origin's country or region is used; therefore, a route from Toronto, Canada to Buffalo, NY would use metric units, while a route from Buffalo to Toronto would use imperial units. Specifically setting the unit system to metric or imperial will override this behavior.  
**routeCount** |  The number of routes calculated in the directions result. Normally, this is 1 unless the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property is turned **_On_**.  
**showDirectionsPane** |  Used to enable the directions service and indicate the placement of the directions. Values are: |  0 |  Directions service not enabled. **_(Default)_**  
---|---  
1 |  Directions service enabled. Directions are displayed to the left of the map.  
2 |  Directions service enabled. Directions are displayed to the right of the map.  
  
#### **Note:**  
This property must be set in the map definition and cannot be changed subsequently.  
  
**waypointCount** |  Number of waypoints that have been added to the directions request. The maximum number of waypoints may vary. The standard number is 8 while the maximum for Google Maps API Premier developers is 23.  
  
##  Directions-Related Methods

Below is a list of the directions-related methods supported by the PxPlus Google Maps Extended Control.

**Method** |  **Description**  
---|---  
**addWaypoint(**_sequence, address,_**[**_stopover_**])** **addWaypoint(**_sequence, lat, lng,_**[**_stopover_**])** |  Adds a waypoint on the route to be requested. Waypoints are additional locations through which the calculated route must pass. The location may be specified as an address or using latitude/longitude settings. By default, waypoints are stopover points, which divide the route into legs. You can specify that a waypoint is not a stopover by setting the optional stopover flag to 0, in which case its location is marked on the route with a dot and it does not divide the route into legs. A sequence number must be specified when adding waypoints, where the route would follow the order of the sequence numbers. Gaps in sequence numbers are allowed. A sequence number of 0 can be used to assign the waypoint to the first available sequence number. Sequence number order can be overridden if all waypoints are stopover points and the **[directionsOptimizeWaypoints](Directions-Related%20Properties%20and%20Methods.htm#optimize)** property is turned **_On_** , in which case the order of the sequence numbers is ignored and an optimal route through the waypoints determined. There is no maximum to the number of waypoints you may add using this method; however, the Google Maps API limits the maximum number of waypoints for a standard user to 8, and 23 for Google Maps API Premier customers. If you add more than the allowed number of waypoints, then the directions request will fail when the **getDirections$()** method is invoked, i.e. the directions will not be displayed on the map, and the return status of the **getDirections$()** method will contain the value "MAX_WAYPOINTS_EXCEEDED". Returns the sequence number.  
**clearDirections( )** |  Clears the directions display from the map and directions pane. Does not affect any directions-related properties or defined waypoints.  
**clearWaypoints( )** |  Clears all waypoints that have been defined.  
**getDirections $( )** **getDirections $(**_originAddress_ _$, destinationAddress$_**)** **getDirections $(**_originLat_ _, originLng, destLat, destLng_**)** |  Based upon the specified origin and destination, as well as pre-defined waypoints and directions-related properties, this method calculates and draws the route, markers, etc. on the map and displays directions in the directions pane. If the origin and destination are omitted, then the origin and destination of the last directions request are used. Returns one of the following statuses: |  OK |  Directions request successfully processed.  
---|---  
NOT_FOUND |  One of the origins, destinations or waypoints could not be geocoded.  
ZERO_RESULTS |  No route could be found between the origin and destination.  
MAX_WAYPOINTS_EXCEEDED |  Too many waypoints were provided in the map request.  
INVALID_REQUEST |  Invalid directions request.  
OVER_QUERY_LIMIT |  Web page has sent too many requests within the allowed period of time.  
REQUEST_DENIED |  Web page not allowed to use the directions service.  
UNKNOWN_ERROR |  Server error. Try again.  
INVALID_ARGUMENTS |  Invalid location arguments were passed to the method.  
**getDirectionsCalculatedWaypointOrder([**_route,_**]**  _originalPosition_**)** |  Given a waypoint's original position in the waypoint order, this method returns the position in the waypoint order after the route is calculated. Waypoint order may be altered due to route optimization. See **[directionsOptimizeWaypoints](Directions-Related%20Properties%20and%20Methods.htm#optimize)** property.  
**getDirectionsHTML $( )** |  Returns the current HTML contents of the directions pane.  
**getDirectionsLegCount([**_route_**])** |  Returns the number of legs in a route. The number of legs is dependent on the number of waypoints and whether a waypoint has been classified as a stopover. A route with no stopovers has 1 leg; a route with one stopover has 2 legs, etc. If the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property has been turned **_On_** , you can specify a route number where the primary route number is 1.  
**getDirectionsLegDistance([**_route,_**]**  _leg_**)** |  Returns the distance of the specified leg number in meters, regardless of the **[directionsUnitSystem$](Directions-Related%20Properties%20and%20Methods.htm#unitsystem)** setting.  
**getDirectionsLegDuration([**_route,_**]**  _leg_**)** |  Returns the duration of the specified leg number in seconds.  
**getDirectionsLegStartLatitude([**_route,_**]**  _leg_**)** |  Returns the latitude of the starting location of the specified leg. Default route is the primary route 1.  
**getDirectionsLegStartLongitude([**_route,_**]**  _leg_**)** |  Returns the longitude of the starting location of the specified leg. Default route is the primary route 1.  
**getDirectionsLegEndLatitude([**_route,_**]**  _leg_**)** |  Returns the latitude of the ending location of the specified leg. Default route is the primary route 1.  
**getDirectionsLegEndLongitude([**_route,_**]**_leg_**)** |  Returns the longitude of the ending location of the specified leg. Default route is the primary route 1.  
**getDirectionsOriginalWaypointOrder([**_route,_**]**  _calculatedPosition_**)** |  Given a waypoint's position in the waypoint order after a route has been calculated, this method returns the original position in the waypoint order before the route was calculated. Waypoint order may be altered due to route optimization. See **[directionsOptimizeWaypoints](Directions-Related%20Properties%20and%20Methods.htm#optimize)** property.  
**getDirectionsRouteDistance([**_route_**])** |  Returns the total route distance in meters, regardless of the **[directionsUnitSystem$](Directions-Related%20Properties%20and%20Methods.htm#unitsystem)** setting. If the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property has been turned **_On_** , then you can specify a route number for the distance of alternate routes. The primary route number is 1.  
**getDirectionsRouteDuration([**_route_**])** |  Returns the total route duration in seconds. If the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property has been turned **_On_** , then you can specify a route number for the duration of alternate routes. The primary route number is 1.  
**getDirectionsText $( )** **getDirectionsText $(**_route_**)** **getDirectionsText $(**_route, leg_**)** |  Returns directions for the route in plain text format. If the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property has been turned **_On_** , then you can specify a route number for alternate routes. The primary route number is 1. If route and leg numbers are specified, the text for just that leg is returned.  
**getWaypointAddress $(**_sequence_**)** |  Returns the address of the waypoint with the specified sequence if that waypoint was added using an address. The address is null if the waypoint was added using a latitude/longitude location.  
**getWaypointLatitude(**_sequence_**)** |  Returns the latitude of the waypoint with the specified sequence if that waypoint was added using a latitude/longitude location. The latitude is 0 if the waypoint was added using an address as its location.  
**getWaypointLongitude(**_sequence_**)** |  Returns the longitude of the waypoint with the specified sequence if that waypoint was added using a latitude/longitude location. The longitude is 0 if the waypoint was added using an address as its location.  
**getWaypointStopover(**_sequence_**)** |  Returns the value of the stopover flag for the waypoint with the specified sequence.  
**removeWaypoint(**_sequence_**)** |  Removes the waypoint with the specified sequence number. If the removal of a waypoint results in a gap in the sequence, then that sequence number is skipped when directions are requested.  
**setDirectionsAvoidHighways(**_flag_**)** |  Sets the option to avoid major highways where possible when the route is calculated. Flag is Boolean.  
**setDirectionsAvoidTolls(**_flag_**)** |  Sets the option to avoid toll roads where possible when the route is calculated. Flag is Boolean.  
**setDirectionsDraggable(**_flag_**)** |  Sets the option to allow the user to dynamically modify directions by clicking and dragging the paths on the map. Flag is Boolean.  
**setDirectionsHideRouteList(**_flag_**)** |  Sets the option to suppress the route list in the directions pane that is displayed when alternate routes are calculated; i.e. when the **[directionsProvideRouteAlternatives](Directions-Related%20Properties%20and%20Methods.htm#routealternatives)** property is turned **_On_**. Flag is Boolean.  
**setDirectionsOptimizeWaypoints(**_flag_**)** |  Sets the option to override the waypoint sequence and determine the optimum route through the waypoints. Flag is Boolean.  
**setDirectionsPreserveViewport(**_flag_**)** |  Sets the option to maintain the current map viewport when directions are displayed, rather than adjusting the viewport to center and display the entire route. Flag is Boolean.  
**setDirectionsProvideRouteAlternatives(**_flag_**)** |  Sets the option to calculate alternate routes. Setting this property may slow down response time, and multiple routes are not guaranteed. Flag is Boolean.  
**setDirectionsRegion(**_code$_**)** |  Sets the region code that is used for biasing results to a particular region.  
**setDirectionsRouteColor(**_color$_**)** **setDirectionsRouteColour(**_colour$_**)** |  Sets the color of the route displayed on the map. _Color$_ can be a standard PxPlus color (e.g. Light Red, Dark Blue, etc.) or an RGB value (e.g. RGB: 192 0,255). When setting the route color, standard route width (pixels) and opacity are reset; therefore, you may want to set these as well.  
**setDirectionsRouteOpacity(**_opacity_**)** |  Sets the opacity of route displayed on the map. Valid opacity values are between 0.0 and 1.0.  
**setDirectionsRoutePixels(**_pixels_**)** |  Sets the width of the route displayed on the map in pixels. Range is 1 to 10.  
**setDirectionsSuppressBicyclingLayer(**_flag_**)** |  Sets the option to suppress the rendering of the bicycling layer when bicycling directions are requested. Flag is Boolean.  
**setDirectionsSuppressInfoWindows(**_flag_**)** |  Sets the option to suppress the rendering of info windows. Flag is Boolean.  
**setDirectionsSuppressMarkers(**_flag_**)** |  Sets the option to suppress the placement of markers when a route is displayed. Flag is Boolean.  
**setDirectionsSuppressPolylines(**_flag_**)** |  Sets the option to suppress the line that marks the route. Flag is Boolean.  
**setDirectionsTravelMode(**_mode$_**)** |  Sets the type of transportation mode. Options _are driving, walking_ and _bicycling_. If not set, **_default_** is _driving_.  
**setDirectionsUnitSystem(**_unit$_**)** |  Sets the unit system to be used in the directions result. Options are _default_ (or _null_), _metric_ and _imperial_. By default, the unit system of the origin's country or region is used; therefore, a route from Toronto, Canada to Buffalo, NY would use metric units, while a route from Buffalo to Toronto would use imperial units. Specifically setting the unit system to metric or imperial will override this behavior.
