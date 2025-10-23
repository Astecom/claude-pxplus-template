# Control Object Properties

**PasteFilter** |  **_Strip Non-Printing Characters from Pasted Data_**  
---|---  
  
## Description

Strip non-printing characters from pasted data

When the filter is enabled, it strips leading/trailing non-printing characters, such as line feeds or tabs, from data that is copied/pasted into a grid or multi-line control and replaces any internal sequence of non-printing characters with a single space.

Possible values are 0 = Off and 1 = On.

**Example:**

Data that is copied as 

> 123 Main Street  
>  Markham  
>  Ontario

will be pasted as:

> 123 Main Street Markham Ontario

The Clipboard will reflect the actual data pasted in case the user wants to paste the data elsewhere.

_(The PasteFilter property was added in PxPlus 2020 Update 1.)_

## Default

1 (On), except for multi-lines that are >1 line high and accept multiple lines of input, which default to 0 (Off)

## Used By

**GRID****MULTI_LINE**
