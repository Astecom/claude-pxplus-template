# TinyMCE HTML Editor

**Creating a Tool Bar Layout**|   
---|---  
  
The PxPlus TinyMCE Editor includes the following pre-defined editing layouts: **[Modern](Using%20the%20TinyMCE%20HTML%20Editor.htm#modern)**, **[Narrow](Using%20the%20TinyMCE%20HTML%20Editor.htm#narrow)**, **[Simple](Using%20the%20TinyMCE%20HTML%20Editor.htm#simple)**, **[Advanced](Using%20the%20TinyMCE%20HTML%20Editor.htm#advanced)**, **[Extended](Using%20the%20TinyMCE%20HTML%20Editor.htm#extended)** and **[Fullpage](Using%20the%20TinyMCE%20HTML%20Editor.htm#fullpage)**. Alternatively, you can create your own layout simply by creating a text file with the specified plugins and line definitions. The line definitions specify the edit controls to include, and the plugins entry specifies plugins required by certain edit controls. See **[Pre-Defined Layouts](Creating%20a%20Toolbar%20Layout.htm#textfiles)** for the text file associated with each pre-defined layout.

The text file with the layout definition **_must_** be placed in the ***plus/inomads/add-ons/editors/tinymce/layouts/** directory. The file name you assign will be used as the value of the _toolbarLayout_ _$_ property in the NOMADS definition. See **[Editor Properties](Using%20the%20TinyMCE%20HTML%20Editor.htm#properties)**.

The contents may consist of **[plugins](Creating%20a%20Toolbar%20Layout.htm#plugins)**, **[menu](Creating%20a%20Toolbar%20Layout.htm#menu)**, **[toolbar](Creating%20a%20Toolbar%20Layout.htm#toolbar)**, **[browser_spellcheck](Creating%20a%20Toolbar%20Layout.htm#spellcheck)** and optionally **[color_cols](Creating%20a%20Toolbar%20Layout.htm#colorcols)** and **[color_map](Creating%20a%20Toolbar%20Layout.htm#colormap)**.

## plugins

Add the following to the layout file:

> plugins : 'list of space-separated plugins required for special edit controls',

For complete details on defining plugins, visit **<https://www.tiny.cloud/docs/configure/integration-and-setup/#plugins>**.

For a list of available plugins, visit **<https://www.tiny.cloud/docs/plugins/>** and refer to the list displayed on the left.

## menu

To **_define a menu_** , add the following to the layout file:

> menubar: 'menu_nameanother_menu_name',  
>  menu : {  
>  menu_name : {title: 'menu title', items: 'list of space separated menu items, you can also use a | to insert a divider'},  
>  another_menu_name : {title: 'menu title', items: 'list of space separated menu items, you can also use a | to insert a divider'},  
>    
>  },

To **_disable the menu_** , add the following to the layout file:

> menubar : false,

For complete details on defining a menu, visit **<https://www.tiny.cloud/docs/configure/editor-appearance/#menu>**.

For complete details on disabling the menu, visit **<https://www.tiny.cloud/docs/configure/editor-appearance/#menubar>**.

For a list of all possible menu items available and their plugin requirements, visit **<https://www.tiny.cloud/docs/advanced/editor-control-identifiers#menucontrols>**.

## toolbar

To define a **_single line toolbar_** , add the following to the layout file:

> toolbar : 'list of space-separated toolbar buttons, you can also use a | to insert a divider',

To define **_multiple toolbar lines_** , add the following to the layout file:

> toolbar : [  
>  'list of space-separated toolbar buttons, you can also use a | to insert a divider',  
>  'list of space-separated toolbar buttons, you can also use a | to insert a divider',  
>    
>  ],

For complete details on defining toolbar(s), visit **<https://www.tiny.cloud/docs/configure/editor-appearance/#toolbar>**.

For a list of all possible toolbar buttons available and their plugin requirements, visit **<https://www.tiny.cloud/docs/advanced/editor-control-identifiers#toolbarcontrols>**.

## browser_spellcheck

To enable spell checking, add the following to the layout file:

> browser_spellcheck : true,

Punctuation (colons, quotes and trailing commas) is **_required_**.

## color_cols

**_(Optional)_** This property is used to specify the number of color columns that will be shown in the color selection grid:

> color_cols: 5,

_(The color_cols property was added in PxPlus 2021.)_

## color_map

**_(Optional)_** This property is used to specify the colors that will be shown in the color selection grid:

> color_map: [  
>  '#2DC26B', 'Green',  
>  '#F1C40F', 'Yellow',  
>  '#E03E2D', 'Red',  
>  '#B96AD9', 'Purple',  
>  '#3598DB', 'Blue',  
>  '#169179', 'Dark Turquoise',  
>  '#E67E23', 'Orange',  
>  '#BA372A', 'Dark Red',  
>  '#843FA1', 'Dark Purple',  
>  '#236FA1', 'Dark Blue',  
>  '#000000', 'Black',  
>  '#FFFFFF', 'White'  
>  ],

_(The color_map property was added in PxPlus 2021.)_

##  Pre-Defined Layouts

Below are the text files for the existing pre-defined layouts: **[Modern](Creating%20a%20Toolbar%20Layout.htm#modern)**, **[Narrow](Creating%20a%20Toolbar%20Layout.htm#narrow)**, **[Simple](Creating%20a%20Toolbar%20Layout.htm#simple)**, **[Advanced](Creating%20a%20Toolbar%20Layout.htm#advanced)**, **[Extended](Creating%20a%20Toolbar%20Layout.htm#extended)** and **[Fullpage](Creating%20a%20Toolbar%20Layout.htm#fullpage)**.

***plus/****inomads/add-ons/editors/tinymce/layouts/modern**

> plugins : 'advlist anchor autolinkcharmap code emoticons fullpagefullscreen help hr image insertdatetime link lists media nonbreaking pagebreak paste preview print searchreplace tabfocus table visualchars visualblockswordcount',  
>  menubar: 'file edit insert view format table help',  
>  menu : {  
>  file : {title: 'Document', items: 'print fullpage wordcount'},  
>  edit : {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'},  
>  insert : {title: 'Insert', items: 'link unlink | image media charmap insertdatetime emoticons | hr nonbreaking pagebreak | anchor | webster'},  
>  view : {title: 'View', items: 'visualaid visualchars visualblocks | preview websterpreview'},  
>  format : {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | bullist numlist outdent indent | formats | removeformat'},  
>  table : {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'}  
>  },  
>  toolbar1 : 'undo redo | styleselect fontselect fontsizeselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | code help',  
>  toolbar2 : 'websterwebsterpreview',  
>  browser_spellcheck : true,  
>  color_cols: 5,  
>  color_map: [  
>   
>  '#F0F0F0', 'PxPlus Gray',  
>  '#A0A0A0', 'PxPlus Dark Gray',  
>  '#00FFFF', 'PxPlus Cyan',  
>  '#008080', 'PxPlus Dark Cyan',  
>  '#000000', 'Black',  
>   
>  '#00FF00', 'PxPlus Green',  
>  '#FFFF00', 'PxPlus Yellow',  
>  '#FF0000', 'PxPlus Red',  
>  '#FF00FF', 'PxPlus Magenta',  
>  '#0000FF', 'PxPlus Blue',  
>   
>  '#008000', 'PxPlus Dark Green',  
>  '#808000', 'PxPlus Dark Yellow',  
>  '#800000', 'PxPlus Dark Red',  
>  '#800080', 'PxPlus Dark Magenta',  
>  '#000080', 'PxPlus Dark Blue',  
>   
>  '#BFEDD2', 'Light Green',  
>  '#FBEEB8', 'Light Yellow',  
>  '#F8CAC6', 'Light Red',  
>  '#ECCAFA', 'Light Purple',  
>  '#C2E0F4', 'Light Blue',  
>   
>  '#2DC26B', 'Green',  
>  '#F1C40F', 'Yellow',  
>  '#E03E2D', 'Red',  
>  '#B96AD9', 'Purple',  
>  '#3598DB', 'Blue',  
>   
>  '#169179', 'Dark Turquoise',  
>  '#E67E23', 'Orange',  
>  '#BA372A', 'Dark Red',  
>  '#843FA1', 'Dark Purple',  
>  '#236FA1', 'Dark Blue',  
>   
>  '#ECF0F1', 'Light Gray',  
>  '#CED4D9', 'Medium Gray',  
>  '#95A5A6', 'Gray',  
>  '#7E8C8D', 'Dark Gray',  
>  '#34495E', 'Navy Blue',  
>   
>  '#000000', 'Black',  
>  '#FFFFFF', 'White'  
>  ],

***plus/****inomads/add-ons/editors/tinymce/layouts/narrow**

> plugins : 'anchor autolink charmap code emoticons fullscreen hr image insertdatetime link lists media nonbreaking pagebreak paste preview print searchreplacetabfocus table visualblocksvisualchars wordcount',  
>  menubar: 'file edit insert view format table',  
>  menu : {  
>  file : {title: 'File', items: 'newdocument print wordcount'},  
>  edit : {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'},  
>  insert : {title: 'Insert', items: 'link unlink | image media charmap insertdatetime emoticons | hr nonbreaking pagebreak | anchor'},  
>  view : {title: 'View', items: 'visualaid visualchars visualblocks | preview'},  
>  format : {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | bullist numlist outdent indent | formats | removeformat'},  
>  table : {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'}  
>  },  
>  toolbar : 'newdocument | bold italic underline | alignleft aligncenter alignright | fontselect fontsizeselect | code',  
>  browser_spellcheck : true,

***plus/****inomads/add-ons/editors/tinymce/layouts/simple**

> plugins : 'code fullscreen tabfocus wordcount',  
>  toolbar : 'bold italic underline strikethrough | alignleft aligncenteralignright | fontselect fontsizeselect | code',  
>  menubar : false,  
>  browser_spellcheck : true,

***plus/****inomads/add-ons/editors/tinymce/layouts/advanced**

> plugins : 'advlist anchor autolink charmap code fullscreen hr image link lists pagebreak preview searchreplace tabfocus',  
>  toolbar: [  
>  'newdocument | preview | searchreplace | removeformat | undo redo | link unlink anchor | image | code',  
>  'fontselectfontsizeselect | bold italic underline strikethrough | forecolor backcolor',  
>  'alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | hr pagebreak | charmap subscript superscript'  
>  ],  
>  menubar : false,  
>  browser_spellcheck : true,

***plus/****inomads/add-ons/editors/tinymce/layouts/extended**

> plugins : 'advlist anchor autolink charmap code fullscreen hr image insertdatetime link lists media pagebreak preview print searchreplace tabfocus table wordcount',  
>  toolbar: [  
>  'newdocument | print preview | searchreplace | undo redo | link unlink anchor image media | alignleft aligncenter alignright alignjustify | code',  
>  'formatselectfontselect fontsizeselect | bold italic underline strikethrough | forecolor backcolor',  
>  'removeformat | hr pagebreak | charmap subscript superscript insertdatetime | bullist numlist | outdent indent blockquote | table'  
>  ],  
>  menubar : false,  
>  browser_spellcheck : true,

***plus/****inomads/add-ons/editors/tinymce/layouts/fullpage**

> plugins : 'advlist anchor autolink charmap code fullpage fullscreen hr image imagetools insertdatetime link lists media pagebreak preview print searchreplace tabfocus table wordcount',  
>  toolbar: [  
>  'newdocument | print preview | searchreplace | undo redo | link unlink anchor image media | alignleft aligncenter alignright alignjustify | code',  
>  'formatselectfontselect fontsizeselect | bold italic underline strikethrough | forecolor backcolor',  
>  'fullpage | removeformat | hr pagebreak | charmap subscript superscript insertdatetime | bullist numlist | outdent indent blockquote | table'  
>  ],  
>  menubar : false,  
>  browser_spellcheck : true,

TinyMCE is a registered trademark of Tiny Technologies Inc.
