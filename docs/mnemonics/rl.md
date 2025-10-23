# Mnemonics

**'RL'** |  **_Return Line Contents_**  
---|---  
  
**Editing**

##  Description

Use **'RL'** to return the contents of the current line with the next terminal input.

#### **Note:**  
In graphics mode (**'GS'**), if a terminal mnemonic transmits the contents of the screen to the program, the data consists of four bytes for each character. The first two bytes are background and foreground characters, the third byte holds character attributes, and the fourth byte is the actual character on the screen.

## See Also

**['GS' Start Graphics Data Transmission](gs.md)**

##  Example

print 'CS'  
print @(5,5),dim(10,"A")  
input @(5,5),'RL',B$  
print B$  
  
When run:  
AAAAAAAAAA  
AAAAAAAAAA
