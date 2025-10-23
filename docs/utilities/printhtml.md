# Utility Routines

***TOOLS/PRINTHTML** |  **_Output Formatted Text from HTML_**  
---|---  
  
## Invocation

**CALL "*tools/printhtml"** , _html$_ , _outputchannel_ , **[**_left_**]** , **[**_top_**]** , **[**_right_**]** , **[**_bottom_**]**

**_Where:_**

_html$_ |  HTML to convert to formatted text output.  
---|---  
_outputchannel_ |  Open channel to print the formatted text output to.  
_left_ |  Left-most point of the area to print to. If not specified, use the current position.  
_top_ |  Top-most point of the area to print to. If not specified, use the current position.  
_right_ |  Right-most point of the area to print to. If not specified, use the maximum right point.  
_bottom_ |  Bottom-most point of the area to print to. If not specified, use the maximum bottom point.  
  
## Description

Convert HTML input into formatted text output on the given open channel. This allows you to use a TinyMCE control for users to input formatted text and then allows you to output it to a PDF or other channel. To define a TinyMCE control, see **[Using the TinyMCE HTML Editor](../Extended%20NOMADS%20Objects/TinyMCE%20HTML%20Editor/Using%20the%20TinyMCE%20HTML%20Editor.md)**.

Only the most common HTML elements that are used to format text are supported with this tool:

**HTML Element** |  **Description**  
---|---  
<h1> to <h6> |  Defines headings  
<b>  
<strong> |  Defines bold  
<i>  
<em> |  Defines italics  
<p> |  Defines paragraphs  
<span> |  Defines spans  
<br> |  Defines line breaks  
<hr> |  Defines horizontal lines  
<ul>  
<ol>  
<li> |  Defines lists  
Style attributes |  Defines:  
  
Font  
Font size  
Text color  
Underlined text  
Horizontal text alignment  
  
_(The PrintHTML utility was added in PxPlus 2021.)_

## Example

This example code is for printing TinyMCE formatted text as a PDF:

> open (hfn)"*PDF*;file=output_pdf$"  
> pdfChan=lfo  
>  call "*tools/printHTML",tinyMCE.ctl'value$,pdfChan,1,1  
>  close (pdfChan)

## See Also

**[*TOOLS/ConvertHTMLColor](converthtmlclr.md)**  
FIN **[CurFont](../functions/fin.htm#curfont)** and **[CurColor (CurColour)](../functions/fin.htm#curclr)**
