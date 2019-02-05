// there are several ways to create functions in js

// 1st way to make a function
// js does not support overloading
function hello(){
    console.log("Hello everyone");
}

hello();

// to store a function in a variable
// we are storing code within a variable
// the code is the value
let hola = function() {
    console.log("Hola");
}
console.log(hola); // logs f() {}

hola(); // always remember to invoke functions
// this is also an anonymous function
// b/c we never actually gave the function a name
// aka function expression
let add = function(num1, num2){
    console.log(num1+num2);
    return num1+num2;
}

add(1, 2);
console.log(add(70, 50));

// arrow notation
let gutentag = () => {
    console.log("gutentag");
}

gutentag();

let subtract = (num1, num2) => {
    return num1-num2;
}

console.log(subtract(1, 7));

// because functions can be stored in variables
// technically functions are also objects
// we can pass code around
// can put functions as parameters to other functions

// this function takes in two functions and calls them both
// we are passing in code to execute, not executed code or the return of one
function greetings(greet1, greet2) {
    greet1();
    greet2();
}

// this is called a callback function
// a callback function is a function that is passed as a parameter
// to another function
greetings(hola, gutentag);

let multiply = (num1, num2) => {
    return num1*num2;
}

// avoid making functions like this for right now
// store functions in a variable
function addminus(num1, num2, op1, op2) {
    
    console.log(op1(num1, num2));
    console.log(op2(num1, num2));

}

addminus(25, 5, add, multiply);


// a self-invoking function
// encapsulation
// anonymous IIFE functions Immediately Invoked Function Expression
(function(){
    console.log("I am a self-invoking function");
})();


