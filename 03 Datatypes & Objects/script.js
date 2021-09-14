/*Data-types are divided into these types:
1. Strings(It can be name or a sentence)
2. Numbers(It can be any number)
3. Boolean(It can be true or false)
4. Null(Null means the element whose value is declared to variable but is nothing)
5. Undefined(Undefined means that there doesn't exist anything. means no declaration of value is done)
6. Object(The Object is the element or the thing we define in the function and that does hold a property and methods)
7. Symbol(These are extremely rarely used)*/

// creating a variable using the var keyword
var variableName = 'Hello';

// creating a variable using let keyword
let variableName2 = 'boy';

// creating a variable using let keyword
const variableName3 = 'hows you';

console.log(variableName);
console.log(variableName2);
console.log(variableName3);

// Variable naming
// 1. the name should be unique
// 2. the nam should be not any reserve keyword
// 3. the name must start with a character, underscore or a $ sign



// String
const examplestring = 'Hello String';
console.log(examplestring);
// The value that will be printed is the type of string datatype

// There are three types of strings
// 1. Single quotes
const singlequotes = 'Hello!';
console.log(singlequotes);

// 2. Double quotes
const doublequotes = "Hello!!";
console.log(doublequotes);

// 3. Backticks
const name = `Jane`
const backticks = `Hello, ${name}, welcome`; // backticks allow us to join strings easily inside the backticks
console.log(backticks);


// typeof
// It tells which type of datatype is specified
// for eg
console.log(typeof name);


// Numbers
// JavScript is really friendly when it come to numbers
// JavaScript holds both the decimal numbers and the float numbers
const wholeNumber = 5;
const decimalNumber = 0.5;

const add = wholeNumber + decimalNumber;
const subtract = wholeNumber - decimalNumber;
const product = wholeNumber * decimalNumber;
const divide = wholeNumber / decimalNumber;
console.log(add);
console.log(subtract);
console.log(product);
console.log(divide);
// If we get the result as NaN then it means Not a Number. It is given as output because when result comes not a appropriate result then it will be the output


// Booleans
// can have two possible value - true or false
// true - yes, correct, 1
//  false - incorrect, no, 0
const iscool = true;
console.log(iscool);
console.log(typeof iscool);

if(iscool){
    console.log("Hi man, you're cool");
} else{
    console.log('Oh, hi...');
}
const age = 20;
console.log(age > 18);



// Null
const age1 = null;
console.log(age1);



// Undefined
let x;

console.log(x);

//-------------------------------------------------------------------------------------------------------------------------

// Objects //

const person = {
    name:'John', // object properties are in curly braces
    age: 25,
}
console.log(person);

// Dot notation
console.log(person.name);
console.log(person.age);

//Arrays
const arr = [1, 2, 3, 4];
console.log(arr);

//Date
const date = new Date();
console.log(date);

/*Statically typed languages
int number = 5; statically declared in C */

/*Dynamically typed languages
let message = 'Hello world';
console.log(typeof message);
message = 5;
console.log(typeof message); //and now the value will be changed. That's called dynamically typed
*/

// --------------------------------------------------------------------------------------------------------------
//Comparison Operators ==> true/false
const u = 11;
const v = 10;

// Greater than
console.log(u > v);
// Greater than or equal to
console.log(u >= v); // always a boolean value
// Less than
console.log(u < v);
//less than or equal
console.log(u <= v);

//Is equal
console.log(u == v);

// Not equal
console.log(u != v);

// Strict equality
console.log(u === v);

// Strict inequality
console.log(u !== v);

// Strict equality vs Loose equality
/* Strict equality is used in Javascript because it focus on the values and datatype of the object also during compare.
Loose equality doesn't focus on the datatype of the object during compare. 

we can see in the example
a = 5;
b = "5";

console.log(a == b); (true) // datatype is not focussed
console.log(a === b); (false) // datatype is focussed

// The Good ones !== ===
// The evil ones != ==

Examples
console.log('' == '0'); //false
console.log('' == 0); //true
console.log('0' == 0); //true

console.log(false == 'false'); //false
console.log(false == '0'); //true

Moral: Always use 3 equal signs in javascript until you find a good reason to use 2

Hence proved */

//-------------------------------------------------------------------------------------------------------------------------------------------

// Logical Operators
// AND && ==> ALl operands are true
console.log((2+1) == (1+2) && (3+4) == (4+3));
//OR || ==> Whether atleast one operand is true
console.log(true || false);
//NOT ! ==> converts true to false and false to true
console.log(!false);
