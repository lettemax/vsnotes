
console.log("Hello, world!"); // semicolons are optional but good practice

// the scopes in javascript are defined by the declaration
// global scope: no declaration (in general, avoid)
// block scope: let or const 
// function scope: var (awful)

// the let keyword prevented the variable from escaping the block
{
    let x = 100;
    console.log(x);
}
// console.log(x); // causes reference error

// global variable
{
    y = 200;
    console.log(y);
}
console.log(y);

// var scope limits the variable to the function it was declared in, but it is not bound by those petty brackets
function awfulness() {
    {
        var v = 1000; 
    }
    console.log(v);
}

// console(v); // reference error

awfulness();

