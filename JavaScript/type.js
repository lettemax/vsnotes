// JavaScript has datatypes
// it has primitives and objects
// primitives
let boolean = true; // boolean
let nothing = null; // null
let adam = "Adam R"; // string
let x; // undefined type
let number = 1000; // number type

console.log(typeof(adam)); // logs 'String'
console.log(typeof(nothing)); // logs 'Object'
console.log(typeof(x)); // logs 'undefined'


// truthy falsy and type coercion
let num1 = 100;
let num2 = 100;
let num3 = "100";

console.log(num1==num2); // true
console.log(num1==num3); // true, with == js performs type coercion (kind of like it's trying to ignore the type and see if two things are the same)
console.log(num1===num3); // false, with === the type of the variable is enforced

let tboo = true;
let fboo = false;

console.log(tboo=="true"); // false
console.log(false=="false"); // false

// "" empty strings are considered falsy
console.log(false==""); // true

// [] empty arrays as well
console.log(false==[]); // true

// 0..
console.log(false==0);

// "0"..
console.log(false=="0");

// null
console.log(false==null);

console.log(null==null); // true

let result = 100/0;
console.log(result); // logs 'Infinity'
console.log(typeof(result)); // logs 'number'

// Not a number is of type number
// NaN is always false, even against itself
let b = NaN;
let c = NaN;
console.log(typeof(b));
console.log(b==b); // false
console.log(b==c); // false
console.log(100/0==100/0); // true






