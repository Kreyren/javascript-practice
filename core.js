/*
	STANDARD
		END-OF-LINE
		- Always use semicolons on the end-of-the line since javascript interpreters has ASI (Automatic Semicolon Inserter) that may not be reliable in complex statements
			- This has a minor negative impact on the file size assuming that we have to store more characters that are not always needed
		FILE SIZE
		- For size the indentation is a concern (increases the file size by minority)
			- Relevant: https://github.com/babel/minify
			- Relevant: babili?
			- Relevant: Terser (https://try.terser.org/) - Reduces the file size -> Always use
		VARIABLE NAMES
		- Use camel case where appropriate (FIXME: Standard revaluation needed)
			- Long variable names like 'helloHowAreYouTodayIAmFine' are hard to read and needs to be standardized


*/

// Researched from https://youtu.be/PkZNo7MFNFg?list=TLPQMTYwNTIwMjAYbMSt0gus3w

// Noob-pass - Outputs in the console
console.log("hello world");

/*
	Data-Types:
		- Undefined -> Not defined, duh
		- Null -> Black hole
		- Boolean -> True/false
		- String -> String
		- Symbol -> Immutable primitive value
		- Number -> numbers
		- Object -> Key value pears(?)
*/

// VARIABLES

// Can be used in the whole program (same to export in shell)
var number = 1
var blackHole = null
var boolean = true
var myString = "KREYREN!"
var MySymbol = "What the fuck"
var Object = "What the fuck"

// Only used within the scope of declaration
let MyOtherString = "nothing"

// Read-only variable
const pi = 3.14

// Can be set to other data-types later
something = 1

// OPERATORS
var someNum = 1 + 1; // Defines someNum with number '2'
var someNum = 2 - 1; // Defines someNum with number '1'
var someNum = 2 * 2; // Defines someNum with number '4'
var someNum = 4 / 2; // Defines someNum with number '2'

// INCREMENTING NUMBERS
var myVar = 87;
// FIXME: STANDARD
myVar = myVar + 1; // Inefficient, do not use
myVar++; // set value of myVar to '88'

// DECREMENTING NUMBERS
var myVar = 11;
myVar = myVar 1 - 1; // Inefficient
myVar--; // set value of myVar to '10'

// DECIMAL NUMBERS
var decimal = 5.7;

// MULTIPLYING/DEVIDING DECIMALS
var something = 2.0 * 2.5; // Stores value of '5' as number
var something = 4.4 / 2.0; // Stores value of '2.2' as number

// REMINDER
/// Generally used to determine if number is equal or odd
/// If you can devide number by 2 and the remainder is 0 -> Number is even
remainder = 11 % 3; // Stores value of '2' as number

// COMPOUND ASSIGNMENT
// FIXME: Standard update required
a = a + 12; // Inefficient
a += 12; // Same this as above, but better

a = a - 6; // Inefficient
a -= 6; // Same this as above, but better

a = a * 5;
a *= 5;

a = a / 5;
a /= 5;

// DECLARING VARIABLES
var something = "nothing";
var something = "Nothing \"something\""; // Double quotes within double quotes to implement the string properly

// Alternative way to implement double-quoted things 
var something = 'i do not care about double quotes look """"""", eat shit';

var something = `I don't care for either of the quotes look ''''' """"", eat shit`;

// ESCAPING CHARACTERS
/*
	\' single quote
	\" double quote
	\\ backslash
	\n newline
	\r carriage return shit
	\t tab
	\b backspace
	\f form feed
*/

// CONCATENATING STRINGS
var string = "hello" + "world"; // Stores Helloworld

// Alternatively
var string = "hello";
string += "world";

var something = "nothing";
var string = "hello" + "world" + something; // outputs 'helloworldnothing'

// FINDING LENGHT OF A STRING
var something = "Ada";
lenght = something.lenght; // returns the number of characters (stores number '3')

// BRACKET NOTATIONS
var something = "Ada";
nothing = something[0]; // Stores 'A'

// STRING IMMUTABILITY
// Watch https://youtu.be/PkZNo7MFNFg?list=TLPQMTYwNTIwMjAYbMSt0gus3w&t=2040 i am lazy to write

// Paused at https://youtu.be/PkZNo7MFNFg?list=TLPQMTYwNTIwMjAYbMSt0gus3w&t=2138

