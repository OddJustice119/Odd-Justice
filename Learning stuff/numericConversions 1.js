let thestring = "24";
alert(typeof thestring);

let thisnum = Number(thestring) // thisnum will change the string 24 into a number

alert(typeof thisnum)

/*
UNDEFINED becomes NaN
NULL becomes 0
TRUE becomes 1
FALSE becomes 0
Strings with letters won't convert to numbers*/

alert(Number("212"));  //Rewrites the string to a number also


//ALWAYS CAPITALIZE Number FOR CONVERSION