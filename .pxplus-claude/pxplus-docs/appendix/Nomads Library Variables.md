# Language Reference - Appendix  
  
**NOMADS Library Variables**|   
---|---  
  
A NOMADS library is stored in a PxPlus _Direct_ data file. The name of the file is that of the library with a language extension (e.g. scrnlib.en). The key is stored separate from the data; i.e. the data record does **_not_** include the key.

> Key Length: 16  
>  Record Length: 4000

The key consists of the _panel name_ (characters 1-12) and the _screen position_ (characters 13-16).

**_Example:_**

> MYPANEL 0305

#### **Note:**  
The 4-byte screen position is based on the closest column/row coordinate of the control. This causes NOMADS to paint the form left-right/top-down.  
  
If two controls occupy the same integer column/row, NOMADS simply adds 1 to the value until a unique key is found.

The library default record is stored with bytes (1,12) blank plus four zeros, and form headers are stored with the panel name plus four zeros in bytes (13,4).

All records contain the same 60 fields. Based on the control type, certain fields will not be used, and others will have differing meanings.

## Library Variables

The table below lists the NOMADS library variables.

#### **Note:**  
In some IOLists, the variable names begin with **_OBJ_** (preceded by an _underscore_ **_**) rather than OBJ.  
  
**_Example:_**  
  
**_OBJ_NULL$**

> **Field** |  **Variable** |  **Field** |  **Variable**  
---|---|---|---  
1 |  OBJ_NME$ |  31 |  OBJ_ORIG$  
2 |  OBJ_C |  32 |  OBJ_FONT$  
3 |  OBJ_L |  33 |  OBJ_COLOR$  
4 |  OBJ_W |  34 |  OBJ_LISTBOX_TYPE$  
5 |  OBJ_H |  35 |  OBJ_SEP$  
6 |  OBJ_TYPE$ |  36 |  OBJ_SCRATCH$  
7 |  OBJ_TXT$ |  37 |  OBJ_POPUP$  
8 |  OBJ_VAL$ |  38 |  OBJ_SIZING$  
9 |  OBJ_TAB |  39 |  OBJ_LOGIC1$  
10 |  OBJ_DEF$ |  40 |  OBJ_LOGIC2$  
11 |  OBJ_DSP$ |  41 |  OBJ_POPUP_LOGIC$  
12 |  OBJ_FCS$ |  42 |  OBJ_QRY_BITMAP$  
13 |  OBJ_SEL$ |  43 |  OBJ_QRY_WIDTH  
14 |  OBJ_MSG$ |  44 |  OBJ_QRY_TIP$  
15 |  OBJ_HLP$ |  45 |  OBJ_QRY_ATTR$  
16 |  OBJ_ATTR$ |  46 |  OBJ_EXTENSION$  
17 |  OBJ_IDX$ |  47 |  OBJ_DEMAND$  
18 |  OBJ_HOTKEY$ |  48 |  OBJ_DEMAND_LOGIC$  
19 |  OBJ_QRY$ |  49 |  OBJ_BACKGROUND_LOGIC$  
20 |  OBJ_SEC$ |  50 |  OBJ_PERSISTENCE$  
21 |  OBJ_STS$ |  51 |  OBJ_NOTES$  
22 |  OBJ_GRP$ |  52 |  OBJ_TBL_LEN  
23 |  OBJ_NULL$ |  53 |  OBJ_TVLINE_COLOR$  
24 |  OBJ_TAG$ |  54 |  OBJ_AUTOSZ_WIDTH$  
25 |  OBJ_TBL$ |  55 |  OBJ_AUTOSZ_HEIGHT$  
26 |  OBJ_INP$ |  56 |  OBJ_AUTOMATION_TEXT$  
27 |  OBJ_OUT$ |  57 |  OBJ_HILIGHT_COLORS$  
28 |  OBJ_VALID$ |  58 |  OBJ_PROPS$  
29 |  OBJ_CLASS$ |  59 |  OBJ_VISUAL_CLASS$  
30 |  OBJ_TIP$ |  60 |  OBJ_INOMADS_CLASS$
