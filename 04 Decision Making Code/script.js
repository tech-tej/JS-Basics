/* Mow we are going to study logical control flow using the 
1. If statements
2. Truthy/Falsy values
3. Switch Statements
4. Ternary Operators
*/

//1. If statements work on the logic of conditions only
const age = 18; //change the value of age to see the changed output values
if(age > 18){
    console.log("You may enter");
} else if (age === 18){
    console.log("You just turned 18, welcome");
} 
else{
    console.log("Go home kiddo!");
}

// If we want to write a sequence of number then we can write using for or while loop

// Example of while loop
// While loop is used when conditions are given and the code will run until the condition is satisfied.
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}
// The for loop
// Don't write DRY code which means don't repeat yourself. For loop is used when something repetitive is done

for(j = 0;j < 10; j++){
    console.log(j);
}
