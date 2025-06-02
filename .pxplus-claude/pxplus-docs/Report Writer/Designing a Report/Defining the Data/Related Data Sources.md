# Defining the Data

**Related Data Sources**|   
---|---  
  
If a report requires data from multiple sources, additional related data sources may be available to be selected if the main data source is defined using a _Table Name_ or _File Path_. The requisite is that the data source relationships be predefined using the NOMADS **[File Link Maintenance](../../../Data%20Dictionary/File%20Link%20Maintenance.md)** utility.

If the above conditions are met, related data sources may be selected. Select _Related Sources_ from the Report Designer _Data_ menu or right click on the data source in the left data pane and choose _Select Related Data Sources_ from the popup menu.

> A hierarchical view of the related data sources starting with the main input source is displayed. Choose the data sources you want to use in the report by selecting the check box next to the source name.

#### **Note:**  
There are dependencies that require including the upper level data sources in order to access lower level sources. When you select a lower level source, the sources above it are automatically selected as well. When you deselect an upper level source, the related lower level sources are also deselected.

Once any related data sources are selected, a _Related Data Sources_ entry appears in the list of items in the left data pane of the Report Designer. The selected data sources, along with their elements and descriptions, are displayed under this entry, ready to drag and drop into place on the report layout.

Once defined, if you want to change the related data sources, a warning will be displayed to inform you that selected data elements, sort sequence, filters and data groupings may no longer be valid.
