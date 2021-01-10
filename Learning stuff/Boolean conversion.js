alert (Boolean(4)); //Any Number above 0 converts to true
alert (Boolean('thing'));
alert (Boolean("0"))
alert (Boolean(" ")) //Because there is space in the string, it is true
//All the above would convert to "true"


alert (Boolean(0)); //0 will only = false if it is a number, strings with zero typed in them will convert to "true"
alert (Boolean (''));
alert (Boolean(null))
//All the above convert to "false"

//ALWAYS CAPITALIZE CONVERSION