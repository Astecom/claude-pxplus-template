# Google Maps Interface  
  
**Marker-Related Methods**|   
---|---  
  
Below is a list of the marker-related methods supported by the PxPlus Google Maps Extended Control.

**Method** |  **Description**  
---|---  
**addMarker(latitude,longitude [**_,title$, icon$, zIndex_**]**) |  Adds a marker at the specified latitude and longitude. Returns a numeric identifier to be used when referencing the marker in marker-related methods. The following arguments are optional: |  _title$_ |  Title is displayed in the marker tip.  
---|---  
_icon$_ |  URL to image to be used for the marker.  
_zIndex_ |  Markers are displayed in order of their zIndex; those with higher values are displayed in front of those with lower values. By default, markers with lower latitudes take precedence.  
**clearMarkers( )** |  Removes all markers from the map.  
**getMarkerClickable(**_markerid_**)** |  Returns a Boolean value indicating whether the specified marker is clickable.  
**getMarkerDraggable(**_markerid_**)** |  Returns a Boolean value indicating whether the specified marker is draggable.  
**getMarkerFlat(**_markerid_**)** |  Returns a Boolean value indicating whether the specified marker is flat (i.e. has no shadow).  
**getMarkerIcon$(**_markerid_**)** |  Returns the URL of the image for the specified marker.  
**getMarkerLatitude(**_markerid_**)** |  Returns the latitude in degrees of the specified marker.  
**getMarkerLongitude(**_markerid_**)** |  Returns the longitude in degrees of the specified marker.  
**getMarkerPosition$(**_markerid_**)** |  Returns a comma-separated string containing the latitude and longitude in degrees of the specified marker.  
**getMarkerTitle$(**_markerid_**)** |  Returns a string containing the title of the specified marker.  
**getMarkerVisible(**_markerid_**)** |  Returns a Boolean value indicating whether the specified marker is visible.  
**getMarkerzIndex(**_markerid_**)** |  Returns the zIndex of the specified marker.  
**removeMarker(**_markerid_**)** |  Remove the specified marker.  
**setMarkerClickable(**_markerid_ _, flag_**)** |  Sets whether or not the specified marker is clickable. Flag is Boolean.  
**setMarkerDraggable(**_markerid_ _, flag_**)** |  Sets whether or not the specified marker is draggable. Flag is Boolean.  
**setMarkerFlat(**_markerid_ _, flag_**)** |  Sets whether or not the specified marker is flat. Flag is Boolean.

#### **Note:**  
If an icon is specified, the marker will be flat.  
  
**setMarkerOptions(**_markerid_ _, options$_**)** |  Sets marker attributes specified in _options$_ for the given marker. _options_ _$_ contains a list of SEP-separated values pairs, consisting of attribute names and values in the format _attribute=value_. Boolean values can be specified using **0** and **-1** , or **true** and **false**. Null string values can be specified by leaving the value blank. **_Example:_** "draggable=true"+SEP+"title="+SEP+"+"icon=file:///work/images/star.bmp"+SEP  
**setMarkerPosition(**_markerid_ _, latitude, longitude_**)** |  Move the specified marker to the given latitude and longitude.  
**setMarkerTitle(**_markerid_ _, title$_**)** |  Sets the title of the specified marker. The title is displayed as the marker tip.  
**setMarkerVisible(**_markerid_ _, flag_**)** |  Sets whether or not the specified marker is visible. Flag is Boolean.  
**setMarkerzIndex(**_markerid_ _, n_**)** |  Sets the zIndex of the specified marker.
