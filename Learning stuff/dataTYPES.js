/*There are eight basic data types in Javascript
Any type of data may be placed into a variable(let)
Variables do not use '' */
"use strict";
let thisThing = 'Leon';
    thisThing = 11038;

/*NUMBERS
The number type represents interger and floating point numbers */

let lmnop = 11037;
lmnop = 110.37;
lmnop = (1/0); //This represents infinity
lmnop = (infinity ); //Also can be used for infinity
lmnop = (-infinity); //Negative infinity is also applicable

/* NaN is a special numerical value meaning Not a Number*/
//Run below

alert ('Jake' / 2+54); //Theoretically running this will get no results as 'Jake' isn't a variable

/*BIGINT is for REALLY big numbers and extremely precise calculations
Cryptography or etc
Used for representing intergers of arbitrary quantity
used for any interger reprsenting more than (2^53-1) 9007199254740991 or less than -(2^53-1)*/

let BigInt = 111122222222222222222222222222222222222222222222n;

/*STRING
A string in JS is quoted with double or single quotes or backticks
There is practically no difference in Single and double quotation. Use based on character inclusion for string*/
alert("How're you doing?");

//To make outside quotes ignore apostrophes as quotes, place a \ before it.

alert('No, I mean it\'s "pink," Leon!')  //Will output as "No, I mean it's "pink," Leon!"

/*Backticks will allow you to include ${} in which you can put any expression(a unit of code that can be evaluated)
and the expression will be evaluated  */
alert (`Hello, ${thisThing}!`); //Will output as "Hello, Leon!"
alert (`the result is ${2+5}`) 

/*BOOLEANS 
There are only 3 types of Booleans, true and false, and comparisons like < and >*/

let thisboolean = 3<1; 
let thisOtherBoolean = false

/*The NULL value

The null value is its own data type.
"Null," refers to a non-existing object or a "null pointer"
It simply means nothing, empty, or value unknown.*/

let meaninglessVariable = null

/*The UNDEFINED value

The undefined value is also its own value.
When a variable is declared but not assigned, its value is undefined.
*/

let thisOneUndefinedVariable; //This variable is undefined

/*OBJECT

more on objects later*/

/*TYPEOF operator
Returns the type of argument */

typeof 0

/*Interactions ALERT, PROMPT, and CONFIRM
*/

 //<-- Alert simply displays the expression in a box where you can click ok to remove it



