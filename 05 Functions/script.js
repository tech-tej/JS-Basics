// Functions: A block of code ==> it performs a task 
//  A function decoration(defining a function)
function square(number){
    console.log("I'm here");
    return number * number; // you can give any name to a function but not a javascript reserved keyword
}
// ^ return is very important for the function to declare what the function will return

// A Function call(invoking or calling or executing a function)
const result = square(5);
console.log(result); 


/* Function declaration
1. A function declaration
function name(params){
    statements
}

2. A function expression
const name = function(params){
    statements
}

3. An arrow function (most modern way to declare a function)
const name = (params) => {
    statements
}

name();
*/

function sayHi(name){
    console.log(`Hi, ${name}`);
}
sayHi('Buddy');
sayHi('Bro');


// Returns undefined
function add(a, b){
    return a + b;
}

const sum = add(2, 3);
console.log(sum);

// example 2
function test(){
    console.log("I don't care")
    return true;
    return false;
    console.log("Where you will see this?")
}
const bool = test();
console.log(bool); // what do you think which one will returned? Yeah, true will be returned because after first return function will be finished. After a return no further code will run and no further value of output will be given


// ARROW FUNCTION
const squarE = (number) => {
    return number*number;
}
const square1 = (number1) => number1 * number1;

const result1 = square1(11);
const resulT = squarE(5);

console.log(resulT);
console.log(result1);