# Apache HTTP Interface  
  
**File Uploads/Multi-Part Forms** |   
---|---  
  
##  Uploading Files

The Apache HTTP Interface has built-in logic to parse multi-part form transmissions. This makes the process of having end-users upload files to the host a very simple process.

An upload page typically will consist of an HTML document containing a form with an INPUT field whose type is **"file"**.

**_Example:_**

|  <html>  
  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">  
<title>Upload a picture</title>  
</head>  
  
<body>  
  
<form action="whatever.pvp" method="post" enctype="multipart/form-data">  
  
<p align="center">Enter pathname of the picture to upload:  
<input type="file" size="32" name="flnm" id="filename" accept="image/gif,image/jpg,image/jpeg">  
<br>  
<input type="submit" name="command" value="Upload">  
<input type="submit" name="command" value="Cancel">  
</p>  
  
</form>  
  
</body>  
</html>  
---|---  
  
When this page is received by the Apache HTTP Interface, the variable **FLNM$** will be loaded with the contents of the file submitted by the user. In addition, the fields **FLNM..TYPE$** will contain the file type and **FLNM..FILENAME$** will contain the pathname of the file on the user workstation.

To store the file on the host, simply create a serial file and write the contents of the variable to the file using Binary IO.

**_Example:_**

> !  
>  ! Sample Web program to store an uploaded file on the host  
>  ! in the /tmp directory  
>  !  
>  ! The file is received in the FLNM variable  
>  !  
>  F$=FLNM..FILENAME$  
>  O=pos("/\":F$,-1)  
>  F$="/tmp/"+F$(O+1)  
>  erase F$,err=*next  
>  serial F$  
>  open purge (hfn,isz=-1)F$  
>  write record (lfo)FLNM$  
>  close (lfo)  
>  HTML_FILE$="gotfile.htm"  
>  run "*web/merge"
