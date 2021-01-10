/* 
if a binary + is used with strings it will simply link the strings
*/


let stringychan = "my" + " sexy"; 
alert (stringychan);


/*If any of the operands is a string, the other is also converted to a string. This links the numbers as opposed to 
performing addition*/

alert(42 + "12"); //will come out as 4212

alert (1 + 5 + "43"); //In this example the operators work following each other, so 1 and 5 add to 6, and are linked with 43 to come out as 643

alert ('1' + 5 + 6); //Here, the string converstion occurs immediately, thus converting all Numbers to Strings. The result would be 156

//USING any other operator besides +, strings are converted to numbers

//UNARY + does nothing to numbers, but if operand isn't a number + will convert it to one.
//Use +[non-numerical value] to convert value to Number instead of Number(non-numarical value)
alert (+true);
alert (Number(true))
//These two do the same thing

//Increasing a variable by one is among the most common numerical operations
let counter = 3++;

alert (counter);

