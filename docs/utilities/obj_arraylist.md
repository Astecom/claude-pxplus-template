# Objects

***OBJ/ARRAYLIST** |  **_Array List Object_**  
---|---  
  
## Usage

An array list is a dynamically resized data structure that allows elements to be Get/Set via index, similar to an array, but also allows elements to be appended, inserted and removed similar to a list. Modifying the list by inserting, appending or removing resizes the data structure and shifts the elements. Examples of an array list are vector (c++) and arrayList (java) data structures.

The Array List object provides a simple means to create and work with an array list and consists of various methods for interacting with an array list. See **[Methods](obj_arraylist.htm#methods)**.

_(The Array List object *OBJ/ARRAYLIST was added in PxPlus 2021.)_

**_Instantiating the Array List Object_**

To instantiate the Array List object using the handle **my_list** (where **my_list** can be any numeric variable), enter the following command:

          my_list=new("*obj/ArrayList")

To access any of the available methods, the Array List object handle (**my_list**) is used, followed by an **'**  _(apostrophe)_ and the method (with the desired parameters).

**_Examples:_**

          my_list'Append(data$)

          print my_list'Get$(my_list'Size())

          my_list'Append_from_array(second_list)

          my_list'Insert_from_array(3, second_list)

Use these links to access additional examples provided below:

          **[Example - Creating, Populating and Modifying a New Array List](obj_arraylist.htm#example1)  
**          **[Example - Appending and Inserting an Array List to Another Array List](obj_arraylist.htm#example2)  
**          **[Example - Working with Functions](obj_arraylist.htm#example3)**

##  Methods

This table lists the **_methods_** used by the Array List object.

**Methods** |  **Description**  
---|---  
**Append(**_value_**)** **Append(**_value$_**)** |  Adds a numeric or string value to the end of the array list. Returns the index in the array list of the newly appended value if successful. Returns '0' if any error is encountered while appending the value.  
**Append_from_array(**_array_**)** |  Adds all the values from another array to the end of the array list. Returns the new array size. _(Append_from_array method was added in PxPlus 2025.)_  
**Clear( )** |  Clears the array list by removing all current elements. Returns '1' if successful. Returns '0' if any error is encountered while clearing the array list.  
**Clone( )** |  Returns a handle to an array list with identical values. _(Clone method was added in PxPlus 2026.)_  
**Find(**_value_**)** **Find(**_value$_**)** **Find(**_value$, case_insensitive_**)** |  Searches the array list for a numeric or string value. Searches are case sensitive by default. For case insensitive searches, set the _case_insensitive_ parameter to '1'. Returns index of a matching value if a match was found. Returns '0' if no match was found.  
**Get(**_index_**)** **Get$(**_index_**)** |  Returns the numeric or string value at a given index of the array list.

#### **Warning!**  
An invalid index results in an Error #42: Subscript out of range/Invalid subscript.  
  
**Get(**_index1, index2_**)** |  Gets a subsection of the array list, returned as an array list handle. _(Get(index1, index2) method was added in PxPlus 2026.)_  
**Insert(**_index, value_**)** **Insert(**_index, value$_**)** |  Inserts a numeric or string value into the array list at the given index, shifting the current value at that index and all subsequent values to the right. The array list size grows by 1. Returns the index in the array list of the newly inserted value if successful. Returns '0' if any error is encountered while inserting the value.  
**Insert_from_array(**_index, array_**)** |  Adds all the values from another array at an index in the array list. Returns the new array size. _(Insert_from_array method was added in PxPlus 2025.)_  
**Pop( )** **Pop$( )** |  Gets the last value in the array list, then removes it. Returns the popped value. _(Pop and Pop$ methods were added in PxPlus 2026.)_  
**Print( )** |  Prints the string representation of the array list. _(Print method was added in PxPlus 2026.)_  
**Remove(**_index_**)** |  Removes a value from the array list at the given index, shifting any subsequent values to the left. The array list size shrinks by 1. Returns '1' if remove is successful. Returns '0' if any error is encountered while removing the value.  
**Remove_range(**_index1, index2_**)** |  Removes the values within the given range. _(Remove_range method was added in PxPlus 2026.)_  
**Reverse( )** |  Reverses the order of the array list. _(Reverse method was added in PxPlus 2026.)_  
**Set(**_array_**)** |  Sets array list values to that of the given array list. _(Set(array) method was added in PxPlus 2026.)_  
**Set(**_index, value_**)** **Set(**_index, value$_**)** |  Changes the numeric or string value at the given index in the array list to a new value. The array list size does not change. Returns '1' if successful. Returns '0' if any error is encountered while setting the value.  
**Shift( )  
Shift$( )** |  Gets the first value in the array list, then removes it. Returns the shifted value. _(Shift and Shift$ methods were added in PxPlus 2026.)_  
**Size( )** |  Returns the current number of values in the array list. Returns '-1' if an error is encountered while getting the size.  
**String****$( )** |  Returns a string representation of the array list. _(String$ method was added in PxPlus 2026.)_  
**Swap(**_index1, index2_**)** |  Swaps the values at the given indices. _(Swap method was added in PxPlus 2026.)_  
  
##  Example - Creating, Populating and Modifying a New Array List

> !  
>  ! Create a new array list  
>      animalsList=new("*obj/ArrayList")  
>  !  
>  ! Populate the array list  
>      animalsList'Append("Penguin")  
>      animalsList'Append("Lion")  
>      animalsList'Append("Platypus")  
>      animalsList'Append("Blue Jay")  
>  !  
>  ! Add new value to front of the list if not already in array list  
>      newAnimal$="Mouse"  
>      if animalsList'Find(newAnimal$)=0 \  
>           then animalsList'Insert(1,newAnimal$)  
>  !  
>  ! Remove last value in the list  
>      if animalsList'Remove(animalsList'Size())=0 \  
>           then msgbox "Error removing last value in array list"  
>  !  
>      msgbox str(animalsList'Size()),"Num Elements in array list"  
>  !  
>  ! Get an element  
>      if animalsList'Get$(3)<>"Lion" \  
>           then msgbox "Error getting element 3"  
>  !  
>  ! Set an element  
>      if animalsList'Set(3,"Koala")=0 \  
>           then msgbox "Error setting element 3"  
>  !  
>      drop object animalsList  
>      end

##  Example - Appending and Inserting an Array List to Another Array List

> ! Create the ArrayList objects  
>  array = new("*obj/ArrayList")  
> my_list = new("*obj/ArrayList")  
>  !  
>  ! Append values to array  
> array'append("A")  
> array'append("B")  
> array'append("C")  
>  ! array = (A, B, C)  
>  !  
>  ! Append value to list  
> my_list'append(1)  
> my_list'append(2)  
> my_list'append(3)  
>  ! my_list = (1, 2, 3)  
>  !  
>  ! Append my_list to array  
> array'append_from_array(my_list)  
>  ! array = (A, B, C, 1, 2, 3)  
>  !  
>  ! Insert array into my_list at index 2  
> my_list'insert_from_array(2, array)  
>  ! my_list = (1, A, B, C, 2, 3)

_(This example was added in PxPlus 2025.)_

##  Example - Working with Functions

> ! Setup array  
> my_list=new("*obj/ArrayList")  
> my_list'append(1)  
> my_list'append(2)  
> my_list'append(3)  
> my_list'append(4)  
> my_list'append("a")  
> my_list'append("b")  
> my_list'append("c")  
> my_list'append("d")  
>  !  
>  ! String  
> arr_str$=my_list'string$()  
>  print arr_str$  
>  !  
>  ! Print  
> my_list'print()  
>  !  
>  ! Clone  
> new_list=my_list'clone()  
> new_list'print()  
>  !  
>  ! Get Subsection  
> sub_arr=my_list'get(3,4)  
> sub_arr'print()  
>  !  
>  ! Pop (string)  
> pop_str$=my_list'pop$()  
>  print pop_str$  
> my_list'print()  
>  !  
>  ! Remove_range  
> my_list'remove_range(4,5)  
> my_list'print()  
>  !  
>  ! Set (array)  
>  new_list2=new("*obj/ArrayList")  
>  new_list2'set(my_list)  
>  new_list2'print()  
>  !  
>  ! Shift (numeric)  
> shift_val=my_list'shift()  
>  print shift_val  
> my_list'print()  
>  !  
>  ! Swap  
> my_list'swap(1,4)  
> my_list'print()  
>  !  
>  ! Reverse  
> my_list'reverse()  
> my_list'print()

_(This example was added in PxPlus 2026.)_

 

 

 
